
from app.db.session import get_session
from app.models.skill_wallet import SkillWallet
from app.schemas.skill_wallet import SkillWalletCreate, SkillWalletOut
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/", response_model=SkillWalletOut)
async def create_wallet(
    wallet_in: SkillWalletCreate, db: AsyncSession = Depends(get_session)
):
    wallet = SkillWallet(
        owner_id=wallet_in.owner_id,
        did=wallet_in.did,
        extra=wallet_in.extra or {},
    )
    db.add(wallet)
    await db.commit()
    await db.refresh(wallet)
    return wallet


@router.get("/user/{user_id}", response_model=SkillWalletOut)
async def get_user_wallet(user_id: int, db: AsyncSession = Depends(get_session)):
    stmt = select(SkillWallet).where(SkillWallet.owner_id == user_id)
    res = await db.execute(stmt)
    wallet = res.scalar_one_or_none()
    if not wallet:
        raise HTTPException(status_code=404, detail="Wallet not found")
    return wallet
