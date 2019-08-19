import { createUserForm } from './../js/userForm.js';

export const templateUserForm = () => {
    // creamos div que contendrá la plantilla
    const containerUserForm = document.createElement('div');
    // creamos el contenido del formulario
    const contentUserForm = `<div id="user-profile-form-Wrapper">
                        
                        <form  id="user-profile-form">
                        <p>Información de Usuario</p>
                        <p id = "userFormText">* Rellena los siguientes campos para crear tu perfil *</p>
                            <input type="text" name="userName" placeholder="Tu nombre" required>
                            <input class="align-left" type="number" name="age" placeholder="Tu edad" required>
                            <select class="hola align-right" name="gender" required>
                                <option value="gender" hidden selected>Género</option>
                                <option class="inputForm" value="mujer">Mujer</option>
                                <option class="inputForm" value="hombre">Hombre</option>
                                <option class="inputForm" value="reservar">Prefiero no decirlo</option>
                            </select>
                            <input class="align-left" type="text" name="city" placeholder="Ciudad" required>
                            <select class="hola align-right" name="musicProfile" required>
                                <option value="profile" hidden selected>Perfil Musical</option>
                                <option class="inputForm" value="profesional">Profesional</option>
                                <option class="inputForm" value="noProfesional">No Profesional</option>
                            </select>
                            <select class="hola" id="selectInstrument" name="instrument" required>
                                <option hidden selected>Instrumento 1</option>
                                <option value="guitarra">Guitarra</option>
                                <option value="bajo">Bajo</option>
                                <option value="batería">Batería</option>
                            </select>
                            <select class="hola align-right" name="level" required>
                                <option hidden selected>Nivel</option>
                                <option value="básico">Básico</option>
                                <option value="medio">Medio</option>
                                <option value="avanzado">Avanzado</option>
                            </select>
                            <select class="hola" id="selectInstrumentTwo" name="instrumentTwo" required>
                                <option hidden selected>Instrumento 2</option>
                                <option value="guitarra">Guitarra</option>
                                <option value="bajo">Bajo</option>
                                <option value="batería">Batería</option>
                            </select>
                            <select class="align-right" name="levelTwo" required>
                                <option hidden selected>Nivel</option>
                                <option value="básico">Básico</option>
                                <option value="medio">Medio</option>
                                <option value="avanzado">Avanzado</option>
                            </select>
                            <input type="text" name="styles" placeholder="Estilos favoritos" required>
                            <input type="text" name="influences" placeholder="Influencias" required>
                          
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
        window.location.hash = '#/userProfile';
    });
        return containerUserForm;
    
};