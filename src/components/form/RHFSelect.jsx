"use client";
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function RHFSelect({ name, label, placeholder, options }) {
  const { setValue, watch, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-1">
      <Label className="text-indigo-700 dark:text-indigo-400">{label}</Label>
      <Select
        value={watch(name)}
        onValueChange={v => setValue(name, v, { shouldValidate: true })}
        className="focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white"
      >
        <SelectTrigger className="border-indigo-300 focus:border-indigo-500">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(o => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}
