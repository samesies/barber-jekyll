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
// Social Share
// ----------------------------------------------
const miscSocialShare = () => {
  const socialArr = $('.post__social a');

  socialArr.each((idx, social) => {
    $(social).on('click', () => {
      window.open($(social).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=550');
    });
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscFlexVid,
  miscSocialShare
};
