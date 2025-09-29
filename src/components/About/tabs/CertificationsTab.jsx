import { CERTIFICATIONS } from "../../../data/about";
import { motion } from "framer-motion";

export default function CertificationsTab() {
  return (
    <div id="certifications" tabIndex={-1} style={{ scrollMarginTop: "72px" }} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CERTIFICATIONS.map((cert) => (
        <motion.a
          key={cert.title}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-lightbg dark:bg-darkbg2 rounded-lg p-3 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
        >
          <img
            src={cert.badge}
            alt={`${cert.title} badge`}
            className="w-20 h-20 mb-2 shadow-sm"
          />
          <div className="font-semibold text-center text-xs">{cert.title}</div>
          {cert.issuer && (
            <div className="text-[10px] text-gray-600 dark:text-gray-400 text-center">
              {cert.issuer} {cert.year && `• ${cert.year}`}
            </div>
          )}
        </motion.a>
      ))}
    </div>
  );
}
