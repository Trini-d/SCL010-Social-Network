 /* En los templates guiándonos por el modelo universal de MVC (modelo-vista-controlador)
Vamos a crear únicamente las funciones que tienen que ver con "pintar" en el front-end */

 import {
     createPost
 } from './../js/Posts-CRUD.js';

 export const printPostForm = () => {
     let envelope = document.createElement('div');
     envelope.setAttribute('class', 'formWrapper');
     envelope.innerHTML = `<form class="contentForm" id="add-post-form">
       <!--En este input de autor el valor del nombre va a ser reemplazado por el nombre del usuario logueado-->
       <input class="inputForm" type="text" name="author" placeholder="nombreDelUsuarioLogueado" required>
       <select class="inputForm" name="categories">
           <option class="inputForm" value="eventos">Eventos</option>
           <option class="inputForm" value="seminarios">Seminarios</option>
           <option class="inputForm" value="busqueda">Busco Músicx</option>
       </select>
       <textarea class="inputContent" name="content" id="contentID" cols="30" rows="10" required></textarea>
       <input type="date" name="publicDate" required>
       <button type="submit">Publica</button>
   </form>`;
     document.getElementById('root').appendChild(envelope);
     createPost();

     return envelope;
 };
