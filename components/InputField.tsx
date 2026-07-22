// File location: src/components/InputField.tsx
"use client";

import FieldHint from "./FieldHint";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  hint?: string;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  hint,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 flex items-center text-sm font-medium text-gray-700"
      >
        {label}
        {hint && <FieldHint text={hint} />}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
    </div>
  );
}