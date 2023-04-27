# from flask import Flask, request, jsonify
# from suggestions_generator import generate

# app = Flask(__name__)

# @app.route('/suggestions', methods=['POST'])
# def get_suggestions():
#     balance = request.json.get('balance')
#     expenses = request.json.get('expenses')
#     suggestions = generate(balance, expenses)
#     return jsonify(suggestions)

# if __name__ == '__main__':
#     app.run()