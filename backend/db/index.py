import mysql.connector

import os
from dotenv import load_dotenv

load_dotenv()

def create_db_connection():
    config = {
        'host': os.getenv('DBHOST'),          # MySQL host
        'user': os.getenv('DBUSER'),      # MySQL username
        'password': os.getenv('DBPASSWORD'),  # MySQL password
        'database': os.getenv('DBDATABASE')   # MySQL database name
    }

    return mysql.connector.connect(**config)

db = create_db_connection()