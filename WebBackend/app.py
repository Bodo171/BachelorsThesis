from flask import Flask, request
import json

import service_config

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/problem', methods=['POST'])
def get_problem_tags():
    service = service_config.get_default_service()
    return json.dumps(service.get_top_preds(request.form['statement']))


if __name__ == '__main__':
    app.run()
