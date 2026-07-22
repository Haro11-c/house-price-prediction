// File location: src/components/SelectField.tsx
"use client";

import FieldHint from "./FieldHint";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (name: string, value: string) => void;
  hint?: string;
}

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
  hint,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 flex items-center text-sm font-medium text-gray-700"
      >
        {label}
        {hint && <FieldHint text={hint} />}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}