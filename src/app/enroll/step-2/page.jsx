"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "@/schemas/step2Schema";
import { useFormData } from "@/context/FormContext";
import ProgressHeader from "@/components/form/ProgressHeader";

export default function Step2() {
  const router = useRouter();
  const { formData, updateStep } = useFormData();

  useEffect(() => {
    if (!formData?.step1?.fullName) {
      router.push("/enroll/step-1");
    }
  }, [formData?.step1?.fullName, router]);

  const form = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: formData.step2,
  });

  const onSubmit = data => {
    updateStep("step2", data);
    router.push("/enroll/step-3");
  };

  const inputClass =
    "w-full px-4 py-2 rounded-md border outline-none transition-all " +
    "bg-white dark:bg-zinc-800 " +
    "border-gray-300 dark:border-zinc-700 " +
    "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 " +
    "text-gray-900 dark:text-white placeholder-gray-400";

  const labelClass =
    "text-sm font-medium text-gray-600 dark:text-indigo-300";

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-6
                 bg-gray-50 dark:bg-zinc-900
                 rounded-xl shadow-sm dark:shadow-zinc-800/40"
    >
      {/* Progress Bar */}
      <ProgressHeader />

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold
                     text-indigo-700 dark:text-indigo-400">
        Academic Details
      </h2>

      {/* Subjects */}
      <div>
        <label className={labelClass}>Subjects</label>
        <input
          {...form.register("subjects")}
          placeholder="Eg: Maths, Physics, Chemistry"
          className={inputClass}
        />
      </div>

      {/* Goal */}
      <div>
        <label className={labelClass}>Goal</label>
        <select {...form.register("goal")} className={inputClass}>
          <option value="">Select Goal</option>
          <option>Board Excellence</option>
          <option>Concept Mastery</option>
          <option>Competitive Prep</option>
        </select>
      </div>

      {/* Weekly Hours */}
      <div>
        <label className={labelClass}>Weekly Study Hours</label>
        <input
          type="number"
          {...form.register("hours", { valueAsNumber: true })}
          placeholder="Hours per week"
          className={inputClass}
        />
      </div>

      {/* Scholarship */}
      <label className="flex items-center gap-3 text-gray-700 dark:text-zinc-300">
        <input
          type="checkbox"
          {...form.register("scholarship")}
          className="w-4 h-4 accent-indigo-500"
        />
        Scholarship Applied?
      </label>

      {/* Scholarship Percentage */}
      {form.watch("scholarship") && (
        <div>
          <label className={labelClass}>Last Exam Percentage</label>
          <input
            type="number"
            {...form.register("percentage", { valueAsNumber: true })}
            placeholder="Percentage"
            className={inputClass}
          />
        </div>
      )}

      {/* Next Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-medium
                   bg-linear-to-r from-indigo-500 to-violet-500
                   hover:from-indigo-600 hover:to-violet-600
                   transition-all"
      >
        Next
      </button>
    </form>
  );
}
