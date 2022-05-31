from abc import ABC, abstractmethod
from typing import Dict


class PredictionRepository(ABC):
    @abstractmethod
    def add_prediction(self, statement_id: int, label: str, probability: float) -> int:
        pass

    @abstractmethod
    def add_statement(self, statement: str) -> int:
        pass

    @abstractmethod
    def get_prediction_dict(self, statement_id: int) -> Dict[str, float]:
        pass
