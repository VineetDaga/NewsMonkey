import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-semibold uppercase">
          <strong>NewsMonkey</strong>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 6h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
            />
          </svg>
        </button>
        <nav className={`md:flex md:items-center  ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-4">
            <li>
              <NavLink to="/" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/business" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Business
              </NavLink>
            </li>
            <li>
              <NavLink to="/entertainment" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink to="/health" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Health
              </NavLink>
            </li>
            <li>
              <NavLink to="/science" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Science
              </NavLink>
            </li>
            <li>
              <NavLink to="/sports" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className={({isActive}) => 
                                        `block py-2 px-4 duration-200 ${isActive ? "text-lime-500 scale-125 duration-100" : "text-white scale-100 duration-100"} rounded-xl text-center `
                                }>
                Technology
              </NavLink>
            </li>
            

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

