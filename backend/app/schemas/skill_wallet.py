
from pydantic import BaseModel


class SkillWalletBase(BaseModel):
    did: str | None = None
    extra: dict | None = None


class SkillWalletCreate(SkillWalletBase):
    owner_id: int


class SkillWalletOut(SkillWalletBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True
