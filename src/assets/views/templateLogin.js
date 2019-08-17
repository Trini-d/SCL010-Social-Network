import {
  loginGoogle,
  logInFn
} from './../js/auth.js';


export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  // creamos el contenido del login
  const contentLogin = `
    <div class="login-box">
                <h1>Ingresa aquí</h1>
                <form>
                  <label for="Email">Email</label>
                  <input id="email" type="text" placeholder="Ingresa tu email">
                  <label for="password">Contraseña</label>
                  <input id="password" type="password" placeholder="Ingresa tu contraseña">
                  <p class="error", id="errorId"></p>   
                  <button id="loginE">Login con Email</button>
          </p>O quizá prefieras...</p>
          <button id="login">Login con tu cuenta de Google</button>
                </form>
          </div> `;


  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;
  containerLogin.addEventListener('click', (event) => {
    if (event.target.id === 'login') {
      loginGoogle();
    } else if (event.target.id ==='loginE') {
      console.log('esto es un placeholder');
      logInFn();
    } else if (event.target.id !=='loginE' || event.target.id !=='loginE') {
      console.log('el usuario ha hecho click en otro lugar');
    }else{
      console.log('ha ocurrido un error en el logueo');
    }

  });
  return containerLogin;
};