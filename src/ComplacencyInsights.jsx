import React, { useState } from 'react';
import {
  Clock,
  Share2,
  GitBranch,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield
} from 'lucide-react';

const ComplacencyInsights = () => {
  const [activeView, setActiveView] = useState('timeline');
  const [selectedElement, setSelectedElement] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const insights = {
    geopolitical: {
      title: "Geopolitical Convergence",
      severity: "CRITICAL",
      timeframe: "NEAR-TERM",
      description: "Global fragmentation affecting UAE infrastructure and ports",
      impacts: {
        direct: [
          "Energy infrastructure vulnerability",
          "Port system disruption",
          "Trade route interruption",
          "Regional influence reduction"
        ],
        cascading: [
          "Strategic asset devaluation",
          "Trade network disruption",
          "Infrastructure exposure"
        ]
      },
      connections: {
        affects: ["Energy Markets", "Space Threats"],
        affectedBy: ["Tech Monopoly"]
      }
    },
    techMonopoly: {
      title: "Tech Monopolization",
      severity: "SEVERE",
      timeframe: "IMMEDIATE",
      description: "AGI and quantum cryptography sovereignty risks",
      impacts: {
        direct: [
          "Financial system vulnerability",
          "Communication security risk",
          "AI resource limitation",
          "Strategic capability gap"
        ],
        cascading: [
          "Digital sovereignty loss",
          "Economic control diminishment",
          "Technology dependency"
        ]
      },
      connections: {
        affects: ["AI Conflict", "Geopolitical"],
        affectedBy: ["Energy Markets"]
      }
    },
    spaceThreats: {
      title: "Space Weaponization",
      severity: "HIGH",
      timeframe: "MID-TERM",
      description: "Critical orbital access disruption",
      impacts: {
        direct: [
          "Satellite communications disruption",
          "Navigation system failure",
          "Surveillance capability loss",
          "Trade monitoring impact"
        ],
        cascading: [
          "Economic activity disruption",
          "Security capability reduction",
          "Infrastructure vulnerability"
        ]
      },
      connections: {
        affects: ["AI Conflict", "Geopolitical"],
        affectedBy: ["Tech Monopoly"]
      }
    },
    aiConflict: {
      title: "AI-Driven Conflict",
      severity: "HIGH",
      timeframe: "NEAR-TERM",
      description: "Autonomous system escalation risks",
      impacts: {
        direct: [
          "Infrastructure system exposure",
          "Digital service disruption",
          "Financial network instability",
          "Automated response risks"
        ],
        cascading: [
          "System-wide failures",
          "Service interruption cascade",
          "Control system vulnerability"
        ]
      },
      connections: {
        affects: ["Space Threats", "Energy Markets"],
        affectedBy: ["Tech Monopoly"]
      }
    },
    energyMarkets: {
      title: "Energy Market Disruption",
      severity: "SEVERE",
      timeframe: "LONG-TERM",
      description: "Traditional energy market obsolescence",
      impacts: {
        direct: [
          "Energy sector transformation",
          "Market position erosion",
          "Strategic influence reduction",
          "Revenue stream disruption"
        ],
        cascading: [
          "Economic model collapse",
          "Development pathway loss",
          "Resource advantage reduction"
        ]
      },
      connections: {
        affects: ["Geopolitical", "Tech Monopoly"],
        affectedBy: ["AI Conflict"]
      }
    }
  };

  const severityColors = {
    "CRITICAL": "bg-red-100 text-red-800 border-red-200 hover:bg-red-50",
    "SEVERE": "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-50",
    "HIGH": "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-50",
    "MEDIUM": "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-50"
  };

  const CascadeEffect = () => (
    <div className="grid grid-cols-1 gap-4">
      {Object.entries(insights).map(([key, insight]) => (
        <div
          key={key}
          className={`
            bg-white rounded-lg shadow-lg transition-all duration-300
            ${expandedCard === key ? 'ring-2 ring-blue-500' : ''}
          `}
        >
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setExpandedCard(expandedCard === key ? null : key)}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{insight.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[insight.severity]}`}>
                    {insight.severity}
                  </span>
                </div>
                <p className="text-gray-600">{insight.description}</p>
              </div>
              {expandedCard === key ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {expandedCard === key && (
              <div className="mt-6 grid grid-cols-2 gap-6 animate-fadeIn">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Direct Impacts</h4>
                  <div className="space-y-2">
                    {insight.impacts.direct.map((impact, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                        <AlertTriangle size={16} className="text-amber-500 mt-1" />
                        <span className="text-sm">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Cascading Effects</h4>
                  <div className="space-y-2">
                    {insight.impacts.cascading.map((effect, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg">
                        <ArrowRight size={16} className="text-red-500 mt-1" />
                        <span className="text-sm">{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const ThreatWeb = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(insights).map(([key, insight]) => (
          <div 
            key={key}
            className={`p-4 rounded-lg border transition-all duration-300
              ${selectedElement === key ? 'ring-2 ring-blue-500' : ''}
              ${severityColors[insight.severity]}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">{insight.title}</h3>
              <span className="text-xs font-medium">{insight.severity}</span>
            </div>
            
            <div className="mt-4 space-y-4">
              {insight.connections.affects.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Affects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {insight.connections.affects.map((target, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {insight.connections.affectedBy.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Affected By:</h4>
                  <div className="flex flex-wrap gap-2">
                    {insight.connections.affectedBy.map((source, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );





//   const TimelineView = () => (
//     <div className="bg-white rounded-xl shadow-lg p-8">
//       <div className="relative">
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {["IMMEDIATE", "NEAR-TERM", "MID-TERM", "LONG-TERM"].map(frame => (
//             <div key={frame} className="text-center text-sm font-medium text-gray-600">
//               {frame}
//             </div>
//           ))}
//         </div>
//         <div className="border-t border-gray-200 relative py-12">
//           {Object.entries(insights).map(([key, insight]) => {
//             const timePosition = insight.timeframe === "IMMEDIATE" ? 12 :
//                                insight.timeframe === "NEAR-TERM" ? 37 :
//                                insight.timeframe === "MID-TERM" ? 62 :
//                                87;
            
//             const severityOffset = insight.severity === "CRITICAL" ? 0 :
//                                  insight.severity === "SEVERE" ? 30 :
//                                  insight.severity === "HIGH" ? 60 : 90;
            
//             return (
//               <div
//                 key={key}
//                 className={`
//                   absolute px-4 py-2 rounded-lg shadow-sm cursor-pointer
//                   transform -translate-x-1/2 border transition-all duration-300
//                   ${severityColors[insight.severity]}
//                   ${selectedElement === key ? 'ring-2 ring-blue-500' : ''}
//                 `}
//                 style={{
//                   left: `${timePosition}%`,
//                   top: `${severityOffset}px`
//                 }}
//                 onClick={() => setSelectedElement(selectedElement === key ? null : key)}
//               >
//                 <div className="text-sm font-medium whitespace-nowrap">{insight.title}</div>
//                 <div className="text-xs mt-1">{insight.severity}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );








// const TimelineView = () => {
//     const [openInsights, setOpenInsights] = useState([]);
  
//     // Define the order in which the timeframes appear (left → right)
//     const timeframes = ['IMMEDIATE', 'NEAR-TERM', 'MID-TERM', 'LONG-TERM'];
  
//     // Turn your insights object into an array so we can map them more easily.
//     const entries = Object.entries(insights); 
//     // For example, [ ['techMonopoly', {...}], ['geopolitical', {...}], ... ]
  
//     // We’ll use this helper to toggle a specific insight open or closed.
//     const toggleInsight = (key) => {
//       setOpenInsights((prev) =>
//         prev.includes(key)
//           ? prev.filter((item) => item !== key)
//           : [...prev, key]
//       );
//     };
  
//     return (
//       <div className="relative bg-white rounded-xl shadow-lg p-8">
//         {/* 1) Label row for the 4 timeframes */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {timeframes.map((frame) => (
//             <div key={frame} className="text-center text-sm font-medium text-gray-600">
//               {frame}
//             </div>
//           ))}
//         </div>
  
//         {/* 2) The timeline area */}
//         <div className="relative h-96">
//           {/* A horizontal rule in the vertical middle */}
//           <div className="absolute top-1/2 left-0 right-0 border-t border-gray-300" />
  
//           {/* 3) Show each insight as a node on the timeline */}
//           {entries.map(([key, insight]) => {
//             const { timeframe, severity } = insight;
  
//             // Find which index this timeframe is in [IMMEDIATE, NEAR-TERM, MID-TERM, LONG-TERM]
//             const timeframeIndex = timeframes.indexOf(timeframe);
//             // If it’s not found for some reason, fall back to the middle (50%)
//             const leftPercent =
//               timeframeIndex >= 0
//                 ? ((timeframeIndex + 0.5) * 100) / timeframes.length
//                 : 50;
  
//             // Find all insights that share this same timeframe
//             const siblings = entries.filter(
//               ([, i]) => i.timeframe === timeframe
//             );
//             // Which index is this particular insight among those siblings?
//             const itemIndex = siblings.findIndex(([k]) => k === key);
  
//             // We give each sibling a small vertical offset so they don’t overlap.
//             // For instance, if there are 2 items in NEAR-TERM, one is offset up
//             // and the other offset down from the centre line.
//             const count = siblings.length;
//             const spacing = 60; // how many px to separate each item vertically
//             // The “middle” item stays on the centre line, the others stack above & below.
//             const mid = Math.floor(count / 2);
//             // e.g., if there are 3 siblings, their itemIndexes are 0,1,2 => offsetIndex = -1,0,+1
//             // We’ll multiply offsetIndex * spacing to spread them out
//             let offsetIndex = itemIndex - mid;
  
//             // If count is even, you might want to do half-step offsets. Example:
//             // if there are 2 items, itemIndex=0 => offset=-0.5, itemIndex=1 => offset=+0.5
//             // Then multiply that by spacing. But for simplicity, we’ll keep integer steps.
//             // If you prefer half-steps for even counts, uncomment the line below:
//             // if (count % 2 === 0) offsetIndex += 0.5;
  
//             const verticalOffset = offsetIndex * spacing;
  
//             const isOpen = openInsights.includes(key);
  
//             return (
//               <div key={key}>
//                 {/* The clickable node */}
//                 <div
//                   className={`
//                     absolute flex items-center justify-center rounded-full
//                     cursor-pointer border-2 border-white shadow
//                     transition-transform duration-300
//                     hover:scale-110
//                     ${severityColors[severity]}
//                   `}
//                   style={{
//                     width: '48px',
//                     height: '48px',
//                     left: `${leftPercent}%`,
//                     top: `calc(50% + ${verticalOffset}px)`,
//                     transform: 'translate(-50%, -50%)',
//                   }}
//                   onClick={() => toggleInsight(key)}
//                 >
//                   {/* For instance, 'S' for SEVERE, 'C' for CRITICAL, 'H' for HIGH, etc. */}
//                   <span className="text-sm font-bold uppercase">
//                     {severity.charAt(0)}
//                   </span>
//                 </div>
  
//                 {/* The pop‐up, if open */}
//                 {isOpen && (
//                   <>
//                     {/* The small vertical connecting line */}
//                     <div
//                       className="absolute border-l-2 border-gray-300"
//                       style={{
//                         left: `${leftPercent}%`,
//                         // Start at the node’s centre
//                         top: `calc(50% + ${verticalOffset}px)`,
//                         // For example: a 100px connector line above the node
//                         height: '100px',
//                         // If you want it below, adjust top/height or do negative top
//                         transform: 'translate(-50%, 0)',
//                       }}
//                     />
//                     {/* The pop‐up container */}
//                     <div
//                       className="absolute w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-gray-700"
//                       style={{
//                         // Same left so it aligns horizontally
//                         left: `${leftPercent}%`,
//                         // Appear above the node by 100px + half the node height
//                         top: `calc(50% + ${verticalOffset}px - 100px)`,
//                         transform: 'translate(-50%, -100%)',
//                       }}
//                     >
//                       {/* Close button */}
//                       <button
//                         className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//                         onClick={() => toggleInsight(key)}
//                       >
//                         ✕
//                       </button>
  
//                       {/* Original content: title, description, etc. */}
//                       <h3 className="font-bold text-lg mb-2">{insight.title}</h3>
//                       <p className="text-sm text-gray-600 mb-2">
//                         {insight.description}
//                       </p>
  
//                       <div className="flex gap-2 items-center mb-4">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[severity]}`}
//                         >
//                           {severity}
//                         </span>
//                         <span className="text-xs text-gray-400">{timeframe}</span>
//                       </div>
  
//                       {/* Direct Impacts */}
//                       <div className="mb-2">
//                         <h4 className="font-semibold mb-1">Direct Impacts</h4>
//                         <ul className="list-disc list-inside text-sm text-gray-600">
//                           {insight.impacts.direct.map((impact, idx) => (
//                             <li key={idx}>{impact}</li>
//                           ))}
//                         </ul>
//                       </div>
  
//                       {/* Cascading Effects */}
//                       <div>
//                         <h4 className="font-semibold mb-1">Cascading Effects</h4>
//                         <ul className="list-disc list-inside text-sm text-gray-600">
//                           {insight.impacts.cascading.map((effect, idx) => (
//                             <li key={idx}>{effect}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };







// const TimelineView = () => {
//     const [openInsights, setOpenInsights] = useState([]);
  
//     // The ordered timeframes along the timeline (left to right)
//     const timeframes = ['IMMEDIATE', 'NEAR-TERM', 'MID-TERM', 'LONG-TERM'];
  
//     // Convert insights object to an array, e.g. [ [key, data], [key, data] ... ]
//     const entries = Object.entries(insights);
  
//     // Toggle an insight open/closed
//     const toggleInsight = (key) => {
//       setOpenInsights((prev) =>
//         prev.includes(key)
//           ? prev.filter((item) => item !== key)
//           : [...prev, key]
//       );
//     };
  
//     return (
//       <div className="relative bg-white rounded-xl shadow-lg p-8">
  
//         {/* (1) Label row for timeframes */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {timeframes.map((frame) => (
//             <div key={frame} className="text-center text-sm font-medium text-gray-600">
//               {frame}
//             </div>
//           ))}
//         </div>
  
//         {/* (2) The timeline area */}
//         <div className="relative h-96">
//           {/* Central horizontal line */}
//           <div className="absolute top-1/2 left-0 right-0 border-t border-gray-300" />
  
//           {/* (3) Map each insight to a node on the timeline */}
//           {entries.map(([key, insight]) => {
//             const { timeframe, severity } = insight;
  
//             // Which position (left %) should this timeframe appear?
//             const timeframeIndex = timeframes.indexOf(timeframe);
//             // Fall back to middle if not found
//             const leftPercent =
//               timeframeIndex >= 0
//                 ? ((timeframeIndex + 0.5) * 100) / timeframes.length
//                 : 50;
  
//             // Is this node’s pop‐up currently open?
//             const isOpen = openInsights.includes(key);
  
//             return (
//               <div key={key}>
//                 {/* The node on the timeline */}
//                 <div
//                   className={`
//                     absolute flex items-center justify-center 
//                     w-12 h-12 rounded-full
//                     cursor-pointer border-2 border-white shadow
//                     hover:scale-105 transition-transform
//                     ${severityColors[severity]}
//                   `}
//                   style={{
//                     left: `${leftPercent}%`,
//                     top: '50%',
//                     transform: 'translate(-50%, -50%)',
//                   }}
//                   onClick={() => toggleInsight(key)}
//                 >
//                   {/* E.g. "S" for SEVERE, "C" for CRITICAL, etc. */}
//                   <span className="text-sm font-bold uppercase">
//                     {severity.charAt(0)}
//                   </span>
//                 </div>
  
//                 {/* (4) If open, render the pop‐up below the line, stacked */}
//                 {isOpen && <OpenPopUp keyName={key} insight={insight} leftPercent={leftPercent} openInsights={openInsights} />}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };
  
//   /**
//    * A separate component that:
//    * - Finds how many open insights share the same timeframe
//    * - Positions them stacked below the line so they do not overlap
//    * - Renders a vertical connector + the pop‐up box
//    */
//   const OpenPopUp = ({ keyName, insight, leftPercent, openInsights }) => {
//     const { timeframe, severity, title, description, impacts } = insight;
  
//     // Access the total set of open insights that share this timeframe
//     const openSameFrame = openInsights.filter(
//       (k) => insights[k].timeframe === timeframe
//     );
//     // Sort them so we have a stable stacking order (optional)
//     // e.g. by the alphabetical key
//     openSameFrame.sort();
  
//     // Index of this insight among the open ones for that timeframe
//     const popUpIndex = openSameFrame.indexOf(keyName);
  
//     // We'll define a base distance from the timeline to the first pop‐up
//     // plus additional spacing per subsequent open insight in the same timeframe
//     const baseDistance = 40;
//     const spacing = 160; // vertical spacing between each stacked pop‐up
  
//     // The total vertical offset for the connector line & pop‐up
//     const verticalOffset = baseDistance + popUpIndex * spacing;
  
//     // The line extends from the node to the bottom edge of the pop‐up
//     // But let's keep it simple and just have a fixed line length that meets the top of the box.
//     // We'll do that by setting the line's height to match verticalOffset
//     const lineLength = verticalOffset;
  
//     // Position the pop‐up itself at the bottom of that line
//     const popUpTop = `calc(50% + ${lineLength}px)`;
  
//     // We'll remove the black background behind the “✕” by styling the button
//     const closePopUp = () => {
//       // Because we’re in a child, we must toggle from here:
//       // We can either pass down a toggling function or do a custom event
//       // For simplicity, let's do a custom event approach:
//       const closeEvent = new CustomEvent('close-insight', { detail: keyName });
//       window.dispatchEvent(closeEvent);
//     };
  
//     // We need to listen in the parent for "close-insight" and toggle it. 
//     // We'll do that by hooking into an effect in the parent or we can pass the toggle function as props. 
//     // For clarity, let's pass it from the parent so we don't need a global event.
//     // But the user code didn't do that. Let's revise so we have a simpler approach:
//     // We'll simply pass a "toggleInsight" function from the parent. That was easier.
  
//     return (
//       <>
//         {/* The vertical connector line */}
//         <div
//           className="absolute border-l-2 border-gray-300"
//           style={{
//             left: `${leftPercent}%`,
//             top: '50%',
//             height: `${lineLength}px`,
//             transform: 'translateX(-50%)',
//           }}
//         />
  
//         {/* The pop‐up box below the timeline */}
//         <PopUpBox
//           top={popUpTop}
//           leftPercent={leftPercent}
//           severity={severity}
//           title={title}
//           description={description}
//           impacts={impacts}
//           keyName={keyName}
//         />
//       </>
//     );
//   };
  
//   /**
//    * The actual box content, with a close button that has no black background.
//    * For the sake of demonstration, we do require the parent to pass a `toggleInsight` prop
//    * or something similar so we can close. 
//    * 
//    * We'll show it inline here with a simple "✕" button that doesn't have a black box.
//    */
//   const PopUpBox = ({ top, leftPercent, severity, title, description, impacts, keyName }) => {
//     // We might again need a function from the parent to close. 
//     // For brevity, let's just show how to style the button. We'll assume we can call
//     // `toggleInsight` via a global or context or something. For demonstration:
//     const toggleInsight = (key) => {
//       // This is a placeholder. In your real code,
//       // pass down the toggle function from the parent.
//     };
  
//     return (
//       <div
//         className="absolute w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-gray-700"
//         style={{
//           left: `${leftPercent}%`,
//           top: top,
//           transform: 'translate(-50%, 0)',
//         }}
//       >
//         <button
//           onClick={() => toggleInsight(keyName)}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600
//                      bg-transparent border-none p-0 cursor-pointer"
//           aria-label="Close"
//         >
//           ✕
//         </button>
  
//         <h3 className="font-bold text-lg mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 mb-2">{description}</p>
  
//         <div className="flex gap-2 items-center mb-4">
//           <span
//             className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[severity]}`}
//           >
//             {severity}
//           </span>
//           <span className="text-xs text-gray-400">{insights[keyName].timeframe}</span>
//         </div>
  
//         <div className="mb-2">
//           <h4 className="font-semibold mb-1">Direct Impacts</h4>
//           <ul className="list-disc list-inside text-sm text-gray-600">
//             {impacts.direct.map((impact, idx) => (
//               <li key={idx}>{impact}</li>
//             ))}
//           </ul>
//         </div>
  
//         <div>
//           <h4 className="font-semibold mb-1">Cascading Effects</h4>
//           <ul className="list-disc list-inside text-sm text-gray-600">
//             {impacts.cascading.map((effect, idx) => (
//               <li key={idx}>{effect}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
  
  






const TimelineView = () => {
    const [openInsights, setOpenInsights] = useState([]);
  
    const timeframes = ['IMMEDIATE', 'NEAR-TERM', 'MID-TERM', 'LONG-TERM'];
    const entries = Object.entries(insights);
  
    const toggleInsight = (key) => {
      setOpenInsights((prev) =>
        prev.includes(key)
          ? prev.filter((item) => item !== key)
          : [...prev, key]
      );
    };
  
    return (
      <div
        className="relative bg-white rounded-xl shadow-lg p-8 overflow-visible"
        style={{ minHeight: '700px' }} // Give plenty of vertical space
      >
        {/* Timeframe labels */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {timeframes.map((frame) => (
            <div key={frame} className="text-center text-sm font-medium text-gray-600">
              {frame}
            </div>
          ))}
        </div>
  
        {/* Timeline container: remove the fixed h-96 to allow it to expand */}
        <div className="relative w-full" style={{ minHeight: '500px' }}>
          {/* Position the line somewhat higher (30% from the top) */}
          <div
            className="absolute left-0 right-0 border-t border-gray-300"
            style={{ top: '30%' }}
          />
  
          {/* Render each insight */}
          {entries.map(([key, insight]) => {
            const { timeframe, severity, title, description, impacts } = insight;
            const timeframeIndex = timeframes.indexOf(timeframe);
            const leftPercent =
              timeframeIndex >= 0
                ? ((timeframeIndex + 0.5) * 100) / timeframes.length
                : 50;
  
            const isOpen = openInsights.includes(key);
  
            return (
              <div key={key}>
                {/* The timeline node */}
                <div
                  className={`
                    absolute flex items-center justify-center 
                    w-12 h-12 rounded-full cursor-pointer border-2 border-white shadow
                    hover:scale-105 transition-transform
                    ${severityColors[severity]}
                  `}
                  style={{
                    left: `${leftPercent}%`,
                    // Place it at 30% from the top so it sits on the line
                    top: '30%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => toggleInsight(key)}
                >
                  {/* Severity initial, e.g. 'S' for SEVERE */}
                  <span className="text-sm font-bold uppercase">
                    {severity.charAt(0)}
                  </span>
                </div>
  
                {/* Pop‐up below if open */}
                {isOpen && (
                  <PopUpBelow
                    keyName={key}
                    insight={insight}
                    toggleInsight={toggleInsight}
                    leftPercent={leftPercent}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  /** 
   * A separate component that positions the pop‐up below the line 
   * and connects it with a vertical line.
   */
  const PopUpBelow = ({ keyName, insight, toggleInsight, leftPercent }) => {
    const { timeframe, severity, title, description, impacts } = insight;
  
    // Hard‐coded distance from the timeline to the box
    const connectorLength = 60; 
    // You could also do a stacking approach if multiple items in the same timeframe are open.
  
    return (
      <>
        {/* The vertical line dropping down from the node */}
        <div
          className="absolute border-l-2 border-gray-300"
          style={{
            left: `${leftPercent}%`,
            top: '30%', // same as node
            height: `${connectorLength}px`,
            transform: 'translateX(-50%)',
          }}
        />
  
        {/* The pop‐up itself */}
        <div
          className="absolute w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-gray-700"
          style={{
            left: `${leftPercent}%`,
            // Place it below the connector
            top: `calc(30% + ${connectorLength}px)`,
            transform: 'translate(-50%, 0)',
          }}
        >
          {/* Close button: no black box */}
          <button
            className="absolute top-2 right-2 bg-transparent text-gray-400 hover:text-gray-600
                       p-0 border-none cursor-pointer"
            onClick={() => toggleInsight(keyName)}
            aria-label="Close pop-up"
          >
            ✕
          </button>
  
          {/* Original content */}
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
  
          <div className="flex gap-2 items-center mb-4">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[severity]}`}
            >
              {severity}
            </span>
            <span className="text-xs text-gray-400">{timeframe}</span>
          </div>
  
          {/* Direct Impacts */}
          <div className="mb-2">
            <h4 className="font-semibold mb-1">Direct Impacts</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {impacts.direct.map((impact, idx) => (
                <li key={idx}>{impact}</li>
              ))}
            </ul>
          </div>
  
          {/* Cascading Effects */}
          <div>
            <h4 className="font-semibold mb-1">Cascading Effects</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {impacts.cascading.map((effect, idx) => (
                <li key={idx}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };
  












  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Insights Into the Cost of Complacency</h1>
        <h2 className="text-xl text-gray-600">
          Mapping Critical Threats and Cascading Effects
        </h2>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {[
          { id: 'timeline', icon: Clock, label: 'Risk Timeline' },
          { id: 'web', icon: Share2, label: 'Threat Web' },
          { id: 'cascade', icon: GitBranch, label: 'Cascade Effect' }
        ].map(view => (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-all
              ${activeView === view.id 
                ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-500'
                : 'bg-white hover:bg-gray-50'}
            `}
          >
            <view.icon size={18} />
            <span>{view.label}</span>
          </button>
        ))}
      </div>

      {activeView === 'timeline' && <TimelineView />}
      {activeView === 'web' && <ThreatWeb />}
      {activeView === 'cascade' && <CascadeEffect />}

      <div className="mt-8 p-4 bg-gray-900 text-white rounded-lg">
        <p className="text-center font-semibold">
          "The convergence of multiple threats creates compounding risks that require immediate strategic response."
        </p>
      </div>
    </div>
  );
};

export default ComplacencyInsights;


























