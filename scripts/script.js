$(document).ready(function(){

  var year = "year2011";
  console.log(year);
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



  /*------------------------------------------------------------------------------ Interact_map----*/
  function convert(d) {
    d.year2011 = parseInt(d.year2011);
    d.year2012 = parseInt(d.year2012);
    d.year2013 = parseInt(d.year2013);
    d.year2014 = parseInt(d.year2014);
    d.year2015 = parseInt(d.year2015);
    d.cx = parseFloat(d.cx);
    d.cy = parseFloat(d.cy);
    return d;
  }

  var svg = d3.select('#svg');

      d3.csv('data.csv', convert, function(data){    //loading data
        // console.log(data);


        console.log(data);
      var year = "year2011"
      console.log(year);

      svg.selectAll('circle')
              .data(data)
              .enter()
                .append('circle')

                update();
        });

        function update() {

          var scale = d3.scale.linear()
          .domain([0,13000])
          .range([0,100]);

            svg.selectAll('circle')
            .attr('r', function(d){ return scale(d[year]); })
            .attr('cx', function(d){ return d.cx; })
            .attr('cy', function(d){ return d.cy; });
        }


    $( "#clickme-year2012" ).on('click', function() {
    year= "year2012";
    console.log(year);
    update();
    });




// var Button_func = function(slider, direction) {
// 	var value = slider.value;
//
// }


});
