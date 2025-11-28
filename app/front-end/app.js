const libroForm = document.getElementById('libroForm');
const librosList = document.getElementById('librosList');
const API_URL = 'http://localhost:3000/libros';

// Función para cargar todos los libros
async function cargarLibros() {
  try {
    const res = await fetch(API_URL);
    const libros = await res.json();

    librosList.innerHTML = '';
    libros.forEach(libro => {
      const li = document.createElement('li');
      li.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio_publicacion}) [${libro.genero}]`;
      librosList.appendChild(li);
    });
  } catch (err) {
    console.error('Error al cargar libros:', err);
  }
}

// Función para agregar un libro
libroForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nuevoLibro = {
    titulo: document.getElementById('titulo').value,
    autor: document.getElementById('autor').value,
    anio_publicacion: parseInt(document.getElementById('anio_publicacion').value),
    genero: document.getElementById('genero').value
  };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoLibro)
    });

    if (!res.ok) throw new Error('Error al agregar libro');

    // Limpiar formulario
    libroForm.reset();
    // Recargar lista de libros
    cargarLibros();
  } catch (err) {
    console.error(err);
  }
});

// Cargar libros al iniciar la página
cargarLibros();
