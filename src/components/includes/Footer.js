import React from "react";

export default function Footer() {
  return (
    <>
      <div className="row  px-3 pt-1" style={{ backgroundColor: "#162308" }}>
        {/* <div className="col-12 pt-2 pb-4">
          <img
            src={img.footerLogo}
            alt="logo2"
            className="img-fluid"
            style={{ width: "361px", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 col-12 py-md-0 pb-5">
          <div className="d-grid">
            <p className="text-white text-subtitle-secondary m-0">
              We’re located at:
            </p>
            <p className="text-white text-paragraph-secondary fw-lighter">
              Goldrake Building, Kabankalan - Bais Road, Kabankalan, Philippines
            </p>
            <br />
            <p className="text-white text-subtitle-secondary">Social Media:</p>
            <div className="d-md-grid d-flex gap-3">
              <Link
                className="d-flex gap-2 text-decoration-none py-2"
                to={
                  "https://mail.google.com/mail/?view=cm&fs=1&to=goldendigitechph@gmail.com"
                }
                target="_blank"
              >
                <img src={img.gmail} alt="gmail icon" width={50} />
                <p className="align-content-center nav-link d-md-block d-none">
                  goldendigitechph@gmail.com
                </p>
              </Link>
              <Link
                className="d-flex gap-2 text-decoration-none py-2"
                to={"https://www.facebook.com/digitalmarketingplustraining"}
                target="_blank"
              >
                <img src={img.facebook} alt="gmail icon" width={50} />
                <p className="align-content-center nav-link d-md-block d-none">
                  Golden Digitech
                </p>
              </Link>
            </div>
            <p className="text-white text-subtitle-secondary py-3 m-0">
              Or contact:
            </p>
            <div className="d-flex align-items-center gap-2">
              <img src={img.mobile} alt="gmail icon" width={50} />
              <p className="nav-link">0955 776 9445</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="d-flex justify-content-between">
            <div className="d-grid gap-3 mx-auto">
              <Link
                to={"/"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Home
              </Link>
              <Link
                to={"/company-overview"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Company Overview
              </Link>
              <Link
                to={"/services"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Services
              </Link>
              <Link
                to={"/team"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Team
              </Link>
              <Link
                to={"#"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Privacy
              </Link>
              <Link
                to={"#"}
                className="text-decoration-none text-title-secondary text-white"
              >
                Terms & Condition
              </Link>
            </div>
            <div className="ps-lg-5 ps-0">
              <p
                className="text-title-secondary text-center fs-4"
                style={{ color: "#dbb000" }}
              >
                Scan Me
              </p>
              <img
                src={img.qrCodde}
                className="img-fluid"
                alt="barcode"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div> */}

        <p
          className="text-center pt-2 text-white text-paragraph-secondary fw-lighter"
          style={{ fontSize: ".8rem" }}
        >
          Copyright ©{new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </>
  );
}
