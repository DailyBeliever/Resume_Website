import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const NavLinks = [
    {
        title: "MPCB",
        path: "#mpcb",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    return (
        <nav className= "fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap itmes-cetner justify-between mx-auto px-5 py-4">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="menu block md:w-auto" id="navbar"> 
                    <ul className= "flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
