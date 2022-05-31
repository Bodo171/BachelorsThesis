from sqlalchemy import MetaData, Column, ForeignKey, Table

from prediction_repository.sql.engine import engine

from sqlalchemy import Integer, Float
from sqlalchemy import String



meta = MetaData()

statement = Table(
   'statement', meta,
   Column('id', Integer, primary_key=True, autoincrement=True),
   Column('text', String(1024)),
)
prediction = Table(
   'prediction', meta,
   Column('id', Integer, primary_key=True, autoincrement=True),
   Column('label', String(32)),
   Column('value', Float),
   Column('statement_id', Integer, ForeignKey("statement.id"), nullable=False)
)

meta.create_all(engine)
