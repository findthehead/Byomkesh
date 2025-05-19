const el = document.querySelector('#geo-redirection-overlay');
const heading = document.querySelector('#geo-modal-heading');
const continueCTAs = document.querySelectorAll('.geo-continue');
const navigateCTA = document.querySelector('#geo-navigate');
const SESSION_KEY = 'geo-redirection-disabled';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//const isAustraliaTZ = timezone.startsWith('Australia');
const isHongKongTZ = ['Asia/Hong_Kong', 'Hongkong'].includes(timezone);
const isAustraliaTZ = false; // Temporarily disable HK popup

const detectMob = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const detectRegion = () => {
    if (isAustraliaTZ || isHongKongTZ) {
        const sessionValue = sessionStorage.getItem(SESSION_KEY);

        if (!sessionValue) {
            const geo = isAustraliaTZ ? 'Australia' : 'Hong Kong';
            if (detectMob()) {
                heading.innerHTML = 'Go to<br/>Syfe ' + geo;
            } else {
                heading.innerHTML = 'Go to Syfe ' + geo;
            }

            navigateCTA.firstChild.textContent = 'Go to Syfe ' + geo;

            document.body.style.overflow = 'hidden';
            el.style.display = 'flex';
        }
    }
}

const disableGeoRedirectionForCurrentSession = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    document.body.style.overflow = 'auto';
    el.style.display = 'none';
}

const navigateToGeo = () => {
    if (isAustraliaTZ) {
        window.open('https://syfe.com/au', '_self');
    }
    if (isHongKongTZ) {
        window.open('https://syfe.com/en-hk', '_self');
    }
}

continueCTAs.forEach(cta => cta.addEventListener('click', disableGeoRedirectionForCurrentSession));

navigateCTA.addEventListener('click', navigateToGeo);

detectRegion();