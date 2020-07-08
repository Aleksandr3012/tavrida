








//if ($(window).width() > 992 && $('.content__events-wrapper').length) {
//  const ps = new PerfectScrollbar('.content__events-wrapper');
//  const ps2 = new PerfectScrollbar('.content__items-wrapper');
//}









if ($(window).width() > 1199 && $('.feedback__text').length) {
  $('.feedback__text').each(function(index, element) {
    const ps = new PerfectScrollbar(element, {
      wheelSpeed: 0.1,
      wheelPropagation: false
    });
  })
}











$('.info__headliners').mCustomScrollbar({
  axis: "x",
  mousewheel: {
    enable: true
  }
});

hTitleHeight = function() {
  $(".highlights__article-title").css('min-height', '')
  maxHeight = 0;
  var heights = $(".highlights__article-title").map(function () {
    return $(this).height();
  }).get();

  maxHeight = Math.max.apply(null, heights);
  $(".highlights__article-title").css('min-height', maxHeight);
}

$(window).on('load resize', function () {
  hTitleHeight();
})

$('.input--phone').inputmask("+7 (999) 999-99-99");

$('.input--passport-series').inputmask("99 99");

$('.input--code').inputmask("999-999");


$('.item-slider').slick({
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true
      }
    },
  ]
})





$('.menu__btn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('menu__btn--active');
  $('.menu__content').toggleClass('menu__content--active');
});

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





