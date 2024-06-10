// import { AnchorLink } from 'react-anchor-link-smooth-scroll';
import { Link, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useReadingProgress from "../hooks/useReadingProgress";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

// Function component for the navigation bar
function Nav() {
    // Get reading progress completion
    const completion = useReadingProgress();

    // State for showing/hiding the navigation
    let [showNav, setShowNav] = useState(false);

    // Array of navigation items
    let navItems = [
        { name: "Home", to: "#home", num: "00" },
        { name: "Experties", to: "#exp", num: "01" },
        { name: "Projects", to: "#projects", num: "02" },
        { name: "Contact", to: "#contact", num: "03" }
    ];

    return (
        <>
            {/* Main navigation bar */}
            <nav className="fixed w-[100%] bg-grey2 z-20 ">
                <div className="relative p-4 flex lg:justify-normal justify-between text-2xl text-white font-rowdies items-center ">
                    <div className="ml-12 w-1/4 text-meadow ">ZER0</div>
                    <div className=' w-3/4 lg:flex justify-evenly items-end hidden'>
                        {/* Navigation links */}

                        {navItems.map((item, index) => (
                            <HashLink smooth before={item.num} key={index} to={item.to} className={`relative  after:content-[attr(before)] after:absolute after:text-yelloow  after:-top-2 after:text-sm after:right-0 hover:text-aqua`} >/ {item.name}</HashLink>
                        ))}
                    </div>
                    <div className="visible lg:hidden mr-12 ">
                        <button
                            className="text-2xl"
                            onClick={() => setShowNav((prev) => !prev)}>
                            {!showNav ? <FaBars /> : <FaWindowClose />}
                        </button>
                    </div>
                    {/* Reading progress bar */}
                    <span style={{ transform: `translateX(${completion - 100}%)` }} className="absolute bg-yelloow h-1 w-full bottom-0 left-0" />
                </div>
            </nav >

            {/* Mobile navigation menu */}
            {
                showNav &&
                <motion.nav
                    initial={{ y: -200, scale: 0.5 }}
                    animate={{ y: 0, scale: 1 }}
                    className="fixed right-9 pt-16 w-[45%] z-10 h-[55%] bg-raisinBlack flex flex-col"
                >

                    {navItems.map((item, index) => (
                        <HashLink smooth before={item.num} key={index} onClick={() => setShowNav((prev) => !prev)} to={item.to} className={`h-1/4 relative after:content-[attr(before)] hover:bg-grey2 after:absolute text-center text-xl flex items-center justify-center after:text-yelloow after:bottom-1 text-meadow font-semibold after:text-sm after:right-[50%] after:translate-x-[50%] hover:text-aqua border-2 border-grey2`}>/ {item.name}</HashLink>
                    ))}

                </motion.nav>
            }
        </>
    );
}

export default Nav;
