import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import img1 from '../Fruits/wallpaperflare.com_wallpaper(15).jpg'
const About3 = () => {
  return (
    <div className="about3">
      {/* <p className="description">
        Online marketplace for surplus & imperfect produce Nationwide network of
        buyers & sellers 24*7 Food & beverage companies purchase on our
        marketplace, manufacturing organic product, helping farmers, animals and
        the planet. The Agrofam Network was developed in year _ by a handful of
        colleges as an independent, unbiased and objective farmer-driven
        information source. By sharing agrotech precision data with one another,
        they knew that all farmers could make better decisions on seeds and
        agrotech. They wanted transparency and to be treated fairly in the
        market. That’s how a dream became a reality — Agrofam®.
      </p> */}
        <div className="aboutDivImg">
          <p>AGROFAM</p>
        </div>
      <div className="div2" style={{paddingTop : '8rem'}}>
        <h1>Supply Chain and Tech</h1>
        <p className="para1">
          Agrofam is India's largest fresh produce supply chain company that is
          solving one of the toughest problems in the world through technology.
        </p>
        <p className="para2">
          We connect producers of food directly with retailers, restaurants, and
          service providers using in-house applications that drive end to end
          operations. Currently, our Supply Chain is equipped to move 1400
          tonnes of perishables from farms to businesses, every day, in less
          than 12 hours.
        </p>
      </div>
      <div className="div3">
        <div className="card1 active">
          {/* <img
            src={img1}
            alt=""
          /> */}
          <h1>The Problem</h1>
          <ol>
            <li>
              Farmers experience price risk, information asymmetry about demand,
              distribution inefficiency, and receive late payments.
            </li>
            <li>
              Retailers face problems like higher costs, low quality and
              unhygienic produce, high price volatility, and the everyday hassle
              of going to the market.
            </li>
            <li>
              The traditional Supply Chain is highly inefficient, unorganized,
              and has a high rate of food wastage.
            </li>
          </ol>
        </div>
        <div className="card2 active2">
          <img 
            src="https://ninjacart.in/uploads/gallery/3af2b7e2c36f0e1b339884ec14748487.png"
            alt=""
          />
          <h1>Our Solution</h1>
          <ol>
            <li>
              We eliminate intermediaries by taking control of the Supply Chain
              by using technology and analytics.
            </li>
            <li>
              We build reliable, cost-effective, and high-speed logistics and
              infrastructure to solve for inefficiencies in the Supply Chain.
            </li>
            <li>
              On one end, farmers get better prices and consistent demand, and
              on the other end, retailers receive fresh produce at competitive
              prices that are delivered to their doorstep
            </li>
          </ol>
        </div>
      </div>
      <div className="div4">
        <img width='450px' src="https://ninjacart.in/uploads/gallery/0646263251da437e2faa6d0ac2c412a7.png" alt="" />
        <div className="inner-div">
          <h1>The Road Ahead</h1>
          <p>Our vision is to build India's most efficient and largest Supply Chain platform and improve the lives of producers, businesses, and consumers in a meaningful manner.</p>
          <p>We are focused on making the Agrofam innovation more accessible to the most fragmented parts of society. We intend to leverage our strengths and resources to innovate for new product categories and customer segments while solving complex supply chain problems.</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About3;
