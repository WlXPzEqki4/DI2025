// import React from 'react';
// import Plot from 'react-plotly.js';

// const SankeyChart = () => {
//   // 1. Define your data structures:
//   const meta_themes = {
//     "MT-Strategic Geopolitical Positioning": [
//       "T-Preserve geopolitical stability and alliances.",
//       "T-Diversify the economy beyond hydrocarbons.",
//       "T-Secure strategic influence in Africa as a leading investor.",
//       "T-Balance alliances between Western and BRICS-aligned blocs.",
//       "T-Strengthen national AI capabilities and independence.",
//       "T-Develop autonomous defence systems to counter AI-driven cyber threats.",
//       "T-Preserve food security through biosecure agricultural investments.",
//       "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency)."
//     ],
//     "MT-Technological Innovation and Infrastructure": [
//       "T-Sustain innovation leadership in advanced energy technologies.",
//       "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom)."
//     ],
//     "MT-Risk Mitigation and Resilience": [
//       "T-Mitigate cascading risks from interconnected vulnerabilities.",
//       "T-Mitigate risks from biotech failures in African investments."
//     ],
//     "MT-Cybersecurity Leadership": [
//       "T-Ensure cybersecurity and data sovereignty.",
//       "T-Enhance cybersecurity and resilience to emerging quantum threats."
//     ],
//     "MT-Economic Leadership and Gulf Stability": [
//       "T-Maintain global economic and technological leadership.",
//       "T-Maintain dominance in Gulf economic and political affairs."
//     ],
//     "MT-Space and Energy Security": [
//       "T-Protect energy exports and transit routes.",
//       "T-Protect satellite networks and space-based assets."
//     ]
//   };

//   const wildcards = {
//     "W-Disruptive technologies (AGI, quantum cryptography)": [
//       "T-Enhance cybersecurity and resilience to emerging quantum threats.",
//       "T-Strengthen national AI capabilities and independence."
//     ],
//     "W-BRICS expansion challenging Western economic hegemony": [
//       "T-Balance alliances between Western and BRICS-aligned blocs.",
//       "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency)."
//     ],
//     "W-Africa as a geopolitical battleground": [
//       "T-Secure strategic influence in Africa as a leading investor.",
//       "T-Preserve geopolitical stability and alliances."
//     ],
//     "W-Militarisation of space": [
//       "T-Protect satellite networks and space-based assets.",
//       "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom)."
//     ],
//     "W-Unregulated genetic and biotech breakthroughs": [
//       "T-Preserve food security through biosecure agricultural investments.",
//       "T-Mitigate risks from biotech failures in African investments."
//     ]
//   };

//   const outcomes = {
//     "O-Potential destabilisation of economic sectors": [
//       "T-Maintain global economic and technological leadership.",
//       "T-Diversify the economy beyond hydrocarbons.",
//       "W-Disruptive technologies (AGI, quantum cryptography)"
//     ],
//     "O-Loss of geopolitical influence in Africa": [
//       "T-Secure strategic influence in Africa as a leading investor.",
//       "T-Balance alliances between Western and BRICS-aligned blocs.",
//       "W-Africa as a geopolitical battleground"
//     ],
//     "O-Increased exposure to cyber threats": [
//       "T-Enhance cybersecurity and resilience to emerging quantum threats.",
//       "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom).",
//       "W-Disruptive technologies (AGI, quantum cryptography)"
//     ],
//     "O-Economic shocks from de-dollarisation": [
//       "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency).",
//       "T-Balance alliances between Western and BRICS-aligned blocs.",
//       "W-BRICS expansion challenging Western economic hegemony"
//     ],
//     "O-Food security risks from biotech failures": [
//       "T-Preserve food security through biosecure agricultural investments.",
//       "T-Mitigate risks from biotech failures in African investments.",
//       "W-Unregulated genetic and biotech breakthroughs"
//     ]
//   };

//   // 2. Create a combined list of nodes
//   const nodes = [
//     ...Object.keys(meta_themes),
//     ...Object.values(meta_themes).flat(),
//     ...Object.keys(wildcards),
//     ...Object.keys(outcomes),
//   ];

//   // Map node strings to their indices
//   const nodeIndices = {};
//   nodes.forEach((node, i) => {
//     nodeIndices[node] = i;
//   });

//   // 3. Build the links array
//   const links = [];

//   // (a) Meta-Themes to T-Entries
//   for (const [metaTheme, interests] of Object.entries(meta_themes)) {
//     interests.forEach(interest => {
//       links.push({
//         source: nodeIndices[metaTheme],
//         target: nodeIndices[interest],
//         value: 1
//       });
//     });
//   }

//   // (b) T-Entries to Wildcards
//   for (const [wildcard, interests] of Object.entries(wildcards)) {
//     interests.forEach(interest => {
//       links.push({
//         source: nodeIndices[interest],
//         target: nodeIndices[wildcard],
//         value: 1
//       });
//     });
//   }

//   // (c) Wildcards to Outcomes
//   for (const [outcome, connections] of Object.entries(outcomes)) {
//     connections.forEach(connection => {
//       links.push({
//         source: nodeIndices[connection],
//         target: nodeIndices[outcome],
//         value: 1
//       });
//     });
//   }

