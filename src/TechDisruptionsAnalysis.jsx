// import React, { useState } from 'react';
// import { Brain, Shield, Zap } from 'lucide-react';

// const DisruptionCard = ({ title, riskLevel, description, impacts, implications, icon: Icon, isExpanded, onClick }) => {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
//         ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
//       onClick={onClick}
//     >
//       <div className="p-4">
//         <div className="flex items-center gap-3 mb-3">
//           <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-600' : 'text-gray-600'}`} />
//           <h3 className="font-bold text-lg">{title}</h3>
//           <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
//             riskLevel === 'ALMOST CERTAIN' ? 'bg-red-200 text-red-800' :
//             riskLevel === 'VERY HIGH' ? 'bg-orange-200 text-orange-800' :
//             'bg-yellow-200 text-yellow-800'
//           }`}>
//             {riskLevel}
//           </span>
//         </div>
        
//         <p className="text-gray-600 mb-3">{description}</p>
        
//         {isExpanded && (
//           <div className="animate-fade-in space-y-4">
//             <div>
//               <h4 className="font-semibold mb-2 text-blue-800">Key Impacts:</h4>
//               <ul className="space-y-2">
//                 {impacts.map((impact, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
//                     <span>{impact}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-2 text-blue-800">Strategic Implications:</h4>
//               <ul className="space-y-2">
//                 {implications.map((implication, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2"></span>
//                     <span>{implication}</span>
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

// const TechnologyTimeline = ({ activeDisruption }) => {
//   const timelineData = {
//     agi: [
//       { phase: "Near-term", event: "AGI development race intensifies" },
//       { phase: "Mid-term", event: "State monopolization of AGI capabilities" },
//       { phase: "Long-term", event: "Fundamental shift in global power dynamics" }
//     ],
//     quantum: [
//       { phase: "Near-term", event: "Quantum supremacy achievements" },
//       { phase: "Mid-term", event: "Breaking of current cryptographic standards" },
//       { phase: "Long-term", event: "New quantum-safe security paradigm" }
//     ],
//     advanced: [
//       { phase: "Near-term", event: "Zero-point energy breakthroughs" },
//       { phase: "Mid-term", event: "Metamaterials revolutionize industry" },
//       { phase: "Long-term", event: "Energy market transformation" }
//     ]
//   };

//   return (
//     <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
//       activeDisruption ? 'opacity-100' : 'opacity-0'
//     }`}>
//       {activeDisruption && timelineData[activeDisruption] && (
//         <div className="space-y-4">
//           <h3 className="font-bold text-lg mb-3">Development Timeline</h3>
//           <div className="flex flex-col md:flex-row gap-4 justify-between">
//             {timelineData[activeDisruption].map((item, idx) => (
//               <div key={idx} className="flex-1 bg-white p-4 rounded-lg shadow-sm">
//                 <div className="text-sm text-blue-600 font-semibold mb-1">{item.phase}</div>
//                 <div className="text-gray-800">{item.event}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const TechDisruptionsAnalysis = () => {
//   const [activeDisruption, setActiveDisruption] = useState(null);
  
//   const disruptions = [
//     {
//       id: 'agi',
//       icon: Brain,
//       title: "The Rise of Superintelligence",
//       riskLevel: "ALMOST CERTAIN",
//       description: "State control of AGI could fundamentally reshape global power dynamics and technological sovereignty.",
//       impacts: [
//         "Monopolization of AGI capabilities by leading powers",
//         "Acceleration of autonomous decision-making systems",
//         "Transformation of strategic planning and defense",
//         "Disruption of traditional power hierarchies"
//       ],
//       implications: [
//         "Need for UAE domestic AGI development",
//         "Risk of technological dependency",
//         "Strategic realignment with AGI-capable nations",
//         "Adaptation of national security frameworks"
//       ]
//     },
//     {
//       id: 'quantum',
//       icon: Shield,
//       title: "Quantum Cryptography Breakthrough",
//       riskLevel: "VERY HIGH",
//       description: "China's potential quantum advances threaten global cybersecurity and communication security.",
//       impacts: [
//         "Vulnerability of current encryption systems",
//         "Exposure of sensitive communications",
//         "Disruption of financial security",
//         "Compromise of diplomatic channels"
//       ],
//       implications: [
//         "Urgent need for quantum-safe protocols",
//         "Protection of strategic communications",
//         "Securing of financial transactions",
//         "Development of quantum capabilities"
//       ]
//     },
//     {
//       id: 'advanced',
//       icon: Zap,
//       title: "Ultra-Advanced Technology",
//       riskLevel: "MEDIUM",
//       description: "Emerging technologies like zero-point energy and metamaterials could transform global markets and power structures.",
//       impacts: [
//         "Disruption of energy markets",
//         "Revolution in materials science",
//         "Transformation of industrial capabilities",
//         "Shift in technological dependencies"
//       ],
//       implications: [
//         "Strategic investment in emerging tech",
//         "Energy market diversification",
//         "Development of new infrastructure",
//         "Protection of traditional industries"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">Technological Disruptions</h1>
//         <h2 className="text-xl text-gray-600">Redefining Power in 2025</h2>
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

//       <TechnologyTimeline activeDisruption={activeDisruption} />

