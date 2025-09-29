import { useState } from "react";
import { COURSES } from "../../../data/about";
import { motion } from "framer-motion";

export default function CoursesTab() {
  const [modalImage, setModalImage] = useState(null);

  // Handle click on course item
  const handleClick = (course) => {
    if (course.file) {
      // Show modal with local image
      setModalImage(course.file);
    } else if (course.url) {
      // Open external link in new tab
      window.open(course.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div
        id="courses"
        tabIndex={-1}
        style={{ scrollMarginTop: "72px" }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {COURSES.map((course) => (
          <motion.div
            key={course.name}
            onClick={() => handleClick(course)}
            whileHover={{ scale: course.file || course.url ? 1.05 : 1 }}
            className={`flex flex-col items-center bg-lightbg dark:bg-darkbg2 rounded-lg p-3 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-700
            ${course.file || course.url ? "cursor-pointer" : "cursor-default opacity-80"}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(course);
            }}
          >
            <img
              src={course.badge}
              alt={`${course.name} badge`}
              className="w-20 h-20 mb-2 shadow-sm"
            />
            <div className="font-semibold text-center text-xs">{course.name}</div>
            <div className="text-[10px] text-gray-600 dark:text-gray-400 text-center">
              {course.platform} {course.year && `• ${course.year}`}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close certificate preview"
            >
              &#10005;
            </button>
            <img
              src={modalImage}
              alt="Course certificate"
              className="max-w-full max-h-[70vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
