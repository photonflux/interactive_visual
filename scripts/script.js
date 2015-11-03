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
          console.log(s,d,c);
          var position = scrollPercent;

     $("#progressbar").css('width', position+'%');

  });

  /*------------------------------------------------------------------------------ BUTTONS----*/

  $( "#clickme-idp" ).on('click', function() {
    $( ".definition-idp" ).fadeIn( "slow" );
  });

  $( "#clickme-refugee" ).on('click', function() {
    $( ".definition-refugee" ).fadeIn( "slow" );
  });



});
