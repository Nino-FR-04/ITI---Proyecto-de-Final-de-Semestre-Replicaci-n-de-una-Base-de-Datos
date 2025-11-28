-- Este Script es parte de la documentación
--Configuración de replicación en MySQL

-- Configuración en Maestro 1

CHANGE MASTER TO
    MASTER_HOST='maestro2',
    MASTER_USER='bib_repl',
    MASTER_PASSWORD='ucsm2025',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=0;

START SLAVE;

-- Configuración en Maestro 2
CHANGE MASTER TO
    MASTER_HOST='maestro1',
    MASTER_USER='bib_repl',
    MASTER_PASSWORD='ucsm2025',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=0;

START SLAVE;

-- Cada configuración debe realizarse en su respectivo maestro de manera manual.
