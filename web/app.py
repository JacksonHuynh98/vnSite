import os
import time
from flask import *



app = Flask(__name__)

@app.route("/")
def hello():
    return Hello
