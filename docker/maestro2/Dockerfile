# Imagen base de MySQL 8.0
FROM mysql:8.0

# Copiar el archivo de configuración personalizado
COPY my.cnf /etc/mysql/conf.d/
COPY init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 3306 para conexiones externas
EXPOSE 3306