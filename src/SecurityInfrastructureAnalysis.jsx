// import React, { useState } from 'react';
// import { Shield, Cpu, Rocket, Server } from 'lucide-react';

// const FaultLineCard = ({ title, riskLevel, description, threats, mitigations, icon: Icon, isExpanded, onClick }) => {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
//         ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
//       onClick={onClick}
//     >
//       <div className="p-4">
//         <div className="flex items-center gap-3 mb-3">
//           <Icon className={`w-6 h-6 ${isExpanded ? 'text-purple-600' : 'text-gray-600'}`} />
//           <h3 className="font-bold text-lg">{title}</h3>
//           <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
//             riskLevel === 'HIGH' ? 'bg-red-200 text-red-800' :
//             riskLevel === 'MEDIUM' ? 'bg-yellow-200 text-yellow-800' :
//             riskLevel === 'LOW' ? 'bg-green-200 text-green-800' :
//             'bg-gray-200 text-gray-800'
//           }`}>
//             {riskLevel}
//           </span>
//         </div>
        
//         <p className="text-gray-600 mb-3">{description}</p>
        
//         {isExpanded && (
//           <div className="animate-fade-in space-y-4">
//             <div>
//               <h4 className="font-semibold mb-2 text-purple-800">Critical Threats:</h4>
//               <ul className="space-y-2">
//                 {threats.map((threat, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2"></span>
//                     <span>{threat}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-2 text-purple-800">Required Mitigations:</h4>
//               <ul className="space-y-2">
//                 {mitigations.map((mitigation, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2"></span>
//                     <span>{mitigation}</span>
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

// const VulnerabilityMatrix = ({ activeFaultLine }) => {
//   const vulnerabilityData = {
//     voltTyphoon: [
//       { domain: "Energy Grid", vulnerability: "HIGH", impact: "Critical system disruption" },
//       { domain: "Transport Systems", vulnerability: "MEDIUM", impact: "Logistics interruption" },
//       { domain: "Financial Networks", vulnerability: "HIGH", impact: "Transaction security" },
//       { domain: "Communications", vulnerability: "MEDIUM", impact: "Data integrity" }
//     ],
//     aiWar: [
//       { domain: "Defense Systems", vulnerability: "HIGH", impact: "Autonomous conflicts" },
//       { domain: "Critical Infrastructure", vulnerability: "MEDIUM", impact: "Target identification" },
//       { domain: "Decision Systems", vulnerability: "HIGH", impact: "Response time" },
//       { domain: "Command Control", vulnerability: "MEDIUM", impact: "Authority chain" }
//     ],
//     space: [
//       { domain: "Satellite Communications", vulnerability: "HIGH", impact: "Signal disruption" },
//       { domain: "Navigation Systems", vulnerability: "HIGH", impact: "Positioning errors" },
//       { domain: "Surveillance", vulnerability: "MEDIUM", impact: "Coverage gaps" },
//       { domain: "Data Relay", vulnerability: "MEDIUM", impact: "Transmission delay" }
//     ],
//     digital: [
//       { domain: "Cloud Services", vulnerability: "HIGH", impact: "Service interruption" },
//       { domain: "Data Centers", vulnerability: "HIGH", impact: "Information security" },
//       { domain: "Network Infrastructure", vulnerability: "MEDIUM", impact: "Connection stability" },
//       { domain: "Digital Economy", vulnerability: "HIGH", impact: "Economic disruption" }
//     ]
//   };

//   return (
//     <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
//       activeFaultLine ? 'opacity-100' : 'opacity-0'
//     }`}>
//       {activeFaultLine && vulnerabilityData[activeFaultLine] && (
//         <div className="space-y-4">
//           <h3 className="font-bold text-lg mb-3">Vulnerability Assessment Matrix</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {vulnerabilityData[activeFaultLine].map((item, idx) => (
//               <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="font-semibold">{item.domain}</div>
//                   <div className={`px-2 py-1 rounded text-sm ${
//                     item.vulnerability === 'HIGH' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {item.vulnerability}
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-600">{item.impact}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SecurityInfrastructureAnalysis = () => {
//   const [activeFaultLine, setActiveFaultLine] = useState(null);
  
