var accordion = (function() {

    var $accordion = $('.add-ons_js-accordion');
    var $accordion_header = $accordion.find('.add-ons_js-accordion-header');
    var $accordion_item = $('.add-ons_js-accordion-item');

    // default settings 
    var settings = {
        // animation speed
        speed: 100,

        // close all other accordion items if true
        oneOpen: false,
    };

    return {
        // pass configurable object literal
        init: function($settings) {
            $accordion_header.on('click', function() {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.add-ons_js-accordion-item.active').length > 1) {
                $('.add-ons_js-accordion-item.active:not(:first)').removeClass('active');
                $('.add-ons_js-accordion').each(function() {
                    $(this).find('.add-ons_js-accordion-item').first().addClass('active')
                })
            }

            // reveal the active accordion bodies
            $('.add-ons_js-accordion-item.active').find('> .add-ons_js-accordion-body').show();
        },
        toggle: function($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.add-ons_js-accordion').find('> .add-ons_js-accordion-item.active > .add-ons_js-accordion-header')[0]) {
                $this.closest('.add-ons_js-accordion')
                    .find('> .add-ons_js-accordion-item')
                    .removeClass('active')
                    .find('.add-ons_js-accordion-body')
                    .slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.add-ons_js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function() {
    accordion.init({
        speed: 400,
        oneOpen: true
    });
});

/** <============================== Logged In CTA ==============================> */

function updateCTAOnAuth() {
    $('.ls-logged').each(function() {
        var $element = $(this);

        if (isLoggedIn()) {
            // User is logged in, check and update elements
            var ctaValue = $element.attr('logged-in-cta');
            var linkValue = $element.attr('logged-in-link');

            if (ctaValue) {
                $element.html(ctaValue);
            }
            if (linkValue) {
                $element.attr('href', linkValue);
            }
        } else {
            // User is not logged in, use the original attributes
            $element.html($element.attr('original-cta'));
            $element.attr('href', $element.attr('original-link'));

        }
    });
}

$(window).on('storage', function(e) {
    // When localStorage changes, update the elements
    updateCTAOnAuth();
});

$(document).ready(function() {
    $('.ls-logged').each(function() {
        var $element = $(this);
        var originalCTAValue = $element.html();
        var originalLinkValue = $element.attr('href');

        $element.attr('original-cta', originalCTAValue);
        $element.attr('original-link', originalLinkValue);

    });

    updateCTAOnAuth();

});