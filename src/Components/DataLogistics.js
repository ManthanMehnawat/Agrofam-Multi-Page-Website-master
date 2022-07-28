import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import img10 from './Seller Content/source/efficiency.png'
import img11 from './Seller Content/source/piggy.png'
import img12 from './Seller Content/source/bottle.png'
import img13 from './Seller Content/source/ads.png'
import img14 from './Seller Content/source/magni.png'
import img15 from './Seller Content/source/time.png'
import img16 from './Seller Content/source/truck.png'
import img17 from './Seller Content/source/ppl.png'
const DataLogistics = () => {
  return (
    <div className='dataLogistics' style={{paddingTop : '0rem'}}>
        <div classNameName="sellerDiv" style={{paddingTop : '4rem'}}>
      <div className="Seller-container">
		<div className="box"><img src={img10} height="100px" width="100px" /><br /><span> Promotes operational efficiency and accuracy</span><p className="paraSell">Quickly see the product that are available here. Get up to 50% discount on organic items. We provide pure organic items and quality checked Products</p></div>
		<div className="box"><img src={img11} height="100px" width="100px" /><br /><span>Fundamental Exponential improvements</span><p className="paraSell">Profitable Pricing from all over India . With more than thousand of farmer working on needs of the market , and producing organic fruites nad veggies.</p></div>
		<div className="box"><img src={img12} height="100px" width="100px" /><br /><span>supports environment Friendly goals</span><p className="paraSell">Reduces the amount of carbon-dioxide, promotes greenery and brings surplus. </p></div>
	</div> 
	<div style={{marginTop : '6rem'}} className="center"><button className="DataLogBtn">Try Now</button></div>
	<br />
	<br />
	<br />
	<br />
	<div className="center"><p style={{fontSize : '2rem' , opacity : '0.5'}} className="Agrofam paraSell">Agrofam is an end-to-end solution for efficiently sourcing sustainable produce.</p></div>
    <br />
    <br />
    <div className="greenbox">
    <div className="center"><img className="image" src={img13} /></div>
<div className="empty"><p className="a">"Agrofam allows us to find the largest order for the best price. Being able to see that balance and selection on one screen is very helpful."</p></div>
</div>
<br />
<br />
<br />
<div className="center">
<div className="container1 DataLogDiv">
		{/* <div className="box1"><img src={img14} height="100px" width="100px" /><br /><p className="gray gray2 paraSell">AGRONOMICS AND ANALYTICS</p><p>Documents at your fingertips.Centralized portal for certification compliance documents, sales orders, and invoice history all in one place. </p></div>  */}
		<div className="box1 box1DataLog"><img src={img15} height="100px" width="100px" /><br /><p className="paraSell gray2 gray">METRICS DASHBOARD</p><p style={{color:"black"}}>  Data-driven decision making. Purchasing data and trends help you make smarter decisions. See pricing and purchase history metrics at-a-glance. </p></div>
		<div className="box1 box1DataLog"><img src={img16} height="100px" width="100px" /><br /><p className="paraSell gray2 gray">END-TO-END LOGISTIC SERVICE</p><p>Best-in-className delivery. Agrofam offers logistics with on-time and in-full deliveries. </p></div>
		<div className="box1 box1DataLog"><img src={img17} height="100px" width="100px" /><br /><p className="paraSell gray2 gray">CUSTOMER SUPPORT</p><p> We are here for you! Dedicated Account Managers are on call to assist you through every stage of the purchasing process</p></div>
	</div> 
	<br />
	<div className="center"><button style={{marginTop : '3rem'}} className="DataLogBtn">Try Now</button></div>
	<br />
	<p style={{marginBottom : '2rem' , fontSize : '1.2rem' , fontWeight : '700'}} className="gry paraSell">For a complete list of all the commodities that Agrofam carries, sign up and check out our marketplace.</p>

</div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default DataLogistics