from flask import Flask
import datetime  
import requests
from flask import render_template
import random
app = Flask(__name__)


@app.route('/')
def index():
    poke_num = random.randint(1,800)
    complete_api_link = "https://pokeapi.co/api/v2/pokemon/" + str(poke_num)
    api_link = requests.get(complete_api_link)
    api_data = api_link.json()


    
    return render_template('index.html', api_data = api_data)

    



if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

