import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ForProfit from "@/pages/ForProfit";
import NonProfit from "@/pages/NonProfit";
import Partner from "@/pages/Partner";
import Team from "@/pages/Team";
import Testimonials from "@/pages/Testimonials";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-india-gradient flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/operations/for-profit" element={<ForProfit />} />
            <Route path="/operations/non-profit" element={<NonProfit />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Partner />} />
            <Route path="/terms" element={<Partner />} />
            <Route path="/faq" element={<Partner />} />
            <Route path="/cookies" element={<Partner />} />
            <Route path="/disclaimer" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
