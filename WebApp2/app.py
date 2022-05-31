from flask import Flask, request
from flask_cors import CORS
import json

import service_config

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/problem', methods=['POST'])
def get_problem_tags():
    service = service_config.get_default_service()
    print("in", request, request.json)
    top_preds, statement_id = service.get_top_preds(request.json['statement'])
    return json.dumps({"topPredictions": top_preds, "statementId": statement_id})


@app.route('/report', methods=['POST'])
def get_prediction_report():
    service = service_config.get_default_service()
    return json.dumps(service.get_preds_for_statement_id(request.json['id']))


if __name__ == '__main__':
    app.run()
