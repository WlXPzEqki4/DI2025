import React, { useState, useEffect } from 'react';
import TimelinePathways from './TimelinePathways';

import { 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Layout, 
  Router,
  ChevronDown,
  ChevronUp,
  FileBarChart,
  Book,
  Target,
  AlertOctagon
} from 'lucide-react';

const CollapsibleSection = ({ 
  icon, 
  title, 
  children, 
  defaultOpen = false, 
  className = "", 
  warning = null,
  onToggle = null  // Added callback for animation triggers
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };
  
  return (
    <div className={`border rounded-lg bg-white shadow-sm ${className}`}>
      <div 
        className="flex items-center gap-2 cursor-pointer p-4"
        onClick={handleToggle}
      >
        {icon}
        <h2 className="font-semibold text-gray-800 flex-grow">{title}</h2>


        {/* {warning && (
          <div className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
            {warning}
          </div>
        )} */}

{warning && (
  <span className={`px-3 py-1 rounded-full text-sm ${
    warning === 'MEDIUM' ? 'bg-yellow-200' :
    warning === 'HIGH' ? 'bg-orange-200' :
    warning === 'LOW' ? 'bg-green-200' :
    warning === 'VERY LOW' ? 'bg-blue-200' :
    warning === 'VERY HIGH' ? 'bg-orange-200' :
    'bg-red-200'
  }`}>
    {warning}
  </span>
)}

        {isOpen ? (
          <ChevronUp className="text-gray-500" />
        ) : (
          <ChevronDown className="text-gray-500" />
        )}
      </div>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

// Separate Pathway Card component with animation
const PathwayCard = ({ pathway, index, isVisible }) => (
  <div 
    className={`relative p-4 border border-gray-200 rounded-lg transform transition-all duration-500 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
    }`}
    style={{ 
      transitionDelay: `${index * 200}ms`,
      willChange: 'transform, opacity'
    }}
  >
    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center">
      {index + 1}
    </div>
    <h3 className="text-orange-500 font-semibold mb-2">{pathway.title}</h3>
    <p className="text-gray-600">{pathway.description}</p>
  </div>
);









// Animation-enabled Pathways Section
const PathwaysSection_1_of_2 = () => {
  const [showCards, setShowCards] = useState(false);
  
  const pathways = [
    {
      title: "Strengthening of BRICS Financial Structures",
      description: "BRICS nations develop independent payment and settlement systems, limiting reliance on Western financial channels and reshaping global capital flows."
    },
    {
      title: "Economic Realignments",
      description: "Countries facing Western financial exclusion realign with BRICS, accelerating the division of financial ecosystems. The UAE’s strategic positioning becomes increasingly essential in facilitating transactions between divergent financial blocs."
    },
    {
      title: "De-Dollarization and Alternative Reserve Currencies",
      description: "Nations such as Saudi Arabia expand oil trade in yuan and other non-dollar currencies. A BRICS-backed reserve currency and the rising adoption of Bitcoin challenge the global dominance of the US dollar, forcing the UAE to diversify reserves and reorient financial strategies."
    },
    {
      title: "Digital and Cryptocurrency Dominance",
      description: "State-backed digital currencies and decentralized assets like Bitcoin dominate cross-border settlements, bypassing traditional banking systems. This decentralization introduces volatility and competition, further fragmenting global markets."
    }
  ];

  return (
    <CollapsibleSection 
      icon={<Router className="text-indigo-500" />}
      title="Pathways for Wildcard Escalation"
      defaultOpen={false}
      onToggle={(isOpen) => {
        if (isOpen) {
          setTimeout(() => setShowCards(true), 100);
        } else {
          setShowCards(false);
        }
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {pathways.map((pathway, index) => (
          <PathwayCard
            key={index}
            pathway={pathway}
            index={index}
            isVisible={showCards}
          />
        ))}
      </div>
    </CollapsibleSection>
  );
};











// Animation-enabled Pathways Section
const PathwaysSection_2_of_2 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Genetically Modified Crops Failures",
        description: "An unregulated biotech firm introduces gene-edited crops to boost yields in desert climates. However, as seen in the Southeast Asian rice case, the genetic modification spreads uncontrollably, displacing native plant species and destabilizing agricultural cycles."
      },
      {
        title: "Human Gene Therapy Disparities",
        description: "UAE investment in genetic disease prevention accelerates, but unequal access to gene therapies fuels social divisions and raises ethical questions regarding human enhancement technologies."
      },
      {
        title: "Bioengineered Pest Outbreaks",
        description: "Gene-edited insects designed to control pests or pollinate arid-zone crops, such as the locust example, mutate unexpectedly, leading to ecological imbalances or unintended crop damage."
      },
      {
        title: "Synthetic Pathogen Risks",
        description: "A neighbouring country’s unregulated bioengineering sector inadvertently creates a synthetic pathogen that crosses borders, impacting public health and trade."
      }

    ];
  
    return (
      <CollapsibleSection 
        icon={<Router className="text-indigo-500" />}
        title="Pathways for Wildcard Escalation"
        defaultOpen={false}
        onToggle={(isOpen) => {
          if (isOpen) {
            setTimeout(() => setShowCards(true), 100);
          } else {
            setShowCards(false);
          }
        }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {pathways.map((pathway, index) => (
            <PathwayCard
              key={index}
              pathway={pathway}
              index={index}
              isVisible={showCards}
            />
          ))}
        </div>
      </CollapsibleSection>
    );
  };
  
























const WildcardAnalysis = () => {
  return (
    <div className="mx-auto p-6">
      {/* Section Title */}
      <div className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Book className="text-gray-700" />
        Economic Shocks and Environmental Disruptions
      </div>

      {/* Executive Summary */}
      <CollapsibleSection 
        icon={<FileText className="text-orange-500" />}
        title="Executive Summary"
        className="mb-6"
        defaultOpen={true}
      >
        <div className="text-gray-700 leading-relaxed space-y-4">
          {/* Geopolitical shifts in 2025 are poised to significantly reshape global power dynamics, presenting both opportunities and threats to the UAE's strategic interests. The convergence of key developments—expanding BRICS influence, evolving Saudi-Iranian relations, intensifying flashpoint tensions, and the return of the Trump administration—highlights the contemporary unpredictableness of global affairs. These factors carry the potential to disrupt trade, destabilize energy markets, and recalibrate traditional alliances, underscoring the importance of foresight and adaptability in UAE foreign policy.
        </p> */}
            <p>
            The intersection of economic realignments and unregulated technological breakthroughs presents significant risks to global stability in 2025, with critical implications for the UAE. The fragmentation of the global financial system and the rapid evolution of genetic and biotech technologies represent two interlinked wildcard scenarios that could disrupt the UAE's strategic objectives. These risks are magnified by the UAE's reliance on its role as a financial intermediary and its substantial investments in agricultural innovation and food security, particularly in Africa.
            </p>
            <p>
            The rise of alternative financial ecosystems, such as BRICS-led frameworks and the increasing adoption of decentralized currencies like Bitcoin, challenges the dominance of traditional Western financial systems. For the UAE, this shift threatens established trade and financial flows but also offers opportunities to act as a neutral hub connecting divergent systems. Simultaneously, unregulated biotech advancements—ranging from gene-edited crops to synthetic pathogens—could undermine the UAE's food security initiatives and agricultural investments abroad. Both scenarios highlight the urgent need for resilience and adaptability in an increasingly fragmented and unpredictable world.
            </p>
            <p>
            The rapid emergence of alternative financial architectures challenges the dominance of the US dollar and Western financial institutions, with significant implications for the UAE's trade and investment flows. This includes the rise of BRICS-led economic frameworks, de-dollarization movements, and the increasing role of decentralized digital currencies like Bitcoin.
            </p>
            <p>
            The lack of cohesive global regulation in biotechnology introduces risks to ecosystems, food supply chains, and public health. These risks are particularly relevant to the UAE's multi-billion dirham agricultural investments in Africa, which remain vulnerable to bioengineered disruptions.
            </p>
            <p>
            The UAE's economic and environmental resilience depends on its ability to navigate these interconnected risks effectively. By diversifying currency reserves, investing in biosecurity and financial interoperability, and championing international governance frameworks, the UAE can safeguard its strategic interests. This dual focus on economic adaptability and technological regulation will position the UAE as a global leader capable of thriving amid evolving global uncertainties.
            </p>
        </div>

      </CollapsibleSection>

























      {/* Scenario 4.1 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="4.1 The Rise of Financial Multiverses: Fracturing of the Global Financial System"
        warning="MEDIUM"
        className="mb-6"
        defaultOpen={false}
      >
        <div className="space-y-6">
          {/* Summary */}
          <CollapsibleSection 
            icon={<Layout className="text-gray-500" />}
            title="Summary"
            defaultOpen={false}
          >
            <p className="text-gray-700">
            By 2025, the global financial system is undergoing significant realignment, driven by the emergence of alternative financial architectures led by economic blocs such as BRICS. As these new frameworks expand their influence, the long-standing dominance of the US dollar and Western-centric financial institutions faces increasing pressure. For the UAE, this shift is not viewed solely as a risk but as a strategic opportunity to reinforce its position as a financial intermediary connecting emerging economies with established markets. The acceleration of de-dollarization, exemplified by Saudi Arabia's moves to conduct oil transactions in non-dollar currencies and the rise of decentralized assets like Bitcoin, signals a broader move towards multipolar financial systems. However, Western institutions such as the IMF and World Bank have blocked nations from integrating cryptocurrencies as reserve assets, deepening the divide. For the UAE, navigating this fractured landscape while safeguarding its economic stability is paramount.
            </p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Emergence of Multipolar Financial Systems</h3>
              <p className="text-gray-700">
              In this scenario, the rapid expansion of BRICS financial frameworks—such as the BRICS Contingent
Reserve Arrangement (CRA) and state-backed digital currencies—drives the development of parallel
economic systems that reduce reliance on Western institutions. Simultaneously, decentralized
cryptocurrencies like Bitcoin gain traction as viable reserve assets, further undermining traditional
financial networks. While this diversification of financial systems offers alternatives, it also creates
inefficiencies and fractures global financial interoperability. For the UAE, capitalizing on both sides of
this divide while maintaining neutrality will be critical to sustaining economic growth and financial security.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          
          <PathwaysSection_1_of_2 />


          {/* Timeline View */}
          <TimelinePathways />



          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Formalization of BRICS currency frameworks and expansion of BRICS membership.",
                "Rapid growth of decentralized assets as reserve currencies in emerging markets.",
                "Increased oil trade conducted in non-dollar currencies, notably by Gulf states.",
                "Diplomatic tensions surrounding the IMF and World Bank’s stance on digital assets."
              ].map((risk, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <span className="font-bold">•</span>
                  {risk}
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Mitigation Strategies */}
          <CollapsibleSection 
            icon={<CheckCircle className="text-green-500" />}
            title="Mitigation Strategies"
            defaultOpen={false}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Diversification of Currency Reserves",
                  description: "Broaden UAE sovereign wealth allocations to include non-dollar assets, decentralized cryptocurrencies, and BRICS-backed currencies to insulate against shifts in global financial systems."
                },
                {
                  title: "GCC Digital Currency Development",
                  description: "Advance initiatives within the Gulf Cooperation Council (GCC) to establish a regional digital currency, providing a stable platform for regional trade and reducing dependence on external financial systems."
                },
                {
                  title: "Deepening BRICS Engagement",
                  description: "Strengthen economic partnerships with BRICS members to ensure seamless participation in emerging financial frameworks, maintaining flexibility between Western and Eastern blocs."
                },
                {
                  title: "Crypto and Financial Technology Expansion",
                  description: "Foster domestic blockchain and financial technology infrastructure to ensure the UAE can operate effectively in decentralized and digitized financial environments."
                }
              ].map((strategy, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">{strategy.title}</h3>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Conclusion */}
          <CollapsibleSection 
            icon={<FileBarChart className="text-indigo-500" />}
            title="Conclusion"
            defaultOpen={false}
          >
            <p className="text-gray-700">
            The fragmentation of the global financial system reflects a shift towards a multipolar world, presenting both
opportunities and challenges for the UAE. By reinforcing its role as a neutral hub connecting divergent
economies, investing in digital assets, and leading regional currency initiatives, the UAE can secure its
economic position amidst the evolving landscape. Strategic engagement with BRICS, while expanding
digital and cryptocurrency capabilities, will position the UAE as a resilient player in a fragmented financial
future.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>

























      {/* Scenario 4.2 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="4.2 Unregulated, Borderless Genetic and Biotech Breakthroughs"
        warning="MEDIUM"
        className="mb-6"
        defaultOpen={false}
      >
        <div className="space-y-6">
          {/* Summary */}
          <CollapsibleSection 
            icon={<Layout className="text-gray-500" />}
            title="Summary"
            defaultOpen={false}
          >
            <p className="text-gray-700">
            By 2025, advancements in genetic engineering and biotechnology are reshaping industries from agriculture to healthcare, yet regulatory frameworks struggle to keep pace. The UAE, with its growing investments in food security, genomics, and healthcare innovation, stands at the forefront of adopting cutting-edge biotechnologies. However, the absence of cohesive international regulation introduces risks that could disrupt national priorities, such as food sustainability, population health, and environmental conservation. While the direct impact on the UAE may seem unlikely, the nation's multi-billion dirham agricultural investments in Africa remain highly vulnerable to unregulated genetic breakthroughs. A bioengineered pest outbreak, failed crop modification, or synthetic biological hazard in one of these regions could have cascading effects on UAE food supply chains and economic interests. This disruption could occur accidentally or as part of adversarial actions aimed at undermining the UAE's influence in Africa, reinforcing the broader geopolitical competition shaping the region. In November 2024, for example, a bioengineering startup in Southeast Asia released genetically modified drought-resistant rice without regional regulatory approval. While initially successful, the strain's unintended cross-pollination with native rice species led to reduced crop diversity and unforeseen soil depletion issues. This disruption triggered significant food shortages in neighbouring countries, prompting fears of similar incidents spreading across arid regions such as the Middle East, where the UAE's agricultural investments in Africa could be at risk.</p>

          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Genetic Disruption to Food Security or Public Health</h3>
              <p className="text-gray-700">
              A breakthrough in genetic engineering, aimed at enhancing crop resilience or eradicating pests, leads to unintended ecological damage or cross-border agricultural disruptions. Alternatively, rapid advancements in human gene therapies without proper oversight create unequal access to healthcare, fostering social inequalities. For the UAE, whose food security initiatives are reliant on biotech-driven agricultural innovation, such developments could undermine national sustainability goals. Gene-editing initiatives, such as the CRISPR-modified mosquitoes deployed in Africa to combat malaria in 2024, exemplify this risk. Although initially designed to reduce mosquito populations, concerns emerged when mutations affected other insect species, threatening pollination cycles. Similarly, mid-2024 saw the introduction of genetically engineered locusts in East Africa to control infestations. However, reports indicated these locusts began interbreeding with wild populations, raising fears of bioengineered pests worsening regional outbreaks. Both incidents highlighted the potential biosecurity risks to UAE agricultural ventures in Africa. Brazil's introduction of gene-edited cattle in 2024, while boosting disease resistance, raised further concerns about biodiversity disruption. Unregulated cross-border livestock movement posed risks to neighbouring ecosystems, demonstrating how similar livestock import initiatives in the UAE could face threats from unchecked genetic enhancements.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_2_of_2 />


          {/* Timeline View */}
          <TimelinePathways />



          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Expansion of biotech research initiatives in agriculture and healthcare sectors within the UAE.",
                "Partnerships between UAE biotech firms and international players operating in minimally regulated environments.",
                "Public pushback or ethical debates around genetic modification of food and medical therapies.",
                "Reports of gene-edited crop failures or synthetic biological threats in regional markets."
              ].map((risk, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <span className="font-bold">•</span>
                  {risk}
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Mitigation Strategies */}
          <CollapsibleSection 
            icon={<CheckCircle className="text-green-500" />}
            title="Mitigation Strategies"
            defaultOpen={false}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Development of National Biotech",
                  description: "Governance Frameworks Establish UAE-specific biotech regulatory bodies to oversee genetic engineering applications, ensuring alignment with national priorities in food security, healthcare, and environmental conservation."
                },
                {
                  title: "International Leadership in Biotech Ethics",
                  description: "Position the UAE as a thought leader in global biotech ethics by advocating for international treaties and regulatory standards governing gene-editing and synthetic biology."
                },
                {
                  title: "Investment in Biosecurity and Monitoring Systems",
                  description: "Enhance the nation’s biosecurity capabilities to detect and contain genetic disruptions early, preventing cross-border biological risks from undermining public health and economic stability."
                },
                {
                  title: "Operational Resilience Testing",
                  description: "Conduct regular cyber resilience exercises simulating Volt Typhoon scenarios, focusing on energy, logistics, and telecommunications sectors to identify vulnerabilities and refine incident response strategies."
                }
              ].map((strategy, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">{strategy.title}</h3>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Conclusion */}
          <CollapsibleSection 
            icon={<FileBarChart className="text-indigo-500" />}
            title="Conclusion"
            defaultOpen={false}
          >
            <p className="text-gray-700">
            Biotech and genetic engineering hold immense potential to advance UAE’s goals in food security,
healthcare, and environmental resilience. However, without robust governance and international
cooperation, these technologies could introduce unpredictable risks. By establishing regulatory
frameworks, promoting ethical leadership, and investing in biosecurity, the UAE can safeguard its long-
term strategic interests while positioning itself as a responsible innovator in the global biotech arena.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>




    </div>
  );
};

export default WildcardAnalysis;








