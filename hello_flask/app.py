from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')


@app.route('/anime')
def anime():
    return render_template('index.html')

@app.route('/weather')
def weather():
    return render_template('weather.html')



if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

