"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "@/schemas/step1Schema";
import { useFormData } from "@/context/FormContext";

import ProgressHeader from "@/components/form/ProgressHeader";
import FormCard from "@/components/form/FormCard";
import FormActions from "@/components/form/FormActions";
import RHFInput from "@/components/form/RHFInput";
import RHFSelect from "@/components/form/RHFSelect";

export default function Step1() {
  const router = useRouter();
  const { formData, updateStep } = useFormData();

  const form = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: formData.step1,
  });

  const onSubmit = data => {
    updateStep("step1", data);
    router.push("/enroll/step-2");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-6 bg-gray-50 dark:bg-zinc-900 rounded-xl shadow-sm dark:shadow-zinc-800/40"
      >
        {/* Progress Bar */}
        <ProgressHeader />

        {/* Card */}
        <FormCard
          title="Student Details"
          subtitle="Basic information about the student"
        >
          <RHFInput name="fullName" label="Full Name" placeholder="Enter full name" />
          <RHFInput name="email" label="Email" placeholder="Enter email address" />
          <RHFInput
            name="mobile"
            label="Mobile Number"
            placeholder="Enter mobile number"
          />

          <RHFSelect
            name="class"
            label="Class"
            placeholder="Select class"
            options={["9", "10", "11", "12"]}
          />

          <RHFSelect
            name="board"
            label="Board"
            placeholder="Select board"
            options={["CBSE", "ICSE", "State Board"]}
          />

          <RHFSelect
            name="language"
            label="Preferred Language"
            placeholder="Select language"
            options={["English", "Hindi", "Hinglish"]}
          />
        </FormCard>

        {/* Actions */}
        <FormActions />
      </form>
    </FormProvider>
  );
}
