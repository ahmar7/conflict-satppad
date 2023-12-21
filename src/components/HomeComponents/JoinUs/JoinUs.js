import React from "react";
import "./Joinus.css";
import HalfMoon from "../../../assets/img/half-moon.svg";
import nortStar from "../../../assets/img/north-star.png";
import Astronut from "../../../assets/img/astronaut.png";
import JoinMoon from "../../../assets/img/join-moon.png";
import { Link } from "react-router-dom";
const JoinUs = () => {
  return (
    <div className="join">
      <div
        id="community"
        className="flex flex-col relative w-full py-10 lg:py-20 overflow-tide px-7 bg-content-2 h-full"
      >
        <div className="w-full mx-auto max-w-8xl lg:max-w-7xl md:max-w-4xl">
          <div className="flex items-center justify-between relative">
            <img
              src={nortStar}
              className="absolute top-0 right-1/2 left-1/2 opacity-0 md:opacity-100 lg:block tide"
              alt=""
            />
            <div className="flex flex-col content-block text-white w-full relative content-block--transparent items-start relative z-2 mb-10">
              {/**/}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  
                  <h1 className="text-opacity-50 font-bold uppercase text-lg text-active font-italic">
                    About Us
                  </h1>
                </div>
                <h1 className="uppercase font-bold md:text-5xl text-2xl text-active">
                  Join SatoPAD Today
                </h1>
                <h2 className="text-opacity-50 md:text-lg text-sm uppercase text-active" />
              </div>
              <p
                className="text-main-white -mt-5 text-opacity-70"
                style={{ "margin-bottom": "0px" }}
              >
                SatoPAD Finance stands at the forefront of Bitcoin's DeFi
                evolution, a trailblazing decentralized launchpad platform
                dedicated to the burgeoning BRC-20 ecosystem. Our mission is to
                transform the landscape of decentralized finance on Bitcoin,
                breaking down barriers and democratizing access to innovative
                financial tools. As a comprehensive gateway, SatoPAD nurtures
                and propels the growth of Bitcoin-based decentralized finance,
                welcoming both emerging projects and investors. We invite you to
                join our vibrant community, embarking on a journey to redefine
                DeFi on the world's most established cryptocurrency network.
              </p>
              <div className="flex flex-col lg:flex-row w-full items-center gap-5">
                <Link
                  to="/launchpad/public-sale"
                  className="button font-bold text-base cursor-pointer whitespace-nowrap flex justify-between bg-main text-white text-xs px-7 py-4 w-full"
                  style={{ height: "50px" }}
                >
                  <h1 className="font-weight-bold">Buy $SATO Presale</h1>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 19.5L19.5 6.5M19.5 6.5V18.98M19.5 6.5H7.02"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a href="https://t.me/satopad" target="_blank">
                  <button
                    className="button font-bold text-base whitespace-nowrap flex justify-between text-xs px-7 py-4 w-full bg-transparent border border-active text-active"
                    style={{ height: "50px" }}
                  >
                    <h1 className="font-weight-bold">Community</h1>
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 19.5L19.5 6.5M19.5 6.5V18.98M19.5 6.5H7.02"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <img
              src={Astronut}
              className="w-2/4 z-10 float   lg:relative tide lg:block"
              alt=""
            />
          </div>
          <img
            className="absolute jmm right-0 top-0 earth-pulse opacity-25 md:opacity-100"
            src={JoinMoon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
