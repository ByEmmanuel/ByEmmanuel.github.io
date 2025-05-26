import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            link: 'https://enlace-a-proyecto1.com'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            link: 'https://enlace-a-proyecto2.com'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            link: 'https://enlace-a-proyecto3.com'
        }
    ];

    return (
        <div className="projects">
            <h2>Mis Proyectos</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;