"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="container text-white mx-auto  px-4 py-4 flex items-center md:pl-14 justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-semibold flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <Link href="/">Remote+</Link>
          </div>
          <div>
            <div className="hidden md:flex space-x-6 pl-8 text-white">
              <Link href="#" className="text-gray-300 hover:text-white">
                Products
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Resources
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Pricing
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Blog
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden space-x-4 md:flex items-center pr-14">
          <Link href="#" className="text-gray-300">
            Log in
          </Link>
          <button className="bg-gradient-to-b from-teal-600 to-teal-900 text-white py-2 px-4 rounded-full shadow-md transform text-sm transition-all duration-300 hover:scale-105 flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 22"
              strokeWidth="1"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <span>Try For Free</span>
          </button>
        </div>

        <div className="md:hidden flex items-center ">
          <button
            className="mobile-menu-button focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`bg-white w-full p-4 shadow-lg text-center transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link href="/#" className="block px-4 py-2 text-black text-lg">
            Explore
          </Link>
          <Link href="/#" className="block px-4 py-2 text-black text-lg">
            Community
          </Link>
          <Link href="/#" className="block px-4 py-2 text-lg text-black">
            Learn
          </Link>
          <Link href="/#" className="block px-4 py-2 text-lg text-black">
            Support
          </Link>
          <Link href="#" className="block px-4 py-2 text-lg text-black">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
