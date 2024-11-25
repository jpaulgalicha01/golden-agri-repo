import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CompanyOverview from "./components/pages/CompanyOverview";
import ScrollTop from "./components/Class/ScrollTop";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else if (offset < 150 && offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          index
          path="/"
          element={<Home scrolled={scrolled} title={"Home"} />}
        />
        <Route
          path="/company-overview"
          element={
            <CompanyOverview scrolled={scrolled} title={"Company Overview"} />
          }
        />
        <Route
          path="/services"
          element={<Services scrolled={scrolled} title={"Services"} />}
        />

        <Route
          path="/team"
          element={<Team scrolled={scrolled} title={"Team"} />}
        />
        <Route
          path="/contact-us"
          element={<Contact scrolled={scrolled} title={"Contact Us"} />}
        />

        <Route path="*" element={<>No Page Found.</>} />
      </Routes>
    </BrowserRouter>
  );
}
