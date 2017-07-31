DROP DATABASE cards_DB;

CREATE DATABASE cards_DB;

USE cards_DB;

CREATE TABLE basicCard (
id int(30) auto_increment not null,
front VARCHAR(30) NOT NULL,
back VARCHAR(30) NOT NULL
)


CREATE TABLE clozeCard(
id int(30) auto_increment not null,
question VARCHAR(30) NOT NULL,
answer VARCHAR(30) NOT NULL
)

