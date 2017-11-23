// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';
import salvattore from 'salvattore';

// ----------------------------------------------
// Infinite Scroll
// ----------------------------------------------
const InfiniteScroll = (() => {
  let s;

  return {
    settings() {
      return {
        container: document.querySelector('.posts__container'),
        next: $('.posts__next'),
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
      s.next.on('click', () => {
        s.next.addClass(s.class);
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

      $.ajax({
        url: nextPage,
        type: 'GET',
        success: response => {
          const parse = document.createRange().createContextualFragment(response);
          const posts = parse.querySelectorAll('.posts__post');

          if (posts.length) {
            setTimeout(() => {
              [].forEach.call(posts, post => {
                post.classList.add('fade-up');
                salvattore.appendElements(s.container, [post]);
              });

              s.next.removeClass(s.class);

              if (s.currentPage === maxPages) {
                $('.posts__pagination').remove();
              }
            }, 750);
          }
        },
        error: error => {
          console.error(error);
        }
      });

      s.isLoading = false;
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default InfiniteScroll;
