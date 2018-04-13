const MY_MAIL = "martin.wrod@googlemail.com"
var scrollHandle = true;

$(document).ready(function() {
  // lazy load images
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

  // animate images if scrolled to them
  checkAnim();
  styleNav();
  onScrollHandle();
});

// animate images on scroll over them
$(window).scroll(function() {
  checkAnim();
  if(scrollHandle) onScrollHandle();
});

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

function styleNav(){
  // change active state at nat on click
  $(".nav-item").on("click", function(){
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  });
}

// image preview box
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true,
    leftArrow: '<span style="color: rgba(0, 0, 0, 0.65)">&#10094;</span>',
    rightArrow: '<span style="color: rgba(0, 0, 0, 0.65)">&#10095;</span>',
  });
});

// contact form submit
$('#contact-form').submit(function(e) {
  let name = $('#inputName').val();
  let subject = $('#inputSubject').val();
  let msg = $('#inputArea').val();
  console.log(name, MY_MAIL, msg);
  document.location = "mailto:"+MY_MAIL+"?subject="+subject+"&body="+msg;
  e.preventDefault();
});

// Add smooth scrolling to all links
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    scrollHandle = false;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 90
    }, 800, function() {
      scrollHandle = true;
    });
  }
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
