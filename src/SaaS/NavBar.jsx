import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SaaS/assets/styles/Navbar.css';

const NavbarGrowthSuite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar la apariencia de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`growth-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="growth-container">
        <div className="growth-logo">
            
        <img src="https://i.imgur.com/VtNA0KW.png" alt="Logo GrowthSuite"  />
              <Link to="/" className="logo" onClick={() => setIsActive(false)}>Home</Link>
          <span>GrowthSuite<sup className="beta-tag">BETA</sup></span>
        </div>

        <div className={`growth-nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#features">Características</a>
          <a href="#solutions">
            Soluciones
            <div className="nav-indicator">
              <span className="nav-arrow"></span>
            </div>
          </a>
          <a href="#pricing">Precios</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="growth-nav-buttons">
          <a href="/login" className="btn-login">Iniciar Sesión</a>
          <a href="/register" className="btn-trial pulse-button">
            <span className="btn-text">Prueba Gratuita</span>
            <span className="btn-icon">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span className="shine-effect"></span>
          </a>
        </div>

        <div 
          className={`growth-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* <div className="growth-notification">
        <div className="notification-content">
          <span className="notification-badge">NUEVO</span>
          <p>¡50% de descuento en todos los planes por tiempo limitado!</p>
          <a href="#pricing" className="notification-link">Ver oferta <i className="fas fa-chevron-right"></i></a>
        </div>
      </div> */}
    </nav>
  );
};

export default NavbarGrowthSuite;