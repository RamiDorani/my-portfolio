import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom';


import { Header } from './cmps/Header'
import { MyDetailes } from './cmps/MyDetailes'
import { Education } from './cmps/Education'
import { Skilles } from './cmps/Skilles'
import { Project } from './pages/Project'
import { Footer } from './cmps/Footer'
import ScrollReveal from 'scrollreveal'

export class App extends Component {
  componentDidMount(){
    ScrollReveal().reveal('.det', { delay: 200,duration: 600,reset: true});
    ScrollReveal().reveal('.proj', { delay: 350,duration: 600,reset: true });
    ScrollReveal().reveal('.ed', { delay: 500,duration: 600,reset: true });
    ScrollReveal().reveal('.skill', { delay: 650,duration: 600,reset: true });
  }
  render() {
    return(
      <Router>
      <div className="app-wrapper">
        <Header />
        <div className="det"><MyDetailes /></div>
        <div className="proj"><Project /></div>
        <div className="ed"><Education /></div>
        <div className="skill"><Skilles /></div>
        <Footer />
      </div>
    </Router>
    )
  }
}


ScrollReveal().reveal('.projects-wrapper', { delay: 2000 });
