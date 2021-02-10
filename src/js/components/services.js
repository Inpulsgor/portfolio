import refs from '../services/refs';
import '../../scss/components/services.scss';

const servicesMarkup = servicesRef => {
  const template = `
        <div class="services__container container">

          <div class="services__heading heading">
            <h4 class="services__title title">My Services</h4>
            <span class="title__sub">Services</span>
          </div>

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
  servicesMarkup(refs.services);
}
