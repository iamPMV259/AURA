
from pydantic import BaseModel, HttpUrl


class InstitutionBase(BaseModel):
    name: str
    website: HttpUrl | None = None


class InstitutionCreate(InstitutionBase):
    pass


class InstitutionOut(InstitutionBase):
    id: int
    is_verified: bool

    class Config:
        from_attributes = True