//   const faultLines = [
//     {
//       id: 'voltTyphoon',
//       icon: Shield,
//       title: "Volt Typhoon: The Invisible Saboteur",
//       riskLevel: "HIGH",
//       description: "Advanced persistent cyber threats targeting critical infrastructure with sophisticated infiltration techniques.",
//       threats: [
//         "Long-term persistence in critical systems",
//         "Sophisticated lateral movement capabilities",
//         "Strategic infrastructure targeting",
//         "State-sponsored cyber operations"
//       ],
//       mitigations: [
//         "Enhanced detection capabilities",
//         "Zero-trust architecture implementation",
//         "Critical system segmentation",
//         "Real-time threat monitoring"
//       ]
//     },
//     {
//       id: 'aiWar',
//       icon: Cpu,
//       title: "Rise of AI War Machines",
//       riskLevel: "LOW",
//       description: "Autonomous cyber warfare systems operating without human oversight pose escalation risks.",
//       threats: [
//         "Autonomous conflict escalation",
//         "Rapid-response cyber attacks",
//         "AI-driven target selection",
//         "System control loss"
//       ],
//       mitigations: [
//         "Human-in-the-loop safeguards",
//         "AI system containment",
//         "Response protocol development",
//         "International cooperation frameworks"
//       ]
//     },
//     {
//       id: 'space',
//       icon: Rocket,
//       title: "Weaponization of Space",
//       riskLevel: "VERY LOW",
//       description: "Increasing militarization of space assets threatens critical satellite-based systems.",
//       threats: [
//         "Satellite communication disruption",
//         "Navigation system interference",
//         "Space debris proliferation",
//         "Critical orbit denial"
//       ],
//       mitigations: [
//         "Redundant communication systems",
//         "Alternative navigation capabilities",
//         "Space situation awareness",
//         "International space cooperation"
//       ]
//     },
//     {
//       id: 'digital',
//       icon: Server,
//       title: "Digital Centralization Risks",
//       riskLevel: "HIGH",
//       description: "Vulnerabilities in centralized cloud ecosystems threaten UAE's digital infrastructure.",
//       threats: [
//         "Single point of failure risks",
//         "Data sovereignty challenges",
//         "Service provider dependencies",
//         "Cascading system failures"
//       ],
//       mitigations: [
//         "Multi-cloud strategy implementation",
//         "Sovereign cloud development",
//         "Service redundancy",
//         "Data localization policies"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">Fault Lines of Security and Infrastructure</h1>
//         <h2 className="text-xl text-gray-600">Critical Vulnerabilities and Mitigation Strategies</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {faultLines.map((faultLine) => (
//           <FaultLineCard
//             key={faultLine.id}
//             {...faultLine}
//             isExpanded={activeFaultLine === faultLine.id}
//             onClick={() => setActiveFaultLine(
//               activeFaultLine === faultLine.id ? null : faultLine.id
//             )}
//           />
//         ))}
//       </div>

//       <VulnerabilityMatrix activeFaultLine={activeFaultLine} />

//       <div className="mt-8 p-4 bg-purple-900 text-white rounded-lg">
//         <p className="text-center font-semibold">
//           "The evolving nature of security threats highlights the interconnected risks faced by the UAE's critical infrastructure."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SecurityInfrastructureAnalysis;

















import React, { useState } from 'react';
import { Shield, Cpu, Rocket, Server } from 'lucide-react';
import SecurityCascadeAnalysis from './SecurityCascadeAnalysis';
import InfrastructureVulnerabilityWeb from './InfrastructureVulnerabilityWeb';
import WildcardAnalysis_3 from './WildcardAnalysis_3';



