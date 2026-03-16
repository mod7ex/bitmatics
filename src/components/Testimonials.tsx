import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";
import { STATS } from '@/lib/utils'

const testimonials = [
  {
    name: "Aisha N.",
    role: "Eleve en 3ASC",
    quote: "كنت كنواجه صعوبة كبيرة فالمات. منين بديت القراية أونلاين مع بتماتكس غير من دار ,تبدل بزاف. الشرح واضح وبسيط بزاف، ودابا وليت كنجيب نقط حسن فالفروض ,أستاد كان واعر بزاف. شكراً بزاف.",
    rating: 5,
    color: "#3A4580",
  },
  {
    name: "Mohammed R.",
    role: "Parent of 1BAC/SM student",
    quote: "Mon fils avait des difficultés en maths et manquait de confiance. Après quelques semaines de cours, il comprend mieux et ses résultats à l’école sont bien meilleurs.",
    rating: 5,
    color: "#1A1F71",
  },
  {
    name: "Ilham T.",
    role: "Parent of 3ASC student",
    quote: "Weldi kan m3a9do maths bzaf, les notes dyalo kano machi mocharifin, daba lhamdollah bfadl Bitmatics omor ghada mz1 kayn ta7son kbir bbzaf.",
    rating: 5,
    color: "#2D3561",
  },
  {
    name: "Soha E.",
    role: "Eleve en 2BAC/PC",
    quote: "Charh kaykon sahal w mfhoum. Tmarin li kay3tiw kay3awnoni bzaf b7al dakchi likal9a f les exams bdabt, les methodes wa3rin o mfhomin mz1 Merci!",
    rating: 5,
    color: "#3A4580",
  },
  {
    name: "Sophia M.",
    role: "Eleve en 2BAC/SM",
    quote: "Les cours sont très bien organisés et adaptés à mon niveau. J’aime surtout la manière dont les exercices sont expliqués étape par étape. Grâce à ces cours, j’ai réussi mon Bac avec une très bonne note.",
    rating: 5,
    color: "#1A1F71",
  },
  {
    name: "Imran E.",
    role: "Parent of 2BAC/SM student",
    quote: "Mon fils avait de difficultés en mathématiques, surtout en l’algèbre. avec Bitmatics, ses notes ont vraiment amélioré ,il a repris confiance en lui. Le professeur explique très clairement . Je recommande vivement.",
    rating: 5,
    color: "#2D3561",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="py-24 lg:py-32" style={{ backgroundColor: "#EFEFED" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Testimonials
          </div>
          <h2
            className="text-[#111318] font-bold leading-[1.1] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            What Students{" "}
            <span className="text-[#1A1F71]">Are Saying</span>
          </h2>
          <p
            className="text-[#7D7D7D] max-w-[480px] mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Real results from real students. Over {STATS.subscribed_students.value.replace('+', '')} students helped across Collège, Lycée.
          </p>
        </div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div
          ref={ref}
          className={inView ? "section-visible" : "section-hidden"}
          style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
        >
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="flex-shrink-0 md:flex-shrink bg-white rounded-2xl p-6 flex flex-col gap-4"
      style={{
        width: "280px",
        border: "1px solid #7D7D7D33",
        boxShadow: "0 4px 24px rgba(26,31,113,0.06)",
        minWidth: "280px",
      }}
    >
      {/* Stars */}
      <StarRating count={testimonial.rating} />

      {/* Quote */}
      <p
        className="text-[#111318] text-sm leading-relaxed flex-1"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#EFEFED]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{
            backgroundColor: testimonial.color,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {testimonial.name.slice(0, 2)}
        </div>
        <div>
          <div
            className="text-sm font-semibold text-[#111318]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {testimonial.name}
          </div>
          <div
            className="text-xs text-[#7D7D7D]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}
