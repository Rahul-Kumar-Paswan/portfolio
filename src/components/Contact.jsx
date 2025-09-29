import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMail, HiChevronDown } from "react-icons/hi";
import { Listbox } from "@headlessui/react";
import emailjs from "emailjs-com";
import socialLinks from "../data/socialLinks";

export default function Connect() {
  const [selected, setSelected] = useState("Hire Me");

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const formRef = useRef();

  const dropdownOptions = [
    "Hire Me",
    "General Inquiries",
    "Project Inquiries",
    "Collaboration Request",
    "Feedback/Question",
    "Bug Report",
    "Feature Request",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Debugging 
    // console.log("Form submitted!", formData);
    // console.log({
    //   service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    // });

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
          setSelected("Hire Me");
        },
        () => {
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="px-4 py-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-8 text-center tracking-wide">
        $ ./Let’s Connect
      </h2>

      <p className="text-lg text-gray-200 mb-10 text-center max-w-3xl italic">
        I’m always open to discussing DevOps, cloud architecture, and
        infrastructure automation. Drop me a message, and let’s create something
        scalable and reliable.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-8 w-full max-w-6xl">
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#1f1f1f]/80 backdrop-blur-xl rounded-xl border border-white/30 p-8 sm:p-10 flex flex-col gap-6 w-full max-w-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex flex-col sm:flex-row gap-4 relative">
            <input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-[#2a2a2a] border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffea] transition"
              placeholder="Your Name"
            />
            <div className="flex-1 relative">
              <input
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2a2a2a] border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffea] transition"
                placeholder="Your Email"
              />
              <HiOutlineMail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Subject (hidden) */}
          <input type="hidden" name="subject" value={selected} />

          {/* Dropdown */}
          <div className="relative w-full">
            <Listbox value={selected} onChange={setSelected}>
              <Listbox.Button className="w-full px-4 py-3 rounded-2xl bg-[#2a2a2a] border border-white/30 shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00ffea] cursor-pointer flex justify-between items-center">
                {selected}
                <HiChevronDown className="ml-2 text-[#00ffea]" size={20} />
              </Listbox.Button>
              <Listbox.Options className="absolute mt-2 w-full rounded-xl bg-gray-800 shadow-lg border border-white/20 overflow-hidden z-10 text-sm">
                {dropdownOptions.map((option, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={option}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer ${
                        active ? "bg-[#00ffea]/30 text-white" : "text-gray-200"
                      }`
                    }
                  >
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="px-4 py-3 rounded-xl bg-[#2a2a2a] border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffea] transition"
            placeholder="Your Message"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#00ffea]/20 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold tracking-wide hover:bg-[#00ffea]/30 transition-transform duration-200 hover:scale-105"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Message
          </button>
        </form>

        {/* Info + Social */}
        <div className="flex flex-col gap-8 w-full max-w-xl flex-1">
          {/* Opportunities */}
          <div className="flex items-center gap-5 bg-[#2f2f4f] rounded-xl px-6 sm:px-12 py-6 sm:py-8 shadow-lg w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center justify-center w-8 h-8">
              <span className="block w-6 h-6 bg-green-500 rounded-full"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Exploring New Opportunities
              </span>
              <span className="text-sm text-gray-300 mt-2 italic">
                “I’m excited to explore opportunities where I can contribute and grow. Feel free to reach out — I’d be happy to connect!”
              </span>
            </div>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-5 bg-[#2f2f4f] rounded-xl px-6 sm:px-12 py-6 sm:py-8 shadow-lg w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-[#22314c]/50 text-blue-400">
              <FiDownload size={28} />
            </span>
            <div className="flex flex-col">
              <a
                href={socialLinks.resume}
                download
                className="text-lg sm:text-xl font-bold text-white hover:underline cursor-pointer"
              >
                Download Resume
              </a>
              <span className="text-sm text-gray-300 mt-2 italic">
                “A closer look at my skills and expertise.”
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 sm:gap-10 mt-2 text-white text-3xl sm:text-4xl justify-center">
            <a
              aria-label="GitHub"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ffea] transition transform hover:-translate-y-2 duration-300"
            >
              <FaGithub />
            </a>
            <a
              aria-label="LinkedIn"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ffea] transition transform hover:-translate-y-2 duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              aria-label="Email"
              href={socialLinks.email}
              className="hover:text-[#00ffea] transition transform hover:-translate-y-2 duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
