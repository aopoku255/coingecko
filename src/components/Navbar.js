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
              <NavLink to="/nft" className="nav-link">
                NFT
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                DeFi
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Markets
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Exchanges
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="mr-3 fw-bold">Login</span>
          <span
            className={`btn btn-sm mr-3 ${theme ? "btn-light" : "btn-dark"}`}
          >
            sign up
          </span>
          <span className="position-relative ">
            <span
              className="btn btn-light btn-sm py-2 pr-5"
              data-toggle="collapse"
              data-target="#collapse"
              aria-controls="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ cursor: "pointer" }}
              onClick={toggleCollapse}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-search mr-2"
                viewBox="0 0 16 16"
                // className=""
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              search
            </span>

            {collapseVisible && (
              <div
                id="collapse"
                className="collapse card border-0 shadow position-absolute"
                style={{ width: "20rem", right: "0rem", top: "-1rem" }}
              >
                <div className="d-flex align-items-center p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search mr-2 text-secondary"
                    viewBox="0 0 16 16"
                    // className="mr-2 text-secondary"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input
                    type="text"
                    className="form-control border-0 small search"
                    placeholder="search token name or exchange"
                    style={{ fontSize: "14px" }}
                  />
                  <i className="fas fa-times" onClick={toggleCollapse}></i>
                </div>

                <p className="text-secondary small mt-3 mb-0 px-3">
                  Trending search 🔥
                </p>
                <hr className="mt-0 mb-0 " />
                <div className="list-group list-group-flush mt-0">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  >
                    Cras justo odio
                    <span>#1</span>
                  </a>
                </div>
              </div>
            )}
          </span>
        </div>
      </nav>
    </>
  );
}
