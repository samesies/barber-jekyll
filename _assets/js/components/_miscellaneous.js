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
// Fixed Footer
// ----------------------------------------------
const miscFixedFooter = () => {
  let footerHeight = $('.footer').outerHeight();

  $('body').css('margin-bottom', footerHeight);

  $(window).on('resize', () => {
    footerHeight = $('.footer').outerHeight();
    
    $('body').css('margin-bottom', footerHeight);
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscFlexVid,
  miscSocialShare,
  miscFixedFooter
};
