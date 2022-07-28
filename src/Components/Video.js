import React from "react";
import { useNavigate } from "react-router-dom";
export default function Video() {
  const Navigate = useNavigate();
  return (
    <div className="videoDiv">
      <iframe
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "80px",
          marginBottom: "50px",
        }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dbIw9Xe6o2Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => Navigate('/getStarted')} className="newBtn">Get Started</button>
    </div>
  );
}
