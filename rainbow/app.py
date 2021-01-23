from flask import Flask, render_template, current_app as app

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to Kendric's Rainbow Project"


@app.route('/red')
def red():
    return render_template('color.html', color = "red", css = "color: red;")

@app.route('/blue')
def blue():
    return render_template('color.html', color = "blue", css = "color: blue;")

@app.route('/yellow')
def yellow():
    return render_template('color.html', color = "yellow", css = "color: yellow;")

@app.route('/orange')
def orange():
    return render_template('color.html', color = "orange", css = "color: orange;")

@app.route('/green')
def green():
    return render_template('color.html', color = "green", css = "color: green;")

@app.route('/indigo')
def indigo():
    return render_template('color.html', color = "indigo", css = "color: indigo;")

@app.route('/violet')
def violet():
    return render_template('color.html', color = "violet", css = "color: violet;")

@app.route('/rainbow')
def rainbow():
    colors = ['/red', '/blue', '/yellow', '/orange', '/green', '/indigo', '/violet']
    return render_template('rainbow.html', colors = colors)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
