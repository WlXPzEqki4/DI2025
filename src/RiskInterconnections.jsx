// // RiskInterconnections.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { AlertTriangle } from 'lucide-react';

// const RiskNode = ({ title, description, isActive, onClick, nodeRef }) => (
//   <div 
//     ref={nodeRef}
//     onClick={onClick}
//     className={`
//       p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
//       ${isActive ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-red-300'}
//     `}
//   >
//     <div className="flex items-center gap-2 font-semibold mb-2">
//       <AlertTriangle size={20} className={isActive ? 'text-red-500' : 'text-gray-500'} />
//       {title}
//     </div>
//     {isActive && (
//       <div className="text-sm text-gray-600 mt-2 animate-fadeIn">
//         {description}
//       </div>
//     )}
//   </div>
// );

// const ConnectionPath = ({ startX, startY, endX, endY, isActive }) => {
//   // Calculate control points for a more natural curve
//   const deltaX = endX - startX;
//   const deltaY = endY - startY;
//   const controlPointOffset = Math.min(Math.abs(deltaX) * 0.4, 60); // Reduced curve intensity

//   const path = `
//     M ${startX} ${startY}
//     C ${startX + controlPointOffset} ${startY},
//       ${endX - controlPointOffset} ${endY},
//       ${endX} ${endY}
//   `;

//   return (
//     <path
//       d={path}
//       stroke={isActive ? '#EF4444' : '#E5E7EB'}
//       strokeWidth={isActive ? 2.5 : 1.5}
//       fill="none"
//       className="transition-all duration-300"
//       style={{ 
//         filter: isActive ? 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))' : 'none'
//       }}
//     />
//   );
// };

// const RiskInterconnections = () => {
//   const [activeScenario, setActiveScenario] = useState(null);
//   const [connections, setConnections] = useState([]);
//   const nodeRefs = useRef({});

//   const scenarios = {
//     africa: {
//       id: 'africa',
//       title: '1.1 UAE Africa Expansion',
//       description: 'Strategic expansion into Africa faces cyber risks from Volt Typhoon operations',
//       connections: ['voltTyphoon']
//     },
//     brics: {
//       id: 'brics',
//       title: '1.2 BRICS Rise',
//       description: 'Growth of BRICS requires investment in post-quantum cryptography',
//       connections: ['quantum']
//     },
//     saudiIran: {
//       id: 'saudiIran',
//       title: '1.3 Saudi-Iran Alliance',
//       description: 'Gulf alliance reshaping trade routes and exposing infrastructure vulnerabilities',
//       connections: ['cyber']
//     },
//     multipolar: {
//       id: 'multipolar',
//       title: '1.4 Multipolar Flashpoints',
//       description: 'Global conflicts requiring resilient digital infrastructure',
//       connections: ['cyber']
//     },
//     trump: {
//       id: 'trump',
//       title: '1.5 Trump Administration',
//       description: 'Economic nationalism affecting BRICS financial frameworks',
//       connections: ['financial']
//     },
//     voltTyphoon: {
//       id: 'voltTyphoon',
//       title: '3.1 Volt Typhoon',
//       description: 'Advanced cyber operations threatening infrastructure',
//       connections: []
//     },
//     quantum: {
//       id: 'quantum',
//       title: '2.2 Quantum Cryptography',
//       description: 'Need for advanced cryptographic security',
//       connections: []
//     },
//     cyber: {
//       id: 'cyber',
//       title: '3.2 Cyber Skirmishes',
//       description: 'Autonomous cyber conflicts affecting critical systems',
//       connections: []
//     },
//     financial: {
//       id: 'financial',
//       title: '4.1 Financial Frameworks',
//       description: 'BRICS-led financial system changes',
//       connections: []
//     }
//   };

//   useEffect(() => {
//     const updateConnections = () => {
//       const newConnections = [];
//       Object.entries(scenarios).forEach(([sourceId, scenario]) => {
//         const sourceNode = nodeRefs.current[sourceId]?.getBoundingClientRect();
//         if (!sourceNode) return;

//         scenario.connections.forEach(targetId => {
//           const targetNode = nodeRefs.current[targetId]?.getBoundingClientRect();
//           if (!targetNode) return;

//           const container = nodeRefs.current.container.getBoundingClientRect();
          
