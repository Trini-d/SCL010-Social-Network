import {
  changeRouter
} from './../../route.js';

import {
  navBarLoggedOrNot
}from './../views/navBarTemplate.js';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('el usuario está logueado');
    navBarLoggedOrNot(user);
  } else {
    console.log('el usuario no está logueado');
    navBarLoggedOrNot(user);  
  }
});



export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // this will return a promise
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("FUNCIONO");
      console.log("USER COMO VIENE", user);
      user.favoriteBand = "red hot chilli peppers";
      console.log("USER MODIFICADO", user);
      // ...
    }).catch(function (error) {
      console.log("ERROR:", error);
      // Handle Errors here.
      var errorCode = error.code;

      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
};

// Función que permite crear cuenta con email y contraseña
export const createAccount = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(credentials => {
    console.log(credentials);
    document.querySelector('.login-box').remove();
    changeRouter('');

  }).catch(error => {
    console.log('error en createAccount', error.message);
    document.querySelector('#errorId').innerHTML = error.message;
  });

};

//Función que permite loguear al usuario ya registrado previamiente 
export const logInFn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(credentials => {
    console.log(credentials.user);
    document.querySelector('.login-box').remove();
    changeRouter('');

  }).catch(error => {
    console.log('error en createAccount', error.message);
    document.querySelector('#errorId').innerHTML = error.message;
  });
};


// Función que permite LogOut del usuario
export const logOutFn = () => {
    firebase.auth().signOut().then(() => {
      let outMsg = document.createElement('div');
      outMsg.setAttribute('class', 'popUp');
      document.getElementById('root').appendChild(outMsg);
      //changeRouter('');
      outMsg.textContent = "Has salido de tu sesión, nos vemos pronto!";
    });
 

};
