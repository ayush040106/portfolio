import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "AI Interview Simulator",
      description:
        "An interactive AI-inspired mock interview web application designed to simulate a real interview environment. It asks users interview questions one by one, provides instant feedback, tracks progress, supports dark mode, and creates a more engaging interview practice experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ayush040106/Hackathon",
      live: "https://ai-interview-simulator-bay.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-semibold tracking-wide uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            A project that reflects my interest in interactive web applications
            and building useful tools for interview preparation.
          </p>
        </motion.div>

        {/* Project Card */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl hover:-translate-y-2 hover:border-cyan-400/30 transition duration-300"
            >
              {/* Top gradient line */}
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6" />

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-8 mb-6 text-lg">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:scale-105 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;