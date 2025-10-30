# Dockerfile
FROM python:3.12-slim AS base

# Set workdir
WORKDIR /app

# Install system deps (for postgres, psycopg, build)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (better caching)
COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt

# Copy app
COPY app /app/app

# Expose FastAPI port
EXPOSE 8000

# Env (override in docker-compose)
ENV DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/aura
ENV JWT_SECRET_KEY=CHANGE_ME
ENV JWT_REFRESH_SECRET_KEY=CHANGE_ME_TOO

# Run with Uvicorn (can switch to gunicorn+uvicorn for prod) :contentReference[oaicite:3]{index=3}
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
