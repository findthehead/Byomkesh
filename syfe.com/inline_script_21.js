$(document).ready(function() {
    const viewMore = $(".btn-view-more").on('click', viewMoreTableScrollers);
});

function viewMoreTableScrollers() {
    $(this).hide();

    const floatingTable = $(this).siblings(".table-more-right");
    floatingTable.animate({
        scrollLeft: floatingTable.prop("scrollWidth")
    }, 300);
}