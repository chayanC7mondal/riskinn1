// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const navItems = [
//   { label: "Hire & Be Hired", hasDropdown: true },
//   { label: "Corporate Solutions", hasDropdown: false },
//   { label: "Career Accelerator", hasDropdown: true },
//   { label: "FRM Prep", hasDropdown: true },
//   { label: "IB", hasDropdown: true },
//   { label: "Risk Management", hasDropdown: true },
//   { label: "Timed Testing", hasDropdown: true },
//   { label: "About Us", hasDropdown: false },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       {/* Glass Container */}
//       <div className="relative bg-white/[0.06] backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
//         {/* Subtle gradient reflection */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-[72px]">
//             {/* Logo */}
//             <div className="flex items-center gap-3 cursor-pointer group">
//               <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
//                 <Image
//                   src="/logo.png"
//                   alt="Risk Inn"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-6 xl:gap-7">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   className="group relative text-white/90 hover:text-white text-[13px] font-medium flex items-center gap-1.5 py-2 transition-all duration-200"
//                 >
//                   {item.label}
//                   {item.hasDropdown && (
//                     <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
//                   )}

//                   {/* Hover underline */}
//                   <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-teal-400 group-hover:w-full transition-all duration-300" />
//                 </button>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="hidden md:flex items-center gap-4">
//               <Button className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/30">
//                 <span className="relative z-10 flex items-center">
//                   Get Started
//                   <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
//                 </span>
//                 {/* Glow */}
//                 <span className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden text-white/90 p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
//             >
//               {isOpen ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="lg:hidden bg-white/[0.08] backdrop-blur-xl border-b border-white/10 shadow-xl"
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.label}
//                   className="w-full text-left text-white/90 hover:text-white hover:bg-white/10 rounded-xl flex items-center justify-between py-3 px-4 transition-all duration-200"
//                 >
//                   <span className="font-medium text-sm">{item.label}</span>
//                   {item.hasDropdown && (
//                     <ChevronDown className="w-3.5 h-3.5 opacity-70" />
//                   )}
//                 </button>
//               ))}

//               <div className="pt-4">
//                 <Button className="w-full rounded-full bg-teal-600 hover:bg-teal-500 text-white py-3 font-semibold shadow-lg hover:shadow-teal-500/30 transition-all duration-300">
//                   Get Started
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Hire & Be Hired", hasDropdown: true },
  { label: "Corporate Solutions", hasDropdown: false },
  { label: "Career Accelerator", hasDropdown: true },
  { label: "FRM Prep", hasDropdown: true },
  { label: "IB", hasDropdown: true },
  { label: "Risk Management", hasDropdown: true },
  { label: "Timed Testing", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Wrapper */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav className="mx-auto max-w-7xl">
          {/* Glass Pill */}
          <div
            className="relative flex items-center justify-between rounded-full 
            bg-slate-900/60 backdrop-blur-xl 
            border border-white/10 
            shadow-[0_12px_35px_rgba(0,0,0,0.45)] 
            px-4 sm:px-6 h-16"
          >
            {/* Soft glass highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3 cursor-pointer">
              <div className="relative w-9 h-9">
              <Image
                src="/logo.png"
                alt="Risk Inn"
                fill
                className="object-contain"
                priority
              />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="relative z-10 hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="group flex items-center gap-1 text-sm font-medium 
                    text-white/85 hover:text-white transition"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="relative z-10 hidden md:flex items-center">
              <Button
                className="rounded-full bg-emerald-600 hover:bg-emerald-500 
                text-white px-5 shadow-lg hover:shadow-emerald-500/30 transition"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 lg:hidden p-2 rounded-full 
                text-white/90 hover:bg-white/10 transition"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-4 right-4 z-40 
              rounded-2xl bg-slate-900/70 backdrop-blur-xl 
              border border-white/10 shadow-2xl"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between 
                    px-4 py-3 rounded-xl 
                    text-white/85 hover:text-white hover:bg-white/10 transition"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  )}
                </button>
              ))}

              <Button
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-500 
                text-white py-3 mt-2 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
