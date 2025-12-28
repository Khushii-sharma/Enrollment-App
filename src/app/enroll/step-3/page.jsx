"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "@/schemas/step3Schema";
import { useFormData } from "@/context/FormContext";
import ProgressHeader from "@/components/form/ProgressHeader";

export default function Step3() {
  const router = useRouter();
  const { formData, updateStep } = useFormData();
  const [ready, setReady] = useState(false);

  
  useEffect(() => {
    if (formData?.step2?.goal) setReady(true);
    else router.push("/enroll/step-2");
  }, [formData?.step2?.goal, router]);

  const form = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: formData.step3,
  });

  if (!ready) return null;

  const onSubmit = data => {
    updateStep("step3", data);
    router.push("/enroll/review");
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
        Address & Guardian
      </h2>

      {/* Grid Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>PIN Code</label>
          <input
            {...form.register("pin")}
            placeholder="Enter PIN"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>State</label>
          <input
            {...form.register("state")}
            placeholder="Enter State"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>City</label>
          <input
            {...form.register("city")}
            placeholder="Enter City"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Guardian Name</label>
          <input
            {...form.register("guardianName")}
            placeholder="Guardian Name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className={labelClass}>Address</label>
        <input
          {...form.register("address")}
          placeholder="Full Address"
          className={inputClass}
        />
      </div>

      {/* Guardian Mobile */}
      <div>
        <label className={labelClass}>Guardian Mobile</label>
        <input
          {...form.register("guardianMobile")}
          placeholder="Mobile Number"
          className={inputClass}
        />
      </div>

      {/* Plan & Payment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Plan</label>
          <select {...form.register("plan")} className={inputClass}>
            <option value="">Select Plan</option>
            <option>Quarterly</option>
            <option>Half-Yearly</option>
            <option>Annual</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Payment Mode</label>
          <select {...form.register("payment")} className={inputClass}>
            <option value="">Select Payment Mode</option>
            <option>UPI</option>
            <option>Card</option>
            <option>NetBanking</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-medium
                   bg-linear-to-r from-indigo-500 to-violet-500
                   hover:from-indigo-600 hover:to-violet-600
                   transition-all"
      >
        Review
      </button>
    </form>
  );
}
