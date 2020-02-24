$('.js-registration').click(function(e) {
  e.preventDefault();
  $('.signup').fadeIn('fast');
});

$('.signup__close').click(function(e) {
  e.preventDefault();
  $('.signup').fadeOut('fast');
});
