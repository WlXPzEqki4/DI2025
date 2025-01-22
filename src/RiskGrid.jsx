// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       details: [
//         "Africa as Geopolitical Battleground",
//         "BRICS Rise and Global Impact",
//         "Saudi-Iran Alliance",
//         "Multipolar Flashpoints",
//         "Trump's Geopolitical Impact"
//       ]
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       details: [
//         "AGI Control and State Power",
//         "Quantum Cryptography Breakthroughs",
//         "Ultra-Advanced Technology Impact"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in">
//           <h3 className="font-bold mb-4">Key Elements:</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             {themes[activeTheme].details.map((detail, index) => (
//               <li key={index} className="text-gray-700">{detail}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;








// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       details: [
//         "Africa as Geopolitical Battleground",
//         "BRICS Rise and Global Impact",
//         "Saudi-Iran Alliance",
//         "Multipolar Flashpoints",
//         "Trump's Geopolitical Impact"
//       ]
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       details: [
//         "AGI Control and State Power",
//         "Quantum Cryptography Breakthroughs",
//         "Ultra-Advanced Technology Impact"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8 max-w-4xl">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed">
//             This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//             infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//             The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//             mitigation strategies must also be interconnected.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The report is organized into four thematic sections, shown below.
//             This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//             offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//             matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//             scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//             potential strategies for addressing them.
//           </p>
//         </div>
//       </div>


//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in">
//           <h3 className="font-bold mb-4">Key Elements:</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             {themes[activeTheme].details.map((detail, index) => (
//               <li key={index} className="text-gray-700">{detail}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;
















// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       details: [
//         "Africa as Geopolitical Battleground",
//         "BRICS Rise and Global Impact",
//         "Saudi-Iran Alliance",
//         "Multipolar Flashpoints",
//         "Trump's Geopolitical Impact"
//       ]
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       details: [
//         "AGI Control and State Power",
//         "Quantum Cryptography Breakthroughs",
//         "Ultra-Advanced Technology Impact"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed">
//             This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//             infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//             The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//             mitigation strategies must also be interconnected.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The report is organized into four thematic sections, shown below.
//             This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//             offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//             matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//             scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//             potential strategies for addressing them.
//           </p>
//         </div>
//       </div>





// {/* 



//       return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             <span className="font-semibold text-orange-600 text-lg">The greatest risk is complacency.</span>{" "}
//             In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             This report applies a multi-dimensional analysis framework, integrating:
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
//               <span className="font-semibold">Geopolitical</span> & <span className="font-semibold">Technological</span> domains
//             </div>
//             <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
//               <span className="font-semibold">Infrastructural</span> & <span className="font-semibold">Economic</span> domains
//             </div>
//           </div>
//           <p className="text-gray-800 leading-relaxed">
//             Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. 
//             <span className="font-semibold"> Many of the threats are interconnected and have cascading, complex impacts.</span>
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <div className="space-y-4">
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">1</div>
//               <p className="text-gray-800 leading-relaxed">
//                 The report is organized into four thematic sections, shown below.
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">2</div>
//               <p className="text-gray-800 leading-relaxed">
//                 Each section provides a structured approach for identifying scenarios most relevant to specific strategic areas.
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">3</div>
//               <p className="text-gray-800 leading-relaxed">
//                 Examine interdependencies between scenarios to reveal cascading risks and opportunities, offering a holistic view
//                 of the challenges and potential strategies.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//  */}


//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in">
//           <h3 className="font-bold mb-4">Key Elements:</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             {themes[activeTheme].details.map((detail, index) => (
//               <li key={index} className="text-gray-700">{detail}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;














// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       details: [
//         "AGI Control and State Power",
//         "Quantum Cryptography Breakthroughs",
//         "Ultra-Advanced Technology Impact"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed">
//             This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//             infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//             The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//             mitigation strategies must also be interconnected.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The report is organized into four thematic sections, shown below.
//             This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//             offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//             matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//             scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//             potential strategies for addressing them.
//           </p>
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in space-y-6">
//           {themes[activeTheme].detailSections ? (
//             <>
//               <div>
//                 <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                 <ul className="space-y-2">
//                   {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                     <li key={index} className="flex items-center justify-between">
//                       <span className="text-gray-700">{threat.text}</span>
//                       <span className={`ml-2 px-2 py-1 rounded text-sm ${
//                         threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                         threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                         threat.risk === 'LOW' ? 'bg-green-200' :
//                         threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                         'bg-gray-200'
//                       }`}>
//                         {threat.risk}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                     <li key={index} className="text-gray-700">{indicator}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                     <li key={index} className="text-gray-700">{strategy}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Impact Areas</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                     <li key={index} className="text-gray-700">{impact}</li>
//                   ))}
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <h3 className="font-bold mb-4">Key Elements:</h3>
//               <ul className="list-disc pl-6 space-y-2">
//                 {themes[activeTheme].details.map((detail, index) => (
//                   <li key={index} className="text-gray-700">{detail}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;











// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       details: [
//         "AGI Control and State Power",
//         "Quantum Cryptography Breakthroughs",
//         "Ultra-Advanced Technology Impact"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed">
//             This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//             infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//             The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//             mitigation strategies must also be interconnected.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The report is organized into four thematic sections, shown below.
//             This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//             offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//             matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//             scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//             potential strategies for addressing them.
//           </p>
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in space-y-6">
//           {themes[activeTheme].detailSections ? (
//             <>
//               <div>
//                 <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                     <li key={index} className="relative pr-24 text-gray-700">
//                       {threat.text}
//                       <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                         threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                         threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                         threat.risk === 'LOW' ? 'bg-green-200' :
//                         threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                         'bg-gray-200'
//                       }`}>
//                         {threat.risk}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                     <li key={index} className="text-gray-700">{indicator}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                     <li key={index} className="text-gray-700">{strategy}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Impact Areas</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                     <li key={index} className="text-gray-700">{impact}</li>
//                   ))}
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <h3 className="font-bold mb-4">Key Elements:</h3>
//               <ul className="list-disc pl-6 space-y-2">
//                 {themes[activeTheme].details.map((detail, index) => (
//                   <li key={index} className="text-gray-700">{detail}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;







// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       details: [
//         "Volt Typhoon Cyber Threats",
//         "AI War Machines",
//         "Space Weaponization",
//         "Digital Centralization Risks"
//       ]
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       details: [
//         "Financial System Fracturing",
//         "Biotech Breakthroughs",
//         "Environmental Disruptions"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       <div className="mb-12 space-y-8">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Background</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//             and economic wildcard scenarios that present both risks and opportunities. This report examines these
//             dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//             resilience and maintain the UAE's global edge.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">Methodology</h3>
//           <p className="text-gray-800 leading-relaxed">
//             This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//             infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//             interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//             underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//             in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//             The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//             mitigation strategies must also be interconnected.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//           <p className="text-gray-800 leading-relaxed">
//             The report is organized into four thematic sections, shown below.
//             This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//             offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//             matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//             scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//             potential strategies for addressing them.
//           </p>
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div>

//       {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in space-y-6">
//           {themes[activeTheme].detailSections ? (
//             <>
//               <div>
//                 <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                     <li key={index} className="relative pr-24 text-gray-700">
//                       {threat.text}
//                       <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                         threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                         threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                         threat.risk === 'LOW' ? 'bg-green-200' :
//                         threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                         threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                         'bg-gray-200'
//                       }`}>
//                         {threat.risk}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                     <li key={index} className="text-gray-700">{indicator}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                     <li key={index} className="text-gray-700">{strategy}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Impact Areas</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                     <li key={index} className="text-gray-700">{impact}</li>
//                   ))}
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <h3 className="font-bold mb-4">Key Elements:</h3>
//               <ul className="list-disc pl-6 space-y-2">
//                 {themes[activeTheme].details.map((detail, index) => (
//                   <li key={index} className="text-gray-700">{detail}</li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       )}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;






























































// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';


// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

// <div className="mb-12 flex gap-8">
//         <div className="w-1/2 space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div className="w-1/2">
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>


//       </div>




//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>
//       {/* <div className="grid grid-cols-1 gap-6 mb-8">
//         {themes.map((theme, index) => (
//           <ThemeCard
//             key={index}
//             {...theme}
//             isActive={activeTheme === index}
//             onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//           />
//         ))}
//       </div> */}


//       <div className="flex gap-8">


//         <div className="w-1/2 space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>






        
  
//   <div className="w-1/2 bg-gray-50 p-6 rounded-lg">
//     <h3 className="font-bold text-lg mb-3">Placeholder Title</h3>
//     <p className="text-gray-700">
//       This is a placeholder text for the right side panel. You can add any content you'd like here to complement the risk assessment cards on the left.
//     </p>


//     <ModularRiskDashboard />


//   </div>
// </div>









//       {/* {activeTheme !== null && (
//         <div className="bg-gray-50 p-6 rounded-lg animate-fade-in space-y-6">
//           {themes[activeTheme].detailSections ? (
//             <>
//               <div>
//                 <h3 className="font-bold mb-3">Threats/Scenarios</h3> */}




//       {activeTheme !== null && (
//         <div className="flex gap-8">
//           <div className="w-1/2">
//             {/* <div className="bg-gray-50 p-6 rounded-lg animate-fade-in space-y-6"> */}
//             {/* <div className="bg-red-100 p-6 rounded-lg animate-fade-in space-y-6"> */}
//             {/* <div className="bg-red-100 p-6 rounded-lg animate-fade-in space-y-6 shadow-lg scale-105 mt-8"> */}
//             <div className="bg-red-100 p-6 rounded-lg animate-fade-in space-y-6 shadow-lg mt-8 w-[95%]">
//               {themes[activeTheme].detailSections ? (
//                 <>
//                   <div>
//                     <h3 className="font-bold mb-3">Threats/Scenarios</h3>






//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                     <li key={index} className="relative pr-24 text-gray-700">
//                       {threat.text}
//                       <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                         threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                         threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                         threat.risk === 'LOW' ? 'bg-green-200' :
//                         threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                         threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                         threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                         'bg-gray-200'
//                       }`}>
//                         {threat.risk}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                     <li key={index} className="text-gray-700">{indicator}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                     <li key={index} className="text-gray-700">{strategy}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-3">Impact Areas</h3>
//                 <ul className="list-disc pl-6 space-y-2">
//                   {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                     <li key={index} className="text-gray-700">{impact}</li>
//                   ))}
//                 </ul>
//               </div>
//             </>
//           ) : (
//             <>
//               <h3 className="font-bold mb-4">Key Elements:</h3>
//               <ul className="list-disc pl-6 space-y-2">
//                 {themes[activeTheme].details.map((detail, index) => (
//                   <li key={index} className="text-gray-700">{detail}</li>
//                 ))}
//               </ul>
//             </>
//       //     )}
//       //   </div>
//       // )}


//     )}
//     </div>
//   </div>
// </div>
// )}



// <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>


//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />
      
//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />

//       {/* <RiskDashboard /> */}
//       {/* <ModularRiskDashboard /> */}


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;

























// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';

// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div 
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive 
//           ? 'bg-red-100 shadow-lg scale-105' 
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + right-hand dashboard */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>
//         <div className="bg-gray-50 p-6 rounded-lg">
//           <ModularRiskDashboard />
//         </div>
//       </div>

//       {/* Third row: expanded details (left side), empty on the right side */}
//       {activeTheme !== null && (
//         <div className="grid grid-cols-2 gap-8 mt-8">
//           <div>
//             <div className="bg-red-100 p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%]">
//               {themes[activeTheme].detailSections ? (
//                 <>
//                   <div>
//                     <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                         <li key={index} className="relative pr-24 text-gray-700">
//                           {threat.text}
//                           <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                             threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                             threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                             threat.risk === 'LOW' ? 'bg-green-200' :
//                             threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                             threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                             threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                             'bg-gray-200'
//                           }`}>
//                             {threat.risk}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                         <li key={index} className="text-gray-700">{indicator}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                         <li key={index} className="text-gray-700">{strategy}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                         <li key={index} className="text-gray-700">{impact}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3 className="font-bold mb-4">Key Elements:</h3>
//                   <ul className="list-disc pl-6 space-y-2">
//                     {themes[activeTheme].details.map((detail, index) => (
//                       <li key={index} className="text-gray-700">{detail}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           </div>
//           {/* Keep the right cell empty so it doesn't shift the dashboard */}
//           <div></div>
//         </div>
//       )}

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />
      
//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />

//       {/* <RiskDashboard /> */}
//       {/* <ModularRiskDashboard /> */}

//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;









// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// // import ModularRiskDashboard from "./ModularRiskDashboard";  // REMOVED
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + detailed content on the right */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>

//         {/*  Moved detailed content here */}
//         <div className="bg-gray-50 p-6 rounded-lg">
//            {activeTheme !== null && (
//               <div className="animate-fade-in space-y-6 shadow-lg w-[95%]">
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//         </div>
//       </div>

//         {/*  REMOVED the detailed content block from the original 3rd row since it has been moved up to the right column
//        and removed the empty space that was on the right -  This now gets rendered on the right hand side with the above code.
//       */}

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />

//       {/* <RiskDashboard /> */}


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;










// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard"; 
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + detailed content on the right */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>

//         {/*  Moved detailed content here, with no outer gray box and a red highlight*/}
//         <div>
//            {activeTheme !== null && (
//               <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                 activeTheme !== null ? 'bg-red-100' : ''}
//                 `}>
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//         </div>
//       </div>


//       <ModularRiskDashboard /> 



//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />

//       {/* <RiskDashboard /> */}


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;

























// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";  // ADDED BACK
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + risk dashboard on the right */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>

//         {/* Render the ModularRiskDashboard here */}
//         <div className="p-6 rounded-lg">
//           <ModularRiskDashboard />
//         </div>
//       </div>



//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;





















// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";  // ADDED BACK
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);

//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + right-hand dashboard */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {themes.map((theme, index) => (
//             <ThemeCard
//               key={index}
//               {...theme}
//               isActive={activeTheme === index}
//               onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//             />
//           ))}
//         </div>
//           {/*  Moved detailed content here, with no outer gray box and a red highlight*/}
//         <div>
//            {activeTheme !== null && (
//               <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                 activeTheme !== null ? 'bg-red-100' : ''}
//                 `}>
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//         </div>
//       </div>

//            {/* Add the ModularRiskDashboard below the thematic areas and windows*/}
//         <div className="mt-8 p-6 rounded-lg">
//           <ModularRiskDashboard />
//         </div>

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;







// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);


//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//         setSelectedWildcard(wildcard);
//     };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards on left + detailed content on the right */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//            {themes.map((theme, index) => (
//               <ThemeCard
//                 key={index}
//                 {...theme}
//                 isActive={activeTheme === index}
//                 onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//           ))}
//            <div className="mt-8">
//              <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//           </div>
//         </div>


//         {/*  Moved detailed content here, with no outer gray box and a red highlight*/}
//         <div>
//            {activeTheme !== null && (
//               <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                 activeTheme !== null ? 'bg-red-100' : ''}
//                 `}>
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               {/* Conditionally render the dossier card when a wildcard is selected */}
//                 {selectedWildcard && (
//                 <div className={`bg-white rounded-lg shadow-lg p-5 relative transition-opacity duration-250 ease-in-out opacity-100`}>
//                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>


//                     <div
//                       className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                     >
//                       ×
//                     </div>

//                     {/* Color Bar Visualization */}
//                     <div
//                       className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                     >

//                      <div
//                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                         style={{ left:  selectedWildcard.level ? selectedWildcard.level : "0%" }}
//                       ></div>
//                   </div>

//                     <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                       <ul className="list-disc pl-5 text-gray-700">
//                         {selectedWildcard.points.map((point, index) => (
//                           <li key={index}>{point}</li>
//                         ))}
//                      </ul>
//                     <p className="mt-2 text-gray-700 leading-relaxed">
//                        {selectedWildcard.details}
//                    </p>
//                 </div>
//                )}
//               </div>
//             )}
//         </div>
//       </div>

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;











// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);


//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//         setSelectedWildcard(wildcard);
//     };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + right-hand dashboard */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6 flex flex-col">
//            {themes.map((theme, index) => (
//               <ThemeCard
//                 key={index}
//                 {...theme}
//                 isActive={activeTheme === index}
//                 onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//            ))}
//           <div className="mt-8">
//               <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//           </div>
//         </div>

//         {/*  Moved detailed content here, with no outer gray box and a red highlight*/}
//         <div className="flex flex-col">
//         {/* Conditionally render the dossier card first */}
//               {selectedWildcard && (
//                 <div className={`bg-white rounded-lg shadow-lg p-5 relative transition-opacity duration-250 ease-in-out opacity-100 mb-6`}>
//                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>


//                     <div
//                       className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                     >
//                       ×
//                     </div>

//                     {/* Color Bar Visualization */}
//                     <div
//                       className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                     >

//                      <div
//                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                         style={{ left:  selectedWildcard.level ? selectedWildcard.level : "0%" }}
//                       ></div>
//                   </div>

//                     <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                       <ul className="list-disc pl-5 text-gray-700">
//                         {selectedWildcard.points.map((point, index) => (
//                           <li key={index}>{point}</li>
//                         ))}
//                      </ul>
//                     <p className="mt-2 text-gray-700 leading-relaxed">
//                        {selectedWildcard.details}
//                    </p>
//                 </div>
//                )}
//            {activeTheme !== null && (
//               <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                 activeTheme !== null ? 'bg-red-100' : ''}
//                 `}>
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//         </div>
//       </div>

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;



















// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);


//   const themes = [
//     {
//       icon: Globe2,
//       title: "Power in Flux",
//       warning: "HIGH",
//       description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//       detailSections: {
//         threats: [
//           { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//           { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//           { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//           { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//           { text: "Trump's return and policy impacts", risk: "HIGH" }
//         ],
//         indicators: [
//           "Diplomatic engagements between African states and China/Russia",
//           "UAE investment agreement exclusions/renegotiations",
//           "Sharp spikes in localized unrest near UAE infrastructure projects",
//           "Expansion of Chinese/Russian military cooperation in Africa",
//           "Reports of UAE firms facing regulatory challenges"
//         ],
//         mitigation: [
//           "Diplomatic diversification with multilateral African institutions",
//           "Coalition building with smaller yet influential states",
//           "Enhanced public diplomacy highlighting development benefits",
//           "Increased security investments and partnerships",
//           "Formation of strategic alliances"
//         ],
//         impact: [
//           "UAE's African investments ($97B in 2022-2023)",
//           "UAE energy infrastructure and ports",
//           "Regional trade and energy routes",
//           "Diplomatic maneuverability",
//           "Economic partnerships"
//         ]
//       }
//     },
//     {
//       icon: Cpu,
//       title: "Technological Disruptions",
//       warning: "VERY HIGH",
//       description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//       detailSections: {
//         threats: [
//           { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//           { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//           { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "Major AGI breakthrough announcements from leading nations",
//           "Reports of quantum decryption capabilities",
//           "Increased classified defense/aerospace program funding",
//           "Diplomatic efforts to regulate/limit advanced tech access",
//           "Market disruptions in traditional energy sectors"
//         ],
//         mitigation: [
//           "Investment in domestic AGI development",
//           "Development of post-quantum cryptography capabilities",
//           "Leadership in global AI governance frameworks",
//           "Formation of strategic tech alliances with mid-tier powers",
//           "Accelerated economic diversification beyond hydrocarbons"
//         ],
//         impact: [
//           "National security and cybersecurity frameworks",
//           "Financial systems and encrypted communications",
//           "Traditional energy markets",
//           "Computational resources access",
//           "Global technological competitiveness"
//         ]
//       }
//     },
//     {
//       icon: Shield,
//       title: "Security & Infrastructure",
//       warning: "HIGH",
//       description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//       detailSections: {
//         threats: [
//           { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//           { text: "Rise of AI war machines", risk: "LOW" },
//           { text: "Weaponization of space", risk: "VERY LOW" },
//           { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//         ],
//         indicators: [
//           "Anomalous activity in critical infrastructure networks",
//           "Autonomous cyber defense system deployments",
//           "ASAT (anti-satellite) weapon testing and deployment",
//           "Cloud service disruptions affecting vital industries",
//           "Rising concentration of cloud providers",
//           "Military exercises near critical shipping lanes"
//         ],
//         mitigation: [
//           "Advanced cyber defense development",
//           "Infrastructure redundancy and segmentation",
//           "Multi-cloud environment adoption",
//           "Sovereign cloud infrastructure development",
//           "Space situational awareness capabilities",
//           "Satellite network redundancy",
//           "International space governance leadership"
//         ],
//         impact: [
//           "Critical infrastructure security",
//           "Military/defense communications",
//           "Satellite-dependent operations",
//           "Cloud computing access",
//           "Global trade routes",
//           "Energy grid stability",
//           "Financial system resilience",
//           "Port and logistics operations"
//         ]
//       }
//     },
//     {
//       icon: TrendingDown,
//       title: "Economic Shocks",
//       warning: "MEDIUM",
//       description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//       detailSections: {
//         threats: [
//           { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//           { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//         ],
//         indicators: [
//           "BRICS currency framework development",
//           "Growth of decentralized reserve assets",
//           "Oil trade shifts to non-dollar currencies",
//           "IMF/World Bank tensions over digital assets",
//           "Biotech research expansion in minimally regulated environments",
//           "Reports of gene-edited crop failures",
//           "Genetic modification impacts in regional markets"
//         ],
//         mitigation: [
//           "Diversification of currency reserves",
//           "BRICS economic partnership strengthening",
//           "GCC digital currency development",
//           "Blockchain/fintech infrastructure expansion",
//           "National biotech governance frameworks",
//           "International biotech ethics leadership",
//           "Enhanced biosecurity monitoring systems"
//         ],
//         impact: [
//           "Global financial system stability",
//           "UAE's role as financial intermediary",
//           "Trade and investment flows",
//           "Agricultural investments in Africa",
//           "Food security initiatives",
//           "Public health frameworks",
//           "Cross-border biological risks"
//         ]
//       }
//     }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//         setSelectedWildcard(wildcard);
//     };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards + right-hand dashboard */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6 flex flex-col">
//            {themes.map((theme, index) => (
//               <ThemeCard
//                 key={index}
//                 {...theme}
//                 isActive={activeTheme === index}
//                 onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//            ))}
//           <div className="mt-8">
//              <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//           </div>
//         </div>

//         {/*  Moved detailed content here, with no outer gray box and a red highlight*/}
//           <div className="flex flex-col">
//             {/* Conditionally render the dossier card first */}
//               {selectedWildcard && (
//                 <div className={`bg-white rounded-lg shadow-lg p-5 relative transition-opacity duration-250 ease-in-out opacity-100 mb-6`}>
//                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>


//                     <div
//                       className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                     >
//                       ×
//                     </div>

//                     {/* Color Bar Visualization */}
//                     <div
//                       className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                     >

//                      <div
//                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                         style={{ left:  selectedWildcard.level ? selectedWildcard.level : "0%" }}
//                       ></div>
//                   </div>

//                     <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                       <ul className="list-disc pl-5 text-gray-700">
//                         {selectedWildcard.points.map((point, index) => (
//                           <li key={index}>{point}</li>
//                         ))}
//                      </ul>
//                     <p className="mt-2 text-gray-700 leading-relaxed">
//                        {selectedWildcard.details}
//                    </p>
//                 </div>
//                )}
//          {activeTheme !== null && (
//               <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                 activeTheme !== null ? 'bg-red-100' : ''}
//                 `}>
//                 {themes[activeTheme].detailSections ? (
//                   <>
//                     <div>
//                       <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                           <li key={index} className="relative pr-24 text-gray-700">
//                             {threat.text}
//                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                               threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                               threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                               threat.risk === 'LOW' ? 'bg-green-200' :
//                               threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                               threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                               threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                               'bg-gray-200'
//                             }`}>
//                               {threat.risk}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                           <li key={index} className="text-gray-700">{indicator}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                           <li key={index} className="text-gray-700">{strategy}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h3 className="font-bold mb-3">Impact Areas</h3>
//                       <ul className="list-disc pl-6 space-y-2">
//                         {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                           <li key={index} className="text-gray-700">{impact}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="font-bold mb-4">Key Elements:</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                       {themes[activeTheme].details.map((detail, index) => (
//                         <li key={index} className="text-gray-700">{detail}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//             </div>
//             )}
//            </div>
//         </div>

//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;

















// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//         setSelectedWildcard(wildcard);
//     };


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards and details */}
//     <div className="grid grid-cols-2 gap-8">
//         {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                   {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//                 ))}
//           </div>


//           {/*  Thematic Details - Right Column */}
//          <div>
//               {selectedWildcard && (
//                   <div className={`bg-white rounded-lg shadow-lg p-5 relative transition-opacity duration-250 ease-in-out opacity-100 mb-6`}>
//                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                     <div
//                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                       >
//                        ×
//                      </div>

//                     {/* Color Bar Visualization */}
//                     <div
//                         className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                       >

//                      <div
//                       className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                          style={{ left:  selectedWildcard.level ? selectedWildcard.level : "0%" }}
//                      ></div>
//                     </div>

//                   <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                   <ul className="list-disc pl-5 text-gray-700">
//                    {selectedWildcard.points.map((point, index) => (
//                      <li key={index}>{point}</li>
//                      ))}
//                  </ul>
//                     <p className="mt-2 text-gray-700 leading-relaxed">
//                       {selectedWildcard.details}
//                     </p>
//                </div>
//                )}
//               {activeTheme !== null && (
//                 <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                       activeTheme !== null ? 'bg-red-100' : ''}
//                     `}>
//                     {themes[activeTheme].detailSections ? (
//                       <>
//                        <div>
//                          <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                          <ul className="list-disc pl-6 space-y-2">
//                             {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                              <li key={index} className="relative pr-24 text-gray-700">
//                                {threat.text}
//                                <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                    threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                      threat.risk === 'LOW' ? 'bg-green-200' :
//                                      threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                      threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                     'bg-gray-200'
//                                   }`}>
//                                  {threat.risk}
//                                   </span>
//                                 </li>
//                               ))}
//                           </ul>
//                           </div>
//                         <div>
//                          <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                           <ul className="list-disc pl-6 space-y-2">
//                             {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                               <li key={index} className="text-gray-700">{indicator}</li>
//                            ))}
//                          </ul>
//                         </div>

//                         <div>
//                             <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                             {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                  <li key={index} className="text-gray-700">{strategy}</li>
//                            ))}
//                          </ul>
//                          </div>

//                        <div>
//                            <h3 className="font-bold mb-3">Impact Areas</h3>
//                            <ul className="list-disc pl-6 space-y-2">
//                             {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                               <li key={index} className="text-gray-700">{impact}</li>
//                               ))}
//                             </ul>
//                           </div>
//                        </>
//                     ) : (
//                         <>
//                         <h3 className="font-bold mb-4">Key Elements:</h3>
//                         <ul className="list-disc pl-6 space-y-2">
//                             {themes[activeTheme].details.map((detail, index) => (
//                             <li key={index} className="text-gray-700">{detail}</li>
//                             ))}
//                         </ul>
//                          </>
//                         )}
//                     </div>
//                )}
//         </div>
//     </div>


//      {/* Third row: Warning Levels Dashboard  */}
//         {/* <div className="grid grid-cols-2 gap-8"> */}
//           {/* Dashboard - Left Column */}
//             {/* <div>
//               <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//             </div> */}

//            {/* empty right side to keep the dashboard on the left */}
//             {/* <div>
//            </div>
//         </div> */}


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>



//      {/* Third row: Warning Levels Dashboard  */}
//      <div className="grid grid-cols-2 gap-8">
//           {/* Dashboard - Left Column */}
//             <div>
//               <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//             </div>

//            {/* empty right side to keep the dashboard on the left */}
//             <div>
//            </div>
//         </div>








//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;








// import React, { useState } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//         setSelectedWildcard(wildcard);
//     };


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8">
//           {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//            {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>



//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8">
//                 {/* Dashboard - Left Column */}
//                <div className="relative">

//                         <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} />
//                   </div>


//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">

//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                         style={{ left:  selectedWildcard.level ? selectedWildcard.level : "0%" }}
//                                    ></div>
//                                    </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}


//                     </div>
//           </div>


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;
















// import React, { useState, useEffect } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);
//       const [fadeInMarker, setFadeInMarker] = useState(false);


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//           setSelectedWildcard(wildcard);
//       };

//     useEffect(() => {
//        if (selectedWildcard) {
//             setFadeInMarker(true);
//          } else {
//             setFadeInMarker(false);
//            }
//    }, [selectedWildcard]);


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//       <h3 className="font-bold text-lg mb-3">Thematic Areas</h3>

//       {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8">
//           {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//            {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>


//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8">
//                 {/* Dashboard - Left Column */}
//                <div className="relative">

//                         <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
//                   </div>


//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">

//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                        onClick={() => handleWildcardSelect(null)}
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                         style={{ left:  fadeInMarker ? selectedWildcard.level ? selectedWildcard.level : "0%" : "0%" }}
//                                    ></div>
//                                    </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}


//                     </div>
//           </div>


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;









// import React, { useState, useEffect } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);
//       const [fadeInMarker, setFadeInMarker] = useState(false);


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];


//     const handleWildcardSelect = (wildcard) => {
//           setSelectedWildcard(wildcard);
//       };

//      useEffect(() => {
//         if (selectedWildcard) {
//             setFadeInMarker(true);
//          } else {
//             setFadeInMarker(false);
//            }
//    }, [selectedWildcard]);


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>


//         <div className="mb-8">
//             <h3 className="text-2xl font-bold text-left mb-4 text-gray-800">
//                 Thematic Areas
//                 <div className="h-1 w-full bg-red-600 mt-1" />
//             </h3>
//         </div>
//     {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8 mb-12">
//             {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//           {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>


//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8">
//                 {/* Dashboard - Left Column */}
//                <div className="relative">

//                         <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
//                   </div>


//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">

//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                        onClick={() => handleWildcardSelect(null)}
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                         style={{ left:  fadeInMarker ? levelPositions[selectedWildcard.level] : "0%" }}
//                                    ></div>
//                                    </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}


//                     </div>
//           </div>


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;














// import React, { useState, useEffect } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//     const [activeTheme, setActiveTheme] = useState(null);
//       const [selectedWildcard, setSelectedWildcard] = useState(null);
//         const [fadeInMarker, setFadeInMarker] = useState(false);

//    const levelPositions = {
//         "Very Low": "5%",
//         Low: "20%",
//         Medium: "50%",
//         High: "70%",
//         "Very High": "85%",
//         "Almost Certain": "95%",
//       };


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];

