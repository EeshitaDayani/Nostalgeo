from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/api/compareTexts", methods=['POST'])
def compareTexts():
    api_token = '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'
    API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2"
    headers = {"Authorization": f"Bearer {api_token}"}

    # Get values for currentMemory and otherMemory from the request
    currentMemory = request.args.get('currentMemory', '')
    otherMemory = request.args.get('otherMemory', '')

    if not currentMemory or not otherMemory:
        return jsonify({'error': 'Missing parameters'})

    def query(payload):
        response = requests.post(API_URL, headers=headers, json=payload)
        print(response.json())
        return response.json()
    
    similarity = query(
        {
            "inputs": {
                "source_sentence": currentMemory,
                "sentences": [
                    otherMemory
                ]
            }
        })
    print("HIIIIII. score: ", round((similarity[0] * 100), 2))
    return jsonify({
        'score': round((similarity[0] * 100), 2)
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)
