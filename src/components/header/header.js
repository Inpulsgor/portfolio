import refs from '../../services/refs';
import './header.scss';

const headerMarkup = headerRef => {
  const template = `
  <div class="header__container container">
    <!-- logo -->
    <a class="header__logo" href="#">DMs</a>
    <!-- navbar -->
    <nav class="header__nav nav">
        <ul class="nav__list">
            <li class="nav__item">
                <a href="" class="nav__link active">Home</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">About</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">Services</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">Portfolio</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">Testimonials</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">Blog</a>
            </li>
            <li class="nav__item">
                <a href="" class="nav__link">Contact</a>
            </li>
        </ul>
    </nav>
</div>`;

  return headerRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.header) {
  headerMarkup(refs.header);
}
