 var el1 = document.getElementById("myDropdown");
  var el2 = document.getElementById("myDropdown2");
  var el3 = document.getElementById("myDropdown3");

  var elb1 = document.getElementById("elb1");
  var elb2 = document.getElementById("elb2");
  var elb3 = document.getElementById("elb3");


  elb1.addEventListener("click", function () {
    el2.classList.remove("show");
    el3.classList.remove("show");
    el1.classList.toggle("show");
  });
  elb2.addEventListener("click", function () {
    el3.classList.remove("show");
    el1.classList.remove("show");
    el2.classList.toggle("show");
  });
  elb3.addEventListener("click", function () {
    el1.classList.remove("show");
    el2.classList.remove("show");
    el3.classList.toggle("show");
  });

$("#burger").click(function(){
  $(this).slideUp(100);
  $("nav a").slideDown(100);
});
  // $('nav li ul').hide().removeClass('fallback');
  // $('nav li').hover(
  //     function () {
  //       $('ul', this).stop().slideDown(400);
  //     },
  //     function () {
  //       $('ul', this).stop().slideUp(100);
  //     }
  // );

var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
google.maps.event.addDomListener(window, 'load', initialize);
function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  document.body.appendChild(script);
}
google.maps.event.addDomListener(window, 'load', initialize);
window.onload = loadScript;

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
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

