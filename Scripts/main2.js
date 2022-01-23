jQuery(document).ready(function ($) {

    $("#addToCart").on("click", function () {
        var n = $(".number").innerHtml;
        console.log(n);
        var number = parseInt(n);
        var productId = ("#ProductId")[0].value;
        console.log(productId);
        var quantity = ("#Quantity")[0].value;
        console.log(quantity);

        $.ajax({
            type: "GET",
            url: "/Orders/AddToBasket",
            dataType: 'json',
            data: { ProductId: productId, Quantity: quantity },
            success: function (result) {
                console.log(result);
                number = number + result;
                console.log(number);
                $(".number").innerHtml = number;
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback 
                console.log(errorMessage);
            }
        });
    });
});


$(document).ready(function () {
    $("#removeItem").on("click", function () {

        var dataId = $(this).data("id");

        var n = $("#ordernumbers")[0].innerHTML;

        var number = parseInt(n);

        $.ajax({
            type: "GET",
            url: "/Orders/RemoveFromBasket",
            dataType: 'json',
            data: { index: dataId },
            success: function (result) {
                console.log(result);
                number = number - result;
                console.log(number);
                $("#ordernumbers").animate({ innerHTML: number });
                window.location = "/Orders/Cart";
                $("#ordernumbers").animate({ innerHTML: number });
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                console.log(errorMessage);
            }
        });


    });


    $(".addAmount").on("click", function () {

        var dataId = $(this).data("id");

        var price = $(this).data("eachprice");

        var a = parseInt($('.mycart[data-id=' + dataId + ']').val());

        if (a < 0) {
            a = 0;
            $('.mycart[data-id=' + dataId + ']').val(0);
        }


        var t = a * price;

        $('.totalPrice[data-id=' + dataId + ']')[0].innerHTML = t.toLocaleString();

        var n = $("#ordernumbers")[0].innerHTML;

        var number = parseInt(n);

        $.ajax({
            type: "GET",
            url: "/Orders/UpdateAddBasket",
            dataType: 'json',
            data: { index: dataId, Amount: a, Price: t },
            success: function (result) {

                number = number + result;

                $("#ordernumbers").animate({ innerHTML: number });
                window.location = "/Orders/Cart";
                $("#ordernumbers").animate({ innerHTML: number });
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                console.log(errorMessage);
            }
        });


    });


    $(".delAmount").on("click", function () {

        var dataId = $(this).data("id");

        var price = $(this).data("eachprice");

        var a = parseInt($('.mycart[data-id=' + dataId + ']').val());

        if (a < 0) {
            a = 0;
            $('.mycart[data-id=' + dataId + ']').val(0);
        }


        var t = a * price;

        $('.totalPrice[data-id=' + dataId + ']')[0].innerHTML = t.toLocaleString();

        var n = $("#ordernumbers")[0].innerHTML;

        var number = parseInt(n);

        $.ajax({
            type: "GET",
            url: "/Orders/UpdateDelBasket",
            dataType: 'json',
            data: { index: dataId, Amount: a, Price: t },
            success: function (result) {

                number = number - result;

                $("#ordernumbers").animate({ innerHTML: number });
                window.location = "/Orders/Cart";
                $("#ordernumbers").animate({ innerHTML: number });
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                console.log(errorMessage);
            }
        });


    });

});


$(document).ready(function () {
    $("#addToCart").on("click", function () {
        var n = $("#ordernumbers")[0].innerHTML;

        var number = parseInt(n);
        var productId = $("#ProductId").val();
        var quantity = $("#Quantity")[0].value;
        console.log(number);

        $.ajax({
            type: "GET",
            url: "/Orders/AddToBasket",
            dataType: 'json',
            data: { ProductId: productId, Quantity: quantity },
            success: function (result) {

                console.log(result);
                number = number + result;
                console.log(number);
                $("#ordernumbers").animate({ innerHTML: number });

                $("#Quantity").val(0);
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                console.log(errorMessage);
            }
        });
    });

});

$(document).ready(function () {

    $("#userMessage").on("click", function () {
        $(this).fadeOut(500);
    });

    $("#userMessagebtn").on("click", function () {
        $("#userMessage").fadeOut(500);
    });
});

$(document).ready(function () {
    //$('.carousel').carousel({
    //    interval: 4000
    //});
    //var r = Math.floor(Math.random() * 9);

    var $myCarousel = $('#myslide');

    // Initialize carousel
    $myCarousel.carousel({
        interval: 4500
    });

    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });

        elems.each(function () {
            var $this = $(this),
            $animationType = $this.data('animation');
            if ($animationType === 'animated heartBeat') {
                $(this).css("animation-delay", "0.6s");
            }
        });
    }

    var $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find('[data-animation ^= "animated"]');

    // Apply the animation using the doAnimations()function
    doAnimations($firstAnimatingElems);

    $myCarousel.on('slide.bs.carousel', function (e) {
        // Select the elements to be animated inside the active slide
        var $animatingElems = $(e.relatedTarget)
          .find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });


});