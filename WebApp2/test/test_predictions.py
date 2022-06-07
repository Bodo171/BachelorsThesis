import unittest

import service_config

import service_config
from features.feature_generator import TokenFeatureGenerator
from model.decision_tree_model import DecisionTreeModel
from model.ml_model import MLModel
from prediction_repository.prediction_repository import PredictionRepository
from service.service import Service


class TestPredictionRepository(PredictionRepository):
    def __init__(self):
        self._predictions = []
        self._statements = []

    def add_prediction(self, statement_id: int, label: str, probability: float) -> int:
        self._predictions.append({
            "statement_id": statement_id,
            "label": label,
            "probability": probability
        })
        return len(self._predictions) - 1

    def add_statement(self, statement: str) -> int:
        self._statements.append(statement)
        return len(self._statements) - 1

    def get_prediction_dict(self, statement_id):
        ret = {}
        for pred in self._predictions:
            if pred['statement_id'] == statement_id:
                ret[pred['label']] = ret[pred['probability']]
        return ret


class MockTreesModel(MLModel):
    def __init__(self, path: str):
        super().__init__(path)
        self._is_trees = 'tree' in path

    def predict(self, feature_set):
        print(self._is_trees)
        if feature_set[1] == 1:
            return 1 if self._is_trees else 0
        return 0

class MyTestCase(unittest.TestCase):
    SAMPLE_STRING = "John has a directed tree with n nodes"

    def get_test_service(self):
        return Service(
            service_config.get_default_storage_dict(service_config.DEFAULT_LABELS),
            MockTreesModel,
            TokenFeatureGenerator,
            TestPredictionRepository()
        )

    def test_get_top_preds(self):
        service = self.get_test_service()
        predictions = service.get_top_preds(self.SAMPLE_STRING)
        print(predictions[0])
        assert "trees" in predictions[0]

    def test_prediction(self):
        labels = ["trees", "geometry", "greedy"]
        service = service_config.get_default_service()
        for label in labels:
            assert 0 <= service.predict(label, self.SAMPLE_STRING) <= 1


if __name__ == '__main__':
    unittest.main()
