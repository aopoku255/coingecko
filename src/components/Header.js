import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDollar } from "../helpers/currency";

import {
  selectCoins,
  selectExchanges,
  selectMarketCap,
  selectMarketCapPercentage,
  selectVol24h,
  selectBtcDominance,
  selectEthDominance,
  selectEthGas,
} from "../redux/reducers/globals";

import "./Header.scss";

import { currentTheme } from "../redux/reducers/theme";
export default function Header() {
  const coins = useSelector(selectCoins);
  const exchanges = useSelector(selectExchanges);
  const marketCap = useSelector(selectMarketCap);
  const marketCapPercentage = useSelector(selectMarketCapPercentage);
  const vol24h = useSelector(selectVol24h);
  const btcDominance = useSelector(selectBtcDominance);
  const ethDominance = useSelector(selectEthDominance);
  const ethGas = useSelector(selectEthGas);
  const [islight, setIsLight] = useState(false);

  let marketCapPercentageColorClass = "";
  let marketCapPercentageClasses = "";
  if (marketCapPercentage > 0) {
    marketCapPercentageColorClass = "text-success ";
    marketCapPercentageClasses = "fas fa-level-up-alt";
  }
  if (marketCapPercentage < 0) {
    marketCapPercentageColorClass = "text-danger ";
    marketCapPercentageClasses = "fas fa-level-down-alt";
  }

  const theme = useSelector((state) => state?.theme?.value);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between border-bottom py-3 px-5">
      <div id="header" className="">
        <span className="d-inline-block mr-3">
          <b>Coins: </b>
          <span className="text-info">{coins}</span>
        </span>
        <span className="d-inline-block mr-3">
          <b>Exchanges: </b>
          <span className="text-info">{exchanges}</span>
        </span>
        <span className="d-inline-block mr-3">
          <b>Market Cap: </b>
          <span className="text-info">
            {isNaN(marketCap) ? marketCap : formatDollar(marketCap)}
          </span>
          <span className={marketCapPercentageColorClass + "ml-1"}>
            {marketCapPercentage}%<i className={marketCapPercentageClasses}></i>
          </span>
        </span>
        <span className="d-inline-block mr-3">
          <b>24h Vol: </b>
          <span className="text-info">
            {isNaN(vol24h) ? vol24h : formatDollar(vol24h)}
          </span>
        </span>
        <span className="d-inline-block mr-3">
          <b>Dominance: </b>
          <span>
            BTC {btcDominance}% ETH {ethDominance}%
          </span>
        </span>
        <span className="d-inline-block mr-3">
          <b className="mr-1">
            <i className="fas fa-gas-pump d-inline-block mr-1" />
            ETH Gas:
          </b>
          <span>{ethGas} gwei</span>
        </span>
      </div>
      <div className="small">
        <span className="mr-3">
          EN <i className="fas fa-solid fa-caret-down"></i>
        </span>
        <span className="mr-3">
          USD <i className="fas fa-solid fa-caret-down"></i>
        </span>

        <span onClick={() => dispatch(currentTheme())}>
          {theme ? (
            <i className="fas fa-sharp fa-solid fa-sun"></i>
          ) : (
            <i className="fas fa-sharp fa-solid fa-moon"></i>
          )}
        </span>
      </div>
    </div>
  );
}
