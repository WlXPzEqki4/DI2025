import React from 'react';

const CurvedMenu = ({ 
  items, 
  selectedItem, 
  onItemHover, 
  onItemLeave,
  svgSize = 800,
  menuRadius = 650,  // Controls how far from center the menu curves
  startAngle = 60,  // Degrees from top where menu starts
  endAngle = 120,     // Degrees from top where menu ends
}) => {
  const center = svgSize / 2;
  
  const polarToCartesian = (angle, radius) => {
    const angleInRadians = (angle - 90) * Math.PI / 180;
    return {
      x: center + radius * Math.cos(angleInRadians),
      y: center + radius * Math.sin(angleInRadians)
    };
  };

  const angleStep = (endAngle - startAngle) / (items.length - 1);

  // Get color based on index (matching sunburst segments)
  const getColor = (index) => {
    const baseHue = (index * 360) / items.length;
    return `hsl(${baseHue}, 70%, 50%)`;
  };

  const getLoremIpsum = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  };

  return (
    <g className="curved-menu">
      {items.map((item, index) => {
        const angle = startAngle + (angleStep * index);
        const pos = polarToCartesian(angle, menuRadius);
        const isSelected = selectedItem === item;
        const itemColor = getColor(index);
        
        return (
          <g
            key={index}
            transform={`translate(${pos.x}, ${pos.y})`}
            onMouseEnter={() => onItemHover(item)}
            onMouseLeave={onItemLeave}
            style={{ cursor: 'pointer' }}
          >
            {/* Container for better hover */}
            <rect
              x="0"
              y="-24"
              width="300"
              height="48"
              fill="transparent"
              rx="4"
            />
            
            {/* Number */}
            <text
              x="0"
              y="0"
              className="text-3xl font-bold"
              fill={isSelected ? itemColor : '#374151'}
            >
              {index + 1}
            </text>

            {/* Main title */}
            <text
              x="30"
              y="0"
              className="text-2xl font-semibold"
              fill={isSelected ? itemColor : '#374151'}
            >
              {item}
            </text>

            {/* Underline */}
            <line
              x1="0"
              y1="8"
              x2="280"
              y2="8"
              stroke={isSelected ? itemColor : 'transparent'}
              strokeWidth="1"
            />

            {/* Placeholder text */}
            <text
              x="0"
              y="24"
              className="text-xl fill-gray-500"
            >
              {getLoremIpsum()}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default CurvedMenu;




