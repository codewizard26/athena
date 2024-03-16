import React from "react";
import Home from "./Home";
import AboutSection from "./AboutSection";
import ClientsSection from "./ClinetsSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import FounderStatement from "./FounderStatement";
import Collaborate from "./Collaborate";
import Footer from "./Footer";

function MobileViewIndex() {
  return (
    <div className="sm:hidden block space-y-12 ">
      <Home />
      <AboutSection />
      <ClientsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FounderStatement />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default MobileViewIndex;
