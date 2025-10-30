
from app.models import Base
from sqlalchemy import JSON, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


class SkillWallet(Base):
    __tablename__ = "skill_wallets"

    id: Mapped[int] = mapped_column(primary_key=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    # store DID, VC proofs, etc.
    did: Mapped[str | None]
    extra: Mapped[dict] = mapped_column(JSON, default=dict)

    owner: Mapped["User"] = relationship(back_populates="skill_wallet")
    credentials: Mapped[list["Credential"]] = relationship(
        back_populates="wallet", cascade="all, delete-orphan"
    )
