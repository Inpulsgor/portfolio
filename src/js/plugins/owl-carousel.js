import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 3,
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
        items: 3,
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
