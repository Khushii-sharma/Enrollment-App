export default function FormCard({ title, subtitle, children }) {
  return (
    <div className="space-y-6 p-6 rounded-xl border border-indigo-200 bg-white shadow-lg dark:bg-zinc-900 dark:border-indigo-700">
      <div>
        <h1 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
        )}
      </div>

      {children}
    </div>
  );
}
