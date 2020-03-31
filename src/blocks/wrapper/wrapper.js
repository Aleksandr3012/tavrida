if ($(window).width() > 992) {
  new fullpage('#fullpage', {
    navigation: true,
    fixedElements: '.signup',
    onLeave: function (origin, destination, direction) {
      $('#fp-nav').attr('data-slide', destination.index);
      if(destination.index == '0') {
        $('.front__bg').get(0).play();
      }
    }
  });
}

if ($(window).width() > 992 && $('.section .partners__row-content').length) {
  $('.section .partners__row-content').mCustomScrollbar({
    axis: "x",
    mousewheel: {
      enable: true
    }
  });
}
