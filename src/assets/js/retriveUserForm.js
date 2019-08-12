

// import {createUserForm} from './../js/userForm.js';
// import {templateProfile} from './../views/templateProfile.js';
// import {templateUserForm} from './../views/templateUserForm.js';



export const renderProfile = (profile) => {
    let profileList = document.createElement('ul');
    profileList.setAttribute('class', 'ulProfile');
    document.getElementById('root').appendChild(profileList);

    let liElement = document.createElement('li');
    let userName = document.createElement('span');
    let age = document.createElement('span');
    let gender = document.createElement('span');
    let city = document.createElement('span');
    let musicProfile = document.createElement('span');
    console.log(profile.data());

    userName.textContent = profile.data().name;
    age.textContent = profile.data().age;
    gender.textContent = profile.data().genero;
    city.textContent = profile.data().city;
    musicProfile.textContent = profile.data().perfilMusical;

    liElement.appendChild(userName);
    liElement.appendChild(age);
    liElement.appendChild(gender);
    //liElement.appendChild(publicationDate);
    liElement.appendChild(city);
    liElement.appendChild(musicProfile);

    profileList.appendChild(liElement);
  

 
};


export const retrieveProfile = () => {
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("USER id:", user.uid);
            var userLoggedId = user.uid;
            console.log(userLoggedId);
            db.collection('userForm').where(`userUid`, `==` , `${userLoggedId}`).get()
                .then((snapshot) => {
                console.log(snapshot.docs);
                snapshot.docs.forEach(profile => {
                    return renderProfile(profile);
                });
            });

          // User is signed in.
        } else {
            console.log("No hay usuario logeado");
          // No user is signed in.
        }
      });
      
    
    
};





// export const retrieveProfile = () => {
//     document.getElementById("profile")
//     db.collection('userForm').get().then((snapshot) => {
//         snapshot.docs.forEach(profile => {
//             return renderProfile(profile);

//         });
//     });
//     //cargamos las funciones relacionadas para que estén disponibles cuando se crea la lista de posts

    
// };

// export const renderPostInTemplate = (post) => {
//     let postList = document.createElement('ul');
//     postList.setAttribute('class', 'ulPosts');
//     document.getElementById('root').appendChild(postList);

//     let liElement = document.createElement('li');
//     /*le asignamos al elemento li un atributo llamado data-id que va a ser igual 
//     al propio id autogenerado por la base de datos */
//     liElement.setAttribute('data-id', post.id);
//     let author = document.createElement('span');
//     let category = document.createElement('span');
//     let content = document.createElement('span');
//     let publicationDate = document.createElement('span');
//     let likes = document.createElement('span');
//     let deleteEx = document.createElement('div');
//     deleteEx.setAttribute('class', 'cross');

//     /*ahora le agregamos el valor que va a ir en cada uno de los elementos */
//     author.textContent = post.data().autor;
//     category.textContent = post.data().categoria;
//     content.textContent = post.data().contenido;
//     publicationDate.textContent = post.data().fechaPublic;
//     deleteEx.textContent = 'x';
//     likes.textContent = post.data().likes;

//     /*inyectamos cada valor traído en la lista que le corresponde*/
//     liElement.appendChild(author);
//     liElement.appendChild(category);
//     liElement.appendChild(content);
//     liElement.appendChild(publicationDate);
//     liElement.appendChild(likes);
//     liElement.appendChild(deleteEx);

//     /*ahora inyectamos lo creado en el elemento del DOM 
//     que va a contener todo el resultado de la petición */
//     console.log(typeof(liElement));
//     postList.appendChild(liElement);

// };

