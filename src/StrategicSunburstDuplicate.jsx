



import React, { useState } from 'react';
import CurvedMenu from './CurvedMenu';



const StrategicSunburst = () => {
  const SVG_SIZE = 900;
  const CENTER = SVG_SIZE / 2;
  const RADIUS = SVG_SIZE / 2 - 50;

  const [hoveredPath, setHoveredPath] = useState(null);
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [selectedPalette, setSelectedPalette] = useState(1);

  // Color palettes
  const palettes = [
    {
      name: "Professional",
      colors: [
        ['#1A4A8C', '#2E5BA7', '#4B7BC7', '#779BE0'], // Blue
        ['#6C3483', '#8E44AD', '#A569BD', '#BB8FCE'], // Purple
        ['#196F3D', '#27AE60', '#52BE80', '#82E0AA'], // Green
        ['#BA4A00', '#D35400', '#E67E22', '#F5B041'], // Orange
        ['#922B21', '#C0392B', '#E74C3C', '#F1948A'], // Red
        ['#0E6655', '#16A085', '#45B7A7', '#7ACCC1']  // Teal
      ]
    },
    {
      name: "Muted",
      colors: [
        ['#1B2631', '#34495E', '#5D6D7E', '#85929E'], // Steel
        ['#4A235A', '#6C3483', '#8E44AD', '#AF7AC5'], // Plum
        ['#0B5345', '#145A32', '#196F3D', '#229954'], // Forest
        ['#5B370C', '#784212', '#9A4D1C', '#B86232'], // Rust
        ['#4A1B12', '#641E16', '#7B241C', '#922B21'], // Wine
        ['#0A4B3E', '#0E6655', '#117A65', '#148F77']  // Pine
      ]
    },
    {
      name: "Vibrant",
      colors: [
        ['#1A3A6C', '#1F4788', '#2E6BC7', '#4A90E2'], // Azure
        ['#6C3483', '#8E44AD', '#9B59B6', '#C39BD3'], // Amethyst
        ['#1D8348', '#27AE60', '#2ECC71', '#82E0AA'], // Emerald
        ['#D68910', '#F39C12', '#F5B041', '#F8C471'], // Golden
        ['#922B21', '#C0392B', '#E74C3C', '#F1948A'], // Ruby
        ['#0E6655', '#16A085', '#1ABC9C', '#48C9B0']  // Turquoise
      ]
    }
  ];

  // Helper for getting colors from current palette with fading support
  // Get tooltip text for segments
  const getTooltipText = (index) => {
    const texts = [
      "Meta-theme representing a major strategic area",
      "Theme within the strategic domain",
      "Potential disruptive factor or wildcard event",
      "Expected or potential outcome"
    ];
    return texts[index % texts.length];
  };

  const getColorForLevel = (metaThemeIndex, level, shouldFadeValue = false) => {
    const colorSet = palettes[selectedPalette].colors[metaThemeIndex % palettes[selectedPalette].colors.length];
    const baseColor = colorSet[level];
    return shouldFadeValue ? `${baseColor}40` : baseColor;
  };

  // Path highlighting logic
  const shouldFade = (metaTheme, theme, wildcard, outcome) => {
    if (!hoveredPath) return false;
    
    if (hoveredPath.metaTheme !== metaTheme) return true;
    if (!theme) return false;
    
    if (hoveredPath.theme !== theme) return true;
    if (!wildcard) return false;
    
    if (hoveredPath.wildcard !== wildcard) return true;
    if (!outcome) return false;
    
    return hoveredPath.outcome !== outcome;
  };

  const data = [
    {
      metaTheme: "MT-Technological Innovation and Infrastructure",
      theme: "T-Maintain dominance in Gulf economic and political affairs",
      wildcard: "W-Disruptive technologies (AGI, quantum cryptography)",
      outcome: "O-Increased exposure to cyber threat"
    },
    {
      metaTheme: "MT-Risk Mitigation and Resilience",
      theme: "T-Protect energy exports and transit routes agricultural investments",
      wildcard: "W-BRICS expansion challenging Western economic hegemony",
      outcome: "O-Economic shocks from de-dollarizat"
    },
    {
      metaTheme: "MT-Cybersecurity Leadership",
      theme: "T-Maintain global economic and technological leadership",
      wildcard: "W-Disruptive technologies (AGI, quantum cryptography)",
      outcome: "O-Food security risks from biotech fail"
    },
    {
      metaTheme: "MT-Economic Leadership and Gulf Stability",
      theme: "T-Protect satellite networks and space-based assets",
      wildcard: "W-Militarization of space",
      outcome: "O-Potential destabilization of economi"
    },
    {
      metaTheme: "MT-Space and Energy Security", 
      theme: "T-Sustain innovation leadership in advanced energy technologies",
      wildcard: "W-Africa as a geopolitical battleground",
      outcome: "O-Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Strengthen national AI capabilities and independence",
      wildcard: "W-Disruptive technologies (AGI, quantum cryptography)", 
      outcome: "O-Increased exposure to cyber threat"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Safeguard critical infrastructure against cyberattacks",
      wildcard: "W-BRICS expansion challenging Western economic hegemony",
      outcome: "O-Economic shocks from de-dollarizat"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Mitigate cascading risks from interconnected vulnerabilities",
      wildcard: "W-Unregulated genetic and biotech breakthroughs",
      outcome: "O-Food security risks from biotech fail"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Mitigate risks from biotech failures in African investments",
      wildcard: "W-Militarization of space",
      outcome: "O-Potential destabilization of economi"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Ensure cybersecurity and data sovereignty during investor",
      wildcard: "W-Africa as a geopolitical battleground",
      outcome: "O-Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "MT-Strategic Geopolitical Positioning",
      theme: "T-Enhance cybersecurity and resilience to emerging quantum threats",
      wildcard: "W-Disruptive technologies (AGI, quantum cryptography)",
      outcome: "O-Increased exposure to cyber threat"
    },
    {
      metaTheme: "MT-Technological Innovation and Infrastructure",
      theme: "T-Maintain dominance in Gulf economic and political affairs",
      wildcard: "W-BRICS expansion challenging Western economic hegemony",
      outcome: "O-Economic shocks from de-dollarizat"
    },
    {
      metaTheme: "MT-Space and Energy Security",
      theme: "T-Protect satellite networks and space-based assets",
      wildcard: "W-Militarization of space",
      outcome: "O-Potential destabilization of economi"
    },
    {
      metaTheme: "MT-Economic Leadership and Gulf Stability",
      theme: "T-Maintain global economic and technological leadership",
      wildcard: "W-Africa as a geopolitical battleground",
      outcome: "O-Loss of geopolitical influence in Africa"
    },
    {
      metaTheme: "MT-Cybersecurity Leadership",
      theme: "T-Strengthen national AI capabilities and independence",
      wildcard: "W-Disruptive technologies (AGI, quantum cryptography)",
      outcome: "O-Increased exposure to cyber threat"
    },
    {
      metaTheme: "MT-Risk Mitigation and Resilience",
      theme: "T-Safeguard critical infrastructure against cyberattacks",
      wildcard: "W-BRICS expansion challenging Western economic hegemony",
      outcome: "O-Economic shocks from de-dollarizat"
    },
    {
      metaTheme: "MT-Economic Leadership and Gulf Stability",
      theme: "T-Mitigate cascading risks from interconnected vulnerabilities",
      wildcard: "W-Unregulated genetic and biotech breakthroughs",
      outcome: "O-Food security risks from biotech fail"
    },
    {
      metaTheme: "MT-Risk Mitigation and Resilience",
      theme: "T-Mitigate risks from biotech failures in African investments",
      wildcard: "W-Militarization of space",
      outcome: "O-Potential destabilization of economi"
    }
  ];

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

  // Data grouping functions
  const getUniqueMetaThemes = () => [...new Set(data.map(d => d.metaTheme))];
  const getThemesForMetaTheme = (metaTheme) =>
    [...new Set(data.filter(d => d.metaTheme === metaTheme).map(d => d.theme))];
  const getWildcardsForTheme = (theme) =>
    [...new Set(data.filter(d => d.theme === theme).map(d => d.wildcard))];
  const getOutcomesForWildcard = (wildcard, theme) =>
    [...new Set(data.filter(d => d.wildcard === wildcard && d.theme === theme).map(d => d.outcome))];

  // Hover handling
  const handleSegmentHover = (e, pathData, index) => {
    const svgRect = e.target.ownerSVGElement.getBoundingClientRect();
    const segmentRect = e.target.getBoundingClientRect();
    
    const localCenterX = (segmentRect.left + segmentRect.width / 2) - svgRect.left;
    const localCenterY = (segmentRect.top + segmentRect.height / 2) - svgRect.top;

    const tooltipRadius = RADIUS + 110;
    const dx = localCenterX - CENTER;
    const dy = localCenterY - CENTER;
    const angle = Math.atan2(dy, dx);

    const tipX = CENTER + tooltipRadius * Math.cos(angle);
    const tipY = CENTER + tooltipRadius * Math.sin(angle);

    const elbowRadius = RADIUS + 60;
    const elbowX = CENTER + elbowRadius * Math.cos(angle);
    const elbowY = CENTER + elbowRadius * Math.sin(angle);

    setHoveredPath(pathData);
    setTooltipInfo({
      text: getTooltipText(index),
      sourceX: localCenterX,
      sourceY: localCenterY,
      elbowX,
      elbowY,
      tipX,
      tipY
    });
  };

  const handleMouseLeave = () => {
    setHoveredPath(null);
    setTooltipInfo(null);
  };

  // Rendering logic
  const renderSunburst = () => {
    const metaThemes = getUniqueMetaThemes();
    const metaThemeAngle = 360 / metaThemes.length;
    
    return metaThemes.map((metaTheme, metaIndex) => {
      const themes = getThemesForMetaTheme(metaTheme);
      const themeAngle = metaThemeAngle / themes.length;
      
      return (
        <g key={metaTheme}>
          <path
            d={getSegmentPath(
              metaIndex * metaThemeAngle,
              (metaIndex + 1) * metaThemeAngle,
              0,
              RADIUS * 0.25
            )}
            fill={getColorForLevel(metaIndex, 0, shouldFade(metaTheme))}
            stroke="white"
            strokeWidth="1"
            onMouseEnter={(e) => handleSegmentHover(e, { metaTheme }, metaIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{metaTheme}</title>
          </path>

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
                  fill={getColorForLevel(metaIndex, 1, shouldFade(metaTheme, theme))}
                  stroke="white"
                  strokeWidth="1"
                  onMouseEnter={(e) => handleSegmentHover(e, { metaTheme, theme }, themeIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <title>{theme}</title>
                </path>

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
                        fill={getColorForLevel(metaIndex, 2, shouldFade(metaTheme, theme, wildcard))}
                        stroke="white"
                        strokeWidth="1"
                        onMouseEnter={(e) => handleSegmentHover(e, { metaTheme, theme, wildcard }, wildcardIndex)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <title>{wildcard}</title>
                      </path>

                      {outcomes.map((outcome, outcomeIndex) => (
                        <path
                          key={outcome}
                          d={getSegmentPath(
                            wildcardStartAngle + outcomeIndex * outcomeAngle,
                            wildcardStartAngle + (outcomeIndex + 1) * outcomeAngle,
                            RADIUS * 0.75,
                            RADIUS
                          )}
                          fill={getColorForLevel(metaIndex, 3, shouldFade(metaTheme, theme, wildcard, outcome))}
                          stroke="white"
                          strokeWidth="1"
                          onMouseEnter={(e) => handleSegmentHover(e, { metaTheme, theme, wildcard, outcome }, outcomeIndex)}
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
    <div className="p-8 bg-white">
      {/* <div className="flex gap-4 mb-6 justify-center">
        {palettes.map((palette, idx) => (
          <button
            key={palette.name}
            onClick={() => setSelectedPalette(idx)}
            className={`px-4 py-2 rounded ${
              selectedPalette === idx 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {palette.name}
          </button>
        ))}
      </div> */}

      {/* <div className="relative w-full mx-auto max-w-6xl bg-white rounded-lg shadow-lg p-8"> */}
      <div className="relative w-full mx-auto max-w-6xl bg-white p-8">
        {/* <div className="w-full" style={{ maxWidth: SVG_SIZE, margin: '0 auto' }}> */}
        <div className="w-full" style={{ maxWidth: SVG_SIZE, margin: '0 0 0 -200px' }}>



          <svg
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{ overflow: "visible" }}
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
                    className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg"
                  >
                    <p className="text-sm m-0">
                      {tooltipInfo.text}
                    </p>
                  </div>
                </foreignObject>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StrategicSunburst;




