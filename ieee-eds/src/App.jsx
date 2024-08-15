// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Sponsors from "./pages/Sponsors/Sponsors";
import Members from "./pages/Members/Members";
import logo from "./assets/Logo.jpeg"

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from './path_to_logo'; // Ensure you have the correct path to the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const heading = "IEEE EDS Student Branch IITP";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="IEEE Electron Device Society Student Branch Logo" />
          <span className="self-center text-2xl font-semibold dark:text-white">
            {heading}
          {/* IEEE Electron Device Society Student Branch */}
          </span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded ${location.pathname === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={`block py-2 px-3 rounded ${location.pathname === '/events' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                className={`block py-2 px-3 rounded ${location.pathname === '/sponsors' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded ${location.pathname === '/contact' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className={`block py-2 px-3 rounded ${location.pathname === '/members' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Members
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;


// export default Navbar;



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
