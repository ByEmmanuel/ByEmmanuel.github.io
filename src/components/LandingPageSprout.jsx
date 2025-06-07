import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LandingPageSprout.css';

// const LandingPageSprout = () => {
//     const [isVisible, setIsVisible] = useState({
//         features: false,
//         howItWorks: false,
//         pricing: false,
//         testimonials: false
//     });

//     const [countdown, setCountdown] = useState({
//         days: 5,
//         hours: 12,
//         minutes: 34,
//         seconds: 56
//     });

//     // Efecto para la animación de aparición al hacer scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['features', 'howItWorks', 'pricing', 'testimonials'];
            
//             sections.forEach(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const position = element.getBoundingClientRect();
//                     if (position.top < window.innerHeight * 0.75) {
//                         setIsVisible(prevState => ({ ...prevState, [section]: true }));
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Verificar visibilidad inicial

//         // Actualizar el contador regresivo
//         const timer = setInterval(() => {
//             setCountdown(prev => {
//                 if (prev.seconds > 0) {
//                     return { ...prev, seconds: prev.seconds - 1 };
//                 } else if (prev.minutes > 0) {
//                     return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//                 } else if (prev.hours > 0) {
//                     return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
//                 } else if (prev.days > 0) {
//                     return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
//                 }
//                 return prev;
//             });
//         }, 1000);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             clearInterval(timer);
//         };
//     }, []);

//     // Testimonios ficticios
//     const testimonials = [
//         {
//             name: "Carlos Rodríguez",
//             position: "CEO, Distribuidora Azteca",
//             image: "https://randomuser.me/api/portraits/men/32.jpg",
//             text: "Desde que implementamos Sprout, nuestros procesos operativos son 40% más eficientes y nuestras ventas han aumentado un 25%. La mejor inversión que hemos hecho en años."
//         },
//         {
//             name: "Mariana Gutiérrez",
//             position: "Directora de Operaciones, Tecnosoluciones",
//             image: "https://randomuser.me/api/portraits/women/44.jpg",
//             text: "Nunca había sido tan fácil gestionar inventario, ventas y relaciones con clientes en un solo lugar. Sprout ha transformado nuestra empresa."
//         },
//         {
//             name: "Jorge Méndez",
//             position: "Dueño, Café Orgánico MX",
//             image: "https://randomuser.me/api/portraits/men/67.jpg",
//             text: "Como pequeña empresa, necesitábamos una solución completa sin tener que invertir en múltiples sistemas. Sprout nos dio exactamente eso y más."
//         }
//     ];

//     // FAQs
//     const faqs = [
//         {
//             question: "¿Qué es Sprout y cómo puede ayudar a mi negocio?",
//             answer: "Sprout es una plataforma SaaS todo-en-uno diseñada específicamente para PYMEs, que integra ERP y CRM en una solución intuitiva. Automatiza procesos, mejora la gestión de clientes y optimiza recursos, permitiéndote crecer sin complicaciones."
//         },
//         {
//             question: "¿Es difícil migrar mis datos actuales a Sprout?",
//             answer: "¡En absoluto! Sprout ofrece un proceso de migración asistida incluido en todos los planes. Nuestro equipo se encarga de importar tus datos existentes para que puedas comenzar a trabajar de inmediato."
//         },
//         {
//             question: "¿Necesito conocimientos técnicos para usar Sprout?",
//             answer: "No. Sprout está diseñado para ser extremadamente intuitivo. Además, ofrecemos capacitación gratuita y soporte técnico permanente para asegurar que tú y tu equipo aprovechen al máximo la plataforma."
//         },
//         {
//             question: "¿Puedo probar Sprout antes de comprometerme?",
//             answer: "¡Claro! Ofrecemos una prueba gratuita de 30 días con todas las funcionalidades. No requerimos tarjeta de crédito para comenzar tu prueba."
//         },
//         {
//             question: "¿Qué sucede con mis datos si decido cancelar?",
//             answer: "Tus datos siempre te pertenecen. Si decides cancelar, te proporcionamos herramientas para exportar toda tu información de manera segura antes de cerrar tu cuenta."
//         }
//     ];

