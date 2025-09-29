import { ACHIEVEMENTS } from "../../../data/about";
import { motion } from "framer-motion";

export default function AchievementsTab() {
  return (
    <div
      id="achievements"
      tabIndex={-1}
      style={{ scrollMarginTop: "72px" }}
      className="space-y-4"
    >
      {ACHIEVEMENTS.map((ach, idx) => (
        <motion.div
          key={ach}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="p-4 border-l-4 border-accent bg-lightbg dark:bg-darkbg2 rounded-md shadow hover:shadow-lg transition-shadow"
        >
          <div className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-relaxed">
            {ach}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
