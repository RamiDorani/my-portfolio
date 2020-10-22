import React from 'react'


export  function ProjectCard({project}) {
    return (
        <div>
            <h2>{project.name}</h2>
            <img className="proj-img" src={project.img} alt=""/>
            <p>{project.description}</p>
            <section className="project-links">
            <a href={project.url} target="_blank">Live Demo</a>
            <a href={project.sourceCode} target="_blank">Source Code</a>
            </section>
        </div>
    )
}
