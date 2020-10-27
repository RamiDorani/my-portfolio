
import React, { Component } from 'react'


 export class NavBar extends Component {


    toggleMenu() {
        document.body.classList.toggle('menu-open')
      }

    render() {
        return (
            <div className="container">
                <div className="screen" onClick={this.toggleMenu}></div>
                <nav>
                    <ul className="main-nav clean-list flex">
                    <li onClick={this.toggleMenu}><a href="#">HOME</a></li>
                    <li onClick={this.toggleMenu}><a href="#about">ABOUT</a></li>
                    <li onClick={this.toggleMenu}><a href="#projects">PROJECTS</a></li>
                    <li onClick={this.toggleMenu}><a href="#contact">CONTACT</a></li>
                    </ul>
                    <span className="mobile-menu" onClick={this.toggleMenu}>☰</span>
                </nav>
            </div>
        )
    }
}


