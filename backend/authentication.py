import pyrebase

config = {
    'apiKey': "AIzaSyAuUkkIawV8MjiOGSqT2vhIOqFvm4PSZMQ",
    'authDomain': "geniusai-f1013.firebaseapp.com",
    'databaseURL': "https://geniusai-f1013-default-rtdb.firebaseio.com",
    'projectId': "geniusai-f1013",
    'storageBucket': "geniusai-f1013.appspot.com",
    'messagingSenderId': "568584365899",
    'appId': "1:568584365899:web:e1b6c822e215c8f5bdaace",
    'measurementId': "G-EQHRHKWQ5C",
    'databaseURL': '',
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

email = "test@gmail.com"
password = "123456"

# In future, the email and password will be info entered via a form rather than hard-coded
# user = auth.create_user_with_email_and_password(email, password)
# print(user)

# Again, this will be run through a call from frontend via a login form or something
user = auth.sign_in_with_email_and_password(email, password)

# Provides useful information such as when email was last updated, last logged in with, etc.
# info = auth.get_account_info(user['idToken'])
# print(info)

# Will send email verification
# auth.send_email_verification(user['idToken'])

# Used to reset the password
# auth.send_password_reset_email(email)