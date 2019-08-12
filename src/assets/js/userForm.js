


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
        db.collection('userForm').add({
            "name": userForm.userName.value,
            "age": userForm.age.value,
            "genero": userForm.gender.options[genderIndex].value,
            "ciudad": userForm.city.value,
            "perfilMusical": userForm.musicProfile.options[musicProfileIndex].value,
            "userUid": userUid
        });
        //limpiamos el formulario luego de que el usuario pulse haga submit
         userForm.userName.value = '';
         userForm.age.value = '';
         userForm.city.value = '';
        
     });
};
