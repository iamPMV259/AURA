
from app.db.session import get_session
from app.models.institution import Institution
from app.schemas.institution import InstitutionCreate, InstitutionOut
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/", response_model=InstitutionOut)
async def create_institution(
    inst_in: InstitutionCreate, db: AsyncSession = Depends(get_session)
):
    inst = Institution(name=inst_in.name, website=inst_in.website)
    db.add(inst)
    await db.commit()
    await db.refresh(inst)
    return inst


@router.get("/", response_model=list[InstitutionOut])
async def list_institutions(db: AsyncSession = Depends(get_session)):
    res = await db.execute(select(Institution))
    return res.scalars().all()
