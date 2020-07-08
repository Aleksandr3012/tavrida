$("[data-fancybox]").fancybox({
  beforeShow: function (instance, slide) {

    if ($('.modal__slider').length) {
      $('.modal__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
});
