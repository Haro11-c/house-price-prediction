// File location: src/app/page.tsx
import Header from "@/components/Header";
import HousePredictionForm from "@/components/HousePredictionForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex justify-center px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <HousePredictionForm />
      </main>
    </div>
  );
}