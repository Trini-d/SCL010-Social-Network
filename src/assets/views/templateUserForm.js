import {createUserForm} from './../js/userForm.js';

export const templateUserForm = () => {
    // creamos div que contendrá la plantilla
    const containerUserForm = document.createElement('div');
    // creamos el contenido del login
    const contentUserForm = `<div id="user-profile-form-Wrapper">
                        
                        <form  id="user-profile-form">
                        <p>Información de Usuario</p>
                            <input type="text" name="userName" placeholder="Tu nombre">
                            <input class="align-left" type="number" name="age" placeholder="Tu edad">
                            <select class="align-right" name="gender">
                                <option value="gender" hidden selected>Género</option>
                                <option class="inputForm" value="mujer">Mujer</option>
                                <option class="inputForm" value="hombre">Hombre</option>
                                <option class="inputForm" value="reservar">Prefiero no decirlo</option>
                            </select>
                            <input class="align-left" type="text" name="city" placeholder="Ciudad">
                            <select class="align-right" name="musicProfile">
                                <option value="profile" hidden selected>Perfil Musical</option>
                                <option class="inputForm" value="profesional">Profesional</option>
                                <option class="inputForm" value="noProfesional">No Profesional</option>
                            </select>
                            <select id="selectInstrument" name="instrument">
                                <option value="instrument" hidden selected>Instrumento 1</option>
                                <option value="guitar">Guitarra</option>
                                <option value="bass">Bajo</option>
                                <option value="drums">Batería</option>
                            </select>
                            <select class="align-right" name="level">
                                <option value="level" hidden selected>Nivel</option>
                                <option value="basic">Básico</option>
                                <option value="medium">Medio</option>
                                <option value="advanced">Avanzado</option>
                            </select>
                            <select id="selectInstrumentTwo" name="instrumentTwo">
                                <option value="instrument" hidden selected>Instrumento 2</option>
                                <option value="guitar">Guitarra</option>
                                <option value="bass">Bajo</option>
                                <option value="drums">Batería</option>
                            </select>
                            <select class="align-right" name="level">
                                <option value="level" hidden selected>Nivel</option>
                                <option value="basic">Básico</option>
                                <option value="medium">Medio</option>
                                <option value="advanced">Avanzado</option>
                            </select>
                            <input type="text" name="styles" placeholder="Estilos favoritos">
                            <input type="text" name="influences" placeholder="Influencias">
                          
                            <button id="sendForm" type="submit">Envíalo</button>
                        </form>
                        </div>`;
    // pasar el contenido al div
    containerUserForm.innerHTML = contentUserForm;
    // le pido que busque el id del boton dentro del div creado
    const btn = containerUserForm.querySelector('#sendForm');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', (evt) => {
      
     
      createUserForm();
    })
    return containerUserForm;
}