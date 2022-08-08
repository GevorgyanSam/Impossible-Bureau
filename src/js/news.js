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


    let prev = $("#prev");
    let next = $("#next");
    let row1 = $(".row1");
    let row2 = $(".row2");
    let row3 = $(".row3");
    let row4 = $(".row4");
    let row5 = $(".row5");

    next.click(() => {

        if(next.hasClass("row1btn")) {

            prev.removeClass("disabled")

            row1.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row2.css({
                display: "flex",
            })

            next.removeClass("row1btn").addClass("row2btn")

        } else if(next.hasClass("row2btn")) {

            row1.css({
                display: "none",
            })

            row2.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row3.css({
                display: "flex",
            })

            next.removeClass("row2btn").addClass("row3btn")

        } else if(next.hasClass("row3btn")) {

            row1.css({
                display: "none",
            })

            row2.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row4.css({
                display: "flex",
            })

            next.removeClass("row3btn").addClass("row4btn")

        } else if(next.hasClass("row4btn")) {

            row1.css({
                display: "none",
            })

            row2.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "flex",
            })

            next.removeClass("row4btn").addClass("row5btn disabled")

        }

    })

    prev.click(() => {

        if(next.hasClass("row5btn")) {

            row1.css({
                display: "none",
            })

            row2.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row4.css({
                display: "flex",
            })

            next.removeClass("row5btn disabled").addClass("row4btn ")

        } else if(next.hasClass("row4btn")) {

            row1.css({
                display: "none",
            })

            row2.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row3.css({
                display: "flex",
            })

            next.removeClass("row4btn disabled").addClass("row3btn ")

        } else if(next.hasClass("row3btn")) {

            row1.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row2.css({
                display: "flex",
            })

            next.removeClass("row3btn disabled").addClass("row2btn ")

        } else if(next.hasClass("row2btn")) {

            row2.css({
                display: "none",
            })

            row3.css({
                display: "none",
            })

            row4.css({
                display: "none",
            })

            row5.css({
                display: "none",
            })

            row1.css({
                display: "flex",
            })

            next.removeClass("row2btn disabled").addClass("row1btn")
            prev.addClass("disabled")

        }

    })

})