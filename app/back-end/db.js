// db.js
import mysql from 'mysql2/promise';

// Crear un pool de conexiones
const pool = mysql.createPool({
    host: 'localhost',
    user: 'app_user',
    password: 'app2025',
    database: 'biblioteca',
    port: 6033,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;