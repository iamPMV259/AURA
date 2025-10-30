
from app.models import Base
from sqlalchemy import Boolean, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Institution(Base):
    __tablename__ = "institutions"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    website: Mapped[str | None]
    is_verified: Mapped[bool] = mapped_column(Boolean, default=False)

    credentials: Mapped[list["Credential"]] = relationship(
        back_populates="issuer", cascade="all, delete-orphan"
    )
