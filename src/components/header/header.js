import React, { useState } from "react";
import Drop from "../drops/Drop";
import logo from "./coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd (1).webp";
import Autosuggest from "react-autosuggest";
const Header = (props) => {
  const { dataList} = props;
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    return inputLength === 0
      ? []
      : dataList.filter((lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue)
  }
  const getSuggestionValue = (suggestion) => suggestion.name;
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;
  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }
  const inputProps = {
    placeholder: "Name conins",
    value,
    onChange: onChange,
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }
  return (
    <div>
      <div style ={{paddingBottom:'20px'}} className="header">
        <div className="header__top">
          <ul style={{display:'flex', alignItems:'center'}}>
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
            <li>
              <a href="s">
                Help{" "}
                <img src="https://static.coingecko.com/s/candy_notification-13bfd4ea8bd89d20951b5bd2045b30c9ebb912ac6ec73c020234ab37de7be52f.svg"></img>
              </a>
            </li>
            <li>
              <a href="s">Sign</a>
            </li>
            <li>
              <a href="s">Sign Up</a>
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
            <img src={logo} />
          </div>
          <ul style={{display:'flex', alignItems:'center'}}>
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
          <h1>Top 100 Coins by Market Capitalization</h1>
          <div className="row">
            <div className="row__right">
              <div className="drop"></div>
              <ul style={{display:'flex', alignItems:'center'}}>
                <Drop />
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
              </ul>
            </div>
            <div className="row__left">
              <ul style={{display:'flex', alignItems:'center'}}>
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