//           // Calculate positions with padding for better connection points
//           // Calculate connection points at the edges of the boxes
//           const startX = sourceNode.right - container.left + 2; // Add small offset for border
//           const startY = sourceNode.top - container.top + (sourceNode.height / 2);
//           const endX = targetNode.left - container.left - 2; // Subtract small offset for border
//           const endY = targetNode.top - container.top + (targetNode.height / 2);
          
//           newConnections.push({
//             id: `${sourceId}-${targetId}`,
//             startX,
//             startY,
//             endX,
//             endY,
//             source: sourceId,
//             target: targetId
//           });
//         });
//       });
//       setConnections(newConnections);
//     };

//     updateConnections();
//     window.addEventListener('resize', updateConnections);
//     return () => window.removeEventListener('resize', updateConnections);
//   }, []);

//   const isConnected = (scenario1, scenario2) => {
//     return scenarios[scenario1].connections.includes(scenario2);
//   };

//   const isNodeActive = (scenarioId) => {
//     if (!activeScenario) return false;
//     if (activeScenario === scenarioId) return true;
//     return isConnected(activeScenario, scenarioId) || 
//            isConnected(scenarioId, activeScenario);
//   };

//   const isConnectionActive = (connection) => {
//     if (!activeScenario) return false;
//     return connection.source === activeScenario || connection.target === activeScenario;
//   };

//   return (
//     <div 
//       ref={el => nodeRefs.current.container = el}
//       className="p-6 bg-gray-50 rounded-xl max-w-6xl mx-auto relative"
//     >
//       <div className="grid grid-cols-2 gap-8 relative">
//         <svg 
//           className="absolute inset-0 pointer-events-none overflow-visible" 
//           style={{ width: '100%', height: '100%', padding: '0 1px' }}
//         >
//           {connections.map(conn => (
//             <ConnectionPath
//               key={conn.id}
//               startX={conn.startX}
//               startY={conn.startY}
//               endX={conn.endX}
//               endY={conn.endY}
//               isActive={isConnectionActive(conn)}
//             />
//           ))}
//         </svg>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Geopolitical Wildcards</h3>
//           {['africa', 'brics', 'saudiIran', 'multipolar', 'trump'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Connected Risks</h3>
//           {['voltTyphoon', 'quantum', 'cyber', 'financial'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
//         <h3 className="font-semibold mb-2">How to use:</h3>
//         <p className="text-gray-600">
//           Click on any scenario to see its connections and details. 
//           Connected risks will highlight to show relationships between different threats.
//           Click again to deselect.
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default RiskInterconnections;














// // RiskInterconnections.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { AlertTriangle } from 'lucide-react';

// const RiskNode = ({ title, description, isActive, onClick, nodeRef }) => (
//   <div 
//     ref={nodeRef}
//     onClick={onClick}
//     className={`
//       p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
//       ${isActive ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-red-300'}
//     `}
//   >
//     <div className="flex items-center gap-2 font-semibold mb-2">
//       <AlertTriangle size={20} className={isActive ? 'text-red-500' : 'text-gray-500'} />
//       {title}
//     </div>
//     {isActive && (
//       <div className="text-sm text-gray-600 mt-2 animate-fadeIn">
//         {description}
//       </div>
//     )}
//   </div>
// );

// const ConnectionPath = ({ startX, startY, endX, endY, isActive }) => {
//   // Calculate control points for a natural curve
//   const controlPointOffset = Math.abs(endX - startX) * 0.3; // Adjusted for better alignment

//   const path = `
//     M ${startX} ${startY}
//     C ${startX + controlPointOffset} ${startY},
//       ${endX - controlPointOffset} ${endY},
//       ${endX} ${endY}
//   `;

//   return (
//     <path
//       d={path}
//       stroke={isActive ? '#EF4444' : '#E5E7EB'}
//       strokeWidth={isActive ? 2.5 : 1.5}
//       fill="none"
//       className="transition-all duration-300"
//       style={{ 
//         filter: isActive ? 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))' : 'none'
//       }}
//     />
//   );
// };

// const RiskInterconnections = () => {
//   const [activeScenario, setActiveScenario] = useState(null);
//   const [connections, setConnections] = useState([]);
//   const nodeRefs = useRef({});

