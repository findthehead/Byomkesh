const activateZendeskChat = () => {
    // window.zE.activate();
    window.zE('messenger', 'open');
};

const loadZendeskScript = locale => {
    const zdScript = document.createElement('script');
    zdScript.setAttribute('id', 'ze-snippet');

    zdScript.setAttribute(
        'src',
        'https://static.zdassets.com/ekr/snippet.js?key=3c9f72fa-764d-4d39-84e8-3a2ffa4616f6'
    );
    document.body && document.body.appendChild(zdScript);
    setTimeout(() => {
        // window.zE && window.zE('webWidget', 'hide');
        //window.zE && window.zE('webWidget', 'setLocale', 'en-sg');
        window.zE && window.zE('messenger:set', 'locale', 'en-sg');
        window.zE && window.zE('messenger:set', 'zIndex', 9999999);
    }, 3000);
    //         window.zESettings = {
    //             webWidget: {
    //                 chat: {
    //                     prechatForm: {
    //                         greeting: {
    //                             '*': `Hello, welcome to Syfe.

    // How can we help you today? Please provide your email so that we may reach out to you in case the chat gets disconnected.

    // ==============================

    // Our Operating Hours are:

    // Syfe Wealth: 9am to 6pm, Mondays to Fridays, excluding Public Holidays.

    // Syfe Trade: 9am to 12am, Mondays to Fridays, excluding Public Holidays.

    // Should you reach us outside of our operating hours, please leave a message and we'll get back to you soon.
    // `
    //                         }
    //                     },
    //                     departments: {
    //                         enabled: ['Syfe Trade ', 'Syfe Wealth ']
    //                     },
    //                     connectOnPageLoad: false
    //                 }
    //             }
    //         };
}

const zendeskActivateChat = locale => {
    activateZendeskChat();
};

const initZendesk = () => {
    loadZendeskScript();
    window.zendeskActivateChat = zendeskActivateChat;

    const zendeskIcon = document.getElementsByClassName('zendesk__floating-icon');
    if (zendeskIcon && zendeskIcon[0]) {
        zendeskIcon[0].style.opacity = 1;
        zendeskIcon[0].addEventListener("click", zendeskActivateChat);
    }

    const zendeskStartChat = document.getElementById('contact-us-start-chat')
    if (zendeskStartChat) {
        zendeskStartChat.addEventListener("click", zendeskActivateChat);
    }
}

$(document).ready(setTimeout(() => {
    initZendesk();
}, 3000));