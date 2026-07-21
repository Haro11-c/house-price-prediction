// File location: src/components/Sidebar.tsx
const NAV_ITEMS = [
  {
    label: "Predict",
    active: true,
    icon: (
      <path d="M3 11l9-8 9 8M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    ),
  },
  {
    label: "About",
    active: false,
    icon: <path d="M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-16 shrink-0 flex-col items-center gap-2 border-r border-gray-100 bg-white py-5 sm:flex">
      {NAV_ITEMS.map(({ label, active, icon }) => (
        <button
          key={label}
          type="button"
          title={label}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
            active
              ? "bg-indigo-50 text-indigo-600"
              : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon}
          </svg>
        </button>
      ))}
    </aside>
  );
}