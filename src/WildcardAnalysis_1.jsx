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
const PathwaysSection_1_of_5 = () => {
  const [showCards, setShowCards] = useState(false);
  
  const pathways = [
    {
      title: "Diplomatic Isolation and Economic Pressure",
      description: "Rival powers could leverage their significant political sway with African governments to discourage engagement with UAE-led projects. By offering alternative investments or threatening diplomatic repercussions, these nations could strategically diminish the UAE's footprint across vital sectors."
    },
    {
      title: "Proxy Conflict Instigation",
      description: "The African continent has long been a theater for proxy conflicts. Competition between rival powers might amplify support for local factions or governments opposed to UAE-backed initiatives, fueling instability in regions where Emirati projects are concentrated."
    },
    {
      title: "Economic Retaliation and Sanctions",
      description: "Global powers competing with the UAE for influence could introduce economic measures targeting Emirati firms operating in Africa. This might involve sanctions, tariffs, or regulatory barriers, indirectly undermining the UAE's investment portfolios."
    },
    {
      title: "Narrative and Information Warfare",
      description: "Rival nations could shape narratives through media and diplomatic channels portraying the UAE as an exploitative force in Africa, eroding the goodwill the UAE has cultivated through infrastructure, education, and humanitarian investments."
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
const PathwaysSection_2_of_5 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Intensified Economic Sanctions",
        description: "Western nations may impose or escalate economic sanctions against BRICS members perceived as adversarial, affecting trade relations and financial transactions. Under the incoming US administration, there is a heightened likelihood of economic sanctions being deployed as a key foreign policy tool to counter perceived threats from BRICS nations. This could lead to ripple effects that directly impact UAE entities engaging with sanctioned BRICS partners, complicating trade routes and financial flows."
      },
      {
        title: "Trade Barriers and Institutional Blocking Building",
        description: "Leveraging global institutions like the World Bank, IMF, and WTO, Western powers may seek to limit funding or trade facilitation for BRICS-led projects, creating systemic obstacles to growth in member nations. This could undermine large-scale development initiatives and infrastructure projects across BRICS economies."
      },
      {
        title: "Strategic Economic Decouling",
        description: "BRICS’ push for a new reserve currency or de-dollarization initiatives could accellerate Western disengagement from BRICS economies. The shift away from dollar-dominated trade could lead to competing financial systems, increasing transaction costs and economic fragmentation"
      },
      {
        title: "Narrative and Information Campaigns",
        description: "Western media and policymakers may amplify narratives portraying BRICS as a destabilizing force, reinforcing economic sanctions and trade restrictions. This could frame BRICS as a bloc working against global stability, justifying more aggressive containment strategies."
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
const PathwaysSection_3_of_5 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Regional Economic Reorientation",
        description: "Joint Saudi-Iranian infrastructure projects, such as new pipelines bypassing the Strait of Hormuz, could diminish the strategic value of the UAE’s ports and energy transit hubs, impacting national revenue streams."
      },
      {
        title: "Military Coordination and Defense Pacts",
        description: "A formal defense agreement between Saudi Arabia and Iran could diminish the perceived necessity for UAE military cooperation, reshaping Gulf security frameworks and altering the UAE’s role in regional coalitions."
      },
      {
        title: "Geopolitical Realignment",
        description: "Saudi Arabia and Iran could collaborate to mediate regional conflicts, bypassing the UAE’s traditional role as a neutral diplomatic broker. This could reduce the UAE’s influence in Middle Eastern political affairs."
      },
      {
        title: "OPEC and Energy Markets Shift",
        description: "Enhanced Saudi-Iranian cooperation in OPEC could drive energy pricing strategies that favor their mutual interests, potentially disadvantaging the UAE in oil and gas market negotiations."
      },
      {
        title: "Ideological Alignment on the Muslim Brotherhood",
        description: "Should Saudi Arabia and Iran align on policies toward the Muslim Brotherhood, it would represent a significant existential threat to the UAE. The UAE views the Muslim Brotherhood and its affiliates as deeply destabilizing and inimical to its national security"
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
const PathwaysSection_4_of_5 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Simultaneous Regional Conflicts",
        description: "Conflicts involving Taiwan, Ukraine, and contested Gulf waterways could emerge in close succession, diverting the attention and resources of global powers, leaving smaller states like the UAE vulnerable to market and security instability."
      },
      {
        title: "Cyber and Infrastructure Attacks",
        description: "State-sponsored cyberattacks on critical infrastructure (e.g., energy grids, financial institutions) targeting multiple nations could disrupt global supply chains and paralyses critical sectors."
      },
      {
        title: "Naval Confrontations in Key Maritime Routes",
        description: "Aggressive naval posturing or accidents in the South China Sea or the Strait of Hormuz could prompt military engagements, blocking major trade arteries crucial for UAE energy exports and imports."
      },
      {
        title: "Weaponization of Space",
        description: "The destruction of critical satellites or military exercises targeting space assets could disable global communication networks and navigation systems, further destabilizing trade and financial systems."
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
const PathwaysSection_5_of_5 = () => {
    const [showCards, setShowCards] = useState(false);
    
    const pathways = [
      {
        title: "Selective U.S. Military Engagement",
        description: "While reducing overall troop presence, the U.S. could adopt a reactive posture, engaging militarily in response to crises that threaten energy supply chains or Israeli security. This could lead to sporadic interventions, contributing to unpredictability and volatility in the region."
      },
      {
        title: "Aggressive U.S. Trade Policies",
        description: "Unilateral sanctions, trade wars, or punitive tariffs targeting China and Iran could disrupt global markets, complicating UAE trade relationships and increasing volatility in energy markets."
      },
      {
        title: "Fractured Alliances and Multilateral Frameworks",
        description: "The Trump administration’s potential withdrawal from or renegotiation of NATO, the UN, and other multilateral frameworks could weaken global diplomatic cohesion, limiting the UAE’s ability to navigate international disputes through established institutions."
      },
      {
        title: "Iran-U.S. Proxy Tensions and Gulf Security Space",
        description: "Rather than large-scale engagements, the U.S. may rely on proxy actions or limited strikes targeting Iranian interests, contributing to heightened Gulf tensions without full-scale military involvement. This could impact maritime security and oil exports, affecting UAE economic stability."
      },
      {
        title: "Export Restrictions on Critical Technology and Defense Equipment",
        description: "The U.S. could impose export controls restricting the UAE’s access to critical resources, such as GPUs, advanced semiconductors, cloud services, and military/intelligence equipment. This could hinder the UAE’s technological advancement,"
      },
      {
        title: "Israel’s Aggressive Posture and Regional Realignment",
        description: "The Trump administration’s unwavering support for Israel may embolden Tel Aviv to adopt more aggressive policies towards Palestine and neighbouring countries. This could provoke backlash from regional actors such as Iran and potentially Saudi Arabia, accelerating a strategic realignment that brings former rivals closer. Such dynamics could undermine the Abraham Accords, straining UAE-Israel relations and complicating the UAE’s diplomatic balancing act. Increased Israeli assertiveness may destabilize broader regional alliances, potentially jeopardizing UAE’s economic interests and security cooperation."
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
        Power in Flux: Geopolitical Wildcards Reshaping the World
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
                Geopolitical shifts in 2025 are poised to significantly reshape global power dynamics, presenting both opportunities and threats to the UAE's strategic interests. The convergence of key developments—expanding BRICS influence, evolving Saudi-Iranian relations, intensifying flashpoint tensions, and the return of the Trump administration—highlights the complexity and interconnectedness of global affairs. These factors carry the potential to disrupt trade, destabilize energy markets, and recalibrate traditional alliances, underscoring the importance of foresight and adaptability in UAE foreign policy.
            </p>
            <p>
                Africa's emergence as a contested geopolitical battleground reflects the UAE's economic ambitions but also introduces rivalry with established powers like China and Russia. Similarly, BRICS' expansion and the bloc's pursuit of an alternative financial order risks exacerbating tensions with Western nations. Meanwhile, the evolving Saudi-Iran relationship, if formalized into deeper cooperation, could shift regional power balances, challenging UAE influence in Gulf affairs. The wildcard element of Israeli unpredictability — likely emboldened by renewed Trump-era support — further complicates the geopolitical landscape, raising the risk of fractures in existing accords and triggering regional realignments.
            </p>
            <p>
                Finally, the prospect of U.S. disengagement from the Gulf, coupled with selective military interventions and extreme emboldening of Israel, introduces additional volatility. This multipolar and fragmented environment underscores the need for the UAE to diversify alliances, expand technological capabilities, and pursue a balanced diplomatic approach to safeguard its economic growth and regional security. Addressing these wildcards requires comprehensive mitigation strategies that reinforce the UAE's position as a resilient and adaptive power in an increasingly unpredictable world.
            </p>
        </div>

      </CollapsibleSection>

























      {/* Scenario 1.1 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="1.1 Africa as a Geopolitical Battleground for UAE Expansion"
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
              The UAE's ambitious expansion into Africa, marked by nearly 356 billion AED in pledged investments by 2025, has solidified its position as the leading foreign investor on the continent. This strategy reflects the UAE's broader goal of economic diversification and influence projection. However, while these efforts unlock significant economic potential, they introduce non-traditional geopolitical risks that extend beyond standard competition for resources or influence.
            </p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Coordinated Pushback from Rival Powers</h3>
              <p className="text-gray-700">
                A potential and highly disruptive wildcard scenario involves the coordinated resistance of global powers—such as China, Russia, and key Western nations—aiming to limit or reverse the UAE's strategic gains in Africa. Although direct conflict is unlikely, the convergence of competing interests in Africa's resource-rich regions could spark indirect confrontations manifesting through economic, political, and proxy channels. This scenario poses severe risks to the UAE's long term investment security, regional influence, and diplomatic standing.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          
          <PathwaysSection_1_of_5 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased diplomatic engagements between African states and China/Russia resulting in exclusion or renegotiation of UAE investment agreements.",
                "Sharp spikes in localized unrest near major UAE infrastructure projects.",
                "Expansion of Chinese and Russian military cooperation agreements with African nations, signaling heightened geopolitical competition.",
                "Reports of Emirati firms facing sudden legal or regulatory challenges within African jurisdictions."
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
                  title: "Diplomatic Diversification",
                  description: "Enhance partnerships with multilateral African institutions, ensuring the UAE's engagement is perceived as mutually beneficial rather than adversarial."
                },
                {
                  title: "Coalition Building",
                  description: "Form strategic alliances with smaller yet influential African states to foster a network of mutual economic dependency, mitigating the leverage of global competitors."
                },
                {
                  title: "Narrative Control",
                  description: "Expand UAE-led public diplomacy efforts, highlighting the developmental benefits of Emirati projects, local job creation, and capacity-building initiatives."
                },
                {
                  title: "Security Investment",
                  description: "Increase investments in private security firms and partnerships with African military forces to safeguard key infrastructure from sabotage or localized instability."
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
              While the UAE's African expansion represents a cornerstone of its economic diversification, the threat of coordinated pushback from rival powers stands as a formidable wildcard scenario. By adopting proactive mitigation strategies and reinforcing its role as a stabilizing development partner, the UAE can reduce the likelihood and impact of these potential disruptions, securing its long-term interests on the continent.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>

























      {/* Scenario 1.2 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="1.2 The Unstoppable Rise of BRICS and Its Perception as a Threat on the World Stage"
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
            The United Arab Emirates (UAE) formally joined the BRICS
bloc on 1 January 2024, aligning with major emerging
economies—Brazil, Russia, India, China, and South
Africa—to enhance its global economic partnerships and
diversify its geopolitical alliances. BRICS has been actively
expanding its membership, with recent additions including
Egypt, Ethiopia, Iran, and Saudi Arabia. Notably, Indonesia
became the first Southeast Asian nation to join BRICS as a
full member in January 2025. This expansion reflects
BRICS' strategy to strengthen its influence as a
counterbalance to Western-dominated institutions.
However, the inclusion of certain nations could escalate
geopolitical tensions, particularly if countries with
adversarial relationships with Western powers are admitted. 
Beyond the expansion of membership, a significant concern
for Western powers lies in BRICS' potential creation of an
alternative currency to challenge the petrodollar and the
dominance of the US dollar in global markets. Such a move
would grant BRICS members considerable economic
leverage, potentially undermining Western financial systems
and reducing US and EU influence over international trade.
This fear of economic realignment, rather than the
expansion itself, drives much of the apprehension towards
BRICS' growth. The prospect of BRICS-led economic
pressure is perceived as a direct threat to the established
global financial order..</p>

          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Escalation of Geopolitical Tensions Due to BRICS Expansion</h3>
              <p className="text-gray-700">
              The admission of nations such as Iran and Venezuela into BRICS could be perceived by Western powers
as a direct challenge to their geopolitical interests. This perception may lead to increased diplomatic friction,
economic sanctions, or strategic realignments, potentially isolating BRICS members from Western
economies and creating a bifurcated global economic system.
While military alliances within BRICS remain speculative and largely absent from credible discourse, the
potential for economic confrontations is far more plausible. The incoming Trump administration is expected
to take a hardline stance, potentially using sanctions, trade wars, tariffs, and leveraging institutions like the
World Bank to block or constrain BRICS-aligned economies. Such measures, while framed as economic
safeguards, could serve to normalize adversarial actions against BRICS states under the guise of
preserving Western              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_2_of_5 />

          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Public announcements of BRICS initiatives to develop an alternative reserve currency.",
                "Escalating rhetoric from US and EU officials criticizing BRICS-aligned economies.",
                "Expansion of BRICS membership to include additional nations with contentious relationships with the West.",
                "Increased use of economic sanctions targeting BRICS-affiliated institutions or entities."
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
                  title: "Balanced Diplomatic Engagement",
                  description: "Proactively engage in dialogue with Western powers to address concerns and promote understanding of BRICS' objectives, emphasizing economic cooperation over confrontation."
                },
                {
                  title: "Economic Diversification",
                  description: "Broaden trade and investment portfolios to mitigate potential losses from Western retaliation, ensuring economic stability under shifting alliances."
                },
                {
                  title: "Narrative Control and Public Diplomacy",
                  description: "Emphasize the developmental and cooperative goals of BRICS, highlighting shared projects in sustainable energy, infrastructure, and poverty reduction to counter adversarial narratives."
                },
                {
                  title: "Multilateral Cooperation",
                  description: "Actively participate in multilateral forums that bridge both BRICS and Western nations, reinforcing the UAE’s role as a stabilizing force that mediates between competing global powers."
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
            While the UAE's membership in BRICS offers significant economic and strategic benefits, the bloc's
expansion and potential economic realignment pose complex geopolitical challenges. By maintaining a
neutral, cooperative stance and pursuing multilateral engagement, the UAE can balance its interests across
diverging economic spheres, mitigating the risks of escalating tensions.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>





































      {/* Scenario 1.3 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="1.3 Saudi Arabia and Iran Shock Alliance"
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
            The relationship between Saudi Arabia and Iran has
long been characterized by rivalry and competition,
often manifesting in proxy conflicts and regional
political tensions. However, recent diplomatic
overtures, facilitated by China, have led to a thaw in
relations, with both nations agreeing to restore ties and
pursue cooperation on economic and security fronts. A
potential strategic realignment between these two
regional powers would have profound implications for
the Middle East, particularly for the UAE.
While improved Saudi-Iranian relations could foster
regional stability, the wildcard scenario emerges from
the possibility of a deeper, formalized alliance that
shifts the balance of power in the Gulf. This could
marginalize the UAE’s regional influence, disrupt
energy markets, and alter military and intelligence
alliances. A reshaping of this alliance would build on
Iran's recent pipeline announcements with Qatar, and
shift the balance of power in the Gulf.</p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Formal Saudi-Iranian Security and Economic Alliance</h3>
              <p className="text-gray-700">
              A sudden and unprecedented deepening of Saudi-Iranian cooperation could reshape the Gulf’s political
landscape. If Saudi Arabia and Iran were to formalize an economic and security alliance, it could lead to
reduced reliance on UAE energy infrastructure and trade routes. This scenario might also prompt shifts in
regional alliances, potentially isolating the UAE or limiting its diplomatic maneuverability.</p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_3_of_5 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased high-level diplomatic visits and agreements between Saudi Arabia and Iran.",
                "Joint Saudi-Iranian announcements on infrastructure and energy projects bypassing UAE transit routes.",
                "Reports of joint military exercises or shared defense procurement.",
                "Escalating Saudi-Iranian cooperation within OPEC, aligning their production strategies.",
                "Saudi policy shifts suggesting greater tolerance or cooperation with Muslim Brotherhood-affiliated movements."
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
                  title: "Strengthened Regional Diplomacy",
                  description: "Expand diplomatic engagement with Saudi Arabia and Iran to ensure UAE interests are considered in any regional agreements. Promote trilateral dialogue frameworks to maintain relevance."
                },
                {
                  title: "Economic Diversification Building",
                  description: "Accelerate diversification of the UAE’s economy to reduce dependency on energy transit and develop sectors such as logistics, technology, and finance as key growth pillars."
                },
                {
                  title: "Security Partnerships",
                  description: "Enhance security cooperation with Western allies to solidify the UAE’s role as a critical regional player, balancing Saudi-Iranian rapprochement with strengthened military agreements."
                },
                {
                  title: "Infrastructure Expansion",
                  description: "Invest in alternative infrastructure projects that maintain the UAE’s role as a critical trade and energy hub, ensuring redundancy in response to any Saudi-Iranian bypass initiatives."
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
            A sudden Saudi-Iranian strategic shift presents a significant wildcard scenario that could reshape the Gulf’s
geopolitical environment. The UAE must adopt proactive mitigation strategies to protect its economic and
strategic interests, reinforcing its role as a stabilizing force and key interlocutor in the region.</p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>













      {/* Scenario 1.4 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="1.4 Collision of Flashpoints: Escalation Risks in a Multipolar World"
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
            Global geopolitical flashpoints are becoming increasingly
volatile, driven by intensifying competition between major
powers, the erosion of established red lines, and the rise of non-
state actors capable of disrupting international stability. For the
UAE, the risk lies not only in direct regional conflicts but also in
the ripple effects of escalations in Asia, Europe, and beyond.
Escalation risks are compounded by the proliferation of cyber
capabilities, economic coercion, and militarization of strategic
domains such as space and maritime chokepoints.
As tensions mount, the most disruptive wildcard scenario
involves simultaneous escalation across multiple flashpoints,
stretching the resources and diplomatic bandwidth of global
powers. This scenario could significantly disrupt energy markets,
trade flows, and international alliances, with direct consequences
for the UAE’s economic stability and national security.</p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">Multipolar Convergence of Flashpoint Escalations</h3>
              <p className="text-gray-700">
              A coordinated or coincidental series of escalations across flashpoints in the South China Sea, Eastern
Europe, and the Middle East could overwhelm existing mechanisms for crisis management. This scenario
would generate cascading economic shocks, disrupt shipping routes, and increase the likelihood of
miscalculation by regional actors.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_4_of_5 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Increased military deployments by NATO, China, and Russia in contested regions",
                "Sharp spikes in cyberattack incidents targeting energy and financial infrastructure.",
                "Breakdown of diplomatic negotiations in existing flashpoints (e.g., South China Sea, Ukraine).",
                "Reports of military exercises near critical shipping lanes and maritime chokepoints."
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
                  title: "Strategic Partnerships and Alliances",
                  description: "Enhance defense and trade agreements with key global powers to ensure protection and continuity of trade during geopolitical crises."
                },
                {
                  title: "Cyber Defense Expansion",
                  description: "Invest in advanced cyber defense capabilities and international cyber cooperation frameworks to mitigate the impact of coordinated attacks."
                },
                {
                  title: "Diversification of Energy Routes",
                  description: "Develop alternative energy export routes and expand maritime infrastructure to mitigate risks from regional conflicts or naval blockades."
                },
                {
                  title: "Space Resilience",
                  description: "Increase investments in satellite redundancy and secure space assets through partnerships with leading space-faring nations to safeguard communication and navigation networks."
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
            The convergence of multiple flashpoints presents one of the most severe wildcard scenarios facing the
UAE. Proactive engagement in international conflict resolution, technological resilience, and economic
diversification will be essential in mitigating the disruptive effects of escalating geopolitical tensions.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>










      {/* Scenario 1.5 */}
      <CollapsibleSection 
        icon={<Target className="text-blue-500" />}
        title="1.5 Trump’s Geopolitical Tsunami"
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
            The return of Donald Trump to the U.S.
presidency in 2025 signals a shift towards
isolationism, transactional diplomacy, and
unilateral decision-making. This pivot is
expected to disrupt global alliances, reshape
trade policies, and elevate tensions with major
powers such as China and Iran. For the UAE,
the wildcard scenario revolves around the
potential for abrupt U.S. policy reversals,
withdrawal from international agreements, and
aggressive economic nationalism.
The Trump administration’s emphasis on
‘America First’ policies, unpredictable foreign
engagements, and reduced U.S. involvement
in Middle Eastern security frameworks may
recalibrate the Gulf’s geopolitical landscape,
posing risks to long-standing defense
arrangements and economic partnerships.
            </p>
          </CollapsibleSection>

          {/* Wildcard Scenario */}
          <CollapsibleSection 
            icon={<AlertOctagon className="text-purple-500" />}
            title="Wildcard Scenario"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800">U.S. Strategic Disengagement and Targeted Engagement</h3>
              <p className="text-gray-700">
              A sudden U.S. military drawdown or disengagement from Gulf security frameworks could embolden
regional actors, creating a power vacuum that accelerates competition between Israel, Iran, and other
powers. However, disengagement may be selective, with the U.S. opting for targeted military actions or
economic measures to protect specific interests, such as oil routes or key regional partners, without
maintaining a permanent force presence. This dual-track approach could destabilize critical shipping lanes,
escalate regional conflicts, and expose the UAE to economic and security vulnerabilities.
              </p>
            </div>
          </CollapsibleSection>

          {/* Pathways */}
          {/* <PathwaysSection /> */}
          <PathwaysSection_5_of_5 />


          {/* Risk Indicators */}
          <CollapsibleSection 
            icon={<AlertTriangle className="text-red-500" />}
            title="Key Risk Indicators"
            defaultOpen={false}
          >
            <ul className="space-y-2">
              {[
                "Announcements regarding U.S. military repositioning or withdrawal from Gulf bases.",
                "Diplomatic rhetoric indicating U.S. disengagement from NATO, the UN, or other multilateral institutions.",
                "Escalation of U.S. sanctions targeting Iran and China, particularly in sectors critical to UAE trade.",
                "Increased military provocations or proxy activity between Iran and Gulf states.",
                "U.S. export control measures targeting critical technologies or military components destined for the UAE",
                "Expanded Israeli military operations in Palestine, Lebanon, Syria, Jordan, or against Iran-aligned entities"
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
                  title: "Enhanced Regional Security Cooperation",
                  description: "Strengthen bilateral and multilateral defense agreements with Saudi Arabia, Egypt, and other GCC partners to compensate for potential U.S. drawdowns."
                },
                {
                  title: "Diversification of Defense Partnerships",
                  description: "Expand military procurement and training with European, Chinese, and Russian defense contractors to reduce reliance on U.S. equipment and expertise."
                },
                {
                  title: "Technology Sovereignty and Industrial Development",
                  description: "Accelerate domestic technology development programs, focusing on semiconductor manufacturing, cloud infrastructure, and AI research to reduce dependence on U.S. technological imports."
                },
                {
                  title: "Economic Insulation Strategies",
                  description: "Develop broader trade agreements and alternative energy markets to reduce exposure to U.S. led economic conflicts."
                },
                {
                  title: "Diplomatic Mediation and Engagement",
                  description: "Position the UAE as a neutral mediator in U.S.- Iran tensions to de-escalate regional conflicts and preserve Gulf stability. Engage with Israel and regional actors to prevent unilateral actions from escalating."
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
            The return of the Trump administration introduces significant geopolitical uncertainty, with the potential for
strategic disengagement from the Gulf posing one of the most severe wildcard scenarios. The UAE must
proactively strengthen regional alliances, diversify defense partnerships, and expand diplomatic
engagements to safeguard its national interests in an increasingly unpredictable global environment.
            </p>
          </CollapsibleSection>
        </div>
      </CollapsibleSection>



























    </div>
  );
};

export default WildcardAnalysis;








