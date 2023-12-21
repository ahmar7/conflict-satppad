import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../assets/img/logo-icon-white.png";
import LaunchpadIcon from "../../assets/img/Rocket.svg";
import StakingIcon from "../../assets/img/Chart.svg";
import SwapIcon from "../../assets/img/Arrow.svg";
import FarmIcon from "../../assets/img/Tractor.svg";
import GovernanceIcon from "../../assets/img/People.svg";
import DocsIcon from "../../assets/img/Book.svg";
import BridgeIcon from "../../assets/img/Bridge.svg";
import WalletIcon from "../../assets/img/Connect-Wallet.svg";
import UniSatWallet from "../../assets/img/unisat-wallet.svg";
import LeatherWallet from "../../assets/img/leather-wallet.svg";
import ico2 from "../../assets/img/2.webp";
import ico3 from "../../assets/img/3.webp";

const Header = () => {
  const [mblFull, setmblFull] = useState(false);
  const [progressComing2, setprogressComing2] = useState(false);
  const [modalPop, setmodalPop] = useState(false);
  const [progressComing, setprogressComing] = useState(false);
  const [drop, setDrop] = useState(false);
  let toggleMbl = () => {
    if (mblFull === false) {
      setmblFull(true);
    } else {
      setmblFull(false);
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
  let progressToggle2 = () => {
    setprogressComing2(true);
    setTimeout(() => {
      // progressComing ? setprogressComing2(false) : setprogressComing2(true);
      setprogressComing2(false);
    }, 5000);
  };
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <div>
      {drop && <div className="overlay" onClick={toggleDrop}></div>}
      <div className="MuiStack-root connectbtn">
        <button
          onClick={toggleDrop}
          className={
            drop
              ? "MuiButtonBase-root activebtn MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium mui-style-532m1e"
              : "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium mui-style-532m1e"
          }
          tabindex="0"
          type="button"
        >
          <p className="MuiTypography-root MuiTypography-body1 mui-style-vh8ben">
            <i class="fa-solid fa-charging-station"></i> Connect Wallet
          </p>
          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
        </button>
        <div
          className={
            drop
              ? "MuiPaper-root MuiPaper-elevation activeHeight MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper mui-style-1ek0hrx"
              : "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper mui-style-1ek0hrx"
          }
          tabIndex={-1}
        >
          <ul
            className="MuiList-root MuiList-padding MuiMenu-list mui-style-bc12dn"
            role="menu"
            tabIndex={-1}
          >
            <li
              onClick={closePop}
              className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters mui-style-j77aub"
              tabIndex={0}
              role="menuitem"
            >
              <img
                alt="logo"
                width={24}
                height={24}
                decoding="async"
                data-nimg={1}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1MF82MjY4KSI+CjxwYXRoIGQ9Ik0xMiAyNEMxOC42Mjc0IDI0IDI0IDE4LjYyNzQgMjQgMTJDMjQgNS4zNzI1OCAxOC42Mjc0IDAgMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRaIiBmaWxsPSIjRjc5MzFBIi8+CjxwYXRoIGQ9Ik0xNy4yNzQgMTAuNTE1QzE3LjUwOTUgOC45NDMgMTYuMzExOCA4LjA5Nzc1IDE0LjY3NTMgNy41MzM3NUwxNS4yMDYzIDUuNDAzNzVMMTMuOTEwMyA1LjA4MTI1TDEzLjM5MjggNy4xNTVDMTMuMDUyMyA3LjA2OTUgMTIuNzAyOCA2Ljk5IDEyLjM1NCA2LjkxMDVMMTIuODc1MyA0LjgyMzI1TDExLjU3OTMgNC41TDExLjA0ODMgNi42MjkyNUMxMC43NjYzIDYuNTY0NzUgMTAuNDg4OCA2LjUwMTc1IDEwLjIyMDMgNi40MzQyNUwxMC4yMjE4IDYuNDI3NUw4LjQzMzc1IDUuOTgxMjVMOC4wODg3NSA3LjM2NTc1QzguMDg4NzUgNy4zNjU3NSA5LjA1MSA3LjU4NjI1IDkuMDMwNzUgNy41OTk3NUM5LjU1NTc1IDcuNzMxIDkuNjUwMjUgOC4wNzgyNSA5LjYzNDUgOC4zNTQyNUw5LjAzIDEwLjc4MDVDOS4wNjYgMTAuNzg5NSA5LjExMjUgMTAuODAzIDkuMTY1IDEwLjgyMzJMOS4wMjc3NSAxMC43ODk1TDguMTgwMjUgMTQuMTg4NUM4LjExNTc1IDE0LjM0NzUgNy45NTMgMTQuNTg2NyA3LjU4NTUgMTQuNDk2QzcuNTk5IDE0LjUxNDcgNi42NDM1IDE0LjI2MTIgNi42NDM1IDE0LjI2MTJMNiAxNS43NDQ4TDcuNjg3NSAxNi4xNjU1QzguMDAxIDE2LjI0NDMgOC4zMDg1IDE2LjMyNjcgOC42MTA3NSAxNi40MDRMOC4wNzQ1IDE4LjU1OEw5LjM2OTc1IDE4Ljg4MDVMOS45MDA3NSAxNi43NTA1QzEwLjI1NDggMTYuODQ1NyAxMC41OTgzIDE2LjkzNDIgMTAuOTM0MyAxNy4wMTgyTDEwLjQwNDggMTkuMTM5MkwxMS43MDA4IDE5LjQ2MThMMTIuMjM3IDE3LjMxMjNDMTQuNDQ4IDE3LjczMDggMTYuMTEgMTcuNTYyIDE2LjgwOTggMTUuNTYyNUMxNy4zNzM4IDEzLjk1MyAxNi43ODIgMTMuMDIzOCAxNS42MTg4IDEyLjQxODVDMTYuNDY2MyAxMi4yMjM1IDE3LjEwMzggMTEuNjY2MyAxNy4yNzQgMTAuNTE1Wk0xNC4zMTE1IDE0LjY2ODVDMTMuOTExOCAxNi4yNzg4IDExLjIwMDUgMTUuNDA4IDEwLjMyMTUgMTUuMTg5OEwxMS4wMzQgMTIuMzM2QzExLjkxMyAxMi41NTU3IDE0LjczMDggMTIuOTkgMTQuMzExNSAxNC42Njg1Wk0xNC43MTI4IDEwLjQ5MThDMTQuMzQ3NSAxMS45NTY1IDEyLjA5MTUgMTEuMjExOCAxMS4zNjAzIDExLjAyOTVMMTIuMDA1MyA4LjQ0MkMxMi43MzY1IDguNjI0MjUgMTUuMDkzOCA4Ljk2NCAxNC43MTI4IDEwLjQ5MThaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1MF82MjY4Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                style={{ color: "transparent", marginRight: "8px" }}
              />
              Bitcoin
              <span className="MuiTouchRipple-root mui-style-w0pj6f" />
            </li>
            <li
              className="MuiButtonBase-root disabled MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters mui-style-j77aub"
              tabIndex={-1}
              role="menuitem"
            >
              <img
                alt="Ethereum"
                width={24}
                height={24}
                decoding="async"
                data-nimg={1}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1NF83MjA5KSI+CjxwYXRoIGQ9Ik0xMiAyNEMxOC42Mjc0IDI0IDI0IDE4LjYyNzQgMjQgMTJDMjQgNS4zNzI1OCAxOC42Mjc0IDAgMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRaIiBmaWxsPSIjNjI3RUVBIi8+CjxwYXRoIGQ9Ik0xMiAzVjkuNjUyNUwxNy42MjI4IDEyLjE2NUwxMiAzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPHBhdGggZD0iTTEyLjM3MzUgM0w2Ljc1IDEyLjE2NUwxMi4zNzM1IDkuNjUyNVYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEyIDE2Ljc2NFYyMS4yODQzTDE3LjYyNjUgMTMuNUwxMiAxNi43NjRaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMTIuMzczNSAyMS4yODQzVjE2Ljc2MzNMNi43NSAxMy41TDEyLjM3MzUgMjEuMjg0M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMiAxNS41MjU4TDE3LjYyMjggMTIuMjYxTDEyIDkuNzVWMTUuNTI1OFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNNi43NSAxMi4yNjFMMTIuMzczNSAxNS41MjU4VjkuNzVMNi43NSAxMi4yNjFaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1NF83MjA5Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                style={{
                  color: "transparent",
                  marginRight: "8px",
                  borderRadius: "50%",
                }}
              />
              Ethereum
              <span className="MuiTouchRipple-root mui-style-w0pj6f" />
            </li>
            <li
              className="MuiButtonBase-root disabled MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters mui-style-j77aub"
              tabIndex={-1}
              role="menuitem"
            >
              <img
                alt="BNB Smart Chain"
                width={24}
                height={24}
                decoding="async"
                data-nimg={1}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfODI4XzExNjYwKSI+CiAgICA8cGF0aAogICAgICBkPSJNMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBDNS4zNzI1OCAwIDAgNS4zNzI1OCAwIDEyQzAgMTguNjI3NCA1LjM3MjU4IDI0IDEyIDI0WiIKICAgICAgZmlsbD0iI0YzQkEyRiIgLz4KICAgIDxwYXRoCiAgICAgIGQ9Ik05LjA4NyAxMC44MDNMMTIgNy44OUwxNC45MTQ1IDEwLjgwNDVMMTYuNjA5NSA5LjEwOTVMMTIgNC41TDcuMzkyIDkuMTA4TDkuMDg3IDEwLjgwM1pNNC41IDEyTDYuMTk1IDEwLjMwNUw3Ljg5IDEyTDYuMTk1IDEzLjY5NUw0LjUgMTJaTTkuMDg3IDEzLjE5N0wxMiAxNi4xMUwxNC45MTQ1IDEzLjE5NTVMMTYuNjA5NSAxNC44ODk4TDEyIDE5LjVMNy4zOTIgMTQuODkyTDcuMzg5NzUgMTQuODg5OEw5LjA4NyAxMy4xOTdaTTE2LjExIDEyTDE3LjgwNSAxMC4zMDVMMTkuNSAxMkwxNy44MDUgMTMuNjk1TDE2LjExIDEyWk0xMy43MTkgMTEuOTk4NUgxMy43MjA1VjEyTDEyIDEzLjcyMDVMMTAuMjgxNyAxMi4wMDNMMTAuMjc4NyAxMkwxMC4yODE3IDExLjk5NzdMMTAuNTgyNSAxMS42OTYyTDEwLjcyODggMTEuNTVMMTIgMTAuMjc5NUwxMy43MTk3IDExLjk5OTJMMTMuNzE5IDExLjk5ODVaIgogICAgICBmaWxsPSJ3aGl0ZSIgLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzgyOF8xMTY2MCI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+"
                style={{
                  color: "transparent",
                  marginRight: "8px",
                  borderRadius: "50%",
                }}
              />
              BNB Chain
              <span className="MuiTouchRipple-root mui-style-w0pj6f" />
            </li>
            <li
              className="MuiButtonBase-root disabled MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters mui-style-j77aub"
              tabIndex={-1}
              role="menuitem"
            >
              <img
                alt="Solana"
                width={24}
                height={24}
                decoding="async"
                data-nimg={1}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fS5jbHMtMntjbGlwLXBhdGg6dXJsKCNjbGlwcGF0aCk7fS5jbHMtM3tmaWxsOm5vbmU7fS5jbHMtNHtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXBwYXRoIj48Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjI1MCIgY3k9IjI1MCIgcj0iMjQ0LjkxIi8+PC9jbGlwUGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9Ii0xMTYuMDkiIHkxPSIyNS45NyIgeDI9IjQzNy40NSIgeTI9IjM2NC43MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2EyMjljNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdiM2ZlNCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGNsYXNzPSJjbHMtMiI+PHJlY3QgY2xhc3M9ImNscy00IiB4PSItMTguMSIgeT0iLTE4LjEiIHdpZHRoPSI1MzYuMiIgaGVpZ2h0PSI1MzYuMiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zMjAuODMsMzAyLjg1bDY5LjI5LTQwLjAxYzMuNjctMi4xMiw1Ljk0LTYuMDYsNS45NC0xMC4zdi04MC4wMWMwLTQuMjMtMi4yOC04LjE4LTUuOTQtMTAuM2wtNjkuMjktNDAuMDFjLTMuNjctMi4xMi04LjIyLTIuMTEtMTEuODksMGwtNjkuMjksNDAuMDFjLTMuNjcsMi4xMi01Ljk0LDYuMDctNS45NCwxMC4zdjE0Mi45OWwtNDguNTksMjguMDUtNDguNTktMjguMDV2LTU2LjExbDQ4LjU5LTI4LjA1LDMyLjA1LDE4LjV2LTM3LjY0bC0yNi4xMS0xNS4wN2MtMS44LTEuMDQtMy44Ni0xLjU5LTUuOTUtMS41OXMtNC4xNS41NS01Ljk0LDEuNTlsLTY5LjI5LDQwLjAxYy0zLjY3LDIuMTItNS45NCw2LjA2LTUuOTQsMTAuM3Y4MC4wMWMwLDQuMjMsMi4yOCw4LjE4LDUuOTQsMTAuM2w2OS4yOSw0MC4wMWMzLjY2LDIuMTEsOC4yMiwyLjExLDExLjg5LDBsNjkuMjktNDBjMy42Ny0yLjEyLDUuOTQtNi4wNyw1Ljk0LTEwLjN2LTE0Mi45OWwuODgtLjUsNDcuNzEtMjcuNTUsNDguNTksMjguMDV2NTYuMTFsLTQ4LjU5LDI4LjA1LTMyLTE4LjQ4djM3LjY0bDI2LjA2LDE1LjA1YzMuNjcsMi4xMSw4LjIyLDIuMTEsMTEuODksMFoiLz48L3N2Zz4="
                style={{
                  color: "transparent",
                  marginRight: "8px",
                  borderRadius: "50%",
                }}
              />
              Polygon
              <span className="MuiTouchRipple-root mui-style-w0pj6f" />
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setDrop(false)}
        className={mblFull ? "side-bar mbl-open pt-10" : "side-bar pt-10"}
      >
        <NavLink to="/" className="p20">
          <img src={LogoIcon} className="logo-icon" alt="" />
        </NavLink>
        <div className="side-links">
          <NavLink to="/launchpad" className="individual-link">
            <div className="link-ico">
              <img src={LaunchpadIcon} height="25px" width="25px" />
            </div>
            <p className="link-title">Launchpad</p>
            <div className="absolute top-[-10px] right-0 abs-numer">
              <div className="relative w-4 h-4">
                <div className="w-full h-full custom-clr rounded-full absolute inset-0 animate-ping2" />
                <div className="w-full h-full custom-clr rounded-full absolute inset-0 inline-flex items-center justify-center text-gamefiDark-900 leading-none font-bold">
                  1
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <NavLink to="/staking" className="individual-link">
          <div className="link-ico">
            <img src={StakingIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Staking</p>
        </NavLink>
        <NavLink to="/swap" className="individual-link">
          <div className="link-ico">
            <img src={SwapIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Swap</p>
        </NavLink>
        <button
          onClick={progressToggle2}
          disabled={progressComing2 ? true : false}
          className="individual-link"
        >
          <div className="link-ico">
            <img src={FarmIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Earn</p>
        </button>

        <NavLink to="/bridge" className="individual-link">
          <div className="link-ico">
            <img src={BridgeIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Bridge</p>
        </NavLink>

        <NavLink to="/governance" className="individual-link">
          <div className="link-ico">
            <img src={GovernanceIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Governance</p>
        </NavLink>
        <a
          href="https://satopad-finance.gitbook.io/satopad-finance/"
          target="_blank"
          className="individual-link"
        >
          <div className="link-ico">
            <img src={DocsIcon} height="25px" width="25px" />
          </div>
          <p className="link-title">Docs</p>
        </a>
      </div>
      <div className="mobile-belowBar">
        <div className="flex-mbl">
          <NavLink to="/launchpad" className="mbl-individual mbl-active">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img src={LaunchpadIcon} height="25px" width="25px" />
            </div>
          </NavLink>
          <NavLink to="/staking" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img src={StakingIcon} height="25px" width="25px" />
            </div>
          </NavLink>
          <NavLink to="/swap" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img src={SwapIcon} height="25px" width="25px" />
            </div>
          </NavLink>

          <NavLink to="/governance" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img src={GovernanceIcon} height="25px" width="25px" />
            </div>
          </NavLink>
          <div onClick={toggleMbl} className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img
                src={
                  mblFull
                    ? "https://gamefi.org/_next/static/media/x.f956a27b.svg"
                    : "https://gamefi.org/_next/static/media/menuToggler.7ea29bb4.svg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <button className="nav-link btn-wallet">
        <i className="fas fa-wallet"></i> Connect
      </button> */}

      {/*  */}
      <div className="c-container">
        <div
          className={
            progressComing ? "popup-coming right-full" : "popup-coming  "
          }
        >
          <div className="toast-tba">
            <div onClick={() => setprogressComing(false)} className="cross-ico">
              <i className="fa-solid fa-x"></i>
            </div>
            <div className="toast-txt">
              <div className="toast-ico">
                <i
                  className="fa-solid fa-circle-info"
                  style={{ color: "white" }}
                ></i>
              </div>
              <div className="toast-written">Swap coming soon </div>
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div
          className={
            progressComing2 ? "popup-coming right-full2 " : "popup-coming  "
          }
        >
          <div className="toast-tba">
            <div
              onClick={() => setprogressComing2(false)}
              className="cross-ico"
            >
              <i className="fa-solid fa-x"></i>
            </div>
            <div className="toast-txt">
              <div className="toast-ico">
                <i
                  className="fa-solid fa-circle-info"
                  style={{ color: "white" }}
                ></i>
              </div>
              <div className="toast-written">Farm under maintenance!</div>
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/*  */}
      {/* Modal */}
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

      {/* Modal */}
    </div>
  );
};

export default Header;
