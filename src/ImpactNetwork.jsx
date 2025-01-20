// import React, { useState } from 'react';
// import { Brain, Shield, Zap, Globe, LineChart, Lock } from 'lucide-react';

// const ImpactNetwork = () => {
//   const [activeNode, setActiveNode] = useState(null);

//   const technologies = {
//     agi: {
//       icon: Brain,
//       name: "AGI Systems",
//       description: "Artificial General Intelligence development and control",
//       color: "bg-red-100 border-red-500",
//       textColor: "text-red-800",
//       sectors: {
//         geopolitical: ["Power concentration among tech leaders"],
//         economic: ["AI-driven market dominance"],
//         security: ["Autonomous defense systems"]
//       }
//     },
//     quantum: {
//       icon: Shield,
//       name: "Quantum Technology",
//       description: "Quantum computing and cryptography advances",
//       color: "bg-blue-100 border-blue-500",
//       textColor: "text-blue-800",
//       sectors: {
//         geopolitical: ["Cryptographic power shifts"],
//         economic: ["Financial system vulnerability"],
//         security: ["Encryption obsolescence"]
//       }
//     },
//     advanced: {
//       icon: Zap,
//       name: "Ultra-Advanced Tech",
//       description: "Zero-point energy and metamaterials",
//       color: "bg-purple-100 border-purple-500",
//       textColor: "text-purple-800",
//       sectors: {
//         geopolitical: ["Energy independence shifts"],
//         economic: ["Hydrocarbon market disruption"],
//         security: ["Critical infrastructure evolution"]
//       }
//     }
//   };

//   const sectors = {
//     geopolitical: {
//       icon: Globe,
//       name: "Geopolitical",
//       subsections: ["Power Shifts", "Regional Conflicts"],
//     },
//     economic: {
//       icon: LineChart,
//       name: "Economic",
//       subsections: ["Financial Systems", "Market Disruptions"],
//     },
//     security: {
//       icon: Lock,
//       name: "Security",
//       subsections: ["Defense Systems", "Encryption Vulnerabilities"],
//     }
//   };

//   const TechnologyNode = ({ techId, tech }) => {
//     const Icon = tech.icon;
//     const isActive = activeNode === techId;

//     return (
//       <div 
//         className={`
//           p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
//           ${isActive ? tech.color : 'bg-white border-gray-200 hover:border-gray-400'}
//         `}
//         onClick={() => setActiveNode(isActive ? null : techId)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className={`w-6 h-6 ${isActive ? tech.textColor : 'text-gray-600'}`} />
//           <div>
//             <h3 className="font-bold">{tech.name}</h3>
//             <p className="text-sm text-gray-600">{tech.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SectorColumn = () => {
//     return (
//       <div className="space-y-6">
//         {Object.entries(sectors).map(([sectorId, sector]) => (
//           <div key={sectorId} className="border p-4 rounded-lg bg-gray-50">
//             <div className="flex items-center gap-3 mb-4">
//               <sector.icon className="w-6 h-6 text-gray-600" />
//               <h3 className="font-semibold">{sector.name}</h3>
//             </div>
//             <div className="space-y-2">
//               {sector.subsections.map((subsection, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-2 rounded-lg border cursor-pointer
//                   ${technologies[activeNode]?.sectors[sectorId]?.includes(subsection) ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
//                 >
//                   {subsection}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const ImpactDisplay = () => {
//     const impacts = activeNode
//       ? Object.entries(technologies[activeNode].sectors).flatMap(([sector, items]) =>
//           items.map((impact) => ({ sector, impact }))
//         )
//       : [];

//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="font-bold text-lg mb-4">Impact Analysis</h3>
//         <div className="space-y-4">
//           {impacts.map((impact, idx) => (
//             <div key={idx} className="p-3 bg-gray-50 rounded-lg">
//               <div className="text-gray-800 font-semibold">{impact.sector}</div>
//               <div className="text-gray-600">{impact.impact}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
//       {/* Technologies Column */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Technologies</h3>
//         {Object.entries(technologies).map(([techId, tech]) => (
//           <TechnologyNode key={techId} techId={techId} tech={tech} />
//         ))}
//       </div>

//       {/* Impacted Sectors Column */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Impacted Sectors</h3>
//         <SectorColumn />
//       </div>

//       {/* Impact Analysis Column */}
//       <div>
//         <ImpactDisplay />
//       </div>
//     </div>
//   );
// };

// export default ImpactNetwork;











