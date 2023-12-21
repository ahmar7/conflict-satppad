import React from "react";
import BtcIcon from "../../../assets/img/btc.svg";
import EthIcon from "../../../assets/img/eth-icon.png";
import "./bridgeCard.css";
const BridgeCard = () => {
  return (
    <div className="page-container bridgeCard">
      <div
        className="swap-container flex justify-center w-full container md:items-start mt-8 md:-mt-10"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col gap-6 items-center">
          <div
            className="drop-shadow  backdrop-blur bg-none flex flex-col p-4 gap-5 sm:px-8 sm:py-6 w-full sm:w-[800px] p-3 sm:p-6 rounded-2xl"
            style={{}}
          >
            <h1 className="text-grading">BRC-20 Bridge</h1>
            <div className="alert syncera-warning" role="alert">
              <i className="fas fa-exclamation-triangle" aria-hidden="true" />{" "}
              Bridge feature coming soon – currently under maintenance.
            </div>

            <div className="flex items-center flex-col gap-0">
              <div className="flex flex-col pn-4 theme-bg bg-opacity-20 rounded-xl border border-white border-opacity-5 flex-1 w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2.5">
                    <p className="w-10">From:</p>
                    <div className="flex min-h-[36px] items-center px-2 py-1.5 rounded-lg cursor-pointer gap-1  bg-white bg-opacity-5">
                      <img
                        className="block object-center"
                        alt="Network Bitcoin icon"
                        src={BtcIcon}
                      />
                      <span className="text-gray-200 font-medium text-sm none-hide lg:block">
                        Bitcoin
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer  font-medium bg-gray-100 text-black text-sm rounded-full px-6 py-1 w-fit -my-2 flex gap-2.5 items-center z-10 text-center"
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
              <div className="flex flex-col pn-4  theme-bg bg-opacity-20 rounded-xl border border-white border-opacity-5 flex-1 w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2.5">
                    <p className="w-10">To:</p>
                    <div className="flex min-h-[36px] items-center px-2 py-1.5 rounded-lg cursor-pointer gap-1  bg-white bg-opacity-5">
                      <img
                        className="block object-center"
                        alt="Network Stacks Chain icon"
                        src={EthIcon}
                        height="24px"
                        width="24px"
                      />
                      <span className="text-gray-200 font-medium text-sm none-hide lg:block">
                        Ethereum
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2.5 rounded-lg theme-bg bg-opacity-20 p-4">
                <div className="flex justify-between items-center">
                  <p className="text-base font-semibold">
                    Choose BRC20 Tokens to bridge
                  </p>
                  <div className="rounded-lg flex dpoa rounded-lg border border-gray-700 px-4 py-2 max-w-[180px] flex-col rounded-lg flex flex-col border theme-bg/20">
                    <input
                      placeholder="Search..."
                      className="appearance-none  bg-transparent outline-none border-none flex-1 min-w-0 w-full text-gray-200"
                    />
                  </div>
                </div>
                <div className="px-4 border-bg py-10 flex flex-col items-center gap-2.5 relative rounded w-full">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="inbox" opacity="0.3">
                      <path
                        id="Vector"
                        d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.48333 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM31.6667 31.6667H8.33333V26.6667H14.2667C15.4167 28.65 17.55 30 20.0167 30C22.4833 30 24.6 28.65 25.7667 26.6667H31.6667V31.6667ZM31.6667 23.3333H23.35C23.35 25.1667 21.85 26.6667 20.0167 26.6667C18.1833 26.6667 16.6833 25.1667 16.6833 23.3333H8.33333V8.33333H31.6667V23.3333Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-gray-200">
                    Your BRC20 tokens will appear here once the Bitcoin wallet
                    is connected.
                  </p>
                </div>
              </div>
              <button
                className="cursor-pointer as-btn disabled:text-opacity-30 px-3 py-1 text-sm leading-5 font-medium rounded-full bg-primary disabled:opacity-30 text-gray-100 flex flex-row gap-2 items-center justify-center h-12 text-center"
                role="button"
                disabled={true}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeCard;
