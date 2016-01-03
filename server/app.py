import echo
import SocketServer

from flask import Flask, request


app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return 'Hello, Alexa!'


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
            port=5000,
            host='0.0.0.0')

    finally:
        print "Closing connections..."

    print "Server stopped"