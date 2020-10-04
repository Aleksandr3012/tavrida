
















$('[data-slide] .concept__link').click(function (e) {
  var slideNumber = $(this).closest('[data-slide]').data('slide');
  
  $('.modal__slider').slick('slickGoTo', slideNumber - 1);

//  $(document).on('afterShow.fb', function (e, instance, slide) {
//    console.log(slideNumber);
//    $('.modal__slider').slick('slickGoTo', slideNumber - 1);
//  });
});

if ($('.castings-slider__content').length) {

  $('.castings-slider__content').slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
}



//if ($(window).width() > 992 && $('.content__events-wrapper').length) {
//  const ps = new PerfectScrollbar('.content__events-wrapper');
//  const ps2 = new PerfectScrollbar('.content__items-wrapper');
//}




if ($(window).width() > 1199) {

  const slider4 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-video'),
    content: document.querySelector('.js-drag-video-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });

  const slider5 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-artist1'),
    content: document.querySelector('.js-drag-artist1-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });

  const slider6 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-artist2'),
    content: document.querySelector('.js-drag-artist2-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });
}





if ($(window).width() > 1199 && $('.feedback__text').length) {
  $('.feedback__text').each(function(index, element) {
    const ps = new PerfectScrollbar(element, {
      wheelSpeed: 0.1,
      wheelPropagation: false
    });
  })
}



















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

$('.info__headliners').mCustomScrollbar({
  axis: "x",
  mousewheel: {
    enable: true
  }
});


$('.input--phone').inputmask("+7 (999) 999-99-99");

$('.input--passport-series').inputmask("99 99");

$('.input--code').inputmask("999-999");

//$('.input--date').datepicker();
//
//$('.input--time').timepicker({
//    interval: 60,
//    minTime: '10',
//    maxTime: '6:00pm',
//    defaultTime: '11',
//    startTime: '10:00',
//    dynamic: false,
//    dropdown: true,
//    scrollbar: true
//});

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

//$("[data-fancybox]").fancybox({
//  afterShow: function (instance, slide) {
//  }
//});



if ($('.modal__slider').length) {
  $('.modal__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
}






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









$('.summary__slider').slick({
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    },
  ]
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW5ub3VuY2VtZW50L2Fubm91bmNlbWVudC5qcyIsImFudGkvYW50aS5qcyIsImFudGktYmlnL2FudGktYmlnLmpzIiwiYW50aS1mZWF0dXJlL2FudGktZmVhdHVyZS5qcyIsImFwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuanMiLCJhbnRpLWxpc3QvYW50aS1saXN0LmpzIiwiYXJ0L2FydC5qcyIsImFydGlzdC9hcnRpc3QuanMiLCJhd2FyZC9hd2FyZC5qcyIsImNhYmluZXQvY2FiaW5ldC5qcyIsImJhbm5lci9iYW5uZXIuanMiLCJjYXJkL2NhcmQuanMiLCJjYXN0aW5nL2Nhc3RpbmcuanMiLCJjYXN0aW5nLXR5cGUvY2FzdGluZy10eXBlLmpzIiwiY2FzdGluZy1zdHJlYW0vY2FzdGluZy1zdHJlYW0uanMiLCJjb25jZXB0L2NvbmNlcHQuanMiLCJjYXN0aW5ncy1zbGlkZXIvY2FzdGluZ3Mtc2xpZGVyLmpzIiwiY29udGVtcG9yYXJ5L2NvbnRlbXBvcmFyeS5qcyIsImNvbmRpdGlvbnMvY29uZGl0aW9ucy5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZGlyZWN0aW9ucy9kaXJlY3Rpb25zLmpzIiwiZG9jdW1lbnQvZG9jdW1lbnQuanMiLCJkcmFnL2RyYWcuanMiLCJmYXEvZmFxLmpzIiwiZXZlbnQvZXZlbnQuanMiLCJleGhpYml0aW9uL2V4aGliaXRpb24uanMiLCJmYXNoaW9uL2Zhc2hpb24uanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZlYXR1cmUvZmVhdHVyZS5qcyIsImZlc3RpdmFsLWFwcGxpY2F0aW9uL2Zlc3RpdmFsLWFwcGxpY2F0aW9uLmpzIiwiZmVzdGl2YWwtZG9jL2Zlc3RpdmFsLWRvYy5qcyIsImZlc3RpdmFsLWdyYW50L2Zlc3RpdmFsLWdyYW50LmpzIiwiZmVzdGl2YWwtaXRlbS9mZXN0aXZhbC1pdGVtLmpzIiwiZmVzdGl2YWwtbmV3L2Zlc3RpdmFsLW5ldy5qcyIsImZlc3RpdmFsLXBhcmFkZS9mZXN0aXZhbC1wYXJhZGUuanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJmdW4vZnVuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGVyby9oZXJvLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaXRlbS9pdGVtLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsImxpbmstYmFjay9saW5rLWJhY2suanMiLCJsay1ldmVudC9say1ldmVudC5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJtb2RhbC9tb2RhbC5qcyIsIm5ld3MvbmV3cy5qcyIsInBhcmFkZS9wYXJhZGUuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVyLXNlY3Rpb24vcGFydG5lci1zZWN0aW9uLmpzIiwicGFydG5lcnMvcGFydG5lcnMuanMiLCJwYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJwYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5qcyIsInBlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLmpzIiwicHJvY2Vzc2lvbi9wcm9jZXNzaW9uLmpzIiwicHJpemUvcHJpemUuanMiLCJxdWFydGVyL3F1YXJ0ZXIuanMiLCJyZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwicXVlc3Rpb24vcXVlc3Rpb24uanMiLCJyZXNpZGVuY2UvcmVzaWRlbmNlLmpzIiwic0NhbGVuZGFyL3NDYWxlbmRhci5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNGcm9tL3NGcm9tLmpzIiwic2VsZWN0L3NlbGVjdC5qcyIsInNpZ251cC9zaWdudXAuanMiLCJzbGlkZXIvc2xpZGVyLmpzIiwic29jaWFscy9zb2NpYWxzLmpzIiwic1BhcnRpY2lwYXRpb24vc1BhcnRpY2lwYXRpb24uanMiLCJzdGVwL3N0ZXAuanMiLCJzdGVwcy1saXN0L3N0ZXBzLWxpc3QuanMiLCJzdG9yeS9zdG9yeS5qcyIsInN0cmVhbS1jdXJyZW50L3N0cmVhbS1jdXJyZW50LmpzIiwic3RyZWFtcy9zdHJlYW1zLmpzIiwic3RyZWFtcy1mZWF0dXJlL3N0cmVhbXMtZmVhdHVyZS5qcyIsInN0cmVhbXMtZm9ybWF0L3N0cmVhbXMtZm9ybWF0LmpzIiwic3RyZWFtcy1wcml6ZS9zdHJlYW1zLXByaXplLmpzIiwic3RydWN0dXJlL3N0cnVjdHVyZS5qcyIsInN1bW1hcnkvc3VtbWFyeS5qcyIsInRpbWVsaW5lL3RpbWVsaW5lLmpzIiwidGVhbS90ZWFtLmpzIiwidHJhbnNmZXIvdHJhbnNmZXIuanMiLCJ3b3Jrc2hvcC93b3Jrc2hvcC5qcyIsIndvcmtzaG9wLXN0YWdlL3dvcmtzaG9wLXN0YWdlLmpzIiwid29ya3Nob3AtdGVhbS93b3Jrc2hvcC10ZWFtLmpzIiwid3JhcHBlci93cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIkKCdbZGF0YS1zbGlkZV0gLmNvbmNlcHRfX2xpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBzbGlkZU51bWJlciA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtc2xpZGVdJykuZGF0YSgnc2xpZGUnKTtcclxuICBcclxuICAkKCcubW9kYWxfX3NsaWRlcicpLnNsaWNrKCdzbGlja0dvVG8nLCBzbGlkZU51bWJlciAtIDEpO1xyXG5cclxuLy8gICQoZG9jdW1lbnQpLm9uKCdhZnRlclNob3cuZmInLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIHNsaWRlKSB7XHJcbi8vICAgIGNvbnNvbGUubG9nKHNsaWRlTnVtYmVyKTtcclxuLy8gICAgJCgnLm1vZGFsX19zbGlkZXInKS5zbGljaygnc2xpY2tHb1RvJywgc2xpZGVOdW1iZXIgLSAxKTtcclxuLy8gIH0pO1xyXG59KTtcclxuIiwiaWYgKCQoJy5jYXN0aW5ncy1zbGlkZXJfX2NvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLmNhc3RpbmdzLXNsaWRlcl9fY29udGVudCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuIiwiIiwiIiwiLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJykubGVuZ3RoKSB7XHJcbi8vICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKTtcclxuLy8gIGNvbnN0IHBzMiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9faXRlbXMtd3JhcHBlcicpO1xyXG4vL31cclxuIiwiIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSkge1xyXG5cclxuICBjb25zdCBzbGlkZXI0ID0gbmV3IFNjcm9sbEJvb3N0ZXIoe1xyXG4gICAgdmlld3BvcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLXZpZGVvJyksXHJcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy12aWRlby1jb250ZW50JyksXHJcbiAgICBzY3JvbGxNb2RlOiAndHJhbnNmb3JtJyxcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzbGlkZXI1ID0gbmV3IFNjcm9sbEJvb3N0ZXIoe1xyXG4gICAgdmlld3BvcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLWFydGlzdDEnKSxcclxuICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLWFydGlzdDEtY29udGVudCcpLFxyXG4gICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyNiA9IG5ldyBTY3JvbGxCb29zdGVyKHtcclxuICAgIHZpZXdwb3J0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QyJyksXHJcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QyLWNvbnRlbnQnKSxcclxuICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxyXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgfSk7XHJcbn0iLCIiLCJcclxuIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSAmJiAkKCcuZmVlZGJhY2tfX3RleHQnKS5sZW5ndGgpIHtcclxuICAkKCcuZmVlZGJhY2tfX3RleHQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHtcclxuICAgICAgd2hlZWxTcGVlZDogMC4xLFxyXG4gICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfSlcclxufVxyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJoVGl0bGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgJycpXHJcbiAgbWF4SGVpZ2h0ID0gMDtcclxuICB2YXIgaGVpZ2h0cyA9ICQoXCIuaGlnaGxpZ2h0c19fYXJ0aWNsZS10aXRsZVwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgfSkuZ2V0KCk7XHJcblxyXG4gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4gICQoXCIuaGlnaGxpZ2h0c19fYXJ0aWNsZS10aXRsZVwiKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gIGhUaXRsZUhlaWdodCgpO1xyXG59KVxyXG4iLCIkKCcuaW5mb19faGVhZGxpbmVycycpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gIGF4aXM6IFwieFwiLFxyXG4gIG1vdXNld2hlZWw6IHtcclxuICAgIGVuYWJsZTogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbiIsIiIsIiQoJy5pbnB1dC0tcGhvbmUnKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLXBhc3Nwb3J0LXNlcmllcycpLmlucHV0bWFzayhcIjk5IDk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1jb2RlJykuaW5wdXRtYXNrKFwiOTk5LTk5OVwiKTtcclxuXHJcbi8vJCgnLmlucHV0LS1kYXRlJykuZGF0ZXBpY2tlcigpO1xyXG4vL1xyXG4vLyQoJy5pbnB1dC0tdGltZScpLnRpbWVwaWNrZXIoe1xyXG4vLyAgICBpbnRlcnZhbDogNjAsXHJcbi8vICAgIG1pblRpbWU6ICcxMCcsXHJcbi8vICAgIG1heFRpbWU6ICc2OjAwcG0nLFxyXG4vLyAgICBkZWZhdWx0VGltZTogJzExJyxcclxuLy8gICAgc3RhcnRUaW1lOiAnMTA6MDAnLFxyXG4vLyAgICBkeW5hbWljOiBmYWxzZSxcclxuLy8gICAgZHJvcGRvd246IHRydWUsXHJcbi8vICAgIHNjcm9sbGJhcjogdHJ1ZVxyXG4vL30pO1xyXG4iLCIkKCcuaXRlbS1zbGlkZXInKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KVxyXG4iLCIiLCIiLCIiLCIiLCIkKCcubWVudV9fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idG4tLWFjdGl2ZScpO1xyXG4gICQoJy5tZW51X19jb250ZW50JykudG9nZ2xlQ2xhc3MoJ21lbnVfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG59KTtcclxuIiwiLy8kKFwiW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcclxuLy8gIGFmdGVyU2hvdzogZnVuY3Rpb24gKGluc3RhbmNlLCBzbGlkZSkge1xyXG4vLyAgfVxyXG4vL30pO1xyXG5cclxuXHJcblxyXG5pZiAoJCgnLm1vZGFsX19zbGlkZXInKS5sZW5ndGgpIHtcclxuICAkKCcubW9kYWxfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfSk7XHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiaWYgKCQoJy5wYXJ0bmVycy0tbmV3IC5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxuICBcclxuICB2YXIgaXRlbSA9ICQoJy5wYXJ0bmVyc19faXRlbScpO1xyXG4gIHZhciBpdGVtV2lkdGggPSBpdGVtLndpZHRoKCk7XHJcbiAgaXRlbS5jc3MoJ2hlaWdodCcsIGl0ZW1XaWR0aCk7XHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnF1ZXN0aW9uX19oZWFkZXInKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykudG9nZ2xlQ2xhc3MoJ3F1ZXN0aW9uLS1hY3RpdmUnKTtcclxuICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLmZpbmQoJy5xdWVzdGlvbl9fY29udGVudCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIiLCIkKCcuc2VsZWN0Jykuc2VsZWN0Mih7XHJcbiAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgZHJvcGRvd25BdXRvV2lkdGg6IHRydWUsXHJcbn0pO1xyXG4iLCIkKCcuanMtcmVnaXN0cmF0aW9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3JlZ2lzdHJhdGlvbicpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1sb2dpbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNsb2dpbicpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLWdlbmVyYWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1nZW5lcmFsJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItbWFya2V0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItbWFya2V0JykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItZm9vZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLWZvb2QnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1yb29tcycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLXJvb21zJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLnNpZ251cF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNpZ251cCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kei1oaWRkZW4taW5wdXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29udGFpbmVyLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmxhbmd1YWdlLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXJlZ2lzdHJhdGlvbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLWdlbmVyYWwnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1tYXJrZXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1mb29kJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItcm9vbXMnKS5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICAgICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4vLyAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWdudXAnKTtcclxuLy99XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4gICQoJy5zaWdudXAnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcyk7XHJcbiAgfSlcclxufVxyXG4iLCIkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG4iLCIiLCIiLCIvL3ZhciBoZWlnaHRzID0gJChcIi5zdGVwX19oZWFkZXJcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4vL30pLmdldCgpO1xyXG4vL1xyXG4vL21heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vL2NvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbi8vJCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuXHJcbi8vJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuLy8gIHZhciBoZWlnaHRzID0gJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbi8vICB9KS5nZXQoKTtcclxuLy8gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vLyAgY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuLy8gICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuLy99KTtcclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAkKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGhlaWdodHMgPSAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gICAgICB9KS5nZXQoKTtcclxuICAgICAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbiAgICAgICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnN1bW1hcnlfX3NsaWRlcicpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KVxyXG4iLCIkKCcudGltZWxpbmUnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIiLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHtcclxuICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICBmaXhlZEVsZW1lbnRzOiAnLnNpZ251cCcsXHJcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICQoJyNmcC1uYXYnKS5hdHRyKCdkYXRhLXNsaWRlJywgZGVzdGluYXRpb24uaW5kZXgpO1xyXG4gICAgICBpZihkZXN0aW5hdGlvbi5pbmRleCA9PSAnMCcpIHtcclxuICAgICAgICAkKCcuZnJvbnRfX2JnJykuZ2V0KDApLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCAmJiAhJCgnLnBhcnRuZXJzJykuaGFzQ2xhc3MoJ3BhcnRuZXJzLS1uZXcnKSkge1xyXG5cclxuICAkKCcucGFydG5lcnNfX3Jvdy1jb250ZW50Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiAndW5zbGljaydcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufVxyXG4iXX0=
