import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = ({result}) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="about">
        <div className="div1">
          <p className="para">
            “The Agrofam is a game-changer! It's the only service out there that
            can immediately give me a sense of the market - what's available
            today and at what price.”
          </p>
          <p className="para">
            —Matt, Procurement Manager - Produce @ A Major National Juice
            Company
          </p>
        </div>
        {/* <div className="left">
        <h3>OUR MISSION</h3>
        <p>
          To empower sustainability at the root level with the business
          marketplace for surplus & imperfect produce.
        </p>
        <button>Know our Mission</button>
      </div>
      <div className="right">
        <h3>You need it. We got it.</h3>
        <p>Stay ahead of market uncertainty. From glyphosate to so much more, Agrofam has the supplies you need for the season.</p>
        <button>Buy Now</button>
      </div> */}
      </div>
    </>
  );
};

export default About;
