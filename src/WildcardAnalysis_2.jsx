import React, { useState, useEffect } from 'react';
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
        {warning && (
          <div className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
            {warning}
          </div>
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
const PathwaysSection_1_of_3 = () => {
  const [showCards, setShowCards] = useState(false);
  
  const pathways = [
    {
      title: "State-Imposed AGI Export Controls",
      description: "Leading AGI-developing nations implement stringent export controls, restricting access to advanced AI models and computing power. This could delay the UAE’s technological growth and autonomy, forcing reliance on outdated AI systems."
    },
    {
      title: "AGI-Driven Cyber Conflicts",
      description: "AGI is deployed in state-sponsored cyberattacks targeting critical infrastructure, financial systems, and communication networks, with limited defensive capabilities available to non-AGI nations."
    },
    {
      title: "AI-Enabled Economic Coercion",
      description: "Nations with AGI superiority manipulate global trade, financial markets, and logistics using predictive algorithms and automated economic interventions, disadvantaging competitors."
    },
    {
      title: "Militarization of AGI",
      description: "AGI becomes integral to military strategy, with autonomous decision-making in conflict zones. The monopolization of this technology by select states forces other nations, including the UAE, to navigate asymmetric military landscapes."
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
const PathwaysSection_2_of_3 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Global Financial Disruption",
        description: "Quantum decryption could expose sensitive financial transactions, destabilizing global markets and undermining trust in international banking systems. The UAE’s financial institutions, reliant on encrypted cross-border transactions, may face heightened vulnerability."
      },
      {
        title: "Intelligence and Military Vulnerability",
        description: "Quantum cryptography breakthroughs could compromise encrypted defense communications and intelligence-sharing networks, leaving the UAE exposed to surveillance and interference in critical defense operations."
      },
      {
        title: "Cyber Espionage at Scale",
        description: "China’s ability to decrypt communications in real-time could lead to industrial espionage on an unprecedented scale, targeting sectors vital to the UAE’s economic diversification, such as energy, logistics, and AI."
      },
      {
        title: "Undetectable Cyber Infiltration",
        description: "This scenario introduces the risk that such methods could extend to international targets, including the UAE’s critical infrastructure and telecommunications sectors."
      },
      {
        title: "Diplomatic Realignments",
        description: "Nations unable to counter quantum surveillance may recalibrate alliances, either aligning more closely with China to mitigate risk or forming coalitions to develop counter-technologies. This shift could pressure the UAE to reassess its foreign policy positioning."
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
const PathwaysSection_3_of_3 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Energy Market Disruption",
        description: "Zero-point energy or similar advancements render traditional energy sources obsolete, leading to a collapse in hydrocarbon markets and destabilization of economies reliant on oil and gas exports. For the UAE, this could trigger a ripple effect across its financial, real estate, and public service sectors, with severe consequences for domestic stability."
      },
      {
        title: "Geopolitical Tensions over Technology Monopolization",
        description: "The U.S. and China, possessing early access to ultra-advanced technologies, monopolies these breakthroughs to consolidate economic and military dominance. This fuels inequality and intensifies global rivalries, potentially marginalizing the UAE’s influence on global energy policy."
      },
      {
        title: "Unregulated Technological Competition",
        description: "The absence of global governance over ultra-advanced technologies sparks a race to weaponize or exploit these breakthroughs, increasing the risk of conflict and misuse. Such competition could also limit access to these innovations for nations like the UAE, creating a technological divide."
      },
      {
        title: "Societal Disruption",
        description: "Rapid adoption of transformative technologies triggers workforce displacement, social inequalities, and public resistance due to concerns over safety, ethics, and access. The UAE’s economic diversification efforts may face challenges if traditional sectors are unable to adapt quickly enough."
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
        Technological Disruptions That Could Redefine Power in 2025
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
            The rapid evolution of disruptive technologies continues to reshape global power structures and economic landscapes in 2025. From Artificial General Intelligence (AGI) and quantum cryptography to ultra-advanced technologies stemming from unprecedented sources, each breakthrough presents opportunities for progress and risks of destabilization. For the UAE, which has positioned itself as a leader in innovation and technological adoption, these developments represent both challenges and avenues for strategic growth.
            </p>
            <p>
            AGI promises unparalleled advancements in decision-making and problem-solving but risks intensifying geopolitical competition as nations vie for control. Similarly, the potential for quantum cryptography to render traditional encryption obsolete poses critical security challenges. Most recently, emerging insights into ultra-advanced technologies such as zero-point energy and metamaterials could fundamentally disrupt energy markets and global innovation trajectories. Metamaterials, a groundbreaking area of non-conventional physics, allow unprecedented control of electromagnetic waves, with applications spanning energy transmission, quantum computing, and advanced communications. These advancements highlight the urgency for nations like the UAE to remain agile and forward-thinking.
            </p>
            <p>
            Nations are rapidly advancing in AGI development, with potential applications that span economic, military, and governance sectors. However, the race to control AGI introduces ethical dilemmas and risks of monopolization. Advances in quantum computing and cryptography have the potential to upend traditional cybersecurity and financial systems, creating new vulnerabilities for nations that fail to adapt.
            </p>
            <p>
            Ultra-advanced technologies also follow an acceleration curve, with early-stage rollouts triggering short-term market shocks—especially in global energy sectors. Over time, their widespread adoption could precipitate the collapse of hydrocarbon markets, threatening the economic foundations of energy-dependent nations like the UAE. The cascading effects of these changes demand strategic foresight and resilience-building measures to mitigate disruptions and leverage emerging opportunities.
            </p>
            <p>
            The UAE can proactively address the uncertainties posed by these technological disruptions by prioritizing investment in emerging technologies, championing global governance frameworks, and ensuring that its economic and innovation ecosystems remain resilient. By leveraging its role as a hub for research and international collaboration, the UAE can position itself at the forefront of transformative change while safeguarding its strategic interests. The interconnected nature of these disruptive technologies highlights the growing need for the UAE to enhance domestic capabilities, pursue global leadership in AI governance, and strengthen alliances to counterbalance the risks of technological asymmetry.
            </p>

        </div>

      </CollapsibleSection>

























      {/* Scenario 2.1 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="2.1 The Rise of Superintelligence: State Power and AGI Control"
        warning="ALMOST CERTAIN"
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
            The rapid development of Artificial General Intelligence (AGI) is set to redefine global power structures, economies, and security paradigms. As AGI begins to surpass human cognitive capabilities, states are increasingly intervening to control and direct its evolution, recognizing the transformative potential and associated risks. For the UAE, a nation heavily invested in AI and technological innovation, the emergence of state-controlled AGI by competing global powers could significantly alter international competitiveness and introduce new vectors of economic and security disruption. On 06 January 2025, OpenAI CEO Sam Altman published a blog post expressing confidence in AGI's imminent arrival, describing a clear path to AGI. This statement, while subtle, appears to seed the ground for an official AGI announcement. Such disclosures foreshadow rapid disruptions in global labor markets and workforce reconfigurations, with AGI expected to automate a wide range of skilled professions. For the UAE, this raises concerns around job displacement and economic restructuring, prompting the need for immediate policy responses. The wildcard scenario stems from the possibility of AGI development being monopolized by a few dominant states such as the U.S. or China, creating technological imbalances and restricting global access to cutting-edge AI capabilities. This could threaten UAE innovation sectors, expose critical infrastructure to AGI-driven cyber warfare, and reduce the UAE's influence in shaping global AI governance frameworks.
            </p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">AGI Monopoly and Weaponization by Leading States</h3>
              <p className="text-gray-700">
              In this scenario, AGI technology becomes the exclusive domain of one or two dominant global powers,
leading to a sharp technological divide. These nations leverage AGI to exert influence over smaller states
through economic coercion, enhanced cyber capabilities, and AI-driven espionage. For the UAE,
reliance on foreign AI technologies could become a national vulnerability, limiting growth, reducing
competitiveness, and compromising national security
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          
          <PathwaysSection_1_of_3 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Announcements of major AGI breakthroughs by leading AI nations (U.S., China, European Union).",
                "Policy papers or legislative frameworks proposing AI export restrictions.",
                "Increased funding and state partnerships with AGI research labs by global powers.",
                "Public reports of AGI involvement in cyberattacks or economic manipulation.",
                "Statements from industry leaders, such as Sam Altman, indicating AGI milestones and preparing the public for near-term disruptions"
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
                  title: "Domestic AGI Development",
                  description: "Accelerate national investment in AGI research and development through public-private partnerships, fostering homegrown innovation to reduce reliance on external technologies."
                },
                {
                  title: "AI Governance Leadership",
                  description: "Position the UAE as a global leader in ethical AGI governance, contributing to international regulatory frameworks to advocate for equitable access and responsible development."
                },
                {
                  title: "Strategic Alliances in AI",
                  description: "Form AI-focused alliances with mid-tier powers and technology innovators to pool resources and share knowledge, strengthening collective bargaining power against dominant AI nations."
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
            The monopolization and militarization of AGI represent a significant wildcard scenario with far-reaching
implications for the UAE. By fostering domestic AGI development, engaging in global governance initiatives,
and fortifying cybersecurity, the UAE can mitigate risks associated with state-controlled AGI while
positioning itself as a resilient and influential player in the evolving AI landscape.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>

























      {/* Scenario 2.2 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="2.2 China Breaks the Code in Quantum Cryptography"
        warning="VERY HIGH"
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
            The race for quantum supremacy has long been a focal point of technological competition between global powers. In 2025, rumors and speculative reports suggest that China may have achieved a breakthrough in quantum cryptography, potentially rendering conventional encryption methods obsolete. This development, if confirmed, would have profound implications for global cybersecurity, economic stability, and military communications. For the UAE, the wildcard scenario of China cracking quantum cryptography poses significant risks to the integrity of sensitive data, financial systems, and national security frameworks. The prospect of unbreakable quantum encryption, coupled with the ability to decrypt previously secure communications, could shift the geopolitical balance by giving China unparalleled strategic advantage. Analysts have speculated that advancements in quantum cryptography may play a role in the operational effectiveness of Chinese Advanced Persistent Threat groups. The prospect of secure communications failing at mass scale highlights the immediate and tangible risks posed by China's advancements in the quantum domain, with the potential for cascading effects on global infrastructure, including the UAE.</p>

          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">China's Quantum Cryptography Breakthrough And Strategic Leverage</h3>
              <p className="text-gray-700">
              In this scenario, China’s mastery of quantum cryptography allows it to intercept and decrypt global
communications, exposing state secrets and corporate data. This newfound capability enhances
China’s diplomatic leverage, allowing it to influence economic negotiations and military strategies
covertly. The UAE, with extensive economic and security partnerships globally, could face increased
risks of espionage and data breaches, undermining both government and private sector operations.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_2_of_3 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Reports or leaks from Western intelligence agencies suggesting advances in Chinese quantum cryptography.",
                "Increased Chinese investments in quantum infrastructure and the rapid deployment of quantum communication networks.",
                "Heightened cyberattacks targeting quantum research institutions globally.",
                "Diplomatic movements by global powers to secure post-quantum encryption technologies.",
                "Unexplained cyber intrusions into critical networks of Western powers, suspected to involve quantum encryption"
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
                  title: "Investment in Post-Quantum Cryptography (PQC)",
                  description: "Accelerate national efforts to develop and adopt post-quantum encryption protocols, ensuring that UAE data and communication infrastructure remains resilient against quantum decryption."
                },
                {
                  title: "Surveillance and Intelligence Expansion",
                  description: "Enhance intelligence gathering on emerging quantum developments, proactively monitoring for signals that indicate breakthroughs in quantum decryption by rival states."
                },
                {
                  title: "Diversification of Digital Infrastructure",
                  description: "Build redundancy in communication networks, leveraging alternative data channels and compartmentalizing sensitive data to limit exposure to quantum breaches."
                },
                {
                  title: "Alliances for Quantum Security",
                  description: "Strengthen partnerships with leading technology nations to collaborate on quantum-resistant cryptography, ensuring shared access to cutting-edge security frameworks."
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
            The potential for China to crack quantum cryptography represents one of the most disruptive wildcard
scenarios in global geopolitics and cybersecurity. For the UAE, the implications extend across economic,
defense, and diplomatic domains. By prioritizing investment in post-quantum security, fostering international
alliances, and enhancing intelligence capabilities, the UAE can mitigate the risks associated with this
transformative technological shift while preserving national security and economic resilience.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>





































      {/* Scenario 2.3 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="2.3 Ultra-Advanced Technology and the Future of Warning Level Innovation"
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
            In 2025, emerging breakthroughs in energy systems, propulsion technologies, and advanced materials could catalyze a new era of innovation. While the potential for these advancements to transform industries like energy, transportation, and defense is immense, they also introduce significant risks. Increasingly, governments and private entities are investing in research that challenges traditional technological paradigms, driven in part by growing public interest and soft disclosure strategies employed by the U.S. Government. These efforts, which include congressional hearings, media campaigns, and academic partnerships, aim to foster transparency around previously unexplained phenomena, now referred to as unidentified anomalous phenomena (UAP). For the UAE, a leader in embracing cutting-edge technology, the wildcard scenario revolves around the geopolitical, economic, and societal implications of ultra-advanced technologies reshaping the global order. These technologies, including theorized zero-point energy and advancements in metamaterials, could either disrupt existing markets or concentrate power among a few dominant players, particularly the United States and China, which appear to have early access to such technologies. Metamaterials, a groundbreaking category within non-conventional physics, have unique properties that allow them to manipulate electromagnetic waves in unprecedented ways. These materials have the potential to unlock applications in energy efficiency, quantum computing, and advanced communications. For instance, metamaterials could serve as key components in energy transmission systems, significantly improving performance and sustainability, or as enablers of next-generation quantum networks with robust encryption capabilities.</p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Gradual Rollout And Disruptive Consequences Of Ultra-Advanced Technologies</h3>
              <p className="text-gray-700">
              In this scenario, the introduction of ultra-advanced technologies follows an acceleration curve, beginning with experimental use in niche sectors before gradually scaling to broader adoption. Despite the phased rollout, even early-stage disclosures can trigger short-term market shocks in global energy sectors, characterized by volatility and reallocation of resources. Over the long term, the widespread adoption of such technologies could precipitate the collapse of traditional hydrocarbon markets, destabilizing economies reliant on oil and gas exports. The UAE must navigate this transition carefully, safeguarding its strategic interests in a rapidly transforming landscape. The sudden obsolescence of traditional energy sources would have cascading effects on the UAE's economy. As energy exports form a significant portion of national revenue, their collapse would destabilize financial systems, reduce public sector funding, and hinder infrastructure projects. Secondary effects could include increased unemployment, reduced foreign direct investment, and a need to rapidly reallocate resources to emerging industries. This disruption could erode decades of economic progress and place immense pressure on national stability and resilience frameworks.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_3_of_3 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Reports of significant breakthroughs in zero-point energy or advanced propulsion systems from academic, corporate, or government research.",
                "Increased government funding for classified defense and aerospace programs globally.",
                "Diplomatic efforts by leading nations to regulate or limit access to ultra-advanced technologies.",
                "Disruptions in traditional energy markets or accelerated adoption of alternative energy solutions."
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
                  title: "Invest in Advanced Research Initiatives",
                  description: "Expand UAE’s investments in frontier technologies, focusing on renewable energy, AI, and aerospace to ensure participation in the next wave of innovation."
                },
                {
                  title: "Global Regulatory Leadership",
                  description: "Position the UAE as a leader in advocating for international governance frameworks that promote equitable access to ultra-advanced technologies while mitigating risks."
                },
                {
                  title: "Economic Diversification Acceleration",
                  description: "Accelerate efforts to diversify the UAE economy beyond hydrocarbons, ensuring resilience against potential energy market disruptions caused by technological breakthroughs."
                },
                {
                  title: "Strategic Alliances and Knowledge Sharing",
                  description: "Forge partnerships with nations and organizations at the forefront of ultra-advanced technology research to secure access and share insights into emerging developments."
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
            The development and dissemination of ultra-advanced technologies represent a profound wildcard
scenario with the potential to reshape global innovation and economic structures. For the UAE, embracing
these advancements while mitigating risks through economic diversification, regulatory leadership, and
international collaboration will be essential to maintaining its strategic and technological edge in an era of
rapid transformation.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>















    </div>
  );
};

export default WildcardAnalysis;








