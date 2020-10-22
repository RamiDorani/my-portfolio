import React, { Component } from 'react'


export  class MyDetailes extends Component {
    render() {
        return (
            <div className="my-detailes-wrapper">
            <img className="my-pic" src={require('../imgs/me.jpeg')} alt=""/>
            <section className="my-detailes">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nulla accusantium optio iste deleniti, excepturi vel eum. Magni, nobis! Facere quidem, vel assumenda ipsa laboriosam officiis ea inventore at atque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit, vitae cupiditate hic id, laboriosam esse doloremque ab blanditiis explicabo enim, quibusdam facilis temporibus nihil similique ipsa? Ipsum, ex quam.
                </p>
                <h2>Contact Me</h2>
                <p>
                    Rami veted <br/>
                    Nahal Habesor 23, Tel-Aviv <br/>
                    052-2029267 <br/>
                    ramid1703@gmail.com <br/>
                </p>
            </section>
            </div>
        )
    }
}
