
from app.db.session import get_session
from app.services.ai import detect_skill_gaps, recommend_learning_path
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.get("/skill-gaps/{wallet_id}")
async def skill_gaps(wallet_id: int, db: AsyncSession = Depends(get_session)):
    gaps = await detect_skill_gaps(db, wallet_id)
    if gaps is None:
        raise HTTPException(status_code=404, detail="Wallet not found or empty")
    return {"wallet_id": wallet_id, "skill_gaps": gaps}


@router.get("/recommendations/{wallet_id}")
async def recommendations(wallet_id: int, db: AsyncSession = Depends(get_session)):
    recs = await recommend_learning_path(db, wallet_id)
    if recs is None:
        raise HTTPException(status_code=404, detail="Wallet not found")
    return {"wallet_id": wallet_id, "recommendations": recs}
