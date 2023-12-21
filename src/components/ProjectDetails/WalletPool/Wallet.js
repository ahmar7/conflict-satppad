import React, { useState } from "react";
import "./Wallet.css";
import { Tooltip } from "react-tooltip";
import defaultImg from "../../../assets/img/default-image.svg";
import chainIco from "../../../assets/img/chain.svg";
import hardIco from "../../../assets/img/hard-cap.svg";
import moneyIco from "../../../assets/img/money.svg";
import stackIco from "../../../assets/img/stack-ico.svg";
import Ico56 from "../../../assets/img/56.svg";
import LogoIcon from "../../../assets/img/logo-icon.png";
import IcoSrat from "../../../assets/img/strat-1702543994.png";
import progress1 from "../../../assets/img/progress-1.svg";
import BtcIcon from "../../../assets/img/btc-icon.png";
import ico1 from "../../../assets/img/1.webp";
import ico2 from "../../../assets/img/2.webp";
import ico3 from "../../../assets/img/3.webp";
import ico4 from "../../../assets/img/4.webp";

import WalletIcon from "../../../assets/img/Connect-Wallet.svg";
import UniSatWallet from "../../../assets/img/unisat-wallet.svg";
import LeatherWallet from "../../../assets/img/leather-wallet.svg";
import "react-tooltip/dist/react-tooltip.css";
import progree2 from "../../../assets/img/progress-2.svg";
import HeartIcon from "../../../assets/img/Shield.svg";
import progree3 from "../../../assets/img/progress-3.svg";
import progree3b from "../../../assets/img/progress-3b.svg";
import progree4 from "../../../assets/img/progress-4.svg";
import "./Left.css";
const Wallet = () => {
  const [modalPop, setmodalPop] = useState(false);
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  let closePop = () => {
    setDrop(false);
    if (modalPop === false) {
      setmodalPop(true);
    } else {
      setmodalPop(false);
    }
  };
  return (
    <div className="wallet-pools">
      <div className="f-pool-info">
        <div className="f-pool-info-inner">
          <div className="container">
            <div className="align-items-center gx-0 row nowrp">
              <div className="MuiBox-root css-118fm6x">
                <div className="sc-giVogm TXsWW">
                  <div className="sc-dmA-DAn iQLPZJ">
                    <div className="MuiBox-root css-1coeexk">
                      <img
                        src={LogoIcon}
                        alt="ido-icon"
                        className="sc-kaaGRQ jjmhwl"
                      />
                      <h1 className="sc-hdFWlR kstdpQ"> SatoPAD Finance</h1>
                    </div>
                    <div className="f-detail-tags">
                      <span>DeFi</span>
                      <span>Launchpad</span>
                    </div>
                    <div className="sc-biptUy faNuxs">
                      <a
                        color="textLink"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Website"
                        href="https://stratumexchange.com"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path d="M17.3753 8.125C16.5181 4.14375 14.69 1.625 12.9992 1.625C11.3084 1.625 9.48023 4.14375 8.62305 8.125H17.3753Z" />
                          <path d="M8.125 13C8.1248 14.087 8.19727 15.1727 8.34194 16.25H17.6581C17.8027 15.1727 17.8752 14.087 17.875 13C17.8752 11.913 17.8027 10.8273 17.6581 9.75H8.34194C8.19727 10.8273 8.1248 11.913 8.125 13V13Z" />
                          <path d="M8.62305 17.875C9.48023 21.8563 11.3084 24.375 12.9992 24.375C14.69 24.375 16.5181 21.8563 17.3753 17.875H8.62305Z" />
                          <path d="M19.041 8.12484H24.1597C23.3906 6.37452 22.222 4.82881 20.7477 3.61167C19.2733 2.39454 17.5342 1.53987 15.6699 1.11621C17.2112 2.47227 18.4202 4.97965 19.041 8.12484V8.12484Z" />
                          <path d="M24.7434 9.75H19.2996C19.4337 10.8281 19.5007 11.9136 19.5003 13C19.5004 14.0865 19.4331 15.1719 19.2988 16.25H24.7426C25.3351 14.1238 25.3351 11.8762 24.7426 9.75H24.7434Z" />
                          <path d="M15.6699 24.8836C17.5345 24.4602 19.2739 23.6056 20.7486 22.3885C22.2232 21.1713 23.3921 19.6255 24.1614 17.875H19.0426C18.4202 21.0202 17.2112 23.5276 15.6699 24.8836V24.8836Z" />
                          <path d="M6.96055 17.875H1.8418C2.61107 19.6255 3.77992 21.1713 5.25457 22.3885C6.72923 23.6056 8.46863 24.4602 10.3332 24.8836C8.7903 23.5276 7.5813 21.0202 6.96055 17.875V17.875Z" />
                          <path d="M10.3313 1.11621C8.46668 1.53964 6.72727 2.39421 5.25262 3.61135C3.77796 4.8285 2.60911 6.37434 1.83984 8.12484H6.95859C7.58097 4.97965 8.78997 2.47227 10.3313 1.11621V1.11621Z" />
                          <path d="M6.49915 13C6.49904 11.9135 6.56634 10.8281 6.70065 9.75H1.2569C0.664367 11.8762 0.664367 14.1238 1.2569 16.25H6.70065C6.56634 15.1719 6.49904 14.0865 6.49915 13V13Z" />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Website</div>
                      </a>

                      <a
                        color="textLink"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Medium "
                        href="https://medium.com/@stratumexchange"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.11055 17.0145C10.88 17.0145 13.1251 14.7695 13.1251 12C13.1251 9.23056 10.88 6.98547 8.11055 6.98547C5.34111 6.98547 3.09602 9.23056 3.09602 12C3.09602 14.7695 5.34111 17.0145 8.11055 17.0145ZM16.1439 16.7722C17.5244 16.7722 18.6436 14.6356 18.6436 12C18.6436 9.3644 17.5244 7.22781 16.1439 7.22781C14.7633 7.22781 13.6441 9.3644 13.6441 12C13.6441 14.6356 14.7633 16.7722 16.1439 16.7722ZM20.9037 11.9803C20.9037 14.334 20.4968 16.2421 19.9948 16.2421C19.4927 16.2421 19.0858 14.334 19.0858 11.9803C19.0858 9.62649 19.4927 7.71838 19.9948 7.71838C20.4968 7.71838 20.9037 9.62649 20.9037 11.9803Z"
                          />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Medium</div>
                      </a>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Twitter "
                        color="textLink"
                        href="https://twitter.com/stratumexchange"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM18.3499 7.15L14.0879 12.1041H14.0877L18.723 18.85H15.314L12.1925 14.3073L8.28458 18.85H7.27458L11.7442 13.6548L7.27458 7.15H10.6836L13.6393 11.4516L17.3399 7.15H18.3499ZM12.2518 13.0644L12.7046 13.7121V13.7124L15.7891 18.1243H17.3404L13.5605 12.7175L13.1077 12.0698L10.1998 7.91031H8.6485L12.2518 13.0644Z"
                          />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Twitter</div>
                      </a>
                      <a
                        color="textLink"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Github "
                        href="https://github.com/stratum-exchange"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path d="M13.0001 0C5.82129 0 0 5.96751 0 13.3291C0 19.2183 3.72493 24.2146 8.89027 25.9771C9.53997 26.1005 9.7785 25.6879 9.7785 25.3359C9.7785 25.018 9.76644 23.9681 9.76085 22.8543C6.1442 23.6606 5.38105 21.2816 5.38105 21.2816C4.78968 19.741 3.93762 19.3313 3.93762 19.3313C2.75812 18.504 4.02653 18.521 4.02653 18.521C5.33196 18.615 6.01934 19.8946 6.01934 19.8946C7.17882 21.9323 9.06055 21.3432 9.80239 21.0026C9.91907 20.1411 10.256 19.5531 10.6278 19.2203C7.74026 18.8832 4.70486 17.7403 4.70486 12.633C4.70486 11.1777 5.2127 9.98868 6.04431 9.05523C5.90934 8.71951 5.46436 7.36382 6.17025 5.52783C6.17025 5.52783 7.26192 5.16959 9.74621 6.89412C10.7832 6.59879 11.8953 6.45068 13.0001 6.4456C14.1049 6.45068 15.2179 6.59879 16.2568 6.89412C18.7381 5.16959 19.8282 5.52783 19.8282 5.52783C20.5359 7.36382 20.0907 8.71951 19.9557 9.05523C20.7892 9.98868 21.2936 11.1777 21.2936 12.633C21.2936 17.7524 18.2524 18.8797 15.3576 19.2097C15.8239 19.6233 16.2394 20.4345 16.2394 21.678C16.2394 23.4615 16.2243 24.8969 16.2243 25.3359C16.2243 25.6906 16.4583 26.1062 17.1173 25.9753C22.2798 24.2109 26 19.2163 26 13.3291C26 5.96751 20.1796 0 13.0001 0Z" />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Github</div>
                      </a>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content=" Discord"
                        color="textLink"
                        href="https://discord.gg/ZwfaZrDhVZ"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM15.6349 6.5C16.85 6.71048 18.0122 7.08012 19.0991 7.58875C20.9997 10.4273 21.944 13.6287 21.5953 17.3212C20.1412 18.4086 18.7307 19.0683 17.3439 19.5C17.0005 19.0292 16.6968 18.5273 16.4339 18.0012C16.9345 17.8109 17.4152 17.5762 17.8695 17.3023C17.7507 17.2133 17.6331 17.1202 17.5182 17.0244C14.7883 18.3168 11.7863 18.3168 9.02337 17.0244C8.9098 17.1202 8.79224 17.2133 8.67207 17.3023C9.12506 17.5748 9.60448 17.8096 10.105 17.9998C9.84221 18.5273 9.53713 19.0278 9.19506 19.4987C7.80963 19.067 6.40042 18.4072 4.94631 17.3212C4.64914 14.136 5.24347 10.9049 7.43586 7.59144C8.52282 7.08148 9.68638 6.71048 10.9028 6.5C11.0533 6.76983 11.2316 7.13275 11.3518 7.42145C12.6197 7.22718 13.8995 7.22718 15.1911 7.42145C15.3113 7.13275 15.4857 6.76983 15.6349 6.5ZM8.97185 13.6449C8.97185 14.5879 9.65203 15.3623 10.4814 15.3623C11.3254 15.3623 11.9923 14.5879 11.991 13.6449C12.0056 12.7005 11.3254 11.9261 10.4814 11.9261C9.63751 11.9261 8.97185 12.7019 8.97185 13.6449ZM14.5506 13.6449C14.5506 14.5879 15.2308 15.3623 16.0602 15.3623C16.9041 15.3623 17.5698 14.5879 17.5698 13.6449C17.5843 12.7005 16.9041 11.9261 16.0602 11.9261C15.2162 11.9261 14.5506 12.7019 14.5506 13.6449Z"
                          />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Discord</div>
                      </a>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Whitepaper "
                        color="textLink"
                        href="https://stratum-exchange.gitbook.io/stratum-exchange/"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-dZiGjT fdlyIC"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-cvBxsj ipDbmA"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM8.57639 5.41667H17.7847C18.6311 5.41667 19.3194 6.10499 19.3194 6.95139V19.2292C19.3194 20.0756 18.6311 20.7639 17.7847 20.7639H8.57639C7.72999 20.7639 7.04167 20.0756 7.04167 19.2292V6.95139C7.04167 6.10499 7.72999 5.41667 8.57639 5.41667ZM14.2639 7.94444H9.79514C9.37079 7.94444 9.02778 8.28746 9.02778 8.71181C9.02778 9.13616 9.37079 9.47917 9.79514 9.47917H14.2639C14.6882 9.47917 15.0312 9.13616 15.0312 8.71181C15.0312 8.28746 14.6882 7.94444 14.2639 7.94444ZM9.79514 18.2361H16.566C16.9903 18.2361 17.3333 17.8931 17.3333 17.4688C17.3333 17.0444 16.9903 16.7014 16.566 16.7014H9.79514C9.37079 16.7014 9.02778 17.0444 9.02778 17.4688C9.02778 17.8931 9.37079 18.2361 9.79514 18.2361ZM9.79514 15.3924H16.566C16.9903 15.3924 17.3333 15.0494 17.3333 14.625C17.3333 14.2007 16.9903 13.8576 16.566 13.8576H9.79514C9.37079 13.8576 9.02778 14.2007 9.02778 14.625C9.02778 15.0494 9.37079 15.3924 9.79514 15.3924ZM9.79514 12.5486H16.566C16.9903 12.5486 17.3333 12.2056 17.3333 11.7813C17.3333 11.3569 16.9903 11.0139 16.566 11.0139H9.79514C9.37079 11.0139 9.02778 11.3569 9.02778 11.7813C9.02778 12.2056 9.37079 12.5486 9.79514 12.5486Z"
                          />
                        </svg>
                        <div className="sc-hFbbzE eeoijf">Whitepaper</div>
                      </a>
                    </div>
                    <p className="sc-jBqsNv iuuMPQ">
                      SatoPAD is revolutionizing Bitcoin's ecosystem by blending
                      security, transparency, and ease of use, making DeFi
                      accessible to newcomers and seasoned investors alike,
                      fostering the next wave of financial innovation.
                    </p>
                    <div className="MuiBox-root css-vpdg9a">
                      <a
                        color="textLink"
                        href="#"
                        target="_blank"
                        className="sc-gEvEer sc-eeDRCY HqrPw clMPag sc-cdaca-d RWcOJ"
                      >
                        <button
                          className="sc-iGgWBj jsONzb sc-eZuMGc fvTqRt"
                          scale="md"
                        >
                          <div className="sc-eqUAAy sc-fqkvVR ibWWSZ kqrqSr" />
                          <p>Sale Details</p>
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
                      </a>
                    </div>
                  </div>
                  <div className="sc-idnGQK kEdRDb">
                    <div className="sc-fgSWkL gPIdId border-btnu">
                      <div className="MuiBox-root css-k008qs">
                        <span
                          className="MuiTypography-root MuiTypography-button sc-jGKxIK fWwSZs css-gs2brp"
                          ifcolor="text"
                        >
                          Requirement
                        </span>
                      </div>
                      <div className="MuiBox-root css-0">
                        <span
                          className="MuiTypography-root MuiTypography-button sc-jGKxIK fWwSZs css-gs2brp"
                          ifcolor="text"
                        >
                          Whitelist
                        </span>
                      </div>
                    </div>
                    <div className="sc-fgSWkL gPIdId">
                      <div className="MuiBox-root css-70qvj9">
                        <span
                          className="MuiTypography-root MuiTypography-button sc-jGKxIK fWwSZs css-gs2brp"
                          ifcolor="text"
                        >
                          Sale Method
                        </span>
                        <div className="sc-eqUAAy OnuZo">
                          <div
                            aria-label="Available networks in this token sale. Switch network via the wallet to participate."
                            className="sc-eqUAAy sc-fqkvVR gwDspt ijIlwL"
                          ></div>
                        </div>
                      </div>
                      <div className="MuiBox-root css-1ol2kaa font-weight-bold">
                        Overflow
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="f-detail-card-col-right col">
                <div className="f-detail-card">
                  <div className="f-detail-image">
                    <img src={defaultImg} alt="FANPAD" />
                    <div className="f-detail-chain">
                      <img src={BtcIcon} alt="chain" height="25px" />
                      <span>Bitcoin</span>
                    </div>
                    <div className="f-detail-status">
                      <span className="tag-primary">Preparation</span>
                    </div>
                  </div>
                  <div className="f-detail-info">
                    <div>
                      <h2 className="f-detail-name">
                        $SATO Public Sale
                        <img
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="This IDO is protected by SatoPAD Shield."
                          src={HeartIcon}
                          className="satopad-verified cursor-pointer"
                        />
                      </h2>
                      <div class="launchpad_detail_deadline___jzXF disabled">
                        <ul>
                          <li>
                            <h1>00 </h1>
                            <p>DAY</p>
                          </li>
                          <li>
                            <h1>00 </h1>
                            <p>HRS</p>
                          </li>
                          <li>
                            <h1>00 </h1>
                            <p>MIN</p>
                          </li>
                          <li>
                            <h1>00 </h1>
                            <p>SEC</p>
                          </li>
                        </ul>
                      </div>
                      <div className="f-detail-more-item">
                        <div className="f-detail-more-label">
                          Your Allocation
                        </div>
                        <div className="f-detail-funding">
                          <b>TBA (BTC) </b>
                        </div>
                        <br />
                      </div>
                      <div className="f-detail-progress-wrap">
                        <div className="f-detail-progress-info">
                          <div className="f-detail-progress-raised">
                            <b style={{ color: "#f7931a" }}>TBA</b>
                          </div>
                          <div className="f-detail-progress-value">(0.00%)</div>
                        </div>
                        <div className="f-detail-progress">
                          <div
                            className="f-detail-progress-percent"
                            style={{ width: "0%" }}
                          />
                        </div>
                      </div>
                      <div className="f-detail-more">
                        <div className="f-detail-more-items row">
                          <div className="col-md-5">
                            <div className="f-detail-more-item">
                              <div className="f-detail-more-label">
                                Token Price
                              </div>
                              <div className="f-detail-more-value">
                                <img src={hardIco} alt="token price" />
                                <b>2000</b>
                                <span>SATS</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="f-detail-more-item">
                              <div className="f-detail-more-label">
                                Pool Size
                              </div>
                              <div className="f-detail-more-value">
                                <img src={moneyIco} alt="pool size" />
                                <b>20,000,000</b>
                                <span>SATO</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="f-detail-more-item">
                              <div className="f-detail-more-label">
                                Funding Goal
                              </div>
                              <div className="f-detail-funding">
                                <img src={stackIco} alt="funding goal" />
                                <b>10</b>
                                <span>BTC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={closePop}
                      data-bs-toggle="modal"
                      data-bs-target="#connectWalletModal"
                      className="btn btn-fp btn-fp-blue btn-fp--center"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-pool-detail-body">
        <div className="f-pool-schedule">
          <div className="container">
            <div className="f-pool-schedule-card">
              <div className="f-pool-schedule-label" />
              <div className="f-pool-schedule-progress">
                <div className="gx-0 row">
                  <div className="col-xl col-lg col-md col-12">
                    <div className="f-pool-schedule-progress-item first current active">
                      <div className="f-pool-schedule-progress-item-inner">
                        <div className="f-pool-schedule-progress-icon">
                          <img src={progress1} alt="Preparation" />
                        </div>
                        <div className="f-pool-schedule-progress-title">
                          Preparation
                        </div>
                        <div className="f-pool-schedule-progress-description">
                          This project is in preparation phase.
                          <br />
                          Stay tuned.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md col-12">
                    <div className="f-pool-schedule-progress-item ">
                      <div className="f-pool-schedule-progress-item-inner">
                        <div className="f-pool-schedule-progress-icon">
                          <img src={progree2} alt="Whitelist" />
                        </div>
                        <div className="f-pool-schedule-progress-title">
                          Whitelist
                        </div>
                        <div className="f-pool-schedule-progress-description">
                          You can now whitelist yourself
                          <br /> for the lottery.
                        </div>
                        <div className="f-pool-schedule-progress-meta ">
                          TBA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md col-12">
                    <div className="f-pool-schedule-progress-item ">
                      <div className="f-pool-schedule-progress-item-inner">
                        <div className="f-pool-schedule-progress-icon">
                          <img src={progree3} alt="Sale" />
                        </div>
                        <div className="f-pool-schedule-progress-title">
                          Allocation
                        </div>
                        <div className="f-pool-schedule-progress-description">
                          Winners can participate
                          <br />
                          in the token sale.
                        </div>
                        <div className="f-pool-schedule-progress-meta ">
                          TBA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md col-12">
                    <div className="f-pool-schedule-progress-item ">
                      <div className="f-pool-schedule-progress-item-inner">
                        <div className="f-pool-schedule-progress-icon">
                          <img src={progree3b} alt="Sale" />
                        </div>
                        <div className="f-pool-schedule-progress-title">
                          First Come, First Served
                        </div>
                        <div className="f-pool-schedule-progress-description">
                          Everyone can participate
                          <br /> in the token sale.
                        </div>
                        <div className="f-pool-schedule-progress-meta ">
                          TBA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg col-md col-12">
                    <div className="f-pool-schedule-progress-item last ">
                      <div className="f-pool-schedule-progress-item-inner">
                        <div className="f-pool-schedule-progress-icon">
                          <img src={progree4} alt="Distribution" />
                        </div>
                        <div className="f-pool-schedule-progress-title">
                          Distribution
                        </div>
                        <div className="f-pool-schedule-progress-description">
                          The tokens get distributed
                          <br /> to sale participants.
                        </div>
                        <div className="f-pool-schedule-progress-meta ">
                          TBA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={modalPop ? "modal-overlay" : "hide"}
        onClick={closePop}
      ></div>
      <div
        className={
          modalPop
            ? "MuiDialog-container fix-modal MuiDialog-scrollPaper yesvisible mui-style-ekeie0"
            : "MuiDialog-container fix-modal MuiDialog-scrollPaper novisible mui-style-ekeie0"
        }
        role="presentation"
        tabIndex={-1}
        style={{
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm mui-style-ixzipm"
          role="dialog"
          aria-labelledby=":rv:"
        >
          <button
            onClick={closePop}
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-8r14ou"
            tabIndex={0}
            type="button"
          >
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={24}
                cy={24}
                r="23.5"
                stroke="white"
                strokeOpacity="0.2"
              />
              <path
                d="M18 18L30 30"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M18 30L30 18"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
            <span className="MuiTouchRipple-root mui-style-w0pj6f" />
          </button>
          <div className="MuiDialogContent-root mui-style-1b2gyyf">
            <div>
              <div className="MuiStack-root mui-style-1e7g3wv">
                <p className="MuiTypography-root MuiTypography-body1 mui-style-7war73">
                  Connect your wallet
                </p>
              </div>
              <div className="MuiStack-root mui-style-kjfzc1">
                <div
                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-1rkdppy"
                  tabIndex={0}
                  role="button"
                >
                  <div className="MuiListItemAvatar-root mui-style-a5kqs7">
                    <div className="MuiBox-root mui-style-144lp64">
                      <img
                        alt="Unisat"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        src={UniSatWallet}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="MuiListItemText-root mui-style-1tsvksn">
                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-17ha0w2">
                      UniSat
                    </span>
                  </div>
                  <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                </div>
                <div
                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-1rkdppy"
                  tabIndex={0}
                  role="button"
                >
                  <div className="MuiListItemAvatar-root mui-style-a5kqs7">
                    <div className="MuiBox-root mui-style-144lp64">
                      <img
                        alt="OKX"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        src={ico2}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="MuiListItemText-root mui-style-1tsvksn">
                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-17ha0w2">
                      OKX
                    </span>
                  </div>
                  <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                </div>
                <div
                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-disabled Mui-disabled MuiListItemButton-root MuiListItemButton-gutters Mui-disabled mui-style-1rkdppy"
                  tabIndex={-1}
                  role="button"
                  aria-disabled="true"
                >
                  <div className="MuiListItemAvatar-root mui-style-a5kqs7">
                    <div className="MuiBox-root mui-style-144lp64">
                      <img
                        alt="Xverse"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        src={ico3}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="MuiListItemText-root mui-style-1tsvksn">
                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-17ha0w2">
                      Xverse (Soon)
                    </span>
                  </div>
                </div>
                <div
                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-disabled Mui-disabled MuiListItemButton-root MuiListItemButton-gutters Mui-disabled mui-style-1rkdppy"
                  tabIndex={-1}
                  role="button"
                  aria-disabled="true"
                >
                  <div className="MuiListItemAvatar-root mui-style-a5kqs7">
                    <div className="MuiBox-root mui-style-144lp64">
                      <img
                        alt="Leather"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        src={LeatherWallet}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="MuiListItemText-root mui-style-1tsvksn">
                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-17ha0w2">
                      Leather (Soon)
                    </span>
                  </div>
                </div>
                <br />
                <a
                  href="https://unisat.io/"
                  target="_blank"
                  className="create-wallet"
                >
                  <div
                    className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-1rkdppy"
                    tabIndex={0}
                    role="button"
                  >
                    <div className="MuiListItemAvatar-root mui-style-a5kqs7">
                      <div className="MuiBox-root mui-style-144lp64">
                        <img src={WalletIcon} />
                      </div>
                    </div>
                    <div className="MuiListItemText-root mui-style-1tsvksn">
                      <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary mui-style-17ha0w2">
                        Create a new wallet
                      </span>
                    </div>
                    <span className="MuiTouchRipple-root mui-style-w0pj6f" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Wallet;
