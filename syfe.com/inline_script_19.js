$(document).on('click', '.is-popup', function() {
    $('.body-2').addClass('show-modal');
});
$(document).on('click', '.popup-close', function() {
    $('.body-2').removeClass('show-modal');
});

$(document).on('click', '.popup-overlay', function() {
    $('.body-2').removeClass('show-modal');
});