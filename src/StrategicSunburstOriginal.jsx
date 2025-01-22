import React, { useState } from 'react';

// Arrow-shaped breadcrumb CSS (same as before)
const arrowCss = `
  .breadcrumb-container {
    display: flex;
    align-items: center;
    gap: 0;
  }

  /* Base arrow step styling */
  .arrow-step {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem 0.5rem 1.5rem; 
    margin-right: 2rem; 
    color: #fff;
    font-weight: 500;
    border-radius: 0.25rem; 
  }

  /* Left side is flat; right side is an arrow point */
  .arrow-step::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0; 
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
  }
  .arrow-step::after {
    content: "";
    position: absolute;
    right: -1rem;
    top: 0;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid; /* The colour is set via the background colour */
  }

  /* Remove right arrow on the last item to avoid a dangling point */
  .arrow-step:last-child::after {
    border-left: none;
  }

  /* Colour coding by “level” */
  .arrow-level1 {
    background-color: #2a4365; /* metaTheme colour */
  }
  .arrow-level1::after {
    border-left-color: #2a4365;
  }

  .arrow-level2 {
    background-color: #2b6cb0; /* theme colour */
  }
  .arrow-level2::after {
    border-left-color: #2b6cb0;
  }

  .arrow-level3 {
    background-color: #ed8936; /* wildcard colour */
  }
  .arrow-level3::after {
    border-left-color: #ed8936;
  }

  .arrow-level4 {
    background-color: #ecc94b; /* outcome colour */
    color: #333; /* black text for better contrast */
  }
  .arrow-level4::after {
    border-left-color: #ecc94b;
  }
`;

