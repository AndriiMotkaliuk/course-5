import 'slick-carousel';
import 'lightbox2';
import './gallery';
import './galleryFormater';
import './hero-slider';
import './news-slider';
import './menu';
import createFormValidation from './formValidation/createFormValidation.js';

const form = document.querySelector('#user-form');
createFormValidation(form);