//    const handleWildcardSelect = (wildcard) => {
//           setSelectedWildcard(wildcard);
//     };

//    useEffect(() => {
//         if (selectedWildcard) {
//             setFadeInMarker(true);
//          } else {
//             setFadeInMarker(false);
//            }
//     }, [selectedWildcard]);


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//         <div className="mb-8">
//             <h3 className="text-2xl font-bold text-left mb-4 text-gray-800">
//                 Thematic Areas
//                 <div className="h-1 w-full bg-red-600 mt-1" />
//             </h3>
//         </div>

//       {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8 mb-12">
//           {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//           {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>


//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8">
//                 {/* Dashboard - Left Column */}
//                 <div className="relative">
//                        <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
//                 </div>

//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">
//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                         onClick={() => handleWildcardSelect(null)}
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                          style={{ left: fadeInMarker ? levelPositions[selectedWildcard.level] : "0%" }}
//                                    ></div>
//                                     </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}
//                     </div>
//           </div>



//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;












// import React, { useState, useEffect } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);
//       const [fadeInMarker, setFadeInMarker] = useState(false);

//    const levelPositions = {
//         "Very Low": "5%",
//         Low: "20%",
//         Medium: "50%",
//         High: "70%",
//         "Very High": "85%",
//         "Almost Certain": "95%",
//       };


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];


