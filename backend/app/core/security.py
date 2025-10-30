
from datetime import datetime, timedelta
from typing import Any, Optional

from app.core.config import settings
from jose import JWTError, jwt


def create_access_token(subject: str | Any, expires_minutes: int | None = None) -> str:
    if expires_minutes is None:
        expires_minutes = settings.ACCESS_TOKEN_EXPIRE_MINUTES
    expire = datetime.utcnow() + timedelta(minutes=expires_minutes)
    to_encode = {"exp": expire, "sub": str(subject)}
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.ALGORITHM)


def create_refresh_token(subject: str | Any) -> str:
    expire = datetime.utcnow() + timedelta(
        minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES
    )
    to_encode = {"exp": expire, "sub": str(subject)}
    return jwt.encode(
        to_encode,
        settings.JWT_REFRESH_SECRET_KEY,
        algorithm=settings.ALGORITHM,
    )


def decode_token(token: str, refresh: bool = False) -> Optional[str]:
    secret = (
        settings.JWT_REFRESH_SECRET_KEY
        if refresh
        else settings.JWT_SECRET_KEY
    )
    try:
        payload = jwt.decode(token, secret, algorithms=[settings.ALGORITHM])
        return payload.get("sub")
    except JWTError:
        return None
