// Document . ready
$(document).ready(function() {

  $(".menu-mobile").click(function(){
    $(".sub-menu").toggle();
  });

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


$(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });

  // Document . ready

  $(document).ready(function() {
    //make sure the page is ready befor running the scripts
    // This is the hamburger menu
    $(".hamburger-button").click(function(){
  
      $(this).toggleClass('active');
      $(".mobile-menu").fadeToggle();
  
    });
    $(".mobile-menu a").click(function(){
  
      $(".hamburger-button").toggleClass('active');
      $(".mobile-menu").fadeToggle();
  
    });
  });
    // end hamburger menu

    /*
$(document).ready(function() {
  $('.hamburger-button').click(function(){
      $('.mobile-menu').fadeToggle(100);
      $(this).toggleClass('active');
    });
  
    $('.mobile-menu a').click(function(){
      $('.mobile-menu').fadeOut(100);
      $(".hamburger-button").removeClass('active');
    });

  });

  
  
  /*
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
      });
    
      $('.mobile-menu a').click(function(){
        $('.mobile-menu').fadeOut(100);
        $(".hamburger-button").removeClass('active');
      });

      */


    //Animate scroll - activate

    AOS.init({
        duration: 1500   // values from 0 to 3000
    });

});

// ACCORDIONS

$.fn.accordion = function() {
  const trigger = $(this).find('.accordion-trigger');
  const collapse = $(this).find('.accordion-collapse');

 // $(trigger).first().addClass('accordion-open');
 // $(collapse).first().show();

  $(trigger).each(function(){
    $(this).on('click', function(){
      $(this).siblings('.accordion-collapse').slideToggle();
      $(this).toggleClass('accordion-open');
      $(this).parent().siblings('.accordion-item').find('.accordion-trigger').removeClass('accordion-open');
      $(this).parent().siblings('.accordion-item').find('.accordion-collapse').slideUp();
    });
  });
}

$('.accordion').accordion();
$('.accordion2').accordion();


$('.slider-container').slick({
  // Setting name: setting-value
});


$('.testimon-slider-container').slick({
  autoplay: true,        // Do we want it to autoplay? true or false
  autoplaySpeed: 3000,   // How long between each slide when autoplaying
  speed: 500,            // How fast is the transition 
  arrows: false,          // Do you want to show arrows to trigger each slide
  accessibility: true,   // Enables tabbing and arrow key navigation 
  dots: true,            // Enables the dots below to show how many slides
  fade: false,           // Changes the animate from slide to fade if true
  infinite: true,       // When true, means that it will scroll in a circle
  pauseOnHover: true,   // When true means the autoplay pauses when hovering
  pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
});

$(".testimonial-slider-container").slick({
    autoplay: true,
    autoplaySpeed: 2e3,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: false,
    infinite: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});

// light gallery

lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});


// Menu auto-hide

let previousOffset = 0;

$(window).scroll(function() {
    const currentOffset = window.scrollY;

    if ($(".burger-button").hasClass("active"))
        return;

    if (currentOffset <= 0)
        $(".nav-header").toggleClass("nav-header-hidden", false);
    else if (currentOffset > previousOffset)
        $(".nav-header").toggleClass("nav-header-hidden", true);
    else if (currentOffset < previousOffset)
        $(".nav-header").toggleClass("nav-header-hidden", false);

    previousOffset = currentOffset;
});

//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// Background image lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// ?????????????? ??????????????????
/*
$(document).ready(function(){
// ???????????????? ?????????????? ?????????????????? ???? ???????? ????????????
$("a").on('click', function(event) {

// ?????????????? ?? ???????? ?????? .hash ?????????? ???????????????? ?????????? ???????????????????????????????? ?????????????????? ???? ??????????????????
if (this.hash !== "") {
// ?????????????????? ?????????????????? ???????????? ?????????? ???? ??????????????????
event.preventDefault();

// ?????????????? ??????
var hash = this.hash;

// ?????????????????????????? ???????????? animate() jQuery ?????? ???????????????????? ?????????????? ?????????????????? ????????????????
// ???????????????????????????? ?????????? (800) ?????????????????? ???????????????????? ??????????????????????, ?????????????????????? ?????? ?????????????????? ???? ?????????????????? ??????????????
$('html, body').animate({
  scrollTop: $(hash).offset().top
}, 1300, function(){

  // ???????????????? ?????? (#) ?????? URL-???????????? ?????????? ???????????????????? ?????????????????? (?????????????????? ???????????? ???? ??????????????????)
  window.location.hash = hash;
});
} // ??????????, ????????
});
});

*/