//     const handleWildcardSelect = (wildcard) => {
//           setSelectedWildcard(wildcard);
//     };

//    useEffect(() => {
//         if (selectedWildcard) {
//             setFadeInMarker(true);
//          } else {
//             setFadeInMarker(false);
//            }
//     }, [selectedWildcard]);


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//         <div className="mb-8 relative">
//             <h3 className="text-2xl font-bold text-left mb-4 text-gray-800">
//                 Thematic Areas
//                 <div className="h-1 w-full bg-red-600 mt-1" />
//             </h3>

//         </div>

//       {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8 mb-12">
//           {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//            {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>


//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8 relative">
//                 {/* Dashboard - Left Column */}
//                <div className="relative">
//                  <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
//                   <div
//                     className="absolute top-[-2px] left-0 h-1 w-full bg-red-600 mt-1 z-10"
//                       />
//                     </div>

//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">
//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                         onClick={() => handleWildcardSelect(null)}
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                         style={{ left: fadeInMarker ? levelPositions[selectedWildcard.level] : "0%" }}
//                                    ></div>
//                                     </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}
//                     </div>
//           </div>


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;










// import React, { useState, useEffect } from 'react';
// import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
// import InteractiveChord from './InteractiveChord';

// import ModularRiskDashboard from "./ModularRiskDashboard";
// import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
// import SankeyChart from './SankeyChart';
// import GlobeComponent from './GlobeComponent';
// import StrategicSunburstOriginal from './StrategicSunburstOriginal';
// import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


