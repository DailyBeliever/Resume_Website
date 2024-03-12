"use client";  
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "MPCB",
        path: "#mpcb",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className= "fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap itmes-cetner justify-between mx-auto px-5 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold hidden sm:block">
                    Home
                </Link>
                    <div className= "mobile-menu block md:hidden ">
                        {
                            !navbarOpen ? (
                                <button onClick={() => setNavbarOpen(true)} className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:borer-white text-slate-200">
                                    <Bars3Icon className="h-5 w-5" />
                                </button>
                            ) : (
                                <button onClick={() => setNavbarOpen(false)}  className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:borer-white text-slate-200">
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            )
                        }
                    </div>
                <div className="menu block md:w-auto" id="navbar"> 
                    <ul className= "flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-5 mb-0 hidden sm:flex">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLinks}  /> : null}
        </nav>
    );
};

export default Navbar;
