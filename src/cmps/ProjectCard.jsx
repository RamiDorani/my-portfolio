import React, { Component } from 'react'
import { Button } from '@material-ui/core';


export class ProjectCard extends Component {

    render() {
        return (
            <div className="card-wrapper">
                <div className="card-top">
                    <img className="image" src={this.props.project.img} alt="" />
                </div>

                <div className="card-bottom">
                    <div className="cardDetails">
                        <h1>{this.props.project.name}</h1>
                        <p><span className="desc">Description:</span> {this.props.project.description}</p>
                        <p><span className="tech">Technologies:</span> {this.props.project.tech}</p>
                    </div>
                    <br />
                    <div className="btns flex">
                    <Button size="small" color="secondary" variant="contained"> <a href={this.props.project.url} target="_blank">Live Demo</a></Button>
                    <Button size="small" color="secondary" variant="contained"><a href={this.props.project.sourceCode} target="_blank">Source Code</a></Button>
                    </div>
                </div>
            </div>
        )
    }
}


 // <div id={this.props.project._id} className="cardContainer">
            //     <div className="cardBox">
            //         <div className="cardHeader">
            //             <img className="img" src={this.props.project.img} alt="" />
            //         </div>
            //         <div className="cardDetails">
            //             <h1>{this.props.project.name}</h1>
            //             <p>{this.props.project.description}</p>
            //         </div>
            //         <div className="cardFooter">
            //            <Button> <a href={this.props.project.url} target="_blank">Live Demo</a></Button>
            //             <Button><a href={this.props.project.sourceCode} target="_blank">Source Code</a></Button>
            //         </div>
            //     </div>
            // </div>