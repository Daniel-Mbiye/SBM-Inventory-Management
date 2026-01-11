from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os


load_dotenv()

class Settings:
    is_production: bool = os.getenv("PRODUCTION", "false").lower() == "true"

    # Logic to fetch the DB_URL
    if is_production:
        DATABASE_URL = os.getenv("DB_URL")
    else:
        DATABASE_URL =  "postgresql://postgres:1234@localhost:5432/sbm"


settings = Settings()

# db_url = "postgresql://postgres:1234@localhost:5432/sbm"
# db_url = os.getenv("DATABASE_URL")

engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)