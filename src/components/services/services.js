import refs from '../../services/refs';
import './services.scss';

const aboutMarkup = servicesRef => {
  const template = `
        <div class="services__container container">
          <h4 class="services__title title">Services</h4>
          <ul class="services__list">
            <li class="services__item service">
              <h6 class="service__title service__title_development">Development</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
            <li class="services__item service">
              <h6 class="service__title service__title_responsive">Responsive Design</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
            <li class="services__item service">
              <h6 class="service__title service__title_code">Dry Code</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
            <li class="services__item service">
              <h6 class="service__title service__title_support">Customer Support</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
            <li class="services__item service">
              <h6 class="service__title service__title_design">Web Design</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
            <li class="services__item service">
              <h6 class="service__title service__title_branding">Branding</h6>
              <p class="service__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                tenetur
                quasi inventore quod laborum nostrum?</p>
            </li>
          </ul>
        </div>`;

  return servicesRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.services) {
  aboutMarkup(refs.services);
}
