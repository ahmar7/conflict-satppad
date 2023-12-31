import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import BtcIcon from "../../../assets/img/btc-icon.png";
import EthIcon from "..//../../assets/img/eth-icon-transparent.png";
import { Link } from "react-router-dom";
import LogoIcon from '../../../assets/img/logo-icon.png'

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="coming-projects">
        <div className="projects-slider">
          <div className="projects-slider__info">
            <h2 className="title secondary-glow">SatoPad Projects</h2>

            <Link to="/launchpad" className="round-button light large btn btn-main nop" href="#">
              All Projects
            </Link>
          </div>

          <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events projects-slider-slides">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ marginRight: "32px" }}
                  >
                    <Link to="/launchpad" className="project-slide">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-completed project-tag--status">
                            <span>Completed</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={BtcIcon}
                              className="project-tag__image"
                            />&nbsp;
                            <span>BRC-20</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>BTC</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">
                          $SATO Seed Sale
                        </h3>
                      </header>
                      <div
                        className="project-slide__image project-syncera-slide__image project-pool-bg"
                      >
                        <img
                          src={LogoIcon}
                          width={140}
                          height={140}
                          className="project-slide__logo"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>

                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={2}
                    style={{ marginRight: "32px" }}
                  >
                    <Link to="/launchpad/public-sale" className="project-slide" href="#">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-tag--status">
                            <span className="font-weight-bold">Upcoming</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={BtcIcon}
                              className="project-tag__image"
                            />&nbsp;
                            <span>BRC-20</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>BTC</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">$SATO Public Sale</h3>
                      </header>
                      <div
                        className="project-slide__image project-syncera-slide__image project-pool-bg"
                      >
                        <img
                          src={LogoIcon}
                          width={140}
                          height={140}
                          className="project-slide__logo"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={3}
                    style={{ marginRight: "32px" }}
                  >
                    <Link to="/launchpad" className="project-slide" href="#">
                      <header className="project-slide__head">
                        <div className="project-slide__tags">
                          <span className="project-tag coming-soon project-tag--status">
                            <span>Coming Soon</span>
                          </span>
                          <span className="project-tag project-tag--network">
                            <img
                              src={BtcIcon}
                              className="project-tag__image"
                            />
                            <span>BRC-20</span>
                          </span>
                          <span className="project-tag project-tag--token">
                            <span>BTC</span>
                          </span>
                        </div>
                        <h3 className="project-slide__name">To Be Revealed..</h3>
                      </header>
                      <div
                        className="project-slide__image project-pool-bg"
                      >
                        <img
                          src={BtcIcon}
                          width={140}
                          height={140}
                          className="project-slide__logo rounded-circle"
                        />
                        <button
                          type="button"
                          className="round-button dark project-slide__button btn btn-main"
                        >
                          <span className="project-slide__link-image" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
