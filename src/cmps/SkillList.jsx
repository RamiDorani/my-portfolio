
import React from 'react'

export  function SkillList({skill}) {
    return (
        <div className="skill-card">
            <img className={skill.name==='node JS' ? "node-img" : "skill-img"} src={skill.img} alt=""/>
            <p>{skill.description}</p>
        </div>
    )
}

