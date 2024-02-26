// This is the import from the components folder
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#292828] containter mx-auto px-12 py-4">
      <Navbar />
      <div className= "container mt-24 mx-auto">
      <HeroSection />
      <AboutSection />
      <Center />
      </div>
    </main>
  );
}
