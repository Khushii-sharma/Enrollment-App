"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function RHFInput({ name, label, type = "text", placeholder, required }) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="group space-y-2 md:space-y-2.5 w-full text-left">
      {/* Premium Label */}
      <Label 
        className={`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-colors duration-300 ml-1 ${
          error ? "text-red-500" : "text-slate-600 group-focus-within:text-blue-600"
        }`}
      >
        {label} {required && <span className="text-red-500 font-bold ml-0.5">*</span>}
      </Label>

      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`
            w-full border-0 border-b-2 rounded-none px-0 bg-transparent h-10
            text-black font-bold text-[14px] md:text-[15px]
            placeholder:text-slate-400 placeholder:font-black placeholder:text-[10px] md:placeholder:text-xs
            focus-visible:ring-0 focus-visible:ring-offset-0 items-end pb-1
            transition-all duration-500
            ${error 
              ? "border-red-500 shadow-[0_1px_0_0_rgba(239,68,68,1)]" 
              : "border-slate-200 focus-visible:border-blue-600 shadow-none hover:border-slate-300"
            }
          `}
        />
      </div>

      {error && (
        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-wider text-red-500 mt-1.5 animate-in fade-in slide-in-from-top-1 ml-1">
          {error.message}
        </p>
      )}
    </div>
  );
}