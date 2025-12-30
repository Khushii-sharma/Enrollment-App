"use client";

export default function FormCard({ title, subtitle, children }) {
  return (
    <div className="relative overflow-hidden rounded-lg md:rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
      
      {/* High-End Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 via-blue-600 to-indigo-600" />

      <div className="p-6 md:p-10 lg:p-14 space-y-8 md:space-y-12">
        
        <header className="space-y-3 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-[10px] md:text-xs lg:text-sm text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed max-w-xs md:max-w-md mx-auto">
              {subtitle}
            </p>
          )}
        </header>

        {/* Faded edges */}
        <div className="relative w-full h-px flex justify-center">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-200 to-transparent opacity-70" />
        </div>

        <main className="relative">
          {children}
        </main>
      </div>

      {/* Subtle Corner Glow*/}
      <div className="absolute -bottom-12 -right-12 w-24 md:w-32 h-24 md:h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}