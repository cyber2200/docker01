from mysql import connector
import time
import hashlib

def get_db_conn():
    db = connector.connect(
        host = "docker01_mysql01",
        user = "root",
        password = "123qwe",
        database = "fastapi01"
    )
    return db

def get_data():
    dd = []
    try:
        with connector.connect(
            host = "localhost",
            user = "root",
            password = "123qwe",
            database = "advsys"
        ) as existing_database:
            with existing_database.cursor() as cursor:
                #cursor.execute("INSERT INTO adv_data (date, offer_name) VALUES (NOW(), %s)", ("TEST !!!!####",))
                #existing_database.commit()
                cursor.execute("SELECT * FROM adv_data")
                returned_data = cursor.fetchall()
                for result in returned_data:
                    print(result)
                    dd.append({"t": result[2], "t2": result[8]})

    except connector.Error as e: 
        print(e)
    return {"res": "OK", "data": dd}

async def login(request):
    json_req_data = await request.json()

    db = get_db_conn()
    cursor = db.cursor()

    cursor.execute("SELECT * FROM users WHERE email = %s", (json_req_data["email"], ))
    data = cursor.fetchall()
    if len(data) == 0:
        return {"res": "NOK", "msg": "Can't find this Email", "session_id": ""}

    md5pass = hashlib.md5(json_req_data["password"].encode('utf-8')).hexdigest()
    if data[0][2] == md5pass:
        unix_ts = str(time.time())
        t = unix_ts.encode('utf-8')
        result = hashlib.md5(t)
        session_id = result.hexdigest()
        cursor.execute('''
            INSERT INTO users_sessions SET session_id = %s, user_id = %s
        ''', (session_id, data[0][0]))
        db.commit()
        return {"res": "OK", "msg": "", "session_id": session_id}

    return {"res": "NOK", "msg": "Password does not match", "session_id": ""}

async def auth(request):
    json_req_data = await request.json()
    db = get_db_conn()
    cursor = db.cursor()
    cursor.execute('''
        SELECT * FROM users_sessions WHERE session_id = %s
    ''', (json_req_data["session_id"], ))
    data = cursor.fetchall()
    if len(data) == 0:
        return {"res": "NOK"}
    
    return {"res": "OK"}