import bcrypt

def encode_password(password: str):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password

if __name__ == '__main__':
    pw = "testpassword123"
    pw2 = "testpassword123"
    entered_password = 'testpassword123'
    stored_hashed_password = encode_password(pw)
    print(stored_hashed_password)
    print(encode_password(pw2))
    print(bcrypt.checkpw(entered_password.encode('utf-8'), stored_hashed_password))