$("#OB6").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function() {
    $(this).removeClass("animated")
  })
  
  $("OB6").hover(function() {
    $(this).addClass("animated");
  })
  