const StrategicSunburst = () => {
  // Constants for sizing
  const SVG_SIZE = 1000;
  const CENTER = SVG_SIZE / 2;        // 400
  const RADIUS = SVG_SIZE / 2 - 100; // 300

  // Add the palettes definition here, at component level
  const palettes = {
    colors: [
      ['#1B2631', '#34495E', '#5D6D7E', '#85929E'], // Steel
      ['#4A235A', '#6C3483', '#8E44AD', '#AF7AC5'], // Plum
      ['#0B5345', '#145A32', '#196F3D', '#229954'], // Forest
      ['#5B370C', '#784212', '#9A4D1C', '#B86232'], // Rust
      ['#4A1B12', '#641E16', '#7B241C', '#922B21'], // Wine
      ['#0A4B3E', '#0E6655', '#117A65', '#148F77']  // Pine
    ]
  };



  const [hoveredPath, setHoveredPath] = useState(null);
  const [tooltipInfo, setTooltipInfo] = useState(null);

  const data = [
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Preserve geopolitical stability and alliances",
      wildcard: "Africa as a geopolitical battleground",
      outcome: "Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Diversify the economy beyond hydrocarbons",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Potential destabilisation of economic sectors"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Secure strategic influence in Africa as a leading investor",
      wildcard: "Africa as a geopolitical battleground",
      outcome: "Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Balance alliances between Western and BRICS-aligned blocs",
      wildcard: "BRICS expansion challenging Western economic hegemony",
      outcome: "Economic shocks from de-dollarisation"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Strengthen national AI capabilities and independence",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Increased exposure to cyber threats"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Develop autonomous defence systems to counter AI-driven cyber threats",
      wildcard: "BRICS expansion challenging Western economic hegemony",
      outcome: "Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Preserve food security through biosecure agricultural investments",
      wildcard: "Unregulated genetic and biotech breakthroughs",
      outcome: "Food security risks from biotech failures"
    },
    {
      metaTheme: "Strategic Geopolitical Positioning",
      theme: "Navigate shifting financial systems",
      wildcard: "BRICS expansion challenging Western economic hegemony",
      outcome: "Economic shocks from de-dollarisation"
    },
    {
      metaTheme: "Technological Innovation and Infrastructure",
      theme: "Sustain innovation leadership in advanced energy technologies",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Potential destabilisation of economic sectors"
    },
    {
      metaTheme: "Technological Innovation and Infrastructure",
      theme: "Safeguard critical infrastructure against cyberattacks",
      wildcard: "Militarisation of space",
      outcome: "Increased exposure to cyber threats"
    },
    {
      metaTheme: "Risk Mitigation and Resilience",
      theme: "Mitigate cascading risks from interconnected vulnerabilities",
      wildcard: "Unregulated genetic and biotech breakthroughs",
      outcome: "Food security risks from biotech failures"
    },
    {
      metaTheme: "Risk Mitigation and Resilience",
      theme: "Mitigate risks from biotech failures in African investments",
      wildcard: "Unregulated genetic and biotech breakthroughs",
      outcome: "Food security risks from biotech failures"
    },
    {
      metaTheme: "Cybersecurity Leadership",
      theme: "Ensure cybersecurity and data sovereignty",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Increased exposure to cyber threats"
    },
    {
      metaTheme: "Cybersecurity Leadership",
      theme: "Enhance cybersecurity and resilience to emerging quantum threats",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Increased exposure to cyber threats"
    },
    {
      metaTheme: "Economic Leadership and Gulf Stability",
      theme: "Maintain global economic and technological leadership",
      wildcard: "Disruptive technologies (AGI, quantum cryptography)",
      outcome: "Potential destabilisation of economic sectors"
    },
    {
      metaTheme: "Economic Leadership and Gulf Stability",
      theme: "Maintain dominance in Gulf economic and political affairs",
      wildcard: "BRICS expansion challenging Western economic hegemony",
      outcome: "Economic shocks from de-dollarisation"
    },
    {
      metaTheme: "Space and Energy Security",
      theme: "Protect energy exports and transit routes",
      wildcard: "Militarisation of space",
      outcome: "Increased exposure to cyber threats"
    },
    {
      metaTheme: "Space and Energy Security",
      theme: "Protect satellite networks and space-based assets",
      wildcard: "Militarisation of space",
      outcome: "Increased exposure to cyber threats"
    }
  ];

  // Demo text for the tooltips
  const getLoremText = (index) => {
    const loremTexts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore.",
      "Ut enim ad minim veniam, quis nostrud exercitation.",
      "Duis aute irure dolor in reprehenderit in voluptate.",
      "Excepteur sint occaecat cupidatat non proident sunt."
    ];
    return loremTexts[index % loremTexts.length];
  };

  // On segment hover
  const handleSegmentHover = (e, pathData, index) => {
    // bounding rect for the entire SVG
    const svgRect = e.target.ownerSVGElement.getBoundingClientRect();
    const segmentRect = e.target.getBoundingClientRect();
    
    // Centre of hovered arc in SVG local coords
    const localCenterX = (segmentRect.left + segmentRect.width / 2) - svgRect.left;
    const localCenterY = (segmentRect.top + segmentRect.height / 2) - svgRect.top;

    // Angle from the sunburst centre
    const dx = localCenterX - CENTER;
    const dy = localCenterY - CENTER;
    const angle = Math.atan2(dy, dx);

    // We'll attach the tooltip around radius + 110
    const tooltipRadius = RADIUS + 110;
    const tipX = CENTER + tooltipRadius * Math.cos(angle);
    const tipY = CENTER + tooltipRadius * Math.sin(angle);

    // Elbow around radius + 60
    const elbowRadius = RADIUS + 60;
    const elbowX = CENTER + elbowRadius * Math.cos(angle);
    const elbowY = CENTER + elbowRadius * Math.sin(angle);

    setHoveredPath(pathData);
    setTooltipInfo({
      text: getLoremText(index),
      sourceX: localCenterX,
      sourceY: localCenterY,
      elbowX: elbowX,
      elbowY: elbowY,
      tipX: tipX,
      tipY: tipY
    });
  };

  const handleMouseLeave = () => {
    setHoveredPath(null);
    setTooltipInfo(null);
  };

  // Dim out other segments if they are not part of the hovered path
  const shouldFade = (metaTheme, theme, wildcard, outcome) => {
    if (!hoveredPath) return false;
    if (hoveredPath.metaTheme === metaTheme) {
      if (!theme) return false;
      if (hoveredPath.theme === theme) {
        if (!wildcard) return false;
        if (hoveredPath.wildcard === wildcard) {
          if (!outcome) return false;
          return hoveredPath.outcome !== outcome;
        }
        return true;
      }
      return true;
    }
    return true;
  };


  const getColorForLevel = (metaThemeIndex, level, shouldFadeValue = false) => {
    const colorSet = palettes.colors[metaThemeIndex % palettes.colors.length];
    const baseColor = colorSet[level];
    return shouldFadeValue ? `${baseColor}40` : baseColor;
  };



  // Helper for polar calculations
  const polarToCartesian = (angle, radius) => {
    const angleInRadians = (angle - 90) * Math.PI / 180;
    return {
      x: CENTER + radius * Math.cos(angleInRadians),
      y: CENTER + radius * Math.sin(angleInRadians)
    };
  };

  // Build arc path for a given segment
  const getSegmentPath = (startAngle, endAngle, innerRadius, outerRadius) => {
    const start = polarToCartesian(startAngle, outerRadius);
    const end = polarToCartesian(endAngle, outerRadius);
    const innerStart = polarToCartesian(startAngle, innerRadius);
    const innerEnd = polarToCartesian(endAngle, innerRadius);
    const largeArcFlag = (endAngle - startAngle <= 180) ? 0 : 1;

    return `
      M ${start.x} ${start.y}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
      L ${innerEnd.x} ${innerEnd.y}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}
      Z
    `;
  };

  // Data grouping
  const getUniqueMetaThemes = () => [...new Set(data.map(d => d.metaTheme))];
  const getThemesForMetaTheme = (metaTheme) =>
    [...new Set(data.filter(d => d.metaTheme === metaTheme).map(d => d.theme))];
  const getWildcardsForTheme = (theme) =>
    [...new Set(data.filter(d => d.theme === theme).map(d => d.wildcard))];
  const getOutcomesForWildcard = (wildcard, theme) =>
    [...new Set(data.filter(d => d.wildcard === wildcard && d.theme === theme).map(d => d.outcome))];

  // Build the arcs for the sunburst
  const renderSunburst = () => {
    const metaThemes = getUniqueMetaThemes();
    const metaThemeAngle = 360 / metaThemes.length;
    
    return metaThemes.map((metaTheme, metaIndex) => {
      const themes = getThemesForMetaTheme(metaTheme);
      const themeAngle = metaThemeAngle / themes.length;
      const baseHue = (metaIndex * 360) / metaThemes.length; // colour
       
      return (
        <g key={metaTheme}>
          {/* Level 1 arc */}
          <path
            d={getSegmentPath(
              metaIndex * metaThemeAngle,
              (metaIndex + 1) * metaThemeAngle,
              0,
              RADIUS * 0.25
            )}

            // fill={`hsl(${baseHue}, ${
            //   shouldFade(metaTheme) ? '15%' : '70%'
            // }, ${shouldFade(metaTheme) ? '93%' : '50%'})`}
            fill={getColorForLevel(metaIndex, 0, shouldFade(metaTheme))}


            stroke="white"
            strokeWidth="1"
            onMouseEnter={(e) => handleSegmentHover(e, { metaTheme }, metaIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{metaTheme}</title>
          </path>

          {/* Level 2 arcs */}
          {themes.map((theme, themeIndex) => {
            const startAngle = metaIndex * metaThemeAngle + themeIndex * themeAngle;
            const wildcards = getWildcardsForTheme(theme);
            const wildcardAngle = themeAngle / wildcards.length;

            return (
              <g key={theme}>
                <path
                  d={getSegmentPath(
                    startAngle,
                    startAngle + themeAngle,
                    RADIUS * 0.25,
                    RADIUS * 0.5
                  )}

                //   fill={`hsl(${baseHue}, ${
                //     shouldFade(metaTheme, theme) ? '15%' : '70%'
                //   }, ${shouldFade(metaTheme, theme) ? '93%' : '50%'})`}
                fill={getColorForLevel(metaIndex, 1, shouldFade(metaTheme, theme))}


                  stroke="white"
                  strokeWidth="1"
                  onMouseEnter={(e) =>
                    handleSegmentHover(e, { metaTheme, theme }, themeIndex + metaThemes.length)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <title>{theme}</title>
                </path>

                {/* Level 3 arcs */}
                {wildcards.map((wildcard, wildcardIndex) => {
                  const wildcardStartAngle = startAngle + wildcardIndex * wildcardAngle;
                  const outcomes = getOutcomesForWildcard(wildcard, theme);
                  const outcomeAngle = wildcardAngle / outcomes.length;

                  return (
                    <g key={wildcard}>
                      <path
                        d={getSegmentPath(
                          wildcardStartAngle,
                          wildcardStartAngle + wildcardAngle,
                          RADIUS * 0.5,
                          RADIUS * 0.75
                        )}

                        // fill={`hsl(${baseHue}, ${
                        //   shouldFade(metaTheme, theme, wildcard) ? '15%' : '70%'
                        // }, ${shouldFade(metaTheme, theme, wildcard) ? '93%' : '50%'})`}
                        fill={getColorForLevel(metaIndex, 2, shouldFade(metaTheme, theme, wildcard))}


                        stroke="white"
                        strokeWidth="1"
                        onMouseEnter={(e) =>
                          handleSegmentHover(e, { metaTheme, theme, wildcard }, wildcardIndex)
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <title>{wildcard}</title>
                      </path>

                      {/* Level 4 arcs */}
                      {outcomes.map((outcome, outcomeIndex) => (
                        <path
                          key={outcome}
                          d={getSegmentPath(
                            wildcardStartAngle + outcomeIndex * outcomeAngle,
                            wildcardStartAngle + (outcomeIndex + 1) * outcomeAngle,
                            RADIUS * 0.75,
                            RADIUS
                          )}

                        //   fill={`hsl(${baseHue}, ${
                        //     shouldFade(metaTheme, theme, wildcard, outcome) ? '15%' : '70%'
                        //   }, ${
                        //     shouldFade(metaTheme, theme, wildcard, outcome)
                        //       ? '93%'
                        //       : '50%'
                        //   })`}
                        fill={getColorForLevel(metaIndex, 3, shouldFade(metaTheme, theme, wildcard, outcome))}



                          stroke="white"
                          strokeWidth="1"
                          onMouseEnter={(e) =>
                            handleSegmentHover(
                              e,
                              { metaTheme, theme, wildcard, outcome },
                              outcomeIndex
                            )
                          }
                          onMouseLeave={handleMouseLeave}
                        >
                          <title>{outcome}</title>
                        </path>
                      ))}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </g>
      );
    });
  };

  // Utility for arrow-step classes
  const getArrowClass = (level) => {
    switch (level) {
      case 1: return "arrow-step arrow-level1";
      case 2: return "arrow-step arrow-level2";
      case 3: return "arrow-step arrow-level3";
      case 4: return "arrow-step arrow-level4";
      default: return "arrow-step";
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <style>{arrowCss}</style>

      <div
        className="relative w-full mx-auto"
        style={{
          maxWidth: '1200px',
          // backgroundColor: '#fff',
          borderRadius: '0.5rem',
          position: 'relative',
          minHeight: `${SVG_SIZE + 300}px`,
          paddingTop: '6rem'
        }}
      >
        {hoveredPath && (
          <div
            className="breadcrumb-container"
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              zIndex: 50
            }}
          >
            {/* {hoveredPath.metaTheme && (
              <div className={getArrowClass(1)}>
                {hoveredPath.metaTheme}
              </div>
            )}
            {hoveredPath.theme && (
              <div className={getArrowClass(2)}>
                {hoveredPath.theme}
              </div>
            )}
            {hoveredPath.wildcard && (
              <div className={getArrowClass(3)}>
                {hoveredPath.wildcard}
              </div>
            )}
            {hoveredPath.outcome && (
              <div className={getArrowClass(4)}>
                {hoveredPath.outcome}
              </div>
            )} */}


{hoveredPath.metaTheme && (
  <div className={getArrowClass(1)}>
    <span className="font-bold">Strategic-theme: </span>{hoveredPath.metaTheme}
  </div>
)}
{hoveredPath.theme && (
  <div className={getArrowClass(2)}>
    <span className="font-bold">Theme: </span>{hoveredPath.theme}
  </div>
)}
{hoveredPath.wildcard && (
  <div className={getArrowClass(3)}>
    <span className="font-bold">Wildcard: </span>{hoveredPath.wildcard}
  </div>
)}
{hoveredPath.outcome && (
  <div className={getArrowClass(4)}>
    <span className="font-bold">Outcome: </span>{hoveredPath.outcome}
  </div>
)}


          </div>
        )}

        <div
          style={{
            width: `${SVG_SIZE}px`,
            height: `${SVG_SIZE}px`,
            margin: '0 auto'
          }}
        >
          <svg
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{ overflow: "visible" }}
          >




{/* Legend */}
            <g transform="translate(1050, 200)">
            <text x="0" y="0" className="font-medium text-lg">Legend</text>
            
            {/* Level 1 - Meta-Theme */}
            <g transform="translate(0, 30)">
              <rect width="30" height="30" fill="#2a4365" />
              <text x="45" y="20" className="text-sm">Level 1: Meta-Theme</text>
            </g>
            
            {/* Level 2 - Theme */}
            <g transform="translate(0, 70)">
              <rect width="30" height="30" fill="#2b6cb0" />
              <text x="45" y="20" className="text-sm">Level 2: Theme</text>
            </g>
            
            {/* Level 3 - Wildcard */}
            <g transform="translate(0, 110)">
              <rect width="30" height="30" fill="#ed8936" />
              <text x="45" y="20" className="text-sm">Level 3: Wildcard</text>
            </g>
            
            {/* Level 4 - Outcome */}
            <g transform="translate(0, 150)">
              <rect width="30" height="30" fill="#ecc94b" />
              <text x="45" y="20" className="text-sm">Level 4: Outcome</text>
            </g>

            {/* Description */}
            <text x="0" y="200" className="text-xs">
              <tspan x="0" dy="0">Hover over segments to see the</tspan>
              <tspan x="0" dy="20">complete path from Meta-Theme</tspan>
              <tspan x="0" dy="20">to Outcome</tspan>
            </text>
          </g>








            {renderSunburst()}




            {/* {tooltipInfo && (
              <g>
                <path
                  d={`
                    M ${tooltipInfo.sourceX} ${tooltipInfo.sourceY}
                    L ${tooltipInfo.elbowX} ${tooltipInfo.elbowY}
                    L ${tooltipInfo.tipX} ${tooltipInfo.tipY}
                  `}
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  className="opacity-60"
                  style={{ pointerEvents: 'none' }}
                />
                
                <foreignObject
                  x={tooltipInfo.tipX - 100}
                  y={tooltipInfo.tipY - 50}
                  width="200"
                  height="100"
                >
                  <div
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '0.5rem',
                      padding: '0.75rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                    }}
                  >
                    <p style={{ fontSize: '0.85rem', margin: 0 }}>
                      {tooltipInfo.text}
                    </p>
                  </div>
                </foreignObject>
              </g>
            )} */}



          </svg>
        </div>

        {/* <div className="mt-8 text-center px-4 pb-8">
          {hoveredPath && (
            <div className="space-y-2">
              {hoveredPath.metaTheme && (
                <p className="font-bold">
                  <span>Level 1 (Meta-Theme):</span> {hoveredPath.metaTheme}
                </p>
              )}
              {hoveredPath.theme && (
                <p className="text-gray-700">
                  <span>Level 2 (Theme):</span> {hoveredPath.theme}
                </p>
              )}
              {hoveredPath.wildcard && (
                <p className="text-gray-600">
                  <span>Level 3 (Wildcard):</span> {hoveredPath.wildcard}
                </p>
              )}
              {hoveredPath.outcome && (
                <p className="text-gray-500">
                  <span>Level 4 (Outcome):</span> {hoveredPath.outcome}
                </p>
              )}
            </div>
          )}
        </div>
 */}


<div className="mt-8 text-center w-full text-2xl font-bold text-gray-900">
  Figure: Strategic Interconnections & Risk Pathways
</div>


      </div>
    </div>
  );
};

export default StrategicSunburst;



