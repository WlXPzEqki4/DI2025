// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#1a2234] text-white relative">
//       <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-6xl font-bold mb-8">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-2xl text-gray-300 mb-12">Wildcard Scenarios for the UAE</h2>
//         <p className="max-w-2xl text-lg text-gray-400 mb-12">
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div className="mt-12 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-gray-400" />
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-8">
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;





// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col relative overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src="/assets/background.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-6xl font-bold mb-8 text-white">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-2xl text-gray-300 mb-12">Wildcard Scenarios for the UAE</h2>
//         <p className="max-w-2xl text-lg text-gray-400 mb-12">
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div className="mt-12 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-gray-400" />
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-8 z-20">
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;








// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-6xl font-bold mb-8 text-white">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-2xl text-gray-300 mb-12">Wildcard Scenarios for the UAE</h2>
//         <p className="max-w-2xl text-lg text-gray-400 mb-12">
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div className="mt-12 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-gray-400" />
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-8 z-20">
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;






// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]"> {/* Added dark background */}
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-6xl font-bold mb-8 text-white">2025's Most Dangerous Ideas</h1>
//         <h2 className="text-2xl text-gray-300 mb-12">Wildcard Scenarios for the UAE</h2>
//         <p className="max-w-2xl text-lg text-gray-400 mb-12">
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div className="mt-12 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-gray-400" />
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-8 z-20">
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;










// import React, { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 
//           className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform
//             ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//         >
//           2025's Most Dangerous Ideas
//         </h1>
        
//         <h2 
//           className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
//             ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
//         >
//           Wildcard Scenarios for the UAE
//         </h2>
        
//         <p 
//           className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div 
//           className={`mt-12 transition-all duration-1000 delay-600 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
//         >
//           <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
//         </div>
//       </div>

//       <div 
//         className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
//           ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



// import React, { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const LandingPage = () => {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleScroll = () => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       const nextPage = mainContent.querySelector('.snap-start:nth-child(2)');
//       if (nextPage) {
//         nextPage.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 
//           className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform
//             ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//         >
//           2025's Most Dangerous Ideas
//         </h1>
        
//         <h2 
//           className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
//             ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
//         >
//           Wildcard Scenarios for the UAE
//         </h2>
        
//         <p 
//           className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>
        
//         <div 
//           className={`mt-12 transition-all duration-1000 delay-600 transform cursor-pointer
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
//           onClick={handleScroll}
//           role="button"
//           aria-label="Scroll to content"
//         >
//           <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
//         </div>
//       </div>

//       <div 
//         className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
//           ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;











// import React, { useEffect, useState } from 'react';
// import { ChevronDown, AlertCircle } from 'lucide-react';

// const LandingPage = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [showSecondaryContent, setShowSecondaryContent] = useState(false);

//   useEffect(() => {
//     // First wave of animations
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     // Second wave of animations - starts after first wave completes
//     const secondaryTimer = setTimeout(() => {
//       setShowSecondaryContent(true);
//     }, 2000); // 500ms initial delay + 1000ms for first animations + 500ms pause

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(secondaryTimer);
//     };
//   }, []);

//   const handleScroll = () => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       const nextPage = mainContent.querySelector('.snap-start:nth-child(2)');
//       if (nextPage) {
//         nextPage.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Primary Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 
//           className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform
//             ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//         >
//           2025's Most Dangerous Ideas
//         </h1>
        
//         <h2 
//           className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
//             ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
//         >
//           Wildcard Scenarios for the UAE
//         </h2>
        
//         <p 
//           className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>

//         {/* Second Wave Content */}
//         {/* <div className={`absolute top-12 right-12 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//           <div className="flex items-center gap-2 text-red-500">
//             <AlertCircle className="w-5 h-5" />
//             <span className="text-sm font-semibold">HIGH PRIORITY</span>
//           </div>
//         </div> */}

//         <div className={`absolute top-12 left-12 transition-all duration-1000 delay-200 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
//           <div className="text-left">
//             <div className="text-gray-400 text-sm">DOCUMENT ID</div>
//             <div className="text-white text-md font-mono">UAE-2025-578798</div>
//           </div>
//         </div>
        
