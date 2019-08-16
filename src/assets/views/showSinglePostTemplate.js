export const showPostFull = (postUid) => {
    db.collection("posts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (`${doc.id}` == `${postUid}`) {
                let sPostWrapper = document.createElement('div');
                sPostWrapper.setAttribute('class', 'singlePostClass');
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
                sPostWrapper.appendChild(category);
                sPostWrapper.appendChild(author);
                sPostWrapper.appendChild(pContent);
                sPostWrapper.appendChild(publiDate);
                document.getElementById('root').innerHTML = '';
                document.getElementById('root').appendChild(sPostWrapper);
                
            }
        });
    });


};

