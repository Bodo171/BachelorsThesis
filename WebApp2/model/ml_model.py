import pickle
import sklearn
from abc import ABC, abstractmethod


class MLModel(ABC):
    def __init__(self, path: str):
        self._model = pickle.load(open(path, "rb"))

    @abstractmethod
    def predict(self, feature_set) -> float:
        pass
