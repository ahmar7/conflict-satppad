import React from "react";
import Header from "../layout/UniversalHeader/header";
import Footer from "../layout/Footer/Footer";
import PageNavigation from "../components/ProjectDetails/PageNavigation/PageNavigation";
import "../components/ProjectDetails/Details.scss";
import Top from "../components/Top";
import Wallet from "../components/ProjectDetails/WalletPool/Wallet";
import Details from "../components/ProjectDetails/Details/Details";
import Information from "../components/ProjectDetails/PoolInformation/Information.js";
import "../components/ProjectDetails/ProjectBanner/Banner.css";
import "../components/ProjectDetails/DetailSwitch/DetailSwitch.css";
import "../components/ProjectDetails/ProjectDescription/Description.css";
import "../components/ProjectDetails/ProjectTitle/Title.css";
import "../components/ProjectDetails/ProjectSidebar/Roadmap/Roadmap.css";
import "../components/ProjectDetails/ProjectSidebar/SocialIcons/socialIcons.css";
import "../components/ProjectDetails/ProjectSidebar/SocialIcons/socialIcons.css";
import "../components/ProjectDetails/ProjectSidebar/sidebar.css";
const projectDetail = () => {
  return (
    <>
      <div className="main-background nuia ">
        <Top />
        <Header />
        <div className="mb-16 md:mb-36 top-padding  max-width">
          <PageNavigation projectTitle={"SatoPAD Public"} />
          <Wallet />
          <Details />
          <Information />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default projectDetail;