//   const scenarios = {
//     africa: {
//       id: 'africa',
//       title: '1.1 UAE Africa Expansion',
//       description: 'Strategic expansion into Africa faces cyber risks from Volt Typhoon operations',
//       connections: ['voltTyphoon']
//     },
//     brics: {
//       id: 'brics',
//       title: '1.2 BRICS Rise',
//       description: 'Growth of BRICS requires investment in post-quantum cryptography',
//       connections: ['quantum']
//     },
//     saudiIran: {
//       id: 'saudiIran',
//       title: '1.3 Saudi-Iran Alliance',
//       description: 'Gulf alliance reshaping trade routes and exposing infrastructure vulnerabilities',
//       connections: ['cyber']
//     },
//     multipolar: {
//       id: 'multipolar',
//       title: '1.4 Multipolar Flashpoints',
//       description: 'Global conflicts requiring resilient digital infrastructure',
//       connections: ['cyber']
//     },
//     trump: {
//       id: 'trump',
//       title: '1.5 Trump Administration',
//       description: 'Economic nationalism affecting BRICS financial frameworks',
//       connections: ['financial']
//     },
//     voltTyphoon: {
//       id: 'voltTyphoon',
//       title: '3.1 Volt Typhoon',
//       description: 'Advanced cyber operations threatening infrastructure',
//       connections: []
//     },
//     quantum: {
//       id: 'quantum',
//       title: '2.2 Quantum Cryptography',
//       description: 'Need for advanced cryptographic security',
//       connections: []
//     },
//     cyber: {
//       id: 'cyber',
//       title: '3.2 Cyber Skirmishes',
//       description: 'Autonomous cyber conflicts affecting critical systems',
//       connections: []
//     },
//     financial: {
//       id: 'financial',
//       title: '4.1 Financial Frameworks',
//       description: 'BRICS-led financial system changes',
//       connections: []
//     }
//   };

//   useEffect(() => {
//     const updateConnections = () => {
//       const newConnections = [];
//       Object.entries(scenarios).forEach(([sourceId, scenario]) => {
//         const sourceNode = nodeRefs.current[sourceId]?.getBoundingClientRect();
//         if (!sourceNode) return;

//         scenario.connections.forEach(targetId => {
//           const targetNode = nodeRefs.current[targetId]?.getBoundingClientRect();
//           if (!targetNode) return;

//           const container = nodeRefs.current.container.getBoundingClientRect();
          
//           // Adjust connection points to align properly with the edges of the boxes
//           const startX = sourceNode.right - container.left - 10; // Subtracted offset for better alignment
//           const startY = sourceNode.top - container.top + sourceNode.height / 2;
//           const endX = targetNode.left - container.left + 10; // Added offset for better alignment
//           const endY = targetNode.top - container.top + targetNode.height / 2;
          
//           newConnections.push({
//             id: `${sourceId}-${targetId}`,
//             startX,
//             startY,
//             endX,
//             endY,
//             source: sourceId,
//             target: targetId
//           });
//         });
//       });
//       setConnections(newConnections);
//     };

//     updateConnections();
//     window.addEventListener('resize', updateConnections);
//     return () => window.removeEventListener('resize', updateConnections);
//   }, []);

//   const isConnected = (scenario1, scenario2) => {
//     return scenarios[scenario1].connections.includes(scenario2);
//   };

//   const isNodeActive = (scenarioId) => {
//     if (!activeScenario) return false;
//     if (activeScenario === scenarioId) return true;
//     return isConnected(activeScenario, scenarioId) || 
//            isConnected(scenarioId, activeScenario);
//   };

//   const isConnectionActive = (connection) => {
//     if (!activeScenario) return false;
//     return connection.source === activeScenario || connection.target === activeScenario;
//   };

//   return (
//     <div 
//       ref={el => nodeRefs.current.container = el}
//       className="p-6 bg-gray-50 rounded-xl max-w-6xl mx-auto relative"
//     >
//       <div className="grid grid-cols-2 gap-8 relative">
//         <svg 
//           className="absolute inset-0 pointer-events-none overflow-visible" 
//           style={{ width: '100%', height: '100%', padding: '0 1px' }}
//         >
//           {connections.map(conn => (
//             <ConnectionPath
//               key={conn.id}
//               startX={conn.startX}
//               startY={conn.startY}
//               endX={conn.endX}
//               endY={conn.endY}
//               isActive={isConnectionActive(conn)}
//             />
//           ))}
//         </svg>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Geopolitical Wildcards</h3>
//           {['africa', 'brics', 'saudiIran', 'multipolar', 'trump'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Connected Risks</h3>
//           {['voltTyphoon', 'quantum', 'cyber', 'financial'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskInterconnections;








// // RiskInterconnections.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { AlertTriangle } from 'lucide-react';

