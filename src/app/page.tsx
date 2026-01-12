import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DailyRoutes from "@/components/DailyRoutes";
import Fleet from "@/components/Fleet";
import Tourism from "@/components/Tourism";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DailyRoutes />
      <Fleet />
      <Tourism />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5515996284505?text=Olá!%20Vim%20pelo%20site%20da%20Topvan."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 duration-300"
        aria-label="Contato via WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </main>
  );
}
