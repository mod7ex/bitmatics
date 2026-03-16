import { STATS } from '@/lib/utils'

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1240 0%, #1A1F71 50%, #0D1240 100%)" }}
    >
      {/* Animated dot grid */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(107,140,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span className="absolute top-1/4 left-[8%] text-white/[0.08] font-display text-[120px] font-bold">∑</span>
        <span className="absolute bottom-1/3 right-[8%] text-white/[0.08] font-display text-[100px] font-bold">π</span>
        <span className="absolute top-[15%] right-[20%] text-white/[0.07] font-display text-[80px] font-bold">∫</span>
        <span className="absolute bottom-[20%] left-[18%] text-white/[0.07] font-display text-[90px] font-bold">√</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fade-slide-up"
          style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#6B8CFF] animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
            Accepting New Students
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-white font-display font-bold leading-[1.05] mb-6 animate-fade-slide-up"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          Master Maths{" "}
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #6B8CFF 0%, #A5B8FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One Step at a Time
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/70 max-w-[600px] mx-auto mb-10 animate-fade-slide-up"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "1.7",
            animationDelay: "0.35s",
            animationFillMode: "both",
          }}
        >
          Personalised one-to-one remote tutoring for Collège and Lycée students.
          Build real understanding, boost your confidence, and achieve the grades you deserve.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-slide-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <button
            onClick={() => onScrollTo("contact")}
            className="group px-8 py-4 bg-white text-[#1A1F71] font-semibold rounded-xl text-base hover:bg-[#F5F5F3] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[rgba(26,31,113,0.3)] hover:shadow-xl hover:shadow-[rgba(26,31,113,0.4)] hover:-translate-y-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Book a Free Intro Call
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => onScrollTo("pricing")}
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl text-base hover:bg-white/10 transition-all duration-200 active:scale-[0.97] backdrop-blur-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            View Pricing
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-[500px] mx-auto animate-fade-slide-up"
          style={{ animationDelay: "0.65s", animationFillMode: "both" }}
        >
          {Object.values(STATS).map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-white font-bold text-2xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/50 text-xs mt-0.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[10vh] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #F5F5F3)" }}
      />

    </section>
  );
}
