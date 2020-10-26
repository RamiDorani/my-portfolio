import React, { Component } from 'react'

import {ProjectCard} from '../cmps/ProjectCard'
import {projectService} from '../service/projService'


export class Project extends Component {

    state = {
        projects : null
    }

    componentDidMount () {
        this.loadProjects();
    }

    loadProjects = async ()=> {
      const projects = await projectService.query();
      this.setState({projects : projects});
    }

    render() {
        const {projects} = this.state;
        if(!projects) return <div>Loading...</div>
        return (
            <div className="projects-wrapper" id="projects">
                <h1 className="title">My Projects</h1>
                <section className="container card-container flex">
                    {
                        projects.map(project => <ProjectCard  key={project._id} project={project} />)
                    }
                </section>
                <hr className="buttom-line" />
            </div>
        )
    }
}
