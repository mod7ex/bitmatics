import { Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import SVGLogo from "@/components/ui/logo";
import { NAV_LINKS } from '@/lib/utils'

const socials = [
  { icon: Twitter, href: "", label: "Twitter" },
  { icon: Linkedin, href: "", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/bitmatics", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/+212767875432", label: "Whatsapp" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "#0D1240" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-[300px]">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-block mb-4"
            >
              {/* <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                i<span style={{ color: "#6B8CFF" }}>Maths</span>
              </span> */}
              <SVGLogo width="150" bitColor="#d1d1d1" maticsColor="#d1d1d1" />
            </a>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Personalised one-to-one remote maths tutoring for Collège & Lycée students.
              Helping you achieve the grades you deserve.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <span
              className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-white/60 text-sm hover:text-white transition-colors text-left"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact & socials */}
          <div className="flex flex-col gap-3">
            <span
              className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Connect
            </span>
            <a
              href="mailto:info@bitmatics.com"
              className="text-white/60 text-sm hover:text-white transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              info@bitmatics.com
            </a>
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  onClick={(e) => { if (!s.href) e.preventDefault(); }}
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Bitmatics. All rights reserved.
          </p>
          <p
            className="text-white/30 text-xs text-center"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Expert one-to-one maths tutoring · Collège & Lycée
          </p>
        </div>
      </div>
    </footer>
  );
}