//     return (
//         <div className="sprout-landing">
//             {/* Navegación */}
//             <nav className="sprout-nav">
//                 <div className="nav-container">
//                     <div className="logo">
//                         <img src="../assets/Images/sproutinsigths.png" alt="" />
//                         <span>SproutInsights</span>
//                     </div>
//                     <div className="nav-links">
//                         <Link to="/" className="logo" onClick={() => setIsActive(false)}>Portafolio</Link>
//                         <a href="#features">Características</a>
//                         <a href="#pricing">Precios</a>
//                         <a href="#testimonials">Testimonios</a>
//                         <a href="#faq">FAQ</a>
//                     </div>
//                     <div className="nav-buttons">
//                         <button className="btn btn-outline">Iniciar Sesión</button>
//                         <button className="btn btn-primary pulse-btn">Prueba Gratis</button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <section className="hero-section">
//                 <div className="hero-container">
//                     <div className="hero-content">
//                         <h1>Haz crecer tu negocio como nunca antes</h1>
//                         <p className="hero-subtitle">La solución todo-en-uno que integra ERP y CRM diseñada especialmente para PYMEs</p>
                        
//                         <div className="hero-stats">
//                             <div className="stat">
//                                 <span className="stat-number">40%</span>
//                                 <span className="stat-text">Aumento en productividad</span>
//                             </div>
//                             <div className="stat">
//                                 <span className="stat-number">35%</span>
//                                 <span className="stat-text">Reducción de costos</span>
//                             </div>
//                             <div className="stat">
//                                 <span className="stat-number">28%</span>
//                                 <span className="stat-text">Más ventas</span>
//                             </div>
//                         </div>
                        
//                         <div className="hero-cta">
//                             <button className="btn btn-primary btn-large pulse-btn">
//                                 <span>Comenzar Prueba Gratuita</span>
//                                 <i className="fas fa-arrow-right"></i>
//                             </button>
//                             <div className="no-card-required">
//                                 <i className="fas fa-check-circle"></i>
//                                 <span>No requiere tarjeta de crédito</span>
//                             </div>
//                         </div>
                        
//                         <div className="limited-offer">
//                             <div className="offer-badge">
//                                 <span>Oferta de Lanzamiento</span>
//                             </div>
//                             <p>50% de descuento en todos los planes durante los primeros 3 meses</p>
//                             <div className="countdown">
//                                 <div className="countdown-item">
//                                     <span className="countdown-number">{countdown.days}</span>
//                                     <span className="countdown-label">Días</span>
//                                 </div>
//                                 <div className="countdown-item">
//                                     <span className="countdown-number">{countdown.hours}</span>
//                                     <span className="countdown-label">Horas</span>
//                                 </div>
//                                 <div className="countdown-item">
//                                     <span className="countdown-number">{countdown.minutes}</span>
//                                     <span className="countdown-label">Min</span>
//                                 </div>
//                                 <div className="countdown-item">
//                                     <span className="countdown-number">{countdown.seconds}</span>
//                                     <span className="countdown-label">Seg</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="hero-image">
//                         <img src="https://via.placeholder.com/600x400" alt="Sprout Dashboard" />
//                         <div className="floating-card card1">
//                             <i className="fas fa-chart-line"></i>
//                             <span>Ventas +24%</span>
//                         </div>
//                         <div className="floating-card card2">
//                             <i className="fas fa-users"></i>
//                             <span>Clientes Felices</span>
//                         </div>
//                         <div className="floating-card card3">
//                             <i className="fas fa-tasks"></i>
//                             <span>Productividad</span>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="hero-companies">
//                     <p>Empresas que confían en nosotros:</p>
//                     <div className="company-logos">
//                         <img src="https://via.placeholder.com/120x40" alt="Company 1" />
//                         <img src="https://via.placeholder.com/120x40" alt="Company 2" />
//                         <img src="https://via.placeholder.com/120x40" alt="Company 3" />
//                         <img src="https://via.placeholder.com/120x40" alt="Company 4" />
//                         <img src="https://via.placeholder.com/120x40" alt="Company 5" />
//                     </div>
//                 </div>
                
