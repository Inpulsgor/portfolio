import refs from '../services/refs';
import '../../scss/components/home.scss';

const homeMarkup = homeRef => {
  const template = `
    <div class="home__container container">
      <h1 class="visually-hidden">Frontend Developer - Personal Portfolio</h1>
      <h2 class="home__title">Love Coding</h2>

      <h3 class="home__headline cd-headline clip">
        <span>I am</span>
          <span class="cd-words-wrapper">
            <b class="is-visible typewriter">Dmytro Smakovskyi</b>
            <b class="typewriter">a Developer</b>
            <b class="typewriter">Freelancer</b>
          </span>
      </h3>
    </div>

    <div class="home__arrow arrow">
      <a class="arrow__link" href="#">
        <i class="arrow__icon"></i>
      </a>
    </div>`;

  return homeRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.home) {
  homeMarkup(refs.home);
}
