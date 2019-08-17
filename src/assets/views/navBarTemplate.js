
export const navBarLoggedIn = ()=>{
let navBarInner = document.createElement('div');
let navBarContent = `<div class="container logo-nav-container">
            <a href="#" class="logo">MUSICLINK</a>
            <span class="menu-icon"><img id="hamburguesa" src="./assets/img/menu.png" width="40" height="40"
                    class="btnMenu"></span>
            <nav class="navigation-bar">
                <ul class="navigation">
                    </li>
                    <li><a href="#/userForm">Formulario Usuario</a></li>
                    <li><a href="#/userProfile">Perfil Usuario</a></li>
                    <li><a href="#/feed">Ver Feed</a></li>
                    <li><a href="#/createPost">Crear una publicación</a></li>
                    <li><a id="logOut" href="#/logout">Logout</a></li>
                </ul>
            </nav>
        </div>`;
        navBarInner.innerHTML = navBarContent;
        return navBarInner;
};

export const navBarFirstTime = ()=>{
    let navBarInner = document.createElement('div');
    let navBarContent = `<div class="container logo-nav-container">
                <a href="#" class="logo">MUSICLINK</a>
                <span class="menu-icon"><img id="hamburguesa" src="./assets/img/menu.png" width="40" height="40"
                        class="btnMenu"></span>
                <nav class="navigation-bar">
                    <ul class="navigation">
                        </li>
                        <li><a href="#/login">Login</a></li>
                        <li><a href="#/create">Registrarse</a></li>
                        <li><a href="#/logout">Cerrar Sesión</a></li>
                    </ul>
                </nav>
            </div>`;
            navBarInner.innerHTML = navBarContent;
            return navBarInner;
    };


// <main class="main">
// <div><img src="./assets/img/fondo.png" width="100%" height="100%" class="banner"></div>
// <div class="container">

//     <div class="loginMenu">

//         <li><input id="txtEmail" type="email" placeholder="Email"></li>
//         <li><input id="txtPassword" type="password" placeholder="Contraseña"></li>
//         <li><button id="btnLogin" class="btn btn-action">Login</button>
//             <button id="btnSignUp" class="btn btn-secondary">Registrarse</button></li>
//         <li><button onClick="googleSignIn()">Accede con Google</button></li>
//         <li><button id="btnLogout" class="btn btn-action hide">Logout</button></li>
//     </div>
// </div>
// </main>