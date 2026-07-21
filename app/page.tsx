// File location: src/app/page.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HousePredictionForm from "@/components/HousePredictionForm";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-1 items-center justify-center overflow-y-auto px-4 py-10">
          <HousePredictionForm />
        </main>
      </div>
    </div>
  );
}