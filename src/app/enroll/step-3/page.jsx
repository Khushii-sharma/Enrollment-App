"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "@/schemas/step3Schema";
import { useFormData } from "@/context/FormContext";

export default function Step3() {
  const router = useRouter();
  const { formData, updateStep } = useFormData();
  const [ready, setReady] = useState(false);

  // Wait until step2 is completed
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

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 p-6 max-w-xl mx-auto bg-zinc-900 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-2xl font-bold text-indigo-400">Address & Guardian</h2>

      {/* PIN */}
      <div className="space-y-1">
        <label className="text-indigo-300">PIN Code</label>
        <input
          {...form.register("pin")}
          placeholder="Enter PIN Code"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* State */}
      <div className="space-y-1">
        <label className="text-indigo-300">State</label>
        <input
          {...form.register("state")}
          placeholder="Enter State"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* City */}
      <div className="space-y-1">
        <label className="text-indigo-300">City</label>
        <input
          {...form.register("city")}
          placeholder="Enter City"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label className="text-indigo-300">Address</label>
        <input
          {...form.register("address")}
          placeholder="Enter Address"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Guardian Name */}
      <div className="space-y-1">
        <label className="text-indigo-300">Guardian Name</label>
        <input
          {...form.register("guardianName")}
          placeholder="Enter Guardian Name"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Guardian Mobile */}
      <div className="space-y-1">
        <label className="text-indigo-300">Guardian Mobile</label>
        <input
          {...form.register("guardianMobile")}
          placeholder="Enter Guardian Mobile"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Plan */}
      <div className="space-y-1">
        <label className="text-indigo-300">Plan</label>
        <select
          {...form.register("plan")}
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        >
          <option value="">Select Plan</option>
          <option>Quarterly</option>
          <option>Half-Yearly</option>
          <option>Annual</option>
        </select>
      </div>

      {/* Payment Mode */}
      <div className="space-y-1">
        <label className="text-indigo-300">Payment Mode</label>
        <select
          {...form.register("payment")}
          className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-indigo-600 focus:border-indigo-400 focus:ring focus:ring-indigo-400 outline-none"
        >
          <option value="">Select Payment Mode</option>
          <option>UPI</option>
          <option>Card</option>
          <option>NetBanking</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-md bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold transition-all"
      >
        Review
      </button>
    </form>
  );
}
