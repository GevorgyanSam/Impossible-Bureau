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

    if($(window).width() < 850) {
        $(".bg-paralax").removeClass("scroll-bg1");
        $(".img1").css({
            display: "block",
        })
    }

    $(window).scroll(function() {
        
        let wScroll = $(window).scrollTop();

        $(".scroll-bg1").css({
            backgroundPosition: "center " + (wScroll * 0.25 - 100) + 'px',
        })

    })

})