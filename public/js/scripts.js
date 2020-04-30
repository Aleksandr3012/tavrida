







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
    ) {
        $('.signup').fadeOut('fast');
        $('.wrapper').removeClass('wrapper--popup');
        $('body').removeClass('body--popup');
    }
});

if ($(window).width() > 992 && $('.signup').length) {
  const ps3 = new PerfectScrollbar('.signup');
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

if ($(window).width() > 767 && $('.partners__row-content').length) {

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
        settings: 'unslick'
      },
    ]
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuanMiLCJhcnQvYXJ0LmpzIiwiYXdhcmQvYXdhcmQuanMiLCJjYWJpbmV0L2NhYmluZXQuanMiLCJjb250ZW50L2NvbnRlbnQuanMiLCJkYXRlcy9kYXRlcy5qcyIsImRvY3VtZW50L2RvY3VtZW50LmpzIiwiZXZlbnQvZXZlbnQuanMiLCJmYXEvZmFxLmpzIiwiZmVhdHVyZS9mZWF0dXJlLmpzIiwiZmVlZGJhY2svZmVlZGJhY2suanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwiaGVhZGVyLWlubmVyL2hlYWRlci1pbm5lci5qcyIsImhlYWRsaW5lci9oZWFkbGluZXIuanMiLCJoZXJvL2hlcm8uanMiLCJoaWdobGlnaHRzL2hpZ2hsaWdodHMuanMiLCJpbmZvL2luZm8uanMiLCJpbnB1dC9pbnB1dC5qcyIsIml0ZW0vaXRlbS5qcyIsIml0ZW0tc2xpZGVyL2l0ZW0tc2xpZGVyLmpzIiwibGluay1iYWNrL2xpbmstYmFjay5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVyLXNlY3Rpb24vcGFydG5lci1zZWN0aW9uLmpzIiwicGFydG5lcnMvcGFydG5lcnMuanMiLCJwYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJwYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5qcyIsInF1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwicmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzaWdudXAvc2lnbnVwLmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInN0ZXAvc3RlcC5qcyIsInN0b3J5L3N0b3J5LmpzIiwic3VtbWFyeS9zdW1tYXJ5LmpzIiwidGVhbS90ZWFtLmpzIiwidGltZWxpbmUvdGltZWxpbmUuanMiLCJ3cmFwcGVyL3dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIvL2lmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKS5sZW5ndGgpIHtcclxuLy8gIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpO1xyXG4vLyAgY29uc3QgcHMyID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19pdGVtcy13cmFwcGVyJyk7XHJcbi8vfVxyXG4iLCIiLCIiLCJcclxuIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSAmJiAkKCcuZmVlZGJhY2tfX3RleHQnKS5sZW5ndGgpIHtcclxuICAkKCcuZmVlZGJhY2tfX3RleHQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHtcclxuICAgICAgd2hlZWxTcGVlZDogMC4xLFxyXG4gICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfSlcclxufVxyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJoVGl0bGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgJycpXHJcbiAgbWF4SGVpZ2h0ID0gMDtcclxuICB2YXIgaGVpZ2h0cyA9ICQoXCIuaGlnaGxpZ2h0c19fYXJ0aWNsZS10aXRsZVwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgfSkuZ2V0KCk7XHJcblxyXG4gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4gICQoXCIuaGlnaGxpZ2h0c19fYXJ0aWNsZS10aXRsZVwiKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gIGhUaXRsZUhlaWdodCgpO1xyXG59KVxyXG4iLCIkKCcuaW5mb19faGVhZGxpbmVycycpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gIGF4aXM6IFwieFwiLFxyXG4gIG1vdXNld2hlZWw6IHtcclxuICAgIGVuYWJsZTogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbiIsIiQoJy5pbnB1dC0tcGhvbmUnKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLXBhc3Nwb3J0LXNlcmllcycpLmlucHV0bWFzayhcIjk5IDk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1jb2RlJykuaW5wdXRtYXNrKFwiOTk5LTk5OVwiKTtcclxuIiwiIiwiJCgnLml0ZW0tc2xpZGVyJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSlcclxuIiwiIiwiIiwiIiwiJCgnLm1lbnVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVudV9fYnRuLS1hY3RpdmUnKTtcclxuICAkKCcubWVudV9fY29udGVudCcpLnRvZ2dsZUNsYXNzKCdtZW51X19jb250ZW50LS1hY3RpdmUnKTtcclxufSk7XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiQoJy5xdWVzdGlvbl9faGVhZGVyJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLnRvZ2dsZUNsYXNzKCdxdWVzdGlvbi0tYWN0aXZlJyk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS5maW5kKCcucXVlc3Rpb25fX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG59KTtcclxuIiwiIiwiIiwiJCgnLnNlbGVjdCcpLnNlbGVjdDIoe1xyXG4gIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGRyb3Bkb3duQXV0b1dpZHRoOiB0cnVlLFxyXG59KTtcclxuIiwiJCgnLmpzLXJlZ2lzdHJhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtbG9naW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjbG9naW4nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuc2lnbnVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lnbnVwJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmR6LWhpZGRlbi1pbnB1dCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jb250YWluZXItaXRlbS1yZW1vdmUnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGFuZ3VhZ2UtaXRlbS1yZW1vdmUnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcmVnaXN0cmF0aW9uJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLWxvZ2luJykubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICAgICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuc2lnbnVwJykubGVuZ3RoKSB7XHJcbiAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWdudXAnKTtcclxufVxyXG4iLCIkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG4iLCIiLCIvL3ZhciBoZWlnaHRzID0gJChcIi5zdGVwX19oZWFkZXJcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4vL30pLmdldCgpO1xyXG4vL1xyXG4vL21heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vL2NvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbi8vJCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuXHJcbi8vJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuLy8gIHZhciBoZWlnaHRzID0gJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykubWFwKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbi8vICB9KS5nZXQoKTtcclxuLy8gIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xyXG4vLyAgY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuLy8gICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuLy99KTtcclxuXHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAkKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgJCgnLnRlYW1fX3N0ZXBzJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGhlaWdodHMgPSAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gICAgICB9KS5nZXQoKTtcclxuICAgICAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1heEhlaWdodCk7XHJcbiAgICAgICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuIiwiIiwiIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgZml4ZWRFbGVtZW50czogJy5zaWdudXAnLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgICAgaWYoZGVzdGluYXRpb24uaW5kZXggPT0gJzAnKSB7XHJcbiAgICAgICAgJCgnLmZyb250X19iZycpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3ICYmICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==
