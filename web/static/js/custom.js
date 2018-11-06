$(window).scroll(function(){
    $(".clockLabel").css("opacity", 1 - $(window).scrollTop() / 250);
  });
