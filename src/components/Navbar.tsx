import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <h1 className="text-lg font-extrabold text-white tracking-wide sm:text-2xl">Loan Calculator</h1>
        
        {/* Desktop  */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-md"
            >
              Exchange Rates
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-md"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-md"
            >
              Error Page
            </a>
          </li>
        </ul>

        {/* Open Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>


{/* Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-56 bg-blue-600 shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <a
              href="#"
              className="block text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-3 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-3 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Exchange Rates
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-3 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white font-semibold hover:bg-blue-800 transition duration-300 px-4 py-3 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Error Page
            </a>
          </li>
        </ul>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;