import '../../services/refs';
import refs from '../../services/refs';
import './stats.scss';

const aboutMarkup = statsRef => {
  const template = `
        <div class="stats__container container">
          <ul class="stats__list">
            <li class="stats__item">
              <h2 class="stats__title">6350</h2>
              <span class="stats__text">Lines Of Code</span>
            </li>
            <li class="stats__item">
              <h2 class="stats__title">1200</h2>
              <span class="stats__text">Files Downloaded</span>
            </li>
            <li class="stats__item">
              <h2 class="stats__title">120</h2>
              <span class="stats__text">Projects Completed</span>
            </li>
            <li class="stats__item">
              <h2 class="stats__title">34</h2>
              <span class="stats__text">Happy Customers</span>
            </li>
          </ul>
        </div>
      `;

  return statsRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.stats) {
  aboutMarkup(refs.stats);
}
