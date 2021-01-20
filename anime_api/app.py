import flask
from flask import Flask
from flask import json
from flask import jsonify, request
import datetime  
import requests
from flask import render_template
import os
app = Flask(__name__)


@app.route('/movies', methods=['GET'])
def anime_json():
    anime_info = os.path.join(app.static_folder, 'data', 'movies.json')
    with open(anime_info, 'r') as anime_json_data:
        anime_json_info = json.load(anime_json_data)
        return jsonify(anime_json_info)

def getJSONfromUrl(url): 
  response = requests.get(url)
  json_data = json.loads(response.text)
  return json_data

@app.route('/movies/search_title', methods=['GET'])
def movies_search_title():
    movies_info = os.path.join(app.static_folder, 'data', 'movies.json')
    with open(movies_info, 'r') as json_data:
        json_info = json.load(json_data)
    results = []
    if 'title' in request.args:
        title = request.args['title']
        for movie in json_info:
            if title in movie['title']:
                results.append(movie)
    if len(results) < 1:
        return 'no results found'
    
    return render_template('index.html', results = results)
# @app.route('/')
# def index():
#     current_time = datetime.datetime.now() 
#     hour = current_time.hour
#     complete_api_link = "http://192.168.167.235:5000/api/anime"

#     api_link = requests.get(complete_api_link)
#     api_data = api_link.json()
#     episodes = api_data[0][0]['number']

#     return render_template('index.html', number = str(episodes))

if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

