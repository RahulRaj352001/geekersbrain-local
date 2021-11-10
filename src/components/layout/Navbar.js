import React from "react";

import { ReactComponent as Logo1 } from "../../assets/logo/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo/geekers brain.svg";

import logo2 from "./geekers brain.jpg";
import { BsChevronDown } from "react-icons/bs";
import "../../static/style/navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Logo1 />
          <Logo2 />
        </div>
        <div className="navMenu">
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>services</li>
            <li>work</li>
            <li>hireTeam</li>
            <li>Blog</li>
            <li>Help & support</li>
          </ul>
          <li>
            <a href="/quote">Request a quote</a>
          </li>
          <button style={{ background: "transparent", border: "none" }}>
            En <BsChevronDown />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
