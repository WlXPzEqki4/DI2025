// import React, { useState } from 'react';
// import { TrendingDown, Dna, Leaf, AlertTriangle } from 'lucide-react';

// const DisruptionCard = ({ title, riskLevel, description, implications, scenarios, icon: Icon, isExpanded, onClick }) => {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
//         ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
//       onClick={onClick}
//     >
//       <div className="p-4">
//         <div className="flex items-center gap-3 mb-3">
//           <Icon className={`w-6 h-6 ${isExpanded ? 'text-emerald-600' : 'text-gray-600'}`} />
//           <h3 className="font-bold text-lg">{title}</h3>
//           <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
//             riskLevel === 'MEDIUM' ? 'bg-yellow-200 text-yellow-800' : 
//             'bg-red-200 text-red-800'
//           }`}>
//             {riskLevel}
//           </span>
//         </div>
        
//         <p className="text-gray-600 mb-3">{description}</p>
        
//         {isExpanded && (
//           <div className="animate-fade-in space-y-4">
//             <div>
//               <h4 className="font-semibold mb-2 text-emerald-800">Strategic Implications:</h4>
//               <ul className="space-y-2">
//                 {implications.map((implication, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
//                     <span>{implication}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-2 text-emerald-800">Risk Scenarios:</h4>
//               <ul className="space-y-2">
//                 {scenarios.map((scenario, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                     <span>{scenario}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ImpactNetwork = ({ activeDisruption }) => {
//   const impactData = {
//     financial: [
//       { sector: "Trade Routes", impact: "HIGH", effect: "Disruption of traditional payment systems" },
//       { sector: "Energy Markets", impact: "HIGH", effect: "Non-dollar trading implications" },
//       { sector: "Banking", impact: "MEDIUM", effect: "Alternative financial frameworks" },
//       { sector: "Investment", impact: "MEDIUM", effect: "Strategic realignment needed" }
//     ],
//     biotech: [
//       { sector: "Agriculture", impact: "HIGH", effect: "Crop resilience challenges" },
//       { sector: "Healthcare", impact: "MEDIUM", effect: "Novel treatment risks" },
//       { sector: "Biosecurity", impact: "HIGH", effect: "Containment challenges" },
//       { sector: "Food Security", impact: "MEDIUM", effect: "Supply chain vulnerability" }
//     ]
//   };

//   return (
//     <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
//       activeDisruption ? 'opacity-100' : 'opacity-0'
//     }`}>
//       {activeDisruption && impactData[activeDisruption] && (
//         <div className="space-y-4">
//           <h3 className="font-bold text-lg mb-3">Sectoral Impact Analysis</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {impactData[activeDisruption].map((item, idx) => (
//               <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="font-semibold">{item.sector}</div>
//                   <div className={`px-2 py-1 rounded text-sm ${
//                     item.impact === 'HIGH' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {item.impact}
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-600">{item.effect}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const EconomicEnvironmentalAnalysis = () => {
//   const [activeDisruption, setActiveDisruption] = useState(null);
  
//   const disruptions = [
//     {
//       id: 'financial',
//       icon: TrendingDown,
//       title: "Financial System Fracturing",
//       riskLevel: "MEDIUM",
//       description: "BRICS-led financial realignments threaten traditional monetary systems and trade routes.",
//       implications: [
//         "Need for diversified currency reserves",
//         "Adaptation to non-dollar trade systems",
//         "Development of alternative payment networks",
//         "Strategic economic partnerships realignment"
//       ],
//       scenarios: [
//         "Rapid decline in dollar-based trade settlement",
//         "Emergence of competing financial frameworks",
//         "Regional trading bloc formation",
//         "Critical market access restrictions"
//       ]
//     },
//     {
//       id: 'biotech',
//       icon: Dna,
//       title: "Biotech and Environmental Threats",
//       riskLevel: "MEDIUM",
//       description: "Unregulated genetic engineering and environmental challenges pose cascading risks to stability.",
//       implications: [
//         "Enhanced biosecurity frameworks needed",
//         "Agricultural resilience strategies",
//         "Environmental monitoring systems",
//         "International cooperation mechanisms"
//       ],
//       scenarios: [
//         "Engineered pest outbreaks affecting food security",
//         "Uncontrolled genetic modifications",
//         "Cascade effects in ecosystems",
//         "Cross-border biological incidents"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">Economic Shocks and Environmental Disruptions</h1>
//         <h2 className="text-xl text-gray-600">Financial Fragmentation and Ecological Challenges</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {disruptions.map((disruption) => (
//           <DisruptionCard
//             key={disruption.id}
//             {...disruption}
//             isExpanded={activeDisruption === disruption.id}
//             onClick={() => setActiveDisruption(
//               activeDisruption === disruption.id ? null : disruption.id
//             )}
//           />
//         ))}
//       </div>

//       <ImpactNetwork activeDisruption={activeDisruption} />

//       <div className="mt-8 p-4 bg-emerald-900 text-white rounded-lg">
//         <p className="text-center font-semibold">
//           "The UAE's economic resilience depends on its ability to navigate the interconnected risks of financial fragmentation and environmental disruption."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EconomicEnvironmentalAnalysis;













