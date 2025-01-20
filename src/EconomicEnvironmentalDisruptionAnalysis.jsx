import React, { useState } from 'react';
import { 
  CircleDollarSign, 
  Sprout, 
  ArrowRightCircle, 
  Globe, 
  Building, 
  ShieldAlert,
  AlertCircle,
  TreePine
} from 'lucide-react';

const EconomicEnvironmentalDisruptionAnalysis = () => {
  const [activeDisruption, setActiveDisruption] = useState(null);
  const [activeImpact, setActiveImpact] = useState(null);

  const disruptions = {
    financial: {
      id: 'financial',
      icon: CircleDollarSign,
      title: 'Financial System Fragmentation',
      description: 'BRICS-led financial realignments affecting global currency dynamics',
      type: 'ECONOMIC',
      severity: 'HIGH',
      triggers: [
        'Non-dollar oil trade expansion',
        'BRICS payment system development',
        'Alternative reserve currency adoption'
      ],
      impacts: {
        immediate: [
          'Currency reserve volatility',
          'Trade settlement disruption',
          'Financial system fragmentation'
        ],
        cascading: [
          'Regional trade realignment',
          'Payment system bifurcation',
          'Investment flow changes'
        ]
      },
      mitigations: [
        'Currency reserve diversification',
        'Multi-currency trade framework',
        'Strategic economic partnerships'
      ]
    },
    biotech: {
      id: 'biotech',
      icon: Sprout,
      title: 'Biotech & Genetic Disruptions',
      description: 'Unregulated breakthroughs affecting agricultural and ecological stability',
      type: 'ENVIRONMENTAL',
      severity: 'CRITICAL',
      triggers: [
        'Unregulated genetic research',
        'Novel bioengineering techniques',
        'Agricultural biotechnology advances'
      ],
      impacts: {
        immediate: [
          'Agricultural system vulnerability',
          'Ecosystem stability risks',
          'Food security threats'
        ],
        cascading: [
          'Supply chain disruption',
          'Economic stability impact',
          'Regional security concerns'
        ]
      },
      mitigations: [
        'Biosecurity framework development',
        'Agricultural resilience programs',
        'International cooperation mechanisms'
      ]
    }
  };

  const SystemCard = ({ system, isActive, onClick }) => {
    const Icon = system.icon;
    
    return (
      <div 
        className={`
          bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer
          ${isActive ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'}
        `}
        onClick={onClick}
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className={`
              p-3 rounded-lg
              ${isActive ? 'bg-blue-100' : 'bg-gray-100'}
            `}>
              <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg">{system.title}</h3>
                <span className={`
                  px-2 py-1 rounded-full text-xs
                  ${system.type === 'ECONOMIC' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}
                `}>
                  {system.type}
                </span>
              </div>
              <p className="text-sm text-gray-600">{system.description}</p>
              
              {isActive && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Trigger Events:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {system.triggers.map((trigger, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <AlertCircle size={16} className="text-amber-500" />
                          <span>{trigger}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ImpactChain = ({ disruption }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="font-bold text-lg mb-4">Cascading Impact Analysis</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-blue-800">Immediate Effects</h4>
            {disruption.impacts.immediate.map((impact, idx) => (
              <div 
                key={idx}
                className="bg-blue-50 p-3 rounded-lg flex items-start gap-2"
              >
                <ShieldAlert size={16} className="text-blue-500 mt-1" />
                <span className="text-sm">{impact}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-red-800">Cascading Effects</h4>
            {disruption.impacts.cascading.map((impact, idx) => (
              <div 
                key={idx}
                className="bg-red-50 p-3 rounded-lg flex items-start gap-2"
              >
                <AlertCircle size={16} className="text-red-500 mt-1" />
                <span className="text-sm">{impact}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-green-800">Mitigation Strategies</h4>
            {disruption.mitigations.map((mitigation, idx) => (
              <div 
                key={idx}
                className="bg-green-50 p-3 rounded-lg flex items-start gap-2"
              >
                <TreePine size={16} className="text-green-500 mt-1" />
                <span className="text-sm">{mitigation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Economic & Environmental Disruption Analysis</h1>
        <h2 className="text-xl text-gray-600">
          Mapping Interconnected Financial and Ecological Risks
        </h2>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.values(disruptions).map((disruption) => (
          <SystemCard
            key={disruption.id}
            system={disruption}
            isActive={activeDisruption === disruption.id}
            onClick={() => setActiveDisruption(
              activeDisruption === disruption.id ? null : disruption.id
            )}
          />
        ))}
      </div>

      {activeDisruption && (
        <div className="animate-fadeIn">
          <ImpactChain disruption={disruptions[activeDisruption]} />
        </div>
      )}

      {/* <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The UAE's economic resilience depends on its ability to navigate the interconnected risks of financial fragmentation and biotech disruptions."
        </p>
      </div> */}
    </div>
  );
};

export default EconomicEnvironmentalDisruptionAnalysis;