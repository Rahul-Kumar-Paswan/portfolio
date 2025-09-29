import { EDUCATION } from "../../../data/about";
import { motion } from "framer-motion";

export default function EducationTab() {
  return (
    <div
      id="education"
      tabIndex={-1}
      style={{ scrollMarginTop: "72px" }}
      className="space-y-4"
    >
      {EDUCATION.map((ed, idx) => (
        <motion.div
          key={ed.degree + ed.institution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="p-5 border-l-4 border-accent bg-lightbg dark:bg-darkbg2 rounded-md shadow hover:shadow-lg transition-shadow"
        >
          <div className="font-semibold text-lg">
            {ed.degree} @ <span className="text-accent">{ed.institution}</span>
          </div>
          <div className="text-xs text-gray-500 mb-1">{ed.years}</div>
          <div className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
            {ed.details}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
  