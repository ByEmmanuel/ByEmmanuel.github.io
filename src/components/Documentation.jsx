import React, { useState } from 'react';
import '../assets/styles/Documentation.css';

const Documentation = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Datos de ejemplo para la documentación
    const documentationItems = [
        {
            id: 1,
            title: 'Sprout Insights',
            description: 'Documentación completa del proyecto Sprout Insights, incluyendo arquitectura, API y guías de usuario.',
            category: 'architecture',
            tags: ['Diseño', 'Analisís de datos', 'Graficas'],
            lastUpdated: '29/05/2025',
            downloadUrl: '/docs/system-architecture.pdf',
            readUrl: '/SaaS',
            icon: 'fas fa-sitemap'
        },
        {
            id: 2,
            title: 'API RESTful Documentation',
            description: 'Guía completa de endpoints, parámetros y respuestas de la API.',
            category: 'api',
            tags: ['REST', 'Endpoints', 'JSON'],
            lastUpdated: '15/05/2024',
            downloadUrl: '/docs/api-documentation.pdf',
            readUrl: '/docs/api',
            icon: 'fas fa-server'
        },
        {
            id: 3,
            title: 'Guía de Instalación',
            description: 'Instrucciones paso a paso para instalar y configurar el proyecto.',
            category: 'guide',
            tags: ['Setup', 'Configuración', 'Requisitos'],
            lastUpdated: '10/05/2024',
            downloadUrl: '/docs/installation-guide.pdf',
            readUrl: '/docs/installation',
            icon: 'fas fa-download'
        },
        {
            id: 4,
            title: 'Arquitectura del Sistema',
            description: 'Documentación detallada sobre la arquitectura y componentes del sistema.',
            category: 'architecture',
            tags: ['Diseño', 'Componentes', 'Diagramas'],
            lastUpdated: '01/05/2024',
            downloadUrl: '/docs/system-architecture.pdf',
            readUrl: '/docs/architecture',
            icon: 'fas fa-sitemap'
        },
        {
            id: 5,
            title: 'Tutorial: Primeros Pasos',
            description: 'Guía para principiantes con ejemplos prácticos para comenzar.',
            category: 'tutorial',
            tags: ['Básico', 'Tutorial', 'Ejemplos'],
            lastUpdated: '28/04/2024',
            downloadUrl: '/docs/getting-started.pdf',
            readUrl: '/docs/tutorial',
            icon: 'fas fa-graduation-cap'
        },
        {
            id: 6,
            title: 'Referencia de Base de Datos',
            description: 'Esquemas, relaciones y modelos de datos utilizados en el proyecto.',
            category: 'database',
            tags: ['SQL', 'Schema', 'ER Diagrams'],
            lastUpdated: '05/05/2024',
            downloadUrl: '/docs/database-reference.pdf',
            readUrl: '/docs/database',
            icon: 'fas fa-database'
        },
        {
            id: 7,
            title: 'Guía de Seguridad',
            description: 'Prácticas recomendadas y configuraciones de seguridad para el sistema.',
            category: 'security',
            tags: ['Seguridad', 'Autenticación', 'Protección'],
            lastUpdated: '12/05/2024',
            downloadUrl: '/docs/security-guide.pdf',
            readUrl: '/docs/security',
            icon: 'fas fa-shield-alt'
        },
        {
            id: 8,
            title: 'API RESTful Documentation',
            description: 'Guía completa de endpoints, parámetros y respuestas de la API.',
            category: 'api',
            tags: ['REST', 'Endpoints', 'JSON'],
            lastUpdated: '15/05/2022',
            downloadUrl: '/docs/api-documentation.pdf',
            readUrl: '/docs/api',
            icon: 'fas fa-server'
        },
    ];

    // Filtrar documentos por categoría y término de búsqueda
    const filteredDocs = documentationItems.filter(doc => 
        (activeCategory === 'all' || doc.category === activeCategory) && 
        (doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    // Documentos destacados (3 más recientes)
    const featuredDocs = [...documentationItems]
        .sort((a, b) => new Date(b.lastUpdated.split('/').reverse().join('-')) - 
                          new Date(a.lastUpdated.split('/').reverse().join('-')))
        .slice(0, 3);

    return (
        <section id="documentation" className="documentation-section">
            <div className="documentation-container">
                <div className="section-title">
                    <h2>Documentaciones</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">Recursos técnicos y guías para todos mis proyectos</p>
                </div>

                <div className="documentation-content">
                    <div className="documentation-sidebar">
                        <div className="search-container">
                            <h3>Buscar Documentación</h3>
                            <div className="search-box">
                                <input 
                                    type="text" 
                                    placeholder="Buscar documentos..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="search-btn">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className="categories-container">
                            <h3>Categorías</h3>
                            <ul className="categories-list">
                                <li 
                                    className={activeCategory === 'all' ? 'active' : ''}
                                    onClick={() => setActiveCategory('all')}
                                >
                                    <i className="fas fa-layer-group"></i>
                                    <span>Todos los Documentos</span>
                                </li>
                                <li 
                                    className={activeCategory === 'api' ? 'active' : ''}
                                    onClick={() => setActiveCategory('api')}
                                >
                                    <i className="fas fa-server"></i>
                                    <span>Documentación API</span>
                                </li>
                                <li 
                                    className={activeCategory === 'guide' ? 'active' : ''}
                                    onClick={() => setActiveCategory('guide')}
                                >
                                    <i className="fas fa-book"></i>
                                    <span>Guías de Usuario</span>
                                </li>
                                <li 
                                    className={activeCategory === 'architecture' ? 'active' : ''}
                                    onClick={() => setActiveCategory('architecture')}
                                >
                                    <i className="fas fa-sitemap"></i>
                                    <span>Arquitectura</span>
                                </li>
                                <li 
                                    className={activeCategory === 'tutorial' ? 'active' : ''}
                                    onClick={() => setActiveCategory('tutorial')}
                                >
                                    <i className="fas fa-graduation-cap"></i>
                                    <span>Tutoriales</span>
                                </li>
                                <li 
                                    className={activeCategory === 'database' ? 'active' : ''}
                                    onClick={() => setActiveCategory('database')}
                                >
                                    <i className="fas fa-database"></i>
                                    <span>Base de Datos</span>
                                </li>
                                <li 
                                    className={activeCategory === 'security' ? 'active' : ''}
                                    onClick={() => setActiveCategory('security')}
                                >
                                    <i className="fas fa-shield-alt"></i>
                                    <span>Seguridad</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="featured-container">
                            <h3>Documentos Recientes</h3>
                            <ul className="featured-list">
                                {featuredDocs.map(doc => (
                                    <li key={doc.id} className="featured-item">
                                        <i className={doc.icon}></i>
                                        <div className="featured-info">
                                            <h4>{doc.title}</h4>
                                            <p>Actualizado: {doc.lastUpdated}</p>
                                        </div>
                                        <a href={doc.readUrl} className="quick-view-btn">
                                            <i className="fas fa-eye"></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="contact-decoration">
                            <div className="decoration-circle c1"></div>
                            <div className="decoration-circle c2"></div>
                            <div className="decoration-circle c3"></div>
                        </div>
                    </div>
                    
                    <div className="documentation-main">
                        <h3>Recursos de Documentación {activeCategory !== 'all' && `- ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}</h3>
                        
                        {filteredDocs.length === 0 ? (
                            <div className="no-results">
                                <i className="fas fa-search"></i>
                                <p>No se encontraron documentos que coincidan con tu búsqueda.</p>
                                <button 
                                    className="reset-search-btn"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setActiveCategory('all');
                                    }}
                                >
                                    Resetear búsqueda
                                </button>
                            </div>
                        ) : (
                            <div className="documentation-grid">
                                {filteredDocs.map(doc => (
                                    <div key={doc.id} className="doc-card">
                                        <div className="doc-icon">
                                            <i className={doc.icon}></i>
                                        </div>
                                        <div className="doc-content">
                                            <h4>{doc.title}</h4>
                                            <p>{doc.description}</p>
                                            <div className="doc-tags">
                                                {doc.tags.map((tag, index) => (
                                                    <span key={index} className="doc-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="doc-meta">
                                                <span className="doc-date">
                                                    <i className="fas fa-calendar-alt"></i> 
                                                    {doc.lastUpdated}
                                                </span>
                                                <span className="doc-category">
                                                    <i className="fas fa-folder"></i> 
                                                    {doc.category.charAt(0).toUpperCase() + doc.category.slice(1)}
                                                </span>
                                            </div>
                                            <div className="doc-actions">
                                                <a href={doc.readUrl} className="doc-btn read-btn">
                                                    <span>Leer</span>
                                                    <i className="fas fa-book-open"></i>
                                                </a>
                                                <a href={doc.downloadUrl} className="doc-btn download-btn">
                                                    <span>Descargar</span>
                                                    <i className="fas fa-download"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className="doc-footer">
                            <p>¿No encuentras lo que buscas?</p>
                            <a href="#contact" className="request-doc-btn">
                                <span>Solicitar documentación</span>
                                <i className="fas fa-paper-plane"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;