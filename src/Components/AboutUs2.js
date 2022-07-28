import React from "react";
import { useNavigate } from "react-router-dom";
import ImgLogo from '../Images2/updated logo.png'
import ReadMore from "./ReadMore";

export default function AboutUs2() {
  const Navlink = useNavigate();
  return (
    <div className="aboutus2">
      <div className="aboutus2Container">
        <div className="Aboutcontent-section">
          <div className="AboutTitle">
            <h1>About Us</h1>
          </div>
          <div className="aboutcontent">
            <h3>AgroFam</h3>
            <p>
            Agrofam Connects with thousand of farmers and visits each of the them personally, Then we educate the farmers to use the proper methods of cultivation of suitable vegetable and fruits for that particular region with the help of modern equipment. We also check the quality of the soil with the help of  special types of detector's and sensors which helps us to know the need of the soil and tells us the requirements need to enrich the soil with more minerals and nutrients ...........
            </p>
            {/* <div className="aboutbutton"> */}
              <button onClick={() => Navlink('/readMore')}  className="aboutbutton">Read More</button>
            {/* </div> */}
          </div>
          <div className="social">
            <a target='_blank' href="https://www.facebook.com/pages/category/Home---Garden-Website/greenkyaricom-111891037299119/">
              <i className="fa fa-facebook"></i> 
            </a>
            <a target='_blank' href="https://twitter.com/GreenKyari">
              <i className="fa fa-twitter"></i>
            </a>
            <a target='_blank' href="https://www.instagram.com/green.kyari/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a target='_blank' href="https://in.linkedin.com/in/green-kyari-74aa45235">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* <div className="image-section">
          <img src={ImgLogo} />
        </div> */}
      </div>
    </div>
  );
}
