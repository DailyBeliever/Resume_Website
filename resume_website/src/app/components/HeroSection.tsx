// Components: Reuseable code for pages that can be 
// imported on any page to keep the same design
import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place self-center">
                <h1 className= "text-[#ffffff] mb-4 text-4xl lg:text-6xl font-extrabold"> 
                Hello, I'm Joshua! 
                </h1>
                <p className="text-[#ABB7BE] text-lg mb-6 lg:text-xl"> 
                Welcome To My Resume Website!
                </p>
                <div>
                    <button className= "px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black font-bold"> My Resume </button>
                    <button className= "px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black font-bold"> Terminal </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 mb-6 lg:mt-0">
                <div className="square-full bg-[#000000] w-[325px] h-[325px] lg:w-[325px] lg:h-[325px] relative">
                    <Image
                        src="/images/me.jpg"
                        alt="Picture of me"
                        className="absolute object cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;