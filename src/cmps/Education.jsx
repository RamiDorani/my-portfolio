import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <div id="education" className="education-wrapper">
                <h1 className="title">Education</h1>
                <section className="container coding-academy">
                    <h1 className="ed-title">Bootcamp - Coding Academy</h1>
                    <h5 className="year-title">Full Stack / Frontend Web Developer  * October 2020</h5>
                    <p className="ed-description">An intensive coding bootcamp (640 hours) that qualifies Full stack developers.
                    During the bootcamp we learned to bulid end-2-end projects with the newest and most relevant technologies in 
                    the industry today.</p>
                </section>
                <section className="container shenkar">
                    <h1 className="ed-title">Shenkar College</h1>
                    <h5 className="year-title">B.Sc Software Engineering Student  * 2017</h5>
                    <p className="ed-description">Internship during studies in web and cloud. Average of 88. The studies made me have an algorithmic and analytical thinking. During my studies I learned data structures, complex algorithms and an object-oriented programming paradigm.</p>
                </section>
                    <hr className="buttom-line" />
            </div>
        )
    }
}
