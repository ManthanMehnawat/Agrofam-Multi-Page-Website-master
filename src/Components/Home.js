import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import AboutUs2 from "./AboutUs2";
import Cards2 from "./Cards2";
import CoreTeam from "./CoreTeam,";
import Footer from "./Footer";
import Home2 from "./Home2";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Video from "./Video";
import Footer2 from "./Footer2";
import Commodity from "./Commodity";
import Form from "./Form";
import FarmerForm from "./FarmerForm";
import Project1 from "./Project1";
const Home = () => {
  const Navlink = useNavigate();
  return (
    <div>
      {/* <Project1></Project1> */}
      <Navbar></Navbar>
      <About></About>
      <Video></Video>
      <Statistics></Statistics>
      <Commodity></Commodity>
      {/* <CoreTeam></CoreTeam> */}
      {/* <Cards2></Cards2> */}
      {/* <Form></Form> */}
      {/* <FarmerForm></FarmerForm> */}
      <Home2></Home2>
      <AboutUs2></AboutUs2>
      <div style={{ margin: "10rem 0 10rem 0" }} className="projectDiv">
        <button className="projectBtn" onClick={() => Navlink("/projects")}>
          <div className="innerProjectDiv">
            See Projects
            <img
              
              src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114931.png?token=exp=1654079901~hmac=82d921c9596be976198e964cb1f5b165"
              alt=""
              width="30px"
            />
          </div>
        </button>
      </div>
      <Footer></Footer>
      {/* <Footer2></Footer2> */}
    </div>
  );
};

export default Home;