import React, { useState } from 'react';
import { TrendingDown, Dna, Leaf, AlertTriangle } from 'lucide-react';
import EconomicEnvironmentalDisruptionAnalysis from './EconomicEnvironmentalDisruptionAnalysis';
import SystemResilienceAnalysis from './SystemResilienceAnalysis';


const DisruptionCard = ({ title, riskLevel, description, implications, scenarios, icon: Icon, isExpanded, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
        ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Icon className={`w-6 h-6 ${isExpanded ? 'text-emerald-600' : 'text-gray-600'}`} />
          <h3 className="font-bold text-lg">{title}</h3>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
            riskLevel === 'MEDIUM' ? 'bg-yellow-200 text-yellow-800' : 
            'bg-red-200 text-red-800'
          }`}>
            {riskLevel}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{description}</p>
        
        {isExpanded && (
          <div className="animate-fade-in space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-emerald-800">Strategic Implications:</h4>
              <ul className="space-y-2">
                {implications.map((implication, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2"></span>
                    <span>{implication}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-emerald-800">Risk Scenarios:</h4>
              <ul className="space-y-2">
                {scenarios.map((scenario, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ImpactNetwork = ({ activeDisruption }) => {
  const impactData = {
    financial: [
      { sector: "Trade Routes", impact: "HIGH", effect: "Disruption of traditional payment systems" },
      { sector: "Energy Markets", impact: "HIGH", effect: "Non-dollar trading implications" },
      { sector: "Banking", impact: "MEDIUM", effect: "Alternative financial frameworks" },
      { sector: "Investment", impact: "MEDIUM", effect: "Strategic realignment needed" }
    ],
    biotech: [
      { sector: "Agriculture", impact: "HIGH", effect: "Crop resilience challenges" },
      { sector: "Healthcare", impact: "MEDIUM", effect: "Novel treatment risks" },
      { sector: "Biosecurity", impact: "HIGH", effect: "Containment challenges" },
      { sector: "Food Security", impact: "MEDIUM", effect: "Supply chain vulnerability" }
    ]
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
      activeDisruption ? 'opacity-100' : 'opacity-0'
    }`}>
      {activeDisruption && impactData[activeDisruption] && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-3">Sectoral Impact Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactData[activeDisruption].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">{item.sector}</div>
                  <div className={`px-2 py-1 rounded text-sm ${
                    item.impact === 'HIGH' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{item.effect}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const EconomicEnvironmentalAnalysis = () => {
  const [activeDisruption, setActiveDisruption] = useState(null);
  
  const disruptions = [
    {
      id: 'financial',
      icon: TrendingDown,
      title: "Financial System Fracturing",
      riskLevel: "MEDIUM",
      description: "BRICS-led financial realignments threaten traditional monetary systems and trade routes.",
      implications: [
        "Need for diversified currency reserves",
        "Adaptation to non-dollar trade systems",
        "Development of alternative payment networks",
        "Strategic economic partnerships realignment"
      ],
      scenarios: [
        "Rapid decline in dollar-based trade settlement",
        "Emergence of competing financial frameworks",
        "Regional trading bloc formation",
        "Critical market access restrictions"
      ]
    },
    {
      id: 'biotech',
      icon: Dna,
      title: "Biotech and Environmental Threats",
      riskLevel: "MEDIUM",
      description: "Unregulated genetic engineering and environmental challenges pose cascading risks to stability.",
      implications: [
        "Enhanced biosecurity frameworks needed",
        "Agricultural resilience strategies",
        "Environmental monitoring systems",
        "International cooperation mechanisms"
      ],
      scenarios: [
        "Engineered pest outbreaks affecting food security",
        "Uncontrolled genetic modifications",
        "Cascade effects in ecosystems",
        "Cross-border biological incidents"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Economic Shocks and Environmental Disruptions</h1>
        <h2 className="text-xl text-gray-600">Financial Fragmentation and Ecological Challenges</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {disruptions.map((disruption) => (
          <DisruptionCard
            key={disruption.id}
            {...disruption}
            isExpanded={activeDisruption === disruption.id}
            onClick={() => setActiveDisruption(
              activeDisruption === disruption.id ? null : disruption.id
            )}
          />
        ))}
      </div>

      <ImpactNetwork activeDisruption={activeDisruption} />

      <div className="mt-8 p-4 bg-emerald-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The UAE's economic resilience depends on its ability to navigate the interconnected risks of financial fragmentation and environmental disruption."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Detailed Impact Chain Analysis</h2>
          <p className="text-gray-600 mt-2">
            Explore the cascading effects and mitigation strategies for economic and environmental disruptions
          </p>
        </div>
        <EconomicEnvironmentalDisruptionAnalysis />
      </div>



      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">System Vulnerability Analysis</h2>
          <p className="text-gray-600 mt-2">
          Mapping Financial and Environmental System Risks
          </p>
        </div>
        <SystemResilienceAnalysis />
      </div>




      








    </div>
  );
};

export default EconomicEnvironmentalAnalysis;