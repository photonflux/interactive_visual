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




  /*------------------------------------------------------------------------------ Interact_map----*/
  function convert(d) {
    d.year2011 = parseInt(d.year2011);
    d.year2012 = parseInt(d.year2012);
    d.year2013 = parseInt(d.year2013);
    d.year2014 = parseInt(d.year2014);
    d.year2015 = parseInt(d.year2015);
    d.idp2011 = parseInt(d.idp2011);
    d.idp2012 = parseInt(d.idp2012);
    d.idp2013 = parseInt(d.idp2013);
    d.idp2014 = parseInt(d.idp2014);
    d.idp2015 = parseInt(d.idp2015);
    d.cx = parseFloat(d.cx);
    d.cy = parseFloat(d.cy);
    return d;
  }

  var svg = d3.select('#svg');
  var groups;
  var year = "year2011";
  var idp ="idp2011";
  var tip;



      d3.csv('data2.csv', convert, function(data){    //loading data
         console.log(data);


         tip = d3.tip()
         .attr('class', 'd3-tip')
         .offset([-10, 0])
         .html(function(d) {
           console.log("hello");
           return "<span>" + d[year] + "</span>";
         });

         svg.call(tip);
         console.log(tip);

          groups = svg.selectAll('g')
                  .data(data)
                  .enter()
                    .append('g');

                    groups.append("circle")
                    .attr('class', "circle_idp")
                     .attr("id", function(d) {
                        return d.region; })
                    // .on("mouseover", function(d) {
                    //         d3.select(this).attr('id')});    // presumes that <rect> has an id!
                    // // .attr('id', function(d){return d.region)});

                    groups.append("circle")
                    .attr('class', "circle_dead")
                    .attr("id", function(d) {
                       return d.region; })
                    // .on("mouseover", function(d) {
                    //     d3.select(this).attr('id');// presumes that <rect> has an id!
                    //       })


         update();
       });



// selection.data([values[, key]])
// function key(d) {
//   return d.State;
// }



  function update() {

          var scale_idp = d3.scale.linear()
          .domain([0,1800000])
          .range([0,250]);

          var scale_deaths = d3.scale.linear()
          .domain([0,15000])
          .range([0,40]);

          groups.selectAll('.circle_idp')
          .attr('r', function(d){ return (scale_idp(d[idp])+ scale_deaths(d[year])); })
          .attr('cx', function(d){ return d.cx; })
          .attr('cy', function(d){ return d.cy; })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)


          groups.selectAll('.circle_dead')
          .attr('r', function(d){ return scale_deaths(d[year]); })
          .attr('cx', function(d){ return d.cx; })
          .attr('cy', function(d){ return d.cy; })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)


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
        idp= "idp2014";
        console.log(year);
        update();
        });

        $( "#clickme-year2015" ).on('click', function() {
        year= "year2015";
        idp= "idp2015";
        console.log(year);
        update();
        });



// var Button_func = function(slider, direction) {
// 	var value = slider.value;
//
// }


});
