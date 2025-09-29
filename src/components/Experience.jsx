import React, { useEffect, useRef, useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import experiences from "../data/experience";

export default function Experience() {
  const cardRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);

  // Animate vertical line height on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (cardRefs.current.length === 0) return;

      const firstCard = cardRefs.current[0];
      const lastCard = cardRefs.current[cardRefs.current.length - 1];
      if (!firstCard || !lastCard) return;

      const top = firstCard.getBoundingClientRect().top + window.scrollY;
      const bottom = lastCard.getBoundingClientRect().bottom + window.scrollY;
      const scrollY = window.scrollY + window.innerHeight / 2;

      let height = scrollY - top;
      if (height < 0) height = 0;
      if (height > bottom - top) height = bottom - top;

      setLineHeight(height);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center">
        $ ./experience
      </h2>

      <div className="relative flex flex-col gap-6 md:gap-12">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: lineHeight }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          className="absolute top-0 left-6 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-[2px] rounded-full shadow-sm"
          style={{
            background: "linear-gradient(to bottom, #3b82f6 0%, #a21caf 100%)",
            boxShadow: "0 0 6px #3b82f6aa, 0 0 10px #a21cafaa",
          }}
        />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          const controls = useAnimation();
          const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          useEffect(() => {
            if (inView) controls.start({ opacity: 1, y: 0 });
          }, [controls, inView]);

          const setRefs = (el) => {
            inViewRef(el);
            cardRefs.current[idx] = el;
          };

          // Padding/margin for desktop spacing
          const leftDesktop = "md:justify-end md:mr-12"; // margin-right keeps distance from line
          const rightDesktop = "md:justify-start md:ml-12"; // margin-left keeps distance from line
          const mobilePadding = "pl-12 pr-4 md:pl-0 md:pr-0"; // mobile padding for content

          return (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row w-full items-start md:items-center"
            >
              {/* Left half */}
              <div
                className={`w-full md:w-1/2 flex ${mobilePadding} ${
                  isLeft ? leftDesktop : rightDesktop
                }`}
              >
                {isLeft && <Card ref={setRefs} controls={controls} exp={exp} />}
              </div>

              {/* Right half */}
              <div
                className={`w-full md:w-1/2 flex ${mobilePadding} ${
                  !isLeft ? rightDesktop : leftDesktop
                }`}
              >
                {!isLeft && <Card ref={setRefs} controls={controls} exp={exp} />}
              </div>

              {/* Connector dot */}
              <div
                className="absolute left-3 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2
                            z-20 flex items-center justify-center w-8 h-8 bg-lightbg dark:bg-darkbg2 rounded-full shadow-md"
              >
                <FaMapMarkerAlt size={20} className="text-[#00ffea]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Card component
const Card = React.forwardRef(({ exp, controls }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-lightbg dark:bg-darkbg2 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-accent/30 transition transform hover:scale-[1.02] w-full md:max-w-lg flex flex-col gap-4"
  >
    <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
    <p className="flex items-center gap-2 text-base font-semibold text-gray-700 dark:text-gray-300">
      <FaBuilding className="text-accent" /> {exp.company}
    </p>
    <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
      <span className="flex items-center gap-2">
        <FaCalendarAlt className="text-accent" /> {exp.period}
      </span>
      <span className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-accent" /> {exp.location}
      </span>
    </div>
    <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
      {exp.description.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>

    {/* Colored Tags */}
    <div className="flex flex-wrap gap-2 justify-start mt-4">
      {exp.tags.map((tag, i) => {
        const tagColors = [
          "bg-indigo-600",
          "bg-emerald-600",
          "bg-pink-600",
          "bg-yellow-500",
          "bg-blue-500",
          "bg-purple-600",
          "bg-rose-600",
        ];

        const bgColor = tagColors[i % tagColors.length];

        return (
          <span
            key={i}
            className={`${bgColor} text-white text-xs px-3 py-1 rounded-full hover:opacity-90 transition`}
          >
            #{tag}
          </span>
        );
      })}
    </div>
  </motion.div>
));
