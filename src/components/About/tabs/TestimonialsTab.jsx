import { TESTIMONIALS } from "../../../data/about";
import { motion } from "framer-motion";

export default function TestimonialsTab() {
  return (
    <div id="testimonials" tabIndex={-1} style={{ scrollMarginTop: "72px" }} className="space-y-4">
      {TESTIMONIALS.map((t) => (
        <motion.div
          key={t.author}
          whileHover={{ scale: 1.02 }}
          className="bg-lightbg dark:bg-darkbg2 rounded-xl p-4 shadow border-l-4 border-accent"
        >
          <div className="italic text-gray-900 dark:text-gray-200">"{t.quote}"</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-right">— {t.author}</div>
        </motion.div>
      ))}
    </div>
  );
}
