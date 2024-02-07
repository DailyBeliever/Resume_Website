// Components: Reuseable code for pages that can be 
// imported on any page to keep the same design
import React from "react";

const HeroSection = () => {
    return (
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7">
                <h1 className= "text-[#ffffff] mb-4 text-4xl lg:text-6xl font-extrabold"> 
                Hello, I'm Joshua! 
                </h1>
                <p className="text-[#ABB7BE] text-lg lg:text-xl"> 
                This is were my intro text would go!
                .
                .
                </p>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;