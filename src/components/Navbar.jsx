import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          {/* Logo */}
          <a
            href="#top"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ayush Tiwari
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-300 hover:text-cyan-400 transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2.5 font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition font-medium"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-center font-semibold text-white shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;