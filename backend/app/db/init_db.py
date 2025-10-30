
import asyncio

from app.db.session import engine
from app.models import base  # noqa


async def init_db():
    # for sqlite only: create tables
    async with engine.begin() as conn:
        await conn.run_sync(base.Base.metadata.create_all)


if __name__ == "__main__":
    asyncio.run(init_db())
