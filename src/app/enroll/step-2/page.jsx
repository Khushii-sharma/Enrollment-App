"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "@/schemas/step2Schema";
import { useFormData } from "@/context/FormContext";

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

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-zinc-900 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-indigo-400">Academic Details</h2>

      {/* Subjects */}
      <input
        {...form.register("subjects")}
        placeholder="Subjects"
        className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
      />

      {/* Goal */}
      <select
        {...form.register("goal")}
        className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
      >
        <option value="">Goal</option>
        <option>Board Excellence</option>
        <option>Concept Mastery</option>
        <option>Competitive Prep</option>
      </select>

      {/* Weekly Hours */}
      <input
        type="number"
        {...form.register("hours", { valueAsNumber: true })}
        placeholder="Weekly Hours"
        className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
      />

      {/* Scholarship */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...form.register("scholarship")}
          className="w-4 h-4 accent-indigo-500"
        />
        Scholarship?
      </label>

      {/* Scholarship % */}
      {form.watch("scholarship") && (
        <input
          type="number"
          {...form.register("percentage", { valueAsNumber: true })}
          placeholder="Last Exam %"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      )}

      {/* Next Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-md bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold transition-all"
      >
        Next
      </button>
    </form>
  );
}
