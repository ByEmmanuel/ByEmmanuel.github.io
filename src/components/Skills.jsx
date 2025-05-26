import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'CSS',
        'HTML',
        'Node.js',
        'Git',
        'Python',
        'SQL'
    ];

    return (
        <div className="skills">
            <h2>Mis Habilidades</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;