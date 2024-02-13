import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-wrap itmes-cetner justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-white font-semibold">
                LOGO
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar"> 
                    <ul>
                        <li>
                            <Link href={"/"} className="text-white">MPCB</Link>
                        </li>
                        <li>
                            <Link href={"/about"} className="text-white">Projects</Link>
                        </li>
                        <li>
                            <Link href={"/projects"} className="text-white">About</Link>
                        </li>
                        <li>
                            <Link href={"/contact"} className="text-white">Contact</Link>
                        </li>

                    </ul>
                
                </div>
            </div>
        </nav>
    );
};

export default Navbar;