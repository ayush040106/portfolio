import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiCode } from "react-icons/fi";

function Experience() {
  const experienceData = [
    {
      icon: <FiCode />,
      title: "DSA & Problem Solving",
      subtitle: "C / C++ Practice",
      description:
        "Building a strong foundation in Data Structures and Algorithms with a primary focus on C and C++. Regularly practicing arrays, strings, recursion, STL and problem-solving to improve logic building and coding efficiency.",
    },
    {
      icon: <FiBookOpen />,
      title: "Frontend Development Learning",
      subtitle: "React / Web Development",
      description:
        "Learning modern frontend development by building projects and improving UI skills using HTML, CSS, JavaScript and React. Focused on creating responsive layouts, interactive interfaces and clean user experiences.",
    },
    {
      icon: <FiBriefcase />,
      title: "Career Preparation",
      subtitle: "Interview & Placement Focus",
      description:
        "Actively preparing for internships and future placements by strengthening coding skills, improving development knowledge and building practical projects that showcase problem-solving and implementation abilities.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
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
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            My current journey is centered around building strong programming
            fundamentals, improving problem-solving skills and growing as a
            frontend developer.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-xl hover:-translate-y-2 hover:border-cyan-400/30 transition duration-300"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-2xl text-white shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-cyan-400 font-medium mb-4">{item.subtitle}</p>

              {/* Description */}
              <p className="text-gray-400 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;