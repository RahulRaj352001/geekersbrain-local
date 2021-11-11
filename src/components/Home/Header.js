import React from "react";
import Navbar from "../layout/Navbar";
import "../../static/style/home/header.css";
// import { ReactComponent as Logo2 } from "../../assets/banner/app-develop 1.svg";

export default function Header() {
  return (
    <div className="container">
      <div className="Header">
        <div>
          <Navbar />
        </div>
        <p className="hr" />
        <div className="banner">
          <div className="company">
            <div className="heading">
              top rated mobile app dovelopment company.
            </div>
            <div className="subheading">
              greekersBrain is one of the most rated creative and experienced
              mobile app dovelopment companies in india. GreekersBrain is one of
              the most creative and experienced.
            </div>
            <div className="companybutton">
              <button>view your work</button>
              <button>know more</button>
            </div>
            <div className="companybrands">
              <img
                src={require("../../assets/banner/awards-logo 1.png").default}
                alt=""
              />
              <img
                src={require("../../assets/banner/goodfirm 1.png").default}
                alt=""
              />
              <img
                src={require("../../assets/banner/upwork_icon 1.png").default}
                alt=""
              />
            </div>
          </div>
          <div className="brand">
              <div>
                    <div>
                    <img
                src={require("../../assets/banner/Polygon 1.png").default}
                alt=""
              />
                    </div>
              </div>
              <div>
                  <div>
                      we design digital solution
                  </div>
                  <div>
                      for brand and company
                  </div>
              </div>
          </div>
          <div>
            <div>
              <img
                src={require("../../assets/banner/app-develop 1.png").default}
                alt=""
              />
              <p>custom App solution </p>
            </div>
            <div>
              <img
                src={require("../../assets/banner/startup 1.png").default}
                alt=""
              />
              <p>startup solution</p>
            </div>
            <div>
              <img
                src={require("../../assets/banner/car-rental 1.png").default}
                alt=""
              />
              <p>
                  car rental solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