// import React, { useState, useRef, useEffect } from 'react';
// import { Brain, Shield, Zap, Globe, LineChart, Lock } from 'lucide-react';

// const ImpactNetwork = () => {
//   const [activeNode, setActiveNode] = useState(null);
//   const containerRef = useRef(null);
//   const [connections, setConnections] = useState([]);

//   const technologies = {
//     agi: {
//       icon: Brain,
//       name: "AGI Systems",
//       description: "Artificial General Intelligence development and control",
//       color: "bg-red-100 border-red-500",
//       textColor: "text-red-800",
//       sectors: {
//         geopolitical: ["Power concentration among tech leaders"],
//         economic: ["AI-driven market dominance"],
//         security: ["Autonomous defense systems"]
//       }
//     },
//     quantum: {
//       icon: Shield,
//       name: "Quantum Technology",
//       description: "Quantum computing and cryptography advances",
//       color: "bg-blue-100 border-blue-500",
//       textColor: "text-blue-800",
//       sectors: {
//         geopolitical: ["Cryptographic power shifts"],
//         economic: ["Financial system vulnerability"],
//         security: ["Encryption obsolescence"]
//       }
//     },
//     advanced: {
//       icon: Zap,
//       name: "Ultra-Advanced Tech",
//       description: "Zero-point energy and metamaterials",
//       color: "bg-purple-100 border-purple-500",
//       textColor: "text-purple-800",
//       sectors: {
//         geopolitical: ["Energy independence shifts"],
//         economic: ["Hydrocarbon market disruption"],
//         security: ["Critical infrastructure evolution"]
//       }
//     }
//   };

//   const sectors = {
//     geopolitical: {
//       icon: Globe,
//       name: "Geopolitical",
//       subsections: ["Power Shifts", "Regional Conflicts"],
//     },
//     economic: {
//       icon: LineChart,
//       name: "Economic",
//       subsections: ["Financial Systems", "Market Disruptions"],
//     },
//     security: {
//       icon: Lock,
//       name: "Security",
//       subsections: ["Defense Systems", "Encryption Vulnerabilities"],
//     }
//   };

//   const scrollToView = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   useEffect(() => {
//     if (activeNode) {
//       scrollToView();
//     }

//     const calculateConnections = () => {
//       const newConnections = [];
//       Object.entries(technologies).forEach(([techId, tech]) => {
//         if (activeNode === techId) {
//           Object.entries(tech.sectors).forEach(([sectorId, impacts]) => {
//             const sector = sectors[sectorId];
//             sector.subsections.forEach((subsection, idx) => {
//               if (impacts.includes(subsection)) {
//                 newConnections.push({
//                   tech: techId,
//                   sector: sectorId,
//                   subsection,
//                   color: tech.color
//                 });
//               }
//             });
//           });
//         }
//       });
//       setConnections(newConnections);
//     };

//     calculateConnections();
//   }, [activeNode]);

//   const TechnologyNode = ({ techId, tech }) => {
//     const Icon = tech.icon;
//     const isActive = activeNode === techId;

//     return (
//       <div 
//         className={`
//           p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
//           ${isActive ? tech.color : 'bg-white border-gray-200 hover:border-gray-400'}
//         `}
//         onClick={() => setActiveNode(isActive ? null : techId)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className={`w-6 h-6 ${isActive ? tech.textColor : 'text-gray-600'}`} />
//           <div>
//             <h3 className="font-bold">{tech.name}</h3>
//             <p className="text-sm text-gray-600">{tech.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SectorColumn = () => {
//     return (
//       <div className="space-y-6">
//         {Object.entries(sectors).map(([sectorId, sector]) => (
//           <div key={sectorId} className="border p-4 rounded-lg bg-gray-50">
//             <div className="flex items-center gap-3 mb-4">
//               <sector.icon className="w-6 h-6 text-gray-600" />
//               <h3 className="font-semibold">{sector.name}</h3>
//             </div>
//             <div className="space-y-2">
//               {sector.subsections.map((subsection, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-2 rounded-lg border cursor-pointer
//                   ${connections.some(conn => conn.subsection === subsection) ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
//                 >
//                   {subsection}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const ImpactDisplay = () => {
//     const impacts = activeNode
//       ? Object.entries(technologies[activeNode].sectors).flatMap(([sector, items]) =>
//           items.map((impact) => ({ sector, impact }))
//         )
//       : [];

