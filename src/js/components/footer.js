import refs from '../services/refs';
import '../../scss/components/footer.scss';

const aboutMarkup = footerRef => {
  const template = `<span class="footer__copy">Copyright © All Rights Reserved</span>`;

  return footerRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.footer) {
  aboutMarkup(refs.footer);
}
