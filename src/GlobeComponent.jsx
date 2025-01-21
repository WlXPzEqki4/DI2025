

import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeWithMenu = () => {
  const globeRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const globeWidth = 1200;
  const globeHeight = 1200;
  const containerWidth = 1500;
  const containerHeight = 1500;
  const globeCenterX = containerWidth - globeWidth / 2;
  const globeCenterY = containerHeight / 2;

  const locations = [
    {
      name: 'Strategic Geopolitical Positioning',
      lat: 37.7749,
      lng: -122.4194,
      subText: 'Focused on global influence, partnerships, and \ninternational stability',
      subNodes: [
        'Forge Global Alliances: \nStrengthen partnerships with BRICS, Africa, and \nWestern powers to secure UAE’s global influence',
        'Diversify International Engagements: \nBalance economic, political, and \nsecurity alliances to mitigate reliance on single blocs',
        'Regional Stability: \nDrive UAE’s leadership role in Gulf and broader \nMiddle East peace and trade initiatives'
      ]
    },
    {
      name: 'Technological Innovation & Infrastructure',
      lat: 51.5074,
      lng: -0.1278,
      subText: 'Emphasising leadership in critical systems such \nas energy, logistics, and advanced technology',
      subNodes: [
        'Lead in Energy Systems: \nAdvance innovation in renewable and advanced energy technologies to maintain global competitiveness',
        'Protect Critical Infrastructure: \nSafeguard logistics, energy grids, and cyber-physical systems from emerging threats',
        'Smart Nation Growth: \nInvest in cutting-edge technologies to accelerate UAE’s leadership in logistics, AI, and smart city infrastructure'
      ]
    },
    {
      name: 'Risk Mitigation & Resilience',
      lat: -33.8688,
      lng: 151.2093,
      subText: 'Addressing vulnerabilities from cascading risks,\nbiotech disruptions, and interconnected dependencies',
      subNodes: [
        'Cascading Risk Control: \nStrengthen preparedness for interconnected vulnerabilities across supply chains and finance',
        'Biosecurity Leadership: \nMitigate risks from biotech disruptions and ensure food and agricultural resilience',
        'Proactive Risk Governance: \nBuild adaptive frameworks to withstand systemic shocks and cross-sector dependencies'
      ]
    },
    {
      name: 'Cybersecurity Leadership',
      lat: 35.6895,
      lng: 139.6917,
      subText: 'Ensuring sovereignty over data and cybersecurity,\nwith a focus on AI and quantum threat mitigation',
      subNodes: [
        'Data Sovereignty: \nEnsure UAE’s control over critical data systems and cloud infrastructures',
        'Quantum and AI Defence: \nLead in protecting against next-generation cyber threats such as AI-driven and quantum attacks',
        'Technological Independence: \nDevelop indigenous cybersecurity solutions to secure UAE’s technological future'
      ]
    },
    {
      name: 'Economic Leadership & Gulf Stability',
      lat: 28.6139,
      lng: 77.209,
      subText: 'Maintaining competitiveness in Gulf economic \naffairs and adaptability in shifting financial systems',
      subNodes: [
        'Global Economic Hub: \nCement UAE’s position as the region’s leading financial, trade, and technology hub',
        'Adapt to Financial Shifts: \nNavigate challenges like de-dollarisation and fragmented financial systems to stay competitive',
        'Strengthen Gulf Dominance: \nMaintain leadership in Gulf economic and energy affairs while fostering diversification'
      ]
    },
    {
      name: 'Space & Energy Security',
      lat: 55.7558,
      lng: 37.6173,
      subText: 'Protecting critical resources such as energy \nexports and satellite systems',
      subNodes: [
        'Secure Energy Exports: \nSafeguard oil, gas, and renewable energy corridors vital to UAE’s economy',
        'Space Sovereignty: \nProtect satellite networks critical to communication, defence, and national infrastructure',
        'Energy Transition Leadership: \nPioneer energy diversification and innovation to ensure long-term stability in global markets'
      ]
    }
  ];

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableRotate = true;
      controls.enableZoom = false;
    }
  }, []);

  const focusOnPoint = (lat, lng, name) => {
    if (globeRef.current) {
      const focusMarker = { lat, lng, name, isFocusMarker: true };
      setMarkers([focusMarker]);
      globeRef.current.pointOfView({ lat, lng, altitude: 2 }, 2000);
    }
  };

  return (
    <>
      <div 
        style={{ 
          fontFamily: 'Roboto, sans-serif',
          width: containerWidth, 
          height: containerHeight,
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <svg
          width={containerWidth}
          height={containerHeight}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: 'none', // pass drag events to the globe behind
            overflow: 'visible'
          }}
        >
          {/** Removed the circle element that was causing the large ring **/}

          {locations.map((location, index) => {
            // Distribute items around angles 295 -> 245
            const angleStep = (245 - 295) / (locations.length - 1);
            const angle = 295 + angleStep * index;
            const pos = {
              x: globeCenterX + 890 * Math.cos((angle - 90) * Math.PI / 180),
              y: globeCenterY + 890 * Math.sin((angle - 90) * Math.PI / 180)
            };

            return (
              <g 
                key={index}
                transform={`translate(${pos.x}, ${pos.y})`}
                style={{ pointerEvents: 'auto' }}
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Title */}
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className="text-2xl font-bold fill-current text-gray-800 cursor-pointer"
                  onClick={() => focusOnPoint(location.lat, location.lng, location.name)}
                >
                  {location.name}
                </text>

                {/* Red horizontal line */}
                <line
                  x1="-80"
                  y1="8"
                  x2="80"
                  y2="8"
                  stroke="red"
                  strokeWidth="2"
                />

                {/* Subtext */}
                <text
                  x="0"
                  y="28"
                  textAnchor="middle"
                  className="text-base fill-current text-gray-700 cursor-pointer"
                  onClick={() => focusOnPoint(location.lat, location.lng, location.name)}
                >
                  {location.subText.split('\n').map((line, i) => (
                    <tspan key={i} x="0" dy={i === 0 ? 0 : '1.2em'}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hovered Info / Right-hand content */}
        <div 
          style={{
            position: 'absolute',
            left: globeCenterX + globeWidth / 2,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '500px',
            zIndex: 2,
            textAlign: 'left'
          }}
        >
          {hoveredLocation !== null && hoveredLocation < locations.length && (
            <div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  textAlign: 'left',
                  lineHeight: '1.5'
                }}
              >
                {locations[hoveredLocation].name}
              </h3>

              {locations[hoveredLocation].subNodes.map((subNode, index) => {
                // Split heading (before the colon) from the rest
                const [heading, ...content] = subNode.split(': ');

                return (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    {/* Heading */}
                    <p
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        marginBottom: '5px',
                        lineHeight: '1.5'
                      }}
                    >
                      {heading}:
                    </p>
                    {/* Content */}
                    <p
                      style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        textAlign: 'left',
                        wordBreak: 'break-word'
                      }}
                    >
                      {content.join(': ')}
                    </p>

                    {/* Wildcard subheading and single bullet */}
                    <p
                      style={{
                        color: 'red',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        marginBottom: '5px',
                        fontSize: '1.4rem'
                      }}
                    >
                      Wildcard:
                    </p>
                    <ul
                      style={{
                        marginLeft: '40px',
                        listStyleType: 'disc',
                        paddingLeft: '1rem',
                        color: 'red',
                        fontSize: '1.2rem'
                      }}
                    >
                      <li style={{ marginBottom: '0.5rem' }}>
                        Bullet point 1
                      </li>
                    </ul>

                    {/* Outcome subheading and single bullet */}
                    <p
                      style={{
                        color: 'darkorange',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        marginBottom: '5px',
                        fontSize: '1.4rem'
                      }}
                    >
                      Outcome:
                    </p>
                    <ul
                      style={{
                        marginLeft: '40px',
                        listStyleType: 'disc',
                        paddingLeft: '1rem',
                        color: 'darkorange',
                        fontSize: '1.2rem'
                      }}
                    >
                      <li style={{ marginBottom: '0.5rem' }}>
                        Bullet point 1
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Globe itself */}
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: globeWidth,
            height: globeHeight,
            zIndex: 1
          }}
        >
          <Globe
            ref={globeRef}
            width={globeWidth}
            height={globeHeight}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
            markersData={markers}
            markerLat={m => m.lat}
            markerLng={m => m.lng}
            markerLabel={m => m.name}
          />
        </div>
      </div>
    </>
  );
};

export default GlobeWithMenu;






