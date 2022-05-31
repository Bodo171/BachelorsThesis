from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer, Float
from sqlalchemy import String

from .engine import Base


class Prediction(Base):
    __tablename__  = 'prediction'
    id = Column(Integer, primary_key=True, autoincrement=True)
    label = Column(String(32))
    value = Column(Float)
    statement_id = Column(Integer, ForeignKey("statement.id"), nullable=False)
