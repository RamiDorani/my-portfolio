import React from 'react'


export function SkillList({ skill }) {
    return (
        // <div className="skill-card">
        //     <img className="skill-img" src={skill.img} alt=""/>
        //     <p>{skill.description}</p>
        // </div>
        <div className='cont'>
            <div className="card-cont">
                <div className="card flex-col">
                    <div className="front">
                    <img className="skill-img" src={skill.img} alt=""/>
                    <hr/>
                   <div className="skill-name-container"> <h2 className={skill.name==="Responsive Design"? "rwd" : skill.name==="vue" || skill.name==="C++" ? "special" : "skill-name"}  >{skill.name}</h2></div>
                    </div>
                    <div className="back">
                        <p>{skill.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

