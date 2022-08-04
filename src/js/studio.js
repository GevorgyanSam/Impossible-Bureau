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

    $(window).scroll(function () {

        let servicesParent = $(".clientsParent").offset().top + $(".clientsParent").height() / 2;

        if(win >= servicesParent) {
            $(".clientsParent").css({
                display: "block",
            })
        }
    })

})