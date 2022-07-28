import React from "react";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="container_project">
        <a href="/project1" style={{ textDecoration: "none" }}>
          <div className="box boxPro1"></div>
        </a>
        <a href="/project2">
          <div className="box boxPro2"></div>
        </a>
        <a href="/project3">
          <div className="box boxPro3"></div>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
