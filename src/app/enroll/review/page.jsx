"use client";
import ProgressHeader from "@/components/form/ProgressHeader";
import { Button } from "@/components/ui/button";
import { useFormData } from "@/context/FormContext";

export default function Review() {
  const { formData } = useFormData();

  if (!formData) return null; // wait for context

  const stepLabels = {
    step1: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
    },
    step2: {
      subjects: "Subjects",
      goal: "Goal",
      hours: "Weekly Hours",
      scholarship: "Scholarship",
      percentage: "Last Exam %",
    },
    step3: {
      pin: "PIN Code",
      state: "State",
      city: "City",
      address: "Address",
      guardianName: "Guardian Name",
      guardianMobile: "Guardian Mobile",
      plan: "Plan",
      payment: "Payment Mode",
    },
  };

  const renderStep = (stepKey, title) => {
    const stepData = formData[stepKey];
    if (!stepData) return null; // skip if no data

    return (
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-indigo-300">{title}</h2>
        <div className="bg-zinc-800 p-4 rounded-md space-y-1 text-sm">
          {Object.entries(stepData).map(([k, v]) => {
            if (v === undefined || v === "" || v === null) return null;
            return (
              <div key={k} className="flex justify-between">
                <span className="text-indigo-300">{stepLabels[stepKey][k] || k}</span>
                <span className="font-medium">{String(v)}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-lg text-white">
      <ProgressHeader />

      <h1 className="text-2xl font-semibold text-indigo-400">Review & Submit</h1>

      {renderStep("step1", "Personal Details")}
      {renderStep("step2", "Academic Details")}
      {renderStep("step3", "Address & Guardian")}

      <Button className="w-full bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white">
        Submit Enrollment
      </Button>
    </div>
  );
}
