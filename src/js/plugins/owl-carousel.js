import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

/*
 * Testimonials section
 */

$(document).ready(function () {
  $('.js-testimonials .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 1,
      },

      1024: {
        items: 1,
      },

      1366: {
        items: 1,
      },
    },
  });
});

/*
 * Blog section
 */

$(document).ready(function () {
  $('.js-blog .owl-carousel').owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
  });
});
