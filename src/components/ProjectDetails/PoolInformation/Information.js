import React from "react";
import "./Information.css";
import NetworkIco from "../../../assets/img/5000.svg";
const Information = () => {
  return (
    <div className="">
      <div className="container muiao MuiBox-root css-1q7njkh mt-5">
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-sag665">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6 sc-dNckAz eLNKzK css-iol86l">
            <div className="sc-iNIeMn kQGbCJ">
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-knefzF cVoruI">Pool Information</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-hsUFQk dSlGvg">Price per Token</p>
                <p className="sc-hsUFQk dSlGvg">1 STRAT = 0.04 USDT</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-hsUFQk dSlGvg">Accepted Currency</p>
                <p className="sc-hsUFQk dSlGvg">USDT</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-hsUFQk dSlGvg">Staking Cap</p>
                <p className="sc-hsUFQk dSlGvg">- </p>
              </div>
              <div className="sc-fTyFcS dYczhi ">
                <p className="sc-hsUFQk dSlGvg">Staking tokens</p>
                <p className="sc-hsUFQk dSlGvg">vIDIA</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-knefzF cVoruI">Token Info</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-hsUFQk dSlGvg">Token Name</p>
                <p className="sc-hsUFQk dSlGvg">Stratum</p>
              </div>
              <div className="sc-fTyFcS dYczhi">
                <p className="sc-hsUFQk dSlGvg">Token for Sale</p>
                <p className="sc-hsUFQk dSlGvg">625,000 STRAT</p>
              </div>
              <div className="sc-fTyFcS dYczhi  no-border">
                <p className="sc-hsUFQk dSlGvg">Contracts</p>
                <div className="MuiBox-root css-1pt0vlt">
                  <img src={NetworkIco} width={24} alt="network" />
                  <p className="sc-hsUFQk dSlGvg">0x5a09...67f9</p>
                  <div
                    className="MuiBox-root css-0 flex"
                    aria-label="Add to wallet"
                  >
                    <button
                      className="sc-iGgWBj SXFeo "
                      scale="md"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        background: "transparent",
                        width: "25px",
                        height: "20px",
                      }}
                    >
                      <div className="sc-eqUAAy sc-fqkvVR ibWWSZ kqrqSr" />
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-beeQDc crqhZa"
                      >
                        <path
                          d="M12.4993 4.375C12.1542 4.375 11.8743 4.65482 11.8743 5C11.8743 5.34518 12.1542 5.625 12.4993 5.625H16.2494C16.3644 5.625 16.4577 5.71827 16.4577 5.83333V7.70833H17.4994C17.5713 7.70833 17.6411 7.71745 17.7077 7.73459V5.83333C17.7077 5.02792 17.0548 4.375 16.2494 4.375H12.4993Z"
                          fillOpacity="0.7"
                        />
                        <path
                          d="M17.7077 12.6821C17.6411 12.6992 17.5713 12.7083 17.4994 12.7083H16.4577V14.5833C16.4577 14.6984 16.3644 14.7917 16.2494 14.7917H4.99935C4.88429 14.7917 4.79102 14.6984 4.79102 14.5833V13.75C4.79102 13.4048 4.51119 13.125 4.16602 13.125C3.82084 13.125 3.54102 13.4048 3.54102 13.75V14.5833C3.54102 15.3887 4.19393 16.0417 4.99935 16.0417H16.2494C17.0548 16.0417 17.7077 15.3887 17.7077 14.5833V12.6821Z"
                          fillOpacity="0.7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0827 8.95833H14.166C13.4757 8.95833 12.916 9.51798 12.916 10.2083C12.916 10.8987 13.4757 11.4583 14.166 11.4583H17.0827V8.95833ZM14.166 7.70833C12.7853 7.70833 11.666 8.82762 11.666 10.2083C11.666 11.589 12.7853 12.7083 14.166 12.7083H17.4994C17.9596 12.7083 18.3327 12.3352 18.3327 11.875V8.54167C18.3327 8.08143 17.9596 7.70833 17.4994 7.70833H14.166Z"
                          fillOpacity="0.7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.41732 9.99967C7.25827 9.99967 8.75065 8.50729 8.75065 6.66634C8.75065 4.82539 7.25827 3.33301 5.41732 3.33301C3.57637 3.33301 2.08398 4.82539 2.08398 6.66634C2.08398 8.50729 3.57637 9.99967 5.41732 9.99967ZM5.41732 11.2497C7.94862 11.2497 10.0007 9.19765 10.0007 6.66634C10.0007 4.13504 7.94862 2.08301 5.41732 2.08301C2.88601 2.08301 0.833984 4.13504 0.833984 6.66634C0.833984 9.19765 2.88601 11.2497 5.41732 11.2497Z"
                          fillOpacity="0.7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.33398 6.66634C3.33398 6.32116 3.61381 6.04134 3.95898 6.04134H6.87565C7.22083 6.04134 7.50065 6.32116 7.50065 6.66634C7.50065 7.01152 7.22083 7.29134 6.87565 7.29134H3.95898C3.61381 7.29134 3.33398 7.01152 3.33398 6.66634Z"
                          fillOpacity="0.7"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.41732 4.58301C5.7625 4.58301 6.04232 4.86283 6.04232 5.20801V8.12467C6.04232 8.46985 5.7625 8.74967 5.41732 8.74967C5.07214 8.74967 4.79232 8.46985 4.79232 8.12467V5.20801C4.79232 4.86283 5.07214 4.58301 5.41732 4.58301Z"
                          fillOpacity="0.7"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    title
                    type="button"
                    className="sc-keuYuY jDbtIU flex"
                    data-clipboard-text="0x5a093a9c4f440c6b105F0AF7f7C4f1fBE45567f9"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-jwWbkn kUbNon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.58398 4.63965V13.473H15.4173V4.63965H6.58398ZM6.16732 3.38965C5.70708 3.38965 5.33398 3.76274 5.33398 4.22298V13.8896C5.33398 14.3499 5.70708 14.723 6.16732 14.723H15.834C16.2942 14.723 16.6673 14.3499 16.6673 13.8896V4.22298C16.6673 3.76274 16.2942 3.38965 15.834 3.38965H6.16732Z"
                        fillOpacity="0.7"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.33398 5.59668C3.67916 5.59668 3.95898 5.8765 3.95898 6.22168V15.9856H13.7229C14.0681 15.9856 14.3479 16.2654 14.3479 16.6106C14.3479 16.9557 14.0681 17.2356 13.7229 17.2356H3.33398C2.98881 17.2356 2.70898 16.9557 2.70898 16.6106V6.22168C2.70898 5.8765 2.98881 5.59668 3.33398 5.59668Z"
                        fillOpacity="0.7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
