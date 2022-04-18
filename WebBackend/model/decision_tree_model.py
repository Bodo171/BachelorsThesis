from model.ml_model import MLModel


class DecisionTreeModel(MLModel):
    def __init__(self, path: str):
        super().__init__(path)

    def predict(self, feature_set) -> float:
        return self._model.predict_proba(feature_set)
