import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SVGLogo from "./ui/logo";
import { NAV_LINKS } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0E1350]/90 backdrop-blur-md shadow-lg shadow-[rgba(26,31,113,0.15)]"
        : "bg-transparent"
        }`}
    >

      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-1 group"
        >
          <SVGLogo width="150" bitColor="#d1d1d1" maticsColor="#d1d1d1" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="ml-2 px-5 py-2 bg-white text-[#1A1F71] text-sm font-semibold rounded-lg hover:bg-[#F5F5F3] transition-all duration-200 active:scale-[0.97]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Book a Session
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#0E1350]/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors text-left"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2.5 bg-white text-[#1A1F71] text-sm font-semibold rounded-lg hover:bg-[#F5F5F3] transition-all w-full active:scale-[0.97]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  );
}