//                 <div className="scroll-down">
//                     <p>Descubre cómo Sprout puede transformar tu negocio</p>
//                     <div className="scroll-arrow">
//                         <i className="fas fa-chevron-down"></i>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section id="features" className={`features-section ${isVisible.features ? 'visible' : ''}`}>
//                 <div className="section-container">
//                     <div className="section-header">
//                         <h2>Todo lo que tu PYME necesita en un solo lugar</h2>
//                         <p>Solución integrada que elimina la necesidad de múltiples plataformas</p>
//                     </div>
                    
//                     <div className="features-grid">
//                         <div className="feature-card">
//                             <div className="feature-icon">
//                                 <i className="fas fa-store"></i>
//                             </div>
//                             <h3>ERP Completo</h3>
//                             <p>Gestiona inventario, compras, producción y finanzas sin complicaciones.</p>
//                             <div className="feature-bullet-points">
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Control de inventario en tiempo real</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Automatización de compras</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Reportes financieros</span>
//                                 </div>
//                             </div>
//                             <a href="#" className="feature-link">
//                                 <span>Conocer más</span>
//                                 <i className="fas fa-arrow-right"></i>
//                             </a>
//                         </div>
                        
//                         <div className="feature-card">
//                             <div className="feature-icon">
//                                 <i className="fas fa-users"></i>
//                             </div>
//                             <h3>CRM Potente</h3>
//                             <p>Administra clientes, ventas y marketing para impulsar tu crecimiento.</p>
//                             <div className="feature-bullet-points">
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Gestión de contactos centralizada</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Automatización de marketing</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Seguimiento de ventas</span>
//                                 </div>
//                             </div>
//                             <a href="#" className="feature-link">
//                                 <span>Conocer más</span>
//                                 <i className="fas fa-arrow-right"></i>
//                             </a>
//                         </div>
                        
//                         <div className="feature-card">
//                             <div className="feature-icon">
//                                 <i className="fas fa-chart-pie"></i>
//                             </div>
//                             <h3>Análisis Inteligente</h3>
//                             <p>Obtén insights valiosos para tomar decisiones más inteligentes.</p>
//                             <div className="feature-bullet-points">
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Dashboards personalizables</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Predicciones con IA</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Reportes automáticos</span>
//                                 </div>
//                             </div>
//                             <a href="#" className="feature-link">
//                                 <span>Conocer más</span>
//                                 <i className="fas fa-arrow-right"></i>
//                             </a>
//                         </div>
                        
//                         <div className="feature-card">
//                             <div className="feature-icon">
//                                 <i className="fas fa-mobile-alt"></i>
//                             </div>
//                             <h3>Acceso Móvil</h3>
//                             <p>Administra tu negocio desde cualquier lugar y en cualquier momento.</p>
//                             <div className="feature-bullet-points">
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Apps nativas para iOS y Android</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Sincronización en tiempo real</span>
//                                 </div>
//                                 <div className="bullet-point">
//                                     <i className="fas fa-check"></i>
//                                     <span>Notificaciones inteligentes</span>
//                                 </div>
//                             </div>
//                             <a href="#" className="feature-link">
//                                 <span>Conocer más</span>
//                                 <i className="fas fa-arrow-right"></i>
//                             </a>
//                         </div>
//                     </div>
                    
//                     <div className="feature-cta">
//                         <button className="btn btn-secondary">
//                             <span>Ver todas las características</span>
//                             <i className="fas fa-arrow-circle-right"></i>
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works Section */}
//             <section id="howItWorks" className={`how-it-works-section ${isVisible.howItWorks ? 'visible' : ''}`}>
//                 <div className="section-container">
//                     <div className="section-header">
//                         <h2>Implementación simple en solo 4 pasos</h2>
//                         <p>Te acompañamos en todo el proceso para asegurar tu éxito</p>
//                     </div>
                    
//                     <div className="steps-container">
//                         <div className="step-connector"></div>
                        
//                         <div className="step">
//                             <div className="step-number">1</div>
//                             <div className="step-content">
//                                 <h3>Regístrate</h3>
//                                 <p>Crea tu cuenta en menos de 2 minutos y accede a tu prueba gratuita de 30 días.</p>
//                             </div>
//                             <div className="step-image">
//                                 <img src="https://via.placeholder.com/300x200" alt="Registro" />
//                             </div>
//                         </div>
                        
