import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import About3 from "./Components/About3";
import Buyer from "./Components/Buyer";
import BuyerBody from "./Components/BuyerBody";
import DataLogistics from "./Components/DataLogistics";
import Home from "./Components/Home";
import "./Components/index.css";
import Navbar from "./Components/Navbar";
import Seller from "./Components/Seller";
import SellerBody from "./Components/SellerBody";
import LoginSignup from "./Components/LoginSignup";
import GetStarted from "./Components/GetStarted";
import Projects from "./Components/Projects";
import Sustainability from "./Components/Sustainability";
import ReadMore from "./Components/ReadMore";
import Project1 from "./Components/Project1";
import Project2 from './Components/Project2';
import Project3 from "./Components/Project3";
import Countrystatecity from "./Components/Countrystatecity";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<About />}>
          {" "}
        </Route>
        <Route path="/buyers" element={<Buyer />} />
        <Route path="/about" element={<About3 />}></Route>
        {/* <Route path="/sellers" element = {<SellerBody />} /> */}
        <Route path="/farmers" element={<Seller />}></Route>
        <Route path="/dataLogistics" element={<DataLogistics />}></Route>
        <Route path="/letsConnect" element={<LoginSignup />}></Route>
        <Route path="/getstarted" element={<GetStarted />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/sustainability" element={<Sustainability />}></Route>
        <Route path="/readMore" element={<ReadMore />}></Route>
        <Route path="/project1" element={<Project1 />}></Route>
      <Route path="/project2" element={<Project2 />}></Route>
      <Route path="/project3" element={<Project3 />}></Route>
      <Route path="/countrystatecity" element={<Countrystatecity />}></Route>
      </Routes>
    </div>
  );
}

export default App;
