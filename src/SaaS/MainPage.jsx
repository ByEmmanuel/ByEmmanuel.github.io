import React, { useState, useEffect, useRef } from 'react';
import './assets/styles/MainPage.css';

const MainPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeFeature, setActiveFeature] = useState('analytics');
  const sectionRefs = useRef({});

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'analytics',
      icon: 'fas fa-chart-line',
      title: 'Análisis de Datos Avanzado',
      subtitle: 'Extrae insights valiosos de tu información',
      description: 'Transforma datos complejos en decisiones inteligentes con nuestras herramientas de análisis visual y estadístico.',
      color: '#27AE60',
      benefits: [
        'Limpieza automática de datos',
        'Dashboards interactivos en tiempo real',
        'Análisis predictivo de tendencias',
        'Reportes automatizados'
      ]
    },
    {
      id: 'ml',
      icon: 'fas fa-brain',
      title: 'Machine Learning Empresarial',
      subtitle: 'Predice el futuro de tu negocio',
      description: 'Algoritmos de IA que aprenden de tus datos para optimizar operaciones y predecir comportamientos.',
      color: '#9B59B6',
      benefits: [
        'Predicción de demanda',
        'Segmentación inteligente de clientes',
        'Detección de anomalías',
        'Optimización automática de precios'
      ]
    },
    {
      id: 'automation',
      icon: 'fas fa-robot',
      title: 'Automatización Inteligente',
      subtitle: 'Elimina tareas repetitivas',
      description: 'Workflows automatizados que se adaptan a tu negocio y mejoran la eficiencia operacional.',
      color: '#E74C3C',
      benefits: [
        'Procesos automáticos de compra',
        'Alertas inteligentes',
        'Gestión de inventario predictiva',
        'Comunicación automatizada con clientes'
      ]
    }
  ];

  const tools = [
    {
      category: 'ERP (Planificación de Recursos)',
      icon: 'fas fa-cogs',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tools: [
        { name: 'Gestión Financiera', desc: 'Control total de ingresos, gastos y flujo de caja' },
        { name: 'Inventario Inteligente', desc: 'Seguimiento automático con alertas de restock' },
        { name: 'Recursos Humanos', desc: 'Gestión de nómina, horarios y rendimiento' },
        { name: 'Contabilidad Automatizada', desc: 'Facturación y reportes fiscales automáticos' }
      ]
    },
    {
      category: 'CRM (Gestión de Clientes)',
      icon: 'fas fa-users',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tools: [
        { name: 'Pipeline de Ventas', desc: 'Seguimiento visual del proceso de ventas' },
        { name: 'Segmentación de Clientes', desc: 'Grupos automáticos basados en comportamiento' },
        { name: 'Marketing Automation', desc: 'Campañas personalizadas y automatizadas' },
        { name: 'Servicio al Cliente', desc: 'Tickets, chat y soporte unificado' }
      ]
    },
    {
      category: 'Analytics & BI',
      icon: 'fas fa-chart-pie',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tools: [
        { name: 'Dashboards en Tiempo Real', desc: 'KPIs y métricas actualizadas al instante' },
        { name: 'Predicción de Demanda', desc: 'IA que anticipa las necesidades de stock' },
        { name: 'Análisis de Rentabilidad', desc: 'Identifica productos y servicios más lucrativos' },
        { name: 'Reportes Inteligentes', desc: 'Informes automáticos con insights accionables' }
      ]
    }
  ];

  const comparisonData = [
    {
      operation: 'Análisis de ventas mensuales',
      traditional: 'Exportar Excel, hacer gráficos manualmente',
      withSaas: 'Dashboard automático con tendencias y predicciones',
      timeSaved: '4 horas → 2 minutos'
    },
    {
      operation: 'Segmentación de clientes',
      traditional: 'Revisar base de datos manualmente',
      withSaas: 'IA segmenta automáticamente por comportamiento',
      timeSaved: '1 día → Instantáneo'
    },
    {
      operation: 'Control de inventario',
      traditional: 'Contar físicamente, actualizar hojas',
      withSaas: 'Seguimiento en tiempo real con alertas automáticas',
      timeSaved: '6 horas → Automático'
    },
    {
      operation: 'Reportes financieros',
      traditional: 'Compilar datos de múltiples fuentes',
      withSaas: 'Reportes generados automáticamente',
      timeSaved: '3 horas → 30 segundos'
    }
  ];

  return (
    <main className="rzx-main-content">
      {/* Hero Features Section */}
      <section 
        id="hero-features" 
        ref={el => sectionRefs.current['hero-features'] = el}
        className={`rzx-hero-features ${visibleSections['hero-features'] ? 'rzx-visible' : ''}`}
      >
        <div className="rzx-container">
          <div className="rzx-section-header">
            <span className="rzx-tag">Tecnología de Vanguardia</span>
            <h2>Herramientas que Transforman tu Negocio</h2>
            <p>Combina el poder del análisis de datos, machine learning y automatización en una sola plataforma</p>
          </div>

          <div className="rzx-features-showcase">
            <div className="rzx-features-nav">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`rzx-feature-tab ${activeFeature === feature.id ? 'rzx-active' : ''}`}
                  onClick={() => setActiveFeature(feature.id)}
                  style={{ '--tab-color': feature.color }}
                >
                  <i className={feature.icon}></i>
                  <span>{feature.title}</span>
                </button>
              ))}
            </div>

            <div className="rzx-features-content">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`rzx-feature-panel ${activeFeature === feature.id ? 'rzx-active' : ''}`}
                >
                  <div className="rzx-feature-info">
                    <div className="rzx-feature-icon" style={{ backgroundColor: feature.color }}>
                      <i className={feature.icon}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <h4>{feature.subtitle}</h4>
                    <p>{feature.description}</p>
                    
                    <div className="rzx-benefits-grid">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="rzx-benefit-item">
                          <i className="fas fa-check-circle"></i>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rzx-feature-visual">
                    <div className="rzx-mockup-screen">
                      <div className="rzx-screen-header">
                        <div className="rzx-screen-dots">
                          <span></span><span></span><span></span>
                        </div>
                        <div className="rzx-screen-title">{feature.title}</div>
                      </div>
                      <div className="rzx-screen-content">
                        {feature.id === 'analytics' && (
                          <div className="rzx-analytics-demo">
                            <div className="rzx-chart-area">
                              <div className="rzx-chart-bars">
                                {[65, 85, 45, 75, 95, 70, 88].map((height, i) => (
                                  <div 
                                    key={i} 
                                    className="rzx-bar" 
                                    style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            <div className="rzx-metrics-row">
                              <div className="rzx-metric">
                                <span className="rzx-metric-value">+24.5%</span>
                                <span className="rzx-metric-label">Crecimiento</span>
                              </div>
                              <div className="rzx-metric">
                                <span className="rzx-metric-value">$47.2K</span>
                                <span className="rzx-metric-label">Ingresos</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {feature.id === 'ml' && (
                          <div className="rzx-ml-demo">
                            <div className="rzx-prediction-graph">
                              <div className="rzx-prediction-line"></div>
                              <div className="rzx-data-points">
                                {[30, 45, 35, 60, 55, 75, 85].map((y, i) => (
                                  <div 
                                    key={i} 
                                    className="rzx-data-point" 
                                    style={{ 
                                      left: `${(i + 1) * 12}%`, 
                                      bottom: `${y}%`,
                                      animationDelay: `${i * 0.2}s`
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            <div className="rzx-ml-insights">
                              <div className="rzx-insight">
                                <i className="fas fa-brain"></i>
                                <span>Predicción: +15% próximo mes</span>
                              </div>
                              <div className="rzx-insight">
                                <i className="fas fa-target"></i>
                                <span>Precisión del modelo: 94.2%</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {feature.id === 'automation' && (
                          <div className="rzx-automation-demo">
                            <div className="rzx-workflow">
                              {['Trigger', 'Process', 'Action', 'Result'].map((step, i) => (
                                <div key={i} className="rzx-workflow-step">
                                  <div 
                                    className="rzx-step-circle"
                                    style={{ animationDelay: `${i * 0.5}s` }}
                                  >
                                    {i + 1}
                                  </div>
                                  <span>{step}</span>
                                  {i < 3 && <div className="rzx-step-arrow">→</div>}
                                </div>
                              ))}
                            </div>
                            <div className="rzx-automation-status">
                              <div className="rzx-status-item rzx-active">
                                <i className="fas fa-play-circle"></i>
                                <span>5 procesos activos</span>
                              </div>
                              <div className="rzx-status-item">
                                <i className="fas fa-clock"></i>
                                <span>23h ahorradas esta semana</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview Section */}
      <section 
        id="tools-overview" 
        ref={el => sectionRefs.current['tools-overview'] = el}
        className={`rzx-tools-section ${visibleSections['tools-overview'] ? 'rzx-visible' : ''}`}
      >
        <div className="rzx-container">
          <div className="rzx-section-header">
            <span className="rzx-tag">Suite Completa</span>
            <h2>Todo lo que tu PyME Necesita</h2>
            <p>Desde gestión financiera hasta predicciones de IA, tenemos cada aspecto de tu negocio cubierto</p>
          </div>

          <div className="rzx-tools-grid">
            {tools.map((category, index) => (
              <div 
                key={index} 
                className="rzx-tool-category"
                style={{ '--category-gradient': category.gradient }}
              >
                <div className="rzx-category-header">
                  <div className="rzx-category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3>{category.category}</h3>
                </div>
                
                <div className="rzx-tools-list">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="rzx-tool-item">
                      <div className="rzx-tool-marker"></div>
                      <div className="rzx-tool-content">
                        <h4>{tool.name}</h4>
                        <p>{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section 
        id="comparison" 
        ref={el => sectionRefs.current['comparison'] = el}
        className={`rzx-comparison-section ${visibleSections['comparison'] ? 'rzx-visible' : ''}`}
      >
        <div className="rzx-container">
          <div className="rzx-section-header">
            <span className="rzx-tag">Antes vs Después</span>
            <h2>Transforma tu Forma de Trabajar</h2>
            <p>Descubre cómo nuestra tecnología elimina horas de trabajo manual</p>
          </div>

          <div className="rzx-comparison-table">
            <div className="rzx-table-header">
              <div className="rzx-column">Operación</div>
              <div className="rzx-column rzx-traditional">Método Tradicional</div>
              <div className="rzx-column rzx-saas">Con GrowthSuite</div>
              <div className="rzx-column rzx-savings">Tiempo Ahorrado</div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="rzx-table-row"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="rzx-column rzx-operation">
                  <i className="fas fa-tasks"></i>
                  {row.operation}
                </div>
                <div className="rzx-column rzx-traditional">
                  <i className="fas fa-times-circle"></i>
                  {row.traditional}
                </div>
                <div className="rzx-column rzx-saas">
                  <i className="fas fa-check-circle"></i>
                  {row.withSaas}
                </div>
                <div className="rzx-column rzx-savings">
                  <span className="rzx-savings-badge">{row.timeSaved}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rzx-comparison-summary">
            <div className="rzx-summary-card">
              <div className="rzx-summary-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="rzx-summary-content">
                <h3>10x más rápido</h3>
                <p>Automatiza procesos que antes tomaban horas</p>
              </div>
            </div>
            <div className="rzx-summary-card">
              <div className="rzx-summary-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="rzx-summary-content">
                <h3>Decisiones inteligentes</h3>
                <p>IA que analiza y sugiere las mejores acciones</p>
              </div>
            </div>
            <div className="rzx-summary-card">
              <div className="rzx-summary-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="rzx-summary-content">
                <h3>Crecimiento medible</h3>
                <p>Métricas claras del impacto en tu negocio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="main-cta" 
        ref={el => sectionRefs.current['main-cta'] = el}
        className={`rzx-cta-section ${visibleSections['main-cta'] ? 'rzx-visible' : ''}`}
      >
        <div className="rzx-container">
          <div className="rzx-cta-content">
            <h2>¿Listo para Revolucionar tu Negocio?</h2>
            <p>Únete a más de 1,500 PyMEs que ya están creciendo con GrowthSuite</p>
            
            <div className="rzx-cta-buttons">
              <a href="/register" className="rzx-btn-primary rzx-pulse">
                <span>Comenzar Prueba Gratuita</span>
                <i className="fas fa-arrow-right"></i>
                <div className="rzx-btn-glow"></div>
              </a>
              <a href="#demo" className="rzx-btn-secondary">
                <i className="fas fa-play"></i>
                <span>Ver Demo en Vivo</span>
              </a>
            </div>
            
            <div className="rzx-cta-guarantees">
              <div className="rzx-guarantee">
                <i className="fas fa-shield-alt"></i>
                <span>14 días gratis</span>
              </div>
              <div className="rzx-guarantee">
                <i className="fas fa-credit-card"></i>
                <span>Sin compromiso</span>
              </div>
              <div className="rzx-guarantee">
                <i className="fas fa-headset"></i>
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;