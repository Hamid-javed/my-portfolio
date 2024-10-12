// import React, { useState, useEffect } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { SiReactos } from "react-icons/si";
// import MyCV from "./MyCV.js"

// function Navbar() {
//     const [showMenu, setShowMenu] = useState(false);

//     const scrollToComponent = (componentId) => {
//         const component = document.getElementById(componentId);
//         if (component) {
//             component.scrollIntoView({
//                 behavior: 'smooth',
//                 duration: 2000,
//                 block: 'start',
//                 inline: 'nearest',
//             });
//         }
//     };

//     const handleWindowResize = () => {
//         const screenWidth = window.innerWidth;
//         if (screenWidth > 640 && showMenu) {
//             setShowMenu(false);
//         }
//     };
//     // to handle window resize for mobile view
//     useEffect(() => {
//         window.addEventListener('resize', handleWindowResize);
//         return () => {
//             window.removeEventListener('resize', handleWindowResize);
//         };
//     }, [showMenu]);

//     return (
//         <>
//             <div className="py-[1rem] lg:px-16">
//                 <div className="flex justify-between items-center px-[3.5rem] sm:px-[1.5rem]">
//                     <SiReactos className="text-4xl text-[#ec6e59]" />

//                     {!showMenu && (
//                         <ul className="hidden tm:flex sm:flex md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 lg:gap-16 md:gap-10 sm:gap-4">
//                             <li>
//                                 <a
//                                     className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                     onClick={() => scrollToComponent('experience')}
//                                 >
//                                     Experience
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                     onClick={() => scrollToComponent('projects')}
//                                 >
//                                     Projects
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                     onClick={() => scrollToComponent('contact')}
//                                 >
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>

//                     )}

//                     {!showMenu && (
//                         <div className="hidden tm:block sm:block md:flex">
//                             <MyCV />
//                         </div>
//                     )}
//                 </div>

//                 <div className="flex">
//                     <div className="tm:hidden sm:hidden absolute top-[1.5rem] right-[3.5rem]">
//                         <GiHamburgerMenu
//                             className="h-6 w-6 cursor-pointer"
//                             onClick={() => setShowMenu(!showMenu)}
//                         />
//                     </div>
//                     {showMenu && (
//                         <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
//                             <a
//                                 className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                 onClick={() => scrollToComponent('experience')}
//                             >
//                                 Experience
//                             </a>
//                             <a
//                                 className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                 onClick={() => scrollToComponent('projects')}
//                             >
//                                 Projects
//                             </a>
//                             <a
//                                 className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
//                                 onClick={() => scrollToComponent('contact')}
//                             >
//                                 Contact
//                             </a>
//                             <MyCV />
//                         </ul>
//                     )}
//                 </div>
//             </div>

//         </>
//     );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiReactos } from "react-icons/si";
import MyCV from "./MyCV.js"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    const handleWindowResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };

    // to handle window resize for mobile view
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    return (
        <>
            <div className="py-[1rem] lg:px-16">
                <div className="flex justify-between items-center px-[3.5rem] sm:px-[1.5rem]">
                    <SiReactos className="text-4xl text-[#ec6e59]" />

                    {!showMenu && (
                        <ul className="hidden tm:flex sm:flex md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 lg:gap-16 md:gap-10 sm:gap-4">
                            <li>
                                <a
                                    href="#experience"  // Providing valid href
                                    className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('experience');
                                    }}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"  // Providing valid href
                                    className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('projects');
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"  // Providing valid href
                                    className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('contact');
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    )}

                    {!showMenu && (
                        <div className="hidden tm:block sm:block md:flex">
                            <MyCV />
                        </div>
                    )}
                </div>

                <div className="flex">
                    <div className="tm:hidden sm:hidden absolute top-[1.5rem] right-[3.5rem]">
                        <GiHamburgerMenu
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                    {showMenu && (
                        <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
                            <li>
                                <a
                                    href="#experience"  // Providing valid href
                                    className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('experience');
                                    }}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"  // Providing valid href
                                    className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('projects');
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"  // Providing valid href
                                    className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToComponent('contact');
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                            <MyCV />
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
