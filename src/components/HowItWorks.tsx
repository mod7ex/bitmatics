import { useInView } from "@/hooks/useInView";
import { CalendarCheck, ClipboardList, GraduationCap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a Free Intro Call",
    description:
      "A no-obligation 30-minute call to discuss your goals, current level, and any specific areas you'd like to improve. We'll match you with the right approach.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get a Personalised Plan",
    description:
      "We'll design a tailored learning roadmap based on your assessment, exam board, and timeline — so every session moves you forward with purpose.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Start Learning & Improving",
    description:
      "Jump into live one-to-one sessions via video call. Interactive whiteboards, worked examples, and regular progress check-ins keep you on track.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" className="py-24 lg:py-32" style={{ backgroundColor: "#EFEFED" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How It Works
          </div>
          <h2
            className="text-[#111318] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            Three Steps to{" "}
            <span className="text-[#1A1F71]">Maths Confidence</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 relative ${inView ? "section-visible" : "section-hidden"
            }`}
          style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
        >
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px"
            style={{ background: "linear-gradient(90deg, #1A1F71, rgba(26,31,113,0.2) 50%, #1A1F71)" }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Number + Icon */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white relative z-10"
                  style={{
                    boxShadow: "0 8px 32px rgba(26,31,113,0.12)",
                    border: "1px solid rgba(26,31,113,0.08)",
                  }}
                >
                  <step.icon size={28} style={{ color: "#1A1F71" }} />
                </div>
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1A1F71] text-white flex items-center justify-center text-xs font-bold z-20"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.number.slice(1)}
                </span>
              </div>

              <div
                className="text-xs font-bold tracking-[0.15em] uppercase text-[#7D7D7D] mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Step {step.number}
              </div>
              <h3
                className="text-[#111318] font-bold text-xl mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#7D7D7D] text-sm leading-relaxed max-w-[280px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1F71] text-white font-semibold rounded-xl hover:bg-[#141960] transition-all duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              boxShadow: "0 8px 32px rgba(26,31,113,0.25)",
            }}
          >
            Start with a Free Call
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
