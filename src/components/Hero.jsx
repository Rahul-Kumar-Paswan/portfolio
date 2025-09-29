import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import socialLinks from "../data/socialLinks";

export default function Hero() {
  const messages = [
    "⚙️ DevOps Engineer",
    "☁️ Cloud Enthusiast",
    "🐳 Docker & Kubernetes",
    "🚀 CI/CD Specialist",
    "🛡️ Secure Infrastructure",
  ];

  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Cursor blinking
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect with pause at the end
  useEffect(() => {
    const currentMessage = messages[msgIndex];
    let speed = deleting ? 50 : 100;

    // Pause at the end of the message
    if (!deleting && charIndex === currentMessage.length) speed = 1500;
    if (deleting && charIndex === 0) speed = 500;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentMessage.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentMessage.length) setDeleting(true);
      } else {
        setText(currentMessage.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, msgIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-12 md:px-16 lg:px-24"
    >
      {/* Animated Background */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-20 w-full h-full"></div>
      </div> */}

      <div className="max-w-3xl w-full text-center">
        <h1 className="text-base sm:text-lg md:text-xl text-white">
          Hi, I'm{" "}
          <span
            className="font-allura text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Rahul Paswan
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-300">
          A passionate{" "}
          <span className="font-bold italic text-emerald-400 drop-shadow-md">
            DevOps Engineer
          </span>{" "}
          focused on building scalable, secure, and automated infrastructure.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-300">
          I specialize in cloud platforms, automation, and continuous delivery.
        </p>

        {/* Animated Terminal Text */}
        <p className="mt-5 text-sm sm:text-base font-bold italic text-indigo-500 drop-shadow-md min-h-[1.5em] tracking-wide">
          {text}
          <span
            className={`inline-block ml-1 bg-indigo-500`}
            style={{
              width: "0.1em",
              height: "1em",
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.2s",
            }}
          ></span>
        </p>

        {/* Buttons and Social Icons */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 font-semibold flex items-center justify-center gap-3 px-6 sm:px-10 py-2 rounded-xl shadow-lg text-base sm:text-lg border border-gray-300 transition-colors duration-300 hover:bg-black hover:text-white"
          >
            <FaFileAlt className="text-xl sm:text-2xl" />
            Resume
          </a>

          <div className="flex gap-3 sm:gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-black text-white flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow border border-black transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-black text-white flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow border border-black transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Email"
              className="bg-black text-white flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow border border-black transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <FaEnvelope className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
