// ----------------------------------------------
// Page Transition
// ----------------------------------------------
const PageTransition = (() => {
  let s;
  const noTransition = 'no-transition';

  return {
    settings() {
      return {
        transitionLinks: document.querySelectorAll(`a[href^="http://${top.location.host.toString()}"]:not(${noTransition}), a[href^="/"]:not(${noTransition}), a[href^="./"]:not(${noTransition}), a[href^="../"]:not(${noTransition})`),
        body: document.body,
        exit: 400,
        entrance: 200
      };
    },

    init() {
      if (window === window.top) {
        s = this.settings();
        this.bindEvents();
      } else {
        setTimeout(() => {
          document.body.classList.add('js-page-loaded');
        }, 600);
      }
    },

    bindEvents() {
      this.loadingClasses();
      this.transitionPage();
    },

    loadingClasses() {
      setTimeout(() => {
        s.body.classList.add('js-page-loaded');
      }, s.entrance);
    },

    transitionPage() {
      [].forEach.call(s.transitionLinks, link => {
        link.addEventListener('click', e => {
          if (s.body.classList.contains(noTransition) || e.metaKey || e.ctrlKey || e.shiftKey) {
            return;
          }
          e.preventDefault();

          const linkLocation = link.href;

          s.body.classList.add('js-page-exiting');

          setTimeout(() => {
            window.location = linkLocation;
          }, s.exit);
        });
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default PageTransition;
