DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

CREATE TABLE actors(
    id INT NOT NULL AUTO_INCREMENT,
    char_name VARCHAR(50),
    coolness_points INT,
    attitude VARCHAR(50),
    PRIMARY KEY(id)
);