from typing import Dict, Type

from model.ml_model import MLModel
from model_repository.ModelRepository import ModelRepository
from features.feature_generator import FeatureGenerator


class Service:
    def __init__(
        self,
        model_to_path: Dict[str, str],
        model_type: Type[MLModel],
        feature_generator: Type[FeatureGenerator]
    ):
        self._model_to_path = model_to_path
        self._model_repository = ModelRepository(model_to_path, model_type)
        self._feature_generator = feature_generator()

    def predict(self, label, text):
        return self._model_repository.get_prediction(label, self._feature_generator.generate(text))

    def get_top_preds(self, text):
        predictions = [(label, self.predict(label, text)) for label in self._model_to_path]
        predictions.sort(key=lambda t: t[0], reverse=True)
        labels = [prediction[0] for prediction in predictions]
        true_count = sum(prediction[1] > 0.5 for prediction in predictions)
        if not true_count:
            return labels[:3]
        return labels[:true_count]



