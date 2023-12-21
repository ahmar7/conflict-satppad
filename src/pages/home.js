import React from "react";
import TopBanner from "../components/HomeComponents/TopBanner/TopBanner";
import Features from "../components/HomeComponents/Features/Features";
import Advantages from "../components/HomeComponents/AdvantagesSection/Advantages";
import Description from "../components/HomeComponents/DescriptionSection/Description";
import GetReady from "../components/HomeComponents/GetReadySection/GetReady";
import Tiers from "../components/HomeComponents/TiersSection/Tiers";
import TimeWrap from "../components/HomeComponents/TimeWrap/TimeWrap";
import Faq from "../components/HomeComponents/Faq/Faq";
import Footer from "../layout/Footer/Footer";
import Carousel from "../components/HomeComponents/UpComingProjects/Slider";
import Header from "../layout/HomeHeader/header";
import JoinUs from "components/HomeComponents/JoinUs/JoinUs";
import Roadmap from "components/HomeComponents/Roadmap/Roadmap";
import TokenUtility from "components/HomeComponents/TokenUtility/TokenUtility";
import Tokenomics from "components/HomeComponents/Tokenomics/Tokenomics";
import Top from "components/Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="homepage page">
        <TopBanner />
        {/* <BelowBanner /> */}
        <Features />
        <Carousel />
        <Advantages />
        <JoinUs />
        <Tiers />
        <TokenUtility />
        <Tokenomics />
        <GetReady />
        <Roadmap />
        <Description />
        {/*<TimeWrap />*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
