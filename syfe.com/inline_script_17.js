$(function() {

    // $(".faq-accordion-content:not(:first-of-type)").css("display", "none");
    // $(".faq-js-accordion-title:first-of-type").addClass("open");
    $(".faq-block:not(:first-of-type) > .faq-accordion-content").css("display", "none");
    $(".faq-block:first-of-type > .faq-js-accordion-title").addClass("open");

    $(".faq-js-accordion-title").click(function() {
        $(".open").not(this).removeClass("open").next().slideUp(300);
        $(this).toggleClass("open").next().slideToggle(300);
    });
});