// const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
//         isActive
//           ? 'bg-red-100 shadow-lg scale-105'
//           : 'bg-white hover:bg-gray-50'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
//         <h3 className="font-bold text-lg">{title}</h3>
//       </div>
//       <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
//         warning === 'EXTREME' ? 'bg-red-600 text-white' :
//         warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//         warning === 'HIGH' ? 'bg-yellow-500' :
//         warning === 'MEDIUM' ? 'bg-yellow-200' :
//         'bg-green-200'
//       }`}>
//         {warning}
//       </div>
//       <p className={`text-sm mt-2 transition-all duration-500 ${
//         isActive ? 'text-gray-800' : 'text-gray-600'
//       }`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// const RiskGrid = () => {
//   const [activeTheme, setActiveTheme] = useState(null);
//     const [selectedWildcard, setSelectedWildcard] = useState(null);
//       const [fadeInMarker, setFadeInMarker] = useState(false);

//    const levelPositions = {
//         "Very Low": "5%",
//         Low: "20%",
//         Medium: "50%",
//         High: "70%",
//         "Very High": "85%",
//         "Almost Certain": "95%",
//       };


//   const themes = [
//       {
//           icon: Globe2,
//           title: "Power in Flux",
//           warning: "HIGH",
//           description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
//           detailSections: {
//               threats: [
//                   { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
//                   { text: "BRICS rise and alternative financial order", risk: "HIGH" },
//                   { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
//                   { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
//                   { text: "Trump's return and policy impacts", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Diplomatic engagements between African states and China/Russia",
//                   "UAE investment agreement exclusions/renegotiations",
//                   "Sharp spikes in localized unrest near UAE infrastructure projects",
//                   "Expansion of Chinese/Russian military cooperation in Africa",
//                   "Reports of UAE firms facing regulatory challenges"
//               ],
//               mitigation: [
//                   "Diplomatic diversification with multilateral African institutions",
//                   "Coalition building with smaller yet influential states",
//                   "Enhanced public diplomacy highlighting development benefits",
//                   "Increased security investments and partnerships",
//                   "Formation of strategic alliances"
//               ],
//               impact: [
//                   "UAE's African investments ($97B in 2022-2023)",
//                   "UAE energy infrastructure and ports",
//                   "Regional trade and energy routes",
//                   "Diplomatic maneuverability",
//                   "Economic partnerships"
//               ]
//           }
//       },
//       {
//           icon: Cpu,
//           title: "Technological Disruptions",
//           warning: "VERY HIGH",
//           description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
//           detailSections: {
//               threats: [
//                   { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
//                   { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
//                   { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "Major AGI breakthrough announcements from leading nations",
//                   "Reports of quantum decryption capabilities",
//                   "Increased classified defense/aerospace program funding",
//                   "Diplomatic efforts to regulate/limit advanced tech access",
//                   "Market disruptions in traditional energy sectors"
//               ],
//               mitigation: [
//                   "Investment in domestic AGI development",
//                   "Development of post-quantum cryptography capabilities",
//                   "Leadership in global AI governance frameworks",
//                   "Formation of strategic tech alliances with mid-tier powers",
//                   "Accelerated economic diversification beyond hydrocarbons"
//               ],
//               impact: [
//                   "National security and cybersecurity frameworks",
//                   "Financial systems and encrypted communications",
//                   "Traditional energy markets",
//                   "Computational resources access",
//                   "Global technological competitiveness"
//               ]
//           }
//       },
//       {
//           icon: Shield,
//           title: "Security & Infrastructure",
//           warning: "HIGH",
//           description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
//           detailSections: {
//               threats: [
//                   { text: "Volt Typhoon cyber operations", risk: "HIGH" },
//                   { text: "Rise of AI war machines", risk: "LOW" },
//                   { text: "Weaponization of space", risk: "VERY LOW" },
//                   { text: "Digital centralization vulnerabilities", risk: "HIGH" }
//               ],
//               indicators: [
//                   "Anomalous activity in critical infrastructure networks",
//                   "Autonomous cyber defense system deployments",
//                   "ASAT (anti-satellite) weapon testing and deployment",
//                   "Cloud service disruptions affecting vital industries",
//                   "Rising concentration of cloud providers",
//                   "Military exercises near critical shipping lanes"
//               ],
//               mitigation: [
//                   "Advanced cyber defense development",
//                   "Infrastructure redundancy and segmentation",
//                   "Multi-cloud environment adoption",
//                   "Sovereign cloud infrastructure development",
//                   "Space situational awareness capabilities",
//                   "Satellite network redundancy",
//                   "International space governance leadership"
//               ],
//               impact: [
//                   "Critical infrastructure security",
//                   "Military/defense communications",
//                   "Satellite-dependent operations",
//                   "Cloud computing access",
//                   "Global trade routes",
//                   "Energy grid stability",
//                   "Financial system resilience",
//                   "Port and logistics operations"
//               ]
//           }
//       },
//       {
//           icon: TrendingDown,
//           title: "Economic Shocks",
//           warning: "MEDIUM",
//           description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
//           detailSections: {
//               threats: [
//                   { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
//                   { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
//               ],
//               indicators: [
//                   "BRICS currency framework development",
//                   "Growth of decentralized reserve assets",
//                   "Oil trade shifts to non-dollar currencies",
//                   "IMF/World Bank tensions over digital assets",
//                   "Biotech research expansion in minimally regulated environments",
//                   "Reports of gene-edited crop failures",
//                   "Genetic modification impacts in regional markets"
//               ],
//               mitigation: [
//                   "Diversification of currency reserves",
//                   "BRICS economic partnership strengthening",
//                   "GCC digital currency development",
//                   "Blockchain/fintech infrastructure expansion",
//                   "National biotech governance frameworks",
//                   "International biotech ethics leadership",
//                   "Enhanced biosecurity monitoring systems"
//               ],
//               impact: [
//                   "Global financial system stability",
//                   "UAE's role as financial intermediary",
//                   "Trade and investment flows",
//                   "Agricultural investments in Africa",
//                   "Food security initiatives",
//                   "Public health frameworks",
//                   "Cross-border biological risks"
//               ]
//           }
//       }
//   ];

