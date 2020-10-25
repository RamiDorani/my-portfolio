import React from 'react'


export function SkillList({ skill }) {
    return (
        // <div className="skill-card">
        //     <img className="skill-img" src={skill.img} alt=""/>
        //     <p>{skill.description}</p>
        // </div>
        <div className='cont'>
            <div className="card-cont">
                <div className="card">
                    <div className="front">
                    <img className="skill-img" src={skill.img} alt=""/>
                    <hr/>
                    <h2>{skill.name}</h2>
                    </div>
                    <div className="back">
                        <p>{skill.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

