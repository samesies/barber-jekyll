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
        // ajax: $('.ajax'),
        // ajaxClose: $('.ajax__close'),
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
      // this.ajaxClose();
    },

    togglePopup() {
      $('.popup__open').on('click', () => {
        s.body.addClass(s.open);
        s.html.addClass(s.overflow);
      });

      $('.popup__close').on('click', () => {
        Popup.popupClose();
      });

      s.body.on('keyup', e => {
        if (s.body.hasClass(s.open) && e.which === 27) {
          Popup.popupClose();
        }
      })
    },

    popupClose() {
      s.body.addClass(s.closing);
      s.body.removeClass(s.open);
      s.html.removeClass(s.overflow);

      setTimeout(() => {
        s.body.removeClass(s.closing);
      }, 800);
    },

    // ajaxClose() {
    //   s.ajaxClose.on('click', function() {
    //     s.ajax.removeClass('js-ajax');
    //     $(this).removeClass('js-ajax-error');
    //   });

    //   s.body.on('keyup', function(e) {
    //     if (s.ajaxClose.hasClass('js-ajax-error') && e.which === 27) {
    //       s.ajax.removeClass('js-ajax');
    //       s.ajaxClose.removeClass('js-ajax-error');
    //     }
    //   });
    // }
  }
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Popup;
