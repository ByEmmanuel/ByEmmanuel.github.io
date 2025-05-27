import React, { useState } from 'react';
import '../assets/styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const projectList = [
        {
            id: 1,
            title: 'API RESTful con Spring Boot',
            description: 'Desarrollo de una API completa para gestión de recursos con autenticación JWT, documentación Swagger y pruebas unitarias.',
            longDescription: 'Esta API implementa un sistema completo de gestión de recursos con operaciones CRUD, validación de datos, manejo de excepciones personalizado y seguridad basada en roles con JWT. Incluye una cobertura de pruebas superior al 80% y documentación exhaustiva con Swagger.',
            image: 'https://via.placeholder.com/600x340/0A2647/FFFFFF?text=Spring+Boot+API',
            technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'JWT', 'Docker'],
            category: 'backend',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: true,
            date: 'Junio 2023'
        },
        {
            id: 2,
            title: 'Microservicio de Pagos',
            description: 'Implementación de un microservicio para procesamiento de pagos integrado con pasarelas como Stripe y PayPal.',
            longDescription: 'Este microservicio forma parte de una arquitectura más grande y se encarga del procesamiento de pagos. Integra múltiples pasarelas de pago, implementa el patrón Saga para transacciones distribuidas y utiliza comunicación asíncrona con Apache Kafka.',
            image: 'https://via.placeholder.com/600x340/4B56D2/FFFFFF?text=Microservicio+Pagos',
            technologies: ['Java', 'Spring Cloud', 'Kafka', 'Docker', 'Kubernetes', 'MongoDB'],
            category: 'microservices',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: true,
            date: 'Octubre 2023'
        },
        {
            id: 3,
            title: 'Sistema de Recomendaciones',
            description: 'Algoritmo de recomendación basado en preferencias de usuario utilizando técnicas de machine learning.',
            longDescription: 'Este sistema implementa algoritmos de filtrado colaborativo y basado en contenido para generar recomendaciones personalizadas. Utiliza datos históricos de interacciones de usuarios para entrenar modelos que predicen preferencias futuras.',
            image: 'https://via.placeholder.com/600x340/472D2D/FFFFFF?text=Sistema+Recomendaciones',
            technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Flask', 'AWS'],
            category: 'machinelearning',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: false,
            date: 'Enero 2024'
        },
        {
            id: 4,
            title: 'Dashboard Analítico',
            description: 'Interfaz de visualización de datos en tiempo real con gráficos interactivos y filtros dinámicos.',
            longDescription: 'Este dashboard presenta visualizaciones interactivas para análisis de datos empresariales. Ofrece filtros en tiempo real, exportación de datos, alertas personalizadas y está optimizado para dispositivos móviles.',
            image: 'https://via.placeholder.com/600x340/2C3333/FFFFFF?text=Dashboard+Analítico',
            technologies: ['React', 'D3.js', 'Node.js', 'Redux', 'Material UI', 'Firebase'],
            category: 'frontend',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: false,
            date: 'Marzo 2024'
        },
        {
            id: 5,
            title: 'Plataforma E-learning',
            description: 'Sistema completo para cursos online con gestión de contenidos, evaluaciones y seguimiento de progreso.',
            longDescription: 'Esta plataforma incluye funcionalidades para administración de cursos, evaluaciones automatizadas, sistema de comentarios y calificaciones, y paneles de seguimiento de progreso para instructores y estudiantes.',
            image: 'https://via.placeholder.com/600x340/22A699/FFFFFF?text=E-learning+Platform',
            technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Redis'],
            category: 'fullstack',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: true,
            date: 'Diciembre 2023'
        },
        {
            id: 6,
            title: 'Aplicación de Chat en Tiempo Real',
            description: 'Chat multiusuario con mensajería instantánea, notificaciones y almacenamiento de historial.',
            longDescription: 'Esta aplicación permite comunicación en tiempo real entre usuarios, con soporte para mensajes privados y grupales, notificaciones push, compartir archivos y búsqueda en el historial de conversaciones.',
            image: 'https://via.placeholder.com/600x340/301E67/FFFFFF?text=Real-time+Chat',
            technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'Express', 'JWT'],
            category: 'fullstack',
            demoLink: 'https://github.com/byemmanuel',
            codeLink: 'https://github.com/byemmanuel',
            featured: false,
            date: 'Septiembre 2023'
        }
    ];

    const filteredProjects = filter === 'all' 
        ? projectList 
        : projectList.filter(project => project.category === filter);

    const featuredProjects = projectList.filter(project => project.featured);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="section-title">
                    <h2>Mis Proyectos</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">Una muestra de mi trabajo reciente en desarrollo de software</p>
                </div>

                {/* Proyectos destacados */}
                <div className="featured-projects">
                    <h3 className="featured-heading">Proyectos Destacados</h3>
                    <div className="featured-grid">
                        {featuredProjects.map((project) => (
                            <div className="featured-card" key={project.id}>
                                <div className="featured-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="featured-overlay">
                                        <div className="featured-links">
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-btn">Ver Demo</a>
                                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-btn">Ver Código</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <h4>{project.title}</h4>
                                    <p>{project.longDescription}</p>
                                    <div className="project-date">{project.date}</div>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filtros para todos los proyectos */}
                <div className="project-filters">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                        onClick={() => setFilter('all')}
                    >
                        Todos
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} 
                        onClick={() => setFilter('backend')}
                    >
                        Backend
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} 
                        onClick={() => setFilter('frontend')}
                    >
                        Frontend
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} 
                        onClick={() => setFilter('fullstack')}
                    >
                        Full-Stack
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'microservices' ? 'active' : ''}`} 
                        onClick={() => setFilter('microservices')}
                    >
                        Microservicios
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'machinelearning' ? 'active' : ''}`} 
                        onClick={() => setFilter('machinelearning')}
                    >
                        Machine Learning
                    </button>
                </div>

                {/* Grid de todos los proyectos */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="category-badge">{project.category}</div>
                            </div>
                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="project-tech-mini">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="tech-tag-mini">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tech-tag-mini">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                                <div className="project-links">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                        <span>Demo</span>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                        <span>Código</span>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>¿Interesado en ver más de mi trabajo?</p>
                    <a href="https://github.com/byemmanuel" target="_blank" rel="noopener noreferrer" className="github-link">
                        Ver más proyectos en GitHub
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;