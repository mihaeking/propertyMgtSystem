'use client'

import React, { useState } from "react";

const Sidebar= () => {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex">
             <div

           

        className={`bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
          }`}>
        </div> 

        <div className="flex flex-col items-center">
          <div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
          {/* <div className="mt-5">
            <a href="#"
              className="text-white 
                          hover:text-gray-300">
              About
            </a>
          </div> */}
          <div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Property Management            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div><div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
          <div className="mt-5">
            <a href="../page.tsx"
              className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
        </div>

        <div className={`flex-1 p-4 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 
                               text-white font-bold py-2 px-4 rounded"
                               onClick ={() => setIsOpen(!isOpen)}>

      {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}

            </button>
          </div>

        </div>
      </div>
    );
};

export default Sidebar;