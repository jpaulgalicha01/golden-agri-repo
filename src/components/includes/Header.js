import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/imges";
export default function Header({ scrolled, title }) {
  return (
    <>
      <header className={`py-1 sticky ${scrolled ? "scrolled" : ""}`}>
        <div
          className="d-lg-none d-block d-flex justify-content-between"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <Link
            to={"/"}
            className="d-inline-flex link-body-emphasis text-decoration-none d-flex gap-2 align-items-center"
          >
            <img src={img.headerLogo} alt="logo" width={60} height={60} />
            <p className="text-title-primary mb-0 fs-3 text-primary1">
              Golden Agri
            </p>
          </Link>
          <button
            className=" d-lg-none btn btn-outline-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <i className="fa-solid fa-bars "></i>
          </button>
        </div>
        <div
          className="offcanvas-lg offcanvas-top h-100"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header ">
            <button
              type="button"
              className="btn btn-outline-primary btn-primary"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
            >
              <i className="fa-regular fa-circle-xmark text-white"></i>
            </button>
          </div>
          <div className="offcanvas-body d-lg-flex justify-content-lg-between">
            <div className="text-start d-lg-block d-none">
              <Link
                to={"/"}
                className="d-inline-flex link-body-emphasis text-decoration-none d-flex gap-2 align-items-center"
              >
                <img src={img.headerLogo} alt="logo" width={60} height={60} />
                <p className="text-title-primary mb-0 fs-3 text-primary1">
                  Golden Agri
                </p>
              </Link>
            </div>

            <div className=" align-content-center text-start">
              <ul className="d-lg-flex d-grid align-items-center nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 gap-3 ">
                <li>
                  <Link
                    to={"/"}
                    className={`px-2 header-link ${
                      title === "Home" ? "text-primary1" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/company-overview"}
                    className={`px-2 header-link ${
                      title === "Company Overview" ? "text-primary1" : ""
                    }`}
                  >
                    Company Overview
                  </Link>
                </li>
                {/* <li className="dropdown">
                  <Link
                    to={"/services"}
                    className={`px-2 header-link ${
                      title === "Services" ? "text-primary1" : ""
                    }`}
                  >
                    Services
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={"/contact-us"}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      fontFamily: "'Bebas Neue', 'sans-serif'",
                      fontSize: "larger",
                    }}
                  >
                    <i className="fa-solid fa-headset me-1"></i> Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to={"/esl"}
                    className={`px-2 header-link ${
                      title === "ESL" ? "text-primary1" : ""
                    }`}
                  >
                    ESL
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to={"/team"}
                    className={`px-2 header-link ${
                      title === "Team" ? "text-primary1" : ""
                    }`}
                  >
                    Team
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
