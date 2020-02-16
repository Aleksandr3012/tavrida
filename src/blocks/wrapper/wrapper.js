if ($(window).width() > 992) {
  new fullpage('#fullpage', {
    navigation: true,
    normalScrollElements: '.content__festival .content__forum',
    onLeave: function (origin, destination, direction) {
      $('#fp-nav').attr('data-slide', destination.index);
    }
  });
}
