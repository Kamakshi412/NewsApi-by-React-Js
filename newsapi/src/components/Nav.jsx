import React, { useState } from "react";

const Nav = ({ setcatagory }) => {
  // const url =
  //   "https://newsapi.org/v2/top-headlines/sources?apiKey=057b759e0bd944939150156a20316142";

  // async function apifetch() {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // }
  // apifetch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand nav" href="#">
            NewsAPI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("business")}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("entertainment")}
                  className="nav-link"
                  href="#"
                >
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("general")}
                  className="nav-link"
                  href="#"
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("health")}
                  className="nav-link"
                  href="#"
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("science")}
                  className="nav-link"
                  href="#"
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("sports")}
                  className="nav-link"
                  href="#"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setcatagory("technology")}
                  className="nav-link"
                  href="#"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 className="d1">
        Latest <span className="d2">News</span>
      </h1>
    </div>
  );
};

export default Nav;