//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="font-bold text-lg mb-4">Impact Analysis</h3>
//         <div className="space-y-4">
//           {impacts.map((impact, idx) => (
//             <div key={idx} className="p-3 bg-gray-50 rounded-lg">
//               <div className="text-gray-800 font-semibold">{impact.sector}</div>
//               <div className="text-gray-600">{impact.impact}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderConnections = () => {
//     return (
//       <svg className="absolute inset-0 pointer-events-none">
//         {connections.map((conn, idx) => (
//           <line
//             key={idx}
//             x1="20%"
//             y1="20%"
//             x2="80%"
//             y2="80%"
//             stroke="red"
//             strokeWidth="2"
//           />
//         ))}
//       </svg>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
//       {renderConnections()}
//       {/* Technologies Column */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Technologies</h3>
//         {Object.entries(technologies).map(([techId, tech]) => (
//           <TechnologyNode key={techId} techId={techId} tech={tech} />
//         ))}
//       </div>

//       {/* Impacted Sectors Column */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Impacted Sectors</h3>
//         <SectorColumn />
//       </div>

//       {/* Impact Analysis Column */}
//       <div>
//         <ImpactDisplay />
//       </div>
//     </div>
//   );
// };

// export default ImpactNetwork;







// import React, { useState, useRef, useEffect } from 'react';
// import { Brain, Shield, Zap, Globe, LineChart, Lock } from 'lucide-react';

// const ImpactNetwork = () => {
//   const [activeNode, setActiveNode] = useState(null);
//   const containerRef = useRef(null);
//   const [connections, setConnections] = useState([]);

//   const technologies = {
//     agi: {
//       icon: Brain,
//       name: "AGI Systems",
//       description: "Artificial General Intelligence development and control",
//       color: "bg-red-100 border-red-500",
//       textColor: "text-red-800",
//       sectors: {
//         geopolitical: ["Power concentration among tech leaders"],
//         economic: ["AI-driven market dominance"],
//         security: ["Autonomous defense systems"]
//       }
//     },
//     quantum: {
//       icon: Shield,
//       name: "Quantum Technology",
//       description: "Quantum computing and cryptography advances",
//       color: "bg-blue-100 border-blue-500",
//       textColor: "text-blue-800",
//       sectors: {
//         geopolitical: ["Cryptographic power shifts"],
//         economic: ["Financial system vulnerability"],
//         security: ["Encryption obsolescence"]
//       }
//     },
//     advanced: {
//       icon: Zap,
//       name: "Ultra-Advanced Tech",
//       description: "Zero-point energy and metamaterials",
//       color: "bg-purple-100 border-purple-500",
//       textColor: "text-purple-800",
//       sectors: {
//         geopolitical: ["Energy independence shifts"],
//         economic: ["Hydrocarbon market disruption"],
//         security: ["Critical infrastructure evolution"]
//       }
//     }
//   };

//   const sectors = {
//     geopolitical: {
//       icon: Globe,
//       name: "Geopolitical",
//       subsections: ["Power Shifts", "Regional Conflicts"],
//     },
//     economic: {
//       icon: LineChart,
//       name: "Economic",
//       subsections: ["Financial Systems", "Market Disruptions"],
//     },
//     security: {
//       icon: Lock,
//       name: "Security",
//       subsections: ["Defense Systems", "Encryption Vulnerabilities"],
//     }
//   };

//   const scrollToView = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   useEffect(() => {
//     if (activeNode) {
//       scrollToView();
//     }

//     const calculateConnections = () => {
//       const newConnections = [];
//       Object.entries(technologies).forEach(([techId, tech]) => {
//         if (activeNode === techId) {
//           Object.entries(tech.sectors).forEach(([sectorId, impacts]) => {
//             const sector = sectors[sectorId];
//             sector.subsections.forEach((subsection, idx) => {
//               if (impacts.includes(subsection)) {
//                 newConnections.push({
//                   tech: techId,
//                   sector: sectorId,
//                   subsection,
//                   color: tech.color
//                 });
//               }
//             });
//           });
//         }
//       });
//       setConnections(newConnections);
//     };

//     calculateConnections();
//   }, [activeNode]);

//   const TechnologyNode = ({ techId, tech }) => {
//     const Icon = tech.icon;
//     const isActive = activeNode === techId;

