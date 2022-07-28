import React from "react";
import logo2 from '../Fruits/Logopit_1653916147364.png'
const Footer2 = () => {
  return (
    <div>
      <div style={{ margin: "2rem 15rem", display: "flex" , alignItems : 'center' }}>
        <div
          id="divFoot1"
          style={{
            display: "flex",
            marginRight: "10rem",
            flexDirection: "column",
          }}
        >
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/buyers">Buyers</a>
          <a href="/farmers">Farmers</a>
          <a href="/dataLogistics">Logistics</a>
        </div>
        <div
          style={{
            display: "flex",
            marginRight: "20rem",
            flexDirection: "column",
          }}
          id="divFoot2"
        >
          <h4>Resources</h4>
          <a href="/about">Blog</a>
          <a href="/buyers">FAQ</a>
          <a href="/farmers">Media</a>
          <a href="/dataLogistics">Contact Us</a>
        </div>
        <img src={logo2} width='200px' alt="" />
      </div>
      <hr style={{ width: "68vw", color: "gray", opacity: "0.2" }} />
      <div id="FooterDiv1" style={{margin : '2rem'}}>
        <div id="innerFootDiv1" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Privacy Policy</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <div id="innerFootDiv2" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Terms of Use</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <div id="innerFootDiv3" style={{display : 'flex' , alignItems : 'center'}}>
          <a href="">Refund Policy</a>
          <div style={{width : '0.09rem' , height : '1rem' , background  : 'gray' , opacity : '0.5'}}></div>
        </div>
        <span style={{marginLeft : '1rem'}}>© 2022 Agrofam Private Limited</span>
      </div>
    </div>
  );
};

export default Footer2;