//   // 4. Assign colours based on node type
//   const nodeColors = nodes.map(node => {
//     if (node.startsWith("MT-")) {
//       return "#636EFA";  // Meta-Themes (blue)
//     } else if (node.startsWith("T-")) {
//       return "#EF553B";  // T-entries (red)
//     } else if (node.startsWith("W-")) {
//       return "#00CC96";  // Wildcards (green)
//     } else if (node.startsWith("O-")) {
//       return "#AB63FA";  // Outcomes (purple)
//     } 
//     return "#D3D3D3";    // Default grey (unused here)
//   });

//   // 5. Positions for alignment by type (roughly)
//   const xPositions = [];
//   const yPositions = [];


// nodes.forEach((node, i) => {
//   if (node.startsWith("MT-")) {
//     xPositions.push(0.005);  // Was 0.01, now extremely close to left edge
//   } else if (node.startsWith("T-")) {
//     xPositions.push(0.205);  // Maintaining same spacing from MT
//   } else if (node.startsWith("W-")) {
//     xPositions.push(0.505);  // Maintaining same spacing from T
//   } else if (node.startsWith("O-")) {
//     xPositions.push(0.805);  // Maintaining same spacing from W
//   } else {
//     xPositions.push(0.405);
//   }
//   yPositions.push((i % 10) / 10);
// });

//   // 6. Build the Sankey data for Plotly
//   const data = [
//     {
//       type: "sankey",
//       orientation: "h",
//       node: {
//         pad: 15,
//         thickness: 20,
//         line: { color: "black", width: 0.5 },
//         label: nodes,
//         color: nodeColors,
//         x: xPositions,
//         y: yPositions
//       },
//       link: {
//         source: links.map(link => link.source),
//         target: links.map(link => link.target),
//         value: links.map(link => link.value)
//       }
//     }
//   ];

//   const layout = {
//     title: "UAE Meta-Themes to Wildcards to Outcomes",
//     font: { size: 12 },
//     width: 2400,
//     height: 1200,
//     margin: {
//       l: 0,   // zero left margin
//       r: 50,  // small right margin
//       t: 60,  // small top margin for title
//       b: 0    // zero bottom margin
//     }
//   };
  
// return (
//   <div className="flex items-center bg-white p-0 ml-60">
//     <Plot 
//       data={data} 
//       layout={layout} 
//       style={{ width: "100%" }}
//     />
//   </div>
// );
// };


// export default SankeyChart;













import React from 'react';
import Plot from 'react-plotly.js';

