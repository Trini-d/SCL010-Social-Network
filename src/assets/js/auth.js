import {
  changeRouter
} from './../../route.js';

import {
  navBarLoggedOrNot
} from './../views/navBarTemplate.js';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      document.getElementById('messages').innerHTML = '';
      navBarLoggedOrNot(user);
    } else {
      sendVerificationEmail();
      firebase.auth().signOut().then(() => {
        customMsgs('Te hemos enviado un email de confirmación');
        
      });
    }
    console.log('el usuario está logueado');
    console.log('y estas son sus credenciales', user);

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
    sendVerificationEmail();
    document.querySelector('.login-box').remove();
    changeRouter('');

  }).catch(error => {
    console.log('error en createAccount', error.message);
    document.querySelector('#errorId').innerHTML = error.message;
  });

};

const sendVerificationEmail = () => {

  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log('el email fue enviado');
  }).catch(function (error) {
    console.log('error en enviar email de verificacion', error.message);
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
    customMsgs('Has salido de tu sesión, nos vemos pronto!');
    
  });


};

const customMsgs = (msgToUser) => {
  let outMsg = document.createElement('h3');
  outMsg.textContent = `${msgToUser}`;
  outMsg.setAttribute('class', 'popUp');
  document.getElementById('messages').appendChild(outMsg);
};
