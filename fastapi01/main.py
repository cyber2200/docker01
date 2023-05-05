from typing import Union
from fastapi import FastAPI, Request
from mysql import connector
from fastapi.middleware.cors import CORSMiddleware

import lib.db
'''
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) default '',
    password varchar(255) default '',
    PRIMARY KEY (id)
);

CREATE TABLE users_sessions (
    id int NOT NULL AUTO_INCREMENT,
    session_id varchar(255) default '',
    user_id int default 0,
    PRIMARY KEY (id)
);
'''
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    x: str = "123ccasd"
    print(x)
    return {"item_id": item_id, "q": q}

@app.post("/test_post")
def test_post():
    ret = lib.db.get_data()
    return ret

@app.post("/test")
def test():
    arr = ({"f": "123"},)
    for t in arr:
        print(t["f"])
    return {"res": "OK"}

@app.post("/api/login")
async def login(request: Request):
    return await lib.db.login(request)

@app.post("/api/auth")
async def auth(request: Request):
    return await lib.db.auth(request)

@app.post("/api/logout")
async def logout(request: Request):
    return {"res": "OK"}