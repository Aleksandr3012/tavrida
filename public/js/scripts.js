







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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmpzIiwiYWR2YW50YWdlcy9hZHZhbnRhZ2VzLmpzIiwiYW50aS9hbnRpLmpzIiwiYW50aS1saXN0L2FudGktbGlzdC5qcyIsImFydC9hcnQuanMiLCJhcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmpzIiwiYXdhcmQvYXdhcmQuanMiLCJjYWJpbmV0L2NhYmluZXQuanMiLCJjb250ZW50L2NvbnRlbnQuanMiLCJkb2N1bWVudC9kb2N1bWVudC5qcyIsImRhdGVzL2RhdGVzLmpzIiwiZXZlbnQvZXZlbnQuanMiLCJmYXEvZmFxLmpzIiwiZmVlZGJhY2svZmVlZGJhY2suanMiLCJmZWF0dXJlL2ZlYXR1cmUuanMiLCJmaWVsZC9maWVsZC5qcyIsImZsb3cvZmxvdy5qcyIsImZvb3Rlci9mb290ZXIuanMiLCJmb290ZXItc2hvcnQvZm9vdGVyLXNob3J0LmpzIiwiZm9ybS9mb3JtLmpzIiwiZnJvbnQvZnJvbnQuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwiaGVhZGVyLWlubmVyL2hlYWRlci1pbm5lci5qcyIsImhlYWRsaW5lci9oZWFkbGluZXIuanMiLCJoZXJvL2hlcm8uanMiLCJoaWdobGlnaHRzL2hpZ2hsaWdodHMuanMiLCJpbmZvL2luZm8uanMiLCJpbnB1dC9pbnB1dC5qcyIsIml0ZW0vaXRlbS5qcyIsIml0ZW0tc2xpZGVyL2l0ZW0tc2xpZGVyLmpzIiwibGluay1iYWNrL2xpbmstYmFjay5qcyIsImxvZ28vbG9nby5qcyIsIm1hcC9tYXAuanMiLCJtZW51L21lbnUuanMiLCJuZXdzL25ld3MuanMiLCJwYXJ0L3BhcnQuanMiLCJwYXJ0bmVyLXNlY3Rpb24vcGFydG5lci1zZWN0aW9uLmpzIiwicGFydG5lcnMvcGFydG5lcnMuanMiLCJwYXJ0aWNpcGF0aW9uL3BhcnRpY2lwYXRpb24uanMiLCJwYXJ0bmVycy1saXN0L3BhcnRuZXJzLWxpc3QuanMiLCJyZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwicXVlc3Rpb24vcXVlc3Rpb24uanMiLCJwYXJ0bmVyc2hpcC9wYXJ0bmVyc2hpcC5qcyIsInNlY3Rpb24vc2VjdGlvbi5qcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzbGlkZXIvc2xpZGVyLmpzIiwic3Rvcnkvc3RvcnkuanMiLCJzdGVwL3N0ZXAuanMiLCJzdW1tYXJ5L3N1bW1hcnkuanMiLCJzb2NpYWxzL3NvY2lhbHMuanMiLCJ0ZWFtL3RlYW0uanMiLCJ0aW1lbGluZS90aW1lbGluZS5qcyIsIndyYXBwZXIvd3JhcHBlci5qcyIsInNpZ251cC9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FDQUE7QUFDQTtBQ0RBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FDQUE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUNBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiLy9pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgJiYgJCgnLmNvbnRlbnRfX2V2ZW50cy13cmFwcGVyJykubGVuZ3RoKSB7XHJcbi8vICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9fZXZlbnRzLXdyYXBwZXInKTtcclxuLy8gIGNvbnN0IHBzMiA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuY29udGVudF9faXRlbXMtd3JhcHBlcicpO1xyXG4vL31cclxuIiwiIiwiIiwiXHJcbiIsIiIsImlmICgkKHdpbmRvdykud2lkdGgoKSA+IDExOTkgJiYgJCgnLmZlZWRiYWNrX190ZXh0JykubGVuZ3RoKSB7XHJcbiAgJCgnLmZlZWRiYWNrX190ZXh0JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB7XHJcbiAgICAgIHdoZWVsU3BlZWQ6IDAuMSxcclxuICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiIiwiaFRpdGxlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5oaWdobGlnaHRzX19hcnRpY2xlLXRpdGxlXCIpLmNzcygnbWluLWhlaWdodCcsICcnKVxyXG4gIG1heEhlaWdodCA9IDA7XHJcbiAgdmFyIGhlaWdodHMgPSAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkKHRoaXMpLmhlaWdodCgpO1xyXG4gIH0pLmdldCgpO1xyXG5cclxuICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuICAkKFwiLmhpZ2hsaWdodHNfX2FydGljbGUtdGl0bGVcIikuY3NzKCdtaW4taGVpZ2h0JywgbWF4SGVpZ2h0KTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICBoVGl0bGVIZWlnaHQoKTtcclxufSlcclxuIiwiJCgnLmluZm9fX2hlYWRsaW5lcnMnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCIkKCcuaW5wdXQtLXBob25lJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xyXG5cclxuJCgnLmlucHV0LS1wYXNzcG9ydC1zZXJpZXMnKS5pbnB1dG1hc2soXCI5OSA5OVwiKTtcclxuXHJcbiQoJy5pbnB1dC0tY29kZScpLmlucHV0bWFzayhcIjk5OS05OTlcIik7XHJcbiIsIiIsIiQoJy5pdGVtLXNsaWRlcicpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pXHJcbiIsIiIsIiIsIiIsIiQoJy5tZW51X19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2J0bi0tYWN0aXZlJyk7XHJcbiAgJCgnLm1lbnVfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnbWVudV9fY29udGVudC0tYWN0aXZlJyk7XHJcbn0pO1xyXG4iLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIkKCcucXVlc3Rpb25fX2hlYWRlcicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb24nKS50b2dnbGVDbGFzcygncXVlc3Rpb24tLWFjdGl2ZScpO1xyXG4gICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykuZmluZCgnLnF1ZXN0aW9uX19jb250ZW50Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxufSk7XHJcbiIsIiIsIiIsIiQoJy5zZWxlY3QnKS5zZWxlY3QyKHtcclxuICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTEsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBkcm9wZG93bkF1dG9XaWR0aDogdHJ1ZSxcclxufSk7XHJcbiIsIiQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHZhcmlhYmxlV2lkdGg6IHRydWVcclxufSk7XHJcbiIsIiIsIi8vdmFyIGhlaWdodHMgPSAkKFwiLnN0ZXBfX2hlYWRlclwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4vLyAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbi8vfSkuZ2V0KCk7XHJcbi8vXHJcbi8vbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbi8vY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuLy8kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG5cclxuLy8kKCcudGVhbV9fc3RlcHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4vLyAgdmFyIGhlaWdodHMgPSAkKHRoaXMpLmZpbmQoJy5zdGVwX19oZWFkZXInKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICByZXR1cm4gJCh0aGlzKS5oZWlnaHQoKTtcclxuLy8gIH0pLmdldCgpO1xyXG4vLyAgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XHJcbi8vICBjb25zb2xlLmxvZyhtYXhIZWlnaHQpO1xyXG4vLyAgJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG4vL30pO1xyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcclxuICAgICQoJy5zdGVwX19oZWFkZXInKS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICAkKCcudGVhbV9fc3RlcHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaGVpZ2h0cyA9ICQodGhpcykuZmluZCgnLnN0ZXBfX2hlYWRlcicpLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgIH0pLmdldCgpO1xyXG4gICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcclxuICAgICAgY29uc29sZS5sb2cobWF4SGVpZ2h0KTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuc3RlcF9faGVhZGVyJykuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG4iLCIiLCIiLCIiLCIkKCcudGltZWxpbmUnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICBheGlzOiBcInhcIixcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGU6IHRydWVcclxuICB9XHJcbn0pO1xyXG4iLCJpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHtcclxuICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICBmaXhlZEVsZW1lbnRzOiAnLnNpZ251cCcsXHJcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICQoJyNmcC1uYXYnKS5hdHRyKCdkYXRhLXNsaWRlJywgZGVzdGluYXRpb24uaW5kZXgpO1xyXG4gICAgICBpZihkZXN0aW5hdGlvbi5pbmRleCA9PSAnMCcpIHtcclxuICAgICAgICAkKCcuZnJvbnRfX2JnJykuZ2V0KDApLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgJCgnLnBhcnRuZXJzX19yb3ctY29udGVudCcpLmxlbmd0aCkge1xyXG5cclxuICAkKCcucGFydG5lcnNfX3Jvdy1jb250ZW50Jykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuIiwiJCgnLmpzLXJlZ2lzdHJhdGlvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNyZWdpc3RyYXRpb24nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtbG9naW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjbG9naW4nKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKCcuanMtcGFydG5lci1nZW5lcmFsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnI3BhcnRuZXItZ2VuZXJhbCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLW1hcmtldCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJyNwYXJ0bmVyLW1hcmtldCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5qcy1wYXJ0bmVyLWZvb2QnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1mb29kJykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgJCgnLndyYXBwZXInKS5hZGRDbGFzcygnd3JhcHBlci0tcG9wdXAnKTtcclxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktLXBvcHVwJyk7XHJcbn0pO1xyXG5cclxuJCgnLmpzLXBhcnRuZXItcm9vbXMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcjcGFydG5lci1yb29tcycpLmZhZGVJbignZmFzdCcpO1xyXG4gICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG59KTtcclxuXHJcbiQoJy5zaWdudXBfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJCgnLnNpZ251cCcpLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyLS1wb3B1cCcpO1xyXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9keS0tcG9wdXAnKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWdudXAnKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHotaGlkZGVuLWlucHV0JykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmNvbnRhaW5lci1pdGVtLXJlbW92ZScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sYW5ndWFnZS1pdGVtLXJlbW92ZScpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1yZWdpc3RyYXRpb24nKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtbG9naW4nKS5sZW5ndGggPT09IDBcclxuICAgICAgICAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtcGFydG5lci1nZW5lcmFsJykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItbWFya2V0JykubGVuZ3RoID09PSAwXHJcbiAgICAgICAgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLXBhcnRuZXItZm9vZCcpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5qcy1wYXJ0bmVyLXJvb21zJykubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgICAkKCcuc2lnbnVwJykuZmFkZU91dCgnZmFzdCcpO1xyXG4gICAgICAgICQoJy53cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItLXBvcHVwJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LS1wb3B1cCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5zaWdudXAnKS5sZW5ndGgpIHtcclxuLy8gIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lnbnVwJyk7XHJcbi8vfVxyXG5cclxuaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkyICYmICQoJy5zaWdudXAnKS5sZW5ndGgpIHtcclxuICAkKCcuc2lnbnVwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBzMyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKHRoaXMpO1xyXG4gIH0pXHJcbn1cclxuIl19
