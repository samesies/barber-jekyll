// ----------------------------------------------
// Imports
// ----------------------------------------------
import salvattore from 'salvattore';

// ----------------------------------------------
// Formspree
// ---------------------------------------------- 
const InfiniteScroll = (() => {
  let s;

  return {
    settings() {
      return {
        container: document.querySelector('.posts__container'),
        next: document.querySelector('.posts__next'),
        class: 'js-posts-loading',
        currentPage: 1,
        pathname: window.location.pathname.replace(/#(.*)$/g, '').replace('//g', '/'),
        isLoading: false
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      s.next.addEventListener('click', () => {
        s.next.classList.add(s.class);
        this.fetchPosts();
      });
    },

    fetchPosts() {
      if (s.isLoading || s.currentPage === maxPages) {
        return;
      }

      s.isLoading = true;
      s.currentPage++;

      const nextPage = `${s.pathname}page/${s.currentPage}/`;

      fetch(nextPage).then(response => response.text()).then(text => {
        const parse = document.createRange().createContextualFragment(text);
        const posts = parse.querySelectorAll('.posts__post');

        if (posts.length) {
          setTimeout(() => {
            [].forEach.call(posts, post => {
              post.classList.add('fade-up');
              salvattore.appendElements(s.container, [post]);
            });

            s.next.classList.remove(s.class);

            if (s.currentPage === maxPages) {
              const child = document.querySelector('.posts__pagination');

              child.parentNode.removeChild(child);
            }
          }, 750);
        }
      }).catch(error => {
        console.error(error);
      });

      s.isLoading = false;
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default InfiniteScroll;
