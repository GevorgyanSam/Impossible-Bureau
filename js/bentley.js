"use strict";$((function(){$(".navIcon2").click((()=>{$("nav").css({display:"block"}),$(".navRow").css({display:"none"})})),$(".navIcon").click((()=>{$("nav").css({display:"none"}),$(".navRow").css({display:"flex"})})),$("#submit").click((s=>{s.preventDefault()})),$(window).width()<1100&&($(".bg-paralax").removeClass("scroll-bg1"),$(".img1").css({display:"block"})),$(window).scroll((function(){let s=$(window).scrollTop();$(".scroll-bg1").css({backgroundPosition:"center "+(.25*s-250)+"px"})}))}));