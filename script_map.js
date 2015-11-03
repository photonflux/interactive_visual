

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
  var scale = d3.scale.linear()
  .domain([0,13000])
  .range([0,100]);

  console.log(data);



    function update (year) {
      svg.selectAll('circle')
        .data(data)
        .enter()
          .append('circle')
          .attr('r', function(d){ return scale(d[year]); })
          .attr('cx', function(d){ return d.cx; })
          .attr('cy', function(d){ return d.cy; });
    }

d3.select('#Rect2012');

  svg.on('click', function() {
    var year = "year2011";
  update ();
}



});
