from flask import Flask, jsonify, request, session
import pyrebase

import requests
import openai
import os
from dotenv import load_dotenv

firebase_config = {
    "apiKey": os.getenv("FIREBASE_API_KEY"),
    "authDomain": os.getenv("FIREBASE_AUTH_DOMAIN"),
    "databaseURL": os.getenv("FIREBASE_DATABASE_URL"),
    "projectId": os.getenv("FIREBASE_PROJECT_ID"),
    "storageBucket": os.getenv("FIREBASE_STORAGE_BUCKET"),
    "messagingSenderId": os.getenv("FIREBASE_MESSAGING_SENDER_ID"),
    "appId": os.getenv("FIREBASE_APP_ID"),
    "measurementId": os.getenv("FIREBASE_MEASUREMENT_ID"),
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()

import firebase_admin
from firebase_admin import credentials, firestore, auth as m_auth

from flask_cors import CORS

# cred = credentials.Certificate("firebase-adminsdk.json")
# firebase_app = firebase_admin.initialize_app(cred)
# firebase_db = firestore.client()
# firebase_ref = firebase_db.collection('passwords')

# base64_signer_key = base64.b64decode("jxspr8Ki0RYycVU8zykbdLGjFQ3McFUH0uiiTvC8pVMXAn210wjLNmdZJzxUECKbm0QsEmYUSDzZvpjeJ9WmXA==")
# base64_salt_separator = base64.b64decode("Bw==")
# rounds = 8
# memcost = 14

# base64_salt = base64.b64decode("42xEC+ixf3L2lw==")

app = Flask(__name__)
app.secret_key = os.getenv('SECRETKEY')
openai.organization = os.getenv('OPENAI_ORG')
openai.api_key = os.getenv('OPENAI_API_KEY')
# Tell 3001 to expect requests from 3000
CORS(app, resources={r"/api/*": {"origins": [os.getenv('REACT_APP_PROD_HOST'), os.getenv('REACT_APP_PROD_HOST_ALT'), os.getenv('REACT_APP_HOST')], "methods": ["GET", "POST", "PUT", "DELETE"]}}, supports_credentials=True)

# cursor = db.cursor()

@app.route('/api/hello', methods=['GET'])
def get_hello():
    return jsonify({'message': 'Hellos, World!'})

@app.route('/api/login', methods=['POST', 'GET'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if ('user' in session):
        return f"Welcome, {session['user']}"
    if request.method == 'POST':
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            session['user'] = email
            return jsonify({
                'loggedIn': True,
                'user': email,
            })
        except Exception as e:
            print('Failed to login')
            # error_json = json.loads(str(e))
            # error_code = error_json['error']['code']
            # error_message = error_json['error']['message']
            # print(error_code)
            # print(error_message)
            print(e)
            print(type(e))
            # print(e.response)
            # print(e.response.json())
            return jsonify({
                'loggedIn': False,
                'error': str(e)
            })
    else:
        print('This was not a POST request')
        return jsonify({
                'loggedIn': False,
                'error': 'This was not a POST request, poop123'
            })

@app.route('/api/create-account', methods=['POST', 'GET'])
def create_account():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    try:
        user = auth.create_user_with_email_and_password(email, password)
        return jsonify({
            'status': 'Success',
            'email': email,
            'password': password,
        })
    except:
        return jsonify({
            'status': 'Failed'
        })
        
# def add_flask_data():
#     try:
#         data = request.get_json()
#         username = data.get('username')
#         password = data.get('password')

#         encrypted_password = pyscryptfirebase.encrypt(
#             base64_signer_key,
#             base64_salt,
#             base64_salt_separator,
#             rounds,
#             memcost,
#             password
#         )

#         doc_ref = firebase_ref.document()
#         doc_ref.set({
#             'username': username,
#             'encrypted_password': encrypted_password,
#         })

#         return jsonify({
#             'status': 'Success',
#         })
        
#     except Exception as e:
#         print(e)

@app.route('/api/logout', methods=['POST', 'GET'])
def logout():
    try:
        session.pop('user')
    except:
        print('No users currently logged in!')
    return jsonify({
        'status': 'Success',
        'loggedIn': False
    })

@app.route('/api/login-info', methods=['GET'])
def get_login_info():
    try:
        return jsonify({
            'status': 'Success',
            'user': 'dummy@gmail.com', # Returned session['user'] originally
            'loggedIn': True
        })
    except:
        return jsonify({
            'status': 'Success',
            'loggedIn': False
        })

# @app.route('/api/notes', methods=['GET'])
# def get_data():
#     try:
#         cursor.execute("SELECT * FROM notes;")
#         result = cursor.fetchall()
#         print('This is the data:')
#         print(result)
#         return jsonify({
#             'status': 'Success',
#             'data': result,
#         })
#     except Exception as e:
#         print(e)

# @app.route('/api/notes', methods=['POST'])
# def get_notes():
#     try:
#         cursor.execute("SELECT * FROM notes;")
#         result = cursor.fetchall()
#         print('This is the data:')
#         print(result)
#         return jsonify({
#             'status': 'Success',
#             'data': result,
#         })
#     except Exception as e:
#         print(e)


# Eric's Stuff
@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    message = request.json.get('message')

    if not message:
        return jsonify({"error": "Bad Request!", "message": "No message was received"}), 400
    #Set up chat models and word limit

    try:
        response = openai.Completion.create(
            engine='text-ada-001',
            prompt=message,
            max_tokens=50
        )
    except Exception as e:
        return jsonify({"error": "OpenAI Error", "message": str(e)}), 500
    
    return jsonify({"message": response.choices[0].text.strip()})

# Knowledge Base Test
@app.route('/api/kb-test', methods=['POST'])
def get_answer():
    endpoint = os.getenv('AZURE_ENDPOINT')

    headers = {
        "Ocp-Apim-Subscription-Key": os.getenv('AZURE_SUBSCRIPTION_KEY')
    }

    data = {
        'question': 'What is a named tuple?',
        'top': 1
    }


    try:
        response = requests.post(endpoint, json=data, headers=headers)
        print(response)
        print(response.json())
        return jsonify({
            'status': 'Success'
        })
    except Exception as e:
        print('Failed')
        print(e)
        return jsonify({
            'status': 'Failed'
        })

# if __name__ == '__main__':
#     app.run(port=3001)
#     print('Server listening on port 3001')