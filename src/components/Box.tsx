import React from "react";
import AboutSection from "./AboutSection"; // Adjust the import path as necessary

interface BackgroundProps {
  currentPage: string;
}

const Background: React.FC<BackgroundProps> = ({ currentPage }) => {
  // Placeholder for content based on the current page
  // You'll display different content based on `currentPage`
  const renderContent = () => {
    switch (currentPage) {
      // Example case: Add your own cases as needed
      case "AboutSection":
        return <AboutSection />;
      case "#mpcb":
        return <p>This is the About page content.</p>;
      default:
        return <p className="justify-center"> Welcome! This is where my Navbar will show Content |  Website Under Construction!</p>;
    }
  };

  return (
  <main className="flex min-h-screen flex-col bg-[#292828] container mx-auto px-12 py-6 items-center">
      {/* Box to display content */}
      <div className="box-content bg-white p-10 px-10 rounded-lg shadow-lg w-3/4 h-auto mx-auto">
        {renderContent()}
      </div>
    </main>
  );
}

export default Background;
