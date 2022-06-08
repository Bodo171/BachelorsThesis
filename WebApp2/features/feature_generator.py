import json
import pathlib
from abc import ABC, abstractmethod

"""
    Ensure the feature order is the same as in the model
"""


class FeatureGenerator(ABC):
    @abstractmethod
    def generate(self, text):
        pass


class TokenFeatureGenerator(FeatureGenerator):
    @staticmethod
    def __load_tokens():
        return json.load(open(str(pathlib.Path(__file__).parent.resolve()) + '/storage/tokens.json', 'r'))

    def generate(self, text):
        features = []
        tokens = self.__load_tokens()
        for token in tokens:
            features.append(int(token in text))
        return features



class PlainTextFeatureGenerator(FeatureGenerator):
    @staticmethod
    def __load_tokens():
        return json.load(open(str(pathlib.Path(__file__).parent.resolve()) + '/storage/tokens.json', 'r'))

    def generate(self, text):
        return text
