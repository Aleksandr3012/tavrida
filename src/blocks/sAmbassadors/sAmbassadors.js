let dragAmb = document.querySelector('.js-drag-amb');
if (dragAmb) {

  const slider5 = new ScrollBooster({
    viewport: dragAmb,
    content: document.querySelector('.js-drag-amb-content'),
    scrollMode: 'transform',
    direction: 'horizontal',
  });
}
