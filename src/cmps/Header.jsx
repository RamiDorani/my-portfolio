import React, { Component } from 'react'

import { NavBar } from './NavBar'
import { HeaderTitle } from './HeaderTitle'



export class Header extends Component {


    render() {
        return (
            <div className="header">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <NavBar></NavBar>
                <HeaderTitle></HeaderTitle>
            </div>
           
        )
    }
}
