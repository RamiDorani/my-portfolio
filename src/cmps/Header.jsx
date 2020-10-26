import React, { Component } from 'react'

import { NavBar } from './NavBar'
import { HeaderTitle } from './HeaderTitle'




export class Header extends Component {

    scrollDown() {
        let pageHeight = window.innerHeight;
        window.scrollBy(0, pageHeight);
      }

    render() {
        return (
            <div className="header">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <NavBar></NavBar>
                <HeaderTitle></HeaderTitle>
                <div className="arrow" onClick={this.scrollDown}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        )
    }
}
