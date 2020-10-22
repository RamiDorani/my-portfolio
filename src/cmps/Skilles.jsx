import React, { Component } from 'react'

import {SkillList} from './SkillList'
import { skillService } from '../service/skillService'

export class Skilles extends Component {

    state = {
        skilles : null
    }

    componentDidMount() {
         this.loadSkilles();
    }

    loadSkilles = async ()=> {
        const mySkilles = await skillService.query();
        this.setState({skilles : mySkilles })
    }



    render() {
        const {skilles} = this.state
        console.log(skilles);
        if (!skilles) return <div>Loading...</div>
        return (
            <div>
                <h1>My Skilles</h1>
                <section className="skill-wrapper">
                    {
                      skilles.map(skill => <SkillList key={skill._id} skill={skill} />)  
                    }
                </section>
            </div>
        )
    
    }
}