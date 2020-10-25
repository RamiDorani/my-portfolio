import React from 'react'
import {Card,CardActionArea ,CardActions ,CardContent ,CardMedia ,Button ,Typography } from '@material-ui/core';

export  function SkillList({skill}) {
    return (
        <div className="skill-card">
            <img className="skill-img" src={skill.img} alt=""/>
            <p>{skill.description}</p>
        </div>
    //     <Card className="skill-card">
    //     <CardActionArea>
    //       <CardMedia
    //         className="skill-img"
    //         image={skill.img}
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           {skill.name}
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           {skill.description}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    )
}

