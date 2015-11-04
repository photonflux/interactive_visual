$(document).ready(function(){

  /*------------------------------------------------------------------------------ SCROLL DOWN DISAPPEAR----*/

  $(window).bind('scroll', function() {
       if ($(window).scrollTop() > 100) {
           $('.scroll-down').hide();
       }
       else {
           $('.scroll-down').show();
       }
  });

  /*------------------------------------------------------------------------------ SCROLLBAR----*/

  $(window).scroll(function () {
    var s = $(window).scrollTop(),
          d = $(document).height(),
          c = $(window).height();
          scrollPercent = (s / (d-c)) * 100;
          var position = scrollPercent;

     $("#progressbar").css('width', position+'%');

  });

  /*------------------------------------------------------------------------------ BUTTONS----*/

  $('.clickme').on('click', function(){
    var target = $(this).data('target');
    if($(target).hasClass('show-definition')){
      $(target).removeClass('show-definition');
    }else {
      $(target).addClass('show-definition');;
    }
  });




});
