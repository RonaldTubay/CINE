import React, { useState } from 'react';
import '../css/admin.css'; // Asegúrate de tener los estilos

function Admin() {
  const [titulo, setTitulo] = useState('');
  const [duracion, setDuracion] = useState('');
  const [genero, setGenero] = useState('');
  const [clasificacion, setClasificacion] = useState('');
  const [formato, setFormato] = useState('');
  const [horario, setHorario] = useState('');
  const [sala, setSala] = useState('');
  const [portada, setPortada] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    const pelicula = {
      titulo,
      duracion,
      genero,
      clasificacion,
      formato,
      horario,
      sala,
      portada: portada ? portada.name : '', // Solo el nombre de la imagen
    };

    // Guardar en localStorage (simulamos un backend con localStorage por simplicidad)
    let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    peliculas.push(pelicula);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));

    // Opcional: Mostrar un mensaje de éxito o reiniciar el formulario
    alert('Película agregada correctamente');

    // Resetear el formulario
    setTitulo('');
    setDuracion('');
    setGenero('');
    setClasificacion('');
    setFormato('');
    setHorario('');
    setSala('');
    setPortada(null);
  };

  return (
    <div>
      <header>Agregar Nueva Película</header>
      <form id="form-pelicula" onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required /><br />

        <label htmlFor="duracion">Duración:</label>
        <input type="text" id="duracion" value={duracion} onChange={(e) => setDuracion(e.target.value)} required /><br />

        <label htmlFor="genero">Género:</label>
        <input type="text" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required /><br />

        <label htmlFor="clasificacion">Clasificación:</label>
        <input type="text" id="clasificacion" value={clasificacion} onChange={(e) => setClasificacion(e.target.value)} required /><br />

        <label htmlFor="formato">Formato:</label>
        <input type="text" id="formato" value={formato} onChange={(e) => setFormato(e.target.value)} required /><br />

        <label htmlFor="horario">Horario:</label>
        <input type="text" id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} required /><br />

        <label htmlFor="sala">Sala:</label>
        <input type="text" id="sala" value={sala} onChange={(e) => setSala(e.target.value)} required /><br />

        <label htmlFor="portada">Imagen de la portada:</label>
        <input
          type="file"
          id="portada"
          accept="image/*"
          onChange={(e) => setPortada(e.target.files[0])}
          required
        /><br />

        <button type="submit">Agregar Película</button>
      </form>
    </div>
  );
}

export default Admin;