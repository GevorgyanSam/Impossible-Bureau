"use strict";

$(() => {

    $(".navIcon2").click(() => {

        $("nav").fadeIn(500)

        $(".navRow").fadeOut(500)

    })

    $(".navIcon").click(() => {

        $("nav").fadeOut(500)

        $(".navRow").fadeIn(500)

    })

})