import React, { Component } from 'react'

export  class Footer extends Component {
    render() {
        return (
            <div className="footer flex-col">
               <section className="social-icons">
               <a href="https://www.facebook.com/rami.dorani" target="_blank"><i className="fab fa-facebook-f"></i></a>
               <a href="https://www.linkedin.com/in/rami-veted/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
               <a href="https://github.com/RamiDorani" target="_blank"><i className="fab fa-github"></i></a>
               <a href="https://wa.me/9720522029267" target="_blank"><i className="fab fa-whatsapp"></i></a>
               </section>
               <section className="copy-rights">
               <p>&copy; 2020 | Rami Veted Web Developer</p>
               </section>
               <section className="credits">
                   Designed By <span>Rami Veted</span>
               </section>
            </div>
        )
    }
}