const SankeyChart = () => {
  // 1. Define your data structures:
  const meta_themes = {
    "MT-Strategic Geopolitical Positioning": [
      "T-Preserve geopolitical stability and alliances.",
      "T-Diversify the economy beyond hydrocarbons.",
      "T-Secure strategic influence in Africa as a leading investor.",
      "T-Balance alliances between Western and BRICS-aligned blocs.",
      "T-Strengthen national AI capabilities and independence.",
      "T-Develop autonomous defence systems to counter AI-driven cyber threats.",
      "T-Preserve food security through biosecure agricultural investments.",
      "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency)."
    ],
    "MT-Technological Innovation and Infrastructure": [
      "T-Sustain innovation leadership in advanced energy technologies.",
      "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom)."
    ],
    "MT-Risk Mitigation and Resilience": [
      "T-Mitigate cascading risks from interconnected vulnerabilities.",
      "T-Mitigate risks from biotech failures in African investments."
    ],
    "MT-Cybersecurity Leadership": [
      "T-Ensure cybersecurity and data sovereignty.",
      "T-Enhance cybersecurity and resilience to emerging quantum threats."
    ],
    "MT-Economic Leadership and Gulf Stability": [
      "T-Maintain global economic and technological leadership.",
      "T-Maintain dominance in Gulf economic and political affairs."
    ],
    "MT-Space and Energy Security": [
      "T-Protect energy exports and transit routes.",
      "T-Protect satellite networks and space-based assets."
    ]
  };

  const wildcards = {
    "W-Disruptive technologies (AGI, quantum cryptography)": [
      "T-Enhance cybersecurity and resilience to emerging quantum threats.",
      "T-Strengthen national AI capabilities and independence."
    ],
    "W-BRICS expansion challenging Western economic hegemony": [
      "T-Balance alliances between Western and BRICS-aligned blocs.",
      "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency)."
    ],
    "W-Africa as a geopolitical battleground": [
      "T-Secure strategic influence in Africa as a leading investor.",
      "T-Preserve geopolitical stability and alliances."
    ],
    "W-Militarisation of space": [
      "T-Protect satellite networks and space-based assets.",
      "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom)."
    ],
    "W-Unregulated genetic and biotech breakthroughs": [
      "T-Preserve food security through biosecure agricultural investments.",
      "T-Mitigate risks from biotech failures in African investments."
    ]
  };

  const outcomes = {
    "O-Potential destabilisation of economic sectors": [
      "T-Maintain global economic and technological leadership.",
      "T-Diversify the economy beyond hydrocarbons.",
      "W-Disruptive technologies (AGI, quantum cryptography)"
    ],
    "O-Loss of geopolitical influence in Africa": [
      "T-Secure strategic influence in Africa as a leading investor.",
      "T-Balance alliances between Western and BRICS-aligned blocs.",
      "W-Africa as a geopolitical battleground"
    ],
    "O-Increased exposure to cyber threats": [
      "T-Enhance cybersecurity and resilience to emerging quantum threats.",
      "T-Safeguard critical infrastructure against cyberattacks (energy, logistics, telecom).",
      "W-Disruptive technologies (AGI, quantum cryptography)"
    ],
    "O-Economic shocks from de-dollarisation": [
      "T-Navigate shifting financial systems (e.g., de-dollarisation, cryptocurrency).",
      "T-Balance alliances between Western and BRICS-aligned blocs.",
      "W-BRICS expansion challenging Western economic hegemony"
    ],
    "O-Food security risks from biotech failures": [
      "T-Preserve food security through biosecure agricultural investments.",
      "T-Mitigate risks from biotech failures in African investments.",
      "W-Unregulated genetic and biotech breakthroughs"
    ]
  };

  // 2. Create a combined list of nodes
  const nodes = [
    ...Object.keys(meta_themes),
    ...Object.values(meta_themes).flat(),
    ...Object.keys(wildcards),
    ...Object.keys(outcomes),
  ];

  // Map node strings to their indices
  const nodeIndices = {};
  nodes.forEach((node, i) => {
    nodeIndices[node] = i;
  });

  // 3. Build the links array
  const links = [];

  // (a) Meta-Themes to T-Entries
  for (const [metaTheme, interests] of Object.entries(meta_themes)) {
    interests.forEach(interest => {
      links.push({
        source: nodeIndices[metaTheme],
        target: nodeIndices[interest],
        value: 1
      });
    });
  }

  // (b) T-Entries to Wildcards
  for (const [wildcard, interests] of Object.entries(wildcards)) {
    interests.forEach(interest => {
      links.push({
        source: nodeIndices[interest],
        target: nodeIndices[wildcard],
        value: 1
      });
    });
  }

  // (c) Wildcards to Outcomes
  for (const [outcome, connections] of Object.entries(outcomes)) {
    connections.forEach(connection => {
      links.push({
        source: nodeIndices[connection],
        target: nodeIndices[outcome],
        value: 1
      });
    });
  }

  // 4. Assign colours based on node type
  const nodeColors = nodes.map(node => {
    if (node.startsWith("MT-")) {
      return "#636EFA";  // Meta-Themes (blue)
    } else if (node.startsWith("T-")) {
      return "#EF553B";  // T-entries (red)
    } else if (node.startsWith("W-")) {
      return "#00CC96";  // Wildcards (green)
    } else if (node.startsWith("O-")) {
      return "#AB63FA";  // Outcomes (purple)
    } 
    return "#D3D3D3";    // Default grey (unused here)
  });

  // 5. Positions for alignment by type (roughly)
  const xPositions = [];
  const yPositions = [];


nodes.forEach((node, i) => {
  if (node.startsWith("MT-")) {
    xPositions.push(0.005);  // Was 0.01, now extremely close to left edge
  } else if (node.startsWith("T-")) {
    xPositions.push(0.205);  // Maintaining same spacing from MT
  } else if (node.startsWith("W-")) {
    xPositions.push(0.505);  // Maintaining same spacing from T
  } else if (node.startsWith("O-")) {
    xPositions.push(0.805);  // Maintaining same spacing from W
  } else {
    xPositions.push(0.405);
  }
  yPositions.push((i % 10) / 10);
});

  // 6. Build the Sankey data for Plotly
  const data = [
    {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 20,
        line: { color: "black", width: 0.5 },
        label: nodes,
        color: nodeColors,
        x: xPositions,
        y: yPositions
      },
      link: {
        source: links.map(link => link.source),
        target: links.map(link => link.target),
        value: links.map(link => link.value)
      }
    }
  ];

  // const layout = {
  //   title: "UAE Meta-Themes to Wildcards to Outcomes",
  //   font: { size: 12 },
  //   width: 2400,
  //   height: 1200,
  //   margin: {
  //     l: 0,   // zero left margin
  //     r: 50,  // small right margin
  //     t: 60,  // small top margin for title
  //     b: 0    // zero bottom margin
  //   }
  // };


  const layout = {
    //title: "UAE Meta-Themes to Wildcards to Outcomes",
    font: { size: 12 },
    width: 1152,
    height: 800,
    margin: {
      l: 0,   // zero left margin
      r: 0,   // zero right margin
      t: 60,  // small top margin for title
      b: 0    // zero bottom margin
    },
    autosize: true
  };





  
return (
  // <div className="flex items-center bg-white p-0 ml-60">
  //   <Plot 
  //     data={data} 
  //     layout={layout} 
  //     style={{ width: "100%" }}
  //   />
  // </div>


<div className="flex justify-center items-center w-full bg-white p-4">
    <Plot 
      data={data} 
      layout={layout}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  </div>



);
};


export default SankeyChart;