//     return (
//       <div 
//         className={`
//           p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
//           ${isActive ? tech.color : 'bg-white border-gray-200 hover:border-gray-400'}
//         `}
//         onClick={() => setActiveNode(isActive ? null : techId)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className={`w-6 h-6 ${isActive ? tech.textColor : 'text-gray-600'}`} />
//           <div>
//             <h3 className="font-bold">{tech.name}</h3>
//             <p className="text-sm text-gray-600">{tech.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SectorColumn = () => {
//     return (
//       <div className="space-y-6">
//         {Object.entries(sectors).map(([sectorId, sector]) => (
//           <div key={sectorId} className="border p-4 rounded-lg bg-gray-50">
//             <div className="flex items-center gap-3 mb-4">
//               <sector.icon className="w-6 h-6 text-gray-600" />
//               <h3 className="font-semibold">{sector.name}</h3>
//             </div>
//             <div className="space-y-2">
//               {sector.subsections.map((subsection, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-2 rounded-lg border cursor-pointer
//                   ${connections.some(conn => conn.subsection === subsection) ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
//                 >
//                   {subsection}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const ImpactDisplay = () => {
//     const impacts = activeNode
//       ? Object.entries(technologies[activeNode].sectors).flatMap(([sector, items]) =>
//           items.map((impact) => ({ sector, impact }))
//         )
//       : [];

//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="font-bold text-lg mb-4">Impact Analysis</h3>
//         <div className="space-y-4">
//           {impacts.map((impact, idx) => (
//             <div key={idx} className="p-3 bg-gray-50 rounded-lg">
//               <div className="text-gray-800 font-semibold">{impact.sector}</div>
//               <div className="text-gray-600">{impact.impact}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderConnections = () => {
//     return (
//       <svg className="absolute inset-0 pointer-events-none">
//         {connections.map((conn, idx) => (
//           <line
//             key={idx}
//             x1="20%"
//             y1="20%"
//             x2="80%"
//             y2="80%"
//             stroke="red"
//             strokeWidth="2"
//           />
//         ))}
//       </svg>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
//       {renderConnections()}
//       {/* Technologies Column */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Technologies</h3>
//         {Object.entries(technologies).map(([techId, tech]) => (
//           <TechnologyNode key={techId} techId={techId} tech={tech} />
//         ))}
//       </div>

//       {/* Impacted Sectors Column */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Impacted Sectors</h3>
//         <SectorColumn />
//       </div>

//       {/* Impact Analysis Column */}
//       <div>
//         <ImpactDisplay />
//       </div>
//     </div>
//   );
// };

// export default ImpactNetwork;





// import React, { useState, useRef, useEffect } from 'react';
// import { Brain, Shield, Zap, Globe, LineChart, Lock } from 'lucide-react';

// const ImpactNetwork = () => {
//   const [activeNode, setActiveNode] = useState(null);
//   const containerRef = useRef(null);
//   const [connections, setConnections] = useState([]);

//   const technologies = {
//     agi: {
//       icon: Brain,
//       name: "AGI Systems",
//       description: "Artificial General Intelligence development and control",
//       color: "bg-red-100 border-red-500",
//       textColor: "text-red-800",
//       sectors: {
//         geopolitical: ["Power Shifts"],
//         economic: ["AI-driven market dominance"],
//         security: ["Autonomous defense systems"]
//       }
//     },
//     quantum: {
//       icon: Shield,
//       name: "Quantum Technology",
//       description: "Quantum computing and cryptography advances",
//       color: "bg-blue-100 border-blue-500",
//       textColor: "text-blue-800",
//       sectors: {
//         geopolitical: ["Cryptographic power shifts"],
//         economic: ["Financial Systems"],
//         security: ["Encryption Vulnerabilities"]
//       }
//     },
//     advanced: {
//       icon: Zap,
//       name: "Ultra-Advanced Tech",
//       description: "Zero-point energy and metamaterials",
//       color: "bg-purple-100 border-purple-500",
//       textColor: "text-purple-800",
//       sectors: {
//         geopolitical: ["Energy independence shifts"],
//         economic: ["Market Disruptions"],
//         security: ["Critical infrastructure evolution"]
//       }
//     }
//   };

//   const sectors = {
//     geopolitical: {
//       icon: Globe,
//       name: "Geopolitical",
//       subsections: ["Power Shifts", "Regional Conflicts"],
//     },
//     economic: {
//       icon: LineChart,
//       name: "Economic",
//       subsections: ["Financial Systems", "Market Disruptions"],
//     },
//     security: {
//       icon: Lock,
//       name: "Security",
//       subsections: ["Defense Systems", "Encryption Vulnerabilities"],
//     }
//   };

