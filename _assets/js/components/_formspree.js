// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Formspree
// ----------------------------------------------
const Formspree = (() => {
  let s;

  return {
    settings() {
      return {
        form: $('#form'),
        formAction: $('#form').attr('action'),
        formMessage: $('.form__message'),
        animation: 'fade-in'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.ajax();
    },

    ajax() {
      s.form.submit(e => {
        e.preventDefault();

        $.ajax({
          url: s.formAction,
          method: 'POST',
          data: s.form.serialize(),
          dataType: 'json',
          success: () => {
            s.formMessage.removeClass(s.animation);
            s.formMessage.addClass(s.animation);
            s.formMessage.text('Message Sent');

            s.form[0].reset();
          },
          error: () => {
            setTimeout(() => {
              s.formMessage.removeClass(s.animation);
              s.formMessage.addClass(s.animation);
              s.formMessage.text('Something Went Wrong');
            }, 750);
          }
        });
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Formspree;
