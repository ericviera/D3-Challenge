// @TODO: YOUR CODE HERE!

// Define SVG Area Dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
    top: 100,
    right: 100,
    bottom: 100,
    left: 100
};

// Define the dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select id "scatter", append svg area to it and set dimensions
var svg = d3.select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right
// and down to adhere to the margins set in "chartMargin" object

var chartGroup = svg.append("g")
    .attr("transform",`translate(${chartMargin.left}, ${chartMargin.top})`);

// Load CSV Data
d3.csv("assets/data/data.csv").then(function(data){
    //Print Data
    console.log(data);
}

);



