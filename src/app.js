// Routes

import {
    initRouter
} from './route.js';

import {
    hamburguerToggle
}from './assets/views/navBarTemplate.js';


let app = firebase.app();
console.log("APP:", app);


/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
    initRouter();
};

window.addEventListener('load', init);

//función siempre presente que escucha el click en el menú hamburguesa

hamburguerToggle();

