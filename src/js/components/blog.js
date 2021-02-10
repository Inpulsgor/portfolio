import refs from '../services/refs';
import '../../scss/components/blog.scss';

const blogMarkup = blogRef => {
  const template = `
        <div class="blog__container container">

          <div class="blog__heading heading">
            <h4 class="blog__title title">Blog</h4>
            <span class="title__sub">articles</span>
          </div>

          <div class="blog__slider owl-carousel owl-theme">
            <div class="blog__card card">
              <header class="card__header">
                <img src=${require('../../assets/news.jpg')} alt="personal blog image">
              </header>

              <article class="card__content">
                <h5 class="card__content-title">The Best WordPress Real Estate Themes & Plugins</h5>
                <p class="card__content-text">Real estate is an uber-competitive marketplace full of businesses
                  competing for the same set of
                  consumers. They're all
                  looking for …</p>
              </article>

              <footer class="card__footer">
                <a class="card__footer-link" href="#">Read More</a>
                <span class="card__footer-trends">Trends</span>
              </footer>
            </div>

            <div class="blog__card card">
              <header class="card__header">
                <img src=${require('../../assets/news.jpg')} alt="personal blog image">
              </header>

              <article class="card__content">
                <h5 class="card__content-title">The Best WordPress Real Estate Themes & Plugins</h5>
                <p class="card__content-text">Real estate is an uber-competitive marketplace full of businesses
                  competing for the same set of
                  consumers. They're all
                  looking for …</p>
              </article>

              <footer class="card__footer">
                <a class="card__footer-link" href="#">Read More</a>
                <span class="card__footer-trends">Trends</span>
              </footer>
            </div>

            <div class="blog__card card">
              <header class="card__header">
                <img src=${require('../../assets/news.jpg')} alt="personal blog image">
              </header>

              <article class="card__content">
                <h5 class="card__content-title">The Best WordPress Real Estate Themes & Plugins</h5>
                <p class="card__content-text">Real estate is an uber-competitive marketplace full of businesses
                  competing for the same set of
                  consumers. They're all
                  looking for …</p>
              </article>

              <footer class="card__footer">
                <a class="card__footer-link" href="#">Read More</a>
                <span class="card__footer-trends">Trends</span>
              </footer>
            </div>
          </div>
        </div>
      `;

  return blogRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.blog) {
  blogMarkup(refs.blog);
}
