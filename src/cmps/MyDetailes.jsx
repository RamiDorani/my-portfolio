import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import cv  from '../docs/cv.docx'



export class MyDetailes extends Component {
  
    render() {
        return (
                <section className="my-detailes-wrapper" id="about">
                    <div className="up flex-col space-between container">
                    <h2 className="my-headers about-me-header">About Me</h2>
                    <p className="p about-me-p">Fullstack / Frontend Web Developer And I also studied software engineering at Shenkar College for 3 years. I have knowledge and experience in writing end-2-end single-page-aplication using the LATEST web technologies such as React.js, Node.js, Redux and more.</p>
                    </div>
                    <div className="down container">
                    <h2 className="my-headers contact-me-header">Contact Me</h2>
                    <ul id="contact" className="contact-det">
                        <li> Rami veted</li>
                        <li className="li">Nahal Habesor 23, Tel-Aviv </li>
                        <li className="li"><Button variant="outlined" size="large" color="primary"><a className="contact-now" href="https://wa.me/9720522029267" target="_blank">052-2029267</a></Button></li>
                        <li className="li"> <Button variant="outlined" size="large" color="primary"><a className="contact-now" href="mailto:ramid1703@gmail.com">ramid1703@gmail.com</a></Button></li>
                        <li className="li"><Button variant="contained" color="primary"><a title="Dowloand my cv" download="Rami Veted-CV" href={cv}>DOWNLOAD CV</a></Button></li>
                    </ul>
                    </div>
                    <hr className="buttom-line" />
                </section>
        )
    }
}
