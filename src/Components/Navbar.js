import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images2/updated logo.png";
import logo2 from "../Fruits/Logopit_1654006397769 white.png";
let aboutItem = document.querySelector("#aboutItem");
// aboutItem.addEventListener('mouseenter' , showList);
// console.log(aboutItem);
let dropDown = document.getElementById("DropDown");
// console.log(dropDown);
// aboutItem.addEventListener('mouseenter' , showList);

function showList() {
  // dropDown.style.display = "block";
  alert('He')
}
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <img
          // style={{ marginLeft: "43px", marginTop: "0px" }}
          className="agrofamLogo"
          src={logo2}
          width="100px"
          alt=""
        />
        <div className="menu">
          <ul>
            {/* <li><i className="fa fa-home"></i><a href="#">Home</a></li>
                <li><i className="fa fa-info"></i> <a href="#">About us</a></li>
                <li><i className="fa fa-rocket"></i><a href="#">Services</a></li>
                <li><i className="fa fa-hand-o-down"></i><a href="#">Products</a></li> */}
            {/* <NavLink to='/'>Home</NavLink> */}
            {/* <NavLink to='about'>About</NavLink> */}
            <li>
              {/* <a href="/"> </a> */}
              <NavLink to="/">Home</NavLink>
            </li>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <li className="aboutItem" id="aboutItem">
                {/* <a href="/about"> */}
                <NavLink to="about">About us</NavLink>
              </li>
              <li style={{ display: "none" }}>
                <ul id="DropDown">
                  <li>Our Mission</li>
                  <li>Our Vision</li>
                  <li>Our Team</li>
                </ul>
              </li>
            </div>
            <li>
              {/* <a href="/buyers">Buyers</a> */}
              <NavLink to="buyers">Buyers</NavLink>
            </li>
            <li>
              {/* <a href="/sellers">Sellers</a> */}
              <NavLink to="farmers">Farmers</NavLink>
            </li>
            <li>
              {/* <a href="/dataLogistics">Data Logistics</a> */}
              <NavLink to="dataLogistics">Logistics</NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-2">
          <ul>
            {/* <li><i className="fa fa-address-book" /><a href="#">Contact us</a></li>
                <li><i className="fa fa-sign-in" /><a href="#">Login/Sign-up</a></li> */}
            {/* <li className="contact">
              <a href="#">Contact us</a>
            </li> */}
            <li className="login">
              {/* <a href="/letsConnect">Let's Connect</a> */}
              <NavLink to="letsConnect">Let's Connect</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
