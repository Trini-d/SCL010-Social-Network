
export const templateProfile = () => {
    const containerProfile = document.createElement('div');
    const contentProfile= `<div id="profile">
                            <ul class="ulProfile" id="profile-list"></ul>
                          </div>
                        `;
    containerProfile.innerHTML = contentProfile;
    const btn = containerUserForm.querySelector('#sendForm');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
      retrieveProfile();
    });
    return containerProfile;
};


