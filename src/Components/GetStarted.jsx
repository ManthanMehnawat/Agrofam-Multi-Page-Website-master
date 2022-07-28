import React from "react";
import Footer from "./Footer";

const GetStarted = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section className="getstarted">
        <div className="content-box">
          <div className="container">
            <div className="head">
              <h1 className="head_get_started1">GET STARTED</h1>
              <p className="para_get_startedpara1 col1">
                We open the door to thousands of approved buyers and sellers.
                Post your crop bid as a registered buyer, or create your crop
                offer as a platform verified seller. Through our rigorous
                customer compliance we make sure that only reliable users gain
                access to our digital marketplace. There are two ways to get
                started:
              </p>
            </div>
            <div className="col2">
              <div className="col-md-3">
                <h3>POST OFFER AS A SELLER</h3>
                <p className="para_get_started">
                  As a seller, post offers for the agricultural crop you are
                  looking to sell, and gain immediate access to credit-verified
                  buyers. Or simply react to an existing buyer’s bid and start
                  your transaction.
                </p>
              </div>
              <div className="col-md-4">
                <h3>POST BID AS A BUYER</h3>
                <p className="para_get_started">
                  As a buyer, post bids for the agricultural crop you are
                  looking to buy. Communicate to the market what you are looking
                  for, and get rapid reactions from interested farmers or
                  sellers.
                </p>
              </div>
            </div>

            <div className="button_get_started">
              <div className="btn_div_1">
                <button className="buttons button1">Register as a seller</button>
                <button className="buttons button2">Selling offer videos</button>
              </div>
              <div className="btn_div_2">
                <button className="buttons button3">Register as a buyer</button>
                <button className="buttons button4">Buying bid videos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default GetStarted;
