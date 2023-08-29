import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/icons/logo.svg";

import "./Navbar.scss";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const theme = useSelector((state) => state.theme.value);
  const search = useSelector((state) => state.search.data);

  const [collapseVisible, setCollapseVisible] = useState(false);

  const toggleCollapse = () => {
    setCollapseVisible(!collapseVisible);
  };
  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg border-bottom py-3 px-5 + ${
          props.theme ? "navbar-dark" : "navbar-light"
        }
          `}
      >
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="40"
            className="d-inline-block align-top"
            alt="logo"
            style={{ mixBlendMode: "darken" }}
          />
          <b>ANDTECX</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link active">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="https://andtecx-nft.vercel.app/" className="nav-link">
                NFT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
