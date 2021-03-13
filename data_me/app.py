import flask
from flask import Flask
from flask import json
from flask import jsonify, request
import datetime  
import requests
from flask import render_template
import os

app = Flask(__name__)


@app.route('/', methods=['GET'])
def anime_json():
    group_info = os.path.join(app.static_folder, 'data', 'me.json')
    with open(group_info, 'r') as group_json_data:
        group_info = json.load(group_json_data)
        
        return render_template('index.html', group = group_info)

if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

