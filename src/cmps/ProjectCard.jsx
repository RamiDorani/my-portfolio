import React, { Component } from 'react'
import { Button } from '@material-ui/core';


export class ProjectCard extends Component {

    render() {
        return (
            <div className="card-wrapper">
            <div className="card-top">
            <img className="img image" src={this.props.project.img} alt="" />
            </div>
             
            <div className="card-bottom">
            <div className="cardDetails">
                         <h1>{this.props.project.name}</h1>
                         <p>{this.props.project.description}</p>
                     </div>
              <br />
              <Button> <a href={this.props.project.url} target="_blank">Live Demo</a></Button>
              <Button><a href={this.props.project.sourceCode} target="_blank">Source Code</a></Button>
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