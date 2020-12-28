import {utilService} from './utilService'


export const projectService = {
    query,
}





const projects = [
    {_id :utilService.makeId(), name : 'FoodVenture',url : 'https://food-ventures-cajul.herokuapp.com/#/',img: require('../imgs/chef.jpg'),description : "Marketplace for Chef's services, in this app you can order the chef services to your home or alternatively go to the chef's place.", tech : "React, sass, redux, socket.io, node.js, mongoDB, rest API, ajax, express, SPA.", sourceCode : "https://github.com/RamiDorani/FoodVenture.git"},
    {_id :utilService.makeId(), name : 'Meme Gen',url : 'https://ramidorani.github.io/sprint-2/',img: require('../imgs/400.png'),description : 'app that generate meme, this app have gallary of popular memes but if you want another img you can upload one from your computer and use him to create a meme', tech : " javaScript, css, canvas, SPA.", sourceCode : "https://github.com/RamiDorani/sprint-2.git"},
    {_id : utilService.makeId(), name : 'Minesweeper',url : 'https://ramidorani.github.io/CODING-ACADEMY-first-sprint/',img: require('../imgs/Minesweeper.png'),description : 'The familiar and beloved Minesweeper game. Comes with different difficulty levels and awesome Features like timer and hints.', tech : "HTML5,JavaScript Vanilla,CSS3,SPA.", sourceCode : "https://github.com/RamiDorani/CODING-ACADEMY-first-sprint.git"}
];

console.log(projects);




function query() {
    return Promise.resolve(projects)
}

