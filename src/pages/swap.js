import React from "react";
import Header from "../layout/UniversalHeader/header";
import Footer from "../layout/Footer/Footer";
import SwapCard from "../components/SwapComponents/SwapCard/SwapCard";
import Top from "components/Top";

const Swap = () => {
  return (
    <div className="main-background">
      <div className="max-width pt-150">
        <Top />
        <Header />
        <SwapCard />
        <Footer />
      </div>
    </div>
  );
};

export default Swap;
