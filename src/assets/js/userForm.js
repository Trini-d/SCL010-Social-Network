
export const createUserForm = () => {
    //let user = creamos variable user con current user function de firebase luego la agregamos a la coleccion 
    const userForm = document.querySelector('#user-profile-form');
    userForm.addEventListener('submit', (evt) => {
        console.log('entra al listener de createUserForm');
        evt.preventDefault();
        console.log('esto es dbcollection ' + db.collection('userForm'));
        let genderIndex = userForm.gender.selectedIndex;
        //let profileIndex = userForm.city.selectedIndex;
        let profileIndex = userForm.musicProfile.selectedIndex;
        db.collection('userForm').add({
            "name": userForm.userName.value,
            "age": userForm.age.value,
            "genero": userForm.gender.options[genderIndex].value,
            "ciudad": userForm.city.value,
            "perfilMusical": userForm.musicProfile.options[profileIndex].value,
            //para poder usar user, hay que traerlo de algún lado
            "userUid": "valor temporal" 
        });
        //limpiamos el formulario luego de que el usuario haga submit
         userForm.userName.value = '';
         userForm.age.value = '';
         userForm.city.value = '';
        
     });
};
