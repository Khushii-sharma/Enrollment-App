"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "@/schemas/step2Schema";
import { useFormData } from "@/context/FormContext";

import ProgressHeader from "@/components/form/ProgressHeader";
import FormCard from "@/components/form/FormCard";
import FormActions from "@/components/form/FormActions";
import RHFInput from "@/components/form/RHFInput";
import RHFSelect from "@/components/form/RHFSelect";

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
    defaultValues: formData.step2 || { scholarship: false },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    updateStep("step2", data);
    router.push("/enroll/step-3");
  };

  const isScholarshipChecked = form.watch("scholarship");

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 md:py-20 px-4 md:px-10">
      
      <div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl mx-auto space-y-8 md:space-y-12">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 md:space-y-14">
            <ProgressHeader />
            <FormCard title="Academic Details">
              <div className="flex flex-col gap-y-10 md:gap-y-14">
                <RHFInput 
                  name="subjects" 
                  label="Subjects" 
                  placeholder="e.g. Maths, Physics, Chemistry" 
                  required 
                />

                <RHFSelect 
                  name="goal" 
                  label="Study Goal" 
                  placeholder="What is your primary focus?" 
                  options={["Board Excellence", "Concept Mastery", "Competitive Prep"]} 
                  required 
                />

                <RHFInput 
                  name="hours" 
                  type="number" 
                  label="Weekly Study Hours" 
                  placeholder="How many hours can you commit?"
                  required 
                />

                <div className="pt-2 flex flex-col gap-6">
                  <label className="flex items-center gap-4 cursor-pointer group w-fit">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        {...form.register("scholarship")}
                        className="peer w-6 h-6 opacity-0 absolute cursor-pointer z-20"
                      />
                      <div className="w-6 h-6 border-2 border-slate-200 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-300 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white scale-0 peer-checked:scale-100 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-600 transition-colors">
                      Applying for Scholarship?
                    </span>
                  </label>

                  {isScholarshipChecked && (
                    <div className="pt-4 md:pt-8 animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-500">
                      <RHFInput 
                        name="percentage" 
                        type="number" 
                        label="Last Exam Percentage" 
                        placeholder="Enter your score (%)" 
                        required 
                      />
                    </div>
                  )}
                </div>
              </div>
            </FormCard>

            <FormActions 
              onBack={() => router.push("/enroll/step-1")} 
              isLast={false} 
              isSubmitting={form.formState.isSubmitting} 
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}