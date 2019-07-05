$(function() {

$("body").prognroll();

$(".bar").prognroll({
  custom:true
});

$(window).scroll(function() {
  if( $(window).scrollTop() > 250) {
$(".arrow-down").css("visibility","hidden");
  }else {
   $(".arrow-down").css("visibility","visible");
}
});

});