/**** Función que crea la lista en el DOM  y la hace disponible para las funciones front-end */
export const createEmptyList = () => {
    let postList = document.createElement('ul');
    postList.setAttribute('class', 'ulPosts');
    document.getElementById('root').appendChild(postList);
};

/********** Función que hace render de los resultados para mostrarlos en el template ********/

export const renderPostInTemplate = (post) => {
    let postList = document.querySelector('.ulPosts');

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'post');
    /*le asignamos al elemento li un atributo llamado data-id que va a ser igual 
    al propio id autogenerado por la base de datos */
    liElement.setAttribute('data-id', post.id);
    let author = document.createElement('span');
    let category = document.createElement('span');
    let content = document.createElement('span');
    let publicationDate = document.createElement('span');
    let automaticDate = document.createElement('span');
    let likes = document.createElement('span');
    //aquí debería haber una condición de si el usuario logueado y el post le pertenece, dar la opción 
    //de editarlo o eliminarlo
    let deleteEx = document.createElement('div');
    deleteEx.setAttribute('class', 'cross');
    let editPost = document.createElement('span');
    editPost.setAttribute('class', 'editPostClass');

    /*ahora le agregamos el valor que va a ir en cada uno de los elementos */
    author.textContent = post.data().autor;
    category.textContent = post.data().categoria;
    content.textContent = post.data().contenido;
    publicationDate.textContent = post.data().fechaPublic;
    //automaticDate.textContent = post.data().
    deleteEx.textContent = 'x';
    editPost.textContent = 'editar publicación';
    likes.textContent = post.data().likes;

    /*inyectamos cada valor traído en la lista que le corresponde*/
    liElement.appendChild(author);
    liElement.appendChild(category);
    liElement.appendChild(content);
    liElement.appendChild(publicationDate);
    liElement.appendChild(likes);
    liElement.appendChild(deleteEx);
    liElement.appendChild(editPost);

    /*ahora inyectamos lo creado en el elemento del DOM 
    que va a contener todo el resultado de la petición */
    //console.log(typeof (liElement));
    postList.appendChild(liElement);

};