//   const scrollToView = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   useEffect(() => {
//     if (activeNode) {
//       scrollToView();
//     }

//     const calculateConnections = () => {
//       const newConnections = [];
//       Object.entries(technologies).forEach(([techId, tech]) => {
//         if (activeNode === techId) {
//           Object.entries(tech.sectors).forEach(([sectorId, impacts]) => {
//             const sector = sectors[sectorId];
//             sector.subsections.forEach((subsection) => {
//               if (impacts.includes(subsection)) {
//                 newConnections.push({
//                   tech: techId,
//                   sector: sectorId,
//                   subsection,
//                   color: tech.color
//                 });
//               }
//             });
//           });
//         }
//       });
//       setConnections(newConnections);
//     };

//     calculateConnections();
//   }, [activeNode]);

//   const TechnologyNode = ({ techId, tech }) => {
//     const Icon = tech.icon;
//     const isActive = activeNode === techId;

//     return (
//       <div 
//         className={`
//           p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
//           ${isActive ? tech.color : 'bg-white border-gray-200 hover:border-gray-400'}
//         `}
//         onClick={() => setActiveNode(isActive ? null : techId)}
//       >
//         <div className="flex items-center gap-3">
//           <Icon className={`w-6 h-6 ${isActive ? tech.textColor : 'text-gray-600'}`} />
//           <div>
//             <h3 className="font-bold">{tech.name}</h3>
//             <p className="text-sm text-gray-600">{tech.description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SectorColumn = () => {
//     return (
//       <div className="space-y-6 relative">
//         {Object.entries(sectors).map(([sectorId, sector]) => (
//           <div key={sectorId} className="border p-4 rounded-lg bg-gray-50">
//             <div className="flex items-center gap-3 mb-4">
//               <sector.icon className="w-6 h-6 text-gray-600" />
//               <h3 className="font-semibold">{sector.name}</h3>
//             </div>
//             <div className="space-y-2">
//               {sector.subsections.map((subsection, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-2 rounded-lg border cursor-pointer
//                   ${connections.some(conn => conn.subsection === subsection) ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
//                 >
//                   {subsection}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const ImpactDisplay = () => {
//     const impacts = activeNode
//       ? Object.entries(technologies[activeNode].sectors).flatMap(([sector, items]) =>
//           items.map((impact) => ({ sector, impact }))
//         )
//       : [];

//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h3 className="font-bold text-lg mb-4">Impact Analysis</h3>
//         <div className="space-y-4">
//           {impacts.map((impact, idx) => (
//             <div key={idx} className="p-3 bg-gray-50 rounded-lg">
//               <div className="text-gray-800 font-semibold">{impact.sector}</div>
//               <div className="text-gray-600">{impact.impact}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderConnections = () => {
//     return (
//       <svg className="absolute inset-0 pointer-events-none">
//         {connections.map((conn, idx) => (
//           <line
//             key={idx}
//             x1="10%"
//             y1={20 + idx * 10 + "%"}
//             x2="90%"
//             y2={20 + idx * 10 + "%"}
//             stroke="red"
//             strokeWidth="2"
//           />
//         ))}
//       </svg>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
//       {renderConnections()}
//       {/* Technologies Column */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Technologies</h3>
//         {Object.entries(technologies).map(([techId, tech]) => (
//           <TechnologyNode key={techId} techId={techId} tech={tech} />
//         ))}
//       </div>

//       {/* Impacted Sectors Column */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Impacted Sectors</h3>
//         <SectorColumn />
//       </div>

//       {/* Impact Analysis Column */}
//       <div>
//         <ImpactDisplay />
//       </div>
//     </div>
//   );
// };

// export default ImpactNetwork;


















import React, { useState, useRef, useEffect } from 'react';
import { Brain, Shield, Zap, Globe, LineChart, Lock } from 'lucide-react';

