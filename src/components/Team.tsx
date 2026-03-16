import { useInView } from "@/hooks/useInView";
import TeamAvatar from '@/components/TeamAvatar'
import Teacher1 from '@/assets/img/teacher-1.jpg'
import Teacher2 from '@/assets/img/teacher-2.jpg'
import Teacher3 from '@/assets/img/teacher-3.jpg'
import Teacher4 from '@/assets/img/teacher-4.jpg'
import Teacher5 from '@/assets/img/teacher-5.jpg'

const team = [
    {
        name: "Ahmed Farrachi",
        role: "Maths Educator at Bitmatics",
        bio: "Maths teacher at Lycée Saint-Joseph en france with over 36 years of experience and proven results!",
        avatar: Teacher4,
        linkedin: "",
        twitter: "",
    },
    {
        name: "Muhammad Ammar",
        role: "Maths Educator at Bitmatics",
        avatar: Teacher3,
        bio: "Maths teacher at Lycée Français Guy de Maupassant in france with over 23 years of experience and proven results!",
        github: "",
        linkedin: "",
        twitter: ""
    },
    {
        name: "Hakim Ahmed D",
        role: "Maths Educator at Bitmatics",
        avatar: Teacher1,
        bio: "Mechanical Engineer with 8 Years of maths teaching experience",
        github: "",
        linkedin: "",
        twitter: ""
    },
    {
        name: "Rania Tegmouti",
        role: "Maths Educator at Bitmatics",
        avatar: Teacher2,
        bio: "Experienced Maths teacher (state & private schools) with over 11 years of experience with collège students, i simplify things!",
        github: "",
        linkedin: "",
        twitter: ""
    },
    {
        name: "Ahmed Ait madan",
        role: "Maths Educator at Bitmatics",
        avatar: Teacher5,
        bio: "Mechatronics Engineer at Renault. Excellent math Tutor with over 13 years of maths teaching experience",
        github: "",
        linkedin: "",
        twitter: ""
    }
];

export default function Team() {
    const { ref, inView } = useInView();

    return (
        <section id="team" className="py-24 lg:py-32" style={{ backgroundColor: "#e5e5e5" }}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Team
                    </div>
                    <h2
                        className="text-[#111318] font-bold leading-[1.1] mb-4"
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(32px, 4vw, 48px)",
                        }}
                    >
                        Who are {" "}
                        <span className="text-[#1A1F71]">we ?</span>
                    </h2>
                    <p
                        className="text-[#7D7D7D] max-w-[480px] mx-auto"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                        At Bitmatics, you will learn from some of the best mathematics teachers,
                        professionals who bring decades of experience and a deep passion for helping students succeed.
                    </p>
                </div>


                <div
                    ref={ref}
                    // className={`grid md:grid-cols-3 gap-6 ${inView ? "section-visible" : "section-hidden"}`}
                    className={`flex gap-6 overflow-x-auto pb-4 hide-scrollbar ${inView ? "section-visible" : "section-hidden"}`}
                    style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
                >
                    {team.map((item, i) => (
                        <TeamAvatar
                            name={item.name}
                            role={item.role}
                            bio={item.bio}
                            avatar={item.avatar}
                            linkedin={item.linkedin}
                            twitter={item.twitter}
                        />
                    ))}

                </div>

                {/* Footer note */}
                <p
                    className="text-center text-[#7D7D7D] text-sm mt-8"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    <small>These are some of our skilled teachers</small>
                </p>
            </div>
        </section>
    );
}
