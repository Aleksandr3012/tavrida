











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

$('.input--date').datepicker();

$('.input--time').timepicker({
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});


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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1mZWF0dXJlL2FudGktZmVhdHVyZS5qcyIsImFudGktYmlnL2FudGktYmlnLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuanMiLCJhcnQvYXJ0LmpzIiwiYXdhcmQvYXdhcmQuanMiLCJiYW5uZXIvYmFubmVyLmpzIiwiY2FiaW5ldC9jYWJpbmV0LmpzIiwiY2FyZC9jYXJkLmpzIiwiY29uY2VwdC9jb25jZXB0LmpzIiwiY29uZGl0aW9ucy9jb25kaXRpb25zLmpzIiwiY29udGVudC9jb250ZW50LmpzIiwiZGF0ZXMvZGF0ZXMuanMiLCJldmVudC9ldmVudC5qcyIsImRvY3VtZW50L2RvY3VtZW50LmpzIiwiZXhoaWJpdGlvbi9leGhpYml0aW9uLmpzIiwiZmFxL2ZhcS5qcyIsImZlYXR1cmUvZmVhdHVyZS5qcyIsImZlZWRiYWNrL2ZlZWRiYWNrLmpzIiwiZmllbGQvZmllbGQuanMiLCJmbG93L2Zsb3cuanMiLCJmb290ZXIvZm9vdGVyLmpzIiwiZm9vdGVyLXNob3J0L2Zvb3Rlci1zaG9ydC5qcyIsImZvcm0vZm9ybS5qcyIsImZyb250L2Zyb250LmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGVyby9oZXJvLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtL2l0ZW0uanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsImxpbmstYmFjay9saW5rLWJhY2suanMiLCJsay1ldmVudC9say1ldmVudC5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJtb2RhbC9tb2RhbC5qcyIsInBhcnQvcGFydC5qcyIsInBhcnRpY2lwYXRpb24vcGFydGljaXBhdGlvbi5qcyIsInBhcnRuZXItc2VjdGlvbi9wYXJ0bmVyLXNlY3Rpb24uanMiLCJwYXJ0bmVycy9wYXJ0bmVycy5qcyIsInBhcnRuZXJzLWxpc3QvcGFydG5lcnMtbGlzdC5qcyIsInBhcnRuZXJzaGlwL3BhcnRuZXJzaGlwLmpzIiwicHJpemUvcHJpemUuanMiLCJwcm9jZXNzaW9uL3Byb2Nlc3Npb24uanMiLCJxdWFydGVyL3F1YXJ0ZXIuanMiLCJxdWVzdGlvbi9xdWVzdGlvbi5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJyZXNpZGVuY2UvcmVzaWRlbmNlLmpzIiwic2VjdGlvbi9zZWN0aW9uLmpzIiwic2VsZWN0L3NlbGVjdC5qcyIsInNpZ251cC9zaWdudXAuanMiLCJzbGlkZXIvc2xpZGVyLmpzIiwic29jaWFscy9zb2NpYWxzLmpzIiwic3RlcC9zdGVwLmpzIiwic3RlcHMtbGlzdC9zdGVwcy1saXN0LmpzIiwic3Rvcnkvc3RvcnkuanMiLCJzdHJlYW0tY3VycmVudC9zdHJlYW0tY3VycmVudC5qcyIsInN0cmVhbXMvc3RyZWFtcy5qcyIsInN0cmVhbXMtZmVhdHVyZS9zdHJlYW1zLWZlYXR1cmUuanMiLCJzdHJlYW1zLWZvcm1hdC9zdHJlYW1zLWZvcm1hdC5qcyIsInN0cmVhbXMtcHJpemUvc3RyZWFtcy1wcml6ZS5qcyIsInN0cnVjdHVyZS9zdHJ1Y3R1cmUuanMiLCJzdW1tYXJ5L3N1bW1hcnkuanMiLCJ0ZWFtL3RlYW0uanMiLCJ0cmFuc2Zlci90cmFuc2Zlci5qcyIsInRpbWVsaW5lL3RpbWVsaW5lLmpzIiwid29ya3Nob3Avd29ya3Nob3AuanMiLCJ3b3Jrc2hvcC1zdGFnZS93b3Jrc2hvcC1zdGFnZS5qcyIsIndvcmtzaG9wLXRlYW0vd29ya3Nob3AtdGVhbS5qcyIsIndyYXBwZXIvd3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQUNBO0FDREE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiJCgnW2RhdGEtc2xpZGVdIC5jb25jZXB0X19saW5rJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgc2xpZGVOdW1iZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLXNsaWRlXScpLmRhdGEoJ3NsaWRlJyk7XHJcbiAgXHJcbiAgJCgnLm1vZGFsX19zbGlkZXInKS5zbGljaygnc2xpY2tHb1RvJywgc2xpZGVOdW1iZXIgLSAxKTtcclxuXHJcbi8vICAkKGRvY3VtZW50KS5vbignYWZ0ZXJTaG93LmZiJywgZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBzbGlkZSkge1xyXG4vLyAgICBjb25zb2xlLmxvZyhzbGlkZU51bWJlcik7XHJcbi8vICAgICQoJy5tb2RhbF9fc2xpZGVyJykuc2xpY2soJ3NsaWNrR29UbycsIHNsaWRlTnVtYmVyIC0gMSk7XHJcbi8vICB9KTtcclxufSk7XHJcbiIsIiIsIi8vaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpLmxlbmd0aCkge1xyXG4vLyAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJyk7XHJcbi8vICBjb25zdCBwczIgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2l0ZW1zLXdyYXBwZXInKTtcclxuLy99XHJcbiIsIiIsIlxyXG4iLCIiLCIiLCIiLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMTk5ICYmICQoJy5mZWVkYmFja19fdGV4dCcpLmxlbmd0aCkge1xyXG4gICQoJy5mZWVkYmFja19fdGV4dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwge1xyXG4gICAgICB3aGVlbFNwZWVkOiAwLjEsXHJcbiAgICAgIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlXHJcbiAgICB9KTtcclxuICB9KVxyXG59XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsImhUaXRsZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICQoXCIuaGlnaGxpZ2h0c19fYXJ0aWNsZS10aXRsZVwiKS5jc3MoJ21pbi1oZWlnaHQnLCAnJylcclxuICBtYXhIZWlnaHQgPSAwO1xyXG4gIHZhciBoZWlnaHRzID0gJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcclxuICB9KS5nZXQoKTtcclxuXHJcbiAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbiAgJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLmNzcygnbWluLWhlaWdodCcsIG1heEhlaWdodCk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgaFRpdGxlSGVpZ2h0KCk7XHJcbn0pXHJcbiIsIiQoJy5pbmZvX19oZWFkbGluZXJzJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiJCgnLmlucHV0LS1waG9uZScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tcGFzc3BvcnQtc2VyaWVzJykuaW5wdXRtYXNrKFwiOTkgOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLWNvZGUnKS5pbnB1dG1hc2soXCI5OTktOTk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1kYXRlJykuZGF0ZXBpY2tlcigpO1xyXG5cclxuJCgnLmlucHV0LS10aW1lJykudGltZXBpY2tlcih7XHJcbiAgICBpbnRlcnZhbDogNjAsXHJcbiAgICBtaW5UaW1lOiAnMTAnLFxyXG4gICAgbWF4VGltZTogJzY6MDBwbScsXHJcbiAgICBkZWZhdWx0VGltZTogJzExJyxcclxuICAgIHN0YXJ0VGltZTogJzEwOjAwJyxcclxuICAgIGR5bmFtaWM6IGZhbHNlLFxyXG4gICAgZHJvcGRvd246IHRydWUsXHJcbiAgICBzY3JvbGxiYXI6IHRydWVcclxufSk7XHJcbiIsIiIsIiQoJy5pdGVtLXNsaWRlcicpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pXHJcbiIsIiIsIiIsIiIsIiIsIiQoJy5tZW51X19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2J0bi0tYWN0aXZlJyk7XHJcbiAgJCgnLm1lbnVfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnbWVudV9fY29udGVudC0tYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCIiLCIvLyQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xyXG4vLyAgYWZ0ZXJTaG93OiBmdW5jdGlvbiAoaW5zdGFuY2UsIHNsaWRlKSB7XHJcbi8vICB9XHJcbi8vfSk7XHJcblxyXG5cclxuXHJcbmlmICgkKCcubW9kYWxfX3NsaWRlcicpLmxlbmd0aCkge1xyXG4gICQoJy5tb2RhbF9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICB9KTtcclxufVxyXG4iLCIiLCIiLCIiLCJpZiAoJCgnLnBhcnRuZXJzLS1uZXcgLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCkge1xyXG5cclxuICAkKCcucGFydG5lcnNfX3Jvdy1jb250ZW50Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0pO1xyXG4gIFxyXG4gIHZhciBpdGVtID0gJCgnLnBhcnRuZXJzX19pdGVtJyk7XHJcbiAgdmFyIGl0ZW1XaWR0aCA9IGl0ZW0ud2lkdGgoKTtcclxuICBpdGVtLmNzcygnaGVpZ2h0JywgaXRlbVdpZHRoKTtcclxufVxyXG4iLCIiLCIiLCIiLCIiLCIiLCIkKCcucXVlc3Rpb25fX2hlYWRlcicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS50b2dnbGVDbGFzcygncXVlc3Rpb24tLWFjdGl2ZScpO1xyXG4gICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykuZmluZCgnLnF1ZXN0aW9uX19jb250ZW50Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxufSk7XHJcbiIsIiIsIiIsIiIsIiQoJy5zZWxlY3QnKS5zZWxlY3QyKHtcclxuICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBkcm9wZG93bkF1dG9XaWR0aDogdHJ1ZSxcclxufSk7XHJcbiIsIiQoJy5qcy1yZWdpc3RyYXRpb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcmVnaXN0cmF0aW9uJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLWxvZ2luJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI2xvZ2luJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItZ2VuZXJhbCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLWdlbmVyYWwnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1tYXJrZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1tYXJrZXQnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1mb29kJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItZm9vZCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLXJvb21zJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItcm9vbXMnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuc2lnbnVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lnbnVwJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmR6LWhpZGRlbi1pbnB1dCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jb250YWluZXItaXRlbS1yZW1vdmUnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGFuZ3VhZ2UtaXRlbS1yZW1vdmUnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcmVnaXN0cmF0aW9uJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLWxvZ2luJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItZ2VuZXJhbCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLW1hcmtldCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLWZvb2QnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1yb29tcycpLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgICAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vL2lmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuc2lnbnVwJykubGVuZ3RoKSB7XHJcbi8vICBjb25zdCBwczMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZ251cCcpO1xyXG4vL31cclxuXHJcbmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuc2lnbnVwJykubGVuZ3RoKSB7XHJcbiAgJCgnLnNpZ251cCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBwczMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzKTtcclxuICB9KVxyXG59XHJcbiIsIiQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHZhcmlhYmxlV2lkdGg6IHRydWVcclxufSk7XHJcbiIsIiIsIi8vdmFyIGhlaWdodHMgPSAkKFwiLnN0ZXBfX2hlYWRlclwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4vLyAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbi8vfSkuZ2V0KCk7XHJcbi8vXHJcbi8vbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbi8vY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuLy8kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG5cclxuLy8kKCcudGVhbV9fc3RlcHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyAgdmFyIGhlaWdodHMgPSAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcclxuLy8gIH0pLmdldCgpO1xyXG4vLyAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbi8vICBjb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xyXG4vLyAgJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG4vL30pO1xyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcclxuICAgICQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICAkKCcudGVhbV9fc3RlcHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaGVpZ2h0cyA9ICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgIH0pLmdldCgpO1xyXG4gICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuICAgICAgY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIkKCcuc3VtbWFyeV9fc2xpZGVyJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pXHJcbiIsIiIsIiIsIiQoJy50aW1lbGluZScpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gIGF4aXM6IFwieFwiLFxyXG4gIG1vdXNld2hlZWw6IHtcclxuICAgIGVuYWJsZTogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5Mikge1xyXG4gIG5ldyBmdWxscGFnZSgnI2Z1bGxwYWdlJywge1xyXG4gICAgbmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgIGZpeGVkRWxlbWVudHM6ICcuc2lnbnVwJyxcclxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uIChvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pIHtcclxuICAgICAgJCgnI2ZwLW5hdicpLmF0dHIoJ2RhdGEtc2xpZGUnLCBkZXN0aW5hdGlvbi5pbmRleCk7XHJcbiAgICAgIGlmKGRlc3RpbmF0aW9uLmluZGV4ID09ICcwJykge1xyXG4gICAgICAgICQoJy5mcm9udF9fYmcnKS5nZXQoMCkucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2NyAmJiAkKCcucGFydG5lcnNfX3Jvdy1jb250ZW50JykubGVuZ3RoICYmICEkKCcucGFydG5lcnMnKS5oYXNDbGFzcygncGFydG5lcnMtLW5ldycpKSB7XHJcblxyXG4gICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5ub3QoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==
