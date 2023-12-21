import React from "react";
import "./Tokenomics.css";
import HalfMoon from "../../../assets/img/half-moon.svg";
import NortStart from "../../../assets/img/north-star.svg";
import coinSvg from "../../../assets/img/coin.svg";
import Tokemonic from "../../../assets/img/tokemonic-new.svg";

import Launchpad from "../../../assets/img/Launchpad.svg";
import Farming from "../../../assets/img/Farming.svg";
import Swapping from "../../../assets/img/Swapping.svg";
import Bridging from "../../../assets/img/Bridge-symbol.svg";
import Governance from "../../../assets/img/Gov.svg";
const Tokenomics = () => {
  return (
    <div className="tokenomics tokenomics-bg">
      <div
        id="tokenomics"
        className="flex flex-col relative w-full py-10 lg:py-20 overflow-hidden px-7 bg-content-2 h-full"
      >
        <div className="w-full mx-auto max-w-8xl lg:max-w-7xl md:max-w-4xl">
          <div className="flex flex-col content-block text-white w-full relative content-block--transparent items-center">
            {/**/}
            <div className="flex flex-col items-center">
              <h1 className="uppercase font-bold md:text-5xl text-2xl text-active text-center primary-color techno-font">
                SatoPAD Ecosystem
              </h1>
              <h2 className="text-opacity-50 md:text-lg text-sm uppercase text-active" />
            </div>
            <p className="text-main-white -mt-5 text-opacity-70 text-center">
              SatoPAD's ecosystem provides a comprehensive suite of DeFi
              services, establishing itself as the ultimate destination for both
              investors and projects within the Bitcoin ecosystem. From
              facilitating decentralized fundraising to offering advanced
              staking options, with our focus on user-friendly interfaces and
              innovative DeFi solutions, we're enhancing the functionality and
              accessibility of the BRC-20 network.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center relative w-full h-full md:mt-36 mt-20">
            <img
              src={NortStart}
              className="absolute top-0 right-5 left-5"
              alt=""
            />
            <div className="flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2 lg:absolute lg:-top-16 ">
              <img src={Launchpad} height="65" alt="" />
              <h1 className="text-active text-xl uppercase">IDO Launchpad</h1>
              <p className="text-main-white font-medium text-opacity-40">
                SatoPAD's IDO Launchpad offers exclusive access to the most
                promising Bitcoin-based DeFi projects.
              </p>
            </div>
            <div className="flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2 lg:absolute lg:-left-12">
              <img src={Farming} height="65" alt="" />
              <h1 className="text-active text-xl uppercase">
                Ordinals Farming
              </h1>
              <p className="text-main-white font-medium text-opacity-40">
                Provide liquidity to the Bitcoin ecosystem and earn rewards
                through Ordinals Farming.
              </p>
            </div>
            <div className="flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2 lg:absolute lg:-right-12">
              <img src={Swapping} height="65" alt="" />
              <h1 className="text-active text-xl uppercase">
                Ordinals Swapping
              </h1>
              <p className="text-main-white font-medium text-opacity-40">
                Our AMM DEX offers an intuitive platform for quick and easy
                Ordinals token swapping.
              </p>
            </div>
            <div className="flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2 lg:absolute lg:-bottom-16 left-32">
              <img src={Bridging} height="65" alt="" />
              <h1 className="text-active text-xl uppercase">
                Cross-Chain Bridge
              </h1>
              <p className="text-main-white font-medium text-opacity-40">
                Effortlessly transfer assets between Bitcoin and other leading
                blockchains with our Cross-Chain Bridge.
              </p>
            </div>
            <div className="flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2 lg:absolute lg:-bottom-16 right-32 feature-item">
              <img src={Governance} height="65" alt="" />
              <h1 className="text-active text-xl uppercase">Governance</h1>
              <p className="text-main-white font-medium text-opacity-40">
                Participate in our governance and contribute to the evolution of
                SatoPAD's DeFi ecosystem.
              </p>
            </div>
            <img src={Tokemonic} className="earth-spin" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
