import React, { Component } from 'react'
import * as d3 from 'd3'
export class BarChart extends Component {


  componentDidMount() {
    this.drawChart();
    this.createBarchart()
  
  }
  componentDidUpdate(){
    this.createBarchart()
  }
  createBarchart(){
  }
  drawChart() {      
    const svg = d3.select("#chart").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")

    //create margins and dimensions
    const margin = {top:"5%", bottom:"5%", left:"10%", right:"10%"}
    const graphWidth = 100% - margin.left - margin.right;
    const graphHeight = 100% - margin.height - margin.bottom;
    const graph = svg.append('g')
                    .attr('width',graphWidth)
                    .attr('height',graphHeight)
                    .attr('transform', `translate(${margin.left},${margin.top})`)
    //join data to react
    const rects =  graph.selectAll("rect")
    .data(this.props.data)
    const min = d3.min(this.props.data, d => d.points)
    const max = d3.max(this.props.data, d => d.points)
    console.log(min)     
    console.log(max)  

    const x = d3.scaleLinear()
                .domain([0,max*1.6])
                .range([0,`100%`]);
    const y = d3.scaleBand()
                .domain(this.props.data.map(data => data.name))
                .range([0,100])
                .paddingInner(0.5)
                .paddingOuter(0.5);

          
    // append the enterselections to DOM and add attrs to reacts already in dom 
    rects.enter()
    .append("rect")
    .attr("height", y.bandwidth()+ `%`)
    .attr("width", (d, i) => x(d.points))
    .attr("y", (d, i) => {
        return(
           y(d.name)+ `%`
        ) 
    })
    .attr("x", (d, i) => 0)
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
