import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#2C3639" }}
      >
        <div className="container">
          <Link to={"/"}>
            <img src="OsmanOzLogo.png" alt="" style={{ width: "100px" }} />
          </Link>

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
            <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  AnaSayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link text-white" href="#">
                  Öğrenci Listesi
                </Link>
              </li>
            </ul>
            <div className="button">
              <Link
                to="/login"
                className="btn btn-sm btn-light fw-bold"
                style={{ backgroundColor: "#A27B5C" }}
              >
                Öğrenci & Veli
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
