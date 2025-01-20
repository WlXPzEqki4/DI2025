import React, { useState } from 'react';
import { Brain, Cpu, Zap, Network, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const TechnologyDisruptionTimeline = () => {
  const [expandedTech, setExpandedTech] = useState(null);
  const [expandedPhase, setExpandedPhase] = useState(null);

  const technologies = [
    {
      id: 'agi',
      icon: Brain,
      title: 'AGI Monopolization',
      description: 'Concentration of AGI capabilities among leading global powers',
      riskLevel: 'ALMOST CERTAIN',
      phases: [
        {
          stage: 'Early Development',
          impacts: [
            'Initial power concentration among tech leaders',
            'Growing technological dependency',
            'Early strategic advantages in AI development'
          ],
          sectors: ['Technology', 'Defense', 'Finance']
        },
        {
          stage: 'Market Dominance',
          impacts: [
            'Widening technological gap between nations',
            'Increased geopolitical leverage',
            'Pressure on UAE to develop domestic capabilities'
          ],
          sectors: ['Governance', 'Economy', 'Security']
        },
        {
          stage: 'Global Implications',
          impacts: [
            'Fundamental shifts in global power dynamics',
            'Emergence of AI-based economic blocs',
            'Critical need for sovereign AI development'
          ],
          sectors: ['International Relations', 'Strategic Planning', 'National Security']
        }
      ]
    },
    {
      id: 'quantum',
      icon: Cpu,
      title: 'Quantum Cryptography Breakthrough',
      description: 'Chinese advances in quantum computing threatening global cybersecurity',
      riskLevel: 'VERY HIGH',
      phases: [
        {
          stage: 'Initial Discovery',
          impacts: [
            'Early quantum decryption capabilities',
            'Growing concerns over data security',
            'Initial pressure for cryptographic upgrades'
          ],
          sectors: ['Cybersecurity', 'Defense', 'Communications']
        },
        {
          stage: 'Security Crisis',
          impacts: [
            'Widespread vulnerability of encrypted data',
            'Diplomatic communication risks',
            'Financial system exposure'
          ],
          sectors: ['Finance', 'Diplomacy', 'Infrastructure']
        },
        {
          stage: 'System Transformation',
          impacts: [
            'Global adoption of quantum-safe protocols',
            'Restructuring of security systems',
            'New cryptographic standards emergence'
          ],
          sectors: ['Global Standards', 'Technology Infrastructure', 'National Security']
        }
      ]
    },
    {
      id: 'advanced',
      icon: Zap,
      title: 'Ultra-Advanced Technologies',
      description: 'Zero-point energy and metamaterials reshaping global systems',
      riskLevel: 'MEDIUM',
      phases: [
        {
          stage: 'Breakthrough Phase',
          impacts: [
            'Initial disruption in energy sector',
            'Early metamaterial applications',
            'Research advantage creation'
          ],
          sectors: ['Energy', 'Research', 'Manufacturing']
        },
        {
          stage: 'Market Integration',
          impacts: [
            'Energy market destabilization',
            'Hydrocarbon value fluctuation',
            'New infrastructure requirements'
          ],
          sectors: ['Economy', 'Infrastructure', 'Trade']
        },
        {
          stage: 'Global Transformation',
          impacts: [
            'Complete energy paradigm shift',
            'Hydrocarbon market collapse',
            'New geopolitical power structures'
          ],
          sectors: ['Global Economy', 'International Relations', 'Energy Markets']
        }
      ]
    }
  ];

  const ImpactPhase = ({ phase, isExpanded, onClick }) => (
    <div 
      className={`
        bg-white rounded-lg shadow-md transition-all duration-300
        ${isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}
      `}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{phase.stage}</h4>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <div className="space-y-2">
              {phase.impacts.map((impact, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-1 text-blue-500" />
                  <span className="text-sm text-gray-700">{impact}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {phase.sectors.map((sector, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const TechnologyCard = ({ tech }) => {
    const Icon = tech.icon;
    const isExpanded = expandedTech === tech.id;

    return (
      <div className={`
        transition-all duration-500
        ${isExpanded ? 'col-span-3' : 'col-span-1'}
      `}>
        <div className={`
          bg-white rounded-xl shadow-lg p-6 cursor-pointer
          transition-all duration-300
          ${isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'}
        `}
        onClick={() => setExpandedTech(isExpanded ? null : tech.id)}
        >
          <div className="flex items-start gap-4">
            <div className={`
              p-3 rounded-full
              ${isExpanded ? 'bg-blue-100' : 'bg-gray-100'}
            `}>
              <Icon 
                size={24} 
                className={isExpanded ? 'text-blue-600' : 'text-gray-600'} 
              />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xl">{tech.title}</h3>
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${tech.riskLevel === 'ALMOST CERTAIN' ? 'bg-red-100 text-red-700' :
                    tech.riskLevel === 'VERY HIGH' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'}
                `}>
                  {tech.riskLevel}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{tech.description}</p>
            </div>
          </div>

          {isExpanded && (
            <div className="mt-6 animate-fadeIn">
              <h4 className="font-semibold text-lg mb-4">Technology Progression & Impacts</h4>
              <div className="grid grid-cols-3 gap-4">
                {tech.phases.map((phase, idx) => (
                  <ImpactPhase
                    key={idx}
                    phase={phase}
                    isExpanded={expandedPhase === `${tech.id}-${idx}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedPhase(
                        expandedPhase === `${tech.id}-${idx}` ? null : `${tech.id}-${idx}`
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Technological Disruption Timeline</h2>
        <p className="text-gray-600">
          Explore how emerging technologies reshape global power dynamics through their development phases
        </p>
      </div> */}

      <div className="grid grid-cols-3 gap-6">
        {technologies.map(tech => (
          <TechnologyCard key={tech.id} tech={tech} />
        ))}
      </div>

      {/* <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg text-center">
        <p className="text-sm">
          Click on any technology to explore its development phases and cascading impacts across different sectors
        </p>
      </div> */}
    </div>
  );
};

export default TechnologyDisruptionTimeline;