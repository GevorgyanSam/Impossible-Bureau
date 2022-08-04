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




                        // SCROLL ANIMATIONS




    let win = $(window).scrollTop() + $(window).height();
    let sec = $("section > div").offset().top + $("section > div").height() / 2

    $(window).scroll(function () {
        $("section").each(function() {
            if(win >= sec) {
                $("section > div").css({
                    display: "block",
                })
            }
        })
    })

})