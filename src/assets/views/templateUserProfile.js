export const renderProfile = (profile) => {
    let containerProfile = document.createElement('div');
    containerProfile.setAttribute('class', 'containerProfile');
    document.getElementById('root').appendChild(containerProfile);
    let containerInfoUser = document.createElement('div');
    containerInfoUser.setAttribute('class', 'infoUser');
    let containerMusicInfo = document.createElement('div');
    let imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'profileImg');
    let img = document.createElement('img');
    img.setAttribute('class', 'imgProfile');
    img.src = "data:image/png;base64,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"


    let userName = document.createElement('div');
    let age = document.createElement('div');
    let gender = document.createElement('div');
    let city = document.createElement('div');
    let musicProfile = document.createElement('div');
    let instrumentOne = document.createElement('div');
    let levelOne = document.createElement('div');
    let instrumentTwo = document.createElement('div');
    let levelTwo = document.createElement('div');
    let styles = document.createElement('div');
    let influences = document.createElement('div');


    console.log(profile.data());

    userName.textContent = profile.data().name;
    age.textContent = profile.data().age += ' años';
    gender.textContent = profile.data().genero;
    city.textContent = profile.data().ciudad;
    musicProfile.textContent = 'Perfil: ' + (profile.data().perfilMusical);
    instrumentOne.textContent = 'Intrumento 1: ' + (profile.data().instrumentoUno);
    levelOne.textContent = 'nivel: ' + (profile.data().nivelUno);
    instrumentTwo.textContent = 'Intrumento 2: ' + (profile.data().instrumentoDos);
    levelTwo.textContent = 'nivel: ' + (profile.data().nivelDos);
    styles.textContent = 'Estilos: ' + (profile.data().estilos);
    influences.textContent = 'Influencias: ' + (profile.data().influencias);

    
    containerInfoUser.appendChild(userName);
    containerInfoUser.appendChild(age);
    containerInfoUser.appendChild(gender);
    containerInfoUser.appendChild(city);
    containerMusicInfo.appendChild(musicProfile);
    containerMusicInfo.appendChild(instrumentOne);
    containerMusicInfo.appendChild(levelOne);
    containerMusicInfo.appendChild(instrumentTwo);
    containerMusicInfo.appendChild(levelTwo);
    containerMusicInfo.appendChild(styles);
    containerMusicInfo.appendChild(influences);

    imgContainer.appendChild(img);
    containerProfile.appendChild(imgContainer);
    containerProfile.appendChild(containerInfoUser);
    containerProfile.appendChild(containerMusicInfo);



};

export const retrieveProfile = () => {
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("USER id:", user.uid);
            var userLoggedId = user.uid;
            console.log(userLoggedId);
            db.collection('userForm').where(`userUid`, `==` , `${userLoggedId}`).get()
                .then((snapshot) => {
                console.log(snapshot.docs);
                snapshot.docs.forEach(profile => {
                    return renderProfile(profile);
                });
            });
          // User is signed in.
        } else {
            console.log("No hay usuario logeado");
        }
    }