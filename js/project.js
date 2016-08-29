
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
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



// n>/<span class="sl-total"></span>'),b=!1,y=0,w=e("<div>").addClass("sl-caption pos-"+i.captionPosition),E=e("<div>").addClass("sl-image"),C=e("<div>").addClass("sl-wrapper").addClass(i.className),T=function(t){return i.fileExt?"a"==e(t).prop("tagName").toLowerCase()&&new RegExp(".("+i.fileExt+")$","i").test(e(t).attr("href")):!0},S=function(){i.close&&u.appendTo(C),i.showCounter&&p.length>1&&(x.appendTo(C),x.find(".sl-total").text(p.length)),i.nav&&v.appendTo(C),i.spinner&&m.appendTo(C)},k=function(t){t.trigger(e.Event("show.simplelightbox")),i.disableScroll&&W("hide"),C.appendTo("body"),E.appendTo(C),i.overlay&&f.appendTo(e("body")),b=!0,y=p.index(t),s=e("<img/>").hide().attr("src",t.attr("href")),-1==d.indexOf(t.attr("href"))&&d.push(t.attr("href")),E.html("").attr("style",""),s.appendTo(E),M(),f.fadeIn("fast"),e(".sl-close").fadeIn("fast"),m.show(),v.fadeIn("fast"),e(".sl-wrapper .sl-counter .sl-current").text(y+1),x.fadeIn("fast"),I(),i.preloading&&O(),setTimeout(function(){t.trigger(e.Event("shown.simplelightbox"))},i.animationSpeed)},I=function(n){if(s.length){var a=new Image,o=e(t).width()*i.widthRatio,l=e(t).height()*i.heightRatio;a.src=s.attr("src"),e(a).bind("error",function(t){return p.eq(y).trigger(e.Event("error.simplelightbox")),b=!1,r=!0,m.hide(),i.alertError?(alert(i.alertErrorMessage),void P(1==n||-1==n?n:1)):void 0}),a.onload=function(){"undefined"!=typeof n&&p.eq(y).trigger(e.Event("changed.simplelightbox")).trigger(e.Event((1===n?"nextDone":"prevDone")+".simplelightbox")),-1==d.indexOf(s.attr("src"))&&d.push(s.attr("src"));var c=a.width,g=a.height;if(c>o||g>l){var f=c/g>o/l?c/o:g/l;c/=f,g/=f}e(".sl-image").css({top:(e(t).height()-g)/2+"px",left:(e(t).width()-c)/2+"px"}),m.hide(),s.css({width:c+"px",height:g+"px"}).fadeIn("fast"),r=!0;var u="self"==i.captionSelector?p.eq(y):p.eq(y).find(i.captionSelector);if("data"==i.captionType)var v=u.data(i.captionsData);else if("text"==i.captionType)var v=u.html();else var v=u.prop(i.captionsData);if(i.loop||(0==y&&e(".sl-prev").hide(),y>=p.length-1&&e(".sl-next").hide(),y>0&&e(".sl-prev").show(),y<p.length-1&&e(".sl-next").show()),1==p.length&&e(".sl-prev, .sl-next").hide(),1==n||-1==n){var x={opacity:1};i.animationSlide&&(h?(D(0,100*n+"px"),setTimeout(function(){D(i.animationSpeed/1e3,"0px"),50})):x.left=parseInt(e(".sl-image").css("left"))+100*n+"px"),e(".sl-image").animate(x,i.animationSpeed,function(){b=!1,q(v)})}else b=!1,q(v);i.additionalHtml&&0==e(".sl-additional-html").length&&e("<div>").html(i.additionalHtml).addClass("sl-additional-html").appendTo(e(".sl-image"))}}},q=function(t){""!=t&&"undefined"!=typeof t&&i.captions&&w.html(t).hide().appendTo(e(".sl-image")).delay(i.captionDelay).fadeIn("fast")},D=function(t,n){var i={};i[l+"transform"]="translateX("+n+")",i[l+"transition"]=l+"transform "+t+"s linear",e(".sl-image").css(i)},M=function(){e(t).on("resize."+g,I),e(n).on("click."+g+" touchstart."+g,".sl-close",function(e){e.preventDefault(),r&&L()}),v.on("click."+g,"button",function(t){t.preventDefault(),a=0,P(e(this).hasClass("sl-next")?1:-1)});var s=0,l=0,d=0,c=0,f=!1,u=0;E.on("touchstart."+g+" mousedown."+g,function(e){return f?!0:(h&&(u=parseInt(E.css("left"))),f=!0,s=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,d=e.originalEvent.pageY||e.originalEvent.touches[0].pageY,!1)}).on("touchmove."+g+" mousemove."+g+" pointermove MSPointerMove",function(e){return f?(e.preventDefault(),l=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,c=e.originalEvent.pageY||e.originalEvent.touches[0].pageY,a=s-l,o=d-c,void(i.animationSlide&&(h?D(0,-a+"px"):E.css("left",u-a+"px")))):!0}).on("touchend."+g+" mouseup."+g+" touchcancel."+g+" mouseleave."+g+" pointerup pointercancel MSPointerUp MSPointerCancel",function(e){if(f){f=!1;var t=!0;i.loop||(0==y&&0>a&&(t=!1),y>=p.length-1&&a>0&&(t=!1)),Math.abs(a)>i.swipeTolerance&&t?P(a>0?1:-1):i.animationSlide&&(h?D(i.animationSpeed/1e3,"0px"):E.animate({left:u+"px"},i.animationSpeed/2)),i.swipeClose&&Math.abs(o)>50&&Math.abs(a)<i.swipeTolerance&&L()}})},R=function(){v.off("click","button"),e(n).off("click."+g,".sl-close"),e(t).off("resize."+g)},O=function(){var t=0>y+1?p.length-1:y+1>=p.length-1?0:y+1,n=0>y-1?p.length-1:y-1>=p.length-1?0:y-1;e("<img />").attr("src",p.eq(t).attr("href")).load(function(){-1==d.indexOf(e(this).attr("src"))&&d.push(e(this).attr("src")),p.eq(y).trigger(e.Event("nextImageLoaded.simplelightbox"))}),e("<img />").attr("src",p.eq(n).attr("href")).load(function(){-1==d.indexOf(e(this).attr("src"))&&d.push(e(this).attr("src")),p.eq(y).trigger(e.Event("prevImageLoaded.simplelightbox"))})},P=function(t){p.eq(y).trigger(e.Event("change.simplelightbox")).trigger(e.Event((1===t?"next":"prev")+".simplelightbox"));var n=y+t;if(!(b||(0>n||n>=p.length)&&0==i.loop)){y=0>n?p.length-1:n>p.length-1?0:n,e(".sl-wrapper .sl-counter .sl-current").text(y+1);var o={opacity:0};i.animationSlide&&(h?D(i.animationSpeed/1e3,-100*t-a+"px"):o.left=parseInt(e(".sl-image").css("left"))+-100*t+"px"),e(".sl-image").animate(o,i.animationSpeed,function(){setTimeout(function(){var n=p.eq(y);s.attr("src",n.attr("href")),-1==d.indexOf(n.attr("href"))&&m.show(),e(".sl-caption").remove(),I(t),i.preloading&&O()},100)})}},L=function(){if(!b){var t=p.eq(y),n=!1;t.trigger(e.Event("close.simplelightbox")),e(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){i.disableScroll&&W("show"),e(".sl-wrapper, .sl-overlay").remove(),R(),n||t.trigger(e.Event("closed.simplelightbox")),n=!0}),s=e(),r=!1,b=!1}},W=function(i){if("hide"==i){var a=t.innerWidth;if(!a){var o=n.documentElement.getBoundingClientRect();a=o.right-Math.abs(o.left)}if(n.body.clientWidth<a){var s=n.createElement("div"),l=parseInt(e("body").css("padding-right"),10);s.className="sl-scrollbar-measure",e("body").append(s);var r=s.offsetWidth-s.clientWidth;e(n.body)[0].removeChild(s),e("body").data("padding",l),r>0&&e("body").addClass("hidden-scroll").css({"padding-right":l+r})}}else e("body").removeClass("hidden-scroll").css({"padding-right":e("body").data("padding")})};return S(),p.on("click."+g,function(t){if(T(this)){if(t.preventDefault(),b)return!1;k(e(this))}}),e(n).on("click."+g+" touchstart."+g,function(t){r&&i.docClose&&0==e(t.target).closest(".sl-image").length&&0==e(t.target).closest(".sl-navigation").length&&L()}),i.disableRightClick&&e(n).on("contextmenu",".sl-image img",function(e){return!1}),i.enableKeyboard&&e(n).on("keyup."+g,function(e){if(e.preventDefault(),a=0,r){var t=e.keyCode;27==t&&L(),(37==t||39==e.keyCode)&&P(39==e.keyCode?1:-1)}}),this.open=function(t){t=t||e(this[0]),k(t)},this.next=function(){P(1)},this.prev=function(){P(-1)},this.close=function(){L()},this.destroy=function(){e(n).unbind("click."+g).unbind("keyup."+g),L(),e(".sl-overlay, .sl-wrapper").remove(),this.off("click")},this.refresh=function(){this.destroy(),e(this.selector).simpleLightbox(i)},this}}(jQuery,window,document);
