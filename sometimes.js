(function ($) {
    $.fn.sometimes = function() {
        $element = $(this);

        $(window).scroll(function() {
            if ($(window).scrollTop() >= $element.offset().top) {
                $element.css({"position":"fixed","top":0});
            } else {
                $element.removeAttr('style');
            }
        });
    };
}(jQuery));