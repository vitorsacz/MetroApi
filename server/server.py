from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

#api/home = tela inicial, neste caso retorna um JSON
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message' : 'Hello World',
        'people': ['Vitor', 'Lucca', 'Arnaldo']
    })


if __name__ == '__main__':
    app.run(debug = True, port=8080)