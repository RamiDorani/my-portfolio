import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <div id="education">
                <h1 className="title">Education</h1>
                <section className="container coding-academy">
                    <h2 className="ed-title">Bootcamp - Coding Academy</h2>
                    <h5 className="year-title">Full Stack / Frontend Web Developer  * October 2020</h5>
                    <p className="ed-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab debitis inventore quis et magnam deleniti aut nobis. Nisi ipsa earum eos, dolores sapiente iure porro quos temporibus repellendus vero.</p>
                </section>
                <section className="container shenkar">
                    <h2 className="ed-title">Shenkar College</h2>
                    <h5 className="year-title">B.Sc Software Engineering Student  * 2017</h5>
                    <p className="ed-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias, recusandae eligendi beatae consequuntur tempora cum molestiae expedita quis similique dolorem ratione deserunt ex minus non excepturi suscipit? Laboriosam, sapiente?</p>
                </section>
                    <hr className="buttom-line" />
            </div>
        )
    }
}
