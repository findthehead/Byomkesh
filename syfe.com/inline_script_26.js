$(".tooltip").on('click', function() {
    const zendeskIcon = $('iframe#launcher')
    if (zendeskIcon && zendeskIcon[0]) {
        zendeskIcon[0].style.display = "none";
    }
    $(this).addClass("add"); // adding active class
});

$(document).on('click', '.tul-close', function() {
    const zendeskIcon = $('iframe#launcher')
    if (zendeskIcon && zendeskIcon[0]) {
        zendeskIcon[0].style.display = '';
    }
    $('.tooltip').removeClass('add');
});