new WOW().init();
    $(document).ready(function () {
        var owl = $('.owl-carousel3');
        owl.owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [1500])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
    })
    $(document).ready(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            margin: 40,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [1000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
    })
    $(document).ready(function () {
        var owl = $('.owl-carousel5');
        owl.owlCarousel({
            items: 5,
            margin: 40,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [1000])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })
    })
    var preloder = document.getElementById("loader");

    window.addEventListener("load", function () {
        preloder.style.display = "none";
    });
    // typewriter
    var span = document.querySelector(".typewriter span");
    var textArr = span.getAttribute("data-text").split(", ");
    var maxTextIndex = textArr.length;

    var sPerChar = 0.15;
    var sBetweenWord = 1.5;
    var textIndex = 0;

    typing(textIndex, textArr[textIndex]);

    function typing(textIndex, text) {
        var charIndex = 0;
        var maxCharIndex = text.length - 1;

        var typeInterval = setInterval(function () {
            span.innerHTML += text[charIndex];
            if (charIndex == maxCharIndex) {
                clearInterval(typeInterval);
                setTimeout(function () { deleting(textIndex, text) }, sBetweenWord * 1000);

            } else {
                charIndex += 1;
            }
        }, sPerChar * 1000);
    }

    function deleting(textIndex, text) {
        var minCharIndex = 0;
        var charIndex = text.length - 1;

        var typeInterval = setInterval(function () {
            span.innerHTML = text.substr(0, charIndex);
            if (charIndex == minCharIndex) {
                clearInterval(typeInterval);
                textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
                setTimeout(function () { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000);
            } else {
                charIndex -= 1;
            }
        }, sPerChar * 1000);
    }
    // $('.count').each(function () {
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 3000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
    $('.count').counterUp({
        delay: 20,
        time: 1000
    });

    $('.input-control input').on('focus', function () {
        if (!$(this).hasClass('input--focused')) {
            $(this).addClass('input--focused');
        }
    }).on('blur', function () {
        if ($(this).val() === '' && $(this).hasClass('input--focused')) {
            $(this).removeClass('input--focused')
        }
    }) 
    var preloder = document.getElementById("loader");

    window.addEventListener("load", function () {
        preloder.style.display = "none";
    });