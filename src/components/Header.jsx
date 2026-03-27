import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className=" bg-black mt-5 rounded-4xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl  md:text-2xl font-bold tracking-wide text-white"
        >
             Muhammad <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Hamza</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="relative group font-medium text-white"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Contact Button */}
         <button className="bg-gradient-to-r from-indigo-400 to-pink-500 text-white px-2 py-1 mb-3.5 rounded-2xl hover:opacity-90 transition mt-4">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl "
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="absolute top-6 right-6 text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 font-medium"
          >
            {link.name}
          </Link>
        ))}
              <button className="bg-black text-white px-6 py-6 rounded-2xl hover:opacity-90 transition mt-4">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </button>

      </div>
    </nav>
  );
};

export default Header;