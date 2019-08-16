window.addEventListener('onload', ()=>{

    let menuBtn = document.querySelector('.menu-icon');
    let menu = document.querySelector('.navigation ul');

    menuBtn.addEventListener('click', ()=>{
        if(menu.classList.contains('show')){
            menu.classList.remove('show');
        }else{
            menu.setAttribute('class', 'show');
        }

    });

});


/*
jQuery('document').ready(function($){

var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

menuBtn.click(function(){

   if(menu.hasClass('show')){

    menu.removeClass('show');
   }else{
       menu.addClass('show');
   }
});

});
*/


//FUN LOGIN

const loginFun = () =>{

    //inicializar firebase
        const firebaseConfig = {
        apiKey: "AIzaSyBnLYY5-NvVNSEUdmefhVSux_5Z1ArlkNg",
        authDomain: "loginsn-17cc7.firebaseapp.com",
        databaseURL: "https://loginsn-17cc7.firebaseio.com",
        projectId: "loginsn-17cc7",
        storageBucket: "",
        messagingSenderId: "530468129332",
        appId: "1:530468129332:web:63fc8777f5061876"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
      // Obtener elementos
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogout = document.getElementById('btnLogout');
    
      // Añadir Evento login
      btnLogin.addEventListener('click', e => {
        //Obtener email y pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));   
      });
    
      // Añadir evento signup
      btnSignUp.addEventListener('click', e => {
        // Obtener email y pass
        // TODO: comprobar que el email sea real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      });
    
      btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
      });
    
      // Añadir un listener en tiempo real
       firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
        } else {
          console.log('no logueado');
          btnLogout.classList.add('hide');
        }    
      });
    
      googleSignIn=()=>{ 
          base_provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth.signInWithRedirect(base_provider).then(function(result){
              console.log(result)
              console.log("Success..Google Account Linked")
          }).catch(function(err){
              console.log(err)
              console.log("Failed to do")    
          }) 
      }
    
    
    };
      
    
    
    
    
    
    