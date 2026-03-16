import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, MessageCircle, Clock, CheckCircle, Loader2 } from "lucide-react";
import { handleGoogleLogin, handleSignOut, saveUserData } from "@/firebase";
import GoogleSignIn from '@/assets/img/signin-google.png';

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  level: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  level?: string;
  message?: string;
}

const levels = [
  "1 ASC",
  "2 ASC",
  "3 ASC",
  "Tronc commun",
  "1ère année Bac",
  "2eme année Bac",
  "Other",
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    level: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";

    // Phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s()-]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.level) newErrors.level = "Please select a subject level.";

    if (!formData.message.trim()) {
      newErrors.message = "Please add a message.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("loading");

    try {
      await handleGoogleLogin()
      await saveUserData(formData)

    } catch (e) {
      console.log(e)
    }
    finally {
      handleSignOut()
      setFormState("success");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#111318] bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#1A1F71]/20 focus:border-[#1A1F71] ${errors[field]
      ? "border-red-400 bg-red-50"
      : "border-[#EFEFED] hover:border-[#1A1F71]/30"
    }`;

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: "#F5F5F3" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1F71] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get in Touch
          </div>
          <h2
            className="text-[#111318] font-bold leading-[1.1] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            Ready to{" "}
            <span className="text-[#1A1F71]">Get Started?</span>
          </h2>
          <p
            className="text-[#7D7D7D] max-w-[480px] mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Book your free intro call or send a message. No commitment, no pressure.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 ${inView ? "section-visible" : "section-hidden"
            }`}
          style={{ transition: "opacity 0.7s ease-out, transform 0.7s ease-out" }}
        >
          {/* Left: Contact info */}
          <div className="flex flex-col justify-center">
            <h3
              className="text-[#111318] font-bold text-2xl mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Let's find a time that works for you
            </h3>
            <p
              className="text-[#7D7D7D] leading-relaxed mb-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Fill in the form and We'll be in touch to arrange a free, no-obligation
              introductory call where we'll discuss your goals and design a plan for you.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:info@bitmatics.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EFEFED] hover:border-[#1A1F71]/30 transition-all duration-200 group"
                style={{ boxShadow: "0 2px 12px rgba(26,31,113,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(26,31,113,0.08)" }}
                >
                  <Mail size={18} style={{ color: "#1A1F71" }} />
                </div>
                <div>
                  <div
                    className="text-xs text-[#7D7D7D] mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Email
                  </div>
                  <div
                    className="text-sm font-medium text-[#111318] group-hover:text-[#1A1F71] transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    info@bitmatics.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/+212767875432"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EFEFED] hover:border-[#1A1F71]/30 transition-all duration-200 group"
                style={{ boxShadow: "0 2px 12px rgba(26,31,113,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(37,211,102,0.1)" }}
                >
                  <MessageCircle size={18} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <div
                    className="text-xs text-[#7D7D7D] mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    WhatsApp
                  </div>
                  <div
                    className="text-sm font-medium text-[#111318] group-hover:text-[#1A1F71] transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Message on WhatsApp
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EFEFED]"
                style={{ boxShadow: "0 2px 12px rgba(26,31,113,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(26,31,113,0.08)" }}
                >
                  <Clock size={18} style={{ color: "#1A1F71" }} />
                </div>
                <div>
                  <div
                    className="text-xs text-[#7D7D7D] mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Response Time
                  </div>
                  <div
                    className="text-sm font-medium text-[#111318]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}

          <div>
            <div
              className="bg-white rounded-2xl p-8"
              style={{
                boxShadow: "0 8px 48px rgba(26,31,113,0.10)",
                border: "1px solid rgba(26,31,113,0.06)",
              }}
            >
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(26,31,113,0.08)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#1A1F71" }} />
                  </div>
                  <h3
                    className="text-[#111318] font-bold text-xl mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-[#7D7D7D] text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Thanks for reaching out. We'll be in touch within 24 hours to
                    arrange your free intro call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#111318] mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={inputClass("name")}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#111318] mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Phone Address
                    </label>
                    <input
                      type="tel"
                      placeholder="+212 ..."
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={inputClass("phone")}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject level */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#111318] mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Subject Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => {
                        setFormData({ ...formData, level: e.target.value });
                        if (errors.level) setErrors({ ...errors, level: undefined });
                      }}
                      className={inputClass("level")}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <option value="">Select your level...</option>
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.level && (
                      <p className="text-red-500 text-xs mt-1">{errors.level}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#111318] mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me a bit about what you'd like help with..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`${inputClass("message")} resize-none`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full py-4 bg-[#1A1F71] text-white font-semibold rounded-xl text-sm hover:bg-[#141960] transition-all duration-200 active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      boxShadow: "0 8px 24px rgba(26,31,113,0.25)",
                    }}
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book a Free Intro Call"
                    )}

                    <img src={GoogleSignIn} width={30} height={30} />
                  </button>

                  <p
                    className="text-center text-xs text-[#7D7D7D]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    No payment needed. First session is completely free.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}