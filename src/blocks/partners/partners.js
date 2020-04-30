if ($('.partners--new .partners__row-content').length) {

  $('.partners__row-content').slick({
    slidesToShow: 6,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
  
  $('.partners__row-content').on('init reinit', function(slick) {
    var item = $('.partners__item');
    var itemWidth = item.width();
    item.css('height', itemWidth);
  });
}
