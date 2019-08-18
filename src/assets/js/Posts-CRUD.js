/* ESTE ARCHIVO AGRUPA TODAS LAS FUNCIONES CRUD RELACIONADAS CON LOS POSTS */
import {
    renderPostInTemplate
} from './../views/retrivePostsTemplate.js';

import {
    deleteConfiTemplate
} from './../views/deleteConfirmTemplate.js';

import {
    publicationSuccess
} from './../views/publicationSuccessTemplate.js';

import {
    editPostTemplateFn
} from './../views/editPostTemplate.js';

import {
    changeRoutePost,
    changeRouter
} from './../../route.js';




/* CREATE POST */

export const createPost = () => {
    // llamamos a la función que crea el formulario y lo pinta en el html (que es lo que trae el hilo hacia acá)
    // y luego si le ponemos a escuchar el evento submit para que tome lo que el usuario ingresó
    // y lo guarde como un objeto en la base de datos
    document.querySelector('#add-post-form').addEventListener('submit', (evt) => {
        let postForm = document.querySelector('#add-post-form');
        evt.preventDefault();
        let categoryIndex = postForm.categories.selectedIndex;
        db.collection('posts').add({
            "autor": postForm.author.value,
            "categoria": postForm.categories.options[categoryIndex].value,
            "contenido": postForm.content.value,
            "fechaPublic": postForm.publicDate.value,
            "likes": 0
        });
        //borramos de pantalla el formulario y mostramos el popUp de éxito de creación del post
        postForm.author.value = '';
        postForm.content.value = '';
        document.querySelector('.formWrapper').remove();
        publicationSuccess();
        //escuchamos cuando el usuario haga click a la "x" y le redirigimos al feed donde estará su post publicado
        document.querySelector('#closeIt').addEventListener('click', (event) => {
            document.querySelector('#successWrap').remove();
            const containerRoot = document.getElementById('root');
            containerRoot.innerHTML = '';
            window.location.hash = '#/feed';
        });
    });
};

/* RETRIEVE POSTS LIST **esta función solamente
 consulta por toda la colección en la BBDD y para cada elemento que trae
 le hace "render" en el front-end gracias a la función renderPostInTemplate() */

export const retrievePosts = () => {
    db.collection('posts').get().then((snapshot) => {
        console.log('esto es snapshot de la función retrievePosts ', snapshot);
        snapshot.docs.forEach(post => {
            return renderPostInTemplate(post);

        });
    });

};

retrievePosts();
/* RETRIEVE en TIEMPO REAL */

export const realTimeRetriever = () => {
    deletePost();
    showSinglePost();
    // let usuario = firebase.auth().currentUser;
    // console.log(usuario);
    // console.log(usuario.uid);
    db.collection('posts').onSnapshot(snapshot => {
        let postList = document.querySelector('.ulPosts');
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log('esto es change de la funcion realTimeRet.', change);
            console.log('esto es change.doc.data() de la funcion realTimeRet.', change.doc.data());
            console.log('esto es change.doc.id de la funcion realTimeRet.', change.doc.id);
            if (change.type === 'added') {
                renderPostInTemplate(change.doc);
            } else if (change.type === 'removed') {
                let deletedPost = document.querySelector(`li[data-id="${change.doc.id}"]`);
                // deletedPost.remove();
                postList.removeChild(deletedPost);

            }else if(change.type === 'modified'){
                let postUid = document.querySelector('.singlePostClass').getAttribute('data-id');
                changeRoutePost(`#/singlePost-${postUid}`);
            }
        });
    });

};

/* RETRIEVE POST DETAILS ---MUESTRA DETALLES DE UN SOLO POST ----*/
const showSinglePost = () => {
    document.querySelector('.ulPosts').addEventListener('click', (event) => {
        let clickedElement = event.target;
        console.log('este es el elemento específico del post donde ha clickeado: ', clickedElement);
        if (clickedElement.className !== 'cross') {
            let postUid = clickedElement.parentElement.getAttribute('data-id');
            console.log('este es el postUid', postUid);
            changeRoutePost(`#/singlePost-${postUid}`);


        } else if (clickedElement.className == 'editPostClass') {
            // aquí damos instrucciones para que se cargue un formulario pre-llenado
            // con los valores actuales, el usuario puede modificar los campos y al
            // pulsar el botón "guardar cambios", se llama a una función que usa el
            // .update de firebase y reescribe el documento (objeto) con los valores
            // que consigue en este formulario de edición
        } else {
            console.log('buscar el mensaje apropiado en caso de necesitarlo');
        }

    });

};




