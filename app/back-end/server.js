import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// Obtener todos los libros
app.get('/libros', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM libros');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener libros' });
    }
});

// Agregar un libro
app.post('/libros', async (req, res) => {
    const { titulo, autor, anio_publicacion, genero } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO libros (titulo, autor, anio_publicacion, genero) VALUES (?, ?, ?, ?)',
            [titulo, autor, anio_publicacion, genero]
        );
        res.json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
