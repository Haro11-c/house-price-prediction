// File location: src/components/FieldHint.tsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function FieldHint({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        aria-label="More info"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-[10px] font-semibold text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        ?
      </button>

      {open && (
        <div
          role="tooltip"
          className="absolute left-1/2 top-6 z-20 w-56 max-w-[70vw] -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs leading-snug text-white shadow-lg sm:w-64"
        >
          {text}
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
        </div>
      )}
    </div>
  );
}