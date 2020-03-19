if ($(window).width() > 992) {
  new fullpage('#fullpage', {
    navigation: true,
//    normalScrollElements: '.highlights',
    fixedElements: '.signup',
    onLeave: function (origin, destination, direction) {
      $('#fp-nav').attr('data-slide', destination.index);
    }
  });
}
