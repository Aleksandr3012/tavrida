if ($(window).width() > 1199) {

  const slider3 = new ScrollBooster({
    viewport: document.querySelector('.drag__content'),
    content: document.querySelector('.drag'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });
}