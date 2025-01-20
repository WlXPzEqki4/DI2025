import React, { useState } from 'react';
import { 
  CircleDollarSign, 
  Sprout, 
  ShieldAlert,
  Globe,
  Network,
  Clock,
  ArrowRight,
  AlertTriangle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const SystemResilienceAnalysis = () => {
  const [expandedSystem, setExpandedSystem] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const systemAnalysis = {
    financial: {
      title: 'Financial System Vulnerabilities',
      description: 'BRICS-led financial realignments affecting global currency dynamics',
      icon: CircleDollarSign,
      sections: {
        references: {
          title: 'Key References',
          type: 'critical',
          items: [
            'Links to BRICS alternative financial system (1.2)',
            'Saudi-Iran alliance implications (1.3)',
            'Trade route vulnerabilities',
            'Currency market dependencies'
          ]
        },
        systems: {
          title: 'Affected Systems',
          type: 'warning',
          items: [
            'Global trade networks',
            'Energy export infrastructure',
            'Regional banking systems',
            'Currency markets'
          ]
        },
        actions: {
          title: 'Required Actions',
          type: 'action',
          items: [
            'Currency reserve diversification',
            'Multi-system engagement',
            'Alternative payment frameworks',
            'Strategic partnership development'
          ]
        }
      }
    },
    environmental: {
      title: 'Environmental & Biotech Vulnerabilities',
      description: 'Unregulated breakthroughs affecting agricultural and ecological stability',
      icon: Sprout,
      sections: {
        references: {
          title: 'Key References',
          type: 'critical',
          items: [
            'Agricultural investment risks (1.1)',
            'Technological disruption effects (2.3)',
            'Cross-border implications',
            'Regional stability concerns'
          ]
        },
        systems: {
          title: 'Affected Systems',
          type: 'warning',
          items: [
            'Agricultural infrastructure',
            'Food security networks',
            'Regional ecosystems',
            'Trade relationships'
          ]
        },
        actions: {
          title: 'Required Actions',
          type: 'action',
          items: [
            'Biosecurity framework development',
            'Agricultural resilience programs',
            'Regulatory system enhancement',
            'International coordination'
          ]
        }
      }
    }
  };

  const DetailSection = ({ title, items, type }) => {
    const getIcon = () => {
      switch (type) {
        case 'critical':
          return <Network className="w-5 h-5 text-red-500" />;
        case 'warning':
          return <AlertTriangle className="w-5 h-5 text-amber-500" />;
        case 'action':
          return <ArrowRight className="w-5 h-5 text-green-500" />;
        default:
          return null;
      }
    };

    const getBgColor = () => {
      switch (type) {
        case 'critical':
          return 'bg-red-50';
        case 'warning':
          return 'bg-amber-50';
        case 'action':
          return 'bg-green-50';
        default:
          return 'bg-gray-50';
      }
    };

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-2 ${getBgColor()} p-3 rounded-lg`}
            >
              {getIcon()}
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SystemCard = ({ id, system }) => {
    const Icon = system.icon;
    const isExpanded = expandedSystem === id;
    
    return (
      <div className={`
        bg-white rounded-lg shadow-lg transition-all duration-300
        ${isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'}
      `}>
        <div 
          className="p-6 cursor-pointer"
          onClick={() => setExpandedSystem(isExpanded ? null : id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`
                p-3 rounded-lg
                ${isExpanded ? 'bg-blue-100' : 'bg-gray-100'}
              `}>
                <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{system.title}</h3>
                <p className="text-sm text-gray-600">{system.description}</p>
              </div>
            </div>
            {isExpanded ? 
              <ChevronDown className="w-5 h-5 text-gray-400" /> : 
              <ChevronRight className="w-5 h-5 text-gray-400" />
            }
          </div>
        </div>

        {isExpanded && (
          <div className="px-6 pb-6 space-y-6 animate-fadeIn">
            {Object.entries(system.sections).map(([sectionId, section]) => (
              <div 
                key={sectionId}
                className="border-t pt-4"
              >
                <DetailSection
                  title={section.title}
                  items={section.items}
                  type={section.type}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">System Vulnerability Analysis</h1>
        <h2 className="text-xl text-gray-600">
          Mapping Financial and Environmental System Risks
        </h2>
      </div> */}

      <div className="space-y-6">
        {Object.entries(systemAnalysis).map(([id, system]) => (
          <SystemCard
            key={id}
            id={id}
            system={system}
          />
        ))}
      </div>

      {/* <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The interconnected nature of these risks requires a comprehensive and proactive response strategy."
        </p>
      </div> */}
    </div>
  );
};

export default SystemResilienceAnalysis;