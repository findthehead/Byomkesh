var toggleElements = document.querySelectorAll('.w-dropdown-toggle');
var iconWraps = document.querySelectorAll('.menu-dropdown-icon-wrap');

document.addEventListener('click', function() {
    resetIconStates();
});

const toggleEls = $(".w-dropdown-toggle");

$(toggleEls).click(function(event) {
    event.stopPropagation();
    const isExpandent = $(this).attr('aria-expanded') === 'true';

    if (isExpandent) {
        $($(this).find('.menu-dropdown-icon-wrap')).find('.minus').hide();
        $($(this).find('.menu-dropdown-icon-wrap')).find('.plus').show();
    } else {
        $($(this).find('.menu-dropdown-icon-wrap')).find('.plus').hide();
        $($(this).find('.menu-dropdown-icon-wrap')).find('.minus').show();
    }
})

function resetIconStates() {
    iconWraps.forEach(function(iconWrap) {
        var plusIcon = iconWrap.querySelector('.plus');
        var minusIcon = iconWrap.querySelector('.minus');
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
    });
}