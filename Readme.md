Connect to Docker container:<br />
docker exec -it <container_id> bash

Password are in the compose file.

Mysql:<br />
mysql -uroot -p<br />
CREATE TABLE event_log (
    id int NOT NULL AUTO_INCREMENT,
    event_type varchar(255) default '',
    event_msg text,
    PRIMARY KEY (id)
);<br />
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) default '',
   	password varchar(255) default '',
    PRIMARY KEY (id)
);<br />
CREATE TABLE users_sessions (
    id int NOT NULL AUTO_INCREMENT,
    sessionId varchar(255) default '',
    usersId int,
    PRIMARY KEY (id)
);<br />
INSERT INTO users SET email = 'test@test.com', password = '202cb962ac59075b964b07152d234b70';<br/>
INSERT INTO event_log SET event_type = 'test_event', event_msg = '111';<br/>
INSERT INTO event_log SET event_type = 'test_event', event_msg = '222';<br/>
INSERT INTO event_log SET event_type = 'test_event', event_msg = '333';</br>
<br /><br />
Pg:<br />
psql --username=docker01_pg01 --password<br />
CREATE TABLE event_log(
   id SERIAL PRIMARY KEY,
   event_type VARCHAR NOT NULL,
   event_msg text
);<br />
INSERT INTO event_log(event_type, event_msg) VALUES('type2', 'test test 1');<br />
INSERT INTO event_log(event_type, event_msg) VALUES('type2', 'test test 2');<br />
INSERT INTO event_log(event_type, event_msg) VALUES('type2', 'test test 3');<br />
<br/ >
CREATE DATABASE fastapi01;<br />
USE fastapi01<br />
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) default '',
    password varchar(255) default '',
    PRIMARY KEY (id)
);<br />

CREATE TABLE users_sessions (
    id int NOT NULL AUTO_INCREMENT,
    session_id varchar(255) default '',
    user_id int default 0,
    PRIMARY KEY (id)
);<br />
INSERT INTO users SET email = 'test@test.com', password = '202cb962ac59075b964b07152d234b70';<br/>
<br />
User password is 123<br /><br />
npx create-react-app --template=redux-typescript fe