import React, { useState } from "react";
import "./App.css";
import { userData } from "./data/userData";
import UserCards from "./components/UserCards";

const App = () => {
  const [data, setData] = useState(userData);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg   py-3"
        style={{ backgroundColor: "#00D6F4" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-600 " href="/">
            Data Filter X
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-bold">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <section>
        <div className="container mt-4">
          <h1 className="text-center"> Users Data</h1>
          <div className="container">
            <UserCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
