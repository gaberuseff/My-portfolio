import {useState} from "react";

import {LINKS} from "../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handelLickClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center max-w-6xl mx-auto
        md:my-2 bg-gray-900/30 md:rounded-xl backdrop-blur-lg px-6 py-4">
        <div className="text-white px-2 py-1 font-semibold text-lg uppercase">
          <a href="/">Gaber Usef</a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-white hover:text-stone-400 transition duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden bg-stone-950/30 backdrop-blur-lg
            rounded-xl mt-2 px-6 py-4 flex flex-col space-y-4 
            max-w-6xl mx-auto">
          {LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-white hover:text-stone-400 py-2 transition duration-300
              focus:outline-none"
              onClick={handelLickClick}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
