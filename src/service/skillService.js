import {utilService} from './utilService'


export const skillService = {
    query
}

  
const skilles = [
    {_id : utilService.makeId(), name : 'react JS', img : require('../imgs/react.png') , description : 'React was my first framework and I had an instant connection to it. In my React based projects I used Redux as the state manegment and Hooks. It is an AMAZING framework!.'},
    {_id : utilService.makeId(), name : 'node JS', img : require('../imgs/nodeJS.png') , description :"node JS is my server-side scripting language, It's offers an Easy Scalability and most importantly it's Easy to Learn. Im my progects I use Express as web framework for Node.js."},
    {_id : utilService.makeId(), name : 'mongoDB', img : require('../imgs/mongo.png') , description : ' MongoDB enables developers that use data to build easily, adapt quickly, and scale reliably. In all my end-2-end projects I used mongoDB.'},
    {_id : utilService.makeId(), name : 'Responsive Design', img : require('../imgs/responsive-design.png') , description : 'Responsive Web Design (RWD) is an approach to web design aimed at allowing desktop webpages to be viewed in response to the size of the screen or web browser one is viewing with. I use this approach in all my projects. '},
    {_id : utilService.makeId(), name : 'vue', img : require('../imgs/vue.png') , description : 'Vue was the second framework I started to work with. The learning curve in this framework is amazing and just after a few days, I could build an end-2-end application. For sure, Vue is a wonderful framework to work with.'},
    {_id : utilService.makeId(), name : 'angular', img : require('../imgs/angular.png') , description : "The mighty framework, It's my third framework and i can say for suer it is a powerful tool." },
    {_id : utilService.makeId(), name : 'C++', img : require('../imgs/c++.png') , description : 'C++ was my first programming language that I learned when I became a Software Engineering student. With this language I first experinced the fascinating world of data-structures,algorithms and OOP. It is an amazing language that opened the doors for me to the world of programming.'},
]

console.log(skilles);



function query() {
    return Promise.resolve(skilles)
}


