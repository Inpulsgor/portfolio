import refs from '../services/refs';
import '../../scss/components/contact.scss';

const contactMarkup = contactRef => {
  const template = `
        <div class="contact__container container">

          <div class="contact__heading heading">
            <h4 class="contact__title title">Get in Touch</h4>
            <span class="title__sub">Contact</span>
          </div>

          <div class="contact__content">
            <form class="contact__form form">
              <h2 class="form__title">Message Me</h2>
              <div class="form__group">
                <input class="form__input" type="text" id="name" placeholder=" ">
                <label class="form__label" for="name">Name *</label>
              </div>
              <div class="form__group">
                <input class="form__input" type="text" id="email" placeholder=" ">
                <label class="form__label" for="email">Email *</label>
              </div>
              <div class="form__group">
                <input class="form__input" type="text" id="subject" placeholder=" ">
                <label class="form__label" for="subject">Subject</label>
              </div>
              <textarea class="form__textarea" name="message" id="message" cols="30" rows="5" spellcheck="false"
                placeholder="Message *" required></textarea>
              <button type="submit" class="form__button">Send Message</button>
            </form>

            <div class="contact__info contact-info">
              <h4 class="contact-info__title form__title">Contact Info</h4>
              <p class="contact-info__description">Always available for freelance work if the right project comes along,
                Feel
                free to contact me!</p>
              <ul class="contact-info__list">

                <li class="contact-info__item details details-name">
                  <div class="details__group">
                    <span class="details__title">Name</span>
                    <span class="details__descr">Dmytro Smakovskyi</span>
                  </div>
                </li>

                <li class="contact-info__item details details-location">
                  <div class="details__group">
                    <span class="details__title">Location</span>
                    <span class="details__descr">Kyiv, Ukraine</span>
                  </div>
                </li>

                <li class="contact-info__item details details-phone">
                  <div class="details__group">
                    <span class="details__title">Call Me</span>
                    <span class="details__descr">+38 (097) 128 38 75</span>
                  </div>
                </li>

                <li class="contact-info__item details details-email">
                  <div class="details__group">
                    <span class="details__title">Email Me</span>
                    <span class="details__descr">dmsmakovskyi@gmail.com</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>

        </div>
      `;

  return contactRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.contact) {
  contactMarkup(refs.contact);
}
