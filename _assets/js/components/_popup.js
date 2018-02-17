// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Popup
// ----------------------------------------------
const Popup = (() => {
  let s;

  return {
    settings() {
      return {
        html: $('html'),
        body: $('body'),
        open: 'js-popup-open',
        overflow: 'js-overflow',
        closing: 'js-popup-closing'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.togglePopup();
    },

    togglePopup() {
      $('.popup__open').on('click', () => {
        s.body.addClass(s.open);
        s.html.addClass(s.overflow);
      });

      $('.popup').on('click', e => {
        if (!$(e.target).closest('.popup__container').length) {
          Popup.popupClose();
        }
      });

      s.body.on('keyup', e => {
        if (s.body.hasClass(s.open) && e.which === 27) {
          Popup.popupClose();
        }
      });
    },

    popupClose() {
      s.body.addClass(s.closing);
      s.body.removeClass(s.open);
      s.html.removeClass(s.overflow);

      setTimeout(() => {
        s.body.removeClass(s.closing);
      }, 800);
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Popup;
