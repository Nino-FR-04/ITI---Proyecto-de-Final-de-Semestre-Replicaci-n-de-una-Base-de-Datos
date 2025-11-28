CREATE DATABASE IF NOT EXISTS biblioteca;

CREATE USER IF NOT EXISTS 'bib_repl'@'%' IDENTIFIED WITH mysql_native_password BY 'ucsm2025';
GRANT REPLICATION SLAVE ON *.* TO 'bib_repl'@'%';

CREATE USER IF NOT EXISTS 'app_user'@'%' IDENTIFIED BY 'app2025';
GRANT SELECT, INSERT, UPDATE, DELETE ON biblioteca.* TO 'app_user'@'%';

FLUSH PRIVILEGES;

USE biblioteca;

CREATE TABLE IF NOT EXISTS libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    autor VARCHAR(255),
    anio_publicacion INT,
    genero VARCHAR(100)
);