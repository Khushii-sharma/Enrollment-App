"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function RHFInput({ name, label, type = "text", placeholder }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-1">
      <Label className="text-indigo-700 dark:text-indigo-400">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white"
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}