//     const handleWildcardSelect = (wildcard) => {
//           setSelectedWildcard(wildcard);
//     };

//      useEffect(() => {
//         if (selectedWildcard) {
//             setFadeInMarker(true);
//          } else {
//             setFadeInMarker(false);
//            }
//     }, [selectedWildcard]);


//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* First row: background + chord diagram */}
//       <div className="mb-12 grid grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-bold text-lg mb-3">Background</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
//               and economic wildcard scenarios that present both risks and opportunities. This report examines these
//               dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
//               resilience and maintain the UAE's global edge.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">Methodology</h3>
//             <p className="text-gray-800 leading-relaxed">
//               This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
//               infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
//               interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
//               underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
//               in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
//               The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
//               mitigation strategies must also be interconnected.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
//             <p className="text-gray-800 leading-relaxed">
//               The report is organized into four thematic sections, shown below.
//               This report is designed to assist readers by providing a framework to navigate its content effectively. The report
//               offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
//               matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
//               scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
//               potential strategies for addressing them.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
//           <p className="text-gray-800 leading-relaxed mb-4">
//             Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
//           </p>
//           <InteractiveChord />
//         </div>
//       </div>

//         <div className="mb-8 relative">
//             <h3 className="text-2xl font-bold text-left mb-4 text-gray-800">
//                 Thematic Areas
//                 <div className="h-1 w-full bg-red-600 mt-1" />
//             </h3>

