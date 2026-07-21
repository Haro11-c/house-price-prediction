// File location: src/components/Header.tsx
export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2.5 border-b border-gray-100 bg-white px-5">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 text-white"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
        </svg>
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-gray-900">Estimare</p>
        <p className="text-[11px] text-gray-400">House price predictor</p>
      </div>
    </header>
  );
}