// File location: src/components/PredictButton.tsx
interface PredictButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function PredictButton({ loading, onClick }: PredictButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="mt-2 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
    >
      {loading ? "Predicting..." : "Predict Price"}
    </button>
  );
}