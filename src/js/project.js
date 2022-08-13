"use strict";

$(function () {




                        // NAVIGATION



                        
    $(".navIcon2").click(() => {

        $("nav").css({
            display: "block"
        })

        $(".navRow").css({
            display: "none"
        })

    })

    $(".navIcon").click(() => {

        $("nav").css({
            display: "none",
        })

        $(".navRow").css({
            display: "flex"
        })

    })

    $("#submit").click((e) => {
        e.preventDefault()
    })

    if ($(window).width() < 940) {
        $(".bg-paralax2").removeClass("scroll-bg2");
        $(".bg-paralax").removeClass("scroll-bg1")
    }

    $(window).scroll(function() {
        
        let wScroll = $(window).scrollTop();

        $(".scroll-bg1").css({
            backgroundPosition: "center " + (wScroll * 0.25 - 100) + 'px',
        })

        $(".scroll-bg2").css({
            backgroundPosition: "center " + (wScroll * 0.25 - $(".bg-paralax2").height() / 2) + 'px',
        })

    })

})