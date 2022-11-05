Connect to Docker container:<br />
docker exec -it <container_id> bash

Password are in the compose file

Mysql:
mysql -uroot -p
CREATE TABLE event_log (
    id int NOT NULL AUTO_INCREMENT,
    event_type varchar(255) default '',
    event_msg text,
    PRIMARY KEY (id)
);

Pg:
psql --username=dct_pg01 --password
CREATE TABLE event_log(
   id SERIAL PRIMARY KEY,
   event_type VARCHAR NOT NULL,
   event_msg text
);

Insert:
INSERT INTO event_log(event_type, event_msg) VALUES('type2', 'test test');