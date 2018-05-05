CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
    id INT AUTO_INCREMENT NOT NULL,
    author VARCHAR(100),
    chirp VARCHAR(100),
    time_created DATETIME NOT NULL,
    PRIMARY KEY(id)
);