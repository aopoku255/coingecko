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
import { Modal } from "bootstrap";

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
              gainers in the industry right now are{" "}
              <span className="text-info">Polkadot Ecosystem</span> and{" "}
              <span className="span text-info">Algorand Ecosystem</span>{" "}
              cryptocurrencies.
            </div>
          </p>
          <div className="show-stats my-4">
            <div className="row">
              <div className="col">
                <div
                  className="card border-0 shadow-sm d-flex justify-content-center align-items-start p-3 show-start-card"
                  style={{ height: "5rem" }}
                >
                  <div className="bar red-bar"></div>
                  <div className="d-flex align-items-center mt-3">
                    <span className="text-info" style={{ fontSize: "15px" }}>
                      {isNaN(marketCap) ? marketCap : formatDollar(marketCap)}
                    </span>
                    <span
                      className={marketCapPercentageColorClass + "ml-1"}
                      style={{ fontSize: "12px" }}
                    >
                      {marketCapPercentage}%
                      <i className={marketCapPercentageClasses}></i>
                    </span>
                  </div>
                  <p className="small" style={{ fontSize: "14px" }}>
                    Market Capitalization
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="card border-0 shadow-sm d-flex justify-content-center align-items-start p-3 show-start-card"
                  style={{ height: "5rem" }}
                >
                  <div className="bar blue-bar"></div>
                  <div className="d-flex align-items-center mt-3">
                    <span className="text-info" style={{ fontSize: "15px" }}>
                      {isNaN(vol24h) ? vol24h : formatDollar(vol24h)}
                    </span>
                  </div>
                  <p className="small" style={{ fontSize: "14px" }}>
                    24h Trading Volume
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="card border-0 shadow-sm d-flex justify-content-center align-items-start p-3 show-start-card"
                  style={{ height: "5rem" }}
                >
                  <div className="bar deep-bar"></div>
                  <div className="d-flex align-items-center mt-3">
                    <span className="text-info" style={{ fontSize: "15px" }}>
                      {btcDominance}%
                    </span>
                  </div>
                  <p className="small" style={{ fontSize: "14px" }}>
                    Bitcoin Market Cap Dominance
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="card border-0 shadow-sm d-flex justify-content-center align-items-start p-3 show-start-card"
                  style={{ height: "5rem" }}
                >
                  <div className="bar light-bar"></div>
                  <div className="d-flex align-items-center mt-3">
                    <span className="text-info" style={{ fontSize: "15px" }}>
                      {coins?.toLocaleString()}
                    </span>
                  </div>
                  <p className="small" style={{ fontSize: "14px" }}>
                    Number of Coins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 px-5">
          <FilterButtons theme={theme} />
          <Table theme={theme} />
        </div>
        <div className="w-100 px-5">
          <div>
            <h4 className="font-weight-bold">What is Crypto Market Cap? </h4>
            <p className="small text-secondary">
              Crypto market cap is the total value of all the coins of a
              particular cryptocurrency that have been mined or are in
              circulation. Market capitalization is used to determine the
              ranking of cryptocurrencies. The higher the market cap of a
              particular crypto coin, the higher its ranking and share of the
              market. Crypto market cap is calculated by multiplying the total
              number of coins in circulation by its current price. For instance,
              to calculate the market cap of Ethereum, all you need to do is
              multiply the total number of Ethereum in circulation by the
              current price of one Ethereum and you will get its market cap.
            </p>
          </div>
          <div className="mb-5">
            <h6 className="font-weight-bold">
              How to compare Cryptocurrencies Market Cap?
            </h6>
            <p className="text-secondary small">
              Crypto market cap can be divided into three categories:
            </p>
            <ul className="text-secondary small">
              <li>Large-cap cryptocurrencies (>$10 billion)</li>
              <li>Mid-cap Cryptocurrencies ($1 billion - $10 billion)</li>
              <li>Small-cap cryptocurrencies $1 billion</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
