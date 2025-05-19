// hellobar close logic
const hellobarIcons = document.getElementsByClassName(`helllo-bar-cross-icon`);

if (hellobarIcons) {
    Array.from(hellobarIcons).forEach((hellobarIcon, index) => {
        const hellobar = document.getElementsByClassName(`section-hello-bar`)[index];
        if (localStorage.getItem('showHellobar') === 'no') {
            hellobar.style.display = 'none';
            isHellobarHidden = true;
        }
        hellobarIcon.addEventListener("click", () => {
            hellobar.style.display = 'none';
            localStorage.setItem('showHellobar', 'no');
            isHellobarHidden = true;
        });
    })
}

const updateShowButtonState = () => {
    const loginNavButton = document.getElementById(`login-btn`);

    if (isLoggedIn()) {
        //const getStartedNav = document.getElementsByClassName(`get-started-nav`)[0];
        //const myAccountNav = document.getElementsByClassName(`my-account-nav`)[0];
        loginNavButton.style.display = 'none';
        // getStartedNav.style.display = 'none';
        // myAccountNav.style.display = 'flex';
    } else {
        loginNavButton.style.display = 'block';
    }
}

window.addEventListener("storage", updateShowButtonState)
document.addEventListener('DOMContentLoaded', updateShowButtonState);