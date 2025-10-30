
from app.db.session import get_session
from app.models.opportunity import Opportunity
from app.schemas.opportunity import OpportunityCreate, OpportunityOut
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/", response_model=OpportunityOut)
async def create_opportunity(
    opp_in: OpportunityCreate, db: AsyncSession = Depends(get_session)
):
    opp = Opportunity(
        title=opp_in.title,
        description=opp_in.description,
        required_skills=opp_in.required_skills or {},
    )
    db.add(opp)
    await db.commit()
    await db.refresh(opp)
    return opp


@router.get("/", response_model=list[OpportunityOut])
async def list_opportunities(db: AsyncSession = Depends(get_session)):
    res = await db.execute(select(Opportunity).where(Opportunity.is_active == True))  # noqa
    return res.scalars().all()
