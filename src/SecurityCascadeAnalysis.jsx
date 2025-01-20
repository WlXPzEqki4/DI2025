import React, { useState } from 'react';
import { 
  Cloud, 
  Wifi, 
  Rocket, 
  Shield, 
  Server, 
  Globe, 
  Building, 
  Zap,
  ChevronRight
} from 'lucide-react';

const SecurityCascadeAnalysis = () => {
  const [activeVulnerability, setActiveVulnerability] = useState(null);
  
  const vulnerabilities = {
    voltTyphoon: {
      id: 'voltTyphoon',
      icon: Wifi,
      title: 'Volt Typhoon Infiltration',
      type: 'CYBER OPERATION',
      description: 'State-sponsored cyber operations targeting critical infrastructure',
      primaryTargets: [
        'Industrial Control Systems',
        'Critical Infrastructure',
        'Communication Networks'
      ],
      cascadingEffects: [
        {
          domain: 'Infrastructure',
          impacts: [
            'Disruption of UAE-backed African projects',
            'Compromise of Gulf energy infrastructure',
            'Communication systems vulnerability'
          ]
        },
        {
          domain: 'Geopolitical',
          impacts: [
            'Escalation of regional tensions',
            'Strategic infrastructure exposure',
            'International relationship strain'
          ]
        }
      ]
    },
    cyberSkirmishes: {
      id: 'cyberSkirmishes',
      icon: Shield,
      title: 'Autonomous Cyber Skirmishes',
      type: 'EMERGING THREAT',
      description: 'AI-driven cyber conflicts affecting critical systems',
      primaryTargets: [
        'Energy Export Systems',
        'Trade Route Infrastructure',
        'Digital Control Systems'
      ],
      cascadingEffects: [
        {
          domain: 'Economic',
          impacts: [
            'Disruption of energy exports',
            'Trade route vulnerability',
            'Financial system exposure'
          ]
        },
        {
          domain: 'Security',
          impacts: [
            'Critical infrastructure compromise',
            'Supply chain disruption',
            'Digital system failures'
          ]
        }
      ]
    },
    spaceMilitarization: {
      id: 'spaceMilitarization',
      icon: Rocket,
      title: 'Space Militarization',
      type: 'STRATEGIC THREAT',
      description: 'Weaponization of space affecting satellite-based systems',
      primaryTargets: [
        'Satellite Communications',
        'Navigation Systems',
        'Surveillance Networks'
      ],
      cascadingEffects: [
        {
          domain: 'Communications',
          impacts: [
            'GPS system disruption',
            'Satellite communications failure',
            'Surveillance capability loss'
          ]
        },
        {
          domain: 'Strategic',
          impacts: [
            'Trade route navigation risks',
            'Military capability reduction',
            'Intelligence gathering disruption'
          ]
        }
      ]
    },
    digitalDependency: {
      id: 'digitalDependency',
      icon: Cloud,
      title: 'Digital Dependency Dilemma',
      type: 'SYSTEMIC RISK',
      description: 'Vulnerabilities in centralized cloud infrastructure',
      primaryTargets: [
        'Cloud Services',
        'Data Centers',
        'Digital Infrastructure'
      ],
      cascadingEffects: [
        {
          domain: 'Digital',
          impacts: [
            'Cloud service disruption',
            'Data sovereignty risks',
            'Service availability issues'
          ]
        },
        {
          domain: 'Operational',
          impacts: [
            'Business continuity threats',
            'Digital service failures',
            'Infrastructure dependency risks'
          ]
        }
      ]
    }
  };

  const VulnerabilityCard = ({ vulnerability }) => {
    const isActive = activeVulnerability === vulnerability.id;
    const Icon = vulnerability.icon;

    return (
      <div 
        className={`
          bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer
          ${isActive ? 'ring-2 ring-red-500' : 'hover:shadow-xl'}
        `}
        onClick={() => setActiveVulnerability(isActive ? null : vulnerability.id)}
      >
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className={`
              p-2 rounded-lg
              ${isActive ? 'bg-red-100' : 'bg-gray-100'}
            `}>
              <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500">{vulnerability.type}</span>
              <h3 className="font-bold text-lg">{vulnerability.title}</h3>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">{vulnerability.description}</p>
        </div>
        
        <div className={`
          overflow-hidden transition-all duration-300
          ${isActive ? 'max-h-[1000px]' : 'max-h-0'}
        `}>
          <div className="p-4 bg-gray-50 space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Primary Targets:</h4>
              <div className="grid grid-cols-1 gap-2">
                {vulnerability.primaryTargets.map((target, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <ChevronRight size={16} className="text-red-500" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {vulnerability.cascadingEffects.map((effect, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-sm text-gray-700 mb-2">
                    {effect.domain} Effects:
                  </h5>
                  <div className="space-y-2">
                    {effect.impacts.map((impact, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-sm">
                        <ChevronRight size={16} className="text-red-500" />
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Security & Infrastructure Vulnerabilities</h1>
        <h2 className="text-xl text-gray-600">Mapping Cascading Effects and Interconnected Risks</h2>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(vulnerabilities).map((vulnerability) => (
          <VulnerabilityCard key={vulnerability.id} vulnerability={vulnerability} />
        ))}
      </div>

      {/* <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The evolving nature of security threats highlights the interconnected risks faced by the UAE."
        </p>
      </div> */}
    </div>
  );
};

export default SecurityCascadeAnalysis;