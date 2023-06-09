import React from "react";
import PageWrapper from "../hoc/PageWrapper";
import { useSelector } from "react-redux";
import Nfttable from "../components/main/Nfttable";

const Nft = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <PageWrapper>
      <div id="main">
        <div className="px-5">
          <div className={`  pt-5 pb-3 title ${theme ? "text-white" : ""}`}>
            <p className="font-weight-bold mb-0">
              Top NFT Collection Prices Ranked by 24H Trading Volume
            </p>
            <p className="small w-50" style={{ fontSize: "14px" }}>
              Explore all the top NFT collections by price floor, market cap,
              and total volume. We aggregate NFT from various blockchains such
              as Etheruem, Polygon, Optimism, Arbitrum, Klaytn, and more.
            </p>
          </div>
          <Nfttable />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Nft;
