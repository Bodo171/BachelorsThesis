from typing import List, Dict

from sqlalchemy.orm import Session

from prediction_repository.prediction_repository import PredictionRepository
from prediction_repository.sql.engine import engine
from .prediction import Prediction
from .statement import Statement


class PredictionSqlRepository(PredictionRepository):
    def add_prediction(self, statement_id: int, label: str, probability: float) -> int:
        with Session(engine) as session:
            prediction = Prediction(label=label, value=probability, statement_id=statement_id)
            session.add(prediction)
            session.flush()
            ret = prediction.id
            session.commit()
        return ret

    def add_statement(self, statement: str) -> int:
        with Session(engine) as session:
            statement = Statement(text=statement)
            session.add(statement)
            session.flush()
            ret = statement.id
            session.commit()
        return ret

    def get_predictions(self, statement_id: int) -> List[Prediction]:
        with Session(engine) as session:
            return session.query(
                Prediction
            ).filter(
                Prediction.statement_id == statement_id
            ).all()

    def get_prediction_dict(self, statement_id: int) -> Dict[str, float]:
        predictions = self.get_predictions(statement_id)
        return {prediction.label: prediction.value for prediction in predictions}
