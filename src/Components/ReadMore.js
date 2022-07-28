import React from "react";
// import img1 from "../Fruits/Fruit2.png";
// import img2 from "../Fruits/agriculture-7177221.jpg";
// import img1 from './About us/source/grapes-1844745.jpg'
import img1 from '../Fruits/laptop-3781377(1).jpg'
import img2 from './About us/source/team.jpg'
import img3 from './About us/source/saurabh sir-modified.png'
import img4 from './About us/source/sushilsir-modified.png'
import img5 from './About us/source/Anandita-modified.png'
import img6 from './About us/source/manthan-modified.png'
import img7 from './About us/source/ankush-modified.png'
// import img1 from './About us/source/2.jpg'

const ReadMore = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div class="banner">
		<img class="banner_img" src={img1} />
		<div class="img_text">
			<p class="img_texts" style={{color : 'white'}}><details> <summary>We are on a mission....</summary><br />to produce pure organic Fruits and vegetables <br />all over India and save the people<br /> from eating harmful chemicals injected fruits and vegetables.</details> </p>
		</div>
	</div>
	<br />
	<br />
	<br />
	<div class="down_text down_textDiv">
		<img class="img_float" src={img2} />
		<p class="down_text">Nowadays we often get to hear about the use of the harmful chemical in our fruits and vegetables, We don't know the vegetables we are eating in our daily lives are healthy or not, We are least bothered to know about them, The food we are consuming is made up of fatal chemicals.<br /> 

Farmers are using these chemicals to promote the artificial beauty of their vegetables so that they can attract customers, without taking care of the harmful side effects of those deadly chemicals. The chemical causes various types of illness among the consumers including mental impairment and even cancer. Some of the lists of the deadly diseases caused by consuming chemical injected food are<br />
<ul style={{marginLeft : '1rem' , marginTop : '1rem'}}>
  <li>Reproductive problems</li>
  <li>Respiratory problems</li>
  <li>Neurological damage</li>
</ul>
<br />
<br />
<br />
{/* <span class="size">Who are we?  What do we do?</span><br /> */}
<span class="green size">What AGROFAM does?</span>
<br />
Agrofam Connects with thousand of farmers and visits each of them personally, Then we raise efforts to educate the farmers to grow pure organic vegetables, not only this we work with farmers to teach them the proper methods of cultivation of suitable vegetables and fruits for that particular region we check the quality of the soil with the help of special types of detectors and sensors which helps us to know the need of the soil and let us know the requirements need to enrich the soil with more minerals and nutrients.
<br />
By doing this we promote a purely organic and healthy way of growing Crops that doesn't cause any harm and will boost the immunity of the consumers.
<br />
Connecting with agrofam will help farmers to sell their products at a genuine price, and produce better earnings and consumers will get the goods at the lowest price with full nutrients in them.
</p>
	</div>
	<div class="gray">
		
		<p class="last">Meet our Team</p>
		<p class="light_green">Capable team with deep technology, market, and <br /> execution expertise</p>
		<div class="container">
			<div class="box"><img src={img3} height="200px" width="200px" /></div>
			<div class="box"><img src={img4} height="200px" width="200px" /></div>
			<div class="box"><img src={img5} height="200px" width="200px" /></div>
			<div class="box"><img src={img6} height="200px" width="200px" /></div>
			<div class="box"><img src={img7} height="200px" width="200px" /></div>
		</div>

	</div>
    </div>
  );
};

export default ReadMore;