//         <div 
//           className={`mt-12 transition-all duration-1000 delay-600 transform cursor-pointer
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
//           onClick={handleScroll}
//           role="button"
//           aria-label="Scroll to content"
//         >
//           <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
//         </div>
//       </div>

//       <div 
//         className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
//           ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>

//       {/* Additional Second Wave Content */}
//       <div 
//         className={`absolute bottom-8 right-8 z-20 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//       >
//         <div className="text-sm text-gray-400 text-right">
//           09 January 2025
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;










// import React, { useEffect, useState } from 'react';
// import { ChevronDown, AlertCircle } from 'lucide-react';

// const LandingPage = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [showSecondaryContent, setShowSecondaryContent] = useState(false);

//   useEffect(() => {
//     // First wave of animations
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     // Second wave of animations - starts after first wave completes
//     const secondaryTimer = setTimeout(() => {
//       setShowSecondaryContent(true);
//     }, 2000); // 500ms initial delay + 1000ms for first animations + 500ms pause

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(secondaryTimer);
//     };
//   }, []);

//   const handleScroll = () => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       const nextPage = mainContent.querySelector('.snap-start:nth-child(2)');
//       if (nextPage) {
//         nextPage.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Primary Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 
//           className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform
//             ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//         >
//           2025's Most Dangerous Ideas
//         </h1>
        
//         <h2 
//           className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
//             ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
//         >
//           Wildcard Scenarios for the UAE
//         </h2>
        
//         <p 
//           className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>

//         {/* Second Wave Content */}
//         <div className={`absolute top-12 right-12 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//           <div className="flex items-center gap-2 text-red-500">
//             <AlertCircle className="w-5 h-5" />
//             <span className="text-sm font-semibold">HIGH PRIORITY</span>
//           </div>
//         </div>

//         <div className={`absolute top-12 left-12 transition-all duration-1000 delay-200 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
//           <div className="text-left">
//             <div className="text-gray-400 text-sm">DOCUMENT ID</div>
//             <div className="text-white text-md font-mono">UAE-2025-578798</div>
//           </div>
//         </div>
        
//         <div 
//           className={`mt-12 transition-all duration-1000 delay-600 transform cursor-pointer
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
//           onClick={handleScroll}
//           role="button"
//           aria-label="Scroll to content"
//         >
//           <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
//         </div>
//       </div>

//       <div 
//         className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
//           ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>

//       {/* Additional Second Wave Content */}
//       <div 
//         className={`absolute bottom-8 right-8 z-20 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//       >
//         <div className="text-sm text-gray-400 text-right">
//           09 January 2025
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

















// import React, { useEffect, useState } from 'react';
// import { ChevronDown, AlertCircle } from 'lucide-react';

// const LandingPage = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [showSecondaryContent, setShowSecondaryContent] = useState(false);

//   useEffect(() => {
//     // First wave of animations
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 500);

//     // Second wave of animations - starts after first wave completes
//     const secondaryTimer = setTimeout(() => {
//       setShowSecondaryContent(true);
//     }, 2000); // 500ms initial delay + 1000ms for first animations + 500ms pause

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(secondaryTimer);
//     };
//   }, []);

//   const handleScroll = () => {
//     const mainContent = document.getElementById('main-content');
//     if (mainContent) {
//       const nextPage = mainContent.querySelector('.snap-start:nth-child(2)');
//       if (nextPage) {
//         nextPage.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a]">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           defaultMuted
//           preload="auto"
//           className="w-full h-full object-cover"
//           style={{ minWidth: '100vw', minHeight: '100vh' }}
//         >
//           <source src="/assets/background_2.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Primary Content */}
//       <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 
//           className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform relative
//             ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//         >
//           2025's Most Dangerous Ideas
//           <div className={`absolute -top-4 right-0 transition-all duration-1000 transform delay-1000
//             ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}>
//             <div className="relative h-3 flex justify-end">
//               {/* Front piece of the bar */}
//               <div 
//                 className={`h-full bg-[#E85C3F] w-12 transition-all duration-500
//                   ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}
//               />
//               {/* Back piece of the bar - delayed */}
//               <div 
//                 className={`h-full bg-[#E85C3F] w-12 transition-all duration-500 delay-300
//                   ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}
//               />
//             </div>
//           </div>
//         </h1>
        