//         </div>

//       {/* Second row: thematic cards and details */}
//       <div className="grid grid-cols-2 gap-8 mb-12">
//           {/* Thematic Areas - Left Column */}
//         <div className="space-y-6">
//             {themes.map((theme, index) => (
//               <ThemeCard
//                  key={index}
//                 {...theme}
//                  isActive={activeTheme === index}
//                   onClick={() => setActiveTheme(activeTheme === index ? null : index)}
//               />
//               ))}
//         </div>

//            {/*  Thematic Details - Right Column */}
//          <div>
//                 {activeTheme !== null && (
//                     <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
//                             activeTheme !== null ? 'bg-red-100' : ''}
//                         `}>
//                         {themes[activeTheme].detailSections ? (
//                             <>
//                                 <div>
//                                    <h3 className="font-bold mb-3">Threats/Scenarios</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.threats.map((threat, index) => (
//                                             <li key={index} className="relative pr-24 text-gray-700">
//                                               {threat.text}
//                                              <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
//                                                     threat.risk === 'HIGH' ? 'bg-yellow-500' :
//                                                     threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
//                                                     threat.risk === 'LOW' ? 'bg-green-200' :
//                                                     threat.risk === 'VERY LOW' ? 'bg-green-300' :
//                                                     threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
//                                                     threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
//                                                    'bg-gray-200'
//                                                 }`}>
//                                                   {threat.risk}
//                                                 </span>
//                                                 </li>
//                                                 ))}
//                                       </ul>
//                                     </div>

//                                     <div>
//                                      <h3 className="font-bold mb-3">Key Risk Indicators</h3>
//                                      <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
//                                             <li key={index} className="text-gray-700">{indicator}</li>
//                                        ))}
//                                     </ul>
//                                    </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Mitigation Strategies</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                         {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
//                                             <li key={index} className="text-gray-700">{strategy}</li>
//                                         ))}
//                                     </ul>
//                                   </div>

//                                  <div>
//                                     <h3 className="font-bold mb-3">Impact Areas</h3>
//                                     <ul className="list-disc pl-6 space-y-2">
//                                        {themes[activeTheme].detailSections.impact.map((impact, index) => (
//                                          <li key={index} className="text-gray-700">{impact}</li>
//                                        ))}
//                                     </ul>
//                                  </div>
//                               </>
//                         ) : (
//                          <>
//                          <h3 className="font-bold mb-4">Key Elements:</h3>
//                             <ul className="list-disc pl-6 space-y-2">
//                                 {themes[activeTheme].details.map((detail, index) => (
//                                  <li key={index} className="text-gray-700">{detail}</li>
//                               ))}
//                              </ul>
//                            </>
//                           )}
//                      </div>
//                   )}
//            </div>
//       </div>


//        {/* Third row: Warning Levels Dashboard and Dossier card */}
//          <div className="grid grid-cols-2 gap-8 relative">
//                 {/* Dashboard - Left Column */}
//                <div className="relative">
//                  <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
                 
//                  </div>

//             {/* Dashboard Right Column with Dossier Card */}
//             <div className="relative">

//                        {selectedWildcard && (
//                                   <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
//                                     <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

//                                     <div
//                                        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
//                                         onClick={() => handleWildcardSelect(null)}
//                                     >
//                                       ×
//                                       </div>

//                                       {/* Color Bar Visualization */}
//                                    <div
//                                      className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
//                                    >

//                                      <div
//                                         className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
//                                          style={{ left: fadeInMarker ? levelPositions[selectedWildcard.level] : "0%" }}
//                                    ></div>
//                                     </div>

//                                         <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
//                                         <ul className="list-disc pl-5 text-gray-700">
//                                            {selectedWildcard.points.map((point, index) => (
//                                             <li key={index}>{point}</li>
//                                          ))}
//                                         </ul>
//                                         <p className="mt-2 text-gray-700 leading-relaxed">
//                                             {selectedWildcard.details}
//                                          </p>
//                                      </div>
//                                  )}
                    
//                       </div>
//                        <div
//                          className="absolute top-[-2px] left-0 h-1 w-full bg-red-600 mt-1 z-10"
//                         />
//           </div>


//       <div className="mt-16">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>

//       <div className="mt-16 text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
//       </div>

//       {/* Render the original sunburst */}
//       <StrategicSunburstOriginal />

//       {/* Render the sunburst */}
//       {/* <StrategicSunburstDuplicate /> */}

//       {/* Render the original sunburst duplicate */}
//       {/* <StrategicSunburstOriginalDuplicate /> */}

//       {/* Render the chord diagram */}
//       {/* <InteractiveChord /> */}

//       {/* Render the sankey chart */}
//       <SankeyChart />

//       {/* Render the spinning globe */}
//       <GlobeComponent />


//       <div className="mt-8">
//         <p className="text-orange-500 text-3xl font-bold text-center">
//           The Greatest Risk is Complacency
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RiskGrid;























import React, { useState, useEffect } from 'react';
import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';
import InteractiveChord from './InteractiveChord';

