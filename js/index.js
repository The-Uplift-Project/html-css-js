/*====================================================
                       Home
====================================================*/
 $(function () {

    // animate on scroll
    // use same practice as shown
    // this is just to make code more simple and easy to read
});
 // Navbar Scrolling
 $(function (){
    $(document).scroll(function (){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      });
  });
// Quote carousel (uses the Owl Carousel library)
$(".Quote-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

/*====================================================
                     Home  End
====================================================*/
