import React, { useState, useEffect } from 'react';
import '../assets/styles/Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('technical');
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        // Inicia la animación cuando el componente se monta
        setAnimateSkills(true);
        
        // Reset de animación cuando cambia la categoría
        const resetAnimation = () => {
            setAnimateSkills(false);
            setTimeout(() => setAnimateSkills(true), 50);
        };
        
        resetAnimation();
    }, [activeCategory]);

    const technicalSkills = [
        {
            category: 'Backend',
            skills: [
                { name: 'Java', level: 90, icon: 'fab fa-java' },
                { name: 'Spring Boot', level: 85, icon: 'fas fa-leaf' },
                { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
                { name: 'Python', level: 70, icon: 'fab fa-python' },
                { name: 'C++', level: 65, icon: 'fas fa-code' }
            ]
        },
        {
            category: 'Frontend',
            skills: [
                { name: 'HTML5', level: 85, icon: 'fab fa-html5' },
                { name: 'CSS3', level: 80, icon: 'fab fa-css3-alt' },
                { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
                { name: 'React', level: 75, icon: 'fab fa-react' },
                { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' }
            ]
        },
        {
            category: 'Bases de Datos',
            skills: [
                { name: 'MySQL', level: 85, icon: 'fas fa-database' },
                { name: 'PostgreSQL', level: 80, icon: 'fas fa-database' },
                { name: 'MongoDB', level: 75, icon: 'fas fa-leaf' },
                { name: 'Redis', level: 70, icon: 'fas fa-server' },
                { name: 'Elasticsearch', level: 65, icon: 'fas fa-search' }
            ]
        },
        {
            category: 'DevOps & Cloud',
            skills: [
                { name: 'Docker', level: 80, icon: 'fab fa-docker' },
                { name: 'Kubernetes', level: 70, icon: 'fas fa-dharmachakra' },
                { name: 'AWS', level: 75, icon: 'fab fa-aws' },
                { name: 'CI/CD', level: 80, icon: 'fas fa-sync-alt' },
                { name: 'Linux', level: 85, icon: 'fab fa-linux' }
            ]
        }
    ];

    const softSkills = [
        { name: 'Resolución de Problemas', icon: 'fas fa-puzzle-piece', description: 'Capacidad para analizar situaciones complejas y encontrar soluciones efectivas.' },
        { name: 'Trabajo en Equipo', icon: 'fas fa-users', description: 'Experiencia en colaboración con equipos multidisciplinarios en entornos ágiles.' },
        { name: 'Comunicación', icon: 'fas fa-comments', description: 'Habilidad para comunicar ideas técnicas de manera clara y concisa.' },
        { name: 'Gestión del Tiempo', icon: 'fas fa-clock', description: 'Eficiente organización y priorización de tareas para cumplir con los plazos.' },
        { name: 'Adaptabilidad', icon: 'fas fa-sync', description: 'Rápida adaptación a nuevas tecnologías y entornos de trabajo cambiantes.' },
        { name: 'Pensamiento Crítico', icon: 'fas fa-brain', description: 'Evaluación objetiva de problemas y decisiones basadas en evidencia.' }
    ];

    const languages = [
        { name: 'Español', level: 'Nativo', icon: 'fas fa-flag' },
        { name: 'Inglés', level: 'Avanzado (C1)', icon: 'fas fa-flag' },
        { name: 'Portugués', level: 'Intermedio (B1)', icon: 'fas fa-flag' }
    ];

    const certifications = [
        { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023', icon: 'fab fa-aws' },
        { name: 'Oracle Certified Professional Java SE 11', issuer: 'Oracle', year: '2022', icon: 'fab fa-java' },
        { name: 'Spring Professional', issuer: 'VMware', year: '2022', icon: 'fas fa-leaf' },
        { name: 'Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2021', icon: 'fas fa-dharmachakra' }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="section-title">
                    <h2>Mis Habilidades</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">Competencias técnicas y personales que he desarrollado</p>
                </div>

                <div className="skills-category-tabs">
                    <button 
                        className={`category-tab ${activeCategory === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('technical')}
                    >
                        <i className="fas fa-laptop-code"></i>
                        Habilidades Técnicas
                    </button>
                    <button 
                        className={`category-tab ${activeCategory === 'soft' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('soft')}
                    >
                        <i className="fas fa-brain"></i>
                        Habilidades Blandas
                    </button>
                    <button 
                        className={`category-tab ${activeCategory === 'languages' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('languages')}
                    >
                        <i className="fas fa-language"></i>
                        Idiomas
                    </button>
                    <button 
                        className={`category-tab ${activeCategory === 'certifications' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('certifications')}
                    >
                        <i className="fas fa-certificate"></i>
                        Certificaciones
                    </button>
                </div>

                <div className="skills-content">
                    {activeCategory === 'technical' && (
                        <div className="technical-skills">
                            {technicalSkills.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="skill-category">
                                    <h3 className="category-title">
                                        {category.category}
                                    </h3>
                                    <div className="skills-list">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className={`skill-item ${animateSkills ? 'animate' : ''}`} style={{animationDelay: `${skillIndex * 0.1}s`}}>
                                                <div className="skill-icon">
                                                    <i className={skill.icon}></i>
                                                </div>
                                                <div className="skill-info">
                                                    <div className="skill-name">{skill.name}</div>
                                                    <div className="skill-bar-container">
                                                        <div 
                                                            className="skill-bar" 
                                                            style={{width: animateSkills ? `${skill.level}%` : '0%'}}
                                                        >
                                                            <span className="skill-percentage">{skill.level}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeCategory === 'soft' && (
                        <div className="soft-skills">
                            <div className="soft-skills-grid">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className={`soft-skill-card ${animateSkills ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                        <div className="soft-skill-icon">
                                            <i className={skill.icon}></i>
                                        </div>
                                        <h4>{skill.name}</h4>
                                        <p>{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeCategory === 'languages' && (
                        <div className="languages-section">
                            <div className="languages-list">
                                {languages.map((language, index) => (
                                    <div key={index} className={`language-item ${animateSkills ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                        <div className="language-icon">
                                            <i className={language.icon}></i>
                                        </div>
                                        <div className="language-info">
                                            <h4>{language.name}</h4>
                                            <p>{language.level}</p>
                                        </div>
                                        <div className="language-level-indicator">
                                            <div className={`level-dot ${language.level.includes('Nativo') ? 'active' : ''}`}></div>
                                            <div className={`level-dot ${language.level.includes('Avanzado') || language.level.includes('Nativo') ? 'active' : ''}`}></div>
                                            <div className={`level-dot ${language.level.includes('Intermedio') || language.level.includes('Avanzado') || language.level.includes('Nativo') ? 'active' : ''}`}></div>
                                            <div className={`level-dot ${language.level.includes('Básico') || language.level.includes('Intermedio') || language.level.includes('Avanzado') || language.level.includes('Nativo') ? 'active' : ''}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeCategory === 'certifications' && (
                        <div className="certifications-section">
                            <div className="certifications-list">
                                {certifications.map((cert, index) => (
                                    <div key={index} className={`certification-item ${animateSkills ? 'animate' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                                        <div className="certification-icon">
                                            <i className={cert.icon}></i>
                                        </div>
                                        <div className="certification-info">
                                            <h4>{cert.name}</h4>
                                            <p>{cert.issuer} • {cert.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;