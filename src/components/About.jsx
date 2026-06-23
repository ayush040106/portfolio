import { motion } from "framer-motion";

function About() {
  const skills = ["C", "C++", "DSA", "Python", "Java"];

  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-300 leading-8">
            I am a 3rd-year CSE (AI & ML) student with a strong interest in
            frontend development and problem solving. I have a strong command of
            C and C++ and enjoy solving DSA problems. Along with that, I know
            Python and Java, and I also have basic knowledge of HTML, CSS, and
            JavaScript. I am currently focused on improving my development
            skills and building clean, user-friendly projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;