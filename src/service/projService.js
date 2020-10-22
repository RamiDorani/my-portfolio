import {utilService} from './utilService'


export const projectService = {
    query,
}





const projects = [
    {_id :utilService.makeId(), name : 'FoodVenture',url : 'https://food-ventures-cajul.herokuapp.com/#/',img: require('../imgs/chef.jpg'),description : 'My final project. Ther is also frontend and backend.', sourceCode : "https://github.com/alexkaz357/FoodVentures.git"},
    {_id :utilService.makeId(), name : 'Meme Gen',url : 'https://ramidorani.github.io/sprint-2/',img: require('../imgs/meme-gen.png'),description : 'A meme generator implemented with Canvas', sourceCode : "https://github.com/RamiDorani/sprint-2.git"},
    {_id : utilService.makeId(), name : 'Minesweeper',url : 'https://ramidorani.github.io/CODING-ACADEMY-first-sprint/',img: require('../imgs/Minesweeper.png'),description : 'Pure JS game.', sourceCode : "https://github.com/RamiDorani/CODING-ACADEMY-first-sprint.git"}
];

console.log(projects);




function query() {
    return Promise.resolve(projects)
}

