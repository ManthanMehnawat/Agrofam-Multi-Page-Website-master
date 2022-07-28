import React from "react";
var show = true;

function showOthers() {
  var options = document.getElementById("Others");
  var otherOpt = document.getElementById("OtherOpt");
  if (show) {
    options.style.display = "block";
    otherOpt.innerText = "Show Less";
    show = false;
  } else {
    options.style.display = "none";
    otherOpt.innerText = "Show More";
    show = true;
  }
}
const FarmerForm = () => {
  return (
    <div style={{ paddingTop: "7rem" }}>
      <h3>Farmer Details</h3>
      <div className="outerFarmDiv">
        <div className="innerFarmDiv1">
          <div className="innerestFarmDiv1">
            <label htmlFor="Name">Name :</label>
            <input type="text" id="Name" placeholder="Enter your Name" />
          </div>
          <div className="innerestFarmDiv1">
            <label htmlFor="Email">Email :</label>
            <input
              type="email"
              name=""
              id="Email"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="innerFarmDiv2">
          <div className="innerestFarmDiv2">
            <label htmlFor="Address">Address :</label>
            <input type="text" id="Address" placeholder="Enter your Address" />
          </div>
          <div className="innerestFarmDiv2">
            <label htmlFor="Number">Number :</label>
            <input
              type="number"
              name=""
              id="Number"
              placeholder="Enter your Number"
            />
          </div>
        </div>
        <div className="innerFarmDiv3">
          <div className="innerestFarmDiv3">
            <label htmlFor="Location">Location :</label>
            <input type="text" id="Name" placeholder="Enter Location" />
          </div>
          <div className="innerestFarmDiv3">
            <label htmlFor="Area">Land Area :</label>
            <input type="number" name="" id="Area" placeholder="Enter Area" />
          </div>
        </div>
      </div>
      <h4>Select Categories</h4>
      <div>
        <input type="checkbox" name="Vegetables" id="Vegetables" />
        <label htmlFor="Vegetables">Vegetables</label>
      </div>
      <div>
        <input type="checkbox" name="Fruits" id="Fruits" />
        <label htmlFor="Fruits">Fruits</label>
      </div>
      <div>
        <input type="checkbox" name="Pulses" id="Pulses" />
        <label htmlFor="Pulses">Pulses</label>
      </div>
      <div>
        <input type="checkbox" name="Grains" id="Grains" />
        <label htmlFor="Grains">Grains</label>
      </div>
      <div>
        <input type="checkbox" name="Flowers" id="Flowers" />
        <label htmlFor="Flowers">Flowers</label>
      </div>
      <div id="Others" style={{ display: "none" }}>
        <div>
          <input type="checkbox" name="Flowers" id="Flowers" />
          <label htmlFor="Flowers">Flowers</label>
        </div>
        <div>
          <input type="checkbox" name="Flowers" id="Flowers" />
          <label htmlFor="Flowers">Flowers</label>
        </div>
      </div>
      <button id="OtherOpt" onClick={showOthers}>
        Show More
      </button>
      <div>
        <h5>Please specify other categories</h5>
        <p>example - honey, jaggery, herbs</p>
        <input type="text" placeholder="Your Answer" />
      </div>
      <div>
        <h5>Type of Crop</h5>
        <div>
          <input type="checkbox" name="" id="Organic" />
          <label htmlFor="Organic">Organic</label>
        </div>
        <div>
          <input type="checkbox" name="" id="Traditional" />
          <label htmlFor="Traditional">Traditional</label>
        </div>
        <div>
          <input type="checkbox" name="" id="Natural" />
          <label htmlFor="Natural">Natural</label>
        </div>
      </div>
      <div>
        <h5>Crop Name/Month/Est. Qty *</h5>
        <p>Example - Tomato/Jan-Feb/500 ton ,  Potato/Jan-Mar, Sep-Dec/ 1000 ton </p>
        <input type="text" placeholder="Your answer"></input>
      </div>
      <div>
        <h5>Selling Price Min to Max</h5>
        <p>Example Tomato/5-10/per kg</p>
        <input type="text" placeholder="Enter Selling Price" />
      </div>
      <div>
        <h5>Estimated Yield *</h5>
        <p>How the farmer is selling product so far? *</p>
        <input type="text" placeholder="Your answer" required />
      </div>
      <div>
        <h5>Question for surveyor </h5>
        <div>
          <input type="checkbox" name="" id="Organic" />
          <label htmlFor="Organic">Have you taken all details</label>
        </div>
        <div>
          <input type="checkbox" name="" id="Traditional" />
          <label htmlFor="Traditional">Have you taken image of farmer</label>
        </div>
        <div>
          <input type="checkbox" name="" id="Natural" />
          <label htmlFor="Natural">Have you taken image of field</label>
        </div>
        <div>
          <input type="checkbox" name="" id="Natural2" />
          <label htmlFor="Natural2">Have you renamed the image files to link with form</label>
        </div>
      </div>
      <div>
        <label htmlFor="Pulses">Name :</label>
        <input type="text" name="Pulses" id="Pulses" />
      </div>
      <div>
        <label htmlFor="Pulses">Phone Number :</label>
        <input type="number" name="Pulses" id="Pulses" />
      </div>
    </div>
  );
};

export default FarmerForm;
