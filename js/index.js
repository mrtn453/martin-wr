const MY_MAIL = "martin.wrod@googlemail.com"

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

  $('#contact-form').submit(function(e) {
    let name = $('#inputName').val();
    let subject = $('#inputSubject').val();
    let msg = $('#inputArea').val();
    console.log(name, MY_MAIL, msg);
    document.location = "mailto:"+MY_MAIL+"?subject="+subject+"&body="+msg;
    e.preventDefault();
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
  const links = $("#myNavbar > div > a");
  links.each(function () {
    var curLink = $(this);
    var refElem = $(curLink.attr('href'));

    if ($(window).scrollTop() + $(window).height() == $(document).height() &&
        $(this).attr("id") === "id_contact"){
      links.removeClass("active");
      curLink.addClass("active");
    }

    var yPadding = parseInt(refElem.css("padding-top")) + parseInt(refElem.css("padding-bottom"));
    if (refElem.position().top -1 <= currentScrollPos &&
        refElem.position().top + refElem.height() + (yPadding - 2) > currentScrollPos &&
        links.hasClass("active")) {
      links.removeClass("active");
      links.blur();
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
