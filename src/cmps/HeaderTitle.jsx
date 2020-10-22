import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';



export class HeaderTitle extends Component {
    render() {
        return (
            <div className="header-titles flex-col">
                <h1 className="name-introduction">Hi, I'm <span className="my-name">Rami Veted</span></h1>
                <Typewriter
                    options={{
                        strings : ["I'm a Fullstackkkkkkkkkkk / Frontend Developer"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'paragraph'
                    }}
                />
            </div>
        )
    }
}
