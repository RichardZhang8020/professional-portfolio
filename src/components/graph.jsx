// Graph.jsx
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Define the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
          width = 800 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

    // Create the SVG canvas
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define the scales
    const x = d3.scaleLinear().domain([-10, 10]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]); // Adjust domain based on your function

    // Define the line generator
    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    // Generate data points for the function
    const data = d3.range(-10, 11).map(x => ({ x, y: 2*x+3 }));

    // Add the x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add the y-axis
    svg.append('g')
      .call(d3.axisLeft(y));

    // Add the line path
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

  }, []);

  return (
    <div>
      <h2>Graph of y = x^2</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
