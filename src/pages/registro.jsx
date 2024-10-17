import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../css/registro.css'; // Asegúrate de tener los estilos

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [clave1, setClave1] = useState('');

  const navigate = useNavigate(); // Inicializa el hook

  const handleSubmit = (event) => {
    event.preventDefault();

    if (clave !== clave1) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    const nuevoUsuario = {
      nombre,
      apellido,
      sexo,
      cedula,
      telefono,
      fechaNacimiento,
      email,
      clave,
      rol: "Cliente"
    };
    
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Serás redirigido al inicio de sesión.");
    navigate("/login"); // Redirigir usando navigate
  };

  return (
    <div>
      <video autoPlay muted loop playsInline id="background-video">
        <source src="../images/fondo-login.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <header>
        <button id="logo">
          <img src="../images/logo.png" alt="Cartelera" id="header-img" />
        </button>
        <nav>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h2>¡Regístrate!</h2>
        <form id="registro-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            id="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="text"
            id="sexo"
            placeholder="Sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          />
          <input
            type="text"
            id="cedula"
            placeholder="Cédula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          <input
            type="text"
            id="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <label htmlFor="dob">Fecha de nacimiento:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="clave"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
          <input
            type="password"
            id="clave1"
            placeholder="Confirmar Contraseña"
            value={clave1}
            onChange={(e) => setClave1(e.target.value)}
            required
          />
          <button type="submit" id="registro-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
