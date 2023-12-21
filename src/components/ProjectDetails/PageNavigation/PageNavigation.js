import React from "react";
import "./PageNavigation.css";
import { Link } from "react-router-dom";
const PageNavigation = (props) => {
  return (
    <div class="MuiBox-root css-1hdsum7 container">
      <div class="sc-kqGoIF eAOJuN">
        <Link to="/">
          <div class="sc-dxcDKg xhPOy">
            <p
              class="MuiTypography-root MuiTypography-body1 sc-jGKxIK cxRaJq css-13mon78"
              ifcolor="text"
            >
              Home
            </p>
          </div>
        </Link>
        <div class="sc-gvZAcH fwl dQfutK">
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-kRRyDe kwrgNl"
          >
            <path d="M1.68023 0L0.740234 0.94L3.79357 4L0.740234 7.06L1.68023 8L5.68023 4L1.68023 0Z"></path>
          </svg>
        </div>
        <Link to="/launchpad">
          <div class=" lca sc-dxcDKg xhPOy">
            <p
              class="MuiTypography-root MuiTypography-body1 sc-jGKxIK cxRaJq css-13mon78"
              ifcolor="text"
            >
              Projects
            </p>
          </div>
        </Link>
        <div class="sc-gvZAcH dQfutK">
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-kRRyDe kwrgNl"
          >
            <path d="M1.68023 0L0.740234 0.94L3.79357 4L0.740234 7.06L1.68023 8L5.68023 4L1.68023 0Z"></path>
          </svg>
        </div>
        <div class="sc-dxcDKg gihAKz">
          <p
            class="MuiTypography-root MuiTypography-body1 sc-jGKxIK dCfTDl css-1szi051"
            ifcolor="textSecondary"
          >
            {" "}
            {props.projectTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
