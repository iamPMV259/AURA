
from app.core.security import decode_token
from app.db.session import get_session
from app.models.user import User
from app.schemas.user import UserOut
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


async def get_current_user(
    token: str, db: AsyncSession
) -> User:
    user_id = decode_token(token)
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid token")
    stmt = select(User).where(User.id == int(user_id))
    res = await db.execute(stmt)
    user = res.scalar_one_or_none()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/me", response_model=UserOut)
async def read_me(
    db: AsyncSession = Depends(get_session),
    authorization: str = Depends(lambda: None),
):
    # simple token extractor for example
    if not authorization:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.replace("Bearer ", "")
    user = await get_current_user(token, db)
    return user
