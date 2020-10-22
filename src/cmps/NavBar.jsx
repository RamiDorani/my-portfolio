
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

 export class NavBar extends Component {


    toggleMenu() {
        document.body.classList.toggle('menu-open')
      }

    render() {
        return (
            <div>
                <div className="screen" onclick="toggleMenu()"></div>
                <nav>
                    <ul className="main-nav clean-list flex">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">CONTACT</a></li>
                    </ul>
                    <span className="mobile-menu" onClick={this.toggleMenu}>☰</span>
                </nav>
            </div>
        )
    }
}


