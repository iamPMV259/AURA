
from datetime import datetime

from pydantic import BaseModel


class CredentialBase(BaseModel):
    title: str
    description: str | None = None
    metadata: dict | None = None


class CredentialCreate(CredentialBase):
    wallet_id: int
    issuer_id: int


class CredentialOut(CredentialBase):
    id: int
    issued_at: datetime
    is_revoked: bool
    issuer_id: int
    wallet_id: int

    class Config:
        from_attributes = True
