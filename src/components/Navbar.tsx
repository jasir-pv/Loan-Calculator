import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="bg-blue-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <h1 className="text-lg font-extrabold text-white tracking-wide sm:text-2xl">Loan Calculator</h1>
        <ul className="flex space-x-6 items-center">
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
      </nav>
    </header>
  )
}

export default Navbar
