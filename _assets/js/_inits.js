// ----------------------------------------------
// Imports
// ----------------------------------------------
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import WOW from './vendor/_wow.js';
import Formspree from './components/_formspree.js';
import InfiniteScroll from './components/_infiniteScroll.js';
import { miscFlexVid, miscSocialShare } from './components/_miscellaneous.js';
import PageTransition from './components/_pageTransition.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Promise
  if (!window.Promise) {
    window.Promise = Promise;
  }

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();
  PageTransition.init();

  if (document.querySelector('.posts') && document.querySelector('.posts__next')) {
    InfiniteScroll.init();
  }

  if (document.querySelector('.markdown')) {
    miscFlexVid();
    miscSocialShare();
  }

  if (document.getElementById('form')) {
    Formspree.init();
  }

});
