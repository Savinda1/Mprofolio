import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white/80 backdrop-blur-lg shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          Nilmini Nawoda
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/day/1" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md animate-slideDown">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">

            <li>
              <Link 
                to="/" 
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/day/1" 
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600 transition"
              >
                Projects
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
