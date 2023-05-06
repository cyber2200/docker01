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
        db.close()
        return {"res": "OK", "msg": "", "session_id": session_id}

    db.close()
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
        db.close();
        return {"res": "NOK"}
    
    db.close();
    return {"res": "OK"}

async def get_users():
    db = get_db_conn()
    cursor = db.cursor()

    cursor.execute('''
        SELECT * FROM users;
    ''')
    columns = cursor.description
    data = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        data.append(tmp)
    
    return {"res": "OK", "users_data": data}