import ModularRiskDashboard from "./ModularRiskDashboard";
import StrategicSunburstDuplicate from './StrategicSunburstDuplicate';
import SankeyChart from './SankeyChart';
import GlobeComponent from './GlobeComponent';
import StrategicSunburstOriginal from './StrategicSunburstOriginal';
import StrategicSunburstOriginalDuplicate from './StrategicSunburstOriginalDuplicate';


const ThemeCard = ({ icon: Icon, title, warning, description, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
        isActive
          ? 'bg-red-100 shadow-lg scale-105'
          : 'bg-white hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className={`inline-block px-2 py-1 rounded text-sm mb-2 ${
        warning === 'EXTREME' ? 'bg-red-600 text-white' :
        warning === 'VERY HIGH' ? 'bg-orange-500 text-white' :
        warning === 'HIGH' ? 'bg-yellow-500' :
        warning === 'MEDIUM' ? 'bg-yellow-200' :
        'bg-green-200'
      }`}>
        {warning}
      </div>
      <p className={`text-sm mt-2 transition-all duration-500 ${
        isActive ? 'text-gray-800' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </div>
  );
};

const RiskGrid = () => {
  const [activeTheme, setActiveTheme] = useState(null);
    const [selectedWildcard, setSelectedWildcard] = useState(null);
      const [fadeInMarker, setFadeInMarker] = useState(false);

   const levelPositions = {
        "Very Low": "5%",
        Low: "20%",
        Medium: "50%",
        High: "70%",
        "Very High": "85%",
        "Almost Certain": "95%",
      };


  const themes = [
      {
          icon: Globe2,
          title: "Power in Flux",
          warning: "HIGH",
          description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
          detailSections: {
              threats: [
                  { text: "Africa as battleground for UAE investments", risk: "MEDIUM" },
                  { text: "BRICS rise and alternative financial order", risk: "HIGH" },
                  { text: "Saudi Arabia and Iran alliance possibility", risk: "LOW" },
                  { text: "Multipolar flashpoint collisions", risk: "ALMOST CERTAIN" },
                  { text: "Trump's return and policy impacts", risk: "HIGH" }
              ],
              indicators: [
                  "Diplomatic engagements between African states and China/Russia",
                  "UAE investment agreement exclusions/renegotiations",
                  "Sharp spikes in localized unrest near UAE infrastructure projects",
                  "Expansion of Chinese/Russian military cooperation in Africa",
                  "Reports of UAE firms facing regulatory challenges"
              ],
              mitigation: [
                  "Diplomatic diversification with multilateral African institutions",
                  "Coalition building with smaller yet influential states",
                  "Enhanced public diplomacy highlighting development benefits",
                  "Increased security investments and partnerships",
                  "Formation of strategic alliances"
              ],
              impact: [
                  "UAE's African investments ($97B in 2022-2023)",
                  "UAE energy infrastructure and ports",
                  "Regional trade and energy routes",
                  "Diplomatic maneuverability",
                  "Economic partnerships"
              ]
          }
      },
      {
          icon: Cpu,
          title: "Technological Disruptions",
          warning: "VERY HIGH",
          description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
          detailSections: {
              threats: [
                  { text: "AGI development and state power", risk: "ALMOST CERTAIN" },
                  { text: "Chinese quantum cryptography breakthrough", risk: "VERY HIGH" },
                  { text: "Ultra-advanced technology emergence", risk: "MEDIUM" }
              ],
              indicators: [
                  "Major AGI breakthrough announcements from leading nations",
                  "Reports of quantum decryption capabilities",
                  "Increased classified defense/aerospace program funding",
                  "Diplomatic efforts to regulate/limit advanced tech access",
                  "Market disruptions in traditional energy sectors"
              ],
              mitigation: [
                  "Investment in domestic AGI development",
                  "Development of post-quantum cryptography capabilities",
                  "Leadership in global AI governance frameworks",
                  "Formation of strategic tech alliances with mid-tier powers",
                  "Accelerated economic diversification beyond hydrocarbons"
              ],
              impact: [
                  "National security and cybersecurity frameworks",
                  "Financial systems and encrypted communications",
                  "Traditional energy markets",
                  "Computational resources access",
                  "Global technological competitiveness"
              ]
          }
      },
      {
          icon: Shield,
          title: "Security & Infrastructure",
          warning: "HIGH",
          description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
          detailSections: {
              threats: [
                  { text: "Volt Typhoon cyber operations", risk: "HIGH" },
                  { text: "Rise of AI war machines", risk: "LOW" },
                  { text: "Weaponization of space", risk: "VERY LOW" },
                  { text: "Digital centralization vulnerabilities", risk: "HIGH" }
              ],
              indicators: [
                  "Anomalous activity in critical infrastructure networks",
                  "Autonomous cyber defense system deployments",
                  "ASAT (anti-satellite) weapon testing and deployment",
                  "Cloud service disruptions affecting vital industries",
                  "Rising concentration of cloud providers",
                  "Military exercises near critical shipping lanes"
              ],
              mitigation: [
                  "Advanced cyber defense development",
                  "Infrastructure redundancy and segmentation",
                  "Multi-cloud environment adoption",
                  "Sovereign cloud infrastructure development",
                  "Space situational awareness capabilities",
                  "Satellite network redundancy",
                  "International space governance leadership"
              ],
              impact: [
                  "Critical infrastructure security",
                  "Military/defense communications",
                  "Satellite-dependent operations",
                  "Cloud computing access",
                  "Global trade routes",
                  "Energy grid stability",
                  "Financial system resilience",
                  "Port and logistics operations"
              ]
          }
      },
      {
          icon: TrendingDown,
          title: "Economic Shocks",
          warning: "MEDIUM",
          description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
          detailSections: {
              threats: [
                  { text: "Financial system fragmentation/multiverses", risk: "MEDIUM" },
                  { text: "Unregulated genetic and biotech breakthroughs", risk: "MEDIUM" }
              ],
              indicators: [
                  "BRICS currency framework development",
                  "Growth of decentralized reserve assets",
                  "Oil trade shifts to non-dollar currencies",
                  "IMF/World Bank tensions over digital assets",
                  "Biotech research expansion in minimally regulated environments",
                  "Reports of gene-edited crop failures",
                  "Genetic modification impacts in regional markets"
              ],
              mitigation: [
                  "Diversification of currency reserves",
                  "BRICS economic partnership strengthening",
                  "GCC digital currency development",
                  "Blockchain/fintech infrastructure expansion",
                  "National biotech governance frameworks",
                  "International biotech ethics leadership",
                  "Enhanced biosecurity monitoring systems"
              ],
              impact: [
                  "Global financial system stability",
                  "UAE's role as financial intermediary",
                  "Trade and investment flows",
                  "Agricultural investments in Africa",
                  "Food security initiatives",
                  "Public health frameworks",
                  "Cross-border biological risks"
              ]
          }
      }
  ];

    const handleWildcardSelect = (wildcard) => {
          setSelectedWildcard(wildcard);
    };

     useEffect(() => {
        if (selectedWildcard) {
            setFadeInMarker(true);
         } else {
            setFadeInMarker(false);
           }
    }, [selectedWildcard]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
        <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
      </div>

      {/* First row: background + chord diagram */}
      <div className="mb-12 grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Background</h3>
            <p className="text-gray-800 leading-relaxed">
              The greatest risk is complacency. In 2025, the UAE's strategic landscape is shaped by interconnected geopolitical, technological, infrastructural,
              and economic wildcard scenarios that present both risks and opportunities. This report examines these
              dynamics comprehensively, offering insights into pathways for escalation and key indicators to enhance national
              resilience and maintain the UAE's global edge.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Methodology</h3>
            <p className="text-gray-800 leading-relaxed">
              This report applies a multi-dimensional analysis framework, integrating geopolitical, technological,
              infrastructural, and economic domains. Each section explores specific wildcard scenarios and their
              interdependencies, identifying risks, pathways for escalation, and observable indicators. The analysis
              underscores the UAE's need for strategic adaptability to mitigate vulnerabilities and capitalize on opportunities
              in an evolving global landscape. Many of the threats are interconnected and have cascading, complex impacts.
              The interconnected nature of these challenges is a key part of 2025's risk landscape, and it means that the
              mitigation strategies must also be interconnected.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">2025's Most Dangerous Ideas – How to Use This Report</h3>
            <p className="text-gray-800 leading-relaxed">
              The report is organized into four thematic sections, shown below.
              This report is designed to assist readers by providing a framework to navigate its content effectively. The report
              offers a structured approach for identifying scenarios most relevant to specific strategic areas. The risk/impact
              matrix, provided below, serves as a tool to support prioritization. Examining interdependencies between
              scenarios can also reveal cascading risks and opportunities, offering a holistic view of the challenges and
              potential strategies for addressing them.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-2">Chords of Discord</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Chord diagram below indicates the relationships between thematic areas, wildcard risks and outcomes.
          </p>
          <InteractiveChord />
        </div>
      </div>

        <div className="mb-8 relative">
            <h3 className="text-2xl font-bold text-left mb-4 text-gray-800">
                Thematic Areas
                <div className="h-1 w-full bg-red-600 mt-1" />
            </h3>

        </div>

      {/* Second row: thematic cards and details */}
      <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Thematic Areas - Left Column */}
        <div className="space-y-6">
            {themes.map((theme, index) => (
              <ThemeCard
                 key={index}
                {...theme}
                 isActive={activeTheme === index}
                  onClick={() => setActiveTheme(activeTheme === index ? null : index)}
              />
              ))}
        </div>

           {/*  Thematic Details - Right Column */}
         <div>
                {activeTheme !== null && (
                    <div className={`p-6 rounded-lg animate-fade-in space-y-6 shadow-lg w-[95%] ${
                            activeTheme !== null ? 'bg-red-100' : ''}
                        `}>
                        {themes[activeTheme].detailSections ? (
                            <>
                                <div>
                                   <h3 className="font-bold mb-3">Threats/Scenarios</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                       {themes[activeTheme].detailSections.threats.map((threat, index) => (
                                            <li key={index} className="relative pr-24 text-gray-700">
                                              {threat.text}
                                             <span className={`absolute right-0 px-2 py-1 rounded text-sm ${
                                                    threat.risk === 'HIGH' ? 'bg-yellow-500' :
                                                    threat.risk === 'MEDIUM' ? 'bg-yellow-200' :
                                                    threat.risk === 'LOW' ? 'bg-green-200' :
                                                    threat.risk === 'VERY LOW' ? 'bg-green-300' :
                                                    threat.risk === 'ALMOST CERTAIN' ? 'bg-red-600 text-white' :
                                                    threat.risk === 'VERY HIGH' ? 'bg-orange-500 text-white' :
                                                   'bg-gray-200'
                                                }`}>
                                                  {threat.risk}
                                                </span>
                                                </li>
                                                ))}
                                      </ul>
                                    </div>

                                    <div>
                                     <h3 className="font-bold mb-3">Key Risk Indicators</h3>
                                     <ul className="list-disc pl-6 space-y-2">
                                       {themes[activeTheme].detailSections.indicators.map((indicator, index) => (
                                            <li key={index} className="text-gray-700">{indicator}</li>
                                       ))}
                                    </ul>
                                   </div>

                                 <div>
                                    <h3 className="font-bold mb-3">Mitigation Strategies</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {themes[activeTheme].detailSections.mitigation.map((strategy, index) => (
                                            <li key={index} className="text-gray-700">{strategy}</li>
                                        ))}
                                    </ul>
                                  </div>

                                 <div>
                                    <h3 className="font-bold mb-3">Impact Areas</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                       {themes[activeTheme].detailSections.impact.map((impact, index) => (
                                         <li key={index} className="text-gray-700">{impact}</li>
                                       ))}
                                    </ul>
                                 </div>
                              </>
                        ) : (
                         <>
                         <h3 className="font-bold mb-4">Key Elements:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                {themes[activeTheme].details.map((detail, index) => (
                                 <li key={index} className="text-gray-700">{detail}</li>
                              ))}
                             </ul>
                           </>
                          )}
                     </div>
                  )}
           </div>
      </div>


       {/* Third row: Warning Levels Dashboard and Dossier card */}
         <div className="grid grid-cols-2 gap-8 relative">
                {/* Dashboard - Left Column */}
               <div className="relative">
                 <ModularRiskDashboard onWildcardSelect={handleWildcardSelect} fadeInMarker={fadeInMarker}/>
                 
                 
                  </div>

            {/* Dashboard Right Column with Dossier Card */}
            <div className="relative">

                       {selectedWildcard && (
                                  <div className={`bg-white rounded-lg shadow-lg p-5  absolute top-0 transition-opacity duration-250 ease-in-out opacity-100`}>
                                    <h2 className="text-lg font-bold mb-4 text-gray-800">{selectedWildcard.title}</h2>

                                    <div
                                       className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer text-gray-600"
                                        onClick={() => handleWildcardSelect(null)}
                                    >
                                      ×
                                      </div>

                                      {/* Color Bar Visualization */}
                                   <div
                                     className="h-5 bg-gradient-to-r from-[#1a9641] via-[#66c2a5] via-[#fc8d62] via-[#d73027] to-[#a50026] rounded-lg mb-2 relative overflow-hidden"
                                   >

                                     <div
                                        // className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-darkblue rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
                                        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-blue-900 rounded-full transition-all duration-700 ease-in-out shadow-md border-2 border-opacity-90 border-white"
                                        
                                        style={{ left: fadeInMarker ? levelPositions[selectedWildcard.level] : "0%" }}
                                   ></div>
                                    </div>

                                        <h3 className="text-md font-bold mb-2 text-gray-700">{selectedWildcard.subheading}</h3>
                                        <ul className="list-disc pl-5 text-gray-700">
                                           {selectedWildcard.points.map((point, index) => (
                                            <li key={index}>{point}</li>
                                         ))}
                                        </ul>
                                        <p className="mt-2 text-gray-700 leading-relaxed">
                                            {selectedWildcard.details}
                                         </p>
                                     </div>
                                 )}

                    </div>
                          <div
                        className="absolute top-[-2px] left-0 h-1 w-full bg-red-600 mt-1 z-10"
                    />
          </div>


      <div className="mt-16">
        <p className="text-orange-500 text-5xl font-bold text-center">
          The Greatest Risk is Complacency
        </p>
      </div>

      <div className="mt-16 text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
        <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
      </div>

      {/* Render the original sunburst */}
      <StrategicSunburstOriginal />

      {/* Render the sunburst */}
      {/* <StrategicSunburstDuplicate /> */}

      {/* Render the original sunburst duplicate */}
      {/* <StrategicSunburstOriginalDuplicate /> */}

      {/* Render the chord diagram */}
      {/* <InteractiveChord /> */}

      {/* Render the sankey chart */}
      <SankeyChart />

      <div className="mt-8 text-center w-full text-2xl font-bold text-gray-900">
        Figure: UAE Meta-Themes to Wildcards to Outcomes
      </div>



      {/* Render the spinning globe */}
      <GlobeComponent />

      <div className="mt-8 text-center w-full text-2xl font-bold text-gray-900">
        Figure: Strategic Horizons: UAE's Global Risk Landscape 2025
      </div>



      <div className="mt-8">
        <p className="text-orange-500 text-5xl font-bold text-center">
          The Greatest Risk is Complacency
        </p>
      </div>
    </div>
  );
};

export default RiskGrid;
















