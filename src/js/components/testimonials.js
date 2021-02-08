import refs from '../services/refs';
import '../../scss/components/testimonials.scss';

const testimonialsMarkup = testimonialsRef => {
  const template = `
        <div class="testimonials__container container">
          <i class="testimonials__icon"></i>
          <h4 class="testimonials__title title">Testimonials</h4>
          <div class="testimonials__slider owl-carousel owl-theme owl-loaded">
            <div class="slide">
              <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <span class="slide__author">Alex Smith</span>
              <span class="slide__position">EPAM</span>
            </div>

            <div class="slide">
              <p class="slide__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <span class="slide__author">Alex Smith</span>
              <span class="slide__position">Luxoft</span>
            </div>

            <div class="slide">
              <p class="slide__text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <span class="slide__author">Alex Smith</span>
              <span class="slide__position">Envato</span>
            </div>
          </div>
        </div>
      `;

  return testimonialsRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.testimonials) {
  testimonialsMarkup(refs.testimonials);
}
