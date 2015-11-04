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
          // console.log(s,d,c);
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
  var groups;
  var year = "year2011";
  var idp ="idp2011";


      d3.csv('data.csv', convert, function(data){    //loading data
        // console.log(data);

          groups = svg.selectAll('g')
                  .data(data)
                  .enter()
                    .append('g');

                    groups.append("circle")
                    .attr('class', "circle1");

                    groups.append("circle")
                    .attr('class', "circle2");

         update();
       });

  function update() {

          var scale = d3.scale.linear()
          .domain([0,13000])
          .range([0,100]);

          groups.selectAll('.circle1')
          .attr('r', function(d){ return scale(d[year]+d[year]); })
          .attr('cx', function(d){ return d.cx; })
          .attr('cy', function(d){ return d.cy; });

          groups.selectAll('.circle2')
          .attr('r', function(d){ return scale(d[year]); })
          .attr('cx', function(d){ return d.cx; })
          .attr('cy', function(d){ return d.cy; })
          .style("fill","red");

    }



        $( "#clickme-year2011" ).on('click', function() {
        year= "year2011";
        idp= "idp2011";
        console.log(year);
        update();
        });

        $( "#clickme-year2012" ).on('click', function() {
        year= "year2012";
        idp= "idp2012";
        console.log(year);
        update();
        });

        $( "#clickme-year2013" ).on('click', function() {
        year= "year2013";
        idp= "idp2013";
        console.log(year);
        update();
        });

        $( "#clickme-year2014" ).on('click', function() {
        year= "year2014";
        console.log(year);
        update();
        });

        $( "#clickme-year2015" ).on('click', function() {
        year= "year2015";
        console.log(year);
        update();
        });



// var Button_func = function(slider, direction) {
// 	var value = slider.value;
//
// }


});
