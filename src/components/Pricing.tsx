import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    tagline: "General",
    price: "200",
    per: "/ hour",
    features: [
      "Course explaination & summaries",
      "Practice with core exercises & tips",
      "Academic guidance"
    ],
    cta: "Book a Session",
    featured: false,
  },
  {
    name: "A-Level",
    tagline: "Most popular · Best value",
    price: "250",
    per: "/ hour",
    features: [
      "Course explaination & summaries",
      "Practice with core exercises & tips",
      "Challenging exercises with expert strategies",
      "Academic guidance"

    ],
    cta: "Book a Session",
    featured: true,
  },
  {
    name: "Intensive",
    tagline: "Exam preparation & performance focus",
    price: "300",
    per: "/ hour",
    features: [
      "Course explaination & summaries",
      "Practice with core exercises & tips",
      "Challenging exercises with expert strategies",
      "Full exam simulations with detailed solutions",
      "Academic guidance"
    ],
    cta: "Book a Session",
    featured: false,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="py-24 lg:py-32" style={{ backgroundColor: "#F5F5F3" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pricing
          </div>
          <h2
            className="text-[#111318] font-bold leading-[1.1] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            Transparent, Fair{" "}
            <span className="text-[#1A1F71]">Pricing</span>
          </h2>
          <p
            className="text-[#7D7D7D] max-w-[480px] mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            No hidden fees. All sessions include materials and support between lessons.
            You can get Personalised plan, get in touch
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 ${inView ? "section-visible" : "section-hidden"
            }`}
          style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 group ${plan.featured
                ? "bg-[#1A1F71] text-white"
                : "bg-white border border-[#EFEFED]"
                }`}
              style={{
                boxShadow: plan.featured
                  ? "0 24px 80px rgba(26,31,113,0.35)"
                  : "0 4px 24px rgba(26,31,113,0.08)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#1A1F71] text-xs font-bold rounded-full"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    boxShadow: "0 4px 12px rgba(26,31,113,0.2)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name & tagline */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${plan.featured ? "text-white" : "text-[#111318]"}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs ${plan.featured ? "text-white/60" : "text-[#7D7D7D]"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-end gap-1">
                <span
                  className={`text-sm font-medium -mb-1 ${plan.featured ? "text-white/60" : "text-[#7D7D7D]"}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  MAD
                </span>
                <span
                  className={`font-bold leading-none ${plan.featured ? "text-white" : "text-[#111318]"}`}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(40px, 5vw, 56px)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mb-1.5 ${plan.featured ? "text-white/60" : "text-[#7D7D7D]"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {plan.per}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${plan.featured ? "bg-white/10" : "bg-[#EFEFED]"}`}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-white/15" : "bg-[rgba(26,31,113,0.08)]"
                        }`}
                    >
                      <Check
                        size={11}
                        className={plan.featured ? "text-white" : "text-[#1A1F71]"}
                        strokeWidth={3}
                      />
                    </span>
                    <span
                      className={`text-xs leading-snug ${plan.featured ? "text-white/85" : "text-[#7D7D7D]"}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] ${plan.featured
                  ? "bg-white text-[#1A1F71] hover:bg-[#F5F5F3]"
                  : "bg-[#1A1F71] text-white hover:bg-[#141960]"
                  }`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: plan.featured
                    ? "0 4px 16px rgba(255,255,255,0.2)"
                    : "0 4px 16px rgba(26,31,113,0.2)",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-[#7D7D7D] text-sm mt-8"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          All prices include VAT. Block booking discounts available — ask during your intro call.
        </p>
      </div>
    </section>
  );
}
