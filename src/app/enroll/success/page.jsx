"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      {/* Container*/}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 text-center space-y-10"
      >
        {/* Animated Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-blue-100/50"
        >
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
            Enrollment Done!
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed max-w-62.5 mx-auto">
            Your application is submitted. We will contact you shortly.
          </p>
        </div>

        {/* Action Button */}
        <Button 
          onClick={() => router.push("/")}
          className="w-full py-8 text-[12px] font-black uppercase tracking-[0.2em] bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Go to Dashboard
        </Button>
      </motion.div>
    </div>
  );
}