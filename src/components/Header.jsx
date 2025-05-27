import React from 'react';
import '../assets/styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-text">
                    <h1 className="glitch-effect">
                        <span aria-hidden="true">ByEmmanuel Dev</span>
                        ByEmmanuel Dev
                        <span aria-hidden="true">ByEmmanuel Dev</span>
                    </h1>
                    <p className="subtitle">Backend Software Developer</p>
                    <p className="description">Creating of cloud based services with Java SpringBoot And ICPC Competitive Player</p>
                    
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                        <a href="#docs" className="btn btn-primary">Documentaciones</a>
                        <a href="#contact" className="btn btn-secondary">Contáctame</a>
                    </div>
                </div>
                
                <div className="header-graphic">
                    <div className="code-snippet">
     <pre><code className="language-java">
{`static void Passion() {
    System.out.println("🚀 Explorando mi pasión...");

    String[] pilares = {
        "Computer Science / Software Engineering", 
        "Ciberseguridad",
        "Matemáticas Aplicadas",
        "Redes Neuronales / ML / AI",
        
        "Desarrollo de Software",
        "Linux and ZSH", 
        "Trading y Finanzas Cuantitativas"
    };

    💡 Filosofía: Automatizar, Analizar y Aprender
    🔐 Ciberseguridad como estilo de vida
    ⌨️ Terminal: zsh - herramientas del ingeniero
    🍎 SO: macOS y Arch Linux
}`}
                        </code></pre>
                    </div>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="arrow-scroll">Scroll</div>
            </div>
        </header>
    );
};

export default Header;