

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const InteractiveChord = () => {
  const svgRef = useRef();
  
  useEffect(() => {
    // Helper function to show info box
    const showInfoBox = (title, text) => {
      const infoBox = document.getElementById('info-box');
      const infoTitle = document.getElementById('info-title');
      const infoText = document.getElementById('info-text');
      
      infoTitle.textContent = title;
      infoText.textContent = text;
      infoBox.style.opacity = '1';
      infoBox.style.transform = 'translate(-50%, -20px)';
    };

    // Helper function to hide info box
    const hideInfoBox = () => {
      const infoBox = document.getElementById('info-box');
      infoBox.style.opacity = '0';
      infoBox.style.transform = 'translate(-50%, 0)';
    };

    // Data structures
    const meta_themes = {
      "MT-Strategic Geopolitical Positioning": [
        "T-Preserve geopolitical stability and alliances",
        "T-Diversify the economy beyond hydrocarbons",
        "T-Secure strategic influence in Africa"
      ],
      "MT-Technological Innovation": [
        "T-Sustain innovation leadership",
        "T-Safeguard critical infrastructure"
      ],
      "MT-Risk Mitigation": [
        "T-Mitigate cascading risks",
        "T-Mitigate biotech risks"
      ]
    };

    const wildcards = {
      "W-Disruptive technologies": [
        "T-Enhance cybersecurity",
        "T-Strengthen AI capabilities"
      ],
      "W-BRICS expansion": [
        "T-Balance alliances",
        "T-Navigate financial systems"
      ]
    };

    const outcomes = {
      "O-Economic destabilization": [
        "T-Maintain leadership",
        "W-Disruptive technologies"
      ],
      "O-Cyber threats": [
        "T-Enhance cybersecurity",
        "W-Disruptive technologies"
      ]
    };

    // Create nodes array
    const nodes = [
      ...Object.keys(meta_themes),
      ...new Set(Object.values(meta_themes).flat()),
      ...Object.keys(wildcards),
      ...Object.keys(outcomes)
    ];

    // Create matrix
    const matrix = Array(nodes.length).fill().map(() => Array(nodes.length).fill(0));

    // Fill matrix with relationships
    const addRelationship = (source, target) => {
      const sourceIndex = nodes.indexOf(source);
      const targetIndex = nodes.indexOf(target);
      if (sourceIndex !== -1 && targetIndex !== -1) {
        matrix[sourceIndex][targetIndex] = 1;
        matrix[targetIndex][sourceIndex] = 1;
      }
    };

    // Add all relationships from the data structures
    Object.entries(meta_themes).forEach(([mt, themes]) => {
      themes.forEach(theme => addRelationship(mt, theme));
    });

    Object.entries(wildcards).forEach(([wildcard, themes]) => {
      themes.forEach(theme => addRelationship(wildcard, theme));
    });

    Object.entries(outcomes).forEach(([outcome, connections]) => {
      connections.forEach(conn => addRelationship(outcome, conn));
    });

    // NEW RELATIONSHIPS for "hopping" from MT-Risk Mitigation → W-Disruptive technologies → O-Cyber threats
    addRelationship("MT-Risk Mitigation", "W-Disruptive technologies");
    addRelationship("W-Disruptive technologies", "O-Cyber threats");

    // Set up the SVG with increased dimensions
    const width = 2400;
    const height = 2400;
    const innerRadius = Math.min(width, height) * 0.25;
    const outerRadius = innerRadius * 1.1;
    const groupingRadius = outerRadius * 1.2; // Radius for the grouping arcs

    // Clear previous SVG (if any)
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width/2},${height/2})`);

    // Colour scale
    const color = d3.scaleOrdinal()
      .domain(nodes)
      .range([
        "#8DD3C7", // Mint
        "#FFFFB3", // Light yellow
        "#BEBADA", // Light purple
        "#FB8072", // Salmon
        "#80B1D3", // Light blue
        "#FDB462", // Light orange
        "#B3DE69"  // Light green
      ]);

    // Create the chord layout
    const chord = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending)(matrix);

    // Define node groups (indices of nodes that should be grouped together)
    const nodeGroups = [
      { name: "Strategic Group", indices: [0, 1, 2], color: "#8DD3C7" },
      { name: "Tech Group", indices: [3, 4, 5], color: "#FFFFB3" },
      { name: "Risk Group", indices: [6, 7, 8], color: "#BEBADA" },
      { name: "Outcomes Group", indices: [9, 10], color: "#FB8072" }
    ];

    // Arc generator for outer grouping
    const groupArc = d3.arc()
      .innerRadius(groupingRadius)
      .outerRadius(groupingRadius + (outerRadius - innerRadius));

    // Add the outer grouping arcs
    const groupings = svg.append("g")
      .selectAll("path")
      .data(nodeGroups)
      .enter()
      .append("path")
      .attr("d", d => {
        const start = chord.groups[d.indices[0]];
        const end = chord.groups[d.indices[d.indices.length - 1]];
        return groupArc({
          startAngle: start.startAngle,
          endAngle: end.endAngle
        });
      })
      .attr("fill", d => d.color)
      .attr("fill-opacity", 0.2)
      .attr("stroke", d => d.color)
      .attr("stroke-width", 3)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        // Highlight this grouping arc
        d3.select(this)
          .attr("fill-opacity", 0.4)
          .attr("stroke-width", 5);

        // Fade other arcs and chords not in this group
        group.select("path")
          .style("opacity", p => {
            return d.indices.includes(p.index) ? 1 : 0.1;
          });

        chords.style("opacity", p => {
          return d.indices.includes(p.source.index) || d.indices.includes(p.target.index) ? 1 : 0.1;
        });

        svg.selectAll("text")
          .style("opacity", text => {
            if (text.angle === d.angle) return 1;
            return d.indices.includes(text.index) ? 1 : 0.3;
          });

        // Show info box for group
        showInfoBox(
          d.name,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        );
      })
      .on("mouseout", function() {
        // Reset group arc
        d3.select(this)
          .attr("fill-opacity", 0.2)
          .attr("stroke-width", 3);

        // Restore all arcs/chords
        group.select("path").style("opacity", 1);
        chords.style("opacity", 0.75);
        svg.selectAll("text").style("opacity", 1);

        // Hide info box
        hideInfoBox();
      })
      .on("click", function(event, d) {
        // Optional: Add click behaviour
        console.log(`Clicked group: ${d.name}`);
        
        // Example: Toggle persistent highlight
        const isActive = d3.select(this).classed("active");
        
        if (!isActive) {
          // Remove active class from all groupings
          groupings.classed("active", false);
          // Add active class to this one
          d3.select(this).classed("active", true);
          
          // Highlight related elements
          group.select("path")
            .style("opacity", p => d.indices.includes(p.index) ? 1 : 0.1);
          chords.style("opacity", p =>
            d.indices.includes(p.source.index) || d.indices.includes(p.target.index) ? 1 : 0.1
          );
        } else {
          // Remove active class and reset
          d3.select(this).classed("active", false);
          group.select("path").style("opacity", 1);
          chords.style("opacity", 0.75);
        }
      });

    // Add the groups (arc slices for each node)
    const group = svg.append("g")
      .selectAll("g")
      .data(chord.groups)
      .join("g");

    // Draw the group arcs
    group.append("path")
      .attr("fill", d => color(nodes[d.index]))
      .attr("d", d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
      )
      .attr("class", "group-arc")
      .on("mouseover", function(event, d) {
        chords.style("opacity", p => {
          return (p.source.index === d.index || p.target.index === d.index) ? 1 : 0.1;
        });
      })
      .on("mouseout", function() {
        chords.style("opacity", 0.75);
      });

    // Add the chords (ribbons)
    const chords = svg.append("g")
      .attr("fill-opacity", 0.75)
      .selectAll("path")
      .data(chord)
      .join("path")
      .attr("d", d3.ribbon().radius(innerRadius))
      .attr("fill", d => color(nodes[d.source.index]))
      .attr("stroke", "none")
      .style("mix-blend-mode", "multiply")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .style("opacity", 1)
          .attr("fill-opacity", 1);
        
        group.select("path")
          .style("opacity", p => {
            return (p.index === d.source.index || p.index === d.target.index) ? 1 : 0.1;
          });

        // Show info box for the connection
        showInfoBox(
          `${nodes[d.source.index]} → ${nodes[d.target.index]}`,
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        );
      })
      .on("mouseout", function() {
        d3.select(this)
          .style("opacity", 0.75)
          .attr("fill-opacity", 0.75);
        
        group.select("path")
          .style("opacity", 1);
          
        hideInfoBox();
      });

    // Add labels for each node
    group.append("text")
      .each(d => { d.angle = (d.startAngle + d.endAngle) / 2; })
      .attr("dy", "0.35em")
      .attr("transform", d => `
        rotate(${(d.angle * 180 / Math.PI - 90)})
        translate(${outerRadius + 10})
        ${d.angle > Math.PI ? "rotate(180)" : ""}
      `)
      .attr("text-anchor", d => d.angle > Math.PI ? "end" : "start")
      .attr("fill", "currentColor")
      .style("font-size", "24px")
      .style("cursor", "pointer")
      .text((d, i) => nodes[i].substring(0, 30))
      .on("mouseover", function(event, d) {
        // Highlight chords connected to this node
        chords.style("opacity", p => {
          return (p.source.index === d.index || p.target.index === d.index) ? 1 : 0.1;
        });
        
        // Determine node type for info box
        const nodeName = nodes[d.index];
        let nodeType = "";
        if (nodeName.startsWith("W-")) nodeType = "Wildcard";
        else if (nodeName.startsWith("T-")) nodeType = "Theme";
        else if (nodeName.startsWith("MT-")) nodeType = "Meta-Theme";
        else if (nodeName.startsWith("O-")) nodeType = "Outcome";

        // Show info box for this node
        showInfoBox(
          `${nodeType}: ${nodeName}`,
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        );

        // Highlight the arc with a darker stroke
        const arcColor = d3.color(color(nodes[d.index]));
        group.selectAll("path")
          .filter(p => p.index === d.index)
          .attr("fill-opacity", 1)
          .attr("stroke", arcColor.darker())
          .attr("stroke-width", 2);
      })
      .on("mouseout", function(event, d) {
        chords.style("opacity", 0.75);
        hideInfoBox();
        
        // Reset arc styling
        group.selectAll("path")
          .filter(p => p.index === d.index)
          .attr("fill-opacity", 0.8)
          .attr("stroke", "none");
      });

    // Add CSS for transitions
    svg.append("style").text(`
      path, text { transition: all 0.3s ease; }
      .group-arc:hover { cursor: pointer; }
    `);

    // Add group labels with interactivity
    svg.append("g")
      .selectAll("text")
      .data(nodeGroups)
      .enter()
      .append("text")
      .each(d => {
        const start = chord.groups[d.indices[0]];
        const end = chord.groups[d.indices[d.indices.length - 1]];
        d.angle = (start.startAngle + end.endAngle) / 2;
      })
      .attr("dy", "0.35em")
      .attr("transform", d => `
        rotate(${(d.angle * 180 / Math.PI - 90)})
        translate(${groupingRadius + (outerRadius - innerRadius) + 20})
        ${d.angle > Math.PI ? "rotate(180)" : ""}
      `)
      .attr("text-anchor", d => d.angle > Math.PI ? "end" : "start")
      .attr("fill", d => d3.color(d.color).darker())
      .style("font-size", "28px")
      .style("font-weight", "bold")
      .style("cursor", "pointer")
      .text(d => d.name)
      .on("mouseover", function(event, d) {
        // Highlight the corresponding group arc
        groupings.filter(g => g.name === d.name)
          .attr("fill-opacity", 0.4)
          .attr("stroke-width", 5);

        // Highlight nodes in this group
        group.select("path")
          .style("opacity", p => {
            return d.indices.includes(p.index) ? 1 : 0.1;
          });

        // Highlight connected chords
        chords.style("opacity", p => {
          return d.indices.includes(p.source.index) || d.indices.includes(p.target.index) ? 1 : 0.1;
        });

        // Show info box
        showInfoBox(
          d.name,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        );
      })
      .on("mouseout", function(event, d) {
        // Reset group arc
        groupings.filter(g => g.name === d.name)
          .attr("fill-opacity", 0.2)
          .attr("stroke-width", 3);

        // Reset all elements
        group.select("path").style("opacity", 1);
        chords.style("opacity", 0.75);
        hideInfoBox();
      });
      
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center bg-white p-8">
        <svg 
          ref={svgRef} 
          viewBox="0 0 2400 2400" 
          className="w-full h-full" 
          style={{ maxHeight: '90vh' }} 
          preserveAspectRatio="xMidYMid meet"
        ></svg>
      </div>
      
      {/* Text box container - positioned absolutely below the centre */}
      <div id="info-box" className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-96 opacity-0 transition-all duration-300 ease-in-out pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 id="info-title" className="text-xl font-bold mb-2 text-gray-900"></h3>
          <p id="info-text" className="text-gray-700"></p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChord;


