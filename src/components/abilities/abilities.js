import refs from '../../services/refs';
import './abilities.scss';

const abilitiesMarkup = abilitiesRef => {
  const template = `
    <div class="abilities__container container">

          <div class="abilities__education education">
            <span class="education__icon icon"></span>
            <h5 class="education__title title">Education</h5>
            <ul class="education__list">

              <li class="education__item">
                <h6 class="subtitle">Ternopil Economic University</h6>
                <span class="subtext">Master of Economics</span>
              </li>

              <li class="education__item">
                <h6 class="subtitle">Kyiv GoIT Academy</h6>
                <span class="subtext">Frone-end developer</span>
              </li>

              <li class="education__item">
                <h6 class="subtitle">Kyiv GoIT Academy</h6>
                <span class="subtext">Frone-end developer</span>
              </li>

            </ul>
          </div>

          <div class="abilities__experience experience">
            <span class="experience__icon icon"></span>
            <h5 class="experience__title title">Experience</h5>
            <ul class="experience__list">

              <li class="experience__item">
                <h6 class="subtitle">Production Engineer</h6>
                <span class="subtext">Intelligent Lecterns</span>
              </li>

              <li class="experience__item">
                <h6 class="subtitle">Front-End Developer</h6>
                <span class="subtext">UpWork</span>
              </li>

              <li class="experience__item">
                <h6 class="subtitle">Kyiv GoIT Academy</h6>
                <span class="subtext">Frone-end developer</span>
              </li>

            </ul>
          </div>

          <div class="abilities__skills skills">
            <span class="skills__icon icon"></span>
            <h5 class="skills__title title">Performance</h5>

            <div class="skills__bar">
              <div class="bar">
                <div class="bar__info">
                  <span class="bar__text">Markup</span>
                </div>
                <div class="bar__progress">
                  <span class="bar__progress_inner markup"></span>
                </div>
              </div>

              <div class="bar">
                <div class="bar__info">
                  <span class="bar__text">JavaScript</span>
                </div>
                <div class="bar__progress">
                  <span class="bar__progress_inner js"></span>
                </div>
              </div>

              <div class="bar">
                <div class="bar__info">
                  <span class="bar__text">TypeScript</span>
                </div>
                <div class="bar__progress">
                  <span class="bar__progress_inner ts"></span>
                </div>
              </div>

              <div class="bar">
                <div class="bar__info">
                  <span class="bar__text">React.js</span>
                </div>
                <div class="bar__progress">
                  <span class="bar__progress_inner react"></span>
                </div>
              </div>

            </div>
          </div>
        </div>`;

  return abilitiesRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.abilities) {
  abilitiesMarkup(refs.abilities);
}
