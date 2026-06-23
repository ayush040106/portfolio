import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiCode, FiBookOpen } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-40 right-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 section pt-44 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 text-cyan-300 mb-6"
            >
              <FiBookOpen />
              <span>CSE (AI & ML) Student</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ayush Tiwari
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl mt-5 font-semibold text-gray-200"
            >
              <span className="text-cyan-400">Frontend Developer</span> |{" "}
              <span className="text-purple-400">DSA Enthusiast</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
            >
              3rd-year CSE (AI & ML) student with a strong command of{" "}
              <span className="text-white font-semibold">C and C++</span>. I enjoy
              problem solving, strengthening my DSA skills, and building clean,
              modern, user-friendly web interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
              >
                View Projects <FiArrowRight />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Me <FiMail />
              </a>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* glow behind image */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl scale-95" />

            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">
              <img
                src={heroImg}
                alt="Ayush Portfolio Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Skill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <FiCode className="text-cyan-400 text-3xl mb-3" />
            <h3 className="text-2xl font-bold text-cyan-300">C / C++</h3>
            <p className="text-gray-400 mt-2">Strong Foundation</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <FaLaptopCode className="text-purple-400 text-3xl mb-3" />
            <h3 className="text-2xl font-bold text-purple-300">DSA</h3>
            <p className="text-gray-400 mt-2">Problem Solver</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <FiCode className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-2xl font-bold text-blue-300">Web Dev</h3>
            <p className="text-gray-400 mt-2">HTML, CSS, JS</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <FiBookOpen className="text-pink-400 text-3xl mb-3" />
            <h3 className="text-2xl font-bold text-pink-300">3rd Year</h3>
            <p className="text-gray-400 mt-2">CSE (AI & ML)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;