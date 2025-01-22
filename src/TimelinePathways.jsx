// import React, { useState, useEffect } from 'react';
// import { Router } from 'lucide-react';

// const TimelinePathway = ({ pathway, index, isVisible, totalPoints }) => {
//   // Calculate positions along ascending diagonal
//   const baseY = 300; // Center line y-position
//   const startX = 100;
//   const endX = 900;
//   const xStep = (endX - startX) / (totalPoints - 1);
//   const x = startX + (index * xStep);
//   const y = baseY;
  
//   // Alternate above/below
//   const isAbove = index % 2 === 0;
//   const textY = isAbove ? y - 100 : y + 100;
  
//   return (
//     <g
//       className={`transition-all duration-1000 ease-out ${
//         isVisible ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         transitionDelay: `${index * 400}ms`,
//       }}
//     >
//       {/* Vertical connector line */}
//       <line 
//         x1={x}
//         y1={y}
//         x2={x}
//         y2={textY}
//         stroke="#f97316"
//         strokeWidth="2"
//         className={isVisible ? 'opacity-100' : 'opacity-0'}
//       />
      
//       {/* Number circle */}
//       <circle 
//         cx={x} 
//         cy={textY} 
//         r="20" 
//         fill="#374151" 
//       />
//       <text 
//         x={x} 
//         y={textY} 
//         textAnchor="middle" 
//         fill="white" 
//         dominantBaseline="middle"
//         fontSize="16"
//         fontWeight="bold"
//       >
//         {index + 1}
//       </text>

//       {/* Orange dot on the line */}
//       <circle 
//         cx={x} 
//         cy={y} 
//         r="4" 
//         fill="#f97316" 
//       />

//       {/* Content */}
//       <g transform={`translate(${x}, ${textY + (isAbove ? -80 : 40)})`}>
//         <text 
//           textAnchor="middle" 
//           fill="#f97316" 
//           fontSize="14"
//           fontWeight="bold"
//           y={isAbove ? -80 : 20}  // Moved up for upward-pointing entries
//         >
//           {pathway.title}
//         </text>
//         <foreignObject
//           x="-150"
//           y={isAbove ? -60 : 30}  // Adjusted spacing for upward-pointing entries
//           width="300"
//           height="100"
//         >
//           <div xmlns="http://www.w3.org/1999/xhtml" 
//             className="text-center text-sm text-gray-600"
//           >
//             {pathway.description}
//           </div>
//         </foreignObject>
//       </g>
//     </g>
//   );
// };

// const TimelinePathways = () => {
//   const [showElements, setShowElements] = useState(false);
  
//   const pathways = [
//     {
//       title: "Diplomatic Isolation and Economic Pressure",
//       description: "Rival powers could leverage their significant political sway with African governments to discourage engagement with UAE-led projects. By offering alternative investments or threatening diplomatic repercussions, these nations could strategically diminish the UAE's footprint across vital sectors."
//     },
//     {
//       title: "Proxy Conflict Instigation",
//       description: "The African continent has long been a theater for proxy conflicts. Competition between rival powers might amplify support for local factions or governments opposed to UAE-backed initiatives, fueling instability in regions where Emirati projects are concentrated."
//     },
//     {
//       title: "Economic Retaliation and Sanctions",
//       description: "Global powers competing with the UAE for influence could introduce economic measures targeting Emirati firms operating in Africa. This might involve sanctions, tariffs, or regulatory barriers, indirectly undermining the UAE's investment portfolios."
//     },
//     {
//       title: "Narrative and Information Warfare",
//       description: "Rival nations could shape narratives through media and diplomatic channels portraying the UAE as an exploitative force in Africa, eroding the goodwill the UAE has cultivated through infrastructure, education, and humanitarian investments."
//     }
//   ];

//   useEffect(() => {
//     // Trigger animation after component mounts
//     const timer = setTimeout(() => setShowElements(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="border rounded-lg bg-white shadow-sm mb-6">
//       <div className="flex items-center gap-2 p-4">
//         <Router className="text-indigo-500" />
//         <h2 className="font-semibold text-gray-800">Pathways Timeline</h2>
//       </div>
      
//       <div className="p-4">
//         <svg 
//           viewBox="0 0 1000 600" 
//           className="w-full h-[500px]"
//         >
//           {/* Background gradient and ascending line */}
//           <defs>
//             <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 0.5 }} />
//               <stop offset="100%" style={{ stopColor: '#e5e7eb', stopOpacity: 0.3 }} />
//             </linearGradient>
//           </defs>
          
//           {/* Main ascending line with gradient background */}
//           <path
//             d="M 100 300 L 900 300"
//             stroke="url(#lineGradient)"
//             strokeWidth="40"
//             fill="none"
//           />
          
//           {/* Timeline elements */}
//           {pathways.map((pathway, index) => (
//             <TimelinePathway
//               key={index}
//               pathway={pathway}
//               index={index}
//               isVisible={showElements}
//               totalPoints={pathways.length}
//             />
//           ))}
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default TimelinePathways;












import React, { useState, useEffect } from 'react';
import { Router } from 'lucide-react';

import { 
    AlertTriangle, 
    CheckCircle, 
    FileText, 
    Layout, 
    ChevronDown,
    ChevronUp,
    FileBarChart,
    Book,
    Target,
    AlertOctagon
  } from 'lucide-react';
  
  



