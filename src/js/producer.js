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

    $(window).scroll(function() {
        
        let wScroll = $(window).scrollTop();

        $(".bg-paralax").css({
            backgroundPosition: "center " + (wScroll * 0.3) + 'px',
        })

    })

})