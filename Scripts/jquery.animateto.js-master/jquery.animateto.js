/*!
 * jquery.animateto.js 0.1 - https://github.com/yckart/jquery.animateto.js
 * Animate/duplicate elements from one place to another one!
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/01/21
**/

;(function ($) {
    var supportTransition = (function (a, b) {a = (new Image).style;b = 'ransition';return 't' + b in a || 'webkitT' + b in a || 'MozT' + b in a || 'OT' + b in a;})();

    $.fn.animateTo = function (target, options) {
        options = $.extend({}, {
            clone: true,
            useTransition: false,
            duration: 900,
            easing: 'swing',
            complete: function (clone, product) {
                $(clone).fadeOut(function () {
                    $(this).remove();
                });
            },
            extendAnimation: {
                opacity: 0
            }
        }, options);

        return this.each(function () {
            var cart = $(target),
                product = $(this),
                animateObj = $.extend({}, options.extendAnimation, {
                    top: cart.offset().top,
                    left: cart.offset().left,
                    width: cart.outerWidth() - (product.outerWidth(true) - product.width()),
                    height: cart.outerHeight() - (product.outerHeight(true) - product.height())
                });

            var clone = options.clone ? product.clone().insertAfter(this) : product;
            clone.addClass('clone').css({
                position: 'absolute',
                top: product.offset().top,
                left: product.offset().left,
                width: product.width(),
                height: product.height(),
                zIndex: 9999
            });
            if (options.useTransition && supportTransition) {
                animateObj.transition = 'all ' + options.duration / 1000 + 's ease-in-out';
                setTimeout(function () {
                    clone.css(animateObj);
                }, 1);
                clone.on('transitionend', function () {
                    options.complete(clone, product);
                });
            } else {
                clone.animate(animateObj, options.duration, options.easing, function () {
                    options.complete(this, product);
                });
            }
        });
    };
})(jQuery);