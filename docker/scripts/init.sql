--Script - basico
CREATE DATABASE IF NOT EXISTS biblioteca;

--Usuario y permisos
CREATE USER IF NOT EXISTS 'bib_repl'@'%' IDENTIFIED BY 'ucsm2025';
GRANT REPLICATION SLAVE ON *.* TO 'bib_repl'@'%';
FLUSH PRIVILEGES;

-- Use la base de datos biblioteca
USE biblioteca;
-- Crear tabla libros
CREATE TABLE IF NOT EXISTS libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    anio_publicacion INT,
    genero VARCHAR(100)
);