//         <h2 
//           className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
//             ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
//         >
//           Wildcard Scenarios for the UAE
//         </h2>
        
//         <p 
//           className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//         >
//           A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
//         </p>

//         {/* Second Wave Content */}
//         {/* <div className={`absolute top-12 right-12 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//           <div className="flex items-center gap-2 text-red-500">
//             <AlertCircle className="w-5 h-5" />
//             <span className="text-sm font-semibold">HIGH PRIORITY</span>
//           </div>
//         </div> */}

//         <div className={`absolute top-12 left-12 transition-all duration-1000 delay-200 transform
//           ${showSecondaryContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
//           <div className="text-left">
//             <div className="text-gray-400 text-sm">DOCUMENT ID</div>
//             <div className="text-white text-md font-mono">UAE-2025-578798</div>
//           </div>
//         </div>
        
//         <div 
//           className={`mt-12 transition-all duration-1000 delay-600 transform cursor-pointer
//             ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
//           onClick={handleScroll}
//           role="button"
//           aria-label="Scroll to content"
//         >
//           <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
//         </div>
//       </div>

//       <div 
//         className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
//           ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <div className="text-sm text-gray-500">
//           RESTRICTED
//         </div>
//       </div>

//       {/* Additional Second Wave Content */}
//       <div 
//         className={`absolute bottom-8 right-8 z-20 transition-all duration-1000 transform
//           ${showSecondaryContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
//       >
//         <div className="text-sm text-gray-400 text-right">
//           09 January 2025
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;











import React, { useEffect, useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showSecondaryContent, setShowSecondaryContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    const secondaryTimer = setTimeout(() => {
      setShowSecondaryContent(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(secondaryTimer);
    };
  }, []);

  const handleScroll = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      const nextPage = mainContent.querySelector('.snap-start:nth-child(2)');
      if (nextPage) {
        nextPage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen w-screen relative overflow-hidden bg-[#1a1a1a] font-['Futura_Bold',_'Helvetica_Neue_Bold',_'Arial_Bold',_sans-serif]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          defaultMuted
          preload="auto"
          className="w-full h-full object-cover"
          style={{ minWidth: '100vw', minHeight: '100vh' }}
        >
          <source src="/assets/background_2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Primary Content */}
      <div className="relative z-20 min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
        <h1 
          className={`text-6xl font-bold mb-8 text-white transition-all duration-1000 transform relative
            ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
          2025's Most Dangerous Ideas
          <div className={`absolute -top-4 right-0 transition-all duration-1000 transform delay-1000
            ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative h-3 flex justify-end">
              <div 
                className={`h-full bg-[#E85C3F] w-12 transition-all duration-500
                  ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}
              />
              <div 
                className={`h-full bg-[#E85C3F] w-12 transition-all duration-500 delay-300
                  ${showSecondaryContent ? 'translate-x-0' : 'translate-x-full'}`}
              />
            </div>
          </div>
        </h1>
        
        <h2 
          className={`text-2xl text-gray-300 mb-12 transition-all duration-1000 delay-200 transform
            ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          Wildcard Scenarios for the UAE
        </h2>
        
        <p 
          className={`max-w-2xl text-lg text-gray-400 mb-12 transition-all duration-1000 delay-400 transform
            ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          A comprehensive analysis of emerging threats and opportunities that could reshape the strategic landscape of the UAE in 2025.
        </p>

        <div className={`absolute top-12 left-12 transition-all duration-1000 delay-200 transform
          ${showSecondaryContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="text-left">
            <div className="text-gray-400 text-sm">DOCUMENT ID</div>
            <div className="text-white text-md font-mono">UAE-2025-578798</div>
          </div>
        </div>
        
        <div 
          className={`mt-12 transition-all duration-1000 delay-600 transform cursor-pointer
            ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
          onClick={handleScroll}
          role="button"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-8 z-20 transition-all duration-1000 delay-800
          ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-sm text-gray-500">
          RESTRICTED
        </div>
      </div>

      <div 
        className={`absolute bottom-8 right-8 z-20 transition-all duration-1000 transform
          ${showSecondaryContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div className="text-sm text-gray-400 text-right">
          09 January 2025
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