// const RiskNode = ({ title, description, isActive, onClick, nodeRef }) => (
//   <div 
//     ref={nodeRef}
//     onClick={onClick}
//     className={`
//       p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
//       ${isActive ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-red-300'}
//     `}
//   >
//     <div className="flex items-center gap-2 font-semibold mb-2">
//       <AlertTriangle size={20} className={isActive ? 'text-red-500' : 'text-gray-500'} />
//       {title}
//     </div>
//     {isActive && (
//       <div className="text-sm text-gray-600 mt-2 animate-fadeIn">
//         {description}
//       </div>
//     )}
//   </div>
// );

// const ConnectionPath = ({ startX, startY, endX, endY, isActive }) => {
//   // Calculate control points for a smooth curve
//   const controlPointOffset = Math.abs(endX - startX) * 0.5; // Centre the curve properly

//   const path = `
//     M ${startX} ${startY}
//     C ${startX + controlPointOffset} ${startY},
//       ${endX - controlPointOffset} ${endY},
//       ${endX} ${endY}
//   `;

//   return (
//     <path
//       d={path}
//       stroke={isActive ? '#EF4444' : '#E5E7EB'}
//       strokeWidth={isActive ? 2.5 : 1.5}
//       fill="none"
//       className="transition-all duration-300"
//       style={{ 
//         filter: isActive ? 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))' : 'none'
//       }}
//     />
//   );
// };

// const RiskInterconnections = () => {
//   const [activeScenario, setActiveScenario] = useState(null);
//   const [connections, setConnections] = useState([]);
//   const nodeRefs = useRef({});

//   const scenarios = {
//     africa: {
//       id: 'africa',
//       title: '1.1 UAE Africa Expansion',
//       description: 'Strategic expansion into Africa faces cyber risks from Volt Typhoon operations',
//       connections: ['voltTyphoon']
//     },
//     brics: {
//       id: 'brics',
//       title: '1.2 BRICS Rise',
//       description: 'Growth of BRICS requires investment in post-quantum cryptography',
//       connections: ['quantum']
//     },
//     saudiIran: {
//       id: 'saudiIran',
//       title: '1.3 Saudi-Iran Alliance',
//       description: 'Gulf alliance reshaping trade routes and exposing infrastructure vulnerabilities',
//       connections: ['cyber']
//     },
//     multipolar: {
//       id: 'multipolar',
//       title: '1.4 Multipolar Flashpoints',
//       description: 'Global conflicts requiring resilient digital infrastructure',
//       connections: ['cyber']
//     },
//     trump: {
//       id: 'trump',
//       title: '1.5 Trump Administration',
//       description: 'Economic nationalism affecting BRICS financial frameworks',
//       connections: ['financial']
//     },
//     voltTyphoon: {
//       id: 'voltTyphoon',
//       title: '3.1 Volt Typhoon',
//       description: 'Advanced cyber operations threatening infrastructure',
//       connections: []
//     },
//     quantum: {
//       id: 'quantum',
//       title: '2.2 Quantum Cryptography',
//       description: 'Need for advanced cryptographic security',
//       connections: []
//     },
//     cyber: {
//       id: 'cyber',
//       title: '3.2 Cyber Skirmishes',
//       description: 'Autonomous cyber conflicts affecting critical systems',
//       connections: []
//     },
//     financial: {
//       id: 'financial',
//       title: '4.1 Financial Frameworks',
//       description: 'BRICS-led financial system changes',
//       connections: []
//     }
//   };

//   useEffect(() => {
//     const updateConnections = () => {
//       const newConnections = [];
//       Object.entries(scenarios).forEach(([sourceId, scenario]) => {
//         const sourceNode = nodeRefs.current[sourceId]?.getBoundingClientRect();
//         if (!sourceNode) return;

//         scenario.connections.forEach(targetId => {
//           const targetNode = nodeRefs.current[targetId]?.getBoundingClientRect();
//           if (!targetNode) return;

//           const container = nodeRefs.current.container.getBoundingClientRect();
          
//           // Calculate precise centre points for better alignment
//           const startX = sourceNode.right - container.left; // Right edge of source
//           const startY = sourceNode.top - container.top + sourceNode.height / 2; // Centre vertically
//           const endX = targetNode.left - container.left; // Left edge of target
//           const endY = targetNode.top - container.top + targetNode.height / 2; // Centre vertically
          
