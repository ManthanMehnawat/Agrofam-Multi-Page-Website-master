import React from "react";
import img1 from '../Fruits/buyer.png'
import img5 from '../Fruits/sustainability.png'
import img2 from '../Fruits/logistics.png'
import img3 from '../Fruits/prize.png'
import img4 from '../Fruits/best-seller.png'
import img6 from '../Fruits/cash.png'
import img7 from '../Fruits/best-seller.png'
const Home2 = () => {
  return (
    <div className="Home2">
      <div className="Wrapper" style={{marginBottom : '10rem'}}>
        <div className="Wrap1 wrap">
          <img
            width='100px'
            src={img6}
            alt=""
          />
          <a style={{textDecoration : 'none'}} href="/buyers"><h1>BUYERS</h1></a>
          <h2>Save Time</h2>
          <p>Reduce sourcing time by up to 95% Lower Costs Competitive pricing from a nationwide network of Sellers</p>
          {/* <h2>Lower Costs</h2>
          <p>Competitive pricing from a nationwide network of Sellers</p> */}
        </div>
        <div className="Wrap2 wrap">
          <img
            width='100px'
            src={img5}
            alt=""
          />
          <a style={{textDecoration : 'none'}} href="/sustainability"> <h1>SUSTAINABILITY</h1></a>
          <h2>Consumer demand</h2>
          <p>Sustainable products are growing faster Save the world Fight food waste & climate change</p>
          {/* <h2>Save the world</h2>
          <p>Fight food waste & climate change  </p> */}
        </div>
        <div className="Wrap3 wrap">
          <img
            width='100px'
            src={img7}
            alt=""
          />
          <a style={{textDecoration : 'none'}} href="/sellers"> <h1>SELLERS</h1></a>
          <h2>Earn more</h2>
          <p>Incremental revenue for produce you’ve already grown Sell more Access a nationwide network of buyers</p>
          {/* <h2>Sell more</h2>
          <p>Access a nationwide network of buyers  </p> */}
        </div>
        <div className="Wrap4 wrap">
          <img
            width='100px'
            src={img2}
            alt=""
          />
          <a href="/dataLogistics" style={{textDecoration : 'none'}}><h1>DATA & LOGISTICS</h1></a>
          <h2>Data intelligence</h2>
          <p>Market trends & documents in one place Convenient delivery End-to-end logistics available</p>
          {/* <h2>Convenient delivery</h2>
          <p>End-to-end logistics available </p> */}
        </div>
      </div>
    </div>
  );
};

export default Home2;
