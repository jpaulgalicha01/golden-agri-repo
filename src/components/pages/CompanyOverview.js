import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
export default function CompanyOverview({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg">
          <Header scrolled={scrolled} title={title} />
          <div className="d-flex justify-content-center ">
            <div className="col-md-10 col-11 py-5">
              <h1
                className="text-title-primary pb-lg-5 pb-2"
                style={{
                  fontSize: "calc(2vw + 1.5vh + 2vmin)",
                  textAlign: "justify",
                  color: "#d9d40c",
                }}
                data-aos="fade-up"
              >
                Company overview
              </h1>
              <br />

              <p
                className="fs-5 text-title-secondary text-start"
                style={{ color: "#d9d40c" }}
                data-aos="fade-up"
              >
                COMPANY MISSION
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                Our mission is to empower local farmers and agricultural
                communities in Negros Occidental by providing high-quality
                tractors, farm implements, parts, and machinery.
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                We aim to be the trusted partner of farmers in their journey
                towards increased productivity and sustainable farming
                practices.
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                Our commitment extends beyond just selling products; we strive
                to offer excellent technical services and repairs, ensuring that
                our customers' agricultural machinery operates at its peak
                efficiency.
              </p>
              <br />
              <p
                className="text-decoration-none fs-5 text-title-secondary text-start"
                style={{ color: "#d9d40c" }}
                data-aos="fade-up"
              >
                COMPANY VISION
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                Our vision at Golden Agri Ventures is to foster a thriving and
                resilient agricultural community in Western Visayas.
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                We aspire to be the leading provider of agricultural solutions,
                setting the standard for quality, reliability, and innovation in
                the industry.
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                By continuously improving our offerings and adapting to evolving
                needs, we aim to become the go-to choice for farmers seeking
                dependable tractors, farm implements and products, and technical
                support.
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                We envision a future where farmers can confidently rely on our
                products and services to maximize their yields, promote
                sustainability, and elevate their livelihoods.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
