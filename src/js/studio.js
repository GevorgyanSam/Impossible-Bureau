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

    let win = $(window).scrollTop() + $(window).height();

    $(window).scroll(function () {

        let principleParent = $(".principlesParent").offset().top + $(".principlesParent").height() / 2;

        if(win >= principleParent) {
            $(".principlesParent").css({
                display: "block",
            })
        }
    })

    $(window).scroll(function () {

        let servicesParent = $(".servicesParent").offset().top + $(".servicesParent").height() / 2;

        if(win >= servicesParent) {
            $(".servicesParent").css({
                display: "block",
            })
        }
    })

})