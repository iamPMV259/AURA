
"""
This is a placeholder AI service.
In production, you would call your LLM / vector DB / skills ontology here.
"""
from app.models.credential import Credential
from app.models.skill_wallet import SkillWallet
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

# toy mapping from credential title to skills
CRED_TO_SKILLS = {
    "Python Basics": ["python", "programming"],
    "Data Analysis": ["pandas", "statistics"],
    "Linear Algebra": ["linear-algebra", "math"],
    "Intro to AI": ["ai-fundamentals", "ml"],
}


TARGET_ROLE = {
    "AI Engineer": ["python", "linear-algebra", "ml", "data-structures"],
    "Data Analyst": ["pandas", "statistics", "sql"],
}


async def detect_skill_gaps(db: AsyncSession, wallet_id: int):
    wallet = await db.get(SkillWallet, wallet_id)
    if not wallet:
        return None
    stmt = select(Credential).where(Credential.wallet_id == wallet_id)
    res = await db.execute(stmt)
    creds = res.scalars().all()

    learned = set()
    for c in creds:
        titleskills = CRED_TO_SKILLS.get(c.title, [])
        learned.update(titleskills)

    gaps = {}
    for role, required in TARGET_ROLE.items():
        missing = [s for s in required if s not in learned]
        gaps[role] = missing

    return gaps


async def recommend_learning_path(db: AsyncSession, wallet_id: int):
    gaps = await detect_skill_gaps(db, wallet_id)
    if gaps is None:
        return None
    recs = []
    for role, missing in gaps.items():
        for m in missing:
            # map missing skill to placeholder course
            recs.append(
                {
                    "role": role,
                    "skill": m,
                    "course_suggestion": f"Learn {m} (recommended)",
                    "provider": "AURA-partner",
                }
            )
    return recs
