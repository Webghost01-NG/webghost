import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TerminalModal from "./components/TerminalModal";
import ResumeModal from "./components/ResumeModal";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function AnimatedRoutes({ onOpenResume }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home onOpenResume={onOpenResume} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ScrollToTop />
        <NavBar onOpenResume={() => setResumeOpen(true)} />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes onOpenResume={() => setResumeOpen(true)} />
        </main>
        <Footer />
        <TerminalModal />
        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
