
from app.api.v1.endpoints import (
    ai,
    auth,
    credentials,
    institutions,
    opportunities,
    skill_wallet,
    users,
)
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(institutions.router, prefix="/institutions", tags=["institutions"])
api_router.include_router(credentials.router, prefix="/credentials", tags=["credentials"])
api_router.include_router(skill_wallet.router, prefix="/wallets", tags=["skill_wallet"])
api_router.include_router(opportunities.router, prefix="/opportunities", tags=["opportunities"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
