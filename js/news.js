"use strict";$((function(){$(".navIcon2").click((()=>{$("nav").css({display:"block"}),$(".navRow").css({display:"none"})})),$(".navIcon").click((()=>{$("nav").css({display:"none"}),$(".navRow").css({display:"flex"})})),$("#submit").click((s=>{s.preventDefault()}));let s=$("#prev"),n=$("#next"),a=$(".row1"),l=$(".row2"),o=$(".row3"),d=$(".row4"),e=$(".row5");n.click((()=>{n.hasClass("row1btn")?(s.removeClass("disabled"),a.css({display:"none"}),o.css({display:"none"}),d.css({display:"none"}),e.css({display:"none"}),l.css({display:"flex"}),n.removeClass("row1btn").addClass("row2btn")):n.hasClass("row2btn")?(a.css({display:"none"}),l.css({display:"none"}),d.css({display:"none"}),e.css({display:"none"}),o.css({display:"flex"}),n.removeClass("row2btn").addClass("row3btn")):n.hasClass("row3btn")?(a.css({display:"none"}),l.css({display:"none"}),o.css({display:"none"}),e.css({display:"none"}),d.css({display:"flex"}),n.removeClass("row3btn").addClass("row4btn")):n.hasClass("row4btn")&&(a.css({display:"none"}),l.css({display:"none"}),o.css({display:"none"}),d.css({display:"none"}),e.css({display:"flex"}),n.removeClass("row4btn").addClass("row5btn disabled"))})),s.click((()=>{n.hasClass("row5btn")?(a.css({display:"none"}),l.css({display:"none"}),o.css({display:"none"}),e.css({display:"none"}),d.css({display:"flex"}),n.removeClass("row5btn disabled").addClass("row4btn ")):n.hasClass("row4btn")?(a.css({display:"none"}),l.css({display:"none"}),d.css({display:"none"}),e.css({display:"none"}),o.css({display:"flex"}),n.removeClass("row4btn disabled").addClass("row3btn ")):n.hasClass("row3btn")?(a.css({display:"none"}),o.css({display:"none"}),d.css({display:"none"}),e.css({display:"none"}),l.css({display:"flex"}),n.removeClass("row3btn disabled").addClass("row2btn ")):n.hasClass("row2btn")&&(l.css({display:"none"}),o.css({display:"none"}),d.css({display:"none"}),e.css({display:"none"}),a.css({display:"flex"}),n.removeClass("row2btn disabled").addClass("row1btn"),s.addClass("disabled"))}))}));