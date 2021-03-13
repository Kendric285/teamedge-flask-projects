import flask
from flask import Flask
from flask import json
from flask import jsonify, request
import datetime  
import requests
from flask import render_template, redirect, url_for
import os
from time import sleep
from sense_hat import SenseHat
sense = SenseHat()


app = Flask(__name__)

@app.route('/success/ <name> / <r> / <g> / <b>')
def success(name,r, g, b):
   sense.show_message(name, text_colour=[int(r),int(g),int(b)]) 
   return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['nm']
      red = request.form['r']
      green = request.form['g']
      blue = request.form['b']
      
      return redirect(url_for('success',name = user, r = str(red), g = str(green), b = str(blue)))
   else:
      user = request.args.get('nm')
      red = request.args.get('r')
      green = request.args.get('g')
      blue = request.args.get('b')
      
      return redirect(url_for('success',name = user, r = str(red), g = str(green), b = str(blue)))

@app.route('/', methods=['GET'])
def submit():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug = True, host='192.168.167.235')