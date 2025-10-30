
from app.api.v1.api import api_router
from app.core.config import settings
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AURA Backend",
    version="0.1.0",
    description="Backend for AURA (AI-Powered Unified-Record Assistant)",
)

# CORS for https://aura-ui.vercel.app
origins = [
    "http://localhost:3000",
    "https://aura-ui.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/", tags=["health"])
async def health():
    return {"status": "ok", "service": "aura-backend"}
