import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#0b0b0c]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 lg:px-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-white shrink-0"
            aria-label="Go to homepage"
          >
            <div className="text-text-primary">
            <span className="font-display text-base font-extrabold tracking-tight min-[400px]:text-lg sm:text-xl lg:text-2xl">
              <span className="hidden min-[400px]:inline">PORTFOLIO :</span>
              <span className="text-yellow-500 min-[400px]:ml-2">VISHAL MAURYA</span>
            </span>
          </div>
          </Link>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`relative inline-flex rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-yellow-500 text-black"
                          : "text-gray-300 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="ml-2">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:-translate-y-0.5"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="relative z-60 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white backdrop-blur-xl transition hover:bg-white/8 md:hidden"
          >
            <span className="relative flex h-5 w-6 flex-col items-center justify-center">
              <span
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={`fixed inset-x-4 top-20 z-50 rounded-4xl border border-white/10 bg-[#121214]/98 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:inset-x-6 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            }`}
          >
            <ul className="space-y-2.5">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-medium transition ${
                        isActive
                          ? "bg-yellow-500 text-black"
                          : "bg-white/3 text-white hover:bg-white/6"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-sm opacity-50">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-500 px-5 py-4 text-sm font-bold text-black transition hover:bg-yellow-400"
            >
              Let’s Talk
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
