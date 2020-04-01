





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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFudGFnZXMvYWR2YW50YWdlcy5qcyIsImFib3V0L2Fib3V0LmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFydC9hcnQuanMiLCJhd2FyZC9hd2FyZC5qcyIsImNvbnRlbnQvY29udGVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZG9jdW1lbnQvZG9jdW1lbnQuanMiLCJldmVudC9ldmVudC5qcyIsImZhcS9mYXEuanMiLCJmZWF0dXJlL2ZlYXR1cmUuanMiLCJmZWVkYmFjay9mZWVkYmFjay5qcyIsImZpZWxkL2ZpZWxkLmpzIiwiZmxvdy9mbG93LmpzIiwiZm9vdGVyL2Zvb3Rlci5qcyIsImZvcm0vZm9ybS5qcyIsImZyb250L2Zyb250LmpzIiwiaGVhZGVyL2hlYWRlci5qcyIsImhlYWRlci1pbm5lci9oZWFkZXItaW5uZXIuanMiLCJoZWFkbGluZXIvaGVhZGxpbmVyLmpzIiwiaGVyby9oZXJvLmpzIiwiaGlnaGxpZ2h0cy9oaWdobGlnaHRzLmpzIiwiaW5mby9pbmZvLmpzIiwiaW5wdXQvaW5wdXQuanMiLCJpdGVtL2l0ZW0uanMiLCJpdGVtLXNsaWRlci9pdGVtLXNsaWRlci5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVycy9wYXJ0bmVycy5qcyIsInF1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwicmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzaWdudXAvc2lnbnVwLmpzIiwic2xpZGVyL3NsaWRlci5qcyIsInNvY2lhbHMvc29jaWFscy5qcyIsInN0ZXAvc3RlcC5qcyIsInN0b3J5L3N0b3J5LmpzIiwic3VtbWFyeS9zdW1tYXJ5LmpzIiwidGVhbS90ZWFtLmpzIiwidGltZWxpbmUvdGltZWxpbmUuanMiLCJ3cmFwcGVyL3dyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FDQUE7QUNBQTtBQUNBO0FDREE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIiLCIiLCIiLCIiLCIiLCIvL2lmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MiAmJiAkKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKS5sZW5ndGgpIHtcclxuLy8gIGNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19ldmVudHMtd3JhcHBlcicpO1xyXG4vLyAgY29uc3QgcHMyID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jb250ZW50X19pdGVtcy13cmFwcGVyJyk7XHJcbi8vfVxyXG4iLCIiLCIiLCJcclxuIiwiIiwiIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gMTE5OSAmJiAkKCcuZmVlZGJhY2tfX3RleHQnKS5sZW5ndGgpIHtcclxuICAkKCcuZmVlZGJhY2tfX3RleHQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHtcclxuICAgICAgd2hlZWxTcGVlZDogMC4xLFxyXG4gICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfSlcclxufVxyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmhpZ2hsaWdodHNfX2NvbnRlbnQnKS5sZW5ndGgpIHtcclxuICBjb25zdCBocHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLmhpZ2hsaWdodHNfX2NvbnRlbnQnLCB7XHJcbiAgICBheGlzOiAneScsXHJcbiAgICB3aGVlbFNwZWVkOiAwLjUsXHJcbiAgICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwiJCgnLmluZm9fX2hlYWRsaW5lcnMnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCIkKCcuaW5wdXQtLXBob25lJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1wYXNzcG9ydC1zZXJpZXMnKS5pbnB1dG1hc2soXCI5OSA5OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tY29kZScpLmlucHV0bWFzayhcIjk5OS05OTlcIik7XHJcbiIsIiIsIiQoJy5pdGVtLXNsaWRlcicpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pXHJcbiIsIiIsIiIsIiQoJy5tZW51X19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2J0bi0tYWN0aXZlJyk7XHJcbiAgJCgnLm1lbnVfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnbWVudV9fY29udGVudC0tYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIiLCIkKCcucXVlc3Rpb25fX2hlYWRlcicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS50b2dnbGVDbGFzcygncXVlc3Rpb24tLWFjdGl2ZScpO1xyXG4gICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykuZmluZCgnLnF1ZXN0aW9uX19jb250ZW50Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxufSk7XHJcbiIsIiIsIiIsIiQoJy5zZWxlY3QnKS5zZWxlY3QyKHtcclxuICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBkcm9wZG93bkF1dG9XaWR0aDogdHJ1ZSxcclxufSk7XHJcbiIsIiQoJy5qcy1yZWdpc3RyYXRpb24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcmVnaXN0cmF0aW9uJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLWxvZ2luJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI2xvZ2luJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLnNpZ251cF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNpZ251cCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kei1oaWRkZW4taW5wdXQnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29udGFpbmVyLWl0ZW0tcmVtb3ZlJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXJlZ2lzdHJhdGlvbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1sb2dpbicpLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgICAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLnNpZ251cCcpLmxlbmd0aCkge1xyXG4gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XHJcbn1cclxuIiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG59KTtcclxuIiwiIiwiIiwiIiwiIiwiIiwiJCgnLnRpbWVsaW5lJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgYXhpczogXCJ4XCIsXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuIiwiaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyKSB7XHJcbiAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgZml4ZWRFbGVtZW50czogJy5zaWdudXAnLFxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAkKCcjZnAtbmF2JykuYXR0cignZGF0YS1zbGlkZScsIGRlc3RpbmF0aW9uLmluZGV4KTtcclxuICAgICAgaWYoZGVzdGluYXRpb24uaW5kZXggPT0gJzAnKSB7XHJcbiAgICAgICAgJCgnLmZyb250X19iZycpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3ICYmICQoJy5wYXJ0bmVyc19fcm93LWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHJcbiAgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==
