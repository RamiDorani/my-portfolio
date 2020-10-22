import React, { Component } from 'react'




export class MyDetailes extends Component {
  
    render() {
        return (
                <section className="my-detailes-wrapper" id="about">
                    <div className="up flex-col space-between container">
                    <h2 className="my-headers about-me-header">About Me</h2>
                    <p className="p about-me-p">Fullstack / Frontend Web Developer and I'm also a student for software engineering at shenkar collage and I am about to start my final year of my studies. I have knowledge and experience in writing end-2-end single-page-aplication using the LATEST web technologies such as React.js, Node.js, Redux and more.</p>
                    </div>
                    <div className="down container">
                    <h2 className="my-headers contact-me-header">Contact Me</h2>
                    <p className="p contact-me-p">
                    Rami veted <br />
                    Nahal Habesor 23, Tel-Aviv <br />
                    052-2029267 <br />
                    ramid1703@gmail.com <br />
                    </p>
                    </div>
                    <hr className="buttom-line" />
                </section>
        )
    }
}
