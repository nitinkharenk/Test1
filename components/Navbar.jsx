"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Brand</div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="md:flex items-center md:space-x-4">
            <li>
              <button
                className="block md:inline-block text-white p-2"
                onClick={() => handleLinkClick('/')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="block md:inline-block text-white p-2"
                onClick={() => handleLinkClick('/about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="block md:inline-block text-white p-2"
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
