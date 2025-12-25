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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ProgressHeader />

        <FormCard title="Student Details" subtitle="Basic information">
          <RHFInput name="fullName" label="Full Name" />
          <RHFInput name="email" label="Email" />
          <RHFInput name="mobile" label="Mobile Number" />

          <RHFSelect name="class" label="Class" placeholder="Select class"
            options={["9", "10", "11", "12"]} />

          <RHFSelect name="board" label="Board" placeholder="Select board"
            options={["CBSE", "ICSE", "State Board"]} />

          <RHFSelect name="language" label="Preferred Language"
            options={["English", "Hindi", "Hinglish"]} />
        </FormCard>

        <FormActions />
      </form>
    </FormProvider>
  );
}
