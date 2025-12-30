"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RHFSelect({ name, label, options, placeholder, required }) {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="group space-y-2 md:space-y-2.5 w-full text-left px-0">
      {/* Label */}
      <Label 
        className={`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-colors duration-300 ml-1 ${
          error ? "text-red-500" : "text-slate-600 group-focus-within:text-blue-600"
        }`}
      >
        {label} {required && <span className="text-red-500 font-bold ml-0.5">*</span>}
      </Label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value || ""}>
            <div className="relative">
              <SelectTrigger 
                className={`
                  w-full border-0 border-b-2 bg-transparent h-10 px-0
                  rounded-none shadow-none ring-0 focus:ring-0 focus:outline-none 
                  transition-all duration-300 text-left items-end pb-1
                  ${error 
                    ? "border-red-500 shadow-[0_1px_0_0_rgba(239,68,68,1)]" 
                    : "border-slate-200 focus:border-blue-600 hover:border-slate-300"
                  }
                `}
              >
                <div className="uppercase tracking-[0.15em] md:tracking-[0.2em]">
                  {!field.value ? (
                    <SelectValue 
                      placeholder={
                        <span className="text-slate-400 font-black text-[10px] md:text-xs">
                          {placeholder}
                        </span>
                      } 
                    />
                  ) : (
                    <span className="text-[14px] md:text-[15px] font-bold text-black normal-case tracking-tight leading-none">
                      {field.value}
                    </span>
                  )}
                </div>

                {/* Arrowa */}
                <div className="absolute right-0 bottom-1 pointer-events-none">
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    error ? "text-red-500" : "text-slate-400 group-focus-within:text-blue-600 group-focus-within:rotate-180"
                  }`} />
                </div>
              </SelectTrigger>
            </div>

            {/* Content */}
            <SelectContent className="rounded-2xl border-slate-100 shadow-2xl p-2 bg-white/95 backdrop-blur-md z-100">
              <div className="max-h-75 overflow-y-auto">
                {options.map((opt) => (
                  <SelectItem 
                    key={opt} 
                    value={opt} 
                    className="py-3.5 px-4 rounded-xl font-bold text-slate-700 focus:bg-blue-50 focus:text-blue-700 cursor-pointer transition-colors"
                  >
                    {opt}
                  </SelectItem>
                ))}
              </div>
            </SelectContent>
          </Select>
        )}
      />

      {error && (
        <p className="text-[10px] font-black uppercase tracking-wider text-red-500 mt-2 ml-1 animate-in fade-in slide-in-from-top-1">
          {error.message}
        </p>
      )}
    </div>
  );
}