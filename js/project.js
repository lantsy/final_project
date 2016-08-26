$(".neighborhood").click(function(){
	$(".box1").slideDown(200);
});
$(".bedroom").click(function(){
	$(".box2").slideDown(200);
});
$(".price").click(function(){
	$(".box3").slideDown(200);
});
$(document).ready(function() {
  var animating = false;
 
  if ($(".slide").length > 1) {
    $("#next").show();
  }
  $("#next").click(fireNext);

  $("#prev").click(firePrevious);

  function fireNext() {
    if (!animating) {
      animating = true;

      $("#prev").show();

      if ($(".current").next().is(":last-of-type")) {
        $("#next").hide();
      }

      $(".current").next().css("z-index", 1);
      $(".current").animate({ left: "-100%" }, 500, "easeOutSine", function() {
        $(".current").css("left", "0").removeClass("current").next().addClass("current").attr("style", "");
        animating = false;
      });
    }
  }

  function firePrevious() {
    if (!animating) {
      animating = true;

      $("#next").show();

      if ($(".current").prev().is(":first-of-type")) {
        $("#prev").hide();
      }

      $(".current").prev().css("z-index", 1);

      $(".current").animate({ right: "-100%" }, 500, "easeOutSine", function() {
        $(".current").css("left", "0").removeClass("current").prev().addClass("current").attr("style", "");
        animating = false;
      });
    }
  }

  var hammertime = new Hammer(document.getElementById("slideshow"));

  hammertime.on("swipeleft", function() {
    // console.log("In the swipe left");
    fireNext();
  });

  hammertime.on("swiperight", function() {
    // console.log("In the swipe right");
    firePrevious();
  });
});




