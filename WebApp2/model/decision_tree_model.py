import numpy as np
from model.ml_model import MLModel


class DecisionTreeModel(MLModel):
    def __init__(self, path: str):
        super().__init__(path)

    def predict(self, feature_set) -> float:
        print(feature_set)
        return self._model.predict_proba(np.array(feature_set).reshape(1, -1))[0][1]
