import React from "react";
import "./SwapCard.css";
import BtcIcon from "../../../assets/img/btc-icon.png";
import OrdiIcon from "../../../assets/img/ordi-icon.png";
import WheelIcon from "../../../assets/img/wheel-icon.svg";
import GraphIcon from "../../../assets/img/graph-icon.svg";
const SwapCard = () => {
  return (
    <div className="page-container">
      <div
        className="swap-container flex justify-center w-full container md:items-start mt-8 md:-mt-10"
        style={{ zIndex: 2 }}
      >
        <div
          id="swap-page"
          className="max-w-xl w-full md:w-1/2 pb-4 p-5 md:p-5 space-y-4 md:mt-20 rounded-xl bg-dark-900 z-1"
        >
          <div className="flex justify-between mb-5 space-x-3 items-center">
            <div className="flex items-center">
              <h1 className="text-white font-medium swap-head currentColor">
                Ordinals AMM
              </h1>
            </div>
            <div className="flex items-center">
              <div className="grid grid-flow-col gap-1">
                <div className="relative w-full h-full rounded hover:bg-dark-800 flex items-center">
                  <div className="flex relative">
                    <div
                      className="radius-12  flex items-center justify-center cursor-pointer py-1 px-3"
                      id="open-settings-dialog-button"
                      style={{ fontSize: "12px" }}
                    >
                      <img src={WheelIcon} height="18px" width="18px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alert syncera-warning" role="alert">
            <i className="fas fa-exclamation-triangle"></i> Swap feature coming
            soon – currently under maintenance.
          </div>
          <div className="input-container">
            <div
              id="swap-currency-input"
              className="p-5 negative-mark bg-blue rounded-xl border border-lightBlueSecondary undefined"
            >
              <div className="text-xs font-medium text-jordyBlue whitespace-nowrap currency-title">
                From
              </div>
              <div className="flex justify-between space-y-3 sm:space-y-0 sm:flex-row input-wrapper gap-3">
                <div className="w-full sm:w-72 order-2 ml-3 bg-gradient-to-r from-light-purple via-dark-purple to-light-blue rounded-xl relative">
                  <div className="absolute -top-7 right-0">
                    <div className="text-xxs font-medium text-right cursor-pointer text-jordyBlue whitespace-nowrap">
                      Balance: 0.00 ORDI
                    </div>
                    <div className="flex justify-end space-x-1 text-xs font-medium text-right text-secondary" />
                  </div>
                  <button
                    type="button"
                    className="text-primary open-currency-select-button h-full w-full outline-none select-none cursor-pointer border-none text-xl font-medium rounded-xl items-center token-button"
                    style={{
                      backgroundColor: "#1e110e",
                      position: "relative",
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className="flex items-center"
                        style={{ marginRight: "8px" }}
                      >
                        <div
                          className="rounded"
                          style={{ width: "26px", height: "26px" }}
                        >
                          <img
                            src={OrdiIcon}
                            width="26px"
                            height="26px"
                            alt="GLMR"
                            className="rounded icon-swap"
                          />
                        </div>
                      </div>
                      <div className>
                        <div className="flex items-center swap-input-transform">
                          <div className="text-sm items-center font-bold token-symbol-container">
                            ORDI
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            width={16}
                            height={16}
                            className="ml-2 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex items-center w-full space-x-3 rounded input focus:bg-dark-700 p-3 relative round-20">
                  <input
                    id="token-amount-input"
                    inputMode="decimal"
                    title="Token Amount"
                    autoComplete="off"
                    autoCorrect="off"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    placeholder={0.0}
                    min={0}
                    minLength={1}
                    maxLength={79}
                    spellCheck="false"
                    className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary w-0 p-0 text-lg bg-transparent"
                    defaultValue
                  />
                </div>
              </div>
            </div>
            <div className="grid ">
              <div className="w-full flex p-0 justify-center transition Row__AutoRow-sc-1ljkvzo-2 iUMUwm">
                <button className="z-10 -mt-6 -mb-6 rounded-full">
                  <div
                    className="rounded-full rounded-fulle p-3px m-4"
                    style={{ borderRadius: "20px!important" }}
                  >
                    <div className=" ">
                      <div
                        className="cursor-pointer new-switch  font-medium bg-gray-100 text-black text-sm rounded-full px-6 py-1 w-fit -my-2 flex gap-2.5 items-center z-10 text-center"
                        role="button"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group 267">
                            <path
                              id="Union"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33321 4L3.33321 11.3333H4.66654L4.66654 1.90735e-06L0.666504 4H3.33321ZM8.66647 8V0.666668H7.33313L7.33313 12L11.3332 8H8.66647Z"
                              fill="#111827"
                            />
                          </g>
                        </svg>
                        <span>Switch</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="negative-markup">
              <div
                id="swap-currency-output"
                className="p-5 bg-blue rounded-xl border border-lightBlueSecondary undefined"
              >
                <div className="text-xs font-medium text-jordyBlue whitespace-nowrap currency-title">
                  To
                </div>
                <div className="flex justify-between space-y-3 sm:space-y-0 sm:flex-row input-wrapper gap-3">
                  <div
                    className="w-full sm:w-72 order-2 ml-3 bg-gradient-to-r from-light-purple via-dark-purple to-light-blue rounded-xl relative"
                    style={{ padding: "2px" }}
                  >
                    <div className="absolute -top-7 right-0">
                      <div className="text-xxs font-medium text-right cursor-pointer text-jordyBlue whitespace-nowrap">
                        Balance: 0.00 SATO
                      </div>
                      <div className="flex justify-end space-x-1 text-xs font-medium text-right text-secondary" />
                    </div>
                    <button
                      type="button"
                      className="text-primary open-currency-select-button h-full w-full outline-none select-none cursor-pointer border-none no-tg text-xl font-medium rounded-xl items-center token-button"
                      style={{
                        backgroundColor: "#1e110e",
                        position: "relative",
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <div
                          className="flex items-center"
                          style={{ marginRight: "8px" }}
                        >
                          <div
                            className="rounded"
                            style={{ width: "26px", height: "26px" }}
                          >
                            <img
                              src={OrdiIcon}
                              width="26px"
                              height="26px"
                              alt="SATO"
                              className="rounded icon-swap"
                            />
                          </div>
                        </div>
                        <div className>
                          <div className="flex items-center swap-input-transform">
                            <div className="text-sm items-center font-bold token-symbol-container">
                              SATO
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={16}
                              height={16}
                              className="ml-2 stroke-current"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center w-full space-x-3 rounded input focus:bg-dark-700 p-3 relative round-20">
                    <input
                      id="token-amount-input"
                      inputMode="decimal"
                      title="Token Amount"
                      autoComplete="off"
                      autoCorrect="off"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      placeholder={0.0}
                      min={0}
                      minLength={1}
                      maxLength={79}
                      spellCheck="false"
                      className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary w-0 p-0 text-lg bg-transparent"
                      defaultValue
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-one btn-swap btn-disabled" id="swap-button">
            Insufficient Liquidity
          </button>
          <div className="bg-darkBlue flex text-center justify-center p-2 md:w-1/2 mr-auto ml-auto rounded-xl px-2">
            Slippage Tolerance: 0.50%
          </div>
          <div className="absolute -bottom-14 left-0 w-full  md:block">
            <div className="left-0 radius-12 px-5 py-222 flex gap-2 justify-center border border-lightBlueSecondary bg-deepCove text-aqua hover:bg-blue cursor-pointer transition w-full text-center text-xxs">
              <div>Turn on Advanced Trading</div>
              <img src={GraphIcon} height="18px" width="18px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
