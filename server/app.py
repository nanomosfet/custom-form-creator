from flask import Flask
from bp import bp

app = Flask(__name__)
app.register_blueprint(bp, url_prefix='/customformcreator')