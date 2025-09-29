import { INTERNSHIPS } from "../../../data/about";
import { motion } from "framer-motion";

export default function InternshipsTab() {
  return (
    <div id="internships" tabIndex={-1} style={{ scrollMarginTop: "72px" }} className="space-y-4">
      {INTERNSHIPS.map((job) => (
        <motion.div
          key={job.title + job.company}
          whileHover={{ scale: 1.02 }}
          className="p-4 border-l-4 border-accent bg-lightbg dark:bg-darkbg2 rounded-md shadow"
        >
          <div className="font-semibold">{job.title} @ <span className="text-accent">{job.company}</span></div>
          <div className="text-xs text-gray-500 mb-1">{job.period}</div>
          <div className="text-gray-800 dark:text-gray-300 text-sm">{job.work}</div>
        </motion.div>
      ))}
    </div>
  );
}
