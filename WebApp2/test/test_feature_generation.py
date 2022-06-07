import unittest

import service_config
from features.feature_generator import TokenFeatureGenerator


class TestFeatureGeneration(unittest.TestCase):
    SAMPLE_STRING = "John has a tree with n nodes"

    def test_feature_generation(self):
        feature_gen = TokenFeatureGenerator()
        features = feature_gen.generate("directed string")
        assert features[0] == 1 and features[1] == 1 and sum(features) == 2


if __name__ == '__main__':
    unittest.main()
