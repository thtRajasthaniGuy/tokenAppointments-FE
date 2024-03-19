import React, { useState, useEffect, useRef } from "react";
import useRedirect from "../../hooks/Redirect";
const Header = () => {
  const { redirectTo } = useRedirect();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleClickOutside = (event: any) => {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        return;
      }
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 mx-auto sm:px-6 lg:px-8 h-16 lg:h-20">
        <div className="flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div
            ref={overlayRef}
            className="fixed inset-0 z-10 flex flex-col justify-center items-center bg-white bg-opacity-95 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative w-full">
              <button
                type="button"
                className="absolute top-4 right-4 p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Search Doctor
              </a>
            </div>
            <a
              title=""
              className="mt-4 inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
              onClick={() => redirectTo("/login")}
            >
              Login
            </a>
          </div>
        )}
        <div className="hidden lg:flex lg:items-center lg:space-x-10 mr-4">
          <a
            href="#"
            title=""
            className="text-base text-black transition-all duration-200 hover:text-opacity-80 flex-shrink-0"
          >
            Search Doctor
          </a>
          <a
            title=""
            className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
            role="button"
            onClick={() => redirectTo("/login")}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
