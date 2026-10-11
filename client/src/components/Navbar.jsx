import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "Features",
    href: "#features",
    id: "features"
  },
  {
    label: "How it works",
    href: "#how-it-works",
    id: "how-it-works"
  },
  {
    label: "Product",
    href: "#product",
    id: "product"
  },
  {
    label: "Reviews",
    href: "#reviews",
    id: "reviews"
  },
  {
    label: "Pricing",
    href: "#pricing",
    id: "pricing"
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("features");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setScrolled(scrollTop > 25);

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const currentProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(currentProgress);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "features";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 92;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    setOpen(false);
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{
          width: `${progress}%`
        }}
      />

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container nav-inner">
          <button
            className="logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            <span className="logo-mark">N</span>

            <span>
              Nova<span>Flow</span>
            </span>
          </button>

          <nav className="desktop-nav main-nav">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <button
                  key={item.id}
                  className={`nav-link ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      className="nav-active-line"
                      layoutId="nav-active-line"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="nav-actions desktop-nav">
            <button
              className="nav-login"
              onClick={() =>
                handleNavigation("contact")
              }
            >
              Get in touch
            </button>

            <button
              className="button button-small"
              onClick={() =>
                handleNavigation("pricing")
              }
            >
              Start free
              <span className="icon-arrow">↗</span>
            </button>
          </div>

          <button
            className={`mobile-menu-button ${
              open ? "menu-open" : ""
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                className="mobile-menu"
                initial={{
                  opacity: 0,
                  y: -12
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -12
                }}
                transition={{
                  duration: 0.2
                }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`mobile-nav-link ${
                      activeSection === item.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleNavigation(item.id)
                    }
                  >
                    <span>{item.label}</span>

                    {activeSection === item.id && (
                      <span className="mobile-active-dot" />
                    )}
                  </button>
                ))}

                <button
                  className="button mobile-cta"
                  onClick={() =>
                    handleNavigation("contact")
                  }
                >
                  Start free
                  <span className="icon-arrow">↗</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}