if ($('.partners--new .partners__row-content').length) {

  $('.partners__row-content').not('.slick-initialized').slick({
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
  
  var item = $('.partners__item');
  var itemWidth = item.width();
  item.css('height', itemWidth);
}



$('.question__header').click(function(e) {
  e.preventDefault();
  $(this).closest('.question').toggleClass('question--active');
  $(this).closest('.question').find('.question__content').slideToggle('fast');
});




$('.select').select2({
  minimumResultsForSearch: -1,
  width: '100%',
  dropdownAutoWidth: true,
});

$('.js-registration').click(function (e) {
  e.preventDefault();
  $('#registration').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.js-login').click(function (e) {
  e.preventDefault();
  $('#login').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.js-partner-general').click(function (e) {
  e.preventDefault();
  $('#partner-general').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.js-partner-market').click(function (e) {
  e.preventDefault();
  $('#partner-market').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.js-partner-food').click(function (e) {
  e.preventDefault();
  $('#partner-food').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.js-partner-rooms').click(function (e) {
  e.preventDefault();
  $('#partner-rooms').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
  $('body').addClass('body--popup');
});

$('.signup__close').click(function (e) {
  e.preventDefault();
  $('.signup').fadeOut('fast');
  $('.wrapper').removeClass('wrapper--popup');
  $('body').removeClass('body--popup');
});

$(document).click(function (e) {
    if ($(e.target).closest('.signup').length === 0
        && $(e.target).closest('.dz-hidden-input').length === 0
        && $(e.target).closest('.container-item-remove').length === 0
        && $(e.target).closest('.language-item-remove').length === 0
        && $(e.target).closest('.js-registration').length === 0
        && $(e.target).closest('.js-login').length === 0
        && $(e.target).closest('.js-partner-general').length === 0
        && $(e.target).closest('.js-partner-market').length === 0
        && $(e.target).closest('.js-partner-food').length === 0
        && $(e.target).closest('.js-partner-rooms').length === 0
    ) {
        $('.signup').fadeOut('fast');
        $('.wrapper').removeClass('wrapper--popup');
        $('body').removeClass('body--popup');
    }
});

//if ($(window).width() > 992 && $('.signup').length) {
//  const ps3 = new PerfectScrollbar('.signup');
//}

if ($(window).width() > 992 && $('.signup').length) {
  $('.signup').each(function() {
    const ps3 = new PerfectScrollbar(this);
  })
}

$('.slider').slick({
  infinite: false,
  variableWidth: true
});


//var heights = $(".step__header").map(function () {
//  return $(this).height();
//}).get();
//
//maxHeight = Math.max.apply(null, heights);
//console.log(maxHeight);
//$('.step__header').css('height', maxHeight);

//$('.team__steps').each(function() {
//  var heights = $(this).find('.step__header').map(function () {
//    return $(this).height();
//  }).get();
//  maxHeight = Math.max.apply(null, heights);
//  console.log(maxHeight);
//  $(this).find('.step__header').css('height', maxHeight);
//});


$(window).on('load resize', function() {
  if ($(window).width() > 767) {
    $('.step__header').css('height', 'auto');
    $('.team__steps').each(function() {
      var heights = $(this).find('.step__header').map(function () {
        return $(this).height();
      }).get();
      maxHeight = Math.max.apply(null, heights);
      console.log(maxHeight);
      $(this).find('.step__header').css('height', maxHeight);
    });
  }
})




$('.timeline').mCustomScrollbar({
  axis: "x",
  mousewheel: {
    enable: true
  }
});




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

if ($(window).width() > 767 && $('.partners__row-content').length && !$('.partners').hasClass('partners--new')) {

  $('.partners__row-content').not('.slick-initialized').slick({
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
        settings: 'unslick'
      },
    ]
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1iaWcvYW50aS1iaWcuanMiLCJhbnRpLWZlYXR1cmUvYW50aS1mZWF0dXJlLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuanMiLCJhcnQvYXJ0LmpzIiwiY2FiaW5ldC9jYWJpbmV0LmpzIiwiY29udGVudC9jb250ZW50LmpzIiwiYXdhcmQvYXdhcmQuanMiLCJjb25jZXB0L2NvbmNlcHQuanMiLCJkb2N1bWVudC9kb2N1bWVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZmFxL2ZhcS5qcyIsImV2ZW50L2V2ZW50LmpzIiwiZmVhdHVyZS9mZWF0dXJlLmpzIiwiZmVlZGJhY2svZmVlZGJhY2suanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImZyb250L2Zyb250LmpzIiwiaGVhZGVyLWlubmVyL2hlYWRlci1pbm5lci5qcyIsImhlYWRsaW5lci9oZWFkbGluZXIuanMiLCJoZXJvL2hlcm8uanMiLCJpbmZvL2luZm8uanMiLCJoaWdobGlnaHRzL2hpZ2hsaWdodHMuanMiLCJpbnB1dC9pbnB1dC5qcyIsIml0ZW0vaXRlbS5qcyIsIml0ZW0tc2xpZGVyL2l0ZW0tc2xpZGVyLmpzIiwibGluay1iYWNrL2xpbmstYmFjay5qcyIsImxrLWV2ZW50L2xrLWV2ZW50LmpzIiwibG9nby9sb2dvLmpzIiwibWFwL21hcC5qcyIsIm1lbnUvbWVudS5qcyIsIm1vZGFsL21vZGFsLmpzIiwibmV3cy9uZXdzLmpzIiwicGFydC9wYXJ0LmpzIiwicGFydGljaXBhdGlvbi9wYXJ0aWNpcGF0aW9uLmpzIiwicGFydG5lci1zZWN0aW9uL3BhcnRuZXItc2VjdGlvbi5qcyIsInBhcnRuZXJzL3BhcnRuZXJzLmpzIiwicGFydG5lcnMtbGlzdC9wYXJ0bmVycy1saXN0LmpzIiwicGFydG5lcnNoaXAvcGFydG5lcnNoaXAuanMiLCJxdWVzdGlvbi9xdWVzdGlvbi5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJyZXNpZGVuY2UvcmVzaWRlbmNlLmpzIiwic2VjdGlvbi9zZWN0aW9uLmpzIiwic2VsZWN0L3NlbGVjdC5qcyIsInNpZ251cC9zaWdudXAuanMiLCJzbGlkZXIvc2xpZGVyLmpzIiwic29jaWFscy9zb2NpYWxzLmpzIiwic3RlcC9zdGVwLmpzIiwic3Rvcnkvc3RvcnkuanMiLCJzdW1tYXJ5L3N1bW1hcnkuanMiLCJ0ZWFtL3RlYW0uanMiLCJ0aW1lbGluZS90aW1lbGluZS5qcyIsIndvcmtzaG9wL3dvcmtzaG9wLmpzIiwid29ya3Nob3Atc3RhZ2Uvd29ya3Nob3Atc3RhZ2UuanMiLCJ3b3Jrc2hvcC10ZWFtL3dvcmtzaG9wLXRlYW0uanMiLCJ3cmFwcGVyL3dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FDREE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIi8vaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpLmxlbmd0aCkge1xyXG4vLyAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJyk7XHJcbi8vICBjb25zdCBwczIgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2l0ZW1zLXdyYXBwZXInKTtcclxuLy99XHJcbiIsIiIsIiIsIiIsIiIsIiIsIlxyXG4iLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMTk5ICYmICQoJy5mZWVkYmFja19fdGV4dCcpLmxlbmd0aCkge1xyXG4gICQoJy5mZWVkYmFja19fdGV4dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwge1xyXG4gICAgICB3aGVlbFNwZWVkOiAwLjEsXHJcbiAgICAgIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlXHJcbiAgICB9KTtcclxuICB9KVxyXG59XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiQoJy5pbmZvX19oZWFkbGluZXJzJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiaFRpdGxlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLmNzcygnbWluLWhlaWdodCcsICcnKVxyXG4gIG1heEhlaWdodCA9IDA7XHJcbiAgdmFyIGhlaWdodHMgPSAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gIH0pLmdldCgpO1xyXG5cclxuICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICBoVGl0bGVIZWlnaHQoKTtcclxufSlcclxuIiwiJCgnLmlucHV0LS1waG9uZScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tcGFzc3BvcnQtc2VyaWVzJykuaW5wdXRtYXNrKFwiOTkgOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLWNvZGUnKS5pbnB1dG1hc2soXCI5OTktOTk5XCIpO1xyXG4iLCIiLCIkKCcuaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KVxyXG4iLCIiLCIiLCIiLCIiLCIkKCcubWVudV9fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idG4tLWFjdGl2ZScpO1xyXG4gICQoJy5tZW51X19jb250ZW50JykudG9nZ2xlQ2xhc3MoJ21lbnVfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG59KTtcclxuIiwiJChcIltkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgYmVmb3JlU2hvdzogZnVuY3Rpb24gKGluc3RhbmNlLCBzbGlkZSkge1xyXG5cclxuICAgIGlmICgkKCcubW9kYWxfX3NsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAkKCcubW9kYWxfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiaWYgKCQoJy5wYXJ0bmVycy0tbmV3IC5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxuICBcclxuICB2YXIgaXRlbSA9ICQoJy5wYXJ0bmVyc19faXRlbScpO1xyXG4gIHZhciBpdGVtV2lkdGggPSBpdGVtLndpZHRoKCk7XHJcbiAgaXRlbS5jc3MoJ2hlaWdodCcsIGl0ZW1XaWR0aCk7XHJcbn1cclxuIiwiIiwiIiwiJCgnLnF1ZXN0aW9uX19oZWFkZXInKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykudG9nZ2xlQ2xhc3MoJ3F1ZXN0aW9uLS1hY3RpdmUnKTtcclxuICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLmZpbmQoJy5xdWVzdGlvbl9fY29udGVudCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIkKCcuc2VsZWN0Jykuc2VsZWN0Mih7XHJcbiAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgZHJvcGRvd25BdXRvV2lkdGg6IHRydWUsXHJcbn0pO1xyXG4iLCIkKCcuanMtcmVnaXN0cmF0aW9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3JlZ2lzdHJhdGlvbicpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1sb2dpbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNsb2dpbicpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLWdlbmVyYWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1nZW5lcmFsJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItbWFya2V0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItbWFya2V0JykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItZm9vZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLWZvb2QnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1yb29tcycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLXJvb21zJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLnNpZ251cF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNpZ251cCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kei1oaWRkZW4taW5wdXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29udGFpbmVyLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmxhbmd1YWdlLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXJlZ2lzdHJhdGlvbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLWdlbmVyYWwnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1tYXJrZXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1mb29kJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItcm9vbXMnKS5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICAgICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4vLyAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWdudXAnKTtcclxuLy99XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4gICQoJy5zaWdudXAnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcyk7XHJcbiAgfSlcclxufVxyXG4iLCIkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG4iLCIiLCIvL3ZhciBoZWlnaHRzID0gJChcIi5zdGVwX19oZWFkZXJcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4vL30pLmdldCgpO1xyXG4vL1xyXG4vL21heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vL2NvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbi8vJCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuXHJcbi8vJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuLy8gIHZhciBoZWlnaHRzID0gJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbi8vICB9KS5nZXQoKTtcclxuLy8gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vLyAgY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuLy8gICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuLy99KTtcclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAkKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGhlaWdodHMgPSAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gICAgICB9KS5nZXQoKTtcclxuICAgICAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbiAgICAgICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuIiwiIiwiIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgZml4ZWRFbGVtZW50czogJy5zaWdudXAnLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgICAgaWYoZGVzdGluYXRpb24uaW5kZXggPT0gJzAnKSB7XHJcbiAgICAgICAgJCgnLmZyb250X19iZycpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3ICYmICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGggJiYgISQoJy5wYXJ0bmVycycpLmhhc0NsYXNzKCdwYXJ0bmVycy0tbmV3JykpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuIl19
