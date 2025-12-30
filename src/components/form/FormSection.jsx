"use client";

export default function FormSection({ title, children }) {
  return (
    <section className="relative space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="space-y-3 md:space-y-4">
        <div className="flex flex-col gap-2">
          {/* Decorative Blue Accent */}
          <div className="w-8 md:w-10 h-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full" />
          
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter leading-tight">
            {title}
          </h2>
        </div>

        {/* Fading effect */}
        <div className="relative w-full h-px">
          <div className="absolute inset-0 bg-linear-to-r from-slate-200 via-slate-100 to-transparent" />
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 gap-y-10 md:gap-y-12">
        {children}
      </div>
    </section>
  );
}