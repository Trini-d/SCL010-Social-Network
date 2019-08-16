
export const renderProfile = (profile) => {
    let containerProfile = document.createElement('div');
    let profileList = document.createElement('ul');
    profileList.setAttribute('class', 'ulProfile');
    document.getElementById('root').appendChild(containerProfile);

    let liElement = document.createElement('li');

    let userName = document.createElement('li');
    let age = document.createElement('li');
    let gender = document.createElement('li');
    let city = document.createElement('li');
    let musicProfile = document.createElement('li');
    let instrumentOne  = document.createElement('li');
    let levelOne = document.createElement('li');
    let instrumentTwo = document.createElement('li');
    let levelTwo = document.createElement('li');
    let styles = document.createElement('li');
    let influences = document.createElement('li');


    console.log(profile.data());

    userName.textContent = profile.data().name;
    age.textContent = profile.data().age;
    gender.textContent = profile.data().genero;
    city.textContent = profile.data().ciudad;
    musicProfile.textContent = profile.data().perfilMusical;
    instrumentOne.textContent = profile.data().instrumentoUno;
    levelOne.textContent = profile.data().nivelUno;
    instrumentTwo.textContent = profile.data().instrumentoDos;
    levelTwo.textContent = profile.data().nivelDos;
    styles.textContent = profile.data().estilos;
    influences.textContent = profile.data().influencias;

    liElement.appendChild(userName);
    liElement.appendChild(age);
    liElement.appendChild(gender);
    liElement.appendChild(city);
    liElement.appendChild(musicProfile);
    liElement.appendChild(instrumentOne);
    liElement.appendChild(levelOne);
    liElement.appendChild(instrumentTwo);
    liElement.appendChild(levelTwo);
    liElement.appendChild(styles);
    liElement.appendChild(influences);

    profileList.appendChild(liElement);
    containerProfile.appendChild(profileList);
  

 
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
          // No user is signed in.
        }
      });
};





