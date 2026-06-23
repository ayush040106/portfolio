import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl px-6 py-4 shadow-lg">
          {/* Logo */}
          <a
           href="#top"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ayush Tiwari
          </a>

          {/* Nav Links */}
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

          {/* Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;