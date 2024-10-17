import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importa useNavigate y Link
import '../css/login.css'; // Asegúrate de tener los estilos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa el hook

  const handleSubmit = (event) => {
    event.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Establece las credenciales del administrador
    const adminEmail = "admin@example.com"; // Cambia esto al correo del administrador
    const adminPassword = "admin123"; // Cambia esto a la contraseña del administrador

    // Verifica si las credenciales son las del administrador
    if (email === adminEmail && password === adminPassword) {
      alert("Bienvenido, Administrador.");
      navigate("/admin"); // Redirigir al admin
      return;
    }

    // Verifica las credenciales del usuario normal
    const usuario = usuarios.find(user => user.email === email && user.clave === password);

    if (usuario) {
      if (usuario.rol === "Cliente") {
        alert("Bienvenido, Cliente.");
        navigate("/portal"); // Redirigir al portal usando navigate
      }
    } else {
      alert("Correo o contraseña incorrectos, o no estás registrado.");
    }
  };

  return (
    <div>
      <video autoPlay muted loop playsInline id="background-video">
        <source src="/images/fondo-login.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <header>
        <button id="logo">
          <img src="/images/logo.png" alt="Cartelera" id="header-img" />
        </button>
        <nav>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        {/* Usar Link para redirigir al registro */}
        <Link to="/registro">
          <button id="registro">Regístrate</button>
        </Link>
      </header>
      <div>
        <h2>¡Inicia Sesión!</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="login-button">Iniciar sesión</button>
        </form>
        <p id="recuperar"><a href="#">Recordar contraseña</a></p>
      </div>
    </div>
  );
}

export default Login;
