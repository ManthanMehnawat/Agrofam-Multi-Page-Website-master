import React from "react";
import address from "../Images2/pin.png";
import call from "../Images2/call.png";
import email from "../Images2/email.png";
import logo from "../Images2/updated logo.png";
import logo2 from '../Fruits/Logopit_1654006397769 white.png'
export default function Footer() {
  return (
    <footer>
        <div className="row">
            <div className="col">
                    <img src={logo2} width="120px"  className="logo" />
                    <p className="para">Improving the performance of the food system is central to reaching the Sustainable Development Goals
                        Expanding digital opportunity for all, including farmers and agribusiness, will improve the food system outcomes in both rural and urban areas
                        Use of digital technology can help reduce costs, help farmers make more precise decisions, and improve access to information, knowledge and markets</p>
            </div>
            {/* <div style={{width : '0.1vw' , height : '25rem' , background : 'gray'}}></div> */}
            <div className="col">
                <h3>Office<div className="underline"><span></span></div></h3>
                <p>622</p>
                <p>new sainik colony kankarkhera</p>
                <p>Meerut, Uttar Pradesh 250001</p>
                <p className="email-id">agrofam@gmail.com</p>
                <h4>+911234567890</h4>
            </div>
            <div className="col">
                <h3>Company<div className="underline"><span></span></div></h3>
                <u1>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Contacts</a></li>
                </u1>
            </div>
            {/* <div style={{width : '0.1vw' , height : '25rem' , background : 'gray' , marginRight : '5rem'}}></div> */}
            <div className="col">
                <h3>Join Us now<div className="underline"><span></span></div></h3>
                <form>
                    <input type="email" placeholder="Enter your email id" required></input> 
                </form>
                <div className="footeremailbtn">
                    <button type="submit" className="fas">Join</button>
                </div>
            </div>
            {/* <div className="social">
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
            </div> */}
        </div>
        <hr />
        <p className="copyright">Agrofam &copy; 2022 - All Rights Reserved</p>
    </footer>
  )
}
