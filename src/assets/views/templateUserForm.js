import { createUserForm } from './../js/userForm.js';

export const templateUserForm = () => {
    // creamos div que contendrá la plantilla
    const containerUserForm = document.createElement('div');
    // creamos el contenido del login
    const contentUserForm = `<div id="user-profile-form-Wrapper">
                        
                        <form  id="user-profile-form">
                        <p>Información de Usuario</p>
                            <input type="text" name="userName" placeholder="Tu nombre" required>
                            <input class="align-left" type="number" name="age" placeholder="Tu edad">
                            <select class="hola align-right" name="gender">
                                <option value="gender" hidden selected>Género</option>
                                <option class="inputForm" value="mujer">Mujer</option>
                                <option class="inputForm" value="hombre">Hombre</option>
                                <option class="inputForm" value="reservar">Prefiero no decirlo</option>
                            </select>
                            <input class="align-left" type="text" name="city" placeholder="Ciudad">
                            <select class="hola align-right" name="musicProfile">
                                <option value="profile" hidden selected>Perfil Musical</option>
                                <option class="inputForm" value="profesional">Profesional</option>
                                <option class="inputForm" value="noProfesional">No Profesional</option>
                            </select>
                            <select class="hola" id="selectInstrument" name="instrument">
                                <option hidden selected>Instrumento 1</option>
                                <option value="guitarra">Guitarra</option>
                                <option value="bajo">Bajo</option>
                                <option value="batería">Batería</option>
                            </select>
                            <select class="hola align-right" name="level">
                                <option hidden selected>Nivel</option>
                                <option value="básico">Básico</option>
                                <option value="medio">Medio</option>
                                <option value="avanzado">Avanzado</option>
                            </select>
                            <select class="hola" id="selectInstrumentTwo" name="instrumentTwo">
                                <option hidden selected>Instrumento 2</option>
                                <option value="guitarra">Guitarra</option>
                                <option value="bajo">Bajo</option>
                                <option value="batería">Batería</option>
                            </select>
                            <select class="align-right" name="levelTwo">
                                <option hidden selected>Nivel</option>
                                <option value="básico">Básico</option>
                                <option value="medio">Medio</option>
                                <option value="avanzado">Avanzado</option>
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
    });
        return containerUserForm;
    
};