// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import WOW from './vendor/_wow.js';
import Formspree from './components/_formspree.js';
import InfiniteScroll from './components/_infiniteScroll.js';
import MailChimp from './components/_mailChimp.js';
import { miscFlexVid, miscSocialShare, miscFixedFooter } from './components/_miscellaneous.js';
import PageTransition from './components/_pageTransition.js';
import Popup from './components/_popup.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();
  miscFixedFooter();
  MailChimp.init();
  PageTransition.init();

  if ($('.posts').length && $('.posts__next').length) {
    InfiniteScroll.init();
  }

  if ($('#markdown').length) {
    miscFlexVid();
    miscSocialShare();
  }

  if ($('#form').length) {
    Formspree.init();
    Popup.init();
  }

});
