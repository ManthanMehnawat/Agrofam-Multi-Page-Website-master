import React from "react";
var show = true;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkBoxes");

  if (show) {
    checkboxes.style.display = "block";
    show = false;
  } else {
    checkboxes.style.display = "none";
    show = true;
  }
}
const Form = () => {
  return (
    <div style={{ paddingTop: "7rem" }} className="FormDiv">
      <div className="FormDiv2">
        <h2>Please share some info about your farm<br/>कृपया अपने खेत के बारे में कुछ जानकारी साझा करें</h2>
        <div className="FormDiv3">
          <h5>Do you ship from within India?<br/>क्या आप भारत के भीतर से जहाज करते हैं?</h5>
          <p>(Product can be grown outside of India)<br/>(उत्पाद भारत के बाहर उगाया जा सकता है)</p>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className="FormDiv4">
          <h5>My total growing acres<br/>मेरी कुल बढ़ती एकड़</h5>
          <p>(Across all commodities)<br/>(सभी वस्तुओं के पार)</p>
          <div>
            <button>Less than 100</button>
            <button>100 - 1,000</button>
            <button>1,000 - 10,000</button>
            <button>10,000+</button>
          </div>
        </div>
        <div className="FormDiv5">
          <h5>Do you have a 3rd party food safety audit?<br/>क्या आपके पास तृतीय पक्ष खाद्य सुरक्षा ऑडिट है?</h5>
          <p>(Such as GAP or GFSI)</p>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className="FormDiv6">
          <h5>Commodities I Grow<br/>जिन वस्तुओं की मैं वृद्धि करता हूं</h5>
          <p>
            Help our buyers know what you offer. You can change this later in
            your profile
          </p>
          <div>
            <form>
              <div className="multipleSelection">
                <div className="selectBox" onClick={showCheckboxes}>
                  <select>
                    <option>Select options</option>
                  </select>
                  <div className="overSelect"></div>
                </div>

                <div id="checkBoxes">
                  <label for="first">
                    <div style={{ display: "flex", alignItems: "center" , marginLeft : '-12.5rem' }}>
                      <input type="checkbox" id="first" />
                      checkBox1
                    </div>
                  </label>

                  <label for="second">
                    <div style={{ display: "flex", alignItems: "center" ,marginLeft : '-12.5rem' }}>
                      <input type="checkbox" id="first" />
                      checkBox1
                    </div>
                  </label>
                  <label for="third">
                    <div style={{ display: "flex", alignItems: "center",marginLeft : '-12.5rem' }}>
                      <input type="checkbox" id="first" />
                      checkBox1
                    </div>
                  </label>
                  <label for="fourth">
                    <div style={{ display: "flex", alignItems: "center",marginLeft : '-12.5rem' }}>
                      <input type="checkbox" id="first" />
                      checkBox1
                    </div>
                  </label>
                </div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="FormDiv7">
          <label htmlFor="Name">Name :<br/>नाम :</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="FormDiv8">
          <label htmlFor="Number">Phone Number :<br/>फ़ोन नंबर:</label>
          <input type="number" name="" id="Number" />
        </div>
        <button style={{marginTop : '1rem' , padding : '0.5rem 4rem' , borderRadius : '7px' , border : 'none' , border : '3px solid #0d4c00'}}>Submit</button>
      </div>
    </div>
  );
};

export default Form;