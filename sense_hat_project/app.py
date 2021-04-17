import flask
from flask import Flask
from flask import json
from flask import jsonify, request
import datetime  
import requests
from flask import render_template, redirect, url_for
import os
import sqlite3
from time import sleep
from sense_hat import SenseHat
sense = SenseHat()


app = Flask(__name__)

@app.route('/success/ <name> / <r> / <g> / <b>')
def success(name,r, g, b):
   sense.show_message(name, text_colour=[int(r),int(g),int(b)]) 
   return '<a href = "/all">All messages</a>'

@app.route('/all')
def all():
   conn = sqlite3.connect('./static/data/data.db')
   curs = conn.cursor()
   messages = []
   rows = curs.execute("SELECT * from messages")
   for row in rows:
      message = {'message' : row[0],'r' : row[1] ,'g' : row[2] ,'b' : row[1]}
      messages.append(message)
   conn.close()
   return render_template('all.html', messages = messages)

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['nm']
      red = request.form['r']
      green = request.form['g']
      blue = request.form['b']

      conn = sqlite3.connect('./static/data/data.db')
      curs = conn.cursor()
      curs.execute('INSERT INTO messages (message, r, g, b ) VALUES((?),(?),(?),(?))', (user, red, green, blue))
      conn.commit()
      conn.close()
      
      return redirect(url_for('success',name = user, r = str(red), g = str(green), b = str(blue)))
   else:
      user = request.args.get('nm')
      red = request.args.get('r')
      green = request.args.get('g')
      blue = request.args.get('b')

      conn = sqlite3.connect('./static/data/data.db')
      curs = conn.cursor()
      curs.execute('INSERT INTO messages (message, r, g, b) VALUES((?),(?),(?),(?))', (user, red, green, blue))
      conn.commit()
      conn.close()
  
      
      return redirect(url_for('success',name = user, r = str(red), g = str(green), b = str(blue)))

@app.route('/', methods=['GET'])
def submit():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug = True, host='127.0.0.1')