import React from "react";
// import img1 from "../Fruits/sushilsir-modified.png";
import img1 from '../Fruits/disiana-caballero-s4mpAZSvcbE-unsplash.jpg'
import img2 from "../Fruits/saurabh sir-modified.png";
import img3 from "../Fruits/ankush-modified.png";
export default function CoreTeam() {
  return (
    <div className="coreDiv">
      <h1 className="header">Core Team Members</h1>
      <div className="coreTeam">
        <div className="card1">
          <p>
            “Everyone I spoke with was very helpful and walked me through all of
            my needs. The software/system is easy to use and it kept my
            applicants organized and moving forward.”
          </p>
          <div className="info">
            <img className="vkImg" width="10px" src={img1} alt="" />
            <div className="info-2">
              <h1 className="Name">Sushil Kumar</h1>
              <h3>Director</h3>
            </div>
          </div>
        </div>
        <div className="card2">
          <p>
            “Everyone I spoke with was very helpful and walked me through all of
            my needs. The software/system is easy to use and it kept my
            applicants organized and moving forward.”
          </p>
          <div className="info">
            <img className="vkImg" width="100px" src={img2} alt="" />
            <div className="info-2">
              <h1 className="Name">Saurabh Sharma</h1>
              <h3>Director</h3>
            </div>
          </div>
        </div>
        <div className="card3">
          <p>
            “Everyone I spoke with was very helpful and walked me through all of
            my needs. The software/system is easy to use and it kept my
            applicants organized and moving forward.”
          </p>
          <div className="info">
            <img className="vkImg" width="100px" src={img3} alt="" />
            <div className="info-2">
              <h1 className="Name">Ankush Ladani</h1>
              <h3>FrontEnd Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
