import { useState, useEffect, useRef } from "react";
import profileLogo from "/src/assets/profile.svg";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

// Simplified nav items (no children)
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollTo = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className={`sticky z-50 flex justify-center ${mobileOpen ? "top-0" : "top-4"}`}>
      <div className="bg-darkbg dark:bg-dark2 rounded-2xl shadow-2xl mx-4 w-full max-w-6xl">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 text-white">
          {/* Logo */}
          <a href="/" className="flex items-center select-none flex-shrink-0">
            <img src={profileLogo} alt="logo" className="h-10 w-10 rounded-full mr-3" draggable={false} onContextMenu={e => e.preventDefault()} />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-gradient-1">RahulVerse</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center font-medium mx-auto text-white">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={e => handleScrollTo(e, item.href)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    item.label === "Home" ? "bg-accent/10 text-accent shadow" : "hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 bg-darkbg/90 dark:bg-lightbg/80 text-accent hover:text-white rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span className={`block transition-transform duration-500 ${theme === "dark" ? "rotate-360" : "rotate-0"}`}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </span>
            </button>
            <button
              className="md:hidden p-2 rounded-full focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <FaBars size={22} />
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        <div
          ref={mobileRef}
          className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)}></div>
          <div className="relative bg-darkbg dark:bg-dark2 text-white rounded-b-xl shadow-lg max-w-full mx-auto overflow-hidden backdrop-blur-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <a href="/" className="flex items-center select-none">
                <img src={profileLogo} alt="logo" className="h-10 w-10 rounded-full mr-3" draggable={false} onContextMenu={e => e.preventDefault()} />
                <span className="text-xl font-bold text-gradient-1">RahulVerse</span>
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle Dark Mode"
                  className="p-2 bg-darkbg/90 dark:bg-lightbg/80 text-accent hover:text-white rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span className={`block transition-transform duration-500 ${theme === "dark" ? "rotate-360" : "rotate-0"}`}>
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                  </span>
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full focus:outline-none"
                >
                  <FaTimes size={22} />
                </button>
              </div>
            </div>
            <ul className="flex flex-col gap-1 w-full px-6 pb-6">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={e => handleScrollTo(e, item.href)}
                    className="w-full block px-4 py-3 rounded-lg hover:bg-accent/20 text-lg font-medium transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
