// ----------------------------------------------
// Flex Vid
// ---------------------------------------------- 
const miscFlexVid = () => {
  const iframeArr = document.querySelectorAll('.post__content iframe');

  [].forEach.call(iframeArr, iframe => {
    const div = document.createElement('div');

    div.className = 'flex-vid';

    iframe.parentNode.insertBefore(div, iframe);
    iframe.parentNode.removeChild(iframe);
    div.appendChild(iframe);
  });
};

// ----------------------------------------------
// Social Share
// ---------------------------------------------- 
const miscSocialShare = () => {
  const socialArr = document.querySelectorAll('.post__social a');

  [].forEach.call(socialArr, social => {
    social.addEventListener('click', () => {
      window.open(social.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=550');
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
