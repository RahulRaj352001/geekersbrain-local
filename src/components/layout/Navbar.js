import React from "react";

import { ReactComponent as Logo1 } from "../../assets/logo/logo.svg";
import { ReactComponent as Logo2 } from "../../assets/logo/geekers brain.svg";

// import logo2 from "./geekers brain.jpg";
import { BsChevronDown } from "react-icons/bs";
import "../../static/style/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Logo1 className="logo1" />
          <Logo2 className="logo2"/>
        </div>
        <div className="navMenu">
          <ul className="navmenu1">
            <li>home</li>
            <li>about us</li>
            <li>services</li>
            <li>work</li>
            <li>hire Team</li>
            <li>Blog</li>
            <li>Help & support</li>
          </ul>
          <ul className="navmenu-2">
             <li>
               <a  href="/quote" >Request a quote</a>
             </li>
          </ul>
          <button style={{ background: "transparent", border: "none" }} className="navmenu-button" >
            En <BsChevronDown style={{marginTop:"0.3vmax"}} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
