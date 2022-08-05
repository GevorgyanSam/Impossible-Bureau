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




                        // TEAM RESUME





    function jeff() {

        $({ countNum: 0 }).animate({ countNum: 40 }, {
            delay: 1500,
            duration: 3000,
            easing: 'linear',
            step: function(countNum) {
              $(".count1").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 4532 }, {
            delay: 1500,
            duration: 3100,
            easing: 'linear',
            step: function(countNum) {
              $(".count2").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 205985 }, {
            delay: 1500,
            duration: 3800,
            easing: 'linear',
            step: function(countNum) {
              $(".count3").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 61 }, {
            delay: 1500,
            duration: 3050,
            easing: 'linear',
            step: function(countNum) {
              $(".count4").text(Math.ceil(countNum))
            },
        });

    }

    function blake() {

        $({ countNum: 0 }).animate({ countNum: 150 }, {
            delay: 1500,
            duration: 3000,
            easing: 'linear',
            step: function(countNum) {
              $(".count5").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 365 }, {
            delay: 1500,
            duration: 3100,
            easing: 'linear',
            step: function(countNum) {
              $(".count6").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 14 }, {
            delay: 1500,
            duration: 3050,
            easing: 'linear',
            step: function(countNum) {
              $(".count7").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 2232 }, {
            delay: 1500,
            duration: 3800,
            easing: 'linear',
            step: function(countNum) {
              $(".count8").text(Math.ceil(countNum))
            },
        });

    }

    function julia() {

        $({ countNum: 0 }).animate({ countNum: 40 }, {
            delay: 1800,
            duration: 3000,
            easing: 'linear',
            step: function(countNum) {
              $(".count9").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 28 }, {
            delay: 1500,
            duration: 3100,
            easing: 'linear',
            step: function(countNum) {
              $(".count10").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 12 }, {
            delay: 1500,
            duration: 3000,
            easing: 'linear',
            step: function(countNum) {
              $(".count11").text(Math.ceil(countNum))
            },
        });

        $({ countNum: 0 }).animate({ countNum: 23963 }, {
            delay: 1500,
            duration: 3800,
            easing: 'linear',
            step: function(countNum) {
              $(".count12").text(Math.ceil(countNum))
            },
        });

    }

    $("#jeff").click(() => {

        $(".teamParent").css({
            display: "none",
        })

        $("#jeffResume").css({
            display: "block",
        })

        jeff()

    })

    $("#blake").click(() => {

        $(".teamParent").css({
            display: "none",
        })

        $("#blakeResume").css({
            display: "block",
        })

        blake()

    })

    $("#julia").click(() => {

        $(".teamParent").css({
            display: "none",
        })

        $("#juliaResume").css({
            display: "block",
        })

        julia()

    })

    $(".all").click(() => {

        $(".teamResumeParent").css({
            display: "none",
        })

        $(".teamParent").css({
            display: "block",
        })

    })

    $(".next").click(() => {

        $("#jeffResume").css({
            display: "none",
        })

        $("#blakeResume").css({
            display: "block",
        })

        blake()

    })

    $(".next2").click(() => {

        $("#blakeResume").css({
            display: "none",
        })

        $("#juliaResume").css({
            display: "block",
        })

        julia()

    })

    // $(".back").click(() => {



    // })

    $(".back2").click(() => {

        $("#blakeResume").css({
            display: "none",
        })

        $("#jeffResume").css({
            display: "block",
        })

        jeff()

    })

    $(".back3").click(() => {

        $("#juliaResume").css({
            display: "none",
        })

        $("#blakeResume").css({
            display: "block",
        })

        blake()

    })

})