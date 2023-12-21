import React from "react";
import Header from "../layout/UniversalHeader/header";
import Footer from "../layout/Footer/Footer";
import BridgeCard from "components/BridgeComponents/BridgeCards/bridgeCard";
import Top from "components/Top";

const Bridge = () => {
  return (
    <div className="main-background">
      <div className="max-width pt-150">
        <Top />
        <Header />
        <BridgeCard />
        <Footer />
      </div>
    </div>
  );
};

export default Bridge;
