import { useInView } from "@/hooks/useInView";
import { Award, BookOpen, Target, Users } from "lucide-react";
import { STATS } from '@/lib/utils'
import Img from '@/assets/img/about.jpg'

const credentials = [
  { icon: Award, label: `${STATS.experience.value} ${STATS.experience.label}` },
  { icon: BookOpen, label: "Collège and Lycée" },
  { icon: Target, label: "100% Online & Flexible" },
  { icon: Users, label: `${STATS.subscribed_students.value} ${STATS.subscribed_students.label}` },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: "#F5F5F3" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center ${inView ? "section-visible" : "section-hidden"
            }`}
          style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
        >
          {/* Left: Image */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: "linear-gradient(135deg, #1A1F71, transparent)" }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={Img}
                alt="Maths tutor at work"
                className="w-full h-full object-cover"
              />
              {/* Overlay accent */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "linear-gradient(135deg, #1A1F71 0%, transparent 60%)" }}
              />
            </div>
            {/* Floating credential card */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl"
              style={{ boxShadow: "0 20px 60px rgba(26,31,113,0.15)" }}
            >
              <div
                className="text-3xl font-bold text-[#1A1F71]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {STATS.improvement.value}
              </div>
              <div
                className="text-xs text-[#7D7D7D] mt-0.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Grade Improvement Rate
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              About Bitmatics
            </div>
            <h2
              className="text-[#111318] font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 4vw, 52px)",
              }}
            >
              Tutoring That{" "}
              <span className="text-[#1A1F71]">Actually Works</span>
            </h2>
            <p
              className="text-[#7D7D7D] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              With over 10 years of experience helping students unlock their mathematical potential,
              We believe every student can succeed in maths — they just need the right approach.
              Our sessions are built around <em>your</em> understanding, not a one-size-fits-all approach.
            </p>
            <p
              className="text-[#7D7D7D] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              From bridging foundational gaps to tackling A-Level problem sets, We work at your pace
              and adapt our teaching style to suit how you learn best. No judgement, no rush — just
              clear, patient explanations and genuine progress.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#EFEFED] bg-white"
                  style={{ boxShadow: "0 2px 12px rgba(26,31,113,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(26,31,113,0.08)" }}
                  >
                    <item.icon size={18} style={{ color: "#1A1F71" }} />
                  </div>
                  <span
                    className="text-sm font-medium text-[#111318]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1F71] text-white font-semibold rounded-xl text-sm hover:bg-[#141960] transition-all duration-200 active:scale-[0.97]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: "0 8px 24px rgba(26,31,113,0.25)",
              }}
            >
              Get in Touch
              <span className="inline-block">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
