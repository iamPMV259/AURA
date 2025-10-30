
from datetime import datetime

from app.models import Base
from sqlalchemy import JSON, Boolean, DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Credential(Base):
    __tablename__ = "credentials"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(255))
    description: Mapped[str | None]
    issued_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    metadata: Mapped[dict] = mapped_column(JSON, default=dict)
    is_revoked: Mapped[bool] = mapped_column(Boolean, default=False)

    issuer_id: Mapped[int] = mapped_column(ForeignKey("institutions.id"))
    wallet_id: Mapped[int] = mapped_column(ForeignKey("skill_wallets.id"))

    issuer: Mapped["Institution"] = relationship(back_populates="credentials")
    wallet: Mapped["SkillWallet"] = relationship(back_populates="credentials")
