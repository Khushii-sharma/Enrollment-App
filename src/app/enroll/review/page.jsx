"use client";
import ProgressHeader from "@/components/form/ProgressHeader";
import { Button } from "@/components/ui/button";
import { useFormData } from "@/context/FormContext";

export default function Review() {
  const { formData } = useFormData();
  if (!formData) return null;

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
    if (!stepData) return null;

    return (
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
          {title}
        </h2>

        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 
                        bg-white dark:bg-zinc-800 p-4 space-y-2 text-sm">
          {Object.entries(stepData).map(([k, v]) => {
            if (v === undefined || v === "" || v === null) return null;

            return (
              <div
                key={k}
                className="flex flex-col sm:flex-row sm:justify-between gap-1"
              >
                <span className="text-gray-500 dark:text-zinc-400">
                  {stepLabels[stepKey][k] || k}
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {String(v)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-6
                    bg-gray-50 dark:bg-zinc-900
                    text-gray-900 dark:text-white
                    rounded-xl shadow-sm dark:shadow-zinc-800/40">

      <ProgressHeader />

      <h1 className="text-2xl sm:text-3xl font-semibold
                     text-indigo-700 dark:text-indigo-400">
        Review & Submit
      </h1>

      {renderStep("step1", "Personal Details")}
      {renderStep("step2", "Academic Details")}
      {renderStep("step3", "Address & Guardian")}

      <Button
        className="w-full py-3 text-base font-medium
                   bg-linear-to-r from-indigo-500 to-violet-500
                   hover:from-indigo-600 hover:to-violet-600
                   text-white rounded-lg"
      >
        Submit Enrollment
      </Button>
    </div>
  );
}