/**********Función de filtrado de resultados en el Feed de publicaciones*********/

const retrieveEventPosts = (property, value) => {
    db.collection('posts').where(`${property}`, '==', `${value}`).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });

};

/**********Función para ordenar los datos que se traen de firebase 
 y se plasman en el Feed de publicaciones --se pueden unir where y order con un indexado en firebase, porsia*********/

const orderPosts = (propertyToOrder) => {
    db.collection('posts').order(`${propertyToOrder}`).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });

};



/* UPDATE POST -- EDITAR UN SÓLO POST */

//toma el id del post que está contenido en el hash
export const retrieveInterestPost = () => {
    let dirtyHash = window.location.hash;
    let cleanedHash = dirtyHash.split('-')[1];
    //crea el formulario prellenado con los datos de la publicación
    editPostTemplateFn(cleanedHash);
};



export const updatePost = () => {
    let editedForm = document.querySelector('#edit-post-form');
    let postUid = editedForm.parentElement.getAttribute('data-id');
    let editedCatIndex = editedForm.categories.selectedIndex;
    console.log('este es el postUid que está recibiendo updatePost', postUid);
    db.collection('posts').doc(postUid).update({
        "autor": editedForm.author.value,
        "categoria": editedForm.categories.options[editedCatIndex].value,
        "contenido": editedForm.content.value,
        "fechaPublic": editedForm.publicDate.value
    });
    window.location.hash = '#/feed';
};


/* DELETE POSTS -- ELIMINAR UN POST ESPECÍFICO */

/********** Función para borrar posts de la BBDD *********/


export const deletePost = () => {

    document.querySelector('.ulPosts').addEventListener('click', (evt) => {
        if (evt.target.className === 'cross') {
            evt.stopPropagation();
            let clickedElement = evt.target;
            let parent = clickedElement.parentElement;
            let postIdClicked = parent.getAttribute('data-id');
            deleteConfiTemplate();
            console.log('postIdClicked is alive and is ', postIdClicked);
            // btnClicked();
            // return postIdClicked;
            document.querySelector('.popUp').addEventListener('click', (e) => {
                console.log(e.target);
                const btn = e.target.id;
                if (e.target.id == "deleteEx" || e.target.id == "regreted") {
                    console.log('entra al if', e.target.id);
                    if (btn == 'deleteEx') {
                        console.log('ha hecho click en deleteEx');
                        db.collection('posts').doc(postIdClicked).delete();
                        let popUp = document.querySelector('.popUp');
                        popUp.remove();
                        //document.querySelector('#confiWrap').removeChild('.popUp');
                    } else if (btn == 'regreted') {
                        //let daddy = document.querySelector('#confiWrap');
                        //daddy.removeChild(daddy.firstChild);
                        let popUp = document.querySelector('.popUp');
                        popUp.remove();
                    } else {
                        console.log('ha ocurrido un error');
                    }
                }
            });
        }
    });
};

/* FUNCIÓN QUE SUMA Y DA CUENTA DE LOS LIKES DE UNA PUBLICACIÓN */

export const likeItFn = () => {
    let postId = document.querySelector('.singlePostClass').getAttribute('data-id');
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if (`${doc.id}` == `${postId}`) {
                let currentLikes = (doc.data().likes) + 1;
                console.log(currentLikes);
                db.collection('posts').doc(postId).update({
                    "likes":currentLikes
                });
            } 
        });
    });
};

/* FUNCIÓN QUE RESTA Y DA CUENTA DE LOS LIKES DE UNA PUBLICACIÓN */

export const dontLikeItFn = () => {
    let postId = document.querySelector('.singlePostClass').getAttribute('data-id');
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if (`${doc.id}` == `${postId}`) {
                let currentLikes = (doc.data().likes) - 1;
                console.log(currentLikes);
                db.collection('posts').doc(postId).update({
                    "likes":currentLikes
                });
            } 
        });
    });
};