import React, { Component } from 'react'
import * as d3 from 'd3'
export class BarChart extends Component {


  componentDidMount() {
   
  
  }
  componentDidUpdate(){
    if (this.props.data.length !== 0){
      console.log('DRAWCHART')
      console.log(this.props.data)
      this.drawChart();
    }
  }
  drawChart() {      
    const svg = d3.select("#chart").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")

    //create margins and dimensions
    const margin = {top:5, bottom:5, left:3, right:3}
    const graphWidth = 100 - margin.left - margin.right;
    const graphHeight = 100 - margin.top - margin.bottom;
   
    const graph = svg.append('g')
                    .attr('width',graphWidth+`%`)
                    .attr('height',graphHeight+`%`)
                    .style('transform', `translate(${margin.left}% ,${margin.top}% )`)
    // const xAxisGroup = graph.append('g')
    //                         .style('width','100%')
    //                         .style('height','100%')
    //                         .style('transform', `translate(0 ,${ graphHeight - margin.top}% )`)
    // const yAxisGroup = graph.append('g')
    //                         .style('width','100%')
    //                         .style('height','100%')
    //                         .style('transform', `translate(0 ,${ margin.top}% )`)

    //join data to react
    const rects =  graph.selectAll("rect")
    .data(this.props.data)

    // const min = d3.min(this.props.data, d => d.points)
    let max = d3.max(this.props.data, d => d.points)
    if ( max < 5 ){ max = 5 }
    const x = d3.scaleLinear()
                .domain([0,max])
                .range([0,graphWidth]);
    const y = d3.scaleBand()
                .domain(this.props.data.map(data => data.firstname))
                .range([graphHeight,0])
                .padding(0.5)
          
    // append the enterselections to DOM and add attrs to reacts already in dom 
    rects.enter()
    .append("rect")
    .attr("height", y.bandwidth()+`%`)
    .attr("width", (d, i) => x(d.points)+`%`)
    .attr("y", (d, i) => {
        return(
           y(d.firstname)+`%`
        ) 
    })
    .attr("x", (d, i) => 0)
    .attr("fill", (d, i) => {return(d.userColor)})
    .attr("radius",5)
    
    rects.enter()
    .append("text")
    .style('font-size', '0.8rem')
    .style('font-weight', 'bold')
    .attr("fill", "#a5a5a5")
    .attr("height", y.bandwidth()+`%`)
    .attr("width", (d, i) => x(d.points)+`%`)
    .attr("y", (d, i) => {
        return(
           y(d.firstname)- 2 +`%`
        ) 
    })
    .attr("x", 0)
    .text(function(d){
    return `${d.firstname} : ${d.points} points` }
       )
    .style("backgroud-color", "white");

    

    //create and call the axes
    // const xAxis = d3.axisBottom(x)
    // const yAxis = d3.axisLeft(y)
    // xAxisGroup.call(xAxis)
    // yAxisGroup.call(yAxis)
             
  }
  render() {
    return (
      <div className="barchart-box">
       <div className="barchart-inner">
       <div id="chart"></div>
        </div> 
      </div>
    )
  }
}

export default BarChart
