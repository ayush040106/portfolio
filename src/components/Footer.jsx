import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-[#050816] text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ayush Tiwari
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Frontend Developer • DSA Enthusiast • C / C++ Programmer
          </p>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Ayush Tiwari. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ayush040106"
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg hover:text-cyan-400 hover:border-cyan-400/40 transition"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-tiwari-51b638358/"
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg hover:text-cyan-400 hover:border-cyan-400/40 transition"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:attiwari123890@gmail.com"
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg hover:text-cyan-400 hover:border-cyan-400/40 transition"
          >
            <FiMail />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;