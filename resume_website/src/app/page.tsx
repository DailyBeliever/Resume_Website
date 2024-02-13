// This is the import from the components folder
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#292828] containter mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
    </main>
  );
}
