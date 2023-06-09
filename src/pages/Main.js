import React, { useLayoutEffect } from "react";
import PageWrapper from "../hoc/PageWrapper";
// import FilterButtons from "../components/main/FilterButtons";
// import Table from "../components/main/Table";

import "./Main.scss";
import { useSelector } from "react-redux";
import {
  selectBtcDominance,
  selectCoins,
  selectEthDominance,
  selectMarketCap,
  selectMarketCapPercentage,
  selectVol24h,
} from "../redux/reducers/globals";
import { formatDollar } from "../helpers/currency";
import FilterButtons from "../components/main/FilterButtons";
import Table from "../components/main/Table";

export default function Main() {
  const marketCapPercentage = useSelector(selectMarketCapPercentage);
  const marketCap = useSelector(selectMarketCap);
  const vol24h = useSelector(selectVol24h);
  const btcDominance = useSelector(selectBtcDominance);
  const ethDominance = useSelector(selectEthDominance);
  const coins = useSelector(selectCoins);
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
  useLayoutEffect(() => {
    document.title =
      "CoinGecko Clone: Cryptocurrency Prices and Market Capitalization";
  }, []);

  const theme = useSelector((state) => state.theme.value);

  return (
    <PageWrapper>
      <div id="main">
        <div className={`mx-5  pt-5 pb-3 title ${theme ? "text-white" : ""}`}>
          <p className="font-weight-bold mb-0">
            Cryptocurrency Prices by Market Cap
          </p>
          <p className="small" style={{ fontSize: "14px" }}>
            The global cryptocurrency market cap today is $
            {(marketCap / 1e12).toFixed(2)} Trillion,{" "}
            <span className={marketCapPercentageColorClass + "ml-1"}>
              {marketCapPercentage}%
              <i className={marketCapPercentageClasses}></i>
            </span>{" "}
            a change in the last 24 hours.{" "}
            <span
              data-toggle="collapse"
              data-target="#toggler"
              aria-controls="toggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="text-decoration-underline"
              style={{ cursor: "pointer" }}
            >
              <u>Read more</u>
            </span>
            <div className="collapse w-50 mt-3" id="toggler">
              Total cryptocurrency trading volume in the last day is at{" "}
              <span className="text-info">${(vol24h / 1e9).toFixed(2)} </span>
              Billion. Bitcoin dominance is at <span>{btcDominance}</span>% and
              Ethereum dominance is at <span>{ethDominance}</span>%. Andtecx is
              now tracking <span>{coins}</span> cryptocurrencies. The largest
              gainers in the industry right now are Polkadot Ecosystem and
              Algorand Ecosystem cryptocurrencies.
            </div>
          </p>
        </div>
        <div className="w-100 px-5">
          <FilterButtons theme={theme} />
          <Table theme={theme} />
        </div>
      </div>
    </PageWrapper>
  );
}
