import React from 'react';
import '../assets/styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="section-title">
                    <h2>Sobre mí</h2>
                    <div className="title-underline"></div>
                </div>
                
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image">
                            {/* Puedes reemplazar esto con tu foto real */}
                            <img src="https://via.placeholder.com/400x400" alt="Mi foto de perfil" />
                            <div className="image-decoration"></div>
                        </div>
                        
                        <div className="social-icons">
                            <a href="https://github.com/byemmanuel" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="about-text">
                        <h3>Backend Developer <span className="highlight">&</span> ICPC Competitive Player</h3>
                        
                        <p className="bio">
                            ¡Hola! Soy Emmanuel, un apasionado desarrollador backend con experiencia en arquitecturas cloud y sistemas distribuidos. Me especializo en crear soluciones robustas y escalables utilizando Java y Spring Boot.
                        </p>
                        
                        <p>
                            Como participante activo en competencias ICPC (International Collegiate Programming Contest), he desarrollado fuertes habilidades en algoritmos, estructuras de datos y resolución de problemas complejos.
                        </p>
                        
                        <div className="personal-traits">
                            <div className="trait">
                                <div className="trait-icon">🚀</div>
                                <div className="trait-text">
                                    <h4>Innovador</h4>
                                    <p>Busco constantemente nuevas soluciones y enfoques creativos para problemas técnicos.</p>
                                </div>
                            </div>
                            
                            <div className="trait">
                                <div className="trait-icon">🧠</div>
                                <div className="trait-text">
                                    <h4>Analítico</h4>
                                    <p>Disfruto descomponiendo problemas complejos en partes manejables.</p>
                                </div>
                            </div>
                            
                            <div className="trait">
                                <div className="trait-icon">🌱</div>
                                <div className="trait-text">
                                    <h4>Aprendizaje continuo</h4>
                                    <p>Siempre estudiando nuevas tecnologías y metodologías.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="cta-container">
                            <a href="/cv.pdf" className="cta-button" download>
                                <span>Descargar CV</span>
                                <i className="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="experience-timeline">
                    <h3 className="timeline-title">Mi Trayectoria</h3>
                    
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2022 - Presente</div>
                            <div className="timeline-content">
                                <h4>Backend Developer</h4>
                                <p>Desarrollando servicios cloud y APIs RESTful con Spring Boot</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2020 - 2022</div>
                            <div className="timeline-content">
                                <h4>Competidor ICPC</h4>
                                <p>Participación en competencias regionales de programación</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2019 - 2020</div>
                            <div className="timeline-content">
                                <h4>Desarrollador Jr.</h4>
                                <p>Primeros pasos en desarrollo de software con Java</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tech-stats">
                    <h3>Estadísticas Técnicas</h3>
                    
                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-percentage" style={{width: '90%'}}>
                                <span>Java</span>
                                <span>90%</span>
                            </div>
                        </div>
                        
                        <div className="stat-item">
                            <div className="stat-percentage" style={{width: '85%'}}>
                                <span>Spring Boot</span>
                                <span>85%</span>
                            </div>
                        </div>
                        
                        <div className="stat-item">
                            <div className="stat-percentage" style={{width: '80%'}}>
                                <span>SQL/Bases de Datos</span>
                                <span>80%</span>
                            </div>
                        </div>
                        
                        <div className="stat-item">
                            <div className="stat-percentage" style={{width: '75%'}}>
                                <span>AWS/Cloud</span>
                                <span>75%</span>
                            </div>
                        </div>
                        
                        <div className="stat-item">
                            <div className="stat-percentage" style={{width: '70%'}}>
                                <span>Docker/Kubernetes</span>
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;