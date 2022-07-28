import React from "react";
import img1 from "../Components/source2/logo.png";
import img2 from "../Components/source2/field-5430070.jpg";
import img3 from "../Components/source2/seedling.jpg";
import img4 from "../Components/source2/cucumbers.jpg";
import Footer from '../Components/Footer'
const Sustainability = () => {
  return (
    <div style={{ paddingTop: "4rem" }} className="sustainability_div">
      <div className="sustainability_div1">
        <div className="inner_div1">
          <p className="sustain_para1">
            Agrofam is helping farmer customers and environment and benefiting
            them with health and wealth.
          </p>
          <p>
            Agrofam is connected with thousands of farmers and helps them in
            getting proper knowledge of seasonal crops, soil needs, and proper
            caring techniques. With our help and support farmers are able to
            produce more quality crops and sell them directly to us. This will
            save them from supply chain costs and they will get a genuine price
            for the crops too. We are helping customers by providing them the
            organic fruits and vegetables, at affordable market rates. By doing
            this we are also keeping our environment healthy and green.
          </p>
        </div>
        <div className="inner_div2">
          <img src={img1} width="200px" alt="" />
        </div>
      </div>
      <div className="sustainability_div2">
        <h1>On-Farm Food Waste</h1>
        <p>
          Often the perfectly delicious produce that farmers grow never makes it
          off of the farm. There are two primary reasons why on-farm produce is
          wasted: The produce they grow is “ugly” or imperfect - it does not
          meet strict retail aesthetic standards simply because it is not
          perfect looking. Only the produce or parts of the produce that meet
          strict specifications are harvested and the remainder is sometimes
          sold as off-grade, but is largely left in the fields to rot or sent to
          landfills. There is surplus as a result of overproduction, lack of
          selling opportunities or loss of demand.
        </p>
      </div>
      <div className="sustainability_div3">
          <h1>Agrofam Offers the Industry’s Only Third-Party Audit and Verification Process</h1>
          <p>Agrofam’s proprietary verification process evaluates three key factors to determine if produce is rescued: type of produce, market conditions and harvest conditions.</p>
      </div>
      <div className="sustainability_div4">
          <h1>How it Works</h1>
          <div className="inner_div3">
              <img src={img2} height="350px" width="450" alt="" />
              <p>We First teach the farmers about the farming techniques, crop care, and soil care, guide them about the season suitable crops and make them eligible to produce the maximum amount of crops and to get benefit from it. Also, we check the soil quality by sensors and detect the deficiency of soil minerals and add them accordingly so that the crops grown are healthy..</p>
          </div>
          <div className="inner_div4">
              <p>We remain connected with the farmers till the end and guide and solve their each and every problems.</p>
              <img src={img3} height="350px" width="514" alt="" />
          </div>
          <div className="inner_div5">
              <img src={img4} height="350px" width="450" alt="" />
              <p>Which yields in production of organic healthy fruits and vegetables. Now Customes can purchase healthy fruits and vegetables from us.</p>
          </div>
      </div>
      {/* <div className="box">
          <br />
          <span>
            Agrofam is helping farmer customers and environment and benefiting
            them with health and wealth.
          </span>
          <p>
            Agrofam is connected with thousands of farmers and helps them in
            getting proper knowledge of seasonal crops, soil needs, and proper
            caring techniques. With our help and support farmers are able to
            produce more quality crops and sell them directly to us. This will
            save them from supply chain costs and they will get a genuine price
            for the crops too. We are helping customers by providing them the
            organic fruits and vegetables, at affordable market rates. By doing
            this we are also keeping our environment healthy and green.
          </p>
        </div>
        <div className="box">
          <img
            className="boxi"
            src={img1}
            height="200px"
            width="200px"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="para">
        <br />
        <span>On-Farm Food Waste</span>
        <br />
        <p>
          Often the perfectly delicious produce that farmers grow never makes it
          off of the farm. There are two primary reasons why on-farm produce is
          wasted:
          <br />
          The produce they grow is “ugly” or imperfect - it does not meet strict
          retail aesthetic standards simply because it is not perfect looking.
          Only the produce or parts of the produce that meet strict
          specifications are harvested and the remainder is sometimes sold as
          off-grade, but is largely left in the fields to rot or sent to
          landfills.
          <br />
          There is surplus as a result of overproduction, lack of selling
          opportunities or loss of demand.
        </p>
        <br />
        <br />

        <span>
          Agrofam Offers the Industry’s Only Third-Party Audit and Verification
          Process
        </span>
        <br />
        <p>
          Agrofam’s proprietary verification process evaluates three key factors
          to determine if produce is rescued: type of produce, market conditions
          and harvest conditions.
        </p>
        <br />
        <span>How it Works:</span>
        <br />
        <div className="container1">
          <div className="box1">
            <img src={img2} height="250px" width="500" />
          </div>
          <div className="box1">
            <p>
              We First teach the farmers about the farming techniques, crop
              care, and soil care, guide them about the season suitable crops
              and make them eligible to produce the maximum amount of crops and
              to get benefit from it. Also, we check the soil quality by sensors
              and detect the deficiency of soil minerals and add them
              accordingly so that the crops grown are healthy..
            </p>
          </div>

          <div className="box1">
            <p>
              We remain connected with the farmers till the end and guide and
              solve their each and every problems.
            </p>
          </div>
          <div className="box1">
            <img src={img3} height="250px" width="500" />
          </div>

          <div className="box1">
            <img src={img4} height="250px" width="500" />
          </div>
          <div className="box1">
            <p>
              Which yields in production of organic healthy fruits and
              vegetables. Now Customes can purchase healthy fruits and
              vegetables from us.
            </p>
          </div>
        </div> */}
        <Footer></Footer>
    </div>
  );
};

export default Sustainability;
