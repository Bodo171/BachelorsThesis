import torch
from torch import nn
from model.ml_model import MLModel
from sentence_transformers import SentenceTransformer


transformer = SentenceTransformer('all-MiniLM-L6-v2')


class SimpleNetwork(nn.Module):
    def __init__(self, input_size, hidden_layer_size, num_outputs):
        super(SimpleNetwork, self).__init__()
        self.relu = nn.ReLU()
        self.hidden = nn.Linear(in_features=input_size, out_features=hidden_layer_size)
        self.hidden2 = nn.Linear(in_features=hidden_layer_size, out_features=hidden_layer_size)
        self.hidden3 = nn.Linear(in_features=hidden_layer_size, out_features=hidden_layer_size)
        self.output = nn.Linear(in_features=hidden_layer_size, out_features=num_outputs)

    def forward(self, x):
        x = self.hidden(x)
        x = self.relu(x)
        x = self.hidden2(x)
        x = self.relu(x)
        x = self.hidden3(x)
        x = self.relu(x)
        x = self.output(x)
        return x


class TransformerModel(MLModel):
    def __init__(self, path: str, input_size=384, hidden_layer_size=400):
        self._model = SimpleNetwork(input_size, hidden_layer_size, 2)
        self._model.load_state_dict(torch.load(path))

    def predict(self, feature_set) -> float:
        return self._model(transformer.encode(feature_set))
