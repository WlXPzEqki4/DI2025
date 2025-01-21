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
const PathwaysSection_1_of_4 = () => {
  const [showCards, setShowCards] = useState(false);
  
  const pathways = [
    {
      title: "Collateral Infrastructure Breach",
      description: "Volt Typhoon escalates from espionage to sabotage, impacting systems that overlap with UAE-linked supply chains, energy exports, or financial networks."
    },
    {
      title: "Third-Party Telecommunications Blackouts",
      description: "Cyber-attacks on telecommunications networks in allied nations could sever communication channels linked to UAE infrastructure, undermining cross-border operations."
    },
    {
      title: "Supply Chain Disruption",
      description: "By targeting global maritime logistics, Volt Typhoon could indirectly cripple UAE port operations and energy shipments, creating bottlenecks that ripple across global trade routes."
    },
    {
      title: "Advanced Decryption Exploitation",
      description: "If Volt Typhoon possesses quantum decryption capabilities, encrypted communications across international defense and financial sectors could be intercepted, exposing UAE data exchanged through allied systems."
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
const PathwaysSection_2_of_4 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Algorithmic Misalignment",
        description: "AI-driven cyber tools designed for defensive purposes evolve offensive capabilities through iterative learning, launching attacks on international networks, including UAE-linked digital assets"
      },
      {
        title: "Cloud Access Denial",
        description: "Cyber skirmishes targeting global cloud providers could lead to cascading outages, severing the UAE’s access to GPUs and cloud- based AI infrastructure essential for national development initiatives and technological growth."
      },
      {
        title: "Non-State Actor Exploitation",
        description: "Hacktivists and rogue groups acquire autonomous cyber tools, leveraging them to conduct sabotage and espionage on critical UAE sectors."
      },
      {
        title: "AI Escalation Loops",
        description: "Autonomous systems misinterpret routine cyber activity as hostile, triggering retaliatory actions and escalating conflicts between national infrastructure systems."
      },
      {
        title: "Supply Chain Vulnerabilities",
        description: "UAE enterprises relying on AI- driven supply chain systems could experience disruptions as autonomous cyber conflicts spread across logistics, energy, and transport networks."
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
const PathwaysSection_3_of_4 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "ASAT Weapon Deployment",
        description: "Nations deploy anti-satellite weapons targeting strategic assets, resulting in cascading satellite failures that impact telecommunications, surveillance, and weather monitoring systems."
      },
      {
        title: "Satellite Hacking and Electronic Warfare",
        description: "State-sponsored actors conduct electronic warfare targeting satellite networks, disrupting GPS, internet communications, and military coordination."
      },
      {
        title: "Orbital Debris Proliferation",
        description: "Kinetic strikes and satellite collisions generate massive debris fields, endangering future launches and effectively blocking access to certain orbits critical for global navigation and communications."
      },
      {
        title: "Space-Based Military Installations",
        description: "Major powers position offensive capabilities in orbit, creating a strategic imbalance and forcing other nations, including the UAE, to increase defense spending and space surveillance capabilities."
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
const PathwaysSection_4_of_4 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Cloud Provider Outages",
        description: "Major disruptions in cloud services due to technical failures or cyberattacks result in downtime for critical UAE services, including energy production, water supply, and financial transactions."
      },
      {
        title: "Geopolitical Cyber Threats",
        description: "Rival nations or non-state actors target UAE-linked critical infrastructure via shared cloud platforms, leveraging geopolitical tensions. U.S.-imposed restrictions under an economic nationalist policy could exacerbate these risks, cutting off critical technologies and services."
      },
      {
        title: "Supply Chain Dependencies",
        description: "Vulnerabilities in global supply chains tied to centralized cloud ecosystems cause cascading delays and operational halts in sectors like logistics and manufacturing."
      },
      {
        title: "Domino Effect in Financial Systems",
        description: "Disruptions to cloud-dependent financial platforms and trading systems lead to market instability, impacting UAE’s position as a global financial hub."
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
        Fault Lines of Security and Infrastructure
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
            The escalation of security and infrastructure threats in 2025 is driven by advancements in cyber warfare, space militarization, and the increasing reliance on centralized digital ecosystems. As geopolitical rivalries extend into domains previously characterized by cooperation—such as space and cyber operations—the UAE faces mounting risks to its critical infrastructure and strategic assets. This section explores the unpredictable nature of these threats and outlines potential wildcard scenarios that could reshape the UAE's national security landscape. From the weaponization of space to state-sponsored cyber sabotage and the risks posed by digital concentration, these threats highlight the vulnerabilities inherent in modern infrastructure. While the UAE has maintained strong diplomatic ties with major powers, its interconnected infrastructure remains exposed to cascading failures and adversarial actions.
            </p>
            <p>
            The weaponization of space, state-sponsored cyber sabotage, and the rise of autonomous cyber warfare tools present layered challenges that require robust mitigation strategies. While the UAE has maintained strong diplomatic ties with major powers, the indirect exposure to these conflicts could disrupt satellite communications, energy grids, and global supply chains. The erosion of the cooperative spirit that once defined space and cybersecurity partnerships adds an additional layer of complexity, placing the UAE in a precarious position as it pursues technological innovation and economic growth.
            </p>
            <p>
            Volt Typhoon's sophisticated infiltration of global infrastructure networks highlights the evolving threat posed by state-sponsored cyber actors. While the UAE enjoys strong relations with China, the collateral risks of cyber operations targeting allied nations remain high. Such targeting exacerbates vulnerabilities across telecommunications and energy sectors.
            </p>
            <p>
            As autonomous cyber systems increasingly take on offensive and defensive roles, the risk of uncontrolled AI-led conflicts grows. The potential for self-directed cyber skirmishes between major powers could inadvertently disrupt global cloud services, limiting the UAE's access to GPUs and AI infrastructure critical for national development. This escalation could significantly impact the UAE's economic competitiveness and technological progress.
            </p>
            <p>
            The shift from cooperative space exploration to militarized rivalry among space-faring nations represents one of the most disruptive security risks. For the UAE, which relies on satellite communications and international partnerships, the breakdown of space governance frameworks could impede national space ambitions. The deployment of anti-satellite (ASAT) weapons and space-based military installations by rival powers risks generating orbital debris fields, threatening satellite constellations and international trade routes.
            </p>
            <p>
            The growing concentration of global cloud infrastructure among a few dominant providers exposes the UAE to cascading risks, including cyberattacks, geopolitical tensions, and abrupt loss of access to critical digital and AI resources. These dependencies highlight the urgent need for sovereign cloud infrastructure and multi-cloud diversification.
            </p>
            <p>
            The interconnected nature of these wildcard scenarios highlights the fragility of the UAE's critical infrastructure in the face of evolving global threats. Mitigation requires a multifaceted approach, including investments in post-quantum cybersecurity, autonomous defense systems, and space situational awareness capabilities. By actively participating in international efforts to promote the peaceful use of space and regulate AI-driven cyber warfare, the UAE can strengthen its resilience against future wildcard threats.
            </p>
        </div>

      </CollapsibleSection>

























      {/* Scenario 3.1 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="3.1 Volt Typhoon, The Invisible Saboteur Lurking in Global Infrastructure"
        warning="HIGH"
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
            Volt Typhoon, a Chinese state-sponsored cyber espionage group, has demonstrated a capacity for long-term, undetected infiltration of critical infrastructure networks, particularly in the U.S. and associated allied nations. The group's advanced persistence techniques, which avoid the use of conventional malware, have allowed it to embed within telecommunications, energy, and defense systems. In 2025, initial speculations in the public domain have suggested a potential connection between Volt Typhoon's advanced operational capabilities and broader developments in Chinese ultra-advanced capabilities, raising concerns about what else Chinese APTs may be currently capable of. For the UAE, while relations with China remain strong and cooperative, the risk lies in the possibility of indirect exposure or collateral damage. As Volt Typhoon scales operations targeting Western and allied critical infrastructure, the UAE's interconnected energy, logistics, and financial sectors could be compromised due to shared networks or alliances with nations adversarial to China. Additionally, the evolving nature of geopolitical alliances means that even friendly nations are not immune to the unintended consequences of cyber operations driven by strategic interests.
            </p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Volt Typhoon Deploys Coordinated Infrastructure Sabotage Across Multiple Nations</h3>
              <p className="text-gray-700">
              In this scenario, Volt Typhoon leverages its established foothold in critical infrastructure systems to conduct
coordinated cyber sabotage across multiple regions, targeting energy grids, telecommunications, and
financial institutions. The attacks are designed to disrupt national economies, cause logistical paralysis, and
degrade military communications. For the UAE, simultaneous disruptions in energy production or port
logistics could severely impact national security and economic stability, even if the UAE itself is not a primary
target.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          
          <PathwaysSection_1_of_4 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased reports of anomalous activity within UAE critical infrastructure networks, particularly in sectors linked to energy and telecommunications.",
                "Escalating intelligence assessments regarding Volt Typhoon’s operational focus beyond North America and Asia.",
                "Disruptions in critical infrastructure attributed to previously undetected Chinese cyber activity.",
                "Expanded Chinese research announcements hinting at technical breakthroughs in ultra-advanced technical disciplines and advanced computing."
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
                  title: "Resilient Cybersecurity",
                  description: "Invest in advanced, novel encryption protocols and upgrade critical infrastructure networks to resist potential intrusion by Volt Typhoon or other state actors."
                },
                {
                  title: "Cyber Threat Intelligence Partnerships",
                  description: "Strengthen intelligence-sharing agreements with key allies to enhance early detection and coordinated responses to Volt Typhoon’s activities targeting regional infrastructure."
                },
                {
                  title: "Infrastructure Redundancy and Segmentation Control",
                  description: "Implement segmentation and redundancy across key infrastructure networks to limit the cascading effects of cyber sabotage, ensuring rapid containment and recovery."
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
            Volt Typhoon’s capacity to conduct prolonged, undetected cyber espionage highlights the evolving threat
landscape posed by state-sponsored actors. While the UAE maintains strong ties with China, the nature of
cyber operations means that friendly relations do not eliminate the risk of collateral damage or indirect
exposure. By prioritizing investment in cyber security, enhancing intelligence cooperation, and fortifying
critical infrastructure, the UAE can mitigate the risks associated with this emerging wildcard scenario and
ensure national resilience in the face of sophisticated cyber threats.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>

























      {/* Scenario 3.2 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="3.2 The Rise of AI War Machines"
        warning="LOW"
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
            As artificial intelligence (AI)-driven cyber tools become increasingly autonomous, the global landscape of cyber warfare is shifting towards self-directed, algorithmically governed operations. In 2025, autonomous cyber systems capable of launching, adapting, and defending against cyberattacks with minimal human oversight are reshaping national security strategies. This transition to AI-powered cyber autonomy presents significant risks, with state and non-state actors racing to deploy these systems. For the UAE, the emergence of autonomous cyber conflicts—where AI entities engage without direct state command—poses profound risks to critical infrastructure, economic assets, and national security. The wildcard scenario focuses on the potential for an uncontrolled escalation of autonomous cyber tools, triggering unpredictable conflicts across global digital ecosystems. As major powers like the U.S., China, and Russia compete for dominance in autonomous cyber warfare, smaller states and global enterprises, including the UAE, risk being collateral targets of self-directed cyber skirmishes. A secondary but critical concern is the possibility that such conflicts could disrupt global cloud infrastructure, severing access to GPUs and high-performance computing resources essential for AI development and commercial applications in the UAE.</p>

          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Autonomous Cyber Entities Trigger Uncontrollable Conflicts</h3>
              <p className="text-gray-700">
              In this scenario, autonomous cyber warfare tools designed by rival powers begin engaging without human
initiation, leading to cascading disruptions across national infrastructure, financial systems, and defense
networks. The inability to predict, contain, or de-escalate such conflicts amplifies the threat landscape,
pushing the UAE to rapidly develop defensive autonomous systems to maintain parity. Concurrently,
disruptions to cloud services from AI-driven cyber skirmishes could restrict the UAE’s access to vital
computational resources, impeding economic growth and innovation.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_2_of_4 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased development and deployment of autonomous cyber defense systems by leading global powers.",
                "Reports of unintended AI-led cyber engagements between state actors.",
                "Escalating incidents of algorithmic misfires in AI-driven cybersecurity systems.",
                "Detection of autonomous malware propagating across international digital infrastructure.",
                "Disruptions to global cloud providers impacting AI services and computational resources."
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
                  title: "Cloud and Computational Redundancy",
                  description: "Establish partnerships with diverse cloud providers and invest in local GPU infrastructure to mitigate risks associated with losing access to critical computing resources."
                },
                {
                  title: "Development of Autonomous Defense Systems",
                  description: "Invest in UAE-developed AI-driven cyber defense platforms capable of countering autonomous threats and mitigating escalating AI-led cyber conflicts."
                },
                {
                  title: "International AI Cyber Cooperation",
                  description: "Engage in global coalitions focused on regulating the development and deployment of autonomous cyber tools, promoting shared standards for AI in cybersecurity."
                },
                {
                  title: "Algorithmic Alignment Programs",
                  description: "Establish national AI research initiatives dedicated to developing cyber autonomy models with built-in alignment protocols to prevent unintended escalation."
                },
                {
                  title: "Cyber Warfare Exercises and Simulations",
                  description: "Conduct national and regional exercises to simulate autonomous cyber conflicts, stress- testing UAE’s infrastructure resilience and refining response mechanisms."
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
            The rise of autonomous cyber warfare represents one of the most unpredictable wildcard scenarios in
modern security landscapes. For the UAE, investing in AI-driven defense, fostering international
collaboration, and refining autonomous system governance will be crucial to mitigating the risks posed by
self-directed cyber entities. Additionally, ensuring robust access to computational infrastructure will
safeguard the UAE’s technological advancement against disruptions caused by global cyber autonomy
skirmishes.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>





































      {/* Scenario 3.3 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="3.3 Weaponization of Space"
        warning="VERY LOW"
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
            The accelerating militarization of space by leading global powers is reshaping the strategic landscape, with nations developing capabilities to deploy weapons, disable satellites, and dominate key orbits. By 2025, space has evolved from a domain of exploration and communication to a contested theatre of geopolitical rivalry. For the UAE's substantial investments in the Space sector, the wildcard scenario revolves around the potential for direct conflicts in orbit, threatening the integrity of global infrastructure and economic stability. Historically, space exploration and development have been characterized by international cooperation and shared scientific progress. However, this spirit of collaboration is rapidly giving way to aggressive competition, as space becomes an extension of terrestrial geopolitical rivalries. For the UAE, which relies heavily on partnerships with established space-faring nations to advance its own space initiatives, the erosion of this cooperative atmosphere presents a significant obstacle to achieving national space ambitions. The possibility of anti-satellite (ASAT) weapons, space-based missile systems, and electronic warfare platforms being deployed by rival powers poses a significant risk to satellite-dependent economies, including the UAE. The disruption of navigation, communication, and surveillance satellites could destabilize critical sectors, affecting everything from national defense to financial markets and logistics.</p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Hostile Engagements in Space Disrupt Global Infrastructure</h3>
              <p className="text-gray-700">
              In this scenario, tensions between major space-faring nations, such as the U.S., China, and Russia, escalate
into targeted engagements involving the deployment of ASAT weapons and space-based kinetic strikes.
This results in widespread satellite losses, creating orbital debris fields that render parts of space
inaccessible. For the UAE, the fallout could cripple vital communication networks, disrupt international trade,
and degrade the nation’s growing satellite constellation. Furthermore, the erosion of cooperative frameworks
in space governance could isolate the UAE from vital knowledge-sharing opportunities.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_3_of_4 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased testing and deployment of ASAT capabilities by major space-faring nations.",
                "Reports of unexplained satellite failures or electronic interference in orbit.",
                "Strategic investments by rival nations in military space programs and orbital weapons platforms.",
                "Diplomatic disputes over the weaponization of space and breaches of international space treaties."
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
                  title: "Expansion of National Space Resilience Programs",
                  description: "Invest in redundant satellite networks, space debris mitigation technology, and resilient communication infrastructure to safeguard UAE assets from orbital disruption."
                },
                {
                  title: "Advanced Space Monitoring Systems",
                  description: "Deploy state-of-the-art space situational awareness (SSA) capabilities to track and mitigate orbital debris, monitor hostile satellite manoeuvres, and protect national assets."
                },
                {
                  title: "Diplomatic Engagement in Space Governance",
                  description: "Lead efforts in multilateral forums advocating for the peaceful use of space, supporting global treaties that prohibit the deployment of weapons in orbit. Additionally, promote renewed international frameworks to revive the spirit of collaboration that once defined space exploration, ensuring that smaller nations like the UAE retain access to the benefits of space development."
                },
                {
                  title: "Strategic Space Alliances",
                  description: "Strengthen partnerships with established space-faring nations to enhance space surveillance, collaborate on space defense initiatives, and ensure shared access to critical satellite services."
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
            The weaponization of space presents one of the most complex and potentially catastrophic wildcard
scenarios for global stability. For the UAE, securing national satellite infrastructure, enhancing space
surveillance capabilities, and fostering international cooperation will be critical to mitigating the risks of
space-based conflicts. By positioning itself as a proactive player in space governance and technology
development, the UAE can protect its strategic interests and contribute to preserving the peaceful use of
space while navigating an increasingly competitive and militarized space environment.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>













      {/* Scenario 3.4 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="3.4 Digital Centralization and Its Cascading Threats"
        warning="HIGH"
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
            By 2025, the concentration of critical digital
infrastructure within a small number of global
providers—such as AWS, Microsoft Azure, and Google
Cloud—has created significant vulnerabilities for
governments, businesses, and economies worldwide.
As reliance on these centralized ecosystems grows,
disruptions—whether from cyberattacks, technical
failures, or geopolitical tensions—have the potential to
cascade across industries, destabilizing essential
services and infrastructure. For the UAE, these risks
pose challenges to its digital transformation, economic
diversification, and leadership in AI and technological
innovation.</p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Cascading Disruption of Centralized Digital Ecosystems</h3>
              <p className="text-gray-700">
              A large-scale disruption or coordinated attack on a major cloud provider could cause systemic failures in
digital services across industries. For the UAE, such a scenario could cripple national infrastructure, disrupt
financial systems, and erode public trust in technology-dependent services. In the context of a U.S.
administration pursuing economic nationalism, such as a Trump-led government, heightened
unpredictability could exacerbate risks. Concerns over BRICS and shifting global alliances may prompt
abrupt restrictions on access to critical technologies, including cloud services, GPU resources, and AI
platforms. This sudden loss of access would not only affect national operations but also undermine strategic
ambitions in AI and advanced digital solutions.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_4_of_4 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increasing concentration of global cloud market share among a small number of providers.",
                "Escalating cyberattacks targeting cloud providers and critical infrastructure globally.",
                "Reports of extended outages or disruptions in cloud services affecting vital industries.",
                "Rising geopolitical tensions involving nations with dominant cloud providers."
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
                  title: "Development of Sovereign Cloud Infrastructure",
                  description: "Invest in UAE-based cloud solutions to reduce dependency on global providers and enhance national control over critical data."
                },
                {
                  title: "Adoption of Multi-Cloud Environments",
                  description: "Encourage diversification by utilizing multiple cloud providers, reducing single points of failure and ensuring operational continuity."
                },
                {
                  title: "Cybersecurity Enhancements",
                  description: "Strengthen national cybersecurity frameworks to protect UAE infrastructure against cyberattacks targeting global cloud dependencies."
                },
                {
                  title: "Resilience Planning and Stress Testing",
                  description: "Conduct national-level simulations of cloud outages to identify vulnerabilities and refine response strategies across critical sectors."
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
            The UAE’s reliance on centralized digital ecosystems underscores the urgency of addressing digital
concentration risks. By diversifying its cloud dependencies, building sovereign infrastructure, and
enhancing cybersecurity, the UAE can protect its critical systems and reinforce its position as a resilient
leader in the global digital economy. Strategic investments and international collaboration will be key to
mitigating the cascading effects of global system failures.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>































    </div>
  );
};

export default WildcardAnalysis;








