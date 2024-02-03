// pca
// try as circles first
// convert into butterflies somehow

// d3.js might not be the best option if u want the butterflies to be animated eventually
// see if it's possible? / search for alternatives

const margin = { top: 10, right: 30, bottom: 30, left: 60 };
const width = 500;
const height = 500;
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

d3.json("data.json").then(function (data) {
  data.forEach(function (obj, idx) {
    obj.rank = 20 - idx;
  });

  const svg = d3
    .select("#viz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleLinear().domain([0, 1]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  const y = d3.scaleLinear().domain([0, 1]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  const size = d3.scaleSqrt().domain([1, 20]).range([1, 20]);

  const colour = d3
    .scaleLinear()
    .domain([0, 1])
    .range(["#ffaacc", "#ffffcc"]);

  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return x(d.danceability);
    })
    .attr("cy", function (d) {
      return y(d.energy);
    })
    .attr("r", function (d) {
      return size(d.rank); // figure out what this does
    })
    .style("fill", function (d) {
      return colour(d.acousticness);
    })
    .attr("stroke", "grey")
    .style("stroke-width", "0.5px");

  // svg
  //   .append("g")
  //   .selectAll("wingTopLeft")
  //   .data(data)
  //   .enter()
  //   .append("ellipse")
  //   .attr("cx", function (d) {
  //     return x(d.danceability);
  //   })
  //   .attr("cy", function (d) {
  //     return y(d.energy);
  //   })
  //   .attr("rx", function (d) {
  //     return size(-0.4);
  //   })
  //   .attr("ry", function (d) {
  //     return size(0.9);
  //   });

  // cx="100" cy="50" rx="100" ry="50"
});
