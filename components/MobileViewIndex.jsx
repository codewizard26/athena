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
  const isMobileView = true;

  return (
    <div className="xl:hidden block space-y-12 ">
      <Home isActive={true} isMobileView={isMobileView} />
      <AboutSection isActive={true} isMobileView={isMobileView} />
      <ClientsSection isActive={true} isMobileView={isMobileView} />
      <TestimonialsSection isActive={true} isMobileView={isMobileView} />
      <NewsletterSection isActive={true} isMobileView={isMobileView} />
      <FounderStatement isActive={true} isMobileView={isMobileView} />
      <Collaborate isActive={true} isMobileView={isMobileView} />
      <Footer />
    </div>
  );
}

export default MobileViewIndex;