//                         <div className="step right">
//                             <div className="step-number">2</div>
//                             <div className="step-content">
//                                 <h3>Configura tu perfil</h3>
//                                 <p>Personaliza la plataforma según las necesidades específicas de tu negocio.</p>
//                             </div>
//                             <div className="step-image">
//                                 <img src="https://via.placeholder.com/300x200" alt="Configuración" />
//                             </div>
//                         </div>
                        
//                         <div className="step">
//                             <div className="step-number">3</div>
//                             <div className="step-content">
//                                 <h3>Importa tus datos</h3>
//                                 <p>Nuestro equipo te ayuda a migrar toda tu información actual sin complicaciones.</p>
//                             </div>
//                             <div className="step-image">
//                                 <img src="https://via.placeholder.com/300x200" alt="Importación" />
//                             </div>
//                         </div>
                        
//                         <div className="step right">
//                             <div className="step-number">4</div>
//                             <div className="step-content">
//                                 <h3>¡Comienza a crecer!</h3>
//                                 <p>Aprovecha todas las herramientas para impulsar el crecimiento de tu negocio.</p>
//                             </div>
//                             <div className="step-image">
//                                 <img src="https://via.placeholder.com/300x200" alt="Crecimiento" />
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="setup-guarantee">
//                         <div className="guarantee-icon">
//                             <i className="fas fa-shield-alt"></i>
//                         </div>
//                         <div className="guarantee-content">
//                             <h3>Garantía de implementación en 7 días</h3>
//                             <p>Si no logras configurar completamente tu sistema en 7 días, nuestro equipo lo hará por ti <strong>¡gratis!</strong></p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Pricing Section */}
//             <section id="pricing" className={`pricing-section ${isVisible.pricing ? 'visible' : ''}`}>
//                 <div className="section-container">
//                     <div className="section-header">
//                         <h2>Planes a la medida de tu negocio</h2>
//                         <p>Paga solo por lo que necesitas y escala a medida que creces</p>
//                     </div>
                    
//                     <div className="pricing-toggle">
//                         <span>Facturación Mensual</span>
//                         <label className="switch">
//                             <input type="checkbox" />
//                             <span className="slider round"></span>
//                         </label>
//                         <span>Facturación Anual</span>
//                         <div className="save-badge">Ahorra 20%</div>
//                     </div>
                    
//                     <div className="pricing-grid">
//                         <div className="price-card starter">
//                             <div className="price-header">
//                                 <h3>Starter</h3>
//                                 <div className="price">
//                                     <span className="currency">$</span>
//                                     <span className="amount">29</span>
//                                     <span className="period">/mes</span>
//                                 </div>
//                                 <p>Ideal para emprendedores y microempresas</p>
//                             </div>
                            
//                             <div className="price-features">
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Hasta 3 usuarios</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>ERP básico</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>CRM básico</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>500 contactos</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>5GB almacenamiento</span>
//                                 </div>
//                                 <div className="price-feature disabled">
//                                     <i className="fas fa-times"></i>
//                                     <span>Análisis avanzados</span>
//                                 </div>
//                                 <div className="price-feature disabled">
//                                     <i className="fas fa-times"></i>
//                                     <span>Integración con API</span>
//                                 </div>
//                             </div>
                            
//                             <button className="btn btn-outline-primary">Comenzar Ahora</button>
//                         </div>
                        
//                         <div className="price-card professional">
//                             <div className="popular-badge">Más Popular</div>
//                             <div className="price-header">
//                                 <h3>Professional</h3>
//                                 <div className="price">
//                                     <span className="currency">$</span>
//                                     <span className="amount">79</span>
//                                     <span className="period">/mes</span>
//                                 </div>
//                                 <p>Perfecto para pequeñas empresas en crecimiento</p>
//                             </div>
                            
//                             <div className="price-features">
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Hasta 10 usuarios</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>ERP completo</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>CRM avanzado</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>2,500 contactos</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>25GB almacenamiento</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Análisis básicos</span>
//                                 </div>
//                                 <div className="price-feature disabled">
//                                     <i className="fas fa-times"></i>
//                                     <span>Integración con API</span>
//                                 </div>
//                             </div>
                            
