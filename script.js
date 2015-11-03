// execute code after the page has been loaded
$(function(){
  // the resize function
  function resize() {
    // set a new height for all elements with the class 'page'
    $('.page').css('height', $(window).height());
  }

  // register the event handler
  $(window).on('resize', resize);

  // calculate initial height
  resize();
});
