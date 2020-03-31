



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









if ($(window).width() > 992 && $('.highlights__content').length) {
  const hps = new PerfectScrollbar('.highlights__content', {
    axis: 'y',
    wheelSpeed: 0.5,
    wheelPropagation: true
  });
}

$('.info__headliners').mCustomScrollbar({
  axis: "x",
  mousewheel: {
    enable: true
  }
});

$('.input--phone').inputmask("+7 (999) 999-99-99");

$('.input--passport-series').inputmask("99 99");

$('.input--code').inputmask("999-999");





$('.menu__btn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('menu__btn--active');
  $('.menu__content').toggleClass('menu__content--active');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFudGFnZXMvYWR2YW50YWdlcy5qcyIsImFudGkvYW50aS5qcyIsImFib3V0L2Fib3V0LmpzIiwiYXJ0L2FydC5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImFudGktbGlzdC9hbnRpLWxpc3QuanMiLCJhd2FyZC9hd2FyZC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZXZlbnQvZXZlbnQuanMiLCJkb2N1bWVudC9kb2N1bWVudC5qcyIsImZlYXR1cmUvZmVhdHVyZS5qcyIsImZhcS9mYXEuanMiLCJmbG93L2Zsb3cuanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZpZWxkL2ZpZWxkLmpzIiwiZm9vdGVyL2Zvb3Rlci5qcyIsImZvcm0vZm9ybS5qcyIsImZyb250L2Zyb250LmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZXJvL2hlcm8uanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsIml0ZW0vaXRlbS5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJwYXJ0L3BhcnQuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVycy9wYXJ0bmVycy5qcyIsInF1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwic2VjdGlvbi9zZWN0aW9uLmpzIiwic2VsZWN0L3NlbGVjdC5qcyIsInNpZ251cC9zaWdudXAuanMiLCJyZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInN0ZXAvc3RlcC5qcyIsInN1bW1hcnkvc3VtbWFyeS5qcyIsInN0b3J5L3N0b3J5LmpzIiwidGVhbS90ZWFtLmpzIiwidGltZWxpbmUvdGltZWxpbmUuanMiLCJ3cmFwcGVyL3dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIiIsIiIsIi8vaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpLmxlbmd0aCkge1xyXG4vLyAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJyk7XHJcbi8vICBjb25zdCBwczIgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2l0ZW1zLXdyYXBwZXInKTtcclxuLy99XHJcbiIsIiIsIiIsIiIsIlxyXG4iLCIiLCIiLCIiLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMTk5ICYmICQoJy5mZWVkYmFja19fdGV4dCcpLmxlbmd0aCkge1xyXG4gICQoJy5mZWVkYmFja19fdGV4dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwge1xyXG4gICAgICB3aGVlbFNwZWVkOiAwLjEsXHJcbiAgICAgIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlXHJcbiAgICB9KTtcclxuICB9KVxyXG59XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuaGlnaGxpZ2h0c19fY29udGVudCcpLmxlbmd0aCkge1xyXG4gIGNvbnN0IGhwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuaGlnaGxpZ2h0c19fY29udGVudCcsIHtcclxuICAgIGF4aXM6ICd5JyxcclxuICAgIHdoZWVsU3BlZWQ6IDAuNSxcclxuICAgIHdoZWVsUHJvcGFnYXRpb246IHRydWVcclxuICB9KTtcclxufVxyXG4iLCIkKCcuaW5mb19faGVhZGxpbmVycycpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gIGF4aXM6IFwieFwiLFxyXG4gIG1vdXNld2hlZWw6IHtcclxuICAgIGVuYWJsZTogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbiIsIiQoJy5pbnB1dC0tcGhvbmUnKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLXBhc3Nwb3J0LXNlcmllcycpLmlucHV0bWFzayhcIjk5IDk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1jb2RlJykuaW5wdXRtYXNrKFwiOTk5LTk5OVwiKTtcclxuIiwiIiwiIiwiIiwiIiwiJCgnLm1lbnVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVudV9fYnRuLS1hY3RpdmUnKTtcclxuICAkKCcubWVudV9fY29udGVudCcpLnRvZ2dsZUNsYXNzKCdtZW51X19jb250ZW50LS1hY3RpdmUnKTtcclxufSk7XHJcbiIsIiIsIiIsIiIsIiIsIiIsIiIsIiQoJy5zZWxlY3QnKS5zZWxlY3QyKHtcclxuICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBkcm9wZG93bkF1dG9XaWR0aDogdHJ1ZSxcclxufSk7XHJcbiIsIiQoJy5qcy1yZWdpc3RyYXRpb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcmVnaXN0cmF0aW9uJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLWxvZ2luJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI2xvZ2luJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLnNpZ251cF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNpZ251cCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kei1oaWRkZW4taW5wdXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29udGFpbmVyLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXJlZ2lzdHJhdGlvbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgICAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XHJcbn1cclxuIiwiIiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgZml4ZWRFbGVtZW50czogJy5zaWdudXAnLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgICAgaWYoZGVzdGluYXRpb24uaW5kZXggPT0gJzAnKSB7XHJcbiAgICAgICAgJCgnLmZyb250X19iZycpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3ICYmICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==
