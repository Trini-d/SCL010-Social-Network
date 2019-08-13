import {createUserForm} from './../js/userForm.js';

export const templateUserForm = () => {
    // creamos div que contendrá la plantilla
    const containerUserForm = document.createElement('div');
    // creamos el contenido del login
    const contentUserForm = `<div id="user-profile-form-Wrapper">
                        <form  id="user-profile-form">
                            <input type="text" name="userName" placeholder="Tu nombre">
                            <input type="number" name="age" placeholder="Tu edad">
                            <select class="inputForm" name="gender">
                                <option class="inputForm" value="mujer">Mujer</option>
                                <option class="inputForm" value="hombre">Hombre</option>
                                <option class="inputForm" value="reservar">Prefiero no decirlo</option>
                            </select>
                            <input type="text" name="city" placeholder="Ciudad">
                            <select class="inputForm" name="musicProfile">
                                <option class="inputForm" value="profesional">Profesional</option>
                                <option class="inputForm" value="noProfesional">No Profesional</option>
                            </select>
                            <button id="sendForm" type="submit">Envíalo</button>
                        </form>
                        </div>`;
    // pasar el contenido al div
    containerUserForm.innerHTML = contentUserForm;
    document.querySelector('#root').appendChild(containerUserForm);
    // // le pido que busque el id del boton dentro del div creado
    // const btn = containerUserForm.querySelector('#sendForm');
    // // evento del botón que llama a la autentificación de google.
    // btn.addEventListener('click', (evt) => {
    // console.log('ha hecho click en el botón cuyo id es #sendForm');
    //   evt.preventDefault();
      createUserForm();
    // });
    return containerUserForm;
};