const ImpactNetwork = () => {
  const [activeNode, setActiveNode] = useState(null);
  const containerRef = useRef(null);
  const [connections, setConnections] = useState([]);

  const technologies = {
    agi: {
      icon: Brain,
      name: "AGI Systems",
      description: "Artificial General Intelligence development and control",
      color: "bg-red-100 border-red-500",
      textColor: "text-red-800",
      sectors: {
        geopolitical: ["Power Shifts"],
        economic: ["AI-driven market dominance"],
        security: ["Autonomous defense systems"]
      }
    },
    quantum: {
      icon: Shield,
      name: "Quantum Technology",
      description: "Quantum computing and cryptography advances",
      color: "bg-blue-100 border-blue-500",
      textColor: "text-blue-800",
      sectors: {
        geopolitical: ["Cryptographic power shifts"],
        economic: ["Financial Systems"],
        security: ["Encryption Vulnerabilities"]
      }
    },
    advanced: {
      icon: Zap,
      name: "Ultra-Advanced Tech",
      description: "Zero-point energy and metamaterials",
      color: "bg-purple-100 border-purple-500",
      textColor: "text-purple-800",
      sectors: {
        geopolitical: ["Energy independence shifts"],
        economic: ["Market Disruptions"],
        security: ["Critical infrastructure evolution"]
      }
    }
  };

  const sectors = {
    geopolitical: {
      icon: Globe,
      name: "Geopolitical",
      subsections: ["Power Shifts", "Regional Conflicts"],
    },
    economic: {
      icon: LineChart,
      name: "Economic",
      subsections: ["Financial Systems", "Market Disruptions"],
    },
    security: {
      icon: Lock,
      name: "Security",
      subsections: ["Defense Systems", "Encryption Vulnerabilities"],
    }
  };

  const scrollToView = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (activeNode) {
      scrollToView();
    }

    const calculateConnections = () => {
      const newConnections = [];
      Object.entries(technologies).forEach(([techId, tech]) => {
        if (activeNode === techId) {
          Object.entries(tech.sectors).forEach(([sectorId, impacts]) => {
            const sector = sectors[sectorId];
            sector.subsections.forEach((subsection) => {
              if (impacts.includes(subsection)) {
                newConnections.push({
                  tech: techId,
                  sector: sectorId,
                  subsection,
                  color: tech.color
                });
              }
            });
          });
        }
      });
      setConnections(newConnections);
    };

    calculateConnections();
  }, [activeNode]);

  const TechnologyNode = ({ techId, tech }) => {
    const Icon = tech.icon;
    const isActive = activeNode === techId;

    return (
      <div 
        className={`
          p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
          ${isActive ? tech.color : 'bg-white border-gray-200 hover:border-gray-400'}
        `}
        onClick={() => setActiveNode(isActive ? null : techId)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${isActive ? tech.textColor : 'text-gray-600'}`} />
          <div>
            <h3 className="font-bold">{tech.name}</h3>
            <p className="text-sm text-gray-600">{tech.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const SectorColumn = () => {
    return (
      <div className="space-y-6 relative">
        {Object.entries(sectors).map(([sectorId, sector]) => (
          <div key={sectorId} className="border p-4 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <sector.icon className="w-6 h-6 text-gray-600" />
              <h3 className="font-semibold">{sector.name}</h3>
            </div>
            <div className="space-y-2">
              {sector.subsections.map((subsection, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border cursor-pointer
                  ${connections.some(conn => conn.subsection === subsection) ? connections.find(conn => conn.subsection === subsection).color : 'bg-white border-gray-200'}`}
                >
                  {subsection}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ImpactDisplay = () => {
    const impacts = activeNode
      ? Object.entries(technologies[activeNode].sectors).flatMap(([sector, items]) =>
          items.map((impact) => ({ sector, impact }))
        )
      : [];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Impact Analysis</h3>
        {impacts.map((impact, idx) => (
          <div key={idx} className={`p-4 rounded-lg border-2 ${connections.find(conn => conn.subsection === impact.impact)?.color || 'bg-white border-gray-200'}`}>
            <div className="font-bold text-gray-800 capitalize">{impact.sector}</div>
            <div className="text-gray-600">{impact.impact}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderConnections = () => {
    return (
      <svg className="absolute inset-0 pointer-events-none">
        {connections.map((conn, idx) => (
          <line
            key={idx}
            x1="15%"
            y1={`${10 + idx * 15}%`}
            x2="50%"
            y2={`${10 + idx * 15}%`}
            stroke={conn.color.split(' ')[0].replace('bg-', '')}
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  };

  return (
    <div ref={containerRef} className="relative grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      {renderConnections()}
      {/* Technologies Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Technologies</h3>
        {Object.entries(technologies).map(([techId, tech]) => (
          <TechnologyNode key={techId} techId={techId} tech={tech} />
        ))}
      </div>

      {/* Impacted Sectors Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Impacted Sectors</h3>
        <SectorColumn />
      </div>

      {/* Impact Analysis Column */}
      <div>
        <ImpactDisplay />
      </div>
    </div>
  );
};

export default ImpactNetwork;















