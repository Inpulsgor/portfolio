import Masonry from 'masonry-layout';
import refs from '../../services/refs';
import './portfolio.scss';

window.onload = () => {
  const grid = document.querySelector('.grid');

  const masonry = new Masonry(grid, {
    // itemSelector: 'grid-item',
    gutter: 10,
    originLeft: false,
    originTop: false,
  });
};
