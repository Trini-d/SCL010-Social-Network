import { profileList, renderProfile, retrieveProfile } from './../js/retriveUserForm.js';
import {templateUserForm} from './../views/templateUserForm.js';

export const templateProfile = () => {
    const containerProfile = document.createElement('div');
    const contentProfile= `<div id="profile">
                            <ul class="ulProfile" id="profile-list"></ul>
                          </div>
                        `;
    containerProfile.innerHTML = contentProfile;
    const btn = containerUserForm.querySelector('#sendForm');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
      retrieveProfile();
    })
    return containerProfile;
}



// export const templateUserForm = () => {
//     // creamos div que contendrá la plantilla
//     const containerUserForm = document.createElement('div');
//     // creamos el contenido del login
//     const contentUserForm = `<div id="user-profile-form-Wrapper">
//                         <form  id="user-profile-form">
//                             <input type="text" name="userName" placeholder="Tu nombre">
//                             <input type="number" name="age" placeholder="Tu edad">
//                             <select class="inputForm" name="gender">
//                                 <option class="inputForm" value="mujer">Mujer</option>
//                                 <option class="inputForm" value="hombre">Hombre</option>
//                                 <option class="inputForm" value="reservar">Prefiero no decirlo</option>
//                             </select>
//                             <input type="text" name="city" placeholder="Ciudad">
//                             <select class="inputForm" name="profile">
//                                 <option class="inputForm" value="profesional">Profesional</option>
//                                 <option class="inputForm" value="noProfesional">No Profesional</option>
//                             </select>
//                             <button id="sendForm" type="submit">Envíalo</button>
//                         </form>
//                         </div>`;
//     // pasar el contenido al div
//     containerUserForm.innerHTML = contentUserForm;
//     // le pido que busque el id del boton dentro del div creado
//     const btn = containerUserForm.querySelector('#sendForm');
//     // evento del botón que llama a la autentificación de google.
//     btn.addEventListener('click', () => {
//       createUserForm();
//     })
//     return containerUserForm;
// }