# app/schemas/opportunity.py
from datetime import datetime

from pydantic import BaseModel


class OpportunityBase(BaseModel):
    title: str
    description: str | None = None
    required_skills: dict | None = None


class OpportunityCreate(OpportunityBase):
    pass


class OpportunityOut(OpportunityBase):
    id: int
    created_at: datetime
    is_active: bool

    class Config:
        from_attributes = True
