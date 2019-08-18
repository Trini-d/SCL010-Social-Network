import {
    retrieveInterestPost, likeItFn, dontLikeItFn
}from './../js/Posts-CRUD.js';


export const showPostFull = (postUid) => {
    db.collection("posts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (`${doc.id}` == `${postUid}`) {
                let sPostWrapper = document.createElement('div');
                sPostWrapper.setAttribute('class', 'singlePostClass');
                sPostWrapper.setAttribute('data-id', `${postUid}`);
                let author = document.createElement('span');
                author.setAttribute('class', 'postAuthorClass');
                author.textContent = doc.data().autor;
                let category = document.createElement('p');
                category.setAttribute('class', 'postCategoryClass');
                category.textContent = doc.data().categoria;
                let pContent = document.createElement('div');
                pContent.setAttribute('class', 'pContentClass');
                pContent.textContent = doc.data().contenido;
                let publiDate = document.createElement('span');
                publiDate.setAttribute('class', 'publiDClass');
                publiDate.textContent = doc.data().fechaPublic;
                let likesCountLabel = document.createElement('span');
                likesCountLabel.setAttribute('class', 'publiDClass');
                likesCountLabel.textContent = 'Likes';
                let likesCount = document.createElement('span');
                likesCount.setAttribute('class', 'publiDClass');
                likesCount.textContent = doc.data().likes;
                let editBtn = document.createElement('button');
                editBtn.setAttribute('class', 'editPostBtn');
                editBtn.textContent = 'Editar Publicación';
                let thumbsUp = document.createElement('div');
                thumbsUp.setAttribute('class', 'thumbsUpClass');
                thumbsUp.setAttribute('id', 'likeIt');
                thumbsUp.textContent = 'Me gusta';
                let thumbsDown = document.createElement('div');
                thumbsDown.setAttribute('class', 'thumbsDownClass');
                thumbsDown.setAttribute('id', 'dontLikeIt');
                thumbsDown.textContent = 'Ya no me gusta';
                sPostWrapper.appendChild(category);
                sPostWrapper.appendChild(author);
                sPostWrapper.appendChild(pContent);
                sPostWrapper.appendChild(publiDate);
                sPostWrapper.appendChild(likesCountLabel);
                sPostWrapper.appendChild(likesCount);
                sPostWrapper.appendChild(editBtn);
                sPostWrapper.appendChild(thumbsUp);
                sPostWrapper.appendChild(thumbsDown);
                document.getElementById('root').innerHTML = '';
                document.getElementById('root').appendChild(sPostWrapper);
                editBtn.addEventListener('click', (event) => {
                    console.log('recibe el click en el boton editar');
                    document.getElementById('root').innerHTML = '';
                    console.log(retrieveInterestPost());
                });
                thumbsUp.addEventListener('click', ()=>{
                    console.log('thumbsUp recibe el click');
                    likeItFn();
                });
                thumbsDown.addEventListener('click', ()=>{
                    console.log('thumbsUp recibe el click');
                    dontLikeItFn();
                });

            }
           
        });
        
    });

   
};
