import pathlib
from typing import Dict, Type

from model.ml_model import MLModel


class ModelRepository:
    def __init__(self, label_dict: Dict[str, str], model_type: Type[MLModel]):
        self._models = {}
        for label, path in label_dict.items():
            self._models[label] = model_type(str(pathlib.Path(__file__).parent.resolve()) + "/storage/" + path)

    def get_prediction(self, label: str, feature_set) -> float:
        return self._models[label].predict(feature_set)
