$('.js-registration').click(function (e) {
  e.preventDefault();
  $('.signup').fadeIn('fast');
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
  if ($(e.target).closest('.signup').length === 0 && $(e.target).closest('.js-registration').length === 0) {
    $('.signup').fadeOut('fast');
    $('.wrapper').removeClass('wrapper--popup');
  $('body').removeClass('body--popup');
  }
});

if ($(window).width() > 992 && $('.signup').length) {
  const ps3 = new PerfectScrollbar('.signup');
}
