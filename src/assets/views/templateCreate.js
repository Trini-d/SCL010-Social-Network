import {
  createAccount,
  loginGoogle
} from './../js/auth.js';



export const templateCreate = () => {
  // creamos div que contendrá la plantilla
  const containerCreate = document.createElement('div');
  // creamos el contenido del login
  const contentCreate = `
          <div class="login-box">
                <h1>Regístrate aquí</h1>
                <form>
                  <label for="Email">Email</label>
                  <input id="email" type="text" placeholder="Ingresa tu email">
                 
                  <label for="password">Contraseña</label>
                  <input id="password" type="password" placeholder="Ingresa tu contraseña">
                  <p class="error", id="errorId"></p>
                  <button id="create" type="submit">Crear cuenta</button>
                  <p> O si prefieres... </p>
                  <button id="createWithGoogle" type="submit">Regístrate con tu cuenta de Google</button>
                  
                </form>
          </div>
                            `;

  containerCreate.innerHTML = contentCreate;
  containerCreate.addEventListener('click',(event) =>{
    if (event.target.id === 'create'){
      createAccount();
    } else if (event.target.id === 'createWithGoogle'){
      loginGoogle();
    }
  });
  return containerCreate;
};
