import React from "react";
import Header from "../includes/Header";
import img from "../../images/imges";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
import { Link } from "react-router-dom";
export default function Home({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid">
        <div className="row home-banner pb-4 mb-0">
          <Header scrolled={scrolled} title={title} />
          <div
            style={{ minHeight: "550px" }}
            className="d-lg-flex d-grid align-items-center pt-lg-0 pt-5 gap-2"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="custom-width-75">
              <h1
                className="text-title-primary text-lg-start text-center  mb-0 text-white"
                style={{
                  fontSize: "calc(2.0vw + 2.0vh + 1.5vmin)",
                }}
              >
                Golden Agri Tractors and Parts
              </h1>
              <p className="fst-italic text-white">
                Reliable Supplier and Distributor of Tires, Batteries, Tractor
                Parts, and Technical Services
              </p>
              <div className="d-lg-flex d-grid gap-2">
                {/* <button className="btn btn-primary">
                  <i className="fa-solid fa-boxes-packing me-2"></i>Explore Our
                  Products
                </button> */}
                <Link to={"/contact-us"} className="btn btn-primary">
                  <i className="fa-solid fa-phone me-2"></i>Contact Our Team
                </Link>
              </div>
            </div>
            <div className="mx-auto">
              <img
                src={img.logo2}
                alt=""
                className=" custom-img rotating-image"
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "-80px" }}>
          <div className="py-5">
            <div className="d-flex justify-content-center">
              <div className="col-lg-12 col-10 ">
                <div className="row d-flex gap-1 justify-content-center ">
                  <div
                    className="col-lg-3 col-12 text-center p-2 "
                    style={{
                      borderRadius: "20px",
                      top: "1px",
                      backgroundColor: "#416422",
                    }}
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services1}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Quality Tires
                    </p>
                  </div>
                  <div
                    className="col-lg-3 col-12 text-center p-2 "
                    style={{
                      borderRadius: "20px",
                      top: "1px",
                      backgroundColor: "#416422",
                    }}
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services2}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Batteries
                    </p>
                  </div>
                  <div
                    className="col-lg-3 col-12 text-center p-2 "
                    style={{
                      borderRadius: "20px",
                      top: "1px",
                      backgroundColor: "#416422",
                    }}
                    data-aos="fade-up"
                  >
                    <img
                      loading="lazy"
                      className="p-2  "
                      src={img.services3}
                      alt="services1"
                      width={150}
                      height={150}
                    />
                    <p className="text-subtitle-secondary pt-2 text-white fs-5">
                      Tractor Parts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4 d-flex justify-content-center align-items-center">
          <h1
            className="text-title-primary text-primary pb-2 text-center"
            style={{
              fontSize: "calc(2vw + 1.5vh + 2vmin)",
              textAlign: "justify",
            }}
          >
            About Us
          </h1>
          <p
            className="text-paragraph-secondary"
            style={{ textAlign: "justify" }}
          >
            Since our founding, Golden Agri Tractors and Parts has been
            committed to supplying top-quality products and exceptional
            technical support. Our mission is to empower individuals and
            businesses with reliable solutions for their vehicles and machinery,
            helping them perform at their best. With a strong focus on customer
            satisfaction and product quality, we’re proud to serve our community
            and beyond
          </p>
          <div
            className="col-lg-6 col-11 d-flex justify-content-center mt-lg-5 mt-3 card "
            style={{ borderRadius: "20px" }}
            data-aos="fade-up"
          >
            <div className="card-body">
              <p className="fs-5 text-title-secondary text-center text-primary1">
                Why Choose Us
              </p>

              <ul className=" text-start">
                <li className="text-paragraph-secondary">
                  <b>Premium Quality Products:</b> We source only from trusted
                  manufacturers to ensure reliability and durability.
                </li>
                <li className="text-paragraph-secondary">
                  <b>Expert Team:</b> We source only from trusted manufacturers
                  to ensure reliability and durability.
                </li>
                <li className="text-paragraph-secondary">
                  <b>Comprehensive Service: </b> From installation to
                  maintenance, we’re dedicated to supporting you beyond the
                  sale.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="row py-5 mb-0 row-gap-lg-5 row-gap-2 mt-5"
          style={{ backgroundColor: "#f4f3d0", minHeight: "100vh" }}
        >
          <div className="col-lg-6 col-12 p-0" data-aos="fade-up">
            <img
              src={img.tigulang}
              alt="tigulang"
              loading="lazy"
              className="img-fluid"
              data-aos="zoom-out"
              style={{ marginTop: "-90px" }}
            />
          </div>
          <div className="col-lg-6 col-12 p-0">
            <div className="d-lg-flex d-grid gap-5 align-items-center">
              <div>
                <h1
                  className="text-title-primary text-primary pb-2 text-center"
                  style={{
                    fontSize: "calc(2vw + 1.5vh + 2vmin)",
                    textAlign: "justify",
                  }}
                >
                  Our Values
                </h1>

                <ul>
                  <li className="text-paragraph-secondary ">
                    <b>Customer Satisfaction: </b>
                    We believe in going the extra mile for our clients.
                  </li>
                  <li className="text-paragraph-secondary ">
                    <b>Integrity: </b>
                    We uphold transparency and honesty in all interactions.
                  </li>
                  <li className="text-paragraph-secondary ">
                    <b>Innovation: </b>
                    We stay updated with the latest products and services to
                    offer you the best solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
