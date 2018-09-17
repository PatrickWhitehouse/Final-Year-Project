
/* Responsive Nav */

$('span.mobile').click(function(){
  $('nav ul').toggleClass('open');
});

/* Prevent Nav from keeping class open when resized */

$(window).resize(function(){
  if($(this).width() > 768){
    $('nav ul').removeClass('open');
  }
});

/* Sticky Nav */
$(document).ready(function(){
  var windowwidth = $(window).width();
});

$(window).scroll(function(){
    var windowscroll = $(window).scrollTop();
    if(windowscroll > 10 ){
      $('nav').addClass('sticky');
      $('body').addClass('body-scroll');
    }else{
      $('nav').removeClass('sticky');
      $('body').removeClass('body-scroll');
    }
});

/* Prevent Nav from staying open once srcolled */

$(window).scroll(function(){

  if($('nav').hasClass('sticky')){
    $('nav ul').removeClass('open');
  }


});


/* Change Title */

$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("title").text("We miss you😞");
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});
