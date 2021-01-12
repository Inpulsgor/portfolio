import refs from '../../services/refs';
import './home.scss';

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

        </div>`;

  return homeRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.home) {
  //   homeMarkup(refs.home);
}
