import React from "react";
import "./Roadmap.css";
const Roadmap = () => {
  return (
    <div className="home-roadmap">
      <section className="text-white mt-5">
        <div className="container">
          <div className="title-section mb-4 techno-font">ROADMAP</div>
          <p className="sub-title">
            Take a look at our current developments and stay tuned for what's to come. SatoPAD's roadmap is a testament to our dedication and strategic planning. Witness our progress and future plans as we diligently work to bring our vision of DeFi on Bitcoin to life.
          </p>
          <div className="timeline">
            <div className="timeline-container success">
              <div className="timeline-icon roadmap-success"></div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge title-success">Q4 - 2023: Setting the Stage</span>
                </h4>
                <ul>
                  <li>Product Conceptualization and Design</li>
                  <li>Team Expansion</li>
                  <li>Pre-Launch Marketing</li>
                  <li>Strategic Partnerships</li>
                </ul>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon"></div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Q1 - 2024: Launching into Action</span>
                </h4>
                <ul>
                  <li>SatoPAD IDO</li>
                  <li>Liquidity Incentive Program</li>
                  <li>Time-Weighted Staking</li>
                  <li>Centralized Exchange Listings</li>
                </ul>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon"></div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Q2 - 2024: Expanding Horizons</span>
                </h4>
                <ul>
                  <li>Launching the SatoPAD Bridge</li>
                  <li>Debut of SatoSwap (AMM DEX)</li>
                  <li>Introducing SatoFarm</li>
                </ul>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon"></div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Q3 - 2024: Deepening Community Involvement</span>
                </h4>
                <ul>
                  <li>Implementing SatoPAD Governance</li>
                  <li>Advanced Liquidity Solutions</li>
                  <li>Boosting Community Engagement</li>
                </ul>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon"></div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Q4 - 2024: Elevating the Platform</span>
                </h4>
                <ul>
                  <li>Unveiling SatoPAD V2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
