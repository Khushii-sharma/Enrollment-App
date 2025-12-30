"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgressHeader from "@/components/form/ProgressHeader";
import { Button } from "@/components/ui/button";
import { useFormData } from "@/context/FormContext";
import FormCard from "@/components/form/FormCard";

export default function Review() {
  const { formData } = useFormData();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  if (!formData) return null;

  const stepLabels = {
    step1: { fullName: "Full Name", email: "Email", mobile: "Mobile Number", class: "Class", board: "Board", language: "Language" },
    step2: { subjects: "Subjects", goal: "Goal", hours: "Weekly Hours", scholarship: "Scholarship", percentage: "Last Exam %" },
    step3: { pin: "PIN Code", state: "State", city: "City", address: "Address", guardianName: "Guardian Name", guardianMobile: "Guardian Mobile", plan: "Plan", payment: "Payment" },
  };

  const renderStep = (stepKey, title, stepPath) => {
    const stepData = formData[stepKey];
    if (!stepData) return null;
    
    return (
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 px-1">
          <h2 className="text-[10px] md:text-[11px] font-black text-black uppercase tracking-[0.25em]">{title}</h2>
          <button 
            onClick={() => router.push(stepPath)} 
            className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-all hover:scale-105"
          >
            Edit
          </button>
        </div>
        
        {/* Data Rows */}
        <div className="flex flex-col gap-y-5 px-1">
          {Object.entries(stepData).map(([k, v]) => {
            if (v === undefined || v === "" || v === null) return null;
            return (
              <div key={k} className="flex justify-between items-end border-b border-slate-100 pb-2 group min-h-10">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors shrink-0">
                  {stepLabels[stepKey][k] || k}
                </span>
                <span className="text-sm md:text-[15px] font-bold text-black text-right tracking-tight leading-none break-all ml-4">
                  {typeof v === "boolean" ? (v ? "Yes" : "No") : String(v)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 md:py-20 px-4 md:px-10">
      <div className="w-full max-w-full md:max-w-2xl lg:max-w-4xl mx-auto space-y-8 md:space-y-12 transition-all duration-500">
        <ProgressHeader />
        
        <FormCard title="Review Enrollment">
          <div className="flex flex-col gap-y-16 py-2">
            {renderStep("step1", "Personal Information", "/enroll/step-1")}
            {renderStep("step2", "Academic Preferences", "/enroll/step-2")}
            {renderStep("step3", "Contact & Billing", "/enroll/step-3")}
          </div>
        </FormCard>

        {/* Action Button */}
        <div className="pt-4">
          <Button
            onClick={() => setShowModal(true)}
            className="w-full py-8 text-[12px] md:text-[13px] font-black uppercase tracking-[0.2em] bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1"
          >
            Confirm and Submit
          </Button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-4xl p-8 md:p-10 max-w-sm w-full shadow-2xl space-y-8 animate-in zoom-in-95 duration-300">
            <div className="space-y-3 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Ready to Submit?</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed px-2">
                By clicking submit, you agree that all provided information is accurate.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => router.push("/enroll/success")}
                className="w-full py-7 bg-linear-to-r from-blue-600 to-indigo-700 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-lg shadow-blue-100"
              >
                Yes, Submit Now
              </Button>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors"
              >
                Go Back & Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}