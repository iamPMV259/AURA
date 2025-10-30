
from app.db.session import get_session
from app.models.credential import Credential
from app.models.institution import Institution
from app.models.skill_wallet import SkillWallet
from app.schemas.credential import CredentialCreate, CredentialOut
from app.services.credentials import build_vc_stub
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/", response_model=CredentialOut)
async def issue_credential(
    cred_in: CredentialCreate, db: AsyncSession = Depends(get_session)
):
    # verify issuer & wallet exist
    issuer = await db.get(Institution, cred_in.issuer_id)
    wallet = await db.get(SkillWallet, cred_in.wallet_id)
    if not issuer or not wallet:
        raise HTTPException(status_code=400, detail="Issuer or wallet not found")

    vc_payload = build_vc_stub(
        subject_wallet_id=wallet.id,
        issuer_id=issuer.id,
        title=cred_in.title,
        description=cred_in.description or "",
        extra=cred_in.metadata or {},
    )

    cred = Credential(
        title=cred_in.title,
        description=cred_in.description,
        metadata=vc_payload,
        issuer_id=issuer.id,
        wallet_id=wallet.id,
    )
    db.add(cred)
    await db.commit()
    await db.refresh(cred)
    return cred


@router.get("/wallet/{wallet_id}", response_model=list[CredentialOut])
async def list_wallet_credentials(wallet_id: int, db: AsyncSession = Depends(get_session)):
    stmt = select(Credential).where(Credential.wallet_id == wallet_id)
    res = await db.execute(stmt)
    return res.scalars().all()
