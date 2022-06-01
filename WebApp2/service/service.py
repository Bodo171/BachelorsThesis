from functools import reduce
from typing import Dict, Type

from model.ml_model import MLModel
from model_repository.ModelRepository import ModelRepository
from features.feature_generator import FeatureGenerator
from prediction_repository.prediction_repository import PredictionRepository
from webparsing.parser_factory import ParserFactory


class Service:
    def __init__(
        self,
        model_to_path: Dict[str, str],
        model_type: Type[MLModel],
        feature_generator: Type[FeatureGenerator],
        prediction_repository: PredictionRepository
    ):
        self._model_to_path = model_to_path
        self._model_repository = ModelRepository(model_to_path, model_type)
        self._feature_generator = feature_generator()
        self._prediction_repository = prediction_repository

    def predict(self, label, text):
        return self._model_repository.get_prediction(label, self._feature_generator.generate(text))

    def add_statement_with_predictions(self, statement, predictions) -> int:
        statement_id = self._prediction_repository.add_statement(statement)
        for prediction in predictions:
            self._prediction_repository.add_prediction(
                statement_id,
                prediction[0],
                prediction[1]
            )
        return statement_id

    def get_top_preds(self, text):
        predictions = [(label, self.predict(label, text)) for label in self._model_to_path]
        predictions.sort(key=lambda t: t[1], reverse=True)
        labels = [prediction[0] for prediction in predictions]
        statement_id = self.add_statement_with_predictions(text, predictions)
        print(predictions)
        true_count = 0
        for x in predictions:
            if x[1] > 0.5:
                true_count += 1
        if not true_count:
            return labels[:3], statement_id
        return labels[:true_count], statement_id

    def get_preds_for_statement_id(self, statement_id):
        return self._prediction_repository.get_prediction_dict(statement_id)

    @staticmethod
    def get_statement_for_url(url):
        parser = ParserFactory.get_parser(url)
        return parser.parse(url)

