// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Flex Vid
// ----------------------------------------------
const miscFlexVid = () => {
  const iframeArr = $('.post__content iframe');

  iframeArr.each((idx, iframe) => {
    $(iframe).wrap('<div class="flex-vid"></div>');
  });
};

// ----------------------------------------------
// Zoom
// ----------------------------------------------
const miscZoom = () => {
  const imgArr = $('.post__content img');

  imgArr.each((idx, img) => {
    if (img.src.indexOf('full') === -1) {
      $(img).attr('data-action', 'zoom');
    }
  });
};

// ----------------------------------------------
// Social Share
// ----------------------------------------------
const miscSocialShare = () => {
  $('.post__social a').on('click', e => {
    window.open($(e.currentTarget).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=550');
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscFlexVid,
  miscZoom,
  miscSocialShare
};
