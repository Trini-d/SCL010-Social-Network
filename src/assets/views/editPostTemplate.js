import {
    updatePost
}from './../js/Posts-CRUD.js';

export const editPostTemplateFn = (postUid) => {
    db.collection("posts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (`${doc.id}` == `${postUid}`) {
                let envelope = document.createElement('div');
                envelope.setAttribute('class', 'formWrapper');
                envelope.setAttribute('data-id', `${postUid}`);
                let envelopeContent = '';
                envelopeContent += `<form method="POST" class="contentForm" id="edit-post-form">
                <input class="inputForm" type="text" name="author" value="${doc.data().autor}" required> 
                <select class="inputForm" name="categories">`;
                
                if(doc.data().categoria === 'eventos'){
                    envelopeContent +=  `<option class="inputForm" value="eventos" selected>Eventos</option>
                                         <option class="inputForm" value="seminarios">Seminarios</option>
                                        <option class="inputForm" value="busqueda">Busco Músicx</option>`;

                }else if (doc.data().categoria === 'seminarios'){
                    envelopeContent += `<option class="inputForm" value="eventos">Eventos</option>
                    <option class="inputForm" value="seminarios" selected>Seminarios</option>
                    <option class="inputForm" value="busqueda">Busco Músicx</option>`;
                }else{
                    envelopeContent += `<option class="inputForm" value="eventos">Eventos</option>
                    <option class="inputForm" value="seminarios">Seminarios</option>
                    <option class="inputForm" value="busqueda" selected>Busco Músicx</option>`;
                }
                
                     
                envelopeContent += `</select>
                <textarea class="inputContent" name="content" id="contentID" cols="30" rows="10">${doc.data().contenido}</textarea>
                <input type="date" name="publicDate" value="${doc.data().fechaPublic}">
                 <button id="postUpdateBtn" type="submit">Actualizar</button>
                </form>`;
                envelope.innerHTML = envelopeContent;
                document.getElementById('root').appendChild(envelope);
                console.log('postUid está vivo y es', postUid);
                document.querySelector('#edit-post-form').addEventListener('submit', (evt)=>{
                    evt.preventDefault();
                    updatePost();
                });
                return envelope;

            }
        });
    });


};
