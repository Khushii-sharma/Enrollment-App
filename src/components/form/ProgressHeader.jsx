"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const steps = ["step-1", "step-2", "step-3", "review"];

export default function ProgressHeader() {
  const pathname = usePathname();
  
  const currentIndex = steps.findIndex(s => pathname.includes(s));
  const current = currentIndex === -1 ? 1 : currentIndex + 1;
  const progressPercent = (current / steps.length) * 100;

  return (
    <div className="mb-8 md:mb-12 w-full px-1">
      <div className="flex justify-between items-end mb-4 md:mb-6">
        <div className="space-y-1">
          {/* RESPONSIVE HEADER */}
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-tight">
            {steps[currentIndex]?.replace("-", " ").toUpperCase() || "GET STARTED"}
          </h2>
          <p className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">
            Application Progress
          </p>
        </div>
        
        {/* RESPONSIVE INDICATOR */}
        <div className="flex flex-col items-end">
          <span className="text-xs md:text-sm font-black text-blue-600  px-3 md:px-4 py-1 md:py-1.5 ">
            {current} <span className="text-blue-300 mx-0.5">/</span> {steps.length}
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="relative w-full h-2 md:h-3 bg-slate-100 rounded-full border border-slate-200/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] md:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden">
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative h-full rounded-full bg-linear-to-r from-blue-500 via-blue-600 to-indigo-600 shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
        >
          {/* Glossy Reflection */}
          <div className="absolute inset-0 bg-linear-to-b from-white/30 to-transparent rounded-full" />
          
          {/* Animated Tip Pulse */}
          {progressPercent > 0 && progressPercent < 100 && (
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full blur-[0.5px] md:blur-[1px]" 
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}