//           newConnections.push({
//             id: `${sourceId}-${targetId}`,
//             startX,
//             startY,
//             endX,
//             endY,
//             source: sourceId,
//             target: targetId
//           });
//         });
//       });
//       setConnections(newConnections);
//     };

//     updateConnections();
//     window.addEventListener('resize', updateConnections);
//     return () => window.removeEventListener('resize', updateConnections);
//   }, []);

//   const isConnected = (scenario1, scenario2) => {
//     return scenarios[scenario1].connections.includes(scenario2);
//   };

//   const isNodeActive = (scenarioId) => {
//     if (!activeScenario) return false;
//     if (activeScenario === scenarioId) return true;
//     return isConnected(activeScenario, scenarioId) || 
//            isConnected(scenarioId, activeScenario);
//   };

//   const isConnectionActive = (connection) => {
//     if (!activeScenario) return false;
//     return connection.source === activeScenario || connection.target === activeScenario;
//   };

//   return (
//     <div 
//       ref={el => nodeRefs.current.container = el}
//       className="p-6 bg-gray-50 rounded-xl max-w-6xl mx-auto relative"
//     >
//       <div className="grid grid-cols-2 gap-8 relative">
//         <svg 
//           className="absolute inset-0 pointer-events-none overflow-visible" 
//           style={{ width: '100%', height: '100%', padding: '0 1px' }}
//         >
//           {connections.map(conn => (
//             <ConnectionPath
//               key={conn.id}
//               startX={conn.startX}
//               startY={conn.startY}
//               endX={conn.endX}
//               endY={conn.endY}
//               isActive={isConnectionActive(conn)}
//             />
//           ))}
//         </svg>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Geopolitical Wildcards</h3>
//           {['africa', 'brics', 'saudiIran', 'multipolar', 'trump'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>

//         <div className="space-y-4">
//           <h3 className="font-semibold text-lg mb-4 text-gray-700">Connected Risks</h3>
//           {['voltTyphoon', 'quantum', 'cyber', 'financial'].map(id => (
//             <RiskNode
//               key={id}
//               nodeRef={el => nodeRefs.current[id] = el}
//               title={scenarios[id].title}
//               description={scenarios[id].description}
//               isActive={isNodeActive(id)}
//               onClick={() => setActiveScenario(activeScenario === id ? null : id)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskInterconnections;





// RiskInterconnections.jsx
import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const RiskNode = ({ title, description, isActive, onClick, nodeRef }) => (
  <div 
    ref={nodeRef}
    onClick={onClick}
    className={`
      p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 w-[90%]
      ${isActive ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-red-300'}
    `}
    style={{ marginLeft: isActive ? '5%' : '0' }} // Slightly centre the box for better spacing
  >
    <div className="flex items-center gap-2 font-semibold mb-2">
      <AlertTriangle size={20} className={isActive ? 'text-red-500' : 'text-gray-500'} />
      {title}
    </div>
    {isActive && (
      <div className="text-sm text-gray-600 mt-2 animate-fadeIn">
        {description}
      </div>
    )}
  </div>
);

const ConnectionPath = ({ startX, startY, endX, endY, isActive }) => {
  // Calculate control points for a smooth curve
  const controlPointOffset = Math.abs(endX - startX) * 0.4; // Adjust the curve

  const path = `
    M ${startX} ${startY}
    C ${startX + controlPointOffset} ${startY},
      ${endX - controlPointOffset} ${endY},
      ${endX} ${endY}
  `;

  return (
    <path
      d={path}
      stroke={isActive ? '#EF4444' : '#E5E7EB'}
      strokeWidth={isActive ? 2.5 : 1.5}
      fill="none"
      className="transition-all duration-300"
      style={{ 
        filter: isActive ? 'drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))' : 'none'
      }}
    />
  );
};

