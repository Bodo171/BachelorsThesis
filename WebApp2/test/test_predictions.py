import unittest

import service_config


class MyTestCase(unittest.TestCase):
    SAMPLE_STRING = "John has a tree with n nodes"

    def test_get_top_preds(self):
        service = service_config.get_default_service()
        predictions = service.get_top_preds(self.SAMPLE_STRING)
        assert "trees" in predictions

    def test_prediction(self):
        labels = ["trees", "geometry", "greedy"]
        service = service_config.get_default_service()
        for label in labels:
            assert 0 <= service.predict(label, self.SAMPLE_STRING) <= 1


if __name__ == '__main__':
    unittest.main()
