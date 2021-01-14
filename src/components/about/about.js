import refs from '../../services/refs';
import './about.scss';

const aboutMarkup = aboutRef => {
  const template = `
        <div class="about__container container">

          <div class="about__photo photo">
            <div class="photo__container">
              <picture>
                <img class="photo__image" src=${require('../../assets/profile.jpg')} alt="profile image">
              </picture>
            </div>
          </div>

          <div class="about__content content">
            <h3 class="content__title">I'm JS / React Developer</h3>

            <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat dolor
              expedita totam libero ducimus et illum, numquam error, cupiditate aliquid vero consequuntur ea veritatis
              dolore nisi sapiente deleniti, commodi dolorum dolores maiores delectus?
            </p>

            <p class="content__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minus
              tempore alias asperiores temporibus doloremque nulla reprehenderit molestias architecto dicta vitae
              eligendi repellat, nihil, quas dolore porro.
            </p>

            <ul class="content__list social">
              <li class="social__item">
                <a href="https://www.facebook.com/dmsmakovskyi" target="_blank" class="social__link">
                  <svg class="social__icon facebook" enable-background="new 0 0 155.139 155.139" version="1.1" viewBox="0 0 155.14 155.14" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	                  <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a href="https://twitter.com/dmsmakovskyi" target="_blank" class="social__link">
                  <svg class="social__icon twitter" viewBox="-21 -81 681.33 681" xmlns="http://www.w3.org/2000/svg">
                    <path d="m200.96 515.29c241.05 0 372.87-199.7 372.87-372.87 0-5.6719-0.11719-11.32-0.37109-16.938 25.586-18.5 47.824-41.586 65.371-67.863-23.48 10.441-48.754 17.461-75.258 20.637 27.055-16.23 47.828-41.895 57.625-72.488-25.32 15.012-53.363 25.918-83.215 31.809-23.914-25.473-57.965-41.402-95.664-41.402-72.367 0-131.06 58.688-131.06 131.03 0 10.289 1.1523 20.289 3.3984 29.883-108.92-5.4805-205.5-57.625-270.13-136.92-11.25 19.363-17.742 41.863-17.742 65.871 0 45.461 23.137 85.605 58.316 109.08-21.5-0.66016-41.695-6.5625-59.352-16.387-0.019531 0.55078-0.019531 1.0859-0.019531 1.6719 0 63.469 45.172 116.46 105.14 128.47-11.016 2.9961-22.605 4.6094-34.559 4.6094-8.4297 0-16.648-0.82812-24.633-2.3633 16.684 52.07 65.066 89.961 122.43 91.023-44.855 35.156-101.36 56.098-162.77 56.098-10.562 0-21.004-0.60547-31.262-1.8164 58 37.176 126.87 58.871 200.89 58.871"/>
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a href="https://www.instagram.com/dmsmakovskyi_" target="_blank" class="social__link">
                  <svg class="social__icon instagram" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48    h192c61.76,0,112,50.24,112,112V352z" />
                    <path
                    d="m256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z" />
                    <circle cx="393.6" cy="118.4" r="17.056" />
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a href="https://www.linkedin.com/in/dmsmakovskyi" target="_blank" class="social__link">
                  <svg class="social__icon linkedin" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/>
                    <path d="m.396 7.977h4.976v16.023h-4.976z"/>
                    <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/>
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a href="https://github.com/Inpulsgor" target="_blank" class="social__link">
                  <svg class="social__icon github" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="m255.97 5.329c-141.34 0-255.97 115.07-255.97 257.02 0 113.54 73.344 209.86 175.1 243.87 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-0.224-22.272-0.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.61-28.544-116.61-127.01 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728 0.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.45-116.86 126.82 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-0.32 62.08-0.32 70.496 0 6.88 4.608 14.88 17.6 12.352 101.6-34.048 174.88-130.34 174.88-243.84 0-141.95-114.62-257.02-256.03-257.02z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div class="content__control control">
              <a href="#" class="control__link control__link_hire">contact</a>
              <a href="./assets/CV.pdf" class="control__link control__link_download" front="download cv" download></a>
            </div>
          </div>
        </div>`;

  return aboutRef.insertAdjacentHTML('afterbegin', template);
};

if (refs.about) {
  aboutMarkup(refs.about);
}
