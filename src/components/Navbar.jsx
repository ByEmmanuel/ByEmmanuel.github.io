// filepath: /Users/byemmanuel/Desktop/Programacion/PortafolioWEB(React)/mi-portfolio/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setIsActive(false)}>Portafolio</Link>
      
      <div 
        className={`hamburger ${isActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
  <li>
    <a 
      href="https://github.com/Byemmanuel" 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fab fa-github"></i></span>
      GitHub
    </a>
  </li>
  <li>
    <a 
      href="#about" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-user"></i></span>
      Sobre Mí
    </a>
  </li>
  <li>
    <a 
      href="#projects" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-code"></i></span>
      Proyectos
    </a>
  </li>
  <li>
    <a 
      href="#skills" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-tools"></i></span>
      Habilidades
    </a>
  </li>
  <li>
    <a 
      href="#blog" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-blog"></i></span>
      Blog Personal
    </a>
  </li>
  <li>
    <a 
      href="#contact" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-envelope"></i></span>
      Contacto
    </a>
  </li>
  <li>
    <Link 
      to="/documentation" 
      onClick={() => setIsActive(false)}
    >
      <span className="nav-icon"><i className="fas fa-book"></i></span>
      Documentaciones
    </Link>
  </li>
</ul>
    </nav>
  );
}

export default Navbar;