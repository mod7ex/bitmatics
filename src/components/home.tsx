import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F3" }}>
      <Navbar />
      <main>
        <Hero onScrollTo={scrollTo} />
        <About />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Contact />
        {/* partners */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
