
















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

$('[data-slide] .concept__link').click(function (e) {
  var slideNumber = $(this).closest('[data-slide]').data('slide');
  
  $('.modal__slider').slick('slickGoTo', slideNumber - 1);

//  $(document).on('afterShow.fb', function (e, instance, slide) {
//    console.log(slideNumber);
//    $('.modal__slider').slick('slickGoTo', slideNumber - 1);
//  });
});



//if ($(window).width() > 992 && $('.content__events-wrapper').length) {
//  const ps = new PerfectScrollbar('.content__events-wrapper');
//  const ps2 = new PerfectScrollbar('.content__items-wrapper');
//}




if ($(window).width() > 1199) {

  let dragVideo = document.querySelector('.js-drag-video');
  if (dragVideo) {
    const slider4 = new ScrollBooster({
      viewport: dragVideo,
      content: document.querySelector('.js-drag-video-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }

  let dragArtist = document.querySelector('.js-drag-artist1');
  if (dragArtist) {
  
    const slider5 = new ScrollBooster({
      viewport: dragArtist,
      content: document.querySelector('.js-drag-artist1-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }

  let dragArtist2 = document.querySelector('.js-drag-artist2');
  if (dragArtist2) {
    const slider6 = new ScrollBooster({
      viewport: dragArtist2,
      content: document.querySelector('.js-drag-artist2-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }
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



let dragAmb = document.querySelector('.js-drag-amb');
if (dragAmb) {

  const slider5 = new ScrollBooster({
    viewport: dragAmb,
    content: document.querySelector('.js-drag-amb-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });
}




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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW5ub3VuY2VtZW50L2Fubm91bmNlbWVudC5qcyIsImFudGkvYW50aS5qcyIsImFudGktYmlnL2FudGktYmlnLmpzIiwiYW50aS1mZWF0dXJlL2FudGktZmVhdHVyZS5qcyIsImFudGktbGlzdC9hbnRpLWxpc3QuanMiLCJhcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmpzIiwiYXJ0L2FydC5qcyIsImFydGlzdC9hcnRpc3QuanMiLCJhd2FyZC9hd2FyZC5qcyIsImJhbm5lci9iYW5uZXIuanMiLCJjYWJpbmV0L2NhYmluZXQuanMiLCJjYXJkL2NhcmQuanMiLCJjYXN0aW5nL2Nhc3RpbmcuanMiLCJjYXN0aW5nLXN0cmVhbS9jYXN0aW5nLXN0cmVhbS5qcyIsImNhc3RpbmctdHlwZS9jYXN0aW5nLXR5cGUuanMiLCJjYXN0aW5ncy1zbGlkZXIvY2FzdGluZ3Mtc2xpZGVyLmpzIiwiY29uY2VwdC9jb25jZXB0LmpzIiwiY29uZGl0aW9ucy9jb25kaXRpb25zLmpzIiwiY29udGVtcG9yYXJ5L2NvbnRlbXBvcmFyeS5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZGlyZWN0aW9ucy9kaXJlY3Rpb25zLmpzIiwiZG9jdW1lbnQvZG9jdW1lbnQuanMiLCJkcmFnL2RyYWcuanMiLCJldmVudC9ldmVudC5qcyIsImV4aGliaXRpb24vZXhoaWJpdGlvbi5qcyIsImZhcS9mYXEuanMiLCJmYXNoaW9uL2Zhc2hpb24uanMiLCJmZWF0dXJlL2ZlYXR1cmUuanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZlc3RpdmFsLWFwcGxpY2F0aW9uL2Zlc3RpdmFsLWFwcGxpY2F0aW9uLmpzIiwiZmVzdGl2YWwtZG9jL2Zlc3RpdmFsLWRvYy5qcyIsImZlc3RpdmFsLWdyYW50L2Zlc3RpdmFsLWdyYW50LmpzIiwiZmVzdGl2YWwtaXRlbS9mZXN0aXZhbC1pdGVtLmpzIiwiZmVzdGl2YWwtbmV3L2Zlc3RpdmFsLW5ldy5qcyIsImZlc3RpdmFsLXBhcmFkZS9mZXN0aXZhbC1wYXJhZGUuanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJmdW4vZnVuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGVyby9oZXJvLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtL2l0ZW0uanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsImxpbmstYmFjay9saW5rLWJhY2suanMiLCJsay1ldmVudC9say1ldmVudC5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJtb2RhbC9tb2RhbC5qcyIsIm5ld3MvbmV3cy5qcyIsInBhcmFkZS9wYXJhZGUuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVyLXNlY3Rpb24vcGFydG5lci1zZWN0aW9uLmpzIiwicGFydG5lcnMvcGFydG5lcnMuanMiLCJwYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJwYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5qcyIsInBlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLmpzIiwicHJpemUvcHJpemUuanMiLCJwcm9jZXNzaW9uL3Byb2Nlc3Npb24uanMiLCJxdWFydGVyL3F1YXJ0ZXIuanMiLCJxdWVzdGlvbi9xdWVzdGlvbi5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJyZXNpZGVuY2UvcmVzaWRlbmNlLmpzIiwic0FtYmFzc2Fkb3JzL3NBbWJhc3NhZG9ycy5qcyIsInNDYWxlbmRhci9zQ2FsZW5kYXIuanMiLCJzQ29uZmVyZW5jZS9zQ29uZmVyZW5jZS5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzRmVhdHVyZXMvc0ZlYXR1cmVzLmpzIiwic0Zyb20vc0Zyb20uanMiLCJzaWdudXAvc2lnbnVwLmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInNQYXJ0L3NQYXJ0LmpzIiwic1BhcnRpY2lwYXRpb24vc1BhcnRpY2lwYXRpb24uanMiLCJzU3RlcHMvc1N0ZXBzLmpzIiwic3RlcC9zdGVwLmpzIiwic3RlcHMtbGlzdC9zdGVwcy1saXN0LmpzIiwic3Rvcnkvc3RvcnkuanMiLCJzdHJlYW0tY3VycmVudC9zdHJlYW0tY3VycmVudC5qcyIsInN0cmVhbXMvc3RyZWFtcy5qcyIsInN0cmVhbXMtZmVhdHVyZS9zdHJlYW1zLWZlYXR1cmUuanMiLCJzdHJlYW1zLWZvcm1hdC9zdHJlYW1zLWZvcm1hdC5qcyIsInN0cmVhbXMtcHJpemUvc3RyZWFtcy1wcml6ZS5qcyIsInN0cnVjdHVyZS9zdHJ1Y3R1cmUuanMiLCJzdW1tYXJ5L3N1bW1hcnkuanMiLCJ0ZWFtL3RlYW0uanMiLCJ0aW1lbGluZS90aW1lbGluZS5qcyIsInRyYW5zZmVyL3RyYW5zZmVyLmpzIiwid29ya3Nob3Avd29ya3Nob3AuanMiLCJ3b3Jrc2hvcC1zdGFnZS93b3Jrc2hvcC1zdGFnZS5qcyIsIndvcmtzaG9wLXRlYW0vd29ya3Nob3AtdGVhbS5qcyIsIndyYXBwZXIvd3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsImlmICgkKCcuY2FzdGluZ3Mtc2xpZGVyX19jb250ZW50JykubGVuZ3RoKSB7XG5cbiAgJCgnLmNhc3RpbmdzLXNsaWRlcl9fY29udGVudCcpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn1cbiIsIiQoJ1tkYXRhLXNsaWRlXSAuY29uY2VwdF9fbGluaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIHZhciBzbGlkZU51bWJlciA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtc2xpZGVdJykuZGF0YSgnc2xpZGUnKTtcbiAgXG4gICQoJy5tb2RhbF9fc2xpZGVyJykuc2xpY2soJ3NsaWNrR29UbycsIHNsaWRlTnVtYmVyIC0gMSk7XG5cbi8vICAkKGRvY3VtZW50KS5vbignYWZ0ZXJTaG93LmZiJywgZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBzbGlkZSkge1xuLy8gICAgY29uc29sZS5sb2coc2xpZGVOdW1iZXIpO1xuLy8gICAgJCgnLm1vZGFsX19zbGlkZXInKS5zbGljaygnc2xpY2tHb1RvJywgc2xpZGVOdW1iZXIgLSAxKTtcbi8vICB9KTtcbn0pO1xuIiwiIiwiIiwiLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJykubGVuZ3RoKSB7XG4vLyAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJyk7XG4vLyAgY29uc3QgcHMyID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19pdGVtcy13cmFwcGVyJyk7XG4vL31cbiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDExOTkpIHtcblxuICBsZXQgZHJhZ1ZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyYWctdmlkZW8nKTtcbiAgaWYgKGRyYWdWaWRlbykge1xuICAgIGNvbnN0IHNsaWRlcjQgPSBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgICB2aWV3cG9ydDogZHJhZ1ZpZGVvLFxuICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyYWctdmlkZW8tY29udGVudCcpLFxuICAgICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBkcmFnQXJ0aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyYWctYXJ0aXN0MScpO1xuICBpZiAoZHJhZ0FydGlzdCkge1xuICBcbiAgICBjb25zdCBzbGlkZXI1ID0gbmV3IFNjcm9sbEJvb3N0ZXIoe1xuICAgICAgdmlld3BvcnQ6IGRyYWdBcnRpc3QsXG4gICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QxLWNvbnRlbnQnKSxcbiAgICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZHJhZ0FydGlzdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QyJyk7XG4gIGlmIChkcmFnQXJ0aXN0Mikge1xuICAgIGNvbnN0IHNsaWRlcjYgPSBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgICB2aWV3cG9ydDogZHJhZ0FydGlzdDIsXG4gICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QyLWNvbnRlbnQnKSxcbiAgICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSk7XG4gIH1cbn1cbiIsIlxuIiwiIiwiIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSAmJiAkKCcuZmVlZGJhY2tfX3RleHQnKS5sZW5ndGgpIHtcbiAgJCgnLmZlZWRiYWNrX190ZXh0JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwge1xuICAgICAgd2hlZWxTcGVlZDogMC4xLFxuICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgfSlcbn1cbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsImhUaXRsZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgJycpXG4gIG1heEhlaWdodCA9IDA7XG4gIHZhciBoZWlnaHRzID0gJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XG4gIH0pLmdldCgpO1xuXG4gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgbWF4SGVpZ2h0KTtcbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgaFRpdGxlSGVpZ2h0KCk7XG59KVxuIiwiJCgnLmluZm9fX2hlYWRsaW5lcnMnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgYXhpczogXCJ4XCIsXG4gIG1vdXNld2hlZWw6IHtcbiAgICBlbmFibGU6IHRydWVcbiAgfVxufSk7XG4iLCIkKCcuaW5wdXQtLXBob25lJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuXG4kKCcuaW5wdXQtLXBhc3Nwb3J0LXNlcmllcycpLmlucHV0bWFzayhcIjk5IDk5XCIpO1xuXG4kKCcuaW5wdXQtLWNvZGUnKS5pbnB1dG1hc2soXCI5OTktOTk5XCIpO1xuXG4vLyQoJy5pbnB1dC0tZGF0ZScpLmRhdGVwaWNrZXIoKTtcbi8vXG4vLyQoJy5pbnB1dC0tdGltZScpLnRpbWVwaWNrZXIoe1xuLy8gICAgaW50ZXJ2YWw6IDYwLFxuLy8gICAgbWluVGltZTogJzEwJyxcbi8vICAgIG1heFRpbWU6ICc2OjAwcG0nLFxuLy8gICAgZGVmYXVsdFRpbWU6ICcxMScsXG4vLyAgICBzdGFydFRpbWU6ICcxMDowMCcsXG4vLyAgICBkeW5hbWljOiBmYWxzZSxcbi8vICAgIGRyb3Bkb3duOiB0cnVlLFxuLy8gICAgc2Nyb2xsYmFyOiB0cnVlXG4vL30pO1xuIiwiIiwiJCgnLml0ZW0tc2xpZGVyJykuc2xpY2soe1xuICBzbGlkZXNUb1Nob3c6IDMsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgXVxufSlcbiIsIiIsIiIsIiIsIiIsIiQoJy5tZW51X19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVudV9fYnRuLS1hY3RpdmUnKTtcbiAgJCgnLm1lbnVfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnbWVudV9fY29udGVudC0tYWN0aXZlJyk7XG59KTtcbiIsIi8vJChcIltkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4vLyAgYWZ0ZXJTaG93OiBmdW5jdGlvbiAoaW5zdGFuY2UsIHNsaWRlKSB7XG4vLyAgfVxuLy99KTtcblxuXG5cbmlmICgkKCcubW9kYWxfX3NsaWRlcicpLmxlbmd0aCkge1xuICAkKCcubW9kYWxfX3NsaWRlcicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgfSk7XG59XG4iLCIiLCIiLCIiLCIiLCIiLCJpZiAoJCgnLnBhcnRuZXJzLS1uZXcgLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCkge1xuXG4gICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbiAgXG4gIHZhciBpdGVtID0gJCgnLnBhcnRuZXJzX19pdGVtJyk7XG4gIHZhciBpdGVtV2lkdGggPSBpdGVtLndpZHRoKCk7XG4gIGl0ZW0uY3NzKCdoZWlnaHQnLCBpdGVtV2lkdGgpO1xufVxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnF1ZXN0aW9uX19oZWFkZXInKS5jbGljayhmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS50b2dnbGVDbGFzcygncXVlc3Rpb24tLWFjdGl2ZScpO1xuICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLmZpbmQoJy5xdWVzdGlvbl9fY29udGVudCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG59KTtcbiIsIiIsIiIsImxldCBkcmFnQW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyYWctYW1iJyk7XG5pZiAoZHJhZ0FtYikge1xuXG4gIGNvbnN0IHNsaWRlcjUgPSBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgdmlld3BvcnQ6IGRyYWdBbWIsXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyYWctYW1iLWNvbnRlbnQnKSxcbiAgICBzY3JvbGxNb2RlOiAndHJhbnNmb3JtJyxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgfSk7XG59XG4iLCIiLCIiLCIiLCIkKCcuc2VsZWN0Jykuc2VsZWN0Mih7XG4gIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZHJvcGRvd25BdXRvV2lkdGg6IHRydWUsXG59KTtcbiIsIiIsIiIsIiQoJy5qcy1yZWdpc3RyYXRpb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xufSk7XG5cbiQoJy5qcy1sb2dpbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnI2xvZ2luJykuZmFkZUluKCdmYXN0Jyk7XG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcbn0pO1xuXG4kKCcuanMtcGFydG5lci1nZW5lcmFsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcjcGFydG5lci1nZW5lcmFsJykuZmFkZUluKCdmYXN0Jyk7XG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcbn0pO1xuXG4kKCcuanMtcGFydG5lci1tYXJrZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJyNwYXJ0bmVyLW1hcmtldCcpLmZhZGVJbignZmFzdCcpO1xuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XG59KTtcblxuJCgnLmpzLXBhcnRuZXItZm9vZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnI3BhcnRuZXItZm9vZCcpLmZhZGVJbignZmFzdCcpO1xuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XG59KTtcblxuJCgnLmpzLXBhcnRuZXItcm9vbXMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJyNwYXJ0bmVyLXJvb21zJykuZmFkZUluKCdmYXN0Jyk7XG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcbn0pO1xuXG4kKCcuc2lnbnVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xufSk7XG5cbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWdudXAnKS5sZW5ndGggPT09IDBcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmR6LWhpZGRlbi1pbnB1dCcpLmxlbmd0aCA9PT0gMFxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29udGFpbmVyLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sYW5ndWFnZS1pdGVtLXJlbW92ZScpLmxlbmd0aCA9PT0gMFxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcmVnaXN0cmF0aW9uJykubGVuZ3RoID09PSAwXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMFxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1nZW5lcmFsJykubGVuZ3RoID09PSAwXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLW1hcmtldCcpLmxlbmd0aCA9PT0gMFxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1mb29kJykubGVuZ3RoID09PSAwXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLXJvb21zJykubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICAgICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcbiAgICB9XG59KTtcblxuLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xuLy8gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XG4vL31cblxuaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5zaWdudXAnKS5sZW5ndGgpIHtcbiAgJCgnLnNpZ251cCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcyk7XG4gIH0pXG59XG4iLCIkKCcuc2xpZGVyJykuc2xpY2soe1xuICBpbmZpbml0ZTogZmFsc2UsXG4gIHZhcmlhYmxlV2lkdGg6IHRydWVcbn0pO1xuIiwiIiwiIiwiIiwiIiwiLy92YXIgaGVpZ2h0cyA9ICQoXCIuc3RlcF9faGVhZGVyXCIpLm1hcChmdW5jdGlvbiAoKSB7XG4vLyAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XG4vL30pLmdldCgpO1xuLy9cbi8vbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XG4vL2NvbnNvbGUubG9nKG1heEhlaWdodCk7XG4vLyQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XG5cbi8vJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcbi8vICB2YXIgaGVpZ2h0cyA9ICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLm1hcChmdW5jdGlvbiAoKSB7XG4vLyAgICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcbi8vICB9KS5nZXQoKTtcbi8vICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcbi8vICBjb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xuLy8gICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcbi8vfSk7XG5cblxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcbiAgICAkKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICQoJy50ZWFtX19zdGVwcycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGVpZ2h0cyA9ICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xuICAgICAgfSkuZ2V0KCk7XG4gICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcbiAgICAgIGNvbnNvbGUubG9nKG1heEhlaWdodCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XG4gICAgfSk7XG4gIH1cbn0pXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIkKCcuc3VtbWFyeV9fc2xpZGVyJykuc2xpY2soe1xuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBkb3RzOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgXVxufSlcbiIsIiIsIiQoJy50aW1lbGluZScpLm1DdXN0b21TY3JvbGxiYXIoe1xuICBheGlzOiBcInhcIixcbiAgbW91c2V3aGVlbDoge1xuICAgIGVuYWJsZTogdHJ1ZVxuICB9XG59KTtcbiIsIiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5Mikge1xuICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgIGZpeGVkRWxlbWVudHM6ICcuc2lnbnVwJyxcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcbiAgICAgIGlmKGRlc3RpbmF0aW9uLmluZGV4ID09ICcwJykge1xuICAgICAgICAkKCcuZnJvbnRfX2JnJykuZ2V0KDApLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCAmJiAhJCgnLnBhcnRuZXJzJykuaGFzQ2xhc3MoJ3BhcnRuZXJzLS1uZXcnKSkge1xuXG4gICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufVxuIl19
