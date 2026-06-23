import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:attiwari123890@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
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
            Contact Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            I’m always open to learning opportunities, collaborations, internships,
            and meaningful conversations around development, DSA, and tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400 mt-1">attiwari123890@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400 mt-1">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-400 mt-1">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl bg-[#0b1220] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl bg-[#0b1220] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl bg-[#0b1220] border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;