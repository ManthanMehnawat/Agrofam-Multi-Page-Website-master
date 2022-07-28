import React from "react";
// let inputContainer = document.querySelector('.inputContainer')
// function handleClick(){
//   inputContainer.style.display = 'block';
// }
import Form1 from "./Form1";
import Form2 from "./Form2";
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
var show2 = true;
function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkBoxes2");

  if (show2) {
    checkboxes2.style.display = "block";
    show2 = false;
  } else {
    checkboxes2.style.display = "none";
    show2 = true;
  }
}
var show3 = true;
function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkBoxes3");

  if (show3) {
    checkboxes3.style.display = "block";
    show3 = false;
  } else {
    checkboxes3.style.display = "none";
    show3 = true;
  }
}
function handleClick1() {
  var inputCon = document.querySelector(".inputContainer1");
  var inputCon2 = document.querySelector(".inputContainer2");
  var inputCon3 = document.querySelector(".inputContainer3");
  var inputCon4 = document.querySelector(".inputContainer4");
  if (inputCon.style.display === "none") {
    inputCon.style.display = "block";
    inputCon2.style.display = "none";
    inputCon3.style.display = "none";
    inputCon4.style.display = "none";
  } else {
    inputCon.style.display = "none";
  }
}
function handleClick2() {
  var inputCon2 = document.querySelector(".inputContainer2");
  var inputCon = document.querySelector(".inputContainer1");
  var inputCon3 = document.querySelector(".inputContainer3");
  var inputCon4 = document.querySelector(".inputContainer4");
  if (inputCon2.style.display === "none") {
    inputCon2.style.display = "block";
    inputCon.style.display = "none";
    inputCon3.style.display = "none";
    inputCon4.style.display = "none";
  } else {
    inputCon2.style.display = "none";
  }
}
function handleClick3() {
  var inputCon3 = document.querySelector(".inputContainer3");
  var inputCon = document.querySelector(".inputContainer1");
  var inputCon2 = document.querySelector(".inputContainer2");
  var inputCon4 = document.querySelector(".inputContainer4");
  if (inputCon3.style.display === "none") {
    inputCon3.style.display = "block";
    inputCon.style.display = "none";
    inputCon2.style.display = "none";
    inputCon4.style.display = "none";
  } else {
    inputCon3.style.display = "none";
  }
}
function handleClick4() {
  var inputCon4 = document.querySelector(".inputContainer4");
  var inputCon3 = document.querySelector(".inputContainer3");
  var inputCon = document.querySelector(".inputContainer1");
  var inputCon2 = document.querySelector(".inputContainer2");
  if (inputCon4.style.display === "none") {
    inputCon4.style.display = "block";
    inputCon.style.display = "none";
    inputCon3.style.display = "none";
    inputCon2.style.display = "none";
  } else {
    inputCon4.style.display = "none";
  }
}
const LoginSignup = () => {
  return (
    <div className="loginSignupDiv" style={{ paddingTop: "7rem" }}>
      <div className="background">
        <div className="innerLogin">
          <h1>I am a....</h1>
          <div className="LoginCardContainer">
            <div
              className="LogCard1"
              style={{ marginRight: "3px" }}
              onClick={handleClick1}
            >
              <p className="LogCardHead">Farmer</p>
              <p className="LogCardPara">
                I am intrested in sourcing produce my business
              </p>
            </div>
            <div
              className="LogCard2"
              style={{ marginRight: "3px" }}
              onClick={handleClick2}
            >
              <p className="LogCardHead">FPO</p>
              <p className="LogCardPara">
                (farmer producers organization) I am interested in producing the
                goods
              </p>
            </div>
            <div
              className="LogCard3"
              style={{ marginRight: "3px" }}
              onClick={handleClick3}
            >
              <p className="LogCardHead">Buyer</p>
              <p className="LogCardPara">
                I'm intrested in Purchasing the goods
              </p>
            </div>
            <div
              className="LogCard4"
              style={{ marginRight: "3px" }}
              onClick={handleClick4}
            >
              <p className="LogCardHead">Transporter</p>
              <p className="LogCardPara">
                I'm intrested in providing transportation service
              </p>
            </div>
          </div>
        </div>
        <div className="inputContainer1">
          {/* <h1>Form1</h1> */}
          <div className="FormDiv">
            <div className="FormDiv2">
              <h2>
                Please share some info about your farm
                <br />
                कृपया अपने खेत के बारे में कुछ जानकारी साझा करें
              </h2>
              <div className="FormDiv4">
                <h5>
                  My total growing acres
                  <br />
                  मेरी कुल बढ़ती एकड़
                </h5>
                <p>
                  (Across all commodities)
                  <br />
                  (सभी वस्तुओं के पार)
                </p>
                <div>
                  <button>Less than 100</button>
                  <button>100 - 1,000</button>
                  <button>1,000 - 10,000</button>
                  <button>10,000+</button>
                </div>
              </div>
              <div className="FormDiv5">
                <h5>
                  Do you have a 3rd party food safety audit?
                  <br />
                  क्या आपके पास तृतीय पक्ष खाद्य सुरक्षा ऑडिट है?
                </h5>
                <p>(Such as GAP or GFSI)</p>
                <div>
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
              <div className="FormDiv6">
                <h5>
                  Commodities I Grow
                  <br />
                  जिन वस्तुओं की मैं कृषि करता हूं
                </h5>
                <p>
                  Help our buyers know what you offer. You can change this later
                  in your profile
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
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" />
                            checkBox1
                          </div>
                        </label>

                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" />
                            checkBox1
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" />
                            checkBox1
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
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
                <label htmlFor="Name">
                  Name :<br />
                  नाम :
                </label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="FormDiv8">
                <label htmlFor="Number">
                  Phone Number :<br />
                  फ़ोन नंबर:
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  name=""
                  id="Number"
                />
              </div>
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 4rem",
                  borderRadius: "7px",
                  border: "none",
                  border: "3px solid #0d4c00",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="inputContainer2">
          {/* <h1>Form2</h1> */}
          <div className="FormDiv2">
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                Name :<br />
                नाम :
              </label>
              <input
                style={{ marginLeft: "7.1rem" }}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="FormDiv8" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Number">
                Phone Number :<br />
                फ़ोन नंबर:
              </label>
              <input
                style={{ marginLeft: "9.2rem" }}
                type="number"
                placeholder="Enter Your Number"
                name=""
                id="Number"
              />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                Name of your Organisation :<br />
                आपके संगठन का नाम :
              </label>
              <input type="text" placeholder="Enter Your Organisation Name" />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                City :<br />
                शहर :
              </label>
              <input
                style={{ marginLeft: "6.8rem" }}
                type="text"
                placeholder="Enter Your City"
              />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                State :<br />
                राज्य :
              </label>
              <input
                style={{ marginLeft: "6.8rem" }}
                type="text"
                placeholder="Enter Your State"
              />
            </div>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 4rem",
                borderRadius: "7px",
                border: "none",
                border: "3px solid #0d4c00",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="inputContainer3">
          {/* <h1>Form3</h1> */}
          <div className="FormDiv2">
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                Name :<br />
                नाम :
              </label>
              <input
                style={{ marginLeft: "7.1rem" }}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="FormDiv8" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Number">
                Phone Number :<br />
                फ़ोन नंबर:
              </label>
              <input
                style={{ marginLeft: "9.2rem" }}
                type="number"
                placeholder="Enter Your Number"
                name=""
                id="Number"
              />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                What You Want to Buy?
                <br />
                आप क्या खरीदना चाहते हो? :
              </label>
            </div>
            <div>
              <form>
                <div className="multipleSelection">
                  <div className="selectBox" onClick={showCheckboxes2}>
                    <select>
                      <option>Select options</option>
                    </select>
                    <div className="overSelect"></div>
                  </div>

                  <div id="checkBoxes2">
                    <label for="first">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>

                    <label for="second">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                    <label for="third">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                    <label for="fourth">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                City :<br />
                शहर :
              </label>
              <input
                style={{ marginLeft: "6.8rem" }}
                type="text"
                placeholder="Enter Your City"
              />
            </div>

            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                State :<br />
                राज्य :
              </label>
              <input
                style={{ marginLeft: "6.8rem" }}
                type="text"
                placeholder="Enter Your State"
              />
            </div>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 4rem",
                borderRadius: "7px",
                border: "none",
                border: "3px solid #0d4c00",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="inputContainer4">
          {/* <h1>Form4</h1> */}
          <div className="FormDiv2">
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                Name :<br />
                नाम :
              </label>
              <input
                style={{ marginLeft: "10.1rem" }}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="FormDiv8" style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="Number">
                Phone Number :<br />
                फ़ोन नंबर:
              </label>
              <input
                style={{ marginLeft: "12.2rem" }}
                type="number"
                placeholder="Enter Your Number"
                name=""
                id="Number"
              />
            </div>
            <div>
              <form>
                <div className="multipleSelection">
                  <div className="selectBox" onClick={showCheckboxes3}>
                    <select>
                      <option>In Which States do you give your service?</option>
                    </select>
                    <div className="overSelect"></div>
                  </div>

                  <div id="checkBoxes3">
                    <label for="first">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>

                    <label for="second">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                    <label for="third">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                    <label for="fourth">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "-12.5rem",
                        }}
                      >
                        <input type="checkbox" id="first" />
                        checkBox1
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                Name of your Transportation Company :<br />
                आपके परिवहन कंपनी का नाम :
              </label>
              <input type="text" placeholder="Enter Your Organisation Name" />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                City :<br />
                शहर :
              </label>
              <input
                style={{ marginLeft: "9.9rem" }}
                type="text"
                placeholder="Enter Your City"
              />
            </div>
            <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
              <label htmlFor="Name">
                State :<br />
                राज्य :
              </label>
              <input
                style={{ marginLeft: "9.8rem" }}
                type="text"
                placeholder="Enter Your State"
              />
            </div>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 4rem",
                borderRadius: "7px",
                border: "none",
                border: "3px solid #0d4c00",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <div classNameName="innerLoginDiv">
        <h1>I am a....</h1>
        <div classNameName="LoginCards">
          <a href="#">
            <div onClick={showDiv} classNameName="Card1">
              <h2>Produce Buyer</h2>
              <p>I am interested in sourcing products for my business.</p>
            </div>
          </a>
          <a href="#">
            <div onClick={showDiv} classNameName="Card2">
              <h2>Supplier</h2>
              <p>I am interested in Selling products</p>
            </div>
          </a>
          <a href="#">
            <div onClick={showDiv} classNameName="Card3">
              <h2>Individual</h2>
              <p>I am interested in learning more about Agrofam</p>
            </div>
          </a>
        </div>
      </div> */}

        {/* <Footer></Footer> */}
      </div>
      //{" "}
    </div>
  );
};

export default LoginSignup;

{
  /* <div className="FormDiv3">
  <h5>
    Do you ship from within India?
    <br />
    क्या आप भारत के भीतर से जहाज करते हैं?
  </h5>
  <p>
    (Product can be grown outside of India)
    <br />
    (उत्पाद भारत के बाहर उगाया जा सकता है)
  </p>
  <div>
    <button>Yes</button>
    <button>No</button>
  </div>
</div> */
}
