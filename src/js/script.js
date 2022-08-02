"use strict";

$(() => {

    $("#loadBtn").click(() => {

        $(".loadParent").css({
            display: "none",
        });

        $("nav").css({
            display: "block",
        });

    })

    $(".loadParent").delay(5000).fadeOut(0, function() {

        $("nav").css({
            display: "block",
        });

    })

})