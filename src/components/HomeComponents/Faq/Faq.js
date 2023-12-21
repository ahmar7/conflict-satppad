import React, { useState } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);

  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  let toggleFaq1 = () => {
    if (faq1 === false) {
      setFaq1(true);
    } else {
      setFaq1(false);
    }
  };
  let toggleFaq2 = () => {
    if (faq2 === false) {
      setFaq2(true);
    } else {
      setFaq2(false);
    }
  };
  let toggleFaq3 = () => {
    if (faq3 === false) {
      setFaq3(true);
    } else {
      setFaq3(false);
    }
  };
  let toggleFaq4 = () => {
    if (faq4 === false) {
      setFaq4(true);
    } else {
      setFaq4(false);
    }
  };
  let toggleFaq5 = () => {
    if (faq5 === false) {
      setFaq5(true);
    } else {
      setFaq5(false);
    }
  };

  let toggleFaq6 = () => {
    if (faq6 === false) {
      setFaq6(true);
    } else {
      setFaq6(false);
    }
  };
  let toggleFaq7 = () => {
    if (faq7 === false) {
      setFaq7(true);
    } else {
      setFaq7(false);
    }
  };
  return (
    <section className="faq-section">
      <div className="containerer">
        <div className="faq-column justify-content-center row">
          <div className="text-center col-xxl-10 col-xl-11 col-md-12">
            <h2 className="title faqs-title mt-5">FAQs</h2>
            <br />
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq1}
                    className={
                      faq1 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What is SatoPAD Finance?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq1 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      SatoPAD is a decentralized launchpad platform specifically
                      designed to nurture and accelerate the growth of the
                      Bitcoin BRC-20 ecosystem. As a comprehensive DeFi
                      solution, SatoPAD plays a pivotal role in making
                      decentralized finance accessible and secure, catering to
                      both emerging projects and new investors within the
                      Bitcoin space.
                    </p>

                    <p>
                      By leveraging cutting-edge innovations like BRC-20 tokens
                      and the Ordinals protocol, SatoPAD effectively bridges
                      existing gaps in the Bitcoin ecosystem. It provides a
                      robust platform for secure project launches and investment
                      opportunities, thereby contributing significantly to the
                      evolution and expansion of decentralized finance on
                      Bitcoin. This approach not only supports the growth of
                      individual projects but also strengthens the overall
                      Bitcoin DeFi landscape, positioning SatoPAD as a key
                      facilitator in this emerging and dynamic sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq2}
                    className={
                      faq2 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    When will the SatoPAD IDO take place?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq2 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The exact date of the{" "}
                      <Link
                        to="/launchpad/public-sale"
                        className="pool-whitelist-link"
                      >
                        SatoPAD IDO
                      </Link>{" "}
                      will be announced on our official channels. The best way
                      to stay informed is by following our official social media
                      and website. We ensure all important updates and
                      announcements are communicated through these platforms. We
                      encourage users to follow these channels to stay updated
                      and avoid scams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq4}
                    className={
                      faq4 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What is the Syncera Ambassador Program?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq4 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The Syncera Champion Program serves as an{" "}
                      <a
                        href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/champion-program-zealy"
                        class="pool-whitelist-link"
                        target="_blank"
                      >
                        ambassador program
                      </a>{" "}
                      on{" "}
                      <a
                        href="https://zealy.io/c/syncera/questboard"
                        target="_blank"
                        class="pool-whitelist-link"
                      >
                        Zealy
                      </a>{" "}
                      that allows members of the community to track their
                      progress and receive special roles on Discord for actively
                      taking part. The most distinguished members who have
                      achieved a revered status will be given exclusive
                      advantages within the Syncera network, including partner
                      seed rounds, private rounds, airdrops, and other
                      attractive benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            */}
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq3}
                    className={
                      faq3 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What benefits do SATO token holders get?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq3 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      SatoPAD ($SATO) is the utility and governance token for
                      SatoPAD. We are taking significant measures to increase
                      its importance and function in our ecosystem by
                      incorporating new products and exclusive features.
                    </p>
                    <p>
                      The main benefit of holding the SATO token is that
                      investors can gain early access to other developing
                      projects within the growing ecosystem of Bitcoin. To
                      guarantee your participation in an IDO, you can go through
                      our{" "}
                      <a
                        href="https://satopad-finance.gitbook.io/satopad-finance/satopad-ecosystem-v1/launchpad/tiers"
                        target="_blank"
                        className="pool-whitelist-link"
                      >
                        tier system
                      </a>{" "}
                      to know the exact number of tokens required. Usually,
                      these emerging cryptocurrency projects offer SATO
                      investors a token valuation significantly lower than the
                      listing price, and considering the excitement and
                      potential surrounding the BRC-20 ecosystem, it may be
                      worthwhile to invest in these new ventures.
                    </p>

                    <p>
                      <b>Others ways holders of our token may benefit:</b>

                      <ul>
                        <li>IDO Participation</li>
                        <li>Guaranteed Allocation</li>
                        <li>Fee distribution</li>
                        <li>Governance</li>
                        <li>Ecosystem discounts</li>
                        <li>Airdrops</li>
                        <li>Private Deals</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq4}
                    className={
                      faq4 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What is the long-term vision of SatoPAD Finance?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq4 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      SatoPAD Finance is dedicated to establishing itself as a
                      leading DeFi platform within the Bitcoin ecosystem, driven
                      by a vision of innovation, accessibility, and
                      community-led growth. We are focused on pioneering
                      advanced DeFi services and products, specifically tailored
                      to leverage the unique capabilities of the Bitcoin
                      network, including the BRC-20 token standard. Our
                      commitment extends beyond just providing solutions; we
                      believe in the immense potential and future growth of DeFi
                      on Bitcoin.
                    </p>

                    <p>
                      By fostering a secure, transparent, and user-friendly
                      environment, we aim to empower both new and experienced
                      participants in the DeFi space. As a community-centric
                      platform, SatoPAD Finance is set to evolve as a
                      decentralized autonomous organization (DAO), ensuring that
                      we remain at the forefront of the ever-evolving DeFi
                      landscape and solidify our position as the preferred
                      choice for DeFi activities on Bitcoin.
                    </p>
                    {/*
                    <p>
                      <b>
                        The number of SERA tokens you're allocated in our
                        public sale depends on your position in our program,
                        with higher-ranking participants getting a larger
                        allocation.
                      </b>
                    </p>
                    */}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq5}
                    className={
                      faq5 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    How can I contact the SatoPAD Finance team for different
                    inquiries?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq5 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      For any general inquiries about SatoPAD Finance, please
                      feel free to reach out to us at{" "}
                      <a
                        href="mailto:info@satopad.finance"
                        className="pool-whitelist-link"
                      >
                        info@satopad.finance
                      </a>
                      . Our team is dedicated to providing timely and helpful
                      responses to all your questions.
                    </p>

                    <p>
                      If you have partnership, marketing, or other
                      business-related inquiries, we encourage you to contact
                      our business team at{" "}
                      <a
                        href="mailto:business@satopad.finance"
                        className="pool-whitelist-link"
                      >
                        business@satopad.finance
                      </a>
                      . We are always open to exploring new opportunities and
                      collaborations that align with our mission and values.
                    </p>

                    <p>
                      For support-related issues, especially concerning project
                      launches on our platform, please email{" "}
                      <a
                        href="mailto:support@satopad.finance"
                        className="pool-whitelist-link"
                      >
                        support@satopad.finance
                      </a>
                      . Our support team is committed to assisting you with any
                      challenges or questions you may have regarding our
                      launchpad services.
                    </p>

                    <p>
                      In line with our commitment to decentralization and
                      fairness, we also offer opportunities for private deals to
                      our devoted community members. If you believe you qualify
                      and are interested in these exclusive opportunities,
                      please contact us at{" "}
                      <a
                        href="mailto:private@satopad.finance"
                        className="pool-whitelist-link"
                      >
                        private@satopad.finance
                      </a>
                      . Our team will carefully evaluate each inquiry, ensuring
                      that our private deal offerings align with our ethos of
                      inclusivity and equitable access for all members of our
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="round-button light large  btn btn-main nop"
              href="https://satopad-finance.gitbook.io/satopad-finance/or-faqs"
              target="_href"
            >
              View all Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
