"use strict";

$(function () {

    $(".navIcon2").click(() => {

        $("nav").fadeIn(500)

        $(".navRow").fadeOut(500)

    })

    $(".navIcon").click(() => {

        $("nav").fadeOut(500)

        $(".navRow").fadeIn(500)

    })

    $(window).scroll(function () {

        let win = $(window).scrollTop() + $(window).height();
        let principleParent = $(".principlesParent").offset().top + $(".principlesParent").height() / 2;

        if(win >= principleParent) {
            $(".principlesParent").css({
                display: "block",
            })
        }
    })

})