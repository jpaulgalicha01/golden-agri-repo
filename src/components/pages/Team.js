import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
import img from "../../images/imges";
export default function Team({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg">
          <Header scrolled={scrolled} title={title} />
          <div
            className="d-flex justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-lg-10 col-11 py-5">
              <div className="row text-start">
                <div className="col-lg-5 col-12">
                  <h1
                    className="text-title-secondary text-primary text-lg-start text-center pb-lg-3 pb-2"
                    style={{
                      fontSize: "calc(1.5vw + 1.0vh + .9vmin)",
                    }}
                    data-aos="fade-up"
                  >
                    GOLDEN DIGITECH TEAM
                  </h1>
                  <div className="d-lg-flex d-grid justify-content-lg-between justify-content-center pt-lg-5 pt-3">
                    <div className="w-lg-50 w-100 d-grid " data-aos="fade-up">
                      <div className="d-flex justify-content-center">
                        <img
                          loading="lazy"
                          src={img.team1}
                          alt=""
                          width={120}
                          className="img-fluid"
                        />
                      </div>
                      <p className="text-paragraph-secondary text-primary1 text-center mb-0 pt-2">
                        Andy M. Venus
                      </p>
                      <p className="text-paragraph-secondary text-white text-center">
                        Founder
                      </p>
                    </div>
                    <div className="w-lg-50 w-100 d-grid " data-aos="fade-up">
                      <div className="d-flex justify-content-center">
                        <img
                          loading="lazy"
                          src={img.team2}
                          alt=""
                          width={120}
                          className="img-fluid"
                        />
                      </div>
                      <p className="text-paragraph-secondary text-primary1 text-center mb-0 pt-2">
                        Cherry Pearl G. Lopez
                      </p>
                      <p className="text-paragraph-secondary text-white text-center">
                        Co-Founder and Operations Manager
                      </p>
                    </div>
                  </div>
                  <div className="d-lg-flex d-grid justify-content-lg-between justify-content-center pt-lg-5 pt-3">
                    <div className="w-lg-50 w-100 d-grid " data-aos="fade-up">
                      <div className="d-flex justify-content-center">
                        <img
                          loading="lazy"
                          src={img.team3}
                          alt=""
                          width={120}
                          className="img-fluid"
                        />
                      </div>
                      <p className="text-paragraph-secondary text-primary1 text-center mb-0 pt-2">
                        John S. Halamane
                      </p>
                      <p className="text-paragraph-secondary text-white text-center">
                        Social Media and E-commerce Specialist
                      </p>
                    </div>
                    <div className="w-lg-50 w-100 d-grid " data-aos="fade-up">
                      <div className="d-flex justify-content-center">
                        <img
                          loading="lazy"
                          src={img.team4}
                          alt=""
                          width={120}
                          className="img-fluid"
                        />
                      </div>
                      <p className="text-paragraph-secondary text-primary1 text-center mb-0 pt-2">
                        Reeve L. Copiado
                      </p>
                      <p className="text-paragraph-secondary text-white text-center">
                        Digital Marketing Assistant and Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-12 ps-lg-5 ps-0 pt-lg-0 pt-5">
                  <p
                    className="fs-5 text-title-secondary text-lg-start text-center pb-3"
                    style={{ color: "#dbb000" }}
                    data-aos="fade-up"
                  >
                    Plus a team of several contractors/service providers for the
                    call center and virtual assistance services:
                  </p>
                  <div className="d-lg-flex d-grid justify-content-lg-between justify-content-center pt-lg-5 pt-2">
                    <div className="w-lg-50 w-100 d-grid ">
                      <p
                        className="text-paragraph-secondary text-white text-lg-start text-center pb-0 mb-0"
                        data-aos="fade-up"
                      >
                        Social Media Managers <br />
                        Social Media Marketers <br />
                        Customer Service Representatives <br />
                        Technical Support Representatives <br />
                        Sales Representatives <br />
                        Search Engine Optimization Specialists
                      </p>
                    </div>
                    <div className="w-lg-50 w-100 d-grid pt-lg-0 pt-4">
                      <p
                        className="text-paragraph-secondary text-white text-lg-start text-center pb-lg-0 mb-0"
                        data-aos="fade-up"
                      >
                        Lead Generation Specialists <br />
                        Cold Callers and Appointment-Setters <br />
                        General Virtual Assistants <br />
                        E-commerce VAs <br />
                        Admin Virtual Assistants <br />
                        Medical and Healthcare VAs
                      </p>
                    </div>
                  </div>
                  <div className="d-lg-flex d-grid justify-content-lg-between justify-content-center pt-lg-5 pt-2">
                    <div className="w-lg-50 w-100 d-grid pt-lg-0 pt-4">
                      <p
                        className="text-paragraph-secondary text-white text-lg-start text-center pb-lg-0 mb-0"
                        data-aos="fade-up"
                      >
                        Real Estate Virtual Assistants <br />
                        Accounting and Bookkeeping Virtual Assistants <br />
                        Web Developers and Designers <br />
                        English as a Second Language Teachers <br />
                        Digital Skills Trainers <br />
                        Other Digital Skills Service Providers <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
