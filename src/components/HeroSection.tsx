'use client';
// Components: Reuseable code for pages that can be 
// imported on any page to keep the same design
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place self-center text-center sm:text-left">
                <h1>
                <p className="text-[#ABB7BE]text-base sm:text text-lg mb-6 lg:text-xl font-bold"> 
                    Welcome To My Resume Website!
                    </p>
                </h1>
                <h1 className= "text-[#ffffff] mb-10 text-4xl lg:text-6xl font-extrabold"> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I&apos;m{" "}
                    </span> 
                    <br></br>
                    <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Joshua',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'an avid programmer and PC enthusiast',
                    1000,
                    'looking for a job', // in the tech industry,
                    1000,
                    'also a business owner',
                    2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={3}
                cursor={false}
                />
                </h1>
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
                    <div className= "ml-6 mt-4">
                        <div>
                        <button className= "px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-blue-500 to-red-500 hover:bg-slate-200 text-white font-bold">
                            <span className= "block bg-[#292828] hover:bg-slate-800 rounded-full px-5 py-2 "> My Resume </span></button>
                        <button className= "mt-3 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-red-500 hover:bg-slate-200 font-bold"> 
                            <span className= "block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Terminal </span></button>
                        </div>
                </div> 
            </div>
        </div>
        </section>
    );
};

export default HeroSection;

// I added mt-3 to the second button to give it some space from the first button.