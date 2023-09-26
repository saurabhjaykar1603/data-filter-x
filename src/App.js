import React, { useEffect, useState } from "react";
import "./App.css";
import { userData } from "./data/userData";
import UserCards from "./components/UserCards";

const App = () => {
  const [data, setData] = useState(userData);
  

  // filter
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
   const filteredData = userData.filter((data)=>{

    const name = data.name.toLowerCase();
    const id = data.id.toLowerCase();

    const query = searchTerm.toLowerCase();

    return name.includes(query) || id.includes(query);

    
    
    
  })
  setData(filteredData);
  }, [searchTerm]);



  return (
    <>
      <nav
        className="navbar navbar-expand-lg   py-3 sticky-top shadow"
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
            <form className="container w-50" role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search User Here"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>

      <section>
        <div className="container mt-3">
          <h1 className="text-center"> Users Data</h1>
          <div className="c{ontainer mt-3">
            {data.map((user, i) => {
              const { name, avatar, id } = user;
              return <UserCards key={i} name={name} avatar={avatar} id={id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
