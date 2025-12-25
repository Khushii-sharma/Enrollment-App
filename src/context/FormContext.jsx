"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });

  const updateStep = (step, data) => {
    setFormData(prev => ({
      ...prev,
      [step]: data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateStep }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormContext);
}
