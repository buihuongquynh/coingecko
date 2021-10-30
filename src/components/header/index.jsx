import React, { useState } from "react";
import Drop from "../drops/Drop";
import "./style.css";
const Header = (props) => {
  const { dataList } = props;
  return (
    <div>
      <div style={{ paddingBottom: "20px" }} className="header">
        <div className="header__top">
          <ul style={{ display: "flex", alignItems: "center" }}>
            <li>
              <a href="s">
                EN <i className="fas fa-caret-down"></i>
              </a>
            </li>
            <li>
              <a href="s">
                BCH <i className="fas fa-caret-down"></i>{" "}
              </a>
            </li>
            <li className="flex flex-row">
              <a href="">Help</a>
              <img src="https://static.coingecko.com/s/candy_notification-13bfd4ea8bd89d20951b5bd2045b30c9ebb912ac6ec73c020234ab37de7be52f.svg"></img>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">LogOut</a>
            </li>
            <li>
              <a href="s">
                <i className="fas fa-bookmark text-black" />
              </a>
            </li>
            <li>
              <a href="s">
                <i className="fas text-2xs fa-moon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header__menu">
          <div className="logo">
            <img src="https://static.coingecko.com/s/cg_haloween_light_mode-4b3a48e27e17965af9ad3795f8f91918e9bc4ab85d87f6a0b7d96fa6d5e0cac7.png" />
          </div>
          <ul style={{ display: "flex", alignItems: "center" }}>
            <li>
              <a href="d">Home</a>
            </li>
            <li>
              <a href="d">Markets</a>
            </li>
            <li>
              <a href="d">DeFi</a>
            </li>
            <li>
              <a href="d">
                Farms <span> 🧑‍🌾</span>
              </a>
            </li>
            <li>
              <a href="d">Exchanges</a>
            </li>
            <li>
              <a href="d">News</a>
            </li>
            <li>
              <a href="d">Tools</a>
            </li>
            <li>
              <a href="d">Resources</a>
            </li>
            <li>
              <a href="d">Learn</a>
            </li>
            <li>
              <a href="d">Community</a>
            </li>
          </ul>
        </div>
        <div className="header__drop">
          <h1 className="text-4xl	text-red-700">
            Top 100 Coins by Market Capitalization
          </h1>
          <div className="row">
            <div className="row__right">
              <div className="drop"></div>
              <ul
                style={{
                  display: "flex",
                  marginLeft: "20px",
                  alignItems: "center",
                }}
              >
                <Drop />
                <input className="ml-3" placeholder="Name coins" />
              </ul>
            </div>
            <div className="row__left">
              <ul style={{ display: "flex", alignItems: "center" }}>
                <li>
                  <a href="d"> Market</a>
                </li>
                <li>
                  <a href="d"> All-Time High</a>
                </li>
                <li>
                  <a href="d"> Developer</a>
                </li>
                <li>
                  <a href="d">Social</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
