"use client";
import { FormProvider } from "@/context/FormContext";

export default function EnrollLayout({ children }) {
  return (
    <FormProvider>
      <div className="min-h-screen bg-white w-full">
        <div className="w-full">
          {children}
        </div>
      </div>
    </FormProvider>
  );
}