//                             <button className="btn btn-primary pulse-btn">Comenzar Ahora</button>
//                         </div>
                        
//                         <div className="price-card enterprise">
//                             <div className="price-header">
//                                 <h3>Enterprise</h3>
//                                 <div className="price">
//                                     <span className="currency">$</span>
//                                     <span className="amount">149</span>
//                                     <span className="period">/mes</span>
//                                 </div>
//                                 <p>La solución completa para empresas medianas</p>
//                             </div>
                            
//                             <div className="price-features">
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Usuarios ilimitados</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>ERP premium</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>CRM premium</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Contactos ilimitados</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>100GB almacenamiento</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Análisis avanzados con IA</span>
//                                 </div>
//                                 <div className="price-feature">
//                                     <i className="fas fa-check"></i>
//                                     <span>Integración completa con API</span>
//                                 </div>
//                             </div>
                            
//                             <button className="btn btn-outline-primary">Comenzar Ahora</button>
//                         </div>
//                     </div>
                    
//                     <div className="enterprise-cta">
//                         <div className="enterprise-cta-content">
//                             <h3>¿Necesitas una solución personalizada?</h3>
//                             <p>Contáctanos para crear un plan a la medida de las necesidades específicas de tu empresa.</p>
//                         </div>
//                         <button className="btn btn-secondary">Contactar Ventas</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials Section */}
//             <section id="testimonials" className={`testimonials-section ${isVisible.testimonials ? 'visible' : ''}`}>
//                 <div className="section-container">
//                     <div className="section-header">
//                         <h2>Lo que dicen nuestros clientes</h2>
//                         <p>Empresas que ya están creciendo con Sprout</p>
//                     </div>
                    
//                     <div className="testimonials-grid">
//                         {testimonials.map((testimonial, index) => (
//                             <div className="testimonial-card" key={index}>
//                                 <div className="testimonial-content">
//                                     <div className="quote-icon">
//                                         <i className="fas fa-quote-left"></i>
//                                     </div>
//                                     <p>{testimonial.text}</p>
//                                 </div>
//                                 <div className="testimonial-author">
//                                     <img src={testimonial.image} alt={testimonial.name} />
//                                     <div className="author-info">
//                                         <h4>{testimonial.name}</h4>
//                                         <p>{testimonial.position}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
                    
//                     <div className="stats-row">
//                         <div className="stat-item">
//                             <div className="stat-number">2,500+</div>
//                             <div className="stat-label">Empresas Activas</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-number">98%</div>
//                             <div className="stat-label">Satisfacción Cliente</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-number">15,000+</div>
//                             <div className="stat-label">Usuarios Diarios</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-number">4.8/5</div>
//                             <div className="stat-label">Calificación Promedio</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section id="faq" className="faq-section">
//                 <div className="section-container">
//                     <div className="section-header">
//                         <h2>Preguntas Frecuentes</h2>
//                         <p>Todo lo que necesitas saber antes de comenzar</p>
//                     </div>
                    
//                     <div className="faq-grid">
//                         {faqs.map((faq, index) => (
//                             <div className="faq-item" key={index}>
//                                 <div className="faq-question">
//                                     <h3>{faq.question}</h3>
//                                     <div className="faq-icon">
//                                         <i className="fas fa-plus"></i>
//                                     </div>
//                                 </div>
//                                 <div className="faq-answer">
//                                     <p>{faq.answer}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
                    
//                     <div className="more-questions">
//                         <h3>¿Tienes más preguntas?</h3>
//                         <p>Nuestro equipo está listo para ayudarte en cada paso del camino</p>
//                         <button className="btn btn-secondary">Contactar Soporte</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Final CTA Section */}
//             <section className="final-cta-section">
//                 <div className="section-container">
//                     <div className="cta-content">
//                         <h2>Impulsa tu negocio hoy mismo con Sprout</h2>
//                         <p>Únete a miles de PYMEs que ya están creciendo con nuestra plataforma</p>
                        
