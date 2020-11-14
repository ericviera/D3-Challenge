// @TODO: YOUR CODE HERE!

// Define SVG Area Dimensions
var svgWidth = 950;
var svgHeight = 600;

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

    // cast health and poverty values
    data.forEach(function(data1){
        data1.poverty = +data1.poverty;
        data1.healthcare = +data1.healthcare;
    });

// Scale y to chart height
var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.healthcare)])
    .range([chartHeight, 0]);

// Scale x to chart width
var xScale = d3.scaleLinear()
    .domain([d3.min(data, d=>d.poverty)*.9, d3.max(data, d => d.poverty)])
    .range([0, chartWidth]);

 // Create Axis
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

 // Set the x axis to the bottom of the chart
chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

// Set the y axis
chartGroup.append("g")  
    .call(yAxis);

// Append data to chartGroup
chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.poverty))
    .attr("cy", d =>  yScale(d.healthcare))
    .attr("r", 12)
    .attr("fill", "green");
    
// Append text within circles
chartGroup.selectAll("text.text-circles")
    .data(data)
    .enter()
    .append("text")
    .classed("text-circles",true)
    .text(d => d.abbr)
    .attr("x", d => xScale(d.poverty))
    .attr("y", d => yScale(d.healthcare))
    .attr("dy",5)
    .attr("text-anchor","middle")
    .attr("font-size","10px")
    .attr("fill", "white");

// X Axis labels
chartGroup.append("text")
    .attr("y", chartHeight + chartMargin.bottom/2)
    .attr("x", chartWidth / 2)
    .attr("dy", "1em")
    .classed("aText", true)
    .text("Poverty");

 // Y Axis labels
chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 40 - chartMargin.left)
    .attr("x", 0 - (chartHeight / 2))
    .attr("dy", "1em")
    .classed("aText", true)
    .text("Healthcare");
});