// import React, { useState } from 'react';
// import { Globe2, TrendingUp, Anchor, AlertCircle, Wind } from 'lucide-react';

// const WildcardCard = ({ title, riskLevel, description, impacts, isExpanded, onClick }) => {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
//         ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
//       onClick={onClick}
//     >
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="font-bold text-lg">{title}</h3>
//           <span className={`px-3 py-1 rounded-full text-sm ${
//             riskLevel === 'MEDIUM' ? 'bg-yellow-200' :
//             riskLevel === 'HIGH' ? 'bg-orange-200' :
//             riskLevel === 'LOW' ? 'bg-green-200' :
//             'bg-red-200'
//           }`}>
//             {riskLevel}
//           </span>
//         </div>
        
//         <p className="text-gray-600 mb-3">{description}</p>
        
//         {isExpanded && (
//           <div className="animate-fade-in">
//             <h4 className="font-semibold mb-2">Potential Impacts:</h4>
//             <ul className="space-y-2">
//               {impacts.map((impact, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2"></span>
//                   <span>{impact}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ConnectedImpacts = ({ activeScenario }) => {
//   const impacts = {
//     africa: [
//       "Infrastructure vulnerability to cyber sabotage",
//       "Proxy conflict risks in investment zones",
//       "Competition with China and Russia",
//       "Digital security challenges"
//     ],
//     brics: [
//       "Need for quantum-safe cryptography",
//       "Financial system adaptations",
//       "Trade route reconfigurations",
//       "Strategic alliance shifts"
//     ],
//     gulf: [
//       "Port and energy infrastructure exposure",
//       "Trade route vulnerabilities",
//       "Regional power dynamics shift",
//       "Economic partnership realignment"
//     ],
//     flashpoints: [
//       "Multiple crisis management strain",
//       "Critical trade route disruption",
//       "Infrastructure vulnerability",
//       "Strategic resource allocation"
//     ],
//     trump: [
//       "Economic nationalism impact",
//       "BRICS financial framework intersection",
//       "Trade policy disruption",
//       "Strategic partnership strain"
//     ]
//   };

//   return (
//     <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
//       activeScenario ? 'opacity-100' : 'opacity-0'
//     }`}>
//       {activeScenario && impacts[activeScenario] && (
//         <div className="space-y-3">
//           <h3 className="font-bold text-lg mb-3">Cascading Effects</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {impacts[activeScenario].map((impact, idx) => (
//               <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
//                 <div className="h-2 w-2 bg-red-500 rounded-full"></div>
//                 <span>{impact}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const PowerFluxAnalysis = () => {
//   const [activeScenario, setActiveScenario] = useState(null);
  
//   const scenarios = [
//     {
//       id: 'africa',
//       icon: Globe2,
//       title: "Africa: Geopolitical Battleground",
//       riskLevel: "MEDIUM",
//       description: "UAE's strategic expansion into Africa faces complex challenges from rival powers and technological threats.",
//       impacts: [
//         "Risk of coordinated cyber sabotage from state actors",
//         "Potential disruption of UAE-backed infrastructure projects",
//         "Competition with China and Russia for influence",
//         "Vulnerability to proxy conflicts and regional instability"
//       ]
//     },
//     {
//       id: 'brics',
//       icon: TrendingUp,
//       title: "BRICS: Unstoppable Rise",
//       riskLevel: "HIGH",
//       description: "Growing BRICS influence challenges traditional financial and diplomatic frameworks.",
//       impacts: [
//         "Pressure on UAE to adapt to new financial systems",
//         "Need for enhanced quantum-safe communications",
//         "Shifting trade route priorities",
//         "Strategic realignment considerations"
//       ]
//     },
//     {
//       id: 'gulf',
//       icon: Anchor,
//       title: "Saudi-Iran Alliance",
//       riskLevel: "LOW",
//       description: "Potential regional realignment through Saudi-Iran rapprochement affects UAE's strategic position.",
//       impacts: [
//         "Changes to regional trade dynamics",
//         "Impact on energy infrastructure relevance",
//         "Shift in port strategic importance",
//         "New security arrangement considerations"
//       ]
//     },
//     {
//       id: 'flashpoints',
//       icon: AlertCircle,
//       title: "Multipolar Flashpoints",
//       riskLevel: "ALMOST CERTAIN",
//       description: "Simultaneous crisis points threaten global stability and UAE's strategic interests.",
//       impacts: [
//         "Risk of simultaneous regional conflicts",
//         "Strain on global crisis management",
//         "Threat to critical trade routes",
//         "Impact on strategic resource allocation"
//       ]
//     },
//     {
//       id: 'trump',
//       icon: Wind,
//       title: "Trump's Geopolitical Impact",
//       riskLevel: "HIGH",
//       description: "Potential return introduces economic nationalism and policy uncertainty.",
//       impacts: [
//         "Intersection with BRICS financial frameworks",
//         "Trade policy disruption risks",
//         "Need for economic strategy diversification",
//         "Impact on international partnerships"
//       ]
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">Power in Flux</h1>
//         <h2 className="text-xl text-gray-600">Geopolitical Wildcards Reshaping the World</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {scenarios.map((scenario) => (
//           <WildcardCard
//             key={scenario.id}
//             {...scenario}
//             isExpanded={activeScenario === scenario.id}
//             onClick={() => setActiveScenario(
//               activeScenario === scenario.id ? null : scenario.id
//             )}
//           />
//         ))}
//       </div>

//       <ConnectedImpacts activeScenario={activeScenario} />

//       <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
//         <p className="text-center font-semibold">
//           "The convergence of geopolitical wildcard scenarios underscores the intricate interdependencies across global dynamics."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PowerFluxAnalysis;




















