$(window).scroll(function() {
var theta = $(window).scrollTop() / 80 % Math.PI;
$('#menuicon').css({ transform: 'rotate(' + theta + 'rad)' });
$('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});