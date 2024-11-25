import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
import img from "../../images/imges";
export default function Contact({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid">
        <div className="row home-banner pb-4 mb-0">
          <Header scrolled={scrolled} title={title} />
          <div
            style={{ minHeight: "150px" }}
            className=" d-grid align-items-center pt-lg-0 pt-5 gap-2"
          >
            <div>
              <p
                className="text-title-primary  text-center  mb-0 text-white"
                style={{
                  fontSize: "calc(1.5vw + 1.5vh + .5vmin)",
                }}
              >
                Contact
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="row d-flex justify-content-center pt-5 mt-3 pb-5 p-0  m-0">
            <div className="col-lg-4 col-12">
              <div
                className="card card-body p-lg-5 p-3"
                style={{ borderRadius: "20px" }}
              >
                <h1
                  className="text-title-primary text-primary pb-lg-5 pb-2"
                  style={{
                    fontSize: "calc(1.5vw + 1.5vh + 1vmin)",
                    textAlign: "justify",
                  }}
                  data-aos="fade-up"
                >
                  Get in touch
                </h1>
                <div className="d-lg-flex d-grid  justify-content-lg-between gap-4">
                  <div>
                    <div
                      className="d-flex align-items-center gap-2 pb-4"
                      data-aos="fade-up"
                    >
                      <img
                        src={img.location}
                        alt="location"
                        height={50}
                        width={50}
                      />
                      <p
                        className="text-paragraph-secondary text-black mb-0"
                        style={{ textAlign: "justify" }}
                      >
                        front of RCBC Bank, Guanzon St, Kabankalan, 6111 Negros
                        Occidental
                      </p>
                    </div>
                    <div
                      className="d-flex align-items-center gap-2 pb-4"
                      data-aos="fade-up"
                    >
                      <img
                        src={img.phoneCall}
                        alt="location"
                        height={50}
                        width={50}
                      />
                      <p
                        className="text-paragraph-secondary text-black mb-0"
                        style={{ textAlign: "justify" }}
                      >
                        09777110235
                      </p>
                    </div>
                    <div
                      className="d-flex align-items-center gap-2"
                      data-aos="fade-up"
                    >
                      <img
                        src={img.mail}
                        alt="location"
                        height={50}
                        width={50}
                      />
                      <p
                        className="text-paragraph-secondary text-black mb-0"
                        style={{ textAlign: "justify" }}
                      >
                        goldenagrimachinery@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  background: "#f0f0f0",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2211665033888!2d122.81329097503112!3d9.998581490106748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac11b7af2b9c35%3A0x4c8db39f577a9bc9!2sGolden%20Agri-Ventures!5e0!3m2!1sen!2sph!4v1730089525564!5m2!1sen!2sph"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
