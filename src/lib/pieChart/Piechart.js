// @ts-nocheck
import * as d3 from 'd3';

export function drawPiechart(container, data) {
  const width = 400
  const height = 300
  const marginLeft = 40
  const marginRight = 30
  const marginTop = 20
  const marginBottom = 20
  const radiusMargin = 40
  const chartWidth = width - marginRight - marginLeft
  const chartHeight = width - marginTop - marginBottom
  let radius = Math.min(width, height) / 2 - radiusMargin

  d3.select(container).selectAll("*").remove()

  const pie = d3.pie().value((d) => d);
  const pieData = pie(data)
  console.log(pieData)

  const colorScale = d3.scalePow().domain([d3.min(pieData.map(d => d.value)), d3.max(pieData.map(d => d.value))]).range(["#ffedd5", "#fdba74"]).exponent(2)
  const arcGenerator = d3.arc()
    .innerRadius(30)
    .outerRadius(radius)

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const g = svg.append('g')
    .attr('width', chartWidth)
    .attr('height', chartHeight)
    .attr('transform', `translate(${chartHeight / 2 + marginTop}, ${chartHeight / 2 - marginRight})`)

  g
    .selectAll('g')
    .data(pieData)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill', (d) => colorScale(d.value))
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style('opacity', 0.8)
    .on('mouseenter', function (d) {
      d3.select(this).style('opacity', 1)
    })
    .on('mouseleave', function (d) {
      d3.select(this).style('opacity', 0.8)
    })


  g.selectAll('text')
    .data(pieData)
    .enter()
    .append('text')
    .text((d) => `${d.value}`)
    .attr('fill', 'grey')
    .attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`)
    .style('text-anchor', 'middle')
}
