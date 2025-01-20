import React, { useState } from 'react';
import { Globe2, Cpu, Shield, TrendingDown } from 'lucide-react';

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

  const themes = [
    {
      icon: Globe2,
      title: "Power in Flux",
      warning: "HIGH",
      description: "Geopolitical wildcards reshaping the world, including Africa as battleground, BRICS rise, and potential Saudi-Iran alliance. Critical implications for UAE's strategic position.",
      details: [
        "Africa as Geopolitical Battleground",
        "BRICS Rise and Global Impact",
        "Saudi-Iran Alliance",
        "Multipolar Flashpoints",
        "Trump's Geopolitical Impact"
      ]
    },
    {
      icon: Cpu,
      title: "Technological Disruptions",
      warning: "VERY HIGH",
      description: "Breakthrough developments in AGI, quantum cryptography, and ultra-advanced technologies threatening to redefine global power dynamics.",
      details: [
        "AGI Control and State Power",
        "Quantum Cryptography Breakthroughs",
        "Ultra-Advanced Technology Impact"
      ]
    },
    {
      icon: Shield,
      title: "Security & Infrastructure",
      warning: "HIGH",
      description: "Critical vulnerabilities in cyber infrastructure, AI warfare capabilities, and space-based assets posing existential risks to UAE operations.",
      details: [
        "Volt Typhoon Cyber Threats",
        "AI War Machines",
        "Space Weaponization",
        "Digital Centralization Risks"
      ]
    },
    {
      icon: TrendingDown,
      title: "Economic Shocks",
      warning: "MEDIUM",
      description: "Financial system fragmentation and biotech breakthroughs threatening UAE's economic stability and strategic investments.",
      details: [
        "Financial System Fracturing",
        "Biotech Breakthroughs",
        "Environmental Disruptions"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">2025's Most Dangerous Ideas</h1>
        <h2 className="text-xl text-gray-600">Wildcard Scenarios for the UAE</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {themes.map((theme, index) => (
          <ThemeCard
            key={index}
            {...theme}
            isActive={activeTheme === index}
            onClick={() => setActiveTheme(activeTheme === index ? null : index)}
          />
        ))}
      </div>

      {activeTheme !== null && (
        <div className="bg-gray-50 p-6 rounded-lg animate-fade-in">
          <h3 className="font-bold mb-4">Key Elements:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {themes[activeTheme].details.map((detail, index) => (
              <li key={index} className="text-gray-700">{detail}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 p-4 bg-red-50 rounded-lg">
        <p className="text-red-800 font-semibold text-center">
          "The greatest risk is complacency."
        </p>
      </div>
    </div>
  );
};

export default RiskGrid;