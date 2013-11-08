
/**
 * Selection
 */

var selection = window.getSelection();

/**
 * Get user selected text.
 *
 * @return {Boolean}
 * @api public
 */

module.exports = function(){
  if ('Range' != selection.type) return '';
  return selection
    .getRangeAt(0)
    .cloneContents()
    .textContent;
};
