from flask import Flask
from flask import json
import datetime  
import requests
from flask import render_template

app = Flask(__name__)

def getJSONfromUrl(url): 
  response = requests.get(url)
  json_data = json.loads(response.text)
  return json_data

@app.route('/')
def index():
    current_time = datetime.datetime.now() 
    hour = current_time.hour
    complete_api_link = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/2102938?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft"

    api_link = requests.get(complete_api_link)
    api_data = api_link.json()
    minimum_value = api_data['DailyForecasts'][0]['Temperature']['Minimum']['Value']
    maximum_value = api_data['DailyForecasts'][0]['Temperature']['Maximum']['Value']
    daily_headline = api_data['Headline']['Text']
    minute = current_time.minute
    anime_list = ["naruto", "dragon ball", "one piece", "my hero"]
    return render_template('index.html', name = "Kendric", hour = hour, minute = minute, min = minimum_value, max = maximum_value, head = daily_headline)

    



if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

