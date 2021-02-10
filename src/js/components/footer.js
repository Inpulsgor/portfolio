import refs from '../services/refs';
import '../../scss/components/footer.scss';

const footerMarkup = footerRef => {
  const template = `<span class="footer__copy">Copyright © All Rights Reserved</span>`;

  return footerRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.footer) {
  footerMarkup(refs.footer);
}
