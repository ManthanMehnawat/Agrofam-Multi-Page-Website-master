import React from "react";
import img from "../Images/Images/9.jpg";
import New from "../Components/New";
export default function Statistics() {
  return (
    <div className="statistics">
        <h1 className="header">Statistics</h1>
      <div className="main-div">
        <div className="farmers block">
          <h3>130+</h3>
          <h1>Farmers</h1>
        </div>
        <div className="field-size block">
          <h3>120 acre+</h3>
          <h1>Total Field Size</h1>
        </div>
        <div className="fruits block">
          <h3>30+</h3>
          <h1>Fruit Types</h1>
        </div>
      </div>
    </div>
    // <div className="statistics">
    //   <h1 className="header">Statistics</h1>
    //   <div className="main-div">
    //     <div className="farmers block">
    //       <h3 className="counter" data-target="60000">
    //         0
    //       </h3>
    //       <h1>Farmers</h1>
    //     </div>
    //     <div className="field-size block">
    //       <h3 className="counter" data-target="10000">
    //         0
    //       </h3>
    //       <h1>Total Field Size</h1>
    //     </div>
    //     <div className="fruits block">
    //       <h3 className="counter" data-target="1500">
    //         0
    //       </h3>
    //       <h1>Fruit Types</h1>
    //     </div>
    //   </div>
    // </div>
  );
}
