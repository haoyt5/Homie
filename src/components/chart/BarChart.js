import React, { Component } from 'react'
import * as d3 from 'd3'
import points from './points'

export class BarChart extends Component {


  componentDidMount() {
    this.drawChart();
    this.createBarchart()
  
  }
  componentDidUpdate(){
    this.createBarchart()
  }
  createBarchart(){
    console.log(':-D')
  }
  drawChart() {      
    const svg = d3.select("#chart").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("margin","1% 0 1% 0")
    .style("border", "2px solid pink")
    .style("background-color","#fff");

    // d3.json("./points.json").then( data => {
    //     const rects = svg.selectAll('rects')
    //     .data(data)
    //     rects.attr('width',50)
    //         .attr('height', d => d.orders)
    //         .attr('fill','orange')
    //         .attr('x', (d, i)=> i*70)
    //         rects.enter()
    //         .append()
    //         .attr('width',50)
    //         .attr('height', d => d.orders)
    //         .attr('fill','orange')
    //         .attr('x', (d, i)=> i*70)
    // })
    //join data to react
    const rects =  svg.selectAll("rect")
    .data(this.props.data)

    const x = d3.scaleLinear()
                .domain([0,12*2])
                .range([0,`100%`])    
    // append the enterselections to DOM and add attrs to reacts already in dom 
    rects.enter()
    .append("rect")
    .attr("y", (d, i) => {
        return(
            i * 2 + `rem`
        ) 
    })
    .attr("x", (d, i) => this.props.height - `1rem` * d)
    .attr("height", `1.5rem`)
    .attr("width", (d, i) => x(d.points))
    .attr("fill", "pink")

  }
  render() {
    return (
      <div className="barchart-box">
       <div className="barchart-inner">
       <div id="chart"></div>
       {/* <svg ref={node => this.node = node}></svg> */}
        </div> 
      </div>
    )
  }
}

export default BarChart
