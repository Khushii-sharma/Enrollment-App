"use client";

import { useFormContext } from "react-hook-form";

export default function RHFSelect({
  name,
  label,
  options = [],
  placeholder,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">
          {label}
        </label>
      )}

      <select
        {...register(name)}
        className="
          w-full px-4 py-2 rounded-md
          bg-white dark:bg-zinc-800
          text-gray-900 dark:text-white
          border border-gray-300 dark:border-zinc-700
          focus:outline-none focus:ring-2
          focus:ring-indigo-500 focus:border-indigo-500
        "
      >
        {placeholder && (
          <option value="" className="bg-white dark:bg-zinc-800">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
          >
            {option}
          </option>
        ))}
      </select>

      {errors[name] && (
        <p className="text-xs text-red-500">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