//                         <div className="cta-features">
//                             <div className="cta-feature">
//                                 <i className="fas fa-check-circle"></i>
//                                 <span>Prueba gratuita de 30 días</span>
//                             </div>
//                             <div className="cta-feature">
//                                 <i className="fas fa-check-circle"></i>
//                                 <span>Implementación asistida</span>
//                             </div>
//                             <div className="cta-feature">
//                                 <i className="fas fa-check-circle"></i>
//                                 <span>Soporte 24/7</span>
//                             </div>
//                             <div className="cta-feature">
//                                 <i className="fas fa-check-circle"></i>
//                                 <span>Sin contratos a largo plazo</span>
//                             </div>
//                         </div>
                        
//                         <div className="final-buttons">
//                             <button className="btn btn-primary btn-large pulse-btn">
//                                 <span>Comenzar Prueba Gratuita</span>
//                                 <i className="fas fa-rocket"></i>
//                             </button>
//                             <button className="btn btn-outline-light">
//                                 <span>Ver Demostración</span>
//                                 <i className="fas fa-play-circle"></i>
//                             </button>
//                         </div>
//                     </div>
                    
//                     <div className="arrow-down-decoration">
//                         <div className="arrow-item">
//                             <i className="fas fa-chevron-down"></i>
//                         </div>
//                         <div className="arrow-item">
//                             <i className="fas fa-chevron-down"></i>
//                         </div>
//                         <div className="arrow-item">
//                             <i className="fas fa-chevron-down"></i>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="sprout-footer">
//                 <div className="footer-container">
//                     <div className="footer-main">
//                         <div className="footer-brand">
//                             <div className="footer-logo">
//                                 <img src="https://via.placeholder.com/50" alt="Sprout Logo" />
//                                 <span>Sprout</span>
//                             </div>
//                             <p>La solución todo-en-uno para el crecimiento de tu PYME.</p>
//                             <div className="social-icons">
//                                 <a href="#"><i className="fab fa-facebook"></i></a>
//                                 <a href="#"><i className="fab fa-twitter"></i></a>
//                                 <a href="#"><i className="fab fa-instagram"></i></a>
//                                 <a href="#"><i className="fab fa-linkedin"></i></a>
//                                 <a href="#"><i className="fab fa-youtube"></i></a>
//                             </div>
//                         </div>
                        
//                         <div className="footer-links">
//                             <div className="footer-column">
//                                 <h4>Producto</h4>
//                                 <ul>
//                                     <li><a href="#">Características</a></li>
//                                     <li><a href="#">Precios</a></li>
//                                     <li><a href="#">Integraciones</a></li>
//                                     <li><a href="#">Actualizaciones</a></li>
//                                     <li><a href="#">Hoja de ruta</a></li>
//                                 </ul>
//                             </div>
                            
//                             <div className="footer-column">
//                                 <h4>Recursos</h4>
//                                 <ul>
//                                     <li><a href="#">Guías</a></li>
//                                     <li><a href="#">Blog</a></li>
//                                     <li><a href="#">Tutoriales</a></li>
//                                     <li><a href="#">Webinars</a></li>
//                                     <li><a href="#">Casos de éxito</a></li>
//                                 </ul>
//                             </div>
                            
//                             <div className="footer-column">
//                                 <h4>Empresa</h4>
//                                 <ul>
//                                     <li><a href="#">Sobre nosotros</a></li>
//                                     <li><a href="#">Carreras</a></li>
//                                     <li><a href="#">Contacto</a></li>
//                                     <li><a href="#">Socios</a></li>
//                                     <li><a href="#">Prensa</a></li>
//                                 </ul>
//                             </div>
                            
//                             <div className="footer-column">
//                                 <h4>Soporte</h4>
//                                 <ul>
//                                     <li><a href="#">Centro de ayuda</a></li>
//                                     <li><a href="#">Comunidad</a></li>
//                                     <li><a href="#">Estado del sistema</a></li>
//                                     <li><a href="#">API Docs</a></li>
//                                     <li><a href="#">Contactar soporte</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="footer-bottom">
//                         <div className="copyright">
//                             <p>&copy; 2024 Sprout Software. Todos los derechos reservados.</p>
//                         </div>
//                         <div className="footer-legal">
//                             <a href="#">Términos de servicio</a>
//                             <a href="#">Política de privacidad</a>
//                             <a href="#">Política de cookies</a>
//                             <a href="#">Seguridad</a>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default LandingPageSprout;