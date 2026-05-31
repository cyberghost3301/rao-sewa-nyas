import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { PageWrapper } from "@/components/PageWrapper";

import Home from "@/pages/Home";
import About from "@/pages/About";
import ForProfit from "@/pages/ForProfit";
import NonProfit from "@/pages/NonProfit";
import Partner from "@/pages/Partner";
import Team from "@/pages/Team";
import Testimonials from "@/pages/Testimonials";
import Portfolio from "@/pages/Portfolio";
import PortfolioLucknow from "@/pages/PortfolioLucknow";
import PortfolioDeoria from "@/pages/PortfolioDeoria";
import Contact from "@/pages/Contact";
import Credentials from "@/pages/Credentials";
import Donations from "@/pages/Donations";
import RunInitiative from "@/pages/RunInitiative";

import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import CookiePolicy from "@/pages/CookiePolicy";
import Disclaimer from "@/pages/Disclaimer";
import FAQ from "@/pages/FAQ";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/operations/for-profit" element={<PageWrapper><ForProfit /></PageWrapper>} />
        <Route path="/operations/non-profit" element={<PageWrapper><NonProfit /></PageWrapper>} />
        <Route path="/initiatives/run" element={<PageWrapper><RunInitiative /></PageWrapper>} />
        <Route path="/partner" element={<PageWrapper><Partner /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/portfolio/lucknow" element={<PageWrapper><PortfolioLucknow /></PageWrapper>} />
        <Route path="/portfolio/deoria" element={<PageWrapper><PortfolioDeoria /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/credentials" element={<PageWrapper><Credentials /></PageWrapper>} />
        <Route path="/donations" element={<PageWrapper><Donations /></PageWrapper>} />
        
        {/* Legal & Compliance Pages */}
        <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/cookies" element={<PageWrapper><CookiePolicy /></PageWrapper>} />
        <Route path="/disclaimer" element={<PageWrapper><Disclaimer /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-india-gradient flex flex-col selection:bg-saffron/20 selection:text-saffron">
        <Navbar />
        <main className="flex-1 flex flex-col pt-4">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
