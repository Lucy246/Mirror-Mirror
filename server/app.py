import os
import echo
import json
import SocketServer

from flask import Flask, request
from flask.ext.cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return 'Hello, Alexa!'


@app.route('/reset-demo', methods=['GET'])
def reset_demo():
    echo._reset_for_demo()
    return '{"status": "ok"}'

@app.route('/get-devices', methods=['GET'])
def get_devices():
    life = echo._get_life_object()
    devices = life.get_devices_raw()

    return json.dumps(devices, indent=2, sort_keys=True)


@app.route('/echo/MirrorAPI', methods=['GET', 'POST'])
def mirror_api():
    if request.method == 'POST':
        data = request.get_json()
        return echo.data_handler(data)


if __name__ == '__main__':
    try:
        SocketServer.ThreadingTCPServer.allow_reuse_address = True

        app.run(debug=True,
            threaded=True,
            #ssl_context='adhoc',
            port=int(os.environ.get("PORT", 5000)),
            host='0.0.0.0')

    finally:
        print "Closing connections..."

    print "Server stopped"