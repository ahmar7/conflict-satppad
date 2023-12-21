import React from "react";
import Header from "../layout/UniversalHeader/header";
import UniversalFooter from "../layout/UniversalFooter/Footer";
import Banner from "../components/LaunchPadComponents/Banner/Banner";
import Projects from "../components/LaunchPadComponents/Projects/Projects";
import Top from "components/Top";

const LaunchPad = () => {
  return (
    <div className="launchpad-pg">
      <Top />
      <Header />
      <Banner />
      <Projects />
    </div>
  );
};

export default LaunchPad;
