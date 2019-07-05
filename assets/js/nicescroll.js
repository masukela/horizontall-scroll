$(function() {  
    $("body").niceScroll({
    scrollspeed: 100, // scrolling speed
    mousescrollstep: 80, // scrolling speed with mouse wheel (pixel)
    smoothscroll: true, // scroll with ease movement
    hwacceleration: false, // use hardware accelerated scroll when supported
    bouncescroll: true, // (only hw accell) enable scroll bouncing at the end of content as mobile-like   
    cursorcolor: "#424242", // change cursor color in hex    
   }); 
});