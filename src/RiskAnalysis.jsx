import React, { useState } from 'react';
import { Globe2, Shield, Cpu, BrainCircuit, Bomb } from 'lucide-react';

const RiskAnalysis = () => {
  const [activeScenario, setActiveScenario] = useState(null);
  
  const scenarios = [
    {
      id: 'africa',
      icon: Globe2,
      title: "UAE's Africa Strategy",
      primaryRisk: "Geopolitical Expansion",
      description: "UAE's strategic expansion into Africa faces complex geopolitical and technological challenges.",
      cascadingEffects: [
        {
          title: "Technological Vulnerability",
          description: "Exposure to Volt Typhoon-style cyber operations",
          impactLevel: "Primary",
          connectedRisks: ["Infrastructure disruption", "Data security compromise"]
        },
        {
          title: "Regional Competition",
          description: "Rival powers contesting influence",
          impactLevel: "Secondary",
          connectedRisks: ["Resource allocation strain", "Diplomatic pressure"]
        }
      ]
    },
    {
      id: 'brics',
      icon: Shield,
      title: "BRICS Evolution",
      primaryRisk: "Financial System Change",
      description: "Rising BRICS influence necessitates quantum-safe security measures.",
      cascadingEffects: [
        {
          title: "Cryptographic Security",
          description: "Need for post-quantum cryptography investment",
          impactLevel: "Primary",
          connectedRisks: ["Financial system vulnerability", "Communication security"]
        },
        {
          title: "Alliance Dynamics",
          description: "Shifting global partnerships",
          impactLevel: "Secondary",
          connectedRisks: ["Trade relationship changes", "Strategic realignment"]
        }
      ]
    },
    {
      id: 'cyber',
      icon: Cpu,
      title: "Digital Battlefield",
      primaryRisk: "Autonomous Cyber Conflict",
      description: "Autonomous cyber skirmishes threaten critical infrastructure.",
      cascadingEffects: [
        {
          title: "Infrastructure Impact",
          description: "Critical systems vulnerability",
          impactLevel: "Primary",
          connectedRisks: ["Service disruption", "Economic impact"]
        },
        {
          title: "Response Capability",
          description: "Need for advanced defensive systems",
          impactLevel: "Secondary",
          connectedRisks: ["Resource allocation", "Technical capability gap"]
        }
      ]
    }
  ];

  const CascadingEffect = ({ effect }) => (
    <div className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg">
      <h4 className="font-semibold text-lg mb-2">{effect.title}</h4>
      <p className="text-gray-600 mb-3">{effect.description}</p>
      <div className="space-y-2">
        {effect.connectedRisks.map((risk, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              effect.impactLevel === 'Primary' ? 'bg-red-500' : 'bg-orange-400'
            }`} />
            <span className="text-sm text-gray-700">{risk}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ScenarioCard = ({ scenario }) => {
    const isActive = activeScenario === scenario.id;
    const Icon = scenario.icon;

    return (
      <div 
        className={`
          transition-all duration-500 ease-in-out
          ${isActive ? 'col-span-2' : 'col-span-1'}
        `}
      >
        <div 
          className={`
            bg-white rounded-xl p-6 shadow-lg cursor-pointer
            transition-all duration-300
            ${isActive ? 'ring-2 ring-red-500' : 'hover:shadow-xl'}
          `}
          onClick={() => setActiveScenario(isActive ? null : scenario.id)}
        >
          <div className="flex items-start gap-4">
            <div className={`
              p-3 rounded-full
              ${isActive ? 'bg-red-100' : 'bg-gray-100'}
            `}>
              <Icon 
                size={24} 
                className={isActive ? 'text-red-500' : 'text-gray-600'} 
              />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">{scenario.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{scenario.primaryRisk}</p>
              <p className="text-gray-700">{scenario.description}</p>
            </div>
          </div>

          {isActive && (
            <div className="mt-6 space-y-4 animate-fadeIn">
              <h4 className="font-semibold text-lg border-b pb-2">Cascading Effects</h4>
              <div className="grid grid-cols-2 gap-4">
                {scenario.cascadingEffects.map((effect, idx) => (
                  <CascadingEffect key={idx} effect={effect} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      {/* <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Cascading Risk Analysis</h2>
        <p className="text-gray-600">
          Explore how geopolitical events trigger cascading effects across multiple domains
        </p>
      </div> */}

      <div className="grid grid-cols-2 gap-6">
        {scenarios.map(scenario => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>

      {/* <div className="mt-8 bg-gray-800 text-white p-4 rounded-lg">
        <p className="text-center text-sm">
          Click on any scenario to explore its interconnected risks and cascading effects
        </p>
      </div> */}
    </div>
  );
};

export default RiskAnalysis;