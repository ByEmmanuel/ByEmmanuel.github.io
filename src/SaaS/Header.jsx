import React, { useState, useEffect, useRef } from 'react';
import '../SaaS/assets/styles/HeaderSprout.css';

const HeaderGrowthSuite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('erp');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  useEffect(() => {
    // Efecto de aparición al cargar la página
    setIsVisible(true);
    
    // Rotación automática de pestañas
    const tabInterval = setInterval(() => {
      setActiveTab(prev => prev === 'erp' ? 'crm' : prev === 'crm' ? 'analytics' : 'erp');
      //Este es el tiempo en el que se cambiara entre tab y tab
    }, 5000);
    
    // Detectar scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Efecto parallax al mover el mouse
    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(tabInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Datos para las métricas dinámicas
  const metrics = [
    { icon: 'chart-pie', label: 'Ventas Q2', value: '+24.8%', color: '#27AE60' },
    { icon: 'user-plus', label: 'Nuevos Clientes', value: '+12', color: '#4A6FFF' },
    { icon: 'clock', label: 'Horas Ahorradas', value: '128h', color: '#9B59B6' }
  ];

  return (
    <header 
      ref={headerRef}
      className={`pzk-main-hero ${isScrolled ? 'pzk-scrolled' : ''}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y
      }}
    >
      {/* Fondo minimalista con gradiente y spotlight */}
      <div className="pzk-bg-modern">
        <div className="pzk-spotlight"></div>
        <div className="pzk-grid-pattern"></div>
        <div className="pzk-accent-circle"></div>
      </div>

      <div className="pzk-wrapper pzk-hero-wrapper">
        <div className={`pzk-content-block ${isVisible ? 'pzk-visible' : ''}`}>
                            {/* Métricas flotantes con animación */}
      {metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className={`pzk-floating-metric pzk-metric-0${i+1}`}
                        style={{'--metric-color': metric.color}}
                      >
                        <div className="pzk-metric-icon">
                          <i className={`fas fa-${metric.icon}`}></i>
                        </div>
                        <div className="pzk-metric-data">
                          <span className="pzk-metric-label">{metric.label}</span>
                          <span className="pzk-metric-value">{metric.value}</span>
                        </div>
                      </div>
                    ))}
      
          
          <div className="pzk-badge-container">
            <div className="pzk-status-badge">
              <div className="pzk-badge-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <span>All-in-One para PYMEs</span>
            </div>
          </div>

          <h1 className="pzk-headline">
            <span className="pzk-headline-top">Gestiona y haz crecer</span>
            tu negocio con <span className="pzk-text-accent">una única</span> plataforma
          </h1>
          
          <p className="pzk-description">
            <strong>GrowthSuite</strong> combina ERP, CRM y analíticas avanzadas en una plataforma integrada que 
            automatiza tus procesos, optimiza operaciones y potencia tu crecimiento.
          </p>
          
          <div className="pzk-action-group">
            <a href="/register" className="pzk-btn-primary">
              <div className="pzk-btn-bg"></div>
              <span>Comenzar Prueba Gratuita</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            
            <a href="#demo" className="pzk-btn-outline">
              <div className="pzk-play-icon">
                <i className="fas fa-play"></i>
              </div>
              <span>Ver demostración</span>
            </a>
          </div>
          
          <div className="pzk-trust-indicators">
            {['Sin tarjeta de crédito', '14 días de prueba', 'Soporte 24/7'].map((text, index) => (
              <div key={index} className="pzk-indicator">
                <div className="pzk-check-mark">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        
        <div className={`pzk-visual-block ${isVisible ? 'pzk-visible' : ''}`}>
          <div className="pzk-dashboard-container">
            <div className="pzk-perspective-wrapper">
              <div className="pzk-dashboard-mockup">
                <div className="pzk-mockup-header">
                  <div className="pzk-mockup-controls">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="pzk-tab-navigation">
                    {['erp', 'crm', 'analytics'].map(tab => (
                      <button 
                        key={tab}
                        className={`pzk-tab ${activeTab === tab ? 'pzk-tab-active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        <i className={`fas fa-${tab === 'erp' ? 'boxes' : tab === 'crm' ? 'users' : 'chart-line'}`}></i>
                        <span>{tab.toUpperCase()}</span>
                        {activeTab === tab && <div className="pzk-tab-indicator"></div>}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pzk-mockup-content">
                  <div className="pzk-dashboard-screen">
                    {activeTab === 'erp' && (
                      <div className="pzk-erp-dashboard">
                        <div className="pzk-dashboard-header">
                          <h3>Panel de Control ERP</h3>
                          <div className="pzk-date-display">Junio 2023</div>
                        </div>
                        
                        <div className="pzk-chart-container">
                          <div className="pzk-chart-bars">
                            {[65, 40, 85, 30, 70, 50, 90].map((height, i) => (
                              <div key={i} className="pzk-bar" style={{height: `${height}%`}}></div>
                            ))}
                          </div>
                          <div className="pzk-chart-labels">
                            <span>Lun</span><span>Mar</span><span>Mie</span>
                            <span>Jue</span><span>Vie</span><span>Sab</span><span>Dom</span>
                          </div>
                        </div>
                        
                        <div className="pzk-data-cards">
                          <div className="pzk-data-card">
                            <div className="pzk-card-label">Inventario</div>
                            <div className="pzk-card-value">12,384</div>
                            <div className="pzk-card-trend pzk-up">+5.2%</div>
                          </div>
                          <div className="pzk-data-card">
                            <div className="pzk-card-label">Pedidos</div>
                            <div className="pzk-card-value">934</div>
                            <div className="pzk-card-trend pzk-up">+12.4%</div>
                          </div>
                          <div className="pzk-data-card">
                            <div className="pzk-card-label">Costos</div>
                            <div className="pzk-card-value">$48.5K</div>
                            <div className="pzk-card-trend pzk-down">-3.1%</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'crm' && (
                      <div className="pzk-crm-dashboard">
                        <div className="pzk-dashboard-header">
                          <h3>Panel de Control CRM</h3>
                          <div className="pzk-date-display">Junio 2023</div>
                        </div>
                        
                        <div className="pzk-funnel-container">
                          <div className="pzk-funnel-stage" style={{width: '100%'}}>
                            <span>Prospectos</span>
                            <div className="pzk-stage-count">287</div>
                          </div>
                          <div className="pzk-funnel-stage" style={{width: '80%'}}>
                            <span>Calificados</span>
                            <div className="pzk-stage-count">164</div>
                          </div>
                          <div className="pzk-funnel-stage" style={{width: '60%'}}>
                            <span>Propuestas</span>
                            <div className="pzk-stage-count">98</div>
                          </div>
                          <div className="pzk-funnel-stage" style={{width: '40%'}}>
                            <span>Negociación</span>
                            <div className="pzk-stage-count">45</div>
                          </div>
                          <div className="pzk-funnel-stage" style={{width: '25%'}}>
                            <span>Cerrados</span>
                            <div className="pzk-stage-count">23</div>
                          </div>
                        </div>
                        
                        <div className="pzk-data-cards">
                          <div className="pzk-data-card">
                            <div className="pzk-card-label">Tasa Conversión</div>
                            <div className="pzk-card-value">8.2%</div>
                            <div className="pzk-card-trend pzk-up">+1.4%</div>
                          </div>
                          <div className="pzk-data-card">
                            <div className="pzk-card-label">Tiempo de Ciclo</div>
                            <div className="pzk-card-value">18 días</div>
                            <div className="pzk-card-trend pzk-down">-2.5 días</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'analytics' && (
                      <div className="pzk-analytics-dashboard">
                        <div className="pzk-dashboard-header">
                          <h3>Panel de Analytics</h3>
                          <div className="pzk-date-display">Junio 2023</div>
                        </div>
                        
                        <div className="pzk-chart-grid">
                          <div className="pzk-chart-item pzk-chart-large">
                            <div className="pzk-chart-title">Rendimiento por Canal</div>
                            <div className="pzk-donut-chart">
                                <svg viewBox="0 0 36 36">
                                  <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#10B981" />
                                      <stop offset="100%" stopColor="#34D399" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#6366F1" />
                                      <stop offset="100%" stopColor="#818CF8" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#8B5CF6" />
                                      <stop offset="100%" stopColor="#A78BFA" />
                                    </linearGradient>
                                    <filter id="glow">
                                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                      <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                      </feMerge>
                                    </filter>
                                  </defs>
                                  <circle cx="18" cy="18" r="12" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="45 100" />
                                  <circle cx="18" cy="18" r="12" fill="none" stroke="#6366F1" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="-45" />
                                  <circle cx="18" cy="18" r="12" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="25 100" strokeDashoffset="-75" />
                                </svg>
                                <div className="pzk-donut-label">+18.5%</div>
                                <div className="pzk-donut-markers">
                                  <div className="pzk-donut-marker"></div>
                                  <div className="pzk-donut-marker"></div>
                                  <div className="pzk-donut-marker"></div>
                                  <div className="pzk-donut-marker"></div>
                                </div>
                              </div>
                            <div className="pzk-chart-legend">
                              <div className="pzk-legend-item"><span style={{background: '#27AE60'}}></span>Directo</div>
                              <div className="pzk-legend-item"><span style={{background: '#4A6FFF'}}></span>Social</div>
                              <div className="pzk-legend-item"><span style={{background: '#9B59B6'}}></span>Referidos</div>
                            </div>
                          </div>
                          <div className="pzk-chart-item">
                            <div className="pzk-chart-title">Usuarios Activos</div>
                            <div className="pzk-data-value">12,847</div>
                            <div className="pzk-trend-badge pzk-up">+12.3%</div>
                          </div>
                          <div className="pzk-chart-item">
                            <div className="pzk-chart-title">Tiempo Promedio</div>
                            <div className="pzk-data-value">4m 32s</div>
                            <div className="pzk-trend-badge pzk-up">+0:42</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                  </div>
                </div>
                
                
                <div className="pzk-feature-caption">
                  {activeTab === 'erp' && (
                    <p>Gestiona inventario, finanzas y operaciones en un solo lugar</p>
                  )}
                  {activeTab === 'crm' && (
                    <p>Atrae, convierte y fideliza clientes con nuestro potente CRM</p>
                  )}
                  {activeTab === 'analytics' && (
                    <p>Visualiza datos en tiempo real para tomar mejores decisiones</p>
                  )}
                </div>
              </div>
              
              {/* Efecto de reflejo debajo del dashboard */}
              <div className="pzk-reflection"></div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="pzk-social-proof">
        <div className="pzk-wrapper">
          <div className="pzk-proof-label">
            Empresas que confían en nosotros
          </div>
          <div className="pzk-client-logos">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="pzk-logo-item">
                <div className="pzk-logo-placeholder">
                  <span>Cliente {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderGrowthSuite;