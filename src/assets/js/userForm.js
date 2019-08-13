


export const createUserForm = () => {
    var user = firebase.auth().currentUser;
    var userUid= user.uid;
    console.log("te muestro el usuaro"+ userUid);
    console.log("te muestro el usuaro"+ user.uid);
    const userForm = document.querySelector('#user-profile-form');
    userForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('esto es dbcollection ' + db.collection('userForm'));
        let genderIndex = userForm.gender.selectedIndex;
        let musicProfileIndex = userForm.musicProfile.selectedIndex;
        let instrumentIndex = userForm.instrument.selectedIndex;
        let levelIndex = userForm.level.selectedIndex;
        let instrumentTwoIndex = userForm.instrumentTwo.selectedIndex;
        let levelTwoIndex = userForm.levelTwo.selectedIndex; 
        db.collection('userForm').add({
            "name": userForm.userName.value,
            "age": userForm.age.value,
            "genero": userForm.gender.options[genderIndex].value,
            "ciudad": userForm.city.value,
            "perfilMusical": userForm.musicProfile.options[musicProfileIndex].value,
            "instrumentoUno": userForm.instrument.options[instrumentIndex].value,
            "nivelUno": userForm.level.options[levelIndex].value,
            "instrumentoDos": userForm.instrumentTwo.options[instrumentTwoIndex].value,
            "nivelDos": userForm.levelTwo.options[levelTwoIndex].value,
            "estilos": userForm.styles.value,
            "influencias": userForm.influences.value,
            "userUid": userUid
        });
        //limpiamos el formulario luego de que el usuario pulse haga submit
         userForm.userName.value = '';
         userForm.age.value = '';
         userForm.city.value = '';
        
     });
};
