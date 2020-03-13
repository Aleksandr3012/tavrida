





if ($(window).width() > 992 && $('.content__events-wrapper').length) {
  const ps = new PerfectScrollbar('.content__events-wrapper');
  const ps2 = new PerfectScrollbar('.content__items-wrapper');
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
  if ($(e.target).closest('.signup').length === 0 && $(e.target).closest('.js-registration').length === 0 && $(e.target).closest('.js-login').length === 0) {
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
    normalScrollElements: '.content__festival .content__forum',
    fixedElements: '.signup',
    onLeave: function (origin, destination, direction) {
      $('#fp-nav').attr('data-slide', destination.index);
    }
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFydC9hcnQuanMiLCJhd2FyZC9hd2FyZC5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImV2ZW50L2V2ZW50LmpzIiwiZmVhdHVyZS9mZWF0dXJlLmpzIiwiZmVlZGJhY2svZmVlZGJhY2suanMiLCJmb290ZXIvZm9vdGVyLmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwiaGVhZGVyLWlubmVyL2hlYWRlci1pbm5lci5qcyIsImhlYWRsaW5lci9oZWFkbGluZXIuanMiLCJpbmZvL2luZm8uanMiLCJpbnB1dC9pbnB1dC5qcyIsIml0ZW0vaXRlbS5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0bmVycy9wYXJ0bmVycy5qcyIsInJlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMiLCJzZWN0aW9uL3NlY3Rpb24uanMiLCJzZWxlY3Qvc2VsZWN0LmpzIiwic2lnbnVwL3NpZ251cC5qcyIsInNsaWRlci9zbGlkZXIuanMiLCJzb2NpYWxzL3NvY2lhbHMuanMiLCJ0aW1lbGluZS90aW1lbGluZS5qcyIsIndyYXBwZXIvd3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiIsIiIsIiIsIiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKS5sZW5ndGgpIHtcclxuICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKTtcclxuICBjb25zdCBwczIgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmNvbnRlbnRfX2l0ZW1zLXdyYXBwZXInKTtcclxufVxyXG4iLCJcclxuIiwiIiwiIiwiIiwiIiwiXHJcbiIsIiIsIiIsIiIsIiQoJy5pbmZvX19oZWFkbGluZXJzJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiJCgnLmlucHV0LS1waG9uZScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tcGFzc3BvcnQtc2VyaWVzJykuaW5wdXRtYXNrKFwiOTkgOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLWNvZGUnKS5pbnB1dG1hc2soXCI5OTktOTk5XCIpO1xyXG4iLCIiLCIiLCIiLCIkKCcubWVudV9fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idG4tLWFjdGl2ZScpO1xyXG4gICQoJy5tZW51X19jb250ZW50JykudG9nZ2xlQ2xhc3MoJ21lbnVfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnNlbGVjdCcpLnNlbGVjdDIoe1xyXG4gIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGRyb3Bkb3duQXV0b1dpZHRoOiB0cnVlLFxyXG59KTtcclxuIiwiJCgnLmpzLXJlZ2lzdHJhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtbG9naW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjbG9naW4nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuc2lnbnVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNpZ251cCcpLmxlbmd0aCA9PT0gMCAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcmVnaXN0cmF0aW9uJykubGVuZ3RoID09PSAwICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XHJcbn1cclxuIiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG59KTtcclxuIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6ICcuY29udGVudF9fZmVzdGl2YWwgLmNvbnRlbnRfX2ZvcnVtJyxcclxuICAgIGZpeGVkRWxlbWVudHM6ICcuc2lnbnVwJyxcclxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uIChvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pIHtcclxuICAgICAgJCgnI2ZwLW5hdicpLmF0dHIoJ2RhdGEtc2xpZGUnLCBkZXN0aW5hdGlvbi5pbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl19
