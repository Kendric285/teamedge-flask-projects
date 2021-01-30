import flask
from flask import Flask
from flask import json
from flask import jsonify, request
import datetime  
import requests
from flask import render_template
import os

app = Flask(__name__)

# @app.route('/movies', methods=['GET'])
# def anime_json():
#     anime_info = "https://date.nager.at/api/v2/PublicHolidays/2017/US
#     with open(anime_info, 'r') as anime_json_data:
#         anime_json_info = json.load(anime_json_data)
#         return jsonify(anime_json_info)

def getJSONfromUrl(url): 
  response = requests.get(url)
  json_data = json.loads(response.text)
  return json_data

@app.route('/')
def index():
    
    country = request.args['country']
    year = request.args['year']
    complete_api_link = "https://date.nager.at/api/v2/PublicHolidays/" + year +"/" + country

    api_link = requests.get(complete_api_link)
    api_data = api_link.json()
    # date = api_data[0]['date']
    return render_template('index.html', api_data = api_data)

    
# @app.route('/holiday', methods=['GET'])
# def movies_search_title():
#     complete_api_link = "https://date.nager.at/api/v2/PublicHolidays/2017/US"

#     api_link = requests.get(complete_api_link)
#     api_data = api_link.json()
#     results = []
#     if 'name' in request.args:
#         name = request.args['name']
#         for holiday in api_data:
#             if name in holiday['name']:
#                 results.append(holiday)
#     if len(results) < 1:
#         return 'no results found'
    
#     return render_template('index.html', results = results)

if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

