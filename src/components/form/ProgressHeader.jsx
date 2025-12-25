"use client";
import { usePathname } from "next/navigation";

const steps = ["step-1", "step-2", "step-3", "review"];

export default function ProgressHeader() {
  const pathname = usePathname();
  const current = steps.findIndex(s => pathname.includes(s)) + 1;

  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-2">
        Step {current} of {steps.length}
      </p>

      <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-indigo-500 to-violet-500 transition-all"
          style={{ width: `${(current / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
