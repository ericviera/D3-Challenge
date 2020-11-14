// @TODO: YOUR CODE HERE!

// Define SVG Area Dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var charMargin = {
    top: 100,
    right: 100,
    bottom: 100,
    left: 100
};

// Define the dimensions of the chart area
var chartWidth = svgWidth - charMargin.left - charMargin.right;
var chartHeight = svgHeight - charMargin.top - charMargin.bottom;

// Select id "scatter", append svg area to it and set dimensions
var svg = d3.select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);





