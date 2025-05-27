import React, { useState } from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí normalmente conectarías con un backend o servicio como EmailJS
        // Simulación del envío exitoso
        setFormStatus({
            submitted: true,
            error: false,
            message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.'
        });
        
        // Resetear el formulario después de 5 segundos
        setTimeout(() => {
            setFormStatus({
                submitted: false,
                error: false,
                message: ''
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-title">
                    <h2>Contáctame</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Información de Contacto</h3>
                        <p className="contact-description">
                            Estoy disponible para proyectos freelance, oportunidades laborales o simplemente para conversar sobre tecnología. 
                            No dudes en contactarme a través del formulario o por cualquiera de estos medios:
                        </p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <a href="mailto:tu.email@ejemplo.com">tu.email@ejemplo.com</a>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-text">
                                    <h4>Ubicación</h4>
                                    <p>Guadalajara Jalisco, México</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="contact-text">
                                    <h4>GitHub</h4>
                                    <a href="https://github.com/ByEmmanuel" target="_blank" rel="noopener noreferrer">github.com/ByEmmanuel</a>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <div className="contact-text">
                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">miperfilLnkd</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="availability">
                            <h4>Disponibilidad</h4>
                            <div className="availability-status">
                                <span className="status-dot available"></span>
                                <span>Disponible para nuevos proyectos</span>
                            </div>
                        </div>
                        
                        <div className="contact-decoration">
                            <div className="decoration-circle c1"></div>
                            <div className="decoration-circle c2"></div>
                            <div className="decoration-circle c3"></div>
                        </div>
                    </div>
                    
                    <div className="contact-form-container">
                        <h3>Envíame un mensaje</h3>
                        
                        {formStatus.submitted && (
                            <div className="form-message success">
                                <i className="fas fa-check-circle"></i>
                                <p>{formStatus.message}</p>
                            </div>
                        )}
                        
                        {formStatus.error && (
                            <div className="form-message error">
                                <i className="fas fa-exclamation-circle"></i>
                                <p>{formStatus.message}</p>
                            </div>
                        )}
                        
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="fas fa-user"></i> Nombre
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="fas fa-envelope"></i> Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        placeholder="tu.email@ejemplo.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">
                                    <i className="fas fa-tag"></i> Asunto
                                </label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required 
                                    placeholder="¿De qué quieres hablar?"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">
                                    <i className="fas fa-comment-alt"></i> Mensaje
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                                    rows="5"
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">
                                <span>Enviar Mensaje</span>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                        
                        <div className="form-footer">
                            <p>También puedes contactarme en redes sociales</p>
                            <div className="social-icons">
                                <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/byemmanuel" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;