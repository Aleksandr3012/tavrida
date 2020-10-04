
















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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW5ub3VuY2VtZW50L2Fubm91bmNlbWVudC5qcyIsImFudGkvYW50aS5qcyIsImFudGktYmlnL2FudGktYmlnLmpzIiwiYW50aS1mZWF0dXJlL2FudGktZmVhdHVyZS5qcyIsImFudGktbGlzdC9hbnRpLWxpc3QuanMiLCJhcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmpzIiwiYXJ0L2FydC5qcyIsImFydGlzdC9hcnRpc3QuanMiLCJhd2FyZC9hd2FyZC5qcyIsImJhbm5lci9iYW5uZXIuanMiLCJjYWJpbmV0L2NhYmluZXQuanMiLCJjYXJkL2NhcmQuanMiLCJjYXN0aW5nL2Nhc3RpbmcuanMiLCJjYXN0aW5nLXN0cmVhbS9jYXN0aW5nLXN0cmVhbS5qcyIsImNhc3RpbmctdHlwZS9jYXN0aW5nLXR5cGUuanMiLCJjYXN0aW5ncy1zbGlkZXIvY2FzdGluZ3Mtc2xpZGVyLmpzIiwiY29uY2VwdC9jb25jZXB0LmpzIiwiY29uZGl0aW9ucy9jb25kaXRpb25zLmpzIiwiY29udGVtcG9yYXJ5L2NvbnRlbXBvcmFyeS5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZG9jdW1lbnQvZG9jdW1lbnQuanMiLCJkcmFnL2RyYWcuanMiLCJldmVudC9ldmVudC5qcyIsImV4aGliaXRpb24vZXhoaWJpdGlvbi5qcyIsImZhcS9mYXEuanMiLCJmYXNoaW9uL2Zhc2hpb24uanMiLCJmZWF0dXJlL2ZlYXR1cmUuanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZlc3RpdmFsLWFwcGxpY2F0aW9uL2Zlc3RpdmFsLWFwcGxpY2F0aW9uLmpzIiwiZmVzdGl2YWwtZG9jL2Zlc3RpdmFsLWRvYy5qcyIsImZlc3RpdmFsLWdyYW50L2Zlc3RpdmFsLWdyYW50LmpzIiwiZmVzdGl2YWwtaXRlbS9mZXN0aXZhbC1pdGVtLmpzIiwiZmVzdGl2YWwtbmV3L2Zlc3RpdmFsLW5ldy5qcyIsImZlc3RpdmFsLXBhcmFkZS9mZXN0aXZhbC1wYXJhZGUuanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJmdW4vZnVuLmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGVyby9oZXJvLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtL2l0ZW0uanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsImxpbmstYmFjay9saW5rLWJhY2suanMiLCJsay1ldmVudC9say1ldmVudC5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJtb2RhbC9tb2RhbC5qcyIsIm5ld3MvbmV3cy5qcyIsInBhcmFkZS9wYXJhZGUuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVyLXNlY3Rpb24vcGFydG5lci1zZWN0aW9uLmpzIiwicGFydG5lcnMvcGFydG5lcnMuanMiLCJwYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJwYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5qcyIsInBlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLmpzIiwicHJpemUvcHJpemUuanMiLCJwcm9jZXNzaW9uL3Byb2Nlc3Npb24uanMiLCJxdWFydGVyL3F1YXJ0ZXIuanMiLCJxdWVzdGlvbi9xdWVzdGlvbi5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJyZXNpZGVuY2UvcmVzaWRlbmNlLmpzIiwic0NhbGVuZGFyL3NDYWxlbmRhci5qcyIsInNDb25mZXJlbmNlL3NDb25mZXJlbmNlLmpzIiwic2VjdGlvbi9zZWN0aW9uLmpzIiwic2VsZWN0L3NlbGVjdC5qcyIsInNGcm9tL3NGcm9tLmpzIiwic2lnbnVwL3NpZ251cC5qcyIsInNsaWRlci9zbGlkZXIuanMiLCJzb2NpYWxzL3NvY2lhbHMuanMiLCJzUGFydGljaXBhdGlvbi9zUGFydGljaXBhdGlvbi5qcyIsInN0ZXAvc3RlcC5qcyIsInN0ZXBzLWxpc3Qvc3RlcHMtbGlzdC5qcyIsInN0b3J5L3N0b3J5LmpzIiwic3RyZWFtLWN1cnJlbnQvc3RyZWFtLWN1cnJlbnQuanMiLCJzdHJlYW1zL3N0cmVhbXMuanMiLCJzdHJlYW1zLWZlYXR1cmUvc3RyZWFtcy1mZWF0dXJlLmpzIiwic3RyZWFtcy1mb3JtYXQvc3RyZWFtcy1mb3JtYXQuanMiLCJzdHJlYW1zLXByaXplL3N0cmVhbXMtcHJpemUuanMiLCJzdHJ1Y3R1cmUvc3RydWN0dXJlLmpzIiwic3VtbWFyeS9zdW1tYXJ5LmpzIiwidGVhbS90ZWFtLmpzIiwidGltZWxpbmUvdGltZWxpbmUuanMiLCJ0cmFuc2Zlci90cmFuc2Zlci5qcyIsIndvcmtzaG9wL3dvcmtzaG9wLmpzIiwid29ya3Nob3Atc3RhZ2Uvd29ya3Nob3Atc3RhZ2UuanMiLCJ3b3Jrc2hvcC10ZWFtL3dvcmtzaG9wLXRlYW0uanMiLCJ3cmFwcGVyL3dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FDREE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJpZiAoJCgnLmNhc3RpbmdzLXNsaWRlcl9fY29udGVudCcpLmxlbmd0aCkge1xyXG5cclxuICAkKCcuY2FzdGluZ3Mtc2xpZGVyX19jb250ZW50Jykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIF1cclxuICB9KTtcclxufVxyXG4iLCIkKCdbZGF0YS1zbGlkZV0gLmNvbmNlcHRfX2xpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBzbGlkZU51bWJlciA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtc2xpZGVdJykuZGF0YSgnc2xpZGUnKTtcclxuICBcclxuICAkKCcubW9kYWxfX3NsaWRlcicpLnNsaWNrKCdzbGlja0dvVG8nLCBzbGlkZU51bWJlciAtIDEpO1xyXG5cclxuLy8gICQoZG9jdW1lbnQpLm9uKCdhZnRlclNob3cuZmInLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIHNsaWRlKSB7XHJcbi8vICAgIGNvbnNvbGUubG9nKHNsaWRlTnVtYmVyKTtcclxuLy8gICAgJCgnLm1vZGFsX19zbGlkZXInKS5zbGljaygnc2xpY2tHb1RvJywgc2xpZGVOdW1iZXIgLSAxKTtcclxuLy8gIH0pO1xyXG59KTtcclxuIiwiIiwiIiwiLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJykubGVuZ3RoKSB7XHJcbi8vICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKTtcclxuLy8gIGNvbnN0IHBzMiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9faXRlbXMtd3JhcHBlcicpO1xyXG4vL31cclxuIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSkge1xuXG4gIGxldCBkcmFnVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy12aWRlbycpO1xuICBpZiAoZHJhZ1ZpZGVvKSB7XG4gICAgY29uc3Qgc2xpZGVyNCA9IG5ldyBTY3JvbGxCb29zdGVyKHtcbiAgICAgIHZpZXdwb3J0OiBkcmFnVmlkZW8sXG4gICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy12aWRlby1jb250ZW50JyksXG4gICAgICBzY3JvbGxNb2RlOiAndHJhbnNmb3JtJyxcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGRyYWdBcnRpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJhZy1hcnRpc3QxJyk7XG4gIGlmIChkcmFnQXJ0aXN0KSB7XG4gIFxuICAgIGNvbnN0IHNsaWRlcjUgPSBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgICB2aWV3cG9ydDogZHJhZ0FydGlzdCxcbiAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLWFydGlzdDEtY29udGVudCcpLFxuICAgICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBkcmFnQXJ0aXN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLWFydGlzdDInKTtcbiAgaWYgKGRyYWdBcnRpc3QyKSB7XG4gICAgY29uc3Qgc2xpZGVyNiA9IG5ldyBTY3JvbGxCb29zdGVyKHtcbiAgICAgIHZpZXdwb3J0OiBkcmFnQXJ0aXN0MixcbiAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcmFnLWFydGlzdDItY29udGVudCcpLFxuICAgICAgc2Nyb2xsTW9kZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiXHJcbiIsIiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDExOTkgJiYgJCgnLmZlZWRiYWNrX190ZXh0JykubGVuZ3RoKSB7XHJcbiAgJCgnLmZlZWRiYWNrX190ZXh0JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB7XHJcbiAgICAgIHdoZWVsU3BlZWQ6IDAuMSxcclxuICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiaFRpdGxlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLmNzcygnbWluLWhlaWdodCcsICcnKVxyXG4gIG1heEhlaWdodCA9IDA7XHJcbiAgdmFyIGhlaWdodHMgPSAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gIH0pLmdldCgpO1xyXG5cclxuICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICBoVGl0bGVIZWlnaHQoKTtcclxufSlcclxuIiwiJCgnLmluZm9fX2hlYWRsaW5lcnMnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCIkKCcuaW5wdXQtLXBob25lJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1wYXNzcG9ydC1zZXJpZXMnKS5pbnB1dG1hc2soXCI5OSA5OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tY29kZScpLmlucHV0bWFzayhcIjk5OS05OTlcIik7XHJcblxyXG4vLyQoJy5pbnB1dC0tZGF0ZScpLmRhdGVwaWNrZXIoKTtcclxuLy9cclxuLy8kKCcuaW5wdXQtLXRpbWUnKS50aW1lcGlja2VyKHtcclxuLy8gICAgaW50ZXJ2YWw6IDYwLFxyXG4vLyAgICBtaW5UaW1lOiAnMTAnLFxyXG4vLyAgICBtYXhUaW1lOiAnNjowMHBtJyxcclxuLy8gICAgZGVmYXVsdFRpbWU6ICcxMScsXHJcbi8vICAgIHN0YXJ0VGltZTogJzEwOjAwJyxcclxuLy8gICAgZHluYW1pYzogZmFsc2UsXHJcbi8vICAgIGRyb3Bkb3duOiB0cnVlLFxyXG4vLyAgICBzY3JvbGxiYXI6IHRydWVcclxuLy99KTtcclxuIiwiIiwiJCgnLml0ZW0tc2xpZGVyJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSlcclxuIiwiIiwiIiwiIiwiIiwiJCgnLm1lbnVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVudV9fYnRuLS1hY3RpdmUnKTtcclxuICAkKCcubWVudV9fY29udGVudCcpLnRvZ2dsZUNsYXNzKCdtZW51X19jb250ZW50LS1hY3RpdmUnKTtcclxufSk7XHJcbiIsIi8vJChcIltkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbi8vICBhZnRlclNob3c6IGZ1bmN0aW9uIChpbnN0YW5jZSwgc2xpZGUpIHtcclxuLy8gIH1cclxuLy99KTtcclxuXHJcblxyXG5cclxuaWYgKCQoJy5tb2RhbF9fc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgJCgnLm1vZGFsX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gIH0pO1xyXG59XHJcbiIsIiIsIiIsIiIsIiIsIiIsImlmICgkKCcucGFydG5lcnMtLW5ldyAucGFydG5lcnNfX3Jvdy1jb250ZW50JykubGVuZ3RoKSB7XHJcblxyXG4gICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbiAgXHJcbiAgdmFyIGl0ZW0gPSAkKCcucGFydG5lcnNfX2l0ZW0nKTtcclxuICB2YXIgaXRlbVdpZHRoID0gaXRlbS53aWR0aCgpO1xyXG4gIGl0ZW0uY3NzKCdoZWlnaHQnLCBpdGVtV2lkdGgpO1xyXG59XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiQoJy5xdWVzdGlvbl9faGVhZGVyJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLnRvZ2dsZUNsYXNzKCdxdWVzdGlvbi0tYWN0aXZlJyk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS5maW5kKCcucXVlc3Rpb25fX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnNlbGVjdCcpLnNlbGVjdDIoe1xyXG4gIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGRyb3Bkb3duQXV0b1dpZHRoOiB0cnVlLFxyXG59KTtcclxuIiwiIiwiJCgnLmpzLXJlZ2lzdHJhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtbG9naW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjbG9naW4nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1nZW5lcmFsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItZ2VuZXJhbCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLW1hcmtldCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLW1hcmtldCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLWZvb2QnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1mb29kJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItcm9vbXMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1yb29tcycpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5zaWdudXBfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWdudXAnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHotaGlkZGVuLWlucHV0JykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmNvbnRhaW5lci1pdGVtLXJlbW92ZScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sYW5ndWFnZS1pdGVtLXJlbW92ZScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1yZWdpc3RyYXRpb24nKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtbG9naW4nKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1nZW5lcmFsJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItbWFya2V0JykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItZm9vZCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLXJvb21zJykubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICAgICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5zaWdudXAnKS5sZW5ndGgpIHtcclxuLy8gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XHJcbi8vfVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5zaWdudXAnKS5sZW5ndGgpIHtcclxuICAkKCcuc2lnbnVwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKHRoaXMpO1xyXG4gIH0pXHJcbn1cclxuIiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG59KTtcclxuIiwiIiwiIiwiLy92YXIgaGVpZ2h0cyA9ICQoXCIuc3RlcF9faGVhZGVyXCIpLm1hcChmdW5jdGlvbiAoKSB7XHJcbi8vICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcclxuLy99KS5nZXQoKTtcclxuLy9cclxuLy9tYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuLy9jb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xyXG4vLyQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XHJcblxyXG4vLyQoJy50ZWFtX19zdGVwcycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbi8vICB2YXIgaGVpZ2h0cyA9ICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLm1hcChmdW5jdGlvbiAoKSB7XHJcbi8vICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4vLyAgfSkuZ2V0KCk7XHJcbi8vICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuLy8gIGNvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbi8vICAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XHJcbi8vfSk7XHJcblxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xyXG4gICAgJCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuICAgICQoJy50ZWFtX19zdGVwcycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBoZWlnaHRzID0gJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgfSkuZ2V0KCk7XHJcbiAgICAgIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pXHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiQoJy5zdW1tYXJ5X19zbGlkZXInKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSlcclxuIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgZml4ZWRFbGVtZW50czogJy5zaWdudXAnLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgICAgaWYoZGVzdGluYXRpb24uaW5kZXggPT0gJzAnKSB7XHJcbiAgICAgICAgJCgnLmZyb250X19iZycpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3ICYmICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGggJiYgISQoJy5wYXJ0bmVycycpLmhhc0NsYXNzKCdwYXJ0bmVycy0tbmV3JykpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuIl19
