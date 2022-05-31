from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from .engine import Base


class Statement(Base):
    __tablename__  = 'statement'
    id = Column(Integer, primary_key=True, autoincrement=True)
    text = Column(String(1024))
