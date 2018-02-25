function checkAnim() {
  var windowHeight = jQuery(window).height();
  $(".animate-img").each(function(){
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 100 > thisPos ) {
        $(this).css("visibility", "visible");
        $(this).addClass("fadeInUp");
    }
  });
}

var scrollHandle = true;

$(document).ready(function() {
  checkAnim();
  styleNav();
  onScrollHandle();

  // anim images
  $(window).scroll(function() {
      checkAnim();
      if(scrollHandle) onScrollHandle();
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      scrollHandle = false;
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 90
      }, 800, function() {
        scrollHandle = true;
      });
    } // End if
  });
});

function onScrollHandle(){
  var currentScrollPos = $(document).scrollTop() + 90;
  console.log(currentScrollPos);
  $("#myNavbar > div > a").each(function () {
    var curLink = $(this);
    var refElem = $(curLink.attr('href'));

    if($(window).scrollTop() + $(window).height() == $(document).height()
      && $(this).attr("id") === "id_contact"){
      $("#myNavbar > div > a").removeClass("active");
      curLink.addClass("active");
    }

    var yPadding = parseInt(refElem.css("padding-top")) + parseInt(refElem.css("padding-bottom"));
    if (refElem.position().top -1 <= currentScrollPos
      && refElem.position().top + refElem.height() + (yPadding - 2) > currentScrollPos) {
      $("#myNavbar > div > a").removeClass("active");
      curLink.addClass("active");
    }
  });
}

function styleNav(){
  // change active state at nat on click
  $(".nav-item").on("click", function(){
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  });
}
