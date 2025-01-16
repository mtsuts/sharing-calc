// @ts-nocheck
import * as d3 from 'd3';

// @ts-ignore
export function drawBarchart(container, data, averageLine) {


  const margin = {
    top: 20,
    bottom: 20,
    left: 30,
    right: 30,
  }
  const width = 500;
  const height = 500

  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom


  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.side))
    .range([0, chartWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map((d) => d.value))])
    .range([chartHeight, 0]);

  const xAxis = d3.axisBottom(xScale).tickSizeInner(0)
  const yAxis = d3.axisLeft(yScale).tickSizeInner(0)

  //create svg element and append to container
  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
  //create g element and append to svg

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .attr("class", "axis");

  // draw axises

  g.append("g").call(xAxis).attr("transform", `translate(0, ${chartHeight})`);

  g.append("g").call(yAxis);

  // create bar, append to g element and draw bars

  g
    .append("g")
    .attr("fill", "#fdba74")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("width", xScale.bandwidth() / 4)
    .attr("x", (d) => xScale(d.side) + xScale.bandwidth() / 2.6)
    .attr("y", (d) => yScale(d.value))
    .attr("height", (d) => yScale(0) - yScale(d.value))
    .transition()
    .duration(4000)
    .attr("y", yScale(averageLine))
    .attr('height', yScale(0) - yScale(averageLine))

  g.append('line')
    .style("stroke", "#6b7280")
    .style("stroke-width", 5)
    .attr("x1", 0)
    .attr("y1", yScale(averageLine))
    .attr("x2", width)
    .attr("y2", yScale(averageLine));
} 