import React, { Component } from 'react'


export class Footer extends Component {
    scrollDown() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section>
                <div className="footer flex-col">
                    <div className="arrow-up" onClick={this.scrollDown}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id='starss'></div>
                    <div id='starss2'></div>
                    <div id='starss3'></div>
                    <section className="social-icons">
                        <a href="https://www.facebook.com/rami.dorani" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/rami-veted/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/RamiDorani" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://wa.me/9720522029267" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </section>
                    <section className="copy-rights ">
                        <p>&copy; 2020 | Rami Veted Web Developer</p>
                    </section>
                    <section className="credits">
                        Designed By <span>Rami Veted</span>
                    </section>
                </div>
            </section>
        )
    }
}
