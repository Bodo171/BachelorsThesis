import json
from abc import ABC, abstractmethod

"""
    Ensure the feature order is the same as in the model
"""


class FeatureGenerator(ABC):
    @abstractmethod
    def generate(self, text):
        pass


class TokenFeatureGenerator(FeatureGenerator):
    def generate(self, text):
        features = []
        tokens = json.load('storage/tokens.json')
        for token in tokens:
            features.append(int(token in text))
        return features


