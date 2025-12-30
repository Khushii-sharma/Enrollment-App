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
    defaultValues: formData.step1 || {},
    mode: "onChange", 
  });

  const onSubmit = (data) => {
    updateStep("step1", data);
    router.push("/enroll/step-2");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 md:py-20 px-4 md:px-6">
      
      <div className="w-full max-w-[98%] md:max-w-2xl lg:max-w-4xl mx-auto space-y-8 md:space-y-12 transition-all duration-500">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-12">
            <ProgressHeader />

            <FormCard title="Student Details">
              
              <div className="flex flex-col gap-y-10 md:gap-y-14">
                <RHFInput 
                  name="fullName" 
                  label="Full Name" 
                  placeholder="Enter your full name" 
                  required 
                />
                <RHFInput 
                  name="email" 
                  label="Email Address" 
                  placeholder="example@domain.com" 
                  required 
                />
                <RHFInput 
                  name="mobile" 
                  label="Mobile Number" 
                  placeholder="Enter your mobile number" 
                  required 
                />
                
                <RHFSelect 
                  name="class" 
                  label="Current Class" 
                  placeholder="Select your grade" 
                  options={["9", "10", "11", "12"]} 
                  required 
                />
                
                <RHFSelect 
                  name="board" 
                  label="Educational Board" 
                  placeholder="Select your board" 
                  options={["CBSE", "ICSE", "State Board"]} 
                  required 
                />
                
                <RHFSelect 
                  name="language" 
                  label="Preferred Language" 
                  placeholder="Select medium of instruction" 
                  options={["English", "Hindi", "Hinglish"]} 
                  required 
                />
              </div>
            </FormCard>

            <FormActions isLast={false} isSubmitting={form.formState.isSubmitting} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}