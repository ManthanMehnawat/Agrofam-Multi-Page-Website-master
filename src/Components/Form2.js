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

const Form2 = () => {
//   <div id="inputContainer2" className="inputContainer2">
    <div className="FormDiv">
      <div className="FormDiv2">
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
//   </div>;
};

export default Form2
