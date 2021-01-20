from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')


@app.route('/daniela')
def anime():
    return render_template('daniela.html')

@app.route('/phebe')
def phebe():
    return render_template('phebe.html')

@app.route('/kathrin')
def kathrin():
    return render_template('kathrin.html')

@app.route('/kendric')
def kendric():
    return render_template('kendric.html')



if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')

