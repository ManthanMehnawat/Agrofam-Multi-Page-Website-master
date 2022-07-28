import React from 'react';
import img1 from '../Images2/4.png'
import img2 from '../Images2/3.png';
import img3 from '../Images2/5.png'
import img4 from '../Images2/6.png'
import img5 from '../Images2/7.png'
import img6 from '../Images2/8.png'

const Cards2 = () => {
        const Img1 = document.getElementById('Card2img1');
        const Card1 = document.getElementById('Card1');
        const span = document.getElementById('Card2Span');
        const Card1Items1 = document.querySelectorAll('#Card2Menu #Card2MenuItem1')

        const Img2 = document.getElementById('Card2img2');
        const Card2 = document.getElementById('Card2');
        const span2 = document.getElementById('Card2Span2');
        const Card1Items2 = document.querySelectorAll('#Card2Menu #Card2MenuItem2')

        const Img3 = document.getElementById('Card2img3');
        const Card3 = document.getElementById('Card3');
        const span3 = document.getElementById('Card2Span3');
        const Card1Items3 = document.querySelectorAll('#Card2Menu #Card2MenuItem3')
        function handleEnter(){
            // alert('hello');
            Img1.src = `${img1}`;
            Card1.style.backgroundColor = '#66bb6a';
            span.style.color = 'white';
            for(let i=0; i < Card1Items1.length ; i++){
                Card1Items1[i].style.color = 'white';
            }
        }
        function handleLeave(){
            Img1.src = `${img2}`;
            for(let i=0; i < Card1Items1.length ; i++){
                Card1Items1[i].style.color = 'black';
            }
            Card1.style.backgroundColor = '#fff';
            span.style.color = 'black';
        }
        function handleEnter2(){
            Img2.src = `${img4}`;
            Card2.style.backgroundColor = '#66bb6a'
            span2.style.color = 'white';
            for(let i=0; i < Card1Items2.length ; i++){
                Card1Items2[i].style.color = 'white';
            }
        }
        function handleLeave2(){
            Img2.src = `${img3}`;
            Card2.style.backgroundColor = '#fff';
            span2.style.color = 'black';
            for(let i=0; i < Card1Items2.length ; i++){
                Card1Items2[i].style.color = 'black';
            }
        }
        function handleEnter3(){
            Img3.src = `${img6}`;
            Card3.style.backgroundColor = '#66bb6a'
            span3.style.color = 'white';
            for(let i=0; i < Card1Items3.length ; i++){
                Card1Items3[i].style.color = 'white';
            }
        }
        function handleLeave3(){
            Img3.src = `${img5}`;
            Card3.style.backgroundColor = '#fff';
            span3.style.color = 'black';
            for(let i=0; i < Card1Items3.length ; i++){
                Card1Items3[i].style.color = 'black';
            }
        }
  return (
    <div style={{paddingTop : '4rem'}}>
        <div className="Card2Div">
            <h1 style={{textAlign : 'center'}}>Creating opportunities for everyone</h1>
            <p style={{textAlign : 'center'}}>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>
            <div className="Card2Container">
                <div className="Card1" id='Card1' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <img className='Card2img1' id='Card2img1' src={img1} width="80px" alt="" />
                    <span className='Card2Span' id='Card2Span'>Benefits for farmers</span>
                    <ul className='Card2Menu' id='Card2Menu'>
                        <li className='Card2MenuItem1' id='Card2MenuItem1'>20% more revenue</li>
                        <li className='Card2MenuItem1' id='Card2MenuItem1'>One-stop-sale</li>
                        <li className='Card2MenuItem1' id='Card2MenuItem1'>Payment in 24 hours</li>
                        <li className='Card2MenuItem1' id='Card2MenuItem1'>Transparent weighing</li>
                    </ul>
                </div>
                <div className="Card2" id='Card2' onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
                    <img className='Card2img2' id='Card2img2' src={img3} width="80px" alt="" />
                    <span className='Card2Span2' id='Card2Span2'>Convenience for retailers</span>
                    <ul className='Card2Menu' id='Card2Menu'>
                        <li className='Card2MenuItem2' id='Card2MenuItem2'>Competitive pricing</li>
                        <li className='Card2MenuItem2' id='Card2MenuItem2'>Doorstep delivery</li>
                        <li className='Card2MenuItem2' id='Card2MenuItem2'>High quality graded produce</li>
                        <li className='Card2MenuItem2' id='Card2MenuItem2'>Convenient & time saving</li>
                    </ul>
                </div>
                <div className="Card3" id='Card3' onMouseEnter={handleEnter3} onMouseLeave={handleLeave3}>
                    <img className='Card2img3' id='Card2img3' src={img6} width="80px" alt="" />
                    <span className='Card2Span3' id='Card2Span3'>Savings for consumers</span>
                    <ul className='Card2Menu' id='Card2Menu'>
                        <li className='Card2MenuItem3' id='Card2MenuItem3'>Hygienically handled produce</li>
                        <li className='Card2MenuItem3' id='Card2MenuItem3'><p style={{fontSize : '14px'}}>100% traceable to farm -</p><p style={{fontSize : '14px'}}>Improves food safety</p> </li>
                        <li className='Card2MenuItem3' id='Card2MenuItem3'>High quality graded produce</li>
                        <li className='Card2MenuItem3' id='Card2MenuItem3'>Better quality</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards2