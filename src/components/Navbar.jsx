// filepath: /Users/byemmanuel/Desktop/Programacion/PortafolioWEB(React)/mi-portfolio/src/components/Navbar.jsx
import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mi Portafolio</div>
      
      <div 
        className={`hamburger ${isActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#github.com/Byemmanuel" onClick={() => setIsActive(false)}>GitHub</a></li>
        <li><a href="#about" onClick={() => setIsActive(false)}>Sobre Mí</a></li>
        <li><a href="#skills" onClick={() => setIsActive(false)}>Habilidades</a></li>
        <li><a href="#projects" onClick={() => setIsActive(false)}>Proyectos</a></li>
        <li><a href="#blog" onClick={() => setIsActive(false)}>Blog Personal</a></li>
        <li><a href="#contact" onClick={() => setIsActive(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;