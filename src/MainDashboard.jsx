// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-gray-700">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200
//                 ${activeView === id ? 'bg-gray-800' : 'hover:bg-gray-800'}
//                 ${isExpanded ? 'gap-3' : 'justify-center'}`}
//             >
//               <Icon className="w-5 h-5 flex-shrink-0" />
//               {isExpanded && (
//                 <span className="text-sm">{label}</span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-gray-700">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;













// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-gray-900 transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-gray-700">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className="w-6 h-6 text-white" />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 text-white
//                 ${activeView === id ? 'bg-gray-800' : 'hover:bg-gray-800'}
//                 ${isExpanded ? 'gap-3' : 'justify-center'}`}
//             >
//               <Icon className="w-5 h-5 flex-shrink-0" />
//               {isExpanded && (
//                 <span className="text-sm">{label}</span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-gray-700">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;












// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-gray-700">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className="w-6 h-6 text-white" />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:bg-[#2a3447] hover:text-white'}
//                 ${isExpanded ? 'gap-3' : 'justify-center'}`}
//             >
//               <Icon className="w-5 h-5 flex-shrink-0" />
//               {isExpanded && (
//                 <span className="text-sm">{label}</span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-gray-700">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;














// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-[#2a3447] bg-transparent">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className="w-6 h-6 text-white" />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 bg-transparent
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:bg-[#2a3447] hover:text-white'}
//                 ${isExpanded ? 'gap-3' : 'justify-center'}`}
//             >
//               <Icon className="w-5 h-5 flex-shrink-0" />
//               {isExpanded && (
//                 <span className="text-sm">{label}</span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447] bg-transparent">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;





// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.2s ease-in-out forwards;
//           animation-delay: 0.2s;
//         }
//       `}</style>
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-[#2a3447] bg-transparent">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className="w-6 h-6 text-white" />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left bg-transparent relative
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:bg-[#2a3447] hover:text-white'}
//                 ${isExpanded ? 'gap-3' : ''}`}
//             >
//               <Icon className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isExpanded ? 'translate-x-0' : 'translate-x-[6px]'}`} />
//               {isExpanded && (
//                 <span className="text-sm opacity-0 animate-fade-in">
//                   {label}
//                 </span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto opacity-0 animate-fade-in" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447] bg-transparent">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;









// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.2s ease-in-out forwards;
//           animation-delay: 0.2s;
//         }
//       `}</style>
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-[#2a3447] bg-transparent">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white opacity-0 animate-fade-in">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className={`w-6 h-6 text-white transition-all duration-300 ${isExpanded ? 'translate-x-0' : 'translate-x-[6px]'}`} />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`w-full flex items-center px-4 py-3 text-left bg-transparent relative
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:bg-[#2a3447] hover:text-white'}
//                 ${isExpanded ? 'gap-3' : ''}`}
//             >
//               <Icon className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isExpanded ? 'translate-x-0' : 'translate-x-[6px]'}`} />
//               {isExpanded && (
//                 <span className="text-sm opacity-0 animate-fade-in">
//                   {label}
//                 </span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto opacity-0 animate-fade-in" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447] bg-transparent">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;








// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// // Import our existing components
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.2s ease-in-out forwards;
//           animation-delay: 0.2s;
//         }
//       `}</style>
//       <div className="flex flex-col h-full text-white">
//         <div className="p-4 border-b border-[#2a3447] bg-transparent">
//           {isExpanded ? (
//             <h2 className="text-sm font-semibold text-white opacity-0 animate-fade-in">UAE 2025 Analysis</h2>
//           ) : (
//             <Menu className={`w-6 h-6 text-white transition-all duration-300 ${isExpanded ? 'translate-x-0' : 'translate-x-[6px]'}`} />
//           )}
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveView(id)}
//               className="w-full h-12 flex items-center px-4 text-left bg-transparent relative"
//             >
//               <div className={`absolute transition-all duration-300 flex items-center
//                 ${activeView === id ? 'text-white' : 'text-[#8792a8]'}
//                 ${isExpanded ? 'translate-x-0' : 'translate-x-[6px]'}
//                 ${activeView === id && isExpanded ? 'bg-[#2a3447]' : 'hover:text-white'}`}
//               >
//                 <Icon className="w-5 h-5 flex-shrink-0" />
//               </div>
//               {isExpanded && (
//                 <span className="text-sm ml-8 opacity-0 animate-fade-in whitespace-nowrap">
//                   {label}
//                 </span>
//               )}
//               {isExpanded && activeView === id && (
//                 <ChevronRight className="w-4 h-4 ml-auto opacity-0 animate-fade-in" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447] bg-transparent">
//           {isExpanded && (
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;









// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';

// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-64' : 'w-16'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-[#2a3447]">
//           <div className="flex items-center">
//             <div className="w-12 flex justify-center">
//               <Menu className="w-6 h-6 text-white" />
//             </div>
//             <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//               <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Analysis</h2>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <div
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`h-12 flex items-center px-4 cursor-pointer
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
//             >
//               <div className="w-12 flex justify-center">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100 ml-2' : 'opacity-0 w-0 overflow-hidden'}`}>
//                 <span className="whitespace-nowrap">{label}</span>
//                 {activeView === id && <ChevronRight className="w-4 h-4 ml-2 inline" />}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447]">
//           <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-64' : 'ml-16'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;








// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';
// import LandingPage from './LandingPage';
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-72' : 'w-20'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-[#2a3447]">
//           <div className="flex items-center">
//             <div className="w-8 flex justify-start">
//               <Menu className="w-6 h-6 text-white" />
//             </div>
//             <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//               <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Analysis</h2>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <div
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`h-12 flex items-center px-4 cursor-pointer
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
//             >
//               <div className="w-8 flex justify-start">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className={`transition-opacity duration-300 flex items-center ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//                 <span className="whitespace-nowrap">{label}</span>
//                 {activeView === id && <ChevronRight className="w-4 h-4 ml-auto" />}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447]">
//           <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out
//           ${isExpanded ? 'ml-72' : 'ml-20'}`}
//       >
//         <div className="p-6">
//           <div className="bg-white rounded-lg shadow text-gray-900">
//             {renderActiveView()}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;








// import React, { useState } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';
// import LandingPage from './LandingPage';

// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-72' : 'w-20'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-[#2a3447]">
//           <div className="flex items-center">
//             <div className="w-8 flex justify-start">
//               <Menu className="w-6 h-6 text-white" />
//             </div>
//             <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//               <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Analysis</h2>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <div
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`h-12 flex items-center px-4 cursor-pointer
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
//             >
//               <div className="w-8 flex justify-start">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className={`transition-opacity duration-300 flex items-center ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//                 <span className="whitespace-nowrap">{label}</span>
//                 {activeView === id && <ChevronRight className="w-4 h-4 ml-auto" />}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447]">
//           <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//       />
      
//       <main 
//         className={`transition-all duration-300 ease-in-out snap-y snap-mandatory h-screen overflow-y-auto
//           ${isExpanded ? 'ml-72' : 'ml-20'}`}
//       >
//         <div className="snap-start">
//           <LandingPage />
//         </div>
//         <div className="snap-start">
//           <div className="min-h-screen p-6">
//             <div className="bg-white rounded-lg shadow text-gray-900">
//               {renderActiveView()}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;










// import React, { useState, useEffect } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';
// import LandingPage from './LandingPage';
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView, show }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-72' : 'w-20'}
//         ${show ? 'translate-x-0' : '-translate-x-full'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-[#2a3447]">
//           <div className="flex items-center">
//             <div className="w-8 flex justify-start">
//               <Menu className="w-6 h-6 text-white" />
//             </div>
//             <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//               <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Analysis</h2>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <div
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`h-12 flex items-center px-4 cursor-pointer
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
//             >
//               <div className="w-8 flex justify-start">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className={`transition-opacity duration-300 flex items-center ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//                 <span className="whitespace-nowrap">{label}</span>
//                 {activeView === id && <ChevronRight className="w-4 h-4 ml-auto" />}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447]">
//           <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const handleScroll = (e) => {
//       const scrollPosition = e.target.scrollTop;
//       setShowSidebar(scrollPosition > window.innerHeight / 2);
//     };

//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       mainContent.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (mainContent) {
//         mainContent.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//         show={showSidebar}
//       />
      
//       <main 
//         id="main-content"
//         className={`transition-all duration-300 ease-in-out snap-y snap-mandatory h-screen overflow-y-auto
//           ${showSidebar ? (isExpanded ? 'ml-72' : 'ml-20') : 'ml-0'}`}
//       >
//         <div className="snap-start">
//           <LandingPage />
//         </div>
//         <div className="snap-start">
//           <div className="min-h-screen p-6">
//             <div className="bg-white rounded-lg shadow text-gray-900">
//               {renderActiveView()}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;









// import React, { useState, useEffect } from 'react';
// import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight } from 'lucide-react';
// import LandingPage from './LandingPage';
// import RiskGrid from './RiskGrid';
// import PowerFluxAnalysis from './PowerFluxAnalysis';
// import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
// import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
// import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';

// const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView, show }) => {
//   const menuItems = [
//     { id: 'overview', label: 'Overview', icon: Menu },
//     { id: 'power', label: 'Power in Flux', icon: Globe2 },
//     { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
//     { id: 'security', label: 'Security & Infrastructure', icon: Shield },
//     { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown }
//   ];

//   return (
//     <div 
//       className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
//         ${isExpanded ? 'w-72' : 'w-20'}
//         ${show ? 'translate-x-0' : '-translate-x-full'}`}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b border-[#2a3447]">
//           <div className="flex items-center">
//             <div className="w-8 flex justify-start">
//               <Menu className="w-6 h-6 text-white" />
//             </div>
//             <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//               <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Analysis</h2>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <div
//               key={id}
//               onClick={() => setActiveView(id)}
//               className={`h-12 flex items-center px-4 cursor-pointer
//                 ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
//             >
//               <div className="w-8 flex justify-start">
//                 <Icon className="w-5 h-5" />
//               </div>
//               <div className={`transition-opacity duration-300 flex items-center ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//                 <span className="whitespace-nowrap">{label}</span>
//                 {activeView === id && <ChevronRight className="w-4 h-4 ml-auto" />}
//               </div>
//             </div>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-[#2a3447]">
//           <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
//             <div className="text-xs text-gray-400">
//               RESTRICTED
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [activeView, setActiveView] = useState('overview');
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const handleScroll = (e) => {
//       const scrollPosition = e.target.scrollTop;
//       setShowSidebar(scrollPosition > window.innerHeight / 2);
//     };

//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       mainContent.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (mainContent) {
//         mainContent.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const renderActiveView = () => {
//     switch (activeView) {
//       case 'overview':
//         return <RiskGrid />;
//       case 'power':
//         return <PowerFluxAnalysis />;
//       case 'tech':
//         return <TechDisruptionsAnalysis />;
//       case 'security':
//         return <SecurityInfrastructureAnalysis />;
//       case 'economic':
//         return <EconomicEnvironmentalAnalysis />;
//       default:
//         return <RiskGrid />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Sidebar 
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//         activeView={activeView}
//         setActiveView={setActiveView}
//         show={showSidebar}
//       />
      
//       <main 
//         id="main-content"
//         className="snap-y snap-mandatory h-screen overflow-y-auto w-full"
//       >
//         <div className="snap-start">
//           <LandingPage />
//         </div>
//         <div className="snap-start">
//           <div className="min-h-screen p-6">
//             <div className="bg-white rounded-lg shadow text-gray-900 max-w-6xl mx-auto">
//               {renderActiveView()}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainDashboard;










import React, { useState, useEffect } from 'react';
import { Menu, X, Globe2, Cpu, Shield, TrendingDown, ChevronRight, Mail, AlertTriangle } from 'lucide-react';
import LandingPage from './LandingPage';
import RiskGrid from './RiskGrid';
import PowerFluxAnalysis from './PowerFluxAnalysis';
import TechDisruptionsAnalysis from './TechDisruptionsAnalysis';
import SecurityInfrastructureAnalysis from './SecurityInfrastructureAnalysis';
import EconomicEnvironmentalAnalysis from './EconomicEnvironmentalAnalysis';
import ComplacencyInsights from './ComplacencyInsights';

import ContactDetails from './ContactDetails';


const Sidebar = ({ isExpanded, setIsExpanded, activeView, setActiveView, show }) => {
    const menuItems = [
        { id: 'overview', label: 'Overview', icon: Menu },
        { id: 'power', label: 'Power in Flux', icon: Globe2 },
        { id: 'tech', label: 'Technological Disruptions', icon: Cpu },
        { id: 'security', label: 'Security & Infrastructure', icon: Shield },
        { id: 'economic', label: 'Economic & Environmental', icon: TrendingDown },
        { id: 'complacency', label: 'Complacency Insights', icon: AlertTriangle },
        { id: 'contact', label: 'Contact Details', icon: Mail }
      ];

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-[#1a2234] transition-all duration-300 ease-in-out z-50
        ${isExpanded ? 'w-72' : 'w-20'}
        ${show ? 'translate-x-0' : '-translate-x-full'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-[#2a3447]">
          <div className="flex items-center">
            <div className="w-8 flex justify-start">
              <Menu className="w-6 h-6 text-white" />
            </div>
            <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
              <h2 className="text-sm font-semibold text-white whitespace-nowrap">UAE 2025 Wildcard Analysis</h2>
            </div>
          </div>
        </div>

        <nav className="flex-1 mt-4">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              onClick={() => setActiveView(id)}
              className={`h-12 flex items-center px-4 cursor-pointer
                ${activeView === id ? 'bg-[#2a3447] text-white' : 'text-[#8792a8] hover:text-white'}`}
            >
              <div className="w-8 flex justify-start">
                <Icon className="w-5 h-5" />
              </div>
              <div className={`transition-opacity duration-300 flex items-center ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                <span className="whitespace-nowrap">{label}</span>
                {activeView === id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-[#2a3447]">
          <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-xs text-gray-400">
              RESTRICTED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeView, setActiveView] = useState('overview');
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollPosition = e.target.scrollTop;
      setShowSidebar(scrollPosition > window.innerHeight / 2);
    };

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return <RiskGrid />;
      case 'power':
        return <PowerFluxAnalysis />;
      case 'tech':
        return <TechDisruptionsAnalysis />;
      case 'security':
        return <SecurityInfrastructureAnalysis />;
      case 'economic':
        return <EconomicEnvironmentalAnalysis />;
      case 'complacency':
        return <ComplacencyInsights />;
      case 'contact':
        return <ContactDetails />;
      default:
        return <RiskGrid />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Sidebar 
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        activeView={activeView}
        setActiveView={setActiveView}
        show={showSidebar}
      />
      
      <main 
        id="main-content"
        // className="snap-y snap-mandatory h-screen overflow-y-auto w-full"
        className="h-screen overflow-y-auto w-full"

      >
        <div className="snap-start">
          <LandingPage />
        </div>
        <div className="snap-start">
          <div className={`min-h-screen transition-all duration-300 ease-in-out
            ${showSidebar ? (isExpanded ? 'pl-72' : 'pl-20') : 'pl-0'}`}
          >
            <div className="p-6">
              <div className="bg-white rounded-lg shadow text-gray-900 mx-auto">
                {renderActiveView()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainDashboard;























