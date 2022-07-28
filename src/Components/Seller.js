import React from "react";
import SellerBody from "./SellerBody";
import tryimg from "../Images2/2.jpg";
import Footer from "./Footer";
// import img1 from '../source/a.jpg'
// import img2 from '../source/b.jpg'
// import img3 from '../source/c.jpg'
// import img4 from '../source/d.jpg'
// import img5 from '../source/e.jpg'
// import img6 from '../source/cart-148964.png'
// import img7 from '../source/connections-2099068.png'
// import img8 from '../source/market-6212590.png'
// import img9 from '../source/online-2750410.png'
// import img10 from './Seller Content/source/efficiency.png'
// import img11 from './Seller Content/source/piggy.png'
// import img12 from './Seller Content/source/bottle.png'
// import img13 from './Seller Content/source/ads.png'
// import img14 from './Seller Content/source/magni.png'
// import img15 from './Seller Content/source/time.png'
// import img16 from './Seller Content/source/truck.png'
// import img17 from './Seller Content/source/ppl.png'
import img1 from "../Components/sellers/source/Crop.jpg";
import img2 from "../Components/sellers/source/growth.png";
import img3 from "../Components/sellers/source/distribution-network.png";
import img4 from "../Components/sellers/source/sell.png";
import img5 from "../Components/sellers/source/box.png";
import img6 from "../Components/sellers/source/sell.png";
import img7 from "../Components/sellers/source/cart.png";
import img8 from "../Components/sellers/source/truck.png";
import img9 from "../Components/sellers/source/pay.png";
import img10 from "../Components/sellers/source/lemons.jpg";
import img11 from "../Components/sellers/source/orange.jpg";
import img12 from "../Components/sellers/source/taro.jpg";
import img13 from "../Components/sellers/source/cauliflower.jpg";
import img14 from "../Components/sellers/source/taro.jpg";
import img15 from "../Components/sellers/source/spiny-gourd.jpg";
import img16 from "../Components/sellers/source/bananas.jpg";
import img17 from "../Components/sellers/source/capsicum.jpg";
import img18 from "../Components/sellers/source/peas.jpg";
import img19 from "../Components/sellers/source/bitter-melon.jpg";
import img20 from "../Components/sellers/source/apple.jpg";
import img21 from "../Components/sellers/source/potato.jpg";
import img22 from "../Components/sellers/source/apple.jpg";

const Seller = () => {
  return (
    <div classNameName="sellerDiv" style={{ paddingTop: "4rem" }}>
      <div class="container1">
        <div class="img">
          <img class="banner" height='100vh' src={img1} />
        </div>
        <div class="overimg">
          <p class="overimgtext">
            Sell your excess produce and products directly to Agrofam-
          <button class="Sellerbtn">SIGN UP FOR FREE →</button>
          </p>
        </div>
      </div>

      <div class="space"></div>

      <div class="container2" style={{marginTop :'18rem'}}>
        <div class="box2">
          <img src={img2} height="80px" width="80px" />
          <br />
          <p style={{marginBottom : '1rem'}} class="green">
            Sell more, Earn
             more
          </p>
          <p class="normal">Our growers have increased profits by up to 12%</p>
        </div>
        <div class="box2">
          <img src={img3} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">Reach More Buyers</p>
          <p class="normal">
            Instantly access thousands of food & beverage processors and
            manufacturers who are in search for your product.
          </p>
        </div>
        <div class="box2">
          <img src={img4} height="80px" width="80px" />
          <p style={{marginBottom : '1rem'}} class="green">
            Sell Online with
            Ease
          </p>
          <p class="normal">
            Post and sell all in one place. Then get paid on time.
          </p>
        </div>
      </div>
      <div class="center">
        <button class="btn2">Try it Now</button>
      </div>
      <div class="space"></div>

      <div class="center">
        <p class="big">
          Less Emailing, More Selling
          <br />
          <span class="whitesmoke">
            Showcase your produce with details and photos to speed up the sales
            process.
          </span>
        </p>
      </div>

      <div class="space"></div>

      <div class="center">
        <img class="img1" src={img5} />
      </div>

      <div class="space"></div>

      <div class="center">
        <p class="big">
          The Agrofam marketplace is your sales channel for excess produce.
        </p>
      </div>

      <div class="space"></div>

      <div class="container3">
        <div class="box3" style={{marginRight : '2rem'}}>
          <img style={{marginBottom : '1rem'}} src={img6} height="80px" width="80px" />
          <p class="gray gray2">List your produce in under a minute</p>
        </div>
        <div class="box3">
          <img style={{marginBottom : '1rem'}} src={img7} height="80px" width="80px" />
          <p class="gray gray2">Buyers purchase your produce from our marketplace </p>
        </div>
        <div class="box3">
          <img style={{marginBottom : '1rem'}} src={img8} height="80px" width="80px" />
          <p class="gray gray2">Agrofam arranges delivery</p>
        </div>
        <div class="box3" style={{marginLeft : '-3rem'}}>
          <img style={{marginBottom : '1rem'}} src={img9} height="80px" width="80px" />
          <p class="gray gray2">You get paid on time</p>
        </div>

        <div class="space"></div>

        <div class="center spaceDiv space">
          <p class="big">
            We sell excess produce of all shapes & sizes
            <br />
            <span class="whitesmoke">
              Here are real supplier photos of our top selling commodities
            </span>
          </p>
        </div>

        <div class="vegfruitcontainer">
          {/* <div class="box"> */}
            <img className="hey" src={img10} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img className="hey" src={img11} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img12} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img13} width="214px" height="154" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img14} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img15} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img16} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img17} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img18} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img19} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
            <img src={img20} width="214px" height="154px" />
          {/* </div> */}
          {/* <div class="box"> */}
          <img src={img16} width="214px" height="154px" />
          {/* </div> */}
        </div>
        <div class="space attach">

        <div class="center space">
          <h1 className="spaceHead">Ready to start earning?</h1>
          <br />
          <button class="btn3">Sell Your Product Today</button>
        </div>

        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Seller;
