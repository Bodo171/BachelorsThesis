from typing import Dict, List

from features.feature_generator import TokenFeatureGenerator
from model.decision_tree_model import DecisionTreeModel
from prediction_repository.sql.prediction_sql_repository import PredictionSqlRepository
from service.service import Service

DEFAULT_LABELS = [
    'probabilities',
    'meet-in-the-middle',
    'fft',
    'dfsandsimilar',
    'sortings',
    'expressionparsing',
    'bruteforce',
    'dsu',
    'strings',
    'datastructures',
    'graphmatchings',
    'implementation',
    '2-sat',
    'graphs',
    'bitmasks',
    'geometry',
    'trees',
    'flows',
    'ternarysearch',
    'games',
    'constructivealgorithms',
    'stringsuffixstructures',
    'divideandconquer',
    'schedules',
    'hashing',
    'interactive',
    'matrices',
    'shortestpaths',
    'math',
    'twopointers',
    'greedy',
    'dp',
    'combinatorics',
    'numbertheory',
    'binarysearch',
    'chineseremaindertheorem'
]


def get_default_storage_dict(labels: List[str]) -> Dict[str, str]:
    return {label: f"{label}.p" for label in labels}


def get_default_service():
    return Service(
        get_default_storage_dict(DEFAULT_LABELS),
        DecisionTreeModel,
        TokenFeatureGenerator,
        PredictionSqlRepository()
    )
