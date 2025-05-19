// Navbar animation
const navbar = document.getElementById("navbar");
const logoWhite = document.getElementById("logo-white");
const logoDark = document.getElementById("logo-dark");
const loginBtn = document.getElementById("login-btn");


// navbar mobile
const navbarMb = document.getElementById("navbar-mb");
const logoWhiteMb = document.getElementById("logo-white-mb");
const logoDarkMb = document.getElementById("logo-dark-mb");
const menuWhiteMb = document.getElementById("menu-white-mb");
const menuDarkMb = document.getElementById("menu-dark-mb");

let prevScrollPos = window.pageYOffset;

function onScrollNav() {
    if (navbar) {
        const currentScrollPos = window.pageYOffset;
        const isHome = window.location.pathname === '/';

        if (currentScrollPos > window.innerHeight * 0.02) {
            navbar.style.backgroundColor = "#FDFCF8";
            navbar.style.boxShadow = '0 20px 50px rgba(38, 49, 89, 0.15)';
            // mobile
            navbarMb.style.backgroundColor = "#FDFCF8";
            navbarMb.style.boxShadow = '0 20px 50px rgba(38, 49, 89, 0.15)';
            logoWhite.style.display = "none";
            logoDark.style.display = "block";
            // mobile navbar
            logoWhiteMb.style.display = "none";
            logoDarkMb.style.display = "block";
            menuWhiteMb.style.display = "none";
            menuDarkMb.style.display = "block";
            // Ghost Btn
            if (loginBtn) {
                loginBtn.style.border = '1px solid #2F51C9';
                loginBtn.style.color = '#2F51C9';
            }
            if ($('#navbar').data('theme') !== 'white') {
                document.querySelector('.nav-dweb-link').style.color = "#263159";
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.style.color = "#263159";

                    $(link).hover(function() {
                        $(this).css("color", "#2f51ca");
                    }, function() {
                        $(this).css("color", "#263159");
                    });
                });
            }
        } else {
            if (isHome) {
                // B01
                navbar.style.backgroundColor = "#263159";
                navbarMb.style.backgroundColor = "#263159";
            } else {
                navbar.style.backgroundColor = "transparent";
                navbarMb.style.backgroundColor = "transparent";
            }

            navbar.style.boxShadow = '0 20px 50px rgba(38, 49, 89, 0)';
            // mobile menu
            navbarMb.style.boxShadow = '0 20px 50px rgba(38, 49, 89, 0)';
            logoWhite.style.display = "block";
            logoDark.style.display = "none";
            // mobile navbar
            logoWhiteMb.style.display = "block";
            logoDarkMb.style.display = "none";
            menuWhiteMb.style.display = "block";
            menuDarkMb.style.display = "none";
            // Ghost Btn Transparent
            if (loginBtn) {
                loginBtn.style.border = '1px solid #F7F8FC';
                loginBtn.style.color = '#F7F8FC';
            }

            if ($('#navbar').data('theme') !== 'white') {
                document.querySelector('.nav-dweb-link').style.color = "#F7F8FC";
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.style.color = "#F7F8FC";

                    $(link).hover(function() {
                        $(this).css("color", "#2f51ca");
                    }, function() {
                        $(this).css("color", "#F7F8FC");
                    });
                });
            }
        }

        prevScrollPos = currentScrollPos;
    }
};

document.addEventListener('scroll', onScrollNav);
document.addEventListener('DOMContentLoaded', onScrollNav);

// language switcher
function stripLocale(pathname) {
    const locales = ['en-hk', 'hk', 'au'];
    const parts = pathname.split('/').filter(Boolean); // Split and remove empty parts
    const firstPart = parts[0];

    if (locales.includes(firstPart)) {
        parts.shift(); // Remove the locale from the beginning
    }

    return '/' + parts.join('/');
}

const updateLocaleSwitcher = () => {
    const currentLocale = locale;
    $(`[data-switch-locale=""] .switcher-lang-text`).css("color", "var(--syfe23-primary--b01)");
    $(`[data-switch-locale=""] .switcher-selected`).css("display", "flex");


    $(`[data-switch-locale]`).each(function() {
        const currL = $(this).attr('data-switch-locale');
        const location = stripLocale(window.location.pathname);

        if (currL)
            $(this).attr('href', `/${currL}${location}?rs=lp`);
        else
            $(this).attr('href', `${location}?rs=lp`);
    })
}

const removeRsParam = () => {
    const url = new URL(window.location.href);

    if (url.searchParams.get("rs") === "lp") {
        url.searchParams.delete("rs");

        // Update the URL without reloading the page
        window.history.replaceState(null, "", url);
    }
}

$(document).ready(function() {
    updateLocaleSwitcher();
    removeRsParam();
});