const RiskInterconnections = () => {
  const [activeScenario, setActiveScenario] = useState(null);
  const [connections, setConnections] = useState([]);
  const nodeRefs = useRef({});

  const scenarios = {
    africa: {
      id: 'africa',
      title: '1.1 UAE Africa Expansion',
      description: 'Strategic expansion into Africa faces cyber risks from Volt Typhoon operations',
      connections: ['voltTyphoon']
    },
    brics: {
      id: 'brics',
      title: '1.2 BRICS Rise',
      description: 'Growth of BRICS requires investment in post-quantum cryptography',
      connections: ['quantum']
    },
    saudiIran: {
      id: 'saudiIran',
      title: '1.3 Saudi-Iran Alliance',
      description: 'Gulf alliance reshaping trade routes and exposing infrastructure vulnerabilities',
      connections: ['cyber']
    },
    multipolar: {
      id: 'multipolar',
      title: '1.4 Multipolar Flashpoints',
      description: 'Global conflicts requiring resilient digital infrastructure',
      connections: ['cyber']
    },
    trump: {
      id: 'trump',
      title: '1.5 Trump Administration',
      description: 'Economic nationalism affecting BRICS financial frameworks',
      connections: ['financial']
    },
    voltTyphoon: {
      id: 'voltTyphoon',
      title: '3.1 Volt Typhoon',
      description: 'Advanced cyber operations threatening infrastructure',
      connections: []
    },
    quantum: {
      id: 'quantum',
      title: '2.2 Quantum Cryptography',
      description: 'Need for advanced cryptographic security',
      connections: []
    },
    cyber: {
      id: 'cyber',
      title: '3.2 Cyber Skirmishes',
      description: 'Autonomous cyber conflicts affecting critical systems',
      connections: []
    },
    financial: {
      id: 'financial',
      title: '4.1 Financial Frameworks',
      description: 'BRICS-led financial system changes',
      connections: []
    }
  };

  useEffect(() => {
    const updateConnections = () => {
      const newConnections = [];
      Object.entries(scenarios).forEach(([sourceId, scenario]) => {
        const sourceNode = nodeRefs.current[sourceId]?.getBoundingClientRect();
        if (!sourceNode) return;

        scenario.connections.forEach(targetId => {
          const targetNode = nodeRefs.current[targetId]?.getBoundingClientRect();
          if (!targetNode) return;

          const container = nodeRefs.current.container.getBoundingClientRect();
          
          // Adjust connection points to align precisely with the outer edges
          const startX = sourceNode.right - container.left; // Right edge of source
          const startY = sourceNode.top - container.top + sourceNode.height / 2; // Vertical centre of source
          const endX = targetNode.left - container.left; // Left edge of target
          const endY = targetNode.top - container.top + targetNode.height / 2; // Vertical centre of target
          
          newConnections.push({
            id: `${sourceId}-${targetId}`,
            startX,
            startY,
            endX,
            endY,
            source: sourceId,
            target: targetId
          });
        });
      });
      setConnections(newConnections);
    };

    updateConnections();
    window.addEventListener('resize', updateConnections);
    return () => window.removeEventListener('resize', updateConnections);
  }, []);

  const isConnected = (scenario1, scenario2) => {
    return scenarios[scenario1].connections.includes(scenario2);
  };

  const isNodeActive = (scenarioId) => {
    if (!activeScenario) return false;
    if (activeScenario === scenarioId) return true;
    return isConnected(activeScenario, scenarioId) || 
           isConnected(scenarioId, activeScenario);
  };

  const isConnectionActive = (connection) => {
    if (!activeScenario) return false;
    return connection.source === activeScenario || connection.target === activeScenario;
  };

  return (
    <div 
      ref={el => nodeRefs.current.container = el}
      className="p-6 bg-gray-50 rounded-xl max-w-6xl mx-auto relative"
    >
      <div className="grid grid-cols-2 gap-16 relative"> {/* Increased gap for better spacing */}
        <svg 
          className="absolute inset-0 pointer-events-none overflow-visible" 
          style={{ width: '100%', height: '100%', padding: '0 1px' }}
        >
          {connections.map(conn => (
            <ConnectionPath
              key={conn.id}
              startX={conn.startX}
              startY={conn.startY}
              endX={conn.endX}
              endY={conn.endY}
              isActive={isConnectionActive(conn)}
            />
          ))}
        </svg>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Geopolitical Wildcards</h3>
          {['africa', 'brics', 'saudiIran', 'multipolar', 'trump'].map(id => (
            <RiskNode
              key={id}
              nodeRef={el => nodeRefs.current[id] = el}
              title={scenarios[id].title}
              description={scenarios[id].description}
              isActive={isNodeActive(id)}
              onClick={() => setActiveScenario(activeScenario === id ? null : id)}
            />
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Connected Risks</h3>
          {['voltTyphoon', 'quantum', 'cyber', 'financial'].map(id => (
            <RiskNode
              key={id}
              nodeRef={el => nodeRefs.current[id] = el}
              title={scenarios[id].title}
              description={scenarios[id].description}
              isActive={isNodeActive(id)}
              onClick={() => setActiveScenario(activeScenario === id ? null : id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskInterconnections;




