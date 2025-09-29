import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="min-h-[60vh] px-4 sm:px-8 py-20 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center tracking-wide break-words">
        $ ./skills
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-5xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center bg-[#1a2227] shadow-lg rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:bg-[#22272e]/90"
          >
            {/* Skill Icon */}
            <div className="relative w-10 h-10 mb-2">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Skill Name */}
            <span className="text-xs sm:text-sm text-gray-100 mt-1 font-semibold tracking-wide text-center select-none">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
