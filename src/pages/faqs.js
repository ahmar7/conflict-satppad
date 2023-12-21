import React from "react";
import Header from "../layout/HomeHeader/header";
import Faq from "../components/HomeComponents/Faq/Faq";
import Footer from "../layout/Footer/Footer";
import Top from "components/Top";

const Faqs = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="projects-page page">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
