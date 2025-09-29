import { useState, useEffect } from "react";
import profileImg from "../../assets/profile.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { FaUserGraduate, FaLaptopCode, FaCertificate, FaBookOpen, FaMedal, FaComments } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Tab Components
import EducationTab from "./tabs/EducationTab";
import AchievementsTab from "./tabs/AchievementsTab";
import CoursesTab from "./tabs/CoursesTab";
import InternshipsTab from "./tabs/InternshipsTab";
import CertificationsTab from "./tabs/CertificationsTab";
import TestimonialsTab from "./tabs/TestimonialsTab";

/* ------------------ Subcomponents ------------------ */

// Left Bio card
function BioCard() {
  return (
    <aside className="md:w-1/3 bg-white dark:bg-darkbg2 p-6 rounded-2xl flex flex-col items-start shadow-md mb-6 md:mb-0">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-accent mb-3 shadow self-center"
        draggable={false}
      />
      <br></br>

      {/* Terminal-style Info */}
      <div className="font-mono text-sm space-y-1">
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">whoami</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">Rahul Paswan</span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">uname -a</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">DevOps Engineer</span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">uptime</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">2+ years of experience</span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">ls skills/</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">Docker, Kubernetes, Terraform, Jenkins, Python</span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">cat certifications.txt</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">
            AWS, AZ-900, AZ-104, Google Cloud Certified
          </span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">ps aux | grep passion</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-black dark:text-white">Automation, Cloud, Scalability</span>
        </p>

        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-yellow-300">echo</span>{" "}
          <span className="text-blue-400">&gt;</span>{" "}
          <span className="text-emerald-400">"Building scalable, secure, and automated infrastructure."</span>
        </p>
      </div>
    </aside>
  );
}


// Tabs navigation
function TabsNav({ tabs, activeTab, setActiveTab }) {
  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveTab(tabs[(idx + 1) % tabs.length].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length].id);
    }
  };

  return (
    <nav
      role="tablist"
      aria-label="About sections"
      className="
        grid grid-cols-2 gap-3 mb-7
        sm:grid-cols-3
        md:flex md:flex-wrap md:justify-center md:gap-4
      "
    >
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          role="tab"
          tabIndex={activeTab === tab.id ? 0 : -1}
          aria-selected={activeTab === tab.id}
          aria-controls={`${tab.id}-panel`}
          onClick={() => {
            setActiveTab(tab.id);
            window.location.hash = `#${tab.id}`; // keeps URL in sync with history
          }}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className={`
            w-full md:w-auto
            flex items-center justify-center gap-2
            px-6 py-2
            rounded-full font-medium text-sm shadow-sm
            shadow-sm transition-all duration-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
            ${
              activeTab === tab.id
                ? "bg-accent text-white shadow"
                : "bg-darkbg2 bg-opacity-60 text-accent hover:bg-accent/20"
            }
          `}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </nav>
  );
}

// Tab content panel
function TabPanel({ activeTab, tabs }) {
  const activeTabObj = tabs.find((t) => t.id === activeTab);

  const getTabBg = (tabId) => {
    const base = "dark:bg-darkbg2";
    switch (tabId) {
      case "achievements":
        return `bg-gray-100 ${base}`;
      case "education":
      case "internships":
        return `bg-gray-50 ${base}`;
      default:
        return `bg-white ${base}`;
    }
  };

  return (
    <div
      id={`${activeTab}-panel`}
      role="tabpanel"
      aria-labelledby={activeTab}
      className={`${getTabBg(activeTab)} rounded-2xl p-6 shadow transition-all duration-300 min-h-[320px]`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTabObj?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------ Main Component ------------------ */

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: <FaUserGraduate />, content: <EducationTab /> },
    { id: "achievements", label: "Achievements", icon: <FaMedal />, content: <AchievementsTab /> },
    { id: "courses", label: "Courses", icon: <FaBookOpen />, content: <CoursesTab /> },
    { id: "internships", label: "Internships", icon: <FaLaptopCode />, content: <InternshipsTab /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate />, content: <CertificationsTab /> },
    { id: "testimonials", label: "Testimonials", icon: <FaComments />, content: <TestimonialsTab /> },
  ];

  // Handle URL hash for deep linking
  useEffect(() => {
    const tabIds = tabs.map((t) => t.id);

    const openHashTab = () => {
      const hash = (window.location.hash || "").replace("#", "");
      if (!hash) return;

      if (hash === "about") {
        const aboutEl = document.getElementById("about");
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
          aboutEl.focus?.({ preventScroll: true });
        }
        return;
      }

      if (tabIds.includes(hash)) {
        setActiveTab(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.focus?.({ preventScroll: true });
          }
        }, 60);
      }
    };

    openHashTab();
    window.addEventListener("hashchange", openHashTab);
    return () => window.removeEventListener("hashchange", openHashTab);
  }, [tabs]);

// Scroll to the correct section after tab content is mounted
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash === activeTab) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.focus?.({ preventScroll: true });
        }
      }, 100); // wait for DOM to update
    }
  }, [activeTab]);



  return (
    <section
      id="about"
      className="py-16 px-2 md:px-8 rounded-2xl shadow-lg max-w-6xl mx-auto mt-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center tracking-wide break-words">$ ./About Me
        {/* <Typewriter
          words={["$ ./About Me"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={1000}
        /> */}
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <BioCard />
        <div className="md:w-2/3 w-full flex flex-col">
          <TabsNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabPanel tabs={tabs} activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