const FaultLineCard = ({ title, riskLevel, description, threats, mitigations, icon: Icon, isExpanded, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
        ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Icon className={`w-6 h-6 ${isExpanded ? 'text-purple-600' : 'text-gray-600'}`} />
          <h3 className="font-bold text-lg">{title}</h3>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
            riskLevel === 'HIGH' ? 'bg-red-200 text-red-800' :
            riskLevel === 'MEDIUM' ? 'bg-yellow-200 text-yellow-800' :
            riskLevel === 'LOW' ? 'bg-green-200 text-green-800' :
            'bg-gray-200 text-gray-800'
          }`}>
            {riskLevel}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{description}</p>
        
        {isExpanded && (
          <div className="animate-fade-in space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-purple-800">Critical Threats:</h4>
              <ul className="space-y-2">
                {threats.map((threat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-purple-800">Required Mitigations:</h4>
              <ul className="space-y-2">
                {mitigations.map((mitigation, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2"></span>
                    <span>{mitigation}</span>
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

const VulnerabilityMatrix = ({ activeFaultLine }) => {
  const vulnerabilityData = {
    voltTyphoon: [
      { domain: "Energy Grid", vulnerability: "HIGH", impact: "Critical system disruption" },
      { domain: "Transport Systems", vulnerability: "MEDIUM", impact: "Logistics interruption" },
      { domain: "Financial Networks", vulnerability: "HIGH", impact: "Transaction security" },
      { domain: "Communications", vulnerability: "MEDIUM", impact: "Data integrity" }
    ],
    aiWar: [
      { domain: "Defense Systems", vulnerability: "HIGH", impact: "Autonomous conflicts" },
      { domain: "Critical Infrastructure", vulnerability: "MEDIUM", impact: "Target identification" },
      { domain: "Decision Systems", vulnerability: "HIGH", impact: "Response time" },
      { domain: "Command Control", vulnerability: "MEDIUM", impact: "Authority chain" }
    ],
    space: [
      { domain: "Satellite Communications", vulnerability: "HIGH", impact: "Signal disruption" },
      { domain: "Navigation Systems", vulnerability: "HIGH", impact: "Positioning errors" },
      { domain: "Surveillance", vulnerability: "MEDIUM", impact: "Coverage gaps" },
      { domain: "Data Relay", vulnerability: "MEDIUM", impact: "Transmission delay" }
    ],
    digital: [
      { domain: "Cloud Services", vulnerability: "HIGH", impact: "Service interruption" },
      { domain: "Data Centers", vulnerability: "HIGH", impact: "Information security" },
      { domain: "Network Infrastructure", vulnerability: "MEDIUM", impact: "Connection stability" },
      { domain: "Digital Economy", vulnerability: "HIGH", impact: "Economic disruption" }
    ]
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
      activeFaultLine ? 'opacity-100' : 'opacity-0'
    }`}>
      {activeFaultLine && vulnerabilityData[activeFaultLine] && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-3">Vulnerability Assessment Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vulnerabilityData[activeFaultLine].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">{item.domain}</div>
                  <div className={`px-2 py-1 rounded text-sm ${
                    item.vulnerability === 'HIGH' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.vulnerability}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{item.impact}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SecurityInfrastructureAnalysis = () => {
  const [activeFaultLine, setActiveFaultLine] = useState(null);
  
  const faultLines = [
    {
      id: 'voltTyphoon',
      icon: Shield,
      title: "Volt Typhoon: The Invisible Saboteur",
      riskLevel: "HIGH",
      description: "Advanced persistent cyber threats targeting critical infrastructure with sophisticated infiltration techniques.",
      threats: [
        "Long-term persistence in critical systems",
        "Sophisticated lateral movement capabilities",
        "Strategic infrastructure targeting",
        "State-sponsored cyber operations"
      ],
      mitigations: [
        "Enhanced detection capabilities",
        "Zero-trust architecture implementation",
        "Critical system segmentation",
        "Real-time threat monitoring"
      ]
    },
    {
      id: 'aiWar',
      icon: Cpu,
      title: "Rise of AI War Machines",
      riskLevel: "LOW",
      description: "Autonomous cyber warfare systems operating without human oversight pose escalation risks.",
      threats: [
        "Autonomous conflict escalation",
        "Rapid-response cyber attacks",
        "AI-driven target selection",
        "System control loss"
      ],
      mitigations: [
        "Human-in-the-loop safeguards",
        "AI system containment",
        "Response protocol development",
        "International cooperation frameworks"
      ]
    },
    {
      id: 'space',
      icon: Rocket,
      title: "Weaponization of Space",
      riskLevel: "VERY LOW",
      description: "Increasing militarization of space assets threatens critical satellite-based systems.",
      threats: [
        "Satellite communication disruption",
        "Navigation system interference",
        "Space debris proliferation",
        "Critical orbit denial"
      ],
      mitigations: [
        "Redundant communication systems",
        "Alternative navigation capabilities",
        "Space situation awareness",
        "International space cooperation"
      ]
    },
    {
      id: 'digital',
      icon: Server,
      title: "Digital Centralization Risks",
      riskLevel: "HIGH",
      description: "Vulnerabilities in centralized cloud ecosystems threaten UAE's digital infrastructure.",
      threats: [
        "Single point of failure risks",
        "Data sovereignty challenges",
        "Service provider dependencies",
        "Cascading system failures"
      ],
      mitigations: [
        "Multi-cloud strategy implementation",
        "Sovereign cloud development",
        "Service redundancy",
        "Data localization policies"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Fault Lines of Security and Infrastructure</h1>
        <h2 className="text-xl text-gray-600">Critical Vulnerabilities and Mitigation Strategies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faultLines.map((faultLine) => (
          <FaultLineCard
            key={faultLine.id}
            {...faultLine}
            isExpanded={activeFaultLine === faultLine.id}
            onClick={() => setActiveFaultLine(
              activeFaultLine === faultLine.id ? null : faultLine.id
            )}
          />
        ))}
      </div>

      <VulnerabilityMatrix activeFaultLine={activeFaultLine} />

      <div className="mt-8 p-4 bg-purple-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The evolving nature of security threats highlights the interconnected risks faced by the UAE's critical infrastructure."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Security Cascade Analysis</h2>
          <p className="text-gray-600 mt-2">
            Explore how security threats cascade through different infrastructure systems
          </p>
        </div>
        <SecurityCascadeAnalysis />
      </div>


      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Infrastructure Vulnerability Web</h2>
          <p className="text-gray-600 mt-2">
          Mapping Attack Vectors and System Dependencies
          </p>
        </div>
        <InfrastructureVulnerabilityWeb />
      </div>

      
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Risk Scenarios</h2>
                {/* <p className="text-gray-600 mt-2">
                Explore how geopolitical events trigger cascading effects across multiple domains
                </p> */}
              </div>
              <WildcardAnalysis_3 />
            </div>



    </div>
  );
};

export default SecurityInfrastructureAnalysis;









