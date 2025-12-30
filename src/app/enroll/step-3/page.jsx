"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "@/schemas/step3Schema";
import { useFormData } from "@/context/FormContext";

import ProgressHeader from "@/components/form/ProgressHeader";
import FormCard from "@/components/form/FormCard";
import FormActions from "@/components/form/FormActions";
import RHFInput from "@/components/form/RHFInput";
import RHFSelect from "@/components/form/RHFSelect";

export default function Step3() {
  const router = useRouter();
  const { formData, updateStep } = useFormData();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (formData?.step2?.goal) {
      setReady(true);
    } else {
      router.push("/enroll/step-2");
    }
  }, [formData?.step2?.goal, router]);

  const form = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: formData.step3 || {},
    mode: "onChange",
  });

  if (!ready) return null;

  const onSubmit = (data) => {
    updateStep("step3", data);
    router.push("/enroll/review");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 md:py-20 px-4 md:px-10">
      <div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl mx-auto space-y-8 md:space-y-12 transition-all duration-500">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 md:space-y-14">
            <ProgressHeader />

            <FormCard title="Address Details">
              <div className="flex flex-col gap-y-10 md:gap-y-14">
                
                <RHFInput name="pin" label="PIN Code" placeholder="6-digit PIN" required />
                
                <RHFInput name="state" label="State" placeholder="Enter state" required />

                <RHFInput name="city" label="City" placeholder="Enter city" required />
                
                <RHFInput name="guardianName" label="Guardian Name" placeholder="Full name" required />

                <RHFInput 
                  name="address" 
                  label="Full Address" 
                  placeholder="House no, Street, Locality" 
                  required 
                />
                
                <RHFInput 
                  name="guardianMobile" 
                  label="Guardian Mobile" 
                  placeholder="10-digit number" 
                  required 
                />

                <RHFSelect 
                  name="plan" 
                  label="Subscription Plan" 
                  placeholder="Choose Plan" 
                  options={["Quarterly", "Half-Yearly", "Annual"]} 
                  required 
                />

                <RHFSelect 
                  name="payment" 
                  label="Payment Mode" 
                  placeholder="Choose Mode" 
                  options={["UPI", "Card", "NetBanking"]} 
                  required 
                />
              </div>
            </FormCard>

            <FormActions 
              onBack={() => router.push("/enroll/step-2")} 
              isLast={true} 
              isSubmitting={form.formState.isSubmitting} 
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}