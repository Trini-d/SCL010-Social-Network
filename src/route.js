import {
  templateLogin
} from './assets/views/templateLogin.js';


import {
  templateCreate
} from './assets/views/templateCreate.js';

import {
    realTimeRetriever
} from './assets/js/Posts-CRUD.js';

import{
  templateUserForm
}from './assets/views/templateUserForm.js';

import {
  templateProfile
}from './assets/views/templateProfile.js';

import {
  printPostForm
} from './assets/views/createPostTemplate.js';

import {
  createEmptyList
} from './assets/views/retrivePostsTemplate.js';

import { 
    retrieveProfile 
} from './assets/js/retriveUserForm.js';

import {
  templateUserForm
} from './../assets/views/templateUserForm.js';



/* changeRouter llama a la función que carga cada template */
export const changeRouter = (hash) => {
  console.log(hash);
  if (hash === '') {
    return showTemplate('#/create');
  }

  if (hash === '#/create') {
    return showTemplate('#/create');
  }

  if (hash === '#/login') {
    return showTemplate(hash);
  }

  if (hash === '#/feed') {
    return showTemplate(hash);
  }

  if (hash === '#/createPost') {
    return showTemplate(hash);
  }

  if (hash === '#/userForm') {
    return showTemplate(hash);
  }

  if (hash === '#/userProfile') {
    return showTemplate(hash);
  }

};

// Función que determina qué template se inyecta en el index.html
export const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    // hacemos el match del hash utilizado y el template que queremos mostrar
    switch (router) {
        case 'login':
            containerRoot.appendChild(templateLogin());
            break;
        case 'create':
            containerRoot.appendChild(templateCreate());
            break;
        case 'feed':
            console.log('entra al case feed');
            createEmptyList();
            realTimeRetriever();
            break;
        case 'createPost':
            createEmptyList();
            containerRoot.appendChild(printPostForm());
            break;
        case 'userForm':
      containerRoot.appendChild(templateUserForm());
          break;
        case 'userProfile':
      containerRoot.appendChild(retrieveProfile());
          break;
          default:
            containerRoot.innerHTML = `<h2>Error 404. La página que está solicitando no se encuentra disponible</h2>`;
    }

};
/* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {

  window.addEventListener('load', changeRouter(window.location.hash));

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};