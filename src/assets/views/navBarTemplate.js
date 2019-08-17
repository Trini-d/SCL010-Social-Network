export const navBarLoggedOrNot = (user) => {
    let menuElementsIn = document.querySelectorAll('.loggedIn');
    let menuElementsOut = document.querySelectorAll('.loggedOut');
    if (user) {
        menuElementsIn.forEach(link => link.style.display = 'block');
        menuElementsOut.forEach(link => link.style.display = 'none');

    } else {
        menuElementsIn.forEach(link => link.style.display = 'none');
        menuElementsOut.forEach(link => link.style.display = 'block');

    }

};

export const hamburguerToggle = () => {
    let veganHamburguer = document.getElementById('hamburguer');
    veganHamburguer.addEventListener('click', (event) => {
        let menuList = document.querySelectorAll('.navigation ul');
        menuList.forEach(list => {
            if (list.classList.contains('show')) {
                list.classList.remove('show');
            } else {
                list.classList.add('show');
            }
        });

        console.log('me has clickeado');
    });

};