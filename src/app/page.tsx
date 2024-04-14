// This is the import from the components folder
import HeroSection from "../components/HeroSection";
import Background from "../components/Current_Page";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#292828] containter mx-auto px-12 py-4" style={{backgroundImage: "url('/images/background')"}}>
      <Navbar />
      <div className= "container mt-24 mx-auto">
      <HeroSection />
      <Background currentPage="home" />
      </div>
    </main>
  );
}