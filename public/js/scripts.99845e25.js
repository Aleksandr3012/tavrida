





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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFydC9hcnQuanMiLCJhd2FyZC9hd2FyZC5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZmVhdHVyZS9mZWF0dXJlLmpzIiwiZXZlbnQvZXZlbnQuanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb3JtL2Zvcm0uanMiLCJmcm9udC9mcm9udC5qcyIsImhlYWRlci9oZWFkZXIuanMiLCJoZWFkZXItaW5uZXIvaGVhZGVyLWlubmVyLmpzIiwiaGVhZGxpbmVyL2hlYWRsaW5lci5qcyIsImhlcm8vaGVyby5qcyIsImhpZ2hsaWdodHMvaGlnaGxpZ2h0cy5qcyIsImluZm8vaW5mby5qcyIsImlucHV0L2lucHV0LmpzIiwiaXRlbS9pdGVtLmpzIiwibG9nby9sb2dvLmpzIiwibWFwL21hcC5qcyIsIm1lbnUvbWVudS5qcyIsIm5ld3MvbmV3cy5qcyIsInBhcnQvcGFydC5qcyIsInBhcnRuZXJzL3BhcnRuZXJzLmpzIiwicmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzaWdudXAvc2lnbnVwLmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInN0ZXAvc3RlcC5qcyIsInN1bW1hcnkvc3VtbWFyeS5qcyIsInRlYW0vdGVhbS5qcyIsInRpbWVsaW5lL3RpbWVsaW5lLmpzIiwid3JhcHBlci93cmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiIiwiIiwiIiwiIiwiIiwiLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJykubGVuZ3RoKSB7XHJcbi8vICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKTtcclxuLy8gIGNvbnN0IHBzMiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9faXRlbXMtd3JhcHBlcicpO1xyXG4vL31cclxuIiwiIiwiIiwiXHJcbiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDExOTkgJiYgJCgnLmZlZWRiYWNrX190ZXh0JykubGVuZ3RoKSB7XHJcbiAgJCgnLmZlZWRiYWNrX190ZXh0JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB7XHJcbiAgICAgIHdoZWVsU3BlZWQ6IDAuMSxcclxuICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5oaWdobGlnaHRzX19jb250ZW50JykubGVuZ3RoKSB7XHJcbiAgY29uc3QgaHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5oaWdobGlnaHRzX19jb250ZW50Jywge1xyXG4gICAgYXhpczogJ3knLFxyXG4gICAgd2hlZWxTcGVlZDogMC41LFxyXG4gICAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsIiQoJy5pbmZvX19oZWFkbGluZXJzJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiJCgnLmlucHV0LS1waG9uZScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tcGFzc3BvcnQtc2VyaWVzJykuaW5wdXRtYXNrKFwiOTkgOTlcIik7XHJcblxyXG4kKCcuaW5wdXQtLWNvZGUnKS5pbnB1dG1hc2soXCI5OTktOTk5XCIpO1xyXG4iLCIiLCIiLCIiLCIkKCcubWVudV9fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idG4tLWFjdGl2ZScpO1xyXG4gICQoJy5tZW51X19jb250ZW50JykudG9nZ2xlQ2xhc3MoJ21lbnVfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnNlbGVjdCcpLnNlbGVjdDIoe1xyXG4gIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGRyb3Bkb3duQXV0b1dpZHRoOiB0cnVlLFxyXG59KTtcclxuIiwiJCgnLmpzLXJlZ2lzdHJhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtbG9naW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjbG9naW4nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuc2lnbnVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zaWdudXAnKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lnbnVwJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmR6LWhpZGRlbi1pbnB1dCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jb250YWluZXItaXRlbS1yZW1vdmUnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcmVnaXN0cmF0aW9uJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLWxvZ2luJykubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICAgICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuc2lnbnVwJykubGVuZ3RoKSB7XHJcbiAgY29uc3QgcHMzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWdudXAnKTtcclxufVxyXG4iLCIkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIiLCIkKCcudGltZWxpbmUnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHtcclxuICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICBmaXhlZEVsZW1lbnRzOiAnLnNpZ251cCcsXHJcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICQoJyNmcC1uYXYnKS5hdHRyKCdkYXRhLXNsaWRlJywgZGVzdGluYXRpb24uaW5kZXgpO1xyXG4gICAgICBpZihkZXN0aW5hdGlvbi5pbmRleCA9PSAnMCcpIHtcclxuICAgICAgICAkKCcuZnJvbnRfX2JnJykuZ2V0KDApLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCkge1xyXG5cclxuICAkKCcucGFydG5lcnNfX3Jvdy1jb250ZW50Jykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuIl19
