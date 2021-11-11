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
            <h1 className="heading">
              top rated mobile app dovelopment company.
            </h1>
            <div className="subheading">
              greekersBrain is one of the most rated creative and experienced
              mobile app dovelopment companies in india. GreekersBrain is one of
              the most creative and experienced.
            </div>
            <div className="companybutton">
              <button className="view">
                {" "}
                <span>View our Work</span>{" "}
              </button>
              <button className="knowmore">
                {" "}
                <span>Know More</span>{" "}
              </button>
            </div>
            <div className="companybrands">
              <img
                className="clutch"
                src={require("../../assets/banner/awards-logo 1.png").default}
                alt=""
              />
              <img
                className="upwork"
                src={require("../../assets/banner/upwork_icon 1.png").default}
                alt=""
              />

              <img
                className="good"
                src={require("../../assets/banner/goodfirm 1.png").default}
                alt=""
              />
            </div>
          </div>
          <div className="brand">
            <div className="brand-title">
            <div className="polygonbox">
              <div className="polygoncircle ">
                <img
                  src={require("../../assets/banner/Polygon 1.png").default}
                  alt=""
                />
              </div>
            </div>
            <div className="polygontitle">
              <div className="head1">we design digital solutions</div>
              <div className="head2">for brands and companies</div>
            </div>
         
            </div>
          <div className="boxes">
            <div className="box1">
              <img
                src={require("../../assets/banner/app-develop 1.png").default}
                alt=""
              />
              <p>custom <br /> App solution </p>
            </div>
            <div className="box2">
              <img
                src={require("../../assets/banner/startup 1.png").default}
                alt=""
              />
              <p>startup <br /> solution</p>
            </div>
            <div className="box3">
              <img
                src={require("../../assets/banner/car-rental 1.png").default}
                alt=""
              />
              <p>car  rental <br />  solution</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