//       <div className="mt-8 p-4 bg-blue-900 text-white rounded-lg">
//         <p className="text-center font-semibold">
//           "Technological advancements are deeply intertwined with geopolitical and infrastructural vulnerabilities."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TechDisruptionsAnalysis;

















import React, { useState } from 'react';
import { Brain, Shield, Zap } from 'lucide-react';
import TechnologyDisruptionTimeline from './TechnologyDisruptionTimeline';
import ImpactNetwork from './ImpactNetwork';

const DisruptionCard = ({ title, riskLevel, description, impacts, implications, icon: Icon, isExpanded, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
        ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-600' : 'text-gray-600'}`} />
          <h3 className="font-bold text-lg">{title}</h3>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
            riskLevel === 'ALMOST CERTAIN' ? 'bg-red-200 text-red-800' :
            riskLevel === 'VERY HIGH' ? 'bg-orange-200 text-orange-800' :
            'bg-yellow-200 text-yellow-800'
          }`}>
            {riskLevel}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{description}</p>
        
        {isExpanded && (
          <div className="animate-fade-in space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-blue-800">Key Impacts:</h4>
              <ul className="space-y-2">
                {impacts.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-blue-800">Strategic Implications:</h4>
              <ul className="space-y-2">
                {implications.map((implication, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2"></span>
                    <span>{implication}</span>
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

const TechnologyTimeline = ({ activeDisruption }) => {
  const timelineData = {
    agi: [
      { phase: "Near-term", event: "AGI development race intensifies" },
      { phase: "Mid-term", event: "State monopolization of AGI capabilities" },
      { phase: "Long-term", event: "Fundamental shift in global power dynamics" }
    ],
    quantum: [
      { phase: "Near-term", event: "Quantum supremacy achievements" },
      { phase: "Mid-term", event: "Breaking of current cryptographic standards" },
      { phase: "Long-term", event: "New quantum-safe security paradigm" }
    ],
    advanced: [
      { phase: "Near-term", event: "Zero-point energy breakthroughs" },
      { phase: "Mid-term", event: "Metamaterials revolutionize industry" },
      { phase: "Long-term", event: "Energy market transformation" }
    ]
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
      activeDisruption ? 'opacity-100' : 'opacity-0'
    }`}>
      {activeDisruption && timelineData[activeDisruption] && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-3">Development Timeline</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {timelineData[activeDisruption].map((item, idx) => (
              <div key={idx} className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-blue-600 font-semibold mb-1">{item.phase}</div>
                <div className="text-gray-800">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TechDisruptionsAnalysis = () => {
  const [activeDisruption, setActiveDisruption] = useState(null);
  
  const disruptions = [
    {
      id: 'agi',
      icon: Brain,
      title: "The Rise of Superintelligence",
      riskLevel: "ALMOST CERTAIN",
      description: "State control of AGI could fundamentally reshape global power dynamics and technological sovereignty.",
      impacts: [
        "Monopolization of AGI capabilities by leading powers",
        "Acceleration of autonomous decision-making systems",
        "Transformation of strategic planning and defense",
        "Disruption of traditional power hierarchies"
      ],
      implications: [
        "Need for UAE domestic AGI development",
        "Risk of technological dependency",
        "Strategic realignment with AGI-capable nations",
        "Adaptation of national security frameworks"
      ]
    },
    {
      id: 'quantum',
      icon: Shield,
      title: "Quantum Cryptography Breakthrough",
      riskLevel: "VERY HIGH",
      description: "China's potential quantum advances threaten global cybersecurity and communication security.",
      impacts: [
        "Vulnerability of current encryption systems",
        "Exposure of sensitive communications",
        "Disruption of financial security",
        "Compromise of diplomatic channels"
      ],
      implications: [
        "Urgent need for quantum-safe protocols",
        "Protection of strategic communications",
        "Securing of financial transactions",
        "Development of quantum capabilities"
      ]
    },
    {
      id: 'advanced',
      icon: Zap,
      title: "Ultra-Advanced Technology",
      riskLevel: "MEDIUM",
      description: "Emerging technologies like zero-point energy and metamaterials could transform global markets and power structures.",
      impacts: [
        "Disruption of energy markets",
        "Revolution in materials science",
        "Transformation of industrial capabilities",
        "Shift in technological dependencies"
      ],
      implications: [
        "Strategic investment in emerging tech",
        "Energy market diversification",
        "Development of new infrastructure",
        "Protection of traditional industries"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Technological Disruptions</h1>
        <h2 className="text-xl text-gray-600">Redefining Power in 2025</h2>
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

      <TechnologyTimeline activeDisruption={activeDisruption} />

      <div className="mt-8 p-4 bg-blue-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "Technological advancements are deeply intertwined with geopolitical and infrastructural vulnerabilities."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Detailed Technology Progression Analysis</h2>
          <p className="text-gray-600 mt-2">
            Explore the detailed progression and impact chains of each technological disruption
          </p>
        </div>
        <TechnologyDisruptionTimeline />
      </div>


      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Impact Network Analysis</h2>
          <p className="text-gray-600 mt-2">
            Explore the detailed progression and impact chains of each technological disruption
          </p>
        </div>
        <ImpactNetwork />
      </div>









    </div>
  );
};

export default TechDisruptionsAnalysis;



