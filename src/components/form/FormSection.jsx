export default function FormSection({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{title}</h2>
      {children}
    </section>
  );
}
