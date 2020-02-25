$('.js-registration').click(function (e) {
  e.preventDefault();
  $('.signup').fadeIn('fast');
  $('.wrapper').addClass('wrapper--popup');
});

$('.signup__close').click(function (e) {
  e.preventDefault();
  $('.signup').fadeOut('fast');
  $('.wrapper').removeClass('wrapper--popup');
});

$(document).click(function (e) {
  if ($(e.target).closest('.signup').length === 0 && $(e.target).closest('.js-registration').length === 0) {
    $('.signup').fadeOut('fast');
    $('.wrapper').removeClass('wrapper--popup');
  }
});