import React, { useState } from 'react';
import { Globe2, TrendingUp, Anchor, AlertCircle, Wind } from 'lucide-react';
import RiskInterconnections from './RiskInterconnections';
import RiskAnalysis from './RiskAnalysis';
import WildcardAnalysis_1 from './WildcardAnalysis_1';

const WildcardCard = ({ title, riskLevel, description, impacts, isExpanded, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg transition-all duration-500 cursor-pointer
        ${isExpanded ? 'md:col-span-2 scale-100' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            riskLevel === 'MEDIUM' ? 'bg-yellow-200' :
            riskLevel === 'HIGH' ? 'bg-orange-200' :
            riskLevel === 'LOW' ? 'bg-green-200' :
            'bg-red-200'
          }`}>
            {riskLevel}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{description}</p>
        
        {isExpanded && (
          <div className="animate-fade-in">
            <h4 className="font-semibold mb-2">Potential Impacts:</h4>
            <ul className="space-y-2">
              {impacts.map((impact, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2"></span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ConnectedImpacts = ({ activeScenario }) => {
  const impacts = {
    africa: [
      "Infrastructure vulnerability to cyber sabotage",
      "Proxy conflict risks in investment zones",
      "Competition with China and Russia",
      "Digital security challenges"
    ],
    brics: [
      "Need for quantum-safe cryptography",
      "Financial system adaptations",
      "Trade route reconfigurations",
      "Strategic alliance shifts"
    ],
    gulf: [
      "Port and energy infrastructure exposure",
      "Trade route vulnerabilities",
      "Regional power dynamics shift",
      "Economic partnership realignment"
    ],
    flashpoints: [
      "Multiple crisis management strain",
      "Critical trade route disruption",
      "Infrastructure vulnerability",
      "Strategic resource allocation"
    ],
    trump: [
      "Economic nationalism impact",
      "BRICS financial framework intersection",
      "Trade policy disruption",
      "Strategic partnership strain"
    ]
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-lg mt-4 transition-all duration-500 ${
      activeScenario ? 'opacity-100' : 'opacity-0'
    }`}>
      {activeScenario && impacts[activeScenario] && (
        <div className="space-y-3">
          <h3 className="font-bold text-lg mb-3">Cascading Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impacts[activeScenario].map((impact, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PowerFluxAnalysis = () => {
  const [activeScenario, setActiveScenario] = useState(null);
  
  const scenarios = [
    {
      id: 'africa',
      icon: Globe2,
      title: "Africa: Geopolitical Battleground",
      riskLevel: "MEDIUM",
      description: "UAE's strategic expansion into Africa faces complex challenges from rival powers and technological threats.",
      impacts: [
        "Risk of coordinated cyber sabotage from state actors",
        "Potential disruption of UAE-backed infrastructure projects",
        "Competition with China and Russia for influence",
        "Vulnerability to proxy conflicts and regional instability"
      ]
    },
    {
      id: 'brics',
      icon: TrendingUp,
      title: "BRICS: Unstoppable Rise",
      riskLevel: "HIGH",
      description: "Growing BRICS influence challenges traditional financial and diplomatic frameworks.",
      impacts: [
        "Pressure on UAE to adapt to new financial systems",
        "Need for enhanced quantum-safe communications",
        "Shifting trade route priorities",
        "Strategic realignment considerations"
      ]
    },
    {
      id: 'gulf',
      icon: Anchor,
      title: "Saudi-Iran Alliance",
      riskLevel: "LOW",
      description: "Potential regional realignment through Saudi-Iran rapprochement affects UAE's strategic position.",
      impacts: [
        "Changes to regional trade dynamics",
        "Impact on energy infrastructure relevance",
        "Shift in port strategic importance",
        "New security arrangement considerations"
      ]
    },
    {
      id: 'flashpoints',
      icon: AlertCircle,
      title: "Multipolar Flashpoints",
      riskLevel: "ALMOST CERTAIN",
      description: "Simultaneous crisis points threaten global stability and UAE's strategic interests.",
      impacts: [
        "Risk of simultaneous regional conflicts",
        "Strain on global crisis management",
        "Threat to critical trade routes",
        "Impact on strategic resource allocation"
      ]
    },
    {
      id: 'trump',
      icon: Wind,
      title: "Trump's Geopolitical Impact",
      riskLevel: "HIGH",
      description: "Potential return introduces economic nationalism and policy uncertainty.",
      impacts: [
        "Intersection with BRICS financial frameworks",
        "Trade policy disruption risks",
        "Need for economic strategy diversification",
        "Impact on international partnerships"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Power in Flux</h1>
        <h2 className="text-xl text-gray-600">Geopolitical Wildcards Reshaping the World</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <WildcardCard
            key={scenario.id}
            {...scenario}
            isExpanded={activeScenario === scenario.id}
            onClick={() => setActiveScenario(
              activeScenario === scenario.id ? null : scenario.id
            )}
          />
        ))}
      </div>

      <ConnectedImpacts activeScenario={activeScenario} />

      <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The convergence of geopolitical wildcard scenarios underscores the intricate interdependencies across global dynamics."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Risk Interconnection Analysis</h2>
          <p className="text-gray-600 mt-2">
            Explore how different risk factors connect and influence each other across domains
          </p>
        </div>
        <RiskInterconnections />
      </div>



      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Cascading Risk Analysis</h2>
          <p className="text-gray-600 mt-2">
          Explore how geopolitical events trigger cascading effects across multiple domains
          </p>
        </div>
        <RiskAnalysis />
      </div>


      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Risk Scenarios</h2>
          {/* <p className="text-gray-600 mt-2">
          Explore how geopolitical events trigger cascading effects across multiple domains
          </p> */}
        </div>
        <WildcardAnalysis_1 />
      </div>

    </div>
  );
};

export default PowerFluxAnalysis;












