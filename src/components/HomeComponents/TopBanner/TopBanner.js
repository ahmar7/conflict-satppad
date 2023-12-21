import React, { useState } from "react";
import "./TopBanner.css";
import BannerVideo from "../../../assets/img/Main Video Mobile (5).webm";
import Bell from "../../../assets/img/bell.png";
import Bullet from "../../../assets/img/bullet.svg";
import Rocket from "../../../assets/img/rocket.png";
import Hero from "../../../assets/img/hero-moon.svg";
import Shadow from "../../../assets/img/shadow.svg";
import iZUMiIcon from "../../../assets/img/izumi-logo-horizontal.png";
import MargexIcon from "../../../assets/img/Margex.png";
import ValeaIcon from "../../../assets/img/valea-logo.png";
import { Link } from "react-router-dom";

const TopBanner = () => {
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <section className="top-banner head-wap">
      <video
        className="video-bg"
        src={BannerVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="container top-pd">
        <div className=" ">
          <div className="flex-rows">
            <div className="hero-text">
              {/*  */}
              <h1 className="title-txt techno-font">
                Unlock the Full Potential of{" "}
                <span className="secondary-glow techno-font">Bitcoin</span>
              </h1>
              {/*  */}
              <div className="margin-30px">
                <p className="subhead">
                  SatoPAD is at the heart of Bitcoin's DeFi transformation,
                  blending intuitive design with powerful investment solutions
                  for maximum returns.
                </p>
              </div>

              <div className="banner-blur">
                <div className="left-btn">
                  <Link
                    to="/launchpad/public-sale"
                    className="button-primary w-button"
                    href="#meeting"
                  >
                    BUY $SATO
                    <div className="btn-splash">
                      <div className="light_effects" />
                    </div>
                    <i
                      className="fa-solid fa-money-bill-trend-up"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <div className="right-txt">
                  <span className="primary-color">Ready for the SATO IDO?</span>{" "}
                  Seize the opportunity to invest at the lowest price! Stay
                  tuned.
                  <div className="abs-bell mbl-only">
                    <img src={Bell} alt="" />
                  </div>
                </div>
                <div className="abs-bell desk-only">
                  <img src={Bell} alt="" />
                </div>
              </div>
            </div>
            <div className="card-main"></div>
          </div>
          <div className="_mem_bottom_right_flex_1mlc6_422">
            <div className="_mem_word_left_1mlc6_427">
              <div className="animate__animated animate__fadeInUp trantor_fadeUp">
                <div className="_word_one_1mlc6_452">
                  <div className="_left_icon_1mlc6_456">
                    <img src={Bullet} />
                  </div>
                  <div className="_word_word_1mlc6_465 techno-font">IDO LAUNCHPAD</div>
                </div>
              </div>
              <div className="animate__animated animate__fadeInUp trantor_fadeUp">
                <div className="_word_one_1mlc6_452">
                  <div className="_left_icon_1mlc6_456">
                    <img src={Bullet} />
                  </div>
                  <div className="_word_word_1mlc6_465 techno-font">CROSS-CHAIN BRIDGE</div>
                </div>
              </div>
            </div>
            <div className="_mem_line_1mlc6_433">
              <div className="_mem_line_center_1mlc6_440" />
            </div>
            <div className="_mem_word_right_1mlc6_445">
              <div className="animate__animated animate__fadeInUp trantor_fadeUp">
                <div className="_word_one_1mlc6_452">
                  <div className="_left_icon_1mlc6_456">
                    <img src={Bullet} />
                  </div>
                  <div className="_word_word_1mlc6_465 techno-font">ORDINALS AMM SWAP</div>
                </div>
              </div>
              <div className="animate__animated animate__fadeInUp trantor_fadeUp">
                <div className="_word_one_1mlc6_452">
                  <div className="_left_icon_1mlc6_456">
                    <img src={Bullet} />
                  </div>
                  <div className="_word_word_1mlc6_465 techno-font">
                    STAKING, FARMING & MORE !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Rocket} className="rocket" alt="" />
      <img src={Hero} className="hero-svg center-svg" alt="" />
      <img src={Shadow} className="hero-svg" alt="" />

      {/* Old */}
      {/* <div className="container abs-content">
        <div className="hero-row row">
          <div className="hero-row__main text-center">
            <h1 className="title">
              Unlock the Full Potential of{" "}
              <span className="secondary-glow">Bitcoin</span> with SatoPAD
            </h1>
            <p className="subtitle">
              <span className="secondary-glow">Syncera</span> is the first
              community-driven IDO platform with all-in-one solutions for{" "}
              <i>a growing ecosystem.</i>
            </p>
            <p className="sub-subtitle">
              IDO LAUNCHPAD | DECENTRALIZED EXCHANGE | TOKEN SWAP | FARM | AND
              MORE !
            </p>
            <div className="hero-buttons">
              <Link to="/private-sale" className="btn-one">
                Buy $SATO
              </Link>
              <a
                href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/"
                target="_blank"
                className="btn-two"
              >
                <i class="fas fa-file-image icon-distance"></i>Whitepaper
              </a>
            </div>
            <br />
            <div>
              <span className="below-banner__powered-by__title powered-by-size">
                <a href="https://twitter.com/Syncera_io" target="_blank">
                  <i class="fab fa-twitter fa-2x icon-distance secondary-glow icon-link"></i>
                </a>
                <a href="https://discord.com/invite/e2XcjF5zX8" target="_blank">
                  <i class="fab fa-discord fa-2x icon-distance secondary-glow icon-link"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="overflow"></div> */}
    </section>
  );
};

export default TopBanner;
