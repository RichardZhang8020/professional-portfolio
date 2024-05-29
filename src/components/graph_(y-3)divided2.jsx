import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Dimensions and margins
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // SVG setup
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales setup
    const xScale = d3.scaleLinear().domain([-10, 10]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-10, 10]).range([height, 0]);

    // Line generator
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Data
    const data = d3.range(-10, 11).map(x => ({ x, y: (x-3)/2 }));

    // Append path
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // X axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Y axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // X gridlines
    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .tickSize(-height)
        .tickFormat('')
      );

    // Y gridlines
    svg.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale)
        .tickSize(-width)
        .tickFormat('')
      );

  }, []);

  return (
    <div>
      <h2>Graph of f(x) = (x - 3) / 2</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
