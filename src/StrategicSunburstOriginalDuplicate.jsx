




import React, { useState } from 'react';
import CurvedMenu from './CurvedMenu';

const StrategicSunburst = () => {
  // Constants for sizing
  const SVG_SIZE = 1000;
  const CENTER = SVG_SIZE / 2;        
  const RADIUS = SVG_SIZE / 2 - 100; 

  // State for hovered path (breadcrumb) & tooltip
  const [hoveredPath, setHoveredPath] = useState(null);
  const [tooltipInfo, setTooltipInfo] = useState(null);

  // State for globe index, if you want to fly the globe on arc hover
  const [hoveredPointIndex, setHoveredPointIndex] = useState(null);

  // Arrow-shaped breadcrumb CSS
  const arrowCss = `
    .breadcrumb-container {
      display: flex;
      align-items: center;
      gap: 0;
    }
    .arrow-step {
      position: relative;
      display: inline-block;
      padding: 0.5rem 1rem 0.5rem 1.5rem; 
      margin-right: 2rem; 
      color: #fff;
      font-weight: 500;
      border-radius: 0.25rem; 
    }
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
      border-left: 1rem solid;
    }
    .arrow-step:last-child::after {
      border-left: none;
    }
    .arrow-level1 {
      background-color: #2a4365;
    }
    .arrow-level1::after {
      border-left-color: #2a4365;
    }
    .arrow-level2 {
      background-color: #2b6cb0;
    }
    .arrow-level2::after {
      border-left-color: #2b6cb0;
    }
    .arrow-level3 {
      background-color: #ed8936;
    }
    .arrow-level3::after {
      border-left-color: #ed8936;
    }
    .arrow-level4 {
      background-color: #ecc94b;
      color: #333;
    }
    .arrow-level4::after {
      border-left-color: #ecc94b;
    }
  `;

// Complete dataset
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

  // Generate a short text for demonstration
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

  // Called on mouse enter of a segment
  const handleSegmentHover = (e, pathData, index) => {
    const svgRect = e.target.ownerSVGElement.getBoundingClientRect();
    const segmentRect = e.target.getBoundingClientRect();
    
    const localCenterX = (segmentRect.left + segmentRect.width / 2) - svgRect.left;
    const localCenterY = (segmentRect.top + segmentRect.height / 2) - svgRect.top;

    const dx = localCenterX - CENTER;
    const dy = localCenterY - CENTER;
    const angle = Math.atan2(dy, dx);

    const tooltipRadius = RADIUS + 110;
    const tipX = CENTER + tooltipRadius * Math.cos(angle);
    const tipY = CENTER + tooltipRadius * Math.sin(angle);

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

    // If you want the globe to fly to a certain point, store index (or some mapping) here
    setHoveredPointIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredPath(null);
    setTooltipInfo(null);
    setHoveredPointIndex(null);
  };

  // Decide whether to "fade" a segment
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

  // Convert polar coords to cartesian
  const polarToCartesian = (angle, radius) => {
    const angleInRadians = (angle - 90) * Math.PI / 180;
    return {
      x: CENTER + radius * Math.cos(angleInRadians),
      y: CENTER + radius * Math.sin(angleInRadians)
    };
  };

  // Build an arc path
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

  // Data helpers
  const getUniqueMetaThemes = () => [...new Set(data.map(d => d.metaTheme))];
  const getThemesForMetaTheme = (metaTheme) =>
    [...new Set(data.filter(d => d.metaTheme === metaTheme).map(d => d.theme))];
  const getWildcardsForTheme = (theme) =>
    [...new Set(data.filter(d => d.theme === theme).map(d => d.wildcard))];
  const getOutcomesForWildcard = (wildcard, theme) =>
    [...new Set(data.filter(d => d.wildcard === wildcard && d.theme === theme).map(d => d.outcome))];

  // Breadcrumb styling
  const getArrowClass = (level) => {
    switch (level) {
      case 1: return "arrow-step arrow-level1";
      case 2: return "arrow-step arrow-level2";
      case 3: return "arrow-step arrow-level3";
      case 4: return "arrow-step arrow-level4";
      default: return "arrow-step";
    }
  };

  // Render the 4-level sunburst
  const renderSunburst = () => {
    const metaThemes = getUniqueMetaThemes();
    const metaThemeAngle = 360 / metaThemes.length;
    
    return metaThemes.map((metaTheme, metaIndex) => {
      const themes = getThemesForMetaTheme(metaTheme);
      const themeAngle = metaThemeAngle / themes.length;
      const baseHue = (metaIndex * 360) / metaThemes.length;
      
      return (
        <g key={metaTheme}>
          {/* Level 1 arc: metaTheme */}
          <path
            d={getSegmentPath(
              metaIndex * metaThemeAngle,
              (metaIndex + 1) * metaThemeAngle,
              0,
              RADIUS * 0.25
            )}
            fill={`hsl(${baseHue}, ${
              shouldFade(metaTheme) ? '15%' : '70%'
            }, ${shouldFade(metaTheme) ? '93%' : '50%'})`}
            stroke="white"
            strokeWidth="1"
            onMouseEnter={(e) => handleSegmentHover(e, { metaTheme }, metaIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{metaTheme}</title>
          </path>

          {/* Level 2 arcs: themes */}
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
                  fill={`hsl(${baseHue}, ${
                    shouldFade(metaTheme, theme) ? '15%' : '70%'
                  }, ${shouldFade(metaTheme, theme) ? '93%' : '50%'})`}
                  stroke="white"
                  strokeWidth="1"
                  onMouseEnter={(e) =>
                    handleSegmentHover(e, { metaTheme, theme }, themeIndex + metaThemes.length)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <title>{theme}</title>
                </path>

                {/* Level 3 arcs: wildcards */}
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
                        fill={`hsl(${baseHue}, ${
                          shouldFade(metaTheme, theme, wildcard) ? '15%' : '70%'
                        }, ${shouldFade(metaTheme, theme, wildcard) ? '93%' : '50%'})`}
                        stroke="white"
                        strokeWidth="1"
                        onMouseEnter={(e) =>
                          handleSegmentHover(e, { metaTheme, theme, wildcard }, wildcardIndex)
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <title>{wildcard}</title>
                      </path>

                      {/* Level 4 arcs: outcomes */}
                      {outcomes.map((outcome, outcomeIndex) => (
                        <path
                          key={outcome}
                          d={getSegmentPath(
                            wildcardStartAngle + outcomeIndex * outcomeAngle,
                            wildcardStartAngle + (outcomeIndex + 1) * outcomeAngle,
                            RADIUS * 0.75,
                            RADIUS
                          )}
                          fill={`hsl(${baseHue}, ${
                            shouldFade(metaTheme, theme, wildcard, outcome) ? '15%' : '70%'
                          }, ${
                            shouldFade(metaTheme, theme, wildcard, outcome)
                              ? '93%'
                              : '50%'
                          })`}
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

  return (
    // OUTER WRAPPER: Full width with vertical padding
    <div style={{ width: '100%', padding: '2rem' }}>
      {/* INNER WRAPPER: Flex container to align the globe and sunburst */}
      <div
        style={{
          maxWidth: '2000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center', // Adjust vertical alignment
          justifyContent: 'flex-start', // Ensure items align to the start
        }}
      >
  
        {/* RIGHT COLUMN: The sunburst */}
        <div style={{ flex: 1, position: 'relative' }}>
          {/* Breadcrumb styling */}
          <style>{arrowCss}</style>
  
          {/* Sunburst container */}
          <div
            className="relative w-full mx-auto"
            style={{
              position: 'relative',
              minHeight: '900px',
              paddingTop: '2rem',
            }}
          >
            {/* Breadcrumb container */}
            {hoveredPath && (
              <div
                className="breadcrumb-container"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  zIndex: 50,
                }}
              >
                  {/* Add breadcrumb content here */}
              </div>
            )}
  
            {/* Sunburst SVG */}
            <div
              style={{
                width: `${SVG_SIZE}px`,
                height: `${SVG_SIZE}px`,
                //margin: '0 auto',
                margin: '0 0 0 200px', // shift sunburst 200px to the right
              }}
            >
              <svg
                width={SVG_SIZE}
                height={SVG_SIZE}
                viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
                style={{ overflow: 'visible' }}
              >
                {renderSunburst()}
  
                {/* Curved Menu */}
                <CurvedMenu
                  items={getUniqueMetaThemes()}
                  selectedItem={hoveredPath?.metaTheme}
                  onItemHover={(theme) => setHoveredPath({ metaTheme: theme })}
                  onItemLeave={handleMouseLeave}
                  svgSize={SVG_SIZE}
                />
  
                {/* Tooltip if hovering */}
                {tooltipInfo && (
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
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        }}
                      >
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>
                          {tooltipInfo.text}
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                )}
              </svg>
            </div>
  
            {/* Additional text block */}
            <div className="mt-8 text-center px-4 pb-8">
              {hoveredPath && (
                <div className="space-y-2">
                  {/* Show hoveredPath details */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicSunburst;






