import { FormProvider } from "@/context/FormContext";

export default function EnrollLayout({ children }) {
  return (
    <FormProvider>
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          {children}
        </div>
      </div>
    </FormProvider>
  );
}
