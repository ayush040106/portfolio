import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "AWS Academy Graduate - Cloud Web Application Builder",
      issuer: "AWS Academy",
      year: "2026",
      description:
        "Completed training focused on building cloud-based web applications using AWS services and deployment workflows.",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      year: "2026",
      description:
        "Learned the fundamentals of cloud computing, AWS core services, pricing, security, and architecture basics.",
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "AWS Academy",
      year: "2026",
      description:
        "Learned cloud architecture principles, AWS infrastructure design, and how to build scalable and reliable cloud solutions.",
    },
    {
      title: "HCL GUVI Hackathon Participation Certification",
      issuer: "HCL GUVI",
      year: "2025",
      description:
        "Participated in a hackathon environment focused on teamwork, problem solving, and building practical tech solutions.",
    },
    {
      title: "Drone Technology Training Program Participation Certificate",
      issuer: "IHFC, IIT Delhi",
      year: "2025",
      description:
        "Attended a training program on drone technology covering its fundamentals, applications, and emerging use cases.",
    },
    {
      title: "Web Development for Beginners",
      issuer: "Simplilearn",
      year: "2026",
      description:
        "Learned the basics of web development including website structure, frontend concepts, and beginner development workflow.",
    },
    {
      title: "Introduction to HTML",
      issuer: "Simplilearn",
      year: "2026",
      description:
        "Built a foundation in HTML, page structure, semantic elements, and creating basic web pages.",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-3">
            My Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="flex items-center justify-between mb-3 gap-4">
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <span className="text-sm text-cyan-400 whitespace-nowrap">
                  {cert.year}
                </span>
              </div>

              <p className="text-purple-300 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-400 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;