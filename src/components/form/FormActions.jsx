"use client";
import { Button } from "@/components/ui/button";

export default function FormActions({ onBack, isLast, isSubmitting }) {
  return (
    <div className="flex items-center justify-between gap-4 md:gap-6 pt-8 md:pt-10 mt-8 md:mt-12 border-t border-slate-100/80">
      <div>
        {onBack && (
          <Button
            type="button"
            variant="ghost"
            className="px-4 md:px-8 h-12 md:h-14 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group"
            onClick={onBack}
          >
            <span className="flex items-center gap-2">
              Back
            </span>
          </Button>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`
          min-w-35 md:min-w-40 h-12 md:h-14 px-6 md:px-10 rounded-xl md:rounded-2xl 
          font-black uppercase tracking-widest text-[10px] md:text-[11px] text-white
          bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700
          shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)]
          hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)]
          hover:scale-[1.02] active:scale-[0.98] 
          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          group
        `}
      >
        <span className="flex items-center gap-2 whitespace-nowrap">
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              {isLast ? "Complete Enrollment" : "Next Step"}
            </>
          )}
        </span>
      </Button>
    </div>
  );
}