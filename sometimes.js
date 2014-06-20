(function ( $ ) {
    $.fn.sometimes = function( styles ) {
        $element = $(this);

        $(window).scroll(function() {
            // If the window has scrolled to the top of the element
            if ($(window).scrollTop() >= $element.offset().top) {
                $element.css({"position":"fixed","top":0});

                // If additional styles were passed in, apply them now
                if (typeof(styles) === 'object') { $element.css(styles); }
            } else {
                $element.removeAttr('style');
            }
        });

        return this;
    };
}(jQuery));