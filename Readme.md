Connect to Docker container:<br />
docker exec -it <container_id> bash

Password are in the compose file

Mysql:<br />
mysql -uroot -p<br />
CREATE TABLE event_log (
    id int NOT NULL AUTO_INCREMENT,
    event_type varchar(255) default '',
    event_msg text,
    PRIMARY KEY (id)
);

Pg:<br />
psql --username=dct_pg01 --password<br />
CREATE TABLE event_log(
   id SERIAL PRIMARY KEY,
   event_type VARCHAR NOT NULL,
   event_msg text
);
<br />
Insert:
INSERT INTO event_log(event_type, event_msg) VALUES('type2', 'test test');

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) default '',
   	password varchar(255) default '',
    PRIMARY KEY (id)
);

CREATE TABLE users_sessions (
    id int NOT NULL AUTO_INCREMENT,
    sessionId varchar(255) default '',
    usersId int,
    PRIMARY KEY (id)
);
