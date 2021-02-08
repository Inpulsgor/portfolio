import refs from '../services/refs';
import '../../scss/components/portfolio.scss';
// import Masonry from 'masonry-layout';

const portfolioMarkup = portfolioRef => {
  const template = `
        <div class="portfolio__container container">
        
          <h4 class="portfolio__title title">Portfolio</h4>

          <div class="portfolio__categories category">
            <ul class="category__list">
              <li class="category__item">
                <button class="category__btn category__btn_active">All</button>
              </li>
              <li class="category__item">
                <button class="category__btn">Landing</button>
              </li>
              <li class="category__item">
                <button class="category__btn">App</button>
              </li>
              <li class="category__item">
                <button class="category__btn">Design</button>
              </li>
            </ul>
          </div>

          <div class="portfolio__gallery gallery">
            <div class="gallery__grid grid">
              <figure class="gallery__item grid-item grid-item--1">
                <img class="gallery__img" src="./assets/desk.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>

              <figure class="gallery__item grid-item grid-item--2">
                <img class="gallery__img" src="./assets/profile.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>

              <figure class="gallery__item grid-item grid-item--3">
                <img class="gallery__img" src="./assets/stats-bg.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>

              <figure class="gallery__item grid-item grid-item--4">
                <img class="gallery__img" src="./assets/stats-bg.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>

              <figure class="gallery__item grid-item grid-item--5">
                <img class="gallery__img" src="./assets/desk.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>

              <figure class="gallery__item grid-item grid-item--6">
                <img class="gallery__img" src="./assets/profile.jpg" alt="">
                <div class="gallery__overlay">
                  <div class="gallery__info">
                    <h6>Design . Motion</h6>
                    <h5>Crearive Design</h5>
                  </div>
                  <a class="gallery__link" href="#"></a>
                </div>
              </figure>
            </div>
          </div>

        </div>`;

  return portfolioRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.portfolio) {
  portfolioMarkup(refs.portfolio);
}

// window.onload = () => {
//   const grid = document.querySelector('.grid');

//   const masonry = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     gutter: 10,
//     percentPosition: true,
//     // resize: false,
//     // originLeft: false,
//     // originTop: false,
//   });
// };
