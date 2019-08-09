import {templateUserForm} from './../views/templateUserForm.js';


export const createUserForm = () => {
    let user = creamos variable user con current user function de firebase luego la agregamos a la coleccion 
    const userForm = document.querySelector('#user-profile-form');
    userForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('esto es dbcollection ' + db.collection('userForm'));
        let genderIndex = userForm.gender.selectedIndex;
        let profileIndex = userForm.city.selectedIndex;
        db.collection('userForm').add({
            "name": userForm.userName.value,
            "age": userForm.age.value,
            "genero": userForm.gender.options[genderIndex].value,
            "ciudad": userForm.city.value,
            "perfilMusical": userForm.musicProfile.options[profileIndex].value,
            "userUid": user.uid 
        });
        //limpiamos el formulario luego de que el usuario pulse haga submit
         userForm.userName.value = '';
         userForm.age.value = '';
         userForm.city.value = '';
        
     });
};
