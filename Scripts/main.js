AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});

$(document).ready(function () {
    var leftValue = window.innerWidth - 115; // 115 is a temp value
    var topValue = window.innerHeight - 115;
    var actionNum = 0;
    var movingBlock = $('#ordernumbers');

    $('#go').click(function () {
        if (actionNum < 4) {
            actionNum++;
        } else {
            actionNum = 1;
        }

        switch (actionNum) {
            case 1:
                // move to the top right
                movingBlock.animate({
                    left: leftValue + 'px',
                    top: 0
                }, 1000);
                break;
            case 2:
                // move to the bottom right
                movingBlock.animate({
                    left: leftValue + 'px',
                    top: topValue + 'px'
                }, 1000);
                break;
            case 3:
                // move to the left bottom
                movingBlock.animate({
                    top: topValue + 'px',
                    left: 0
                }, 1000);
                break;
            case 4:
                // move to the top left
                movingBlock.animate({
                    left: 0,
                    top: 0
                }, 1000);
                break;
            default:
                break;
        }
    });
});

var v001 = 0;
var v000 = 0;

jQuery(document).ready(function ($) {

    var bahman = $("#ordernumbers")[0].innerHTML;
    basketnumber = parseInt(bahman);

    

    "use strict";

    var slider = function () {
        $('.nonloop-block-3').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            smartSpeed: 700,
            stagePadding: 15,
            margin: 20,
            autoplay: true,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive: {
                600: {
                    margin: 20,
                    items: 2
                },
                1000: {
                    margin: 20,
                    items: 3
                },
                1200: {
                    margin: 20,
                    items: 3
                }
            }
        });
    };
    slider();


    var siteMenuClone = function () {

        $('<div class="site-mobile-menu"></div>').prependTo('.site-wrap');

        $('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu');
        $('<div class="site-mobile-menu-close "></div>').prependTo('.site-mobile-menu-header');
        $('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header');

        $('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu');



        $('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo');

        $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close');


        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
				w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();


    var sitePlusMinus = function () {
        $('.js-btn-minus').on('click', function (e) {
            e.preventDefault();
            if ($(this).closest('.input-group').find('.form-control').val() !== 0) {
                $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
            } else {
                $(this).closest('.input-group').find('.form-control').val(parseInt(0));
            }
        });
        $('.js-btn-plus').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
        });
    };
    sitePlusMinus();


    var siteSliderRange = function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 10000000,
            values: [0, 10000000],
            slide: function (event, ui) {

                var v1 = ui.values[1].toLocaleString();

                var v0 = ui.values[0].toLocaleString();

                $("#amount").val(v1 + " ریال " + " تا " + v0 + " ریال ");

                var v021 = parseInt(ui.values[1].toString());
                var v020 = parseInt(ui.values[0].toString());

                $("#minValue").val(v020);
                $("#maxValue").val(v021);
            }
        });

        var v01 = $("#slider-range").slider("values", 1).toLocaleString();

        var v00 = $("#slider-range").slider("values", 0).toLocaleString();

        v001 = parseInt($("#slider-range").slider("values", 1).toString());
        v000 = parseInt($("#slider-range").slider("values", 0).toString());

        $("#minValue").val(v000);
        $("#maxValue").val(v001);

        $("#amount").val(v01 + " ریال " + " تا " + v00 + " ریال ");
    };
    siteSliderRange();


    var siteMagnificPopup = function () {
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    };
    siteMagnificPopup();

    //var searchShow = function () {
    //    // alert();
    //    var searchWrap = $('.search-wrap');
    //    $('.js-search-open').on('click', function (e) {
    //        e.preventDefault();
    //        searchWrap.addClass('active');
    //        setTimeout(function () {
    //            searchWrap.find('.form-control').focus();
    //        }, 300);
    //    });
    //    $('.js-search-close').on('click', function (e) {
    //        e.preventDefault();
    //        searchWrap.removeClass('active');
    //    })
    //};
    //searchShow();

});


$(document).ready(function () {
    //$('nav ul li a').on("click", function () {

    //    var a = $('nav ul li.active');
    //    console.log(a);
    //    if (a.length > 0)
    //        a[0].classList[0] = "";//.removeClass('active');
    //    console.log(a);
    //    //classList

    //    var $parent = $(this).parent();
    //    console.log($parent);


    //    $(this).parent().addClass('active');

    //    $parent = $(this).parent();
    //    console.log($parent);
    //});

    // Add active class to the current button (highlight it)
    //var header = document.getElementsByTagName("nav");
    //var btns = header.getElementsByTagName("li");
    //for (var i = 0; i < btns.length; i++) {
    //    btns[i].addEventListener("click", function () {
    //        var current = document.getElementsByClassName("active");
    //        current[0].className = current[0].className.replace(" active", "");
    //        this.className += " active";
    //    });
    //}
});