const CollapsibleSection = ({ 
    icon, 
    title, 
    children, 
    defaultOpen = false, 
    className = "", 
    warning = null,
    onToggle = null  // Added callback for animation triggers
  }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    const handleToggle = () => {
      const newState = !isOpen;
      setIsOpen(newState);
      if (onToggle) {
        onToggle(newState);
      }
    };
    
    return (
      <div className={`border rounded-lg bg-white shadow-sm ${className}`}>
        <div 
          className="flex items-center gap-2 cursor-pointer p-4"
          onClick={handleToggle}
        >
          {icon}
          <h2 className="font-semibold text-gray-800 flex-grow">{title}</h2>
          {warning && (
            <span className={`px-3 py-1 rounded-full text-sm ${
              warning === 'MEDIUM' ? 'bg-yellow-200' :
              warning === 'HIGH' ? 'bg-orange-100' :
              warning === 'LOW' ? 'bg-green-200' :
              'bg-red-200'
            }`}>
              {warning}
            </span>
          )}
          {isOpen ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </div>
        {isOpen && <div className="px-4 pb-4">{children}</div>}
      </div>
    );
  };
  
  
  
  


const TimelinePathway = ({ pathway, index, isVisible, totalPoints }) => {
  // Calculate positions along ascending diagonal
  const baseY = 300; // Center line y-position
  const startX = 100;
  const endX = 900;
  const xStep = (endX - startX) / (totalPoints - 1);
  const x = startX + (index * xStep);
  const y = baseY;
  
  // Alternate above/below
  const isAbove = index % 2 === 0;
  const textY = isAbove ? y - 100 : y + 100;
  
  return (
    <g
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 400}ms`,
      }}
    >
      {/* Vertical connector line */}
      <line 
        x1={x}
        y1={y}
        x2={x}
        y2={textY}
        stroke="#f97316"
        strokeWidth="2"
        className={isVisible ? 'opacity-100' : 'opacity-0'}
      />
      
      {/* Number circle */}
      <circle 
        cx={x} 
        cy={textY} 
        r="20" 
        fill="#374151" 
      />
      <text 
        x={x} 
        y={textY} 
        textAnchor="middle" 
        fill="white" 
        dominantBaseline="middle"
        fontSize="16"
        fontWeight="bold"
      >
        {index + 1}
      </text>

      {/* Orange dot on the line */}
      <circle 
        cx={x} 
        cy={y} 
        r="4" 
        fill="#f97316" 
      />

      {/* Content */}
      <g transform={`translate(${x}, ${textY + (isAbove ? -80 : 40)})`}>
        <text 
          textAnchor="middle" 
          fill="#f97316" 
          fontSize="14"
          fontWeight="bold"
          y={isAbove ? -80 : 20}  // Moved up for upward-pointing entries
        >
          {pathway.title}
        </text>
        <foreignObject
          x="-150"
          y={isAbove ? -60 : 30}  // Adjusted spacing for upward-pointing entries
          width="300"
          height="100"
        >
          <div xmlns="http://www.w3.org/1999/xhtml" 
            className="text-center text-sm text-gray-600"
          >
            {pathway.description}
          </div>
        </foreignObject>
      </g>
    </g>
  );
};

const TimelinePathways = () => {
  const [showElements, setShowElements] = useState(false);
  
  const pathways = [
    {
      title: "Diplomatic Isolation and Economic Pressure",
      description: "Rival powers could leverage their significant political sway with African governments to discourage engagement with UAE-led projects. By offering alternative investments or threatening diplomatic repercussions, these nations could strategically diminish the UAE's footprint across vital sectors."
    },
    {
      title: "Proxy Conflict Instigation",
      description: "The African continent has long been a theater for proxy conflicts. Competition between rival powers might amplify support for local factions or governments opposed to UAE-backed initiatives, fueling instability in regions where Emirati projects are concentrated."
    },
    {
      title: "Economic Retaliation and Sanctions",
      description: "Global powers competing with the UAE for influence could introduce economic measures targeting Emirati firms operating in Africa. This might involve sanctions, tariffs, or regulatory barriers, indirectly undermining the UAE's investment portfolios."
    },
    {
      title: "Narrative and Information Warfare",
      description: "Rival nations could shape narratives through media and diplomatic channels portraying the UAE as an exploitative force in Africa, eroding the goodwill the UAE has cultivated through infrastructure, education, and humanitarian investments."
    }
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setShowElements(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CollapsibleSection 
      icon={<Router className="text-indigo-500" />}
      title="Pathways Timeline"
      defaultOpen={false}
    >
      <div className="p-4">
        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-[500px]"
        >
          {/* Background gradient and ascending line */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#e5e7eb', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          
          {/* Main ascending line with gradient background */}
          <path
            d="M 100 300 L 900 300"
            stroke="url(#lineGradient)"
            strokeWidth="40"
            fill="none"
          />
          
          {/* Timeline elements */}
          {pathways.map((pathway, index) => (
            <TimelinePathway
              key={index}
              pathway={pathway}
              index={index}
              isVisible={showElements}
              totalPoints={pathways.length}
            />
          ))}
        </svg>
      </div>
    </CollapsibleSection>
  );
};

export default TimelinePathways;


























