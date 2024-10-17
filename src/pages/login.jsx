import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css'; // Asegúrate de tener los estilos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      alert("Bienvenido, Administrador.");
      navigate("/admin");
      return;
    }

    const usuario = usuarios.find(user => user.email === email && user.clave === password);

    if (usuario) {
      if (usuario.rol === "Cliente") {
        alert("Bienvenido, Cliente.");
        navigate("/portal");
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
            {/* Botón de registro en la barra de navegación */}
            <li>
              <Link to="/registro">
                <button id="registro">Regístrate</button>
              </Link>
            </li>
          </ul>
        </nav>
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
