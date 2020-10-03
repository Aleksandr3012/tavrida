if ($(window).width() > 1199) {

  const slider4 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-video'),
    content: document.querySelector('.js-drag-video-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });

  const slider5 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-artist1'),
    content: document.querySelector('.js-drag-artist1-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });

  const slider6 = new ScrollBooster({
    viewport: document.querySelector('.js-drag-artist2'),
    content: document.querySelector('.js-drag-artist2-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });
}