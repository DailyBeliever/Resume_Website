import React from "react";

const AboutSection = () => {
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                {/* Add your content here */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">About Section</h2>
                    <p className="text-lg">Welcome To the About Section</p>
                </div>
                {/* Add more content or components as needed */}
            </div>
        </section>
    );
};

export default AboutSection;
