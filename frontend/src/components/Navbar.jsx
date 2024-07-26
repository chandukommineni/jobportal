import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white mt-[21px] rounded-[122px]">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 md:rounded-[122px] shadow-md">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-8 w-8" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
                        <img className="h-10 w-auto" src="/cmwlogo.svg" alt="CyberMindWorks" />
                    </div>
                    <div className="hidden sm:flex sm:ml-6 w-full justify-evenly">
                        <a href="#" className="text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Home</a>
                        <a href="#" className="text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Find Jobs</a>
                        <a href="#" className="text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Find Talents</a>
                        <a href="#" className="text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">About us</a>
                        <a href="#" className="text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Testimonials</a>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0 justify-end " style={{width:"200px"}}>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium">Create Jobs</button>
                    </div>
                </div>

                {isOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Find Jobs</a>
                            <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Find Talents</a>
                            <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About us</a>
                            <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
