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

    if ($(window).width() < 900) {
        $(".bg-paralax2").removeClass("scroll-bg2")
    }

    $(window).scroll(function() {
        
        let wScroll = $(window).scrollTop();

        $(".bg-paralax").css({
            backgroundPosition: "center " + (wScroll * 0.25) + 'px',
        })

        $(".scroll-bg2").css({
            backgroundPosition: "center " + (wScroll * 0.25 - $(".bg-paralax2").height() / 2) + 'px',
        })

    })

})