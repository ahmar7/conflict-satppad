import React from "react";
import "./Features.css";
import MexcIcon from "../../../assets/img/mexc-logo.png";
import GateIcon from "../../../assets/img/gate-icon.png";
import BtcIcon from "../../../assets/img/btc-icon.png";
import UnisatIcon from "../../../assets/img/unisat-icon.svg";
import { Link } from "react-router-dom";

import Telegram from "../../../assets/img/telegram.svg";
import Twitter from "../../../assets/img/twitter.svg";
import EthIcon from "../../../assets/img/eth-icon-transparent.png";
const Features = () => {
  return (
    <section className="features-section">
      <div className="banner-abs">
        <div className="inner-banners">
          <div className="left-ban">
            <a href="#" className="tr-btn btn-disabled">
              <h5>View in UniSat</h5>
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
            </a>
            <a href="https://twitter.com/satopad_fin" target="_blank">
              <img src={Twitter} alt="" height="35px" />
            </a>
            <a href="https://t.me/satopad" target="_blank">
              <img src={Telegram} alt="" height="35px" />
            </a>
          </div>
          <p className="right-p">
            <div className="header__token-address token-address ">
              <img
                width={32}
                height={32}
                src={BtcIcon}
                className="token-address__network"
              />
              <span className="copiable">
                <span className="token-address__address">TBA</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="token-address__copy"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0568 1.33203H3.89034L3.88818 1.33203C3.21118 1.33404 2.56249 1.60386 2.08378 2.08256C1.60508 2.56127 1.33525 3.20996 1.33325 3.88695V10.0535L1.33325 10.0556C1.33501 10.6721 1.58071 11.2629 2.01666 11.6988C2.44263 12.1248 3.0164 12.3691 3.61758 12.3817C3.65645 13.6496 4.69647 14.6655 5.97376 14.6655H12.3094C13.6113 14.6655 14.6667 13.6101 14.6667 12.3082V5.97254C14.6667 4.69527 13.6508 3.65527 12.383 3.61637C12.3704 3.01518 12.1261 2.44141 11.7001 2.01544C11.2641 1.57948 10.6734 1.33379 10.0568 1.33203ZM10.9209 3.61523C10.9086 3.40217 10.8186 3.20034 10.6669 3.04866C10.5041 2.88591 10.2837 2.7941 10.0535 2.79322H3.89156C3.60094 2.79432 3.32252 2.91026 3.117 3.11577C2.91148 3.32129 2.79555 3.59971 2.79444 3.89032V10.0523C2.79533 10.2824 2.88714 10.5029 3.04988 10.6656C3.20157 10.8173 3.4034 10.9074 3.61646 10.9196V5.97254C3.61646 4.67064 4.67186 3.61523 5.97376 3.61523H10.9209ZM5.07764 5.97254C5.07764 5.47763 5.47885 5.07642 5.97376 5.07642H12.3094C12.8043 5.07642 13.2055 5.47763 13.2055 5.97254V12.3082C13.2055 12.8031 12.8043 13.2043 12.3094 13.2043H5.97376C5.47885 13.2043 5.07764 12.8031 5.07764 12.3082V5.97254Z"
                    fill="white"
                  />
                </svg>
                <img src={UnisatIcon} 
                width={28}
                height={28}
                />
              </span>
            </div>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="features-item features-item--buy">
              <div className="features-item__content">
                <h4 className="features-item__title">Buy SATO</h4>
                <a
                  href="https://twitter.com/izumi_Finance/status/1657716417637273601"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="round-button dark btn btn-main"
                >
                  <img src={GateIcon} className="rounded-circle" />
                  <span>TBD</span>
                </a>
                <a
                  href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="round-button dark btn btn-main"
                >
                  <img src={MexcIcon} className="rounded-circle uni-logo" />
                  <span>TBD</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features-item features-item--lock">
              <div className="features-item__content">
                <h4 className="features-item__title">Stake SATO</h4>
                <p className="features-item__text">
                  Lock SATO{" "}
                  <span className="secondary-glow fw-bold">
                    to participate in our upcoming IDOs
                  </span>{" "}
                  on SatoPAD!
                </p>
                <Link to="/staking" type="button" className="btn-two">
                  TO STAKE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#F7931A"
                    className="css-aw5qf7"
                  >
                    <path
                      d="M7.33324 3.33343C6.96505 3.33343 6.66658 3.63191 6.66658 4.00009C6.66658 4.36829 6.96506 4.66677 7.33326 4.66676L10.3906 4.66671L4.80915 10.1953C4.54669 10.4553 4.54568 10.8791 4.8069 11.1404C5.06637 11.3998 5.48675 11.4008 5.74745 11.1426L11.3335 5.60945L11.334 8.66676C11.334 9.03492 11.6325 9.33334 12.0007 9.33334C12.3689 9.33334 12.6674 9.03482 12.6673 8.66659L12.6669 4.33329C12.6669 3.78104 12.2192 3.33338 11.6669 3.33338L7.33324 3.33343Z"
                      fill="#F7931A"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features-item features-item--earn">
              <div className="features-item__content">
                <h4 className="features-item__title">Earn Passively</h4>
                <p className="features-item__text">
                  Explore different{" "}
                  <span className="secondary-glow fw-bold">
                    {" "}
                    highly lucrative{" "}
                  </span>{" "}
                  methods for making a daily income in our farm.
                </p>

                <button type="button" className="btn-two btn-disabled">
                  TO FARM
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#F7931A"
                    className="css-aw5qf7"
                  >
                    <path
                      d="M7.33324 3.33343C6.96505 3.33343 6.66658 3.63191 6.66658 4.00009C6.66658 4.36829 6.96506 4.66677 7.33326 4.66676L10.3906 4.66671L4.80915 10.1953C4.54669 10.4553 4.54568 10.8791 4.8069 11.1404C5.06637 11.3998 5.48675 11.4008 5.74745 11.1426L11.3335 5.60945L11.334 8.66676C11.334 9.03492 11.6325 9.33334 12.0007 9.33334C12.3689 9.33334 12.6674 9.03482 12.6673 8.66659L12.6669 4.33329C12.6669 3.78104 12.2192 3.33338 11.6669 3.33338L7.33324 3.33343Z"
                      fill="#F7931A"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
