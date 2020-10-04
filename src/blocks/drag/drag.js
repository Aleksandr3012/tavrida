if ($(window).width() > 1199) {

  let dragVideo = document.querySelector('.js-drag-video');
  if (dragVideo) {
    const slider4 = new ScrollBooster({
      viewport: dragVideo,
      content: document.querySelector('.js-drag-video-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }

  let dragArtist = document.querySelector('.js-drag-artist1');
  if (dragArtist) {
  
    const slider5 = new ScrollBooster({
      viewport: dragArtist,
      content: document.querySelector('.js-drag-artist1-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }

  let dragArtist2 = document.querySelector('.js-drag-artist2');
  if (dragArtist2) {
    const slider6 = new ScrollBooster({
      viewport: dragArtist2,
      content: document.querySelector('.js-drag-artist2-content'),
      scrollMode: 'transform',
      direction: 'horizontal',
    });
  }
}
