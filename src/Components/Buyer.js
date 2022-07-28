import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import BuyerBody from './BuyerBody'
import img1 from '../Fruits/efficient.png'
import img2 from '../Fruits/save-energy.png'
import img3 from '../Fruits/analytics.png'
const Buyer = () => {
  return (
    <div className='BuyerDiv' style={{paddingTop : '3rem'}}>
      {/* <BuyerBody></BuyerBody> */}
      <div className="buyerDiv">
        <div className="buyerDiv1">
          <div className="Card1">
            <img width='101px' src={img1} alt="" />
            <h3>DRIVE OPERATIONAL EFFICIENCIES</h3>
            <p>Quickly see what produce is available and at what price. Save up to 95% of your time sourcing organic and conventional produce. Fulfill contract and spot buy needs.</p>
          </div>
          <div className="Card2">
            <img width='101px' src={img2} alt="" />
            <h3>BOTTOM-LINE IMPROVEMENTS</h3>
            <p>Competitive pricing from a nationwide network of top-tier growers in one central online marketplace. </p>
          </div>
          <div className="Card3">
            <img width='101px' src={img3} alt="" />
            <h3>BOTTOM-LINE IMPROVEMENTS</h3>
            <p>Reduce the environmental carbon footprint of your supply chain by using imperfect and surplus produce. Source within seconds from Full Harvest.</p>
          </div>
        </div>
      </div>
      <button>Try Now</button>
      <div className="bigDiv">
        <p className='buyerDesc'>"Agrofam allows us to find the largest order for the best price. Being able to see that balance and selection on one screen is very helpful."</p>
        <p className='author'>- Production Supply Manager, INDIA</p>
      </div>
      <p className='Notice'>For a complete list of all the commodities that Agrofam carries, sign up and check out our marketplace.</p>
      <Footer></Footer>
    </div>
  )
}

export default Buyer