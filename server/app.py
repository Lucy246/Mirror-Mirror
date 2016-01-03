import os
import echo
import SocketServer

from flask import Flask, request


app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return 'Hello, Alexa!'


@app.route('/reset-demo', methods=['GET'])
def reset_demo():
    echo._reset_for_demo()
    return '{"status": "ok"}'


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