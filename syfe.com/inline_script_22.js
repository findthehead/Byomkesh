// accordion code
/* because of the way sticky behaves when a parent has overflow hidden, the table header jumps when we toggle slider, to fix that, setting table header top to 0 when slider toggle is process, and setting it back when toggle completed - SJ */
$(document).ready(function() {
    $(".accordion-header").click(function() {

        var target = $(this).parent().children(".accordion-body");
        const tableHeader = target[0].getElementsByClassName('table-header');

        // remove sticky
        if (tableHeader.length > 0) {
            const targetHeaderStyle = tableHeader[0].style;
            targetHeaderStyle.top = 0;
        }
        $(target).slideToggle(function() {
            // remove sticky
            if (tableHeader.length > 0) {
                const targetHeaderStyle = tableHeader[0].style;
                targetHeaderStyle.top = '';
            }
        });

        $(this).parent().toggleClass("accordian-active");

    });
});

//$(document).on('click','.tab-container .accordion-header', function(){
//  $(this).toggleClass("active-header");
//});