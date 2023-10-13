import React from 'react'
import logo from './logo3.svg'
import logo2 from './logo2.jpg'
import img1 from './img1.webp'
import img2 from './img2.webp'
import img3 from './img3.webp'
import img4 from './img4.webp'
import img5 from './img5.webp'
import img6 from './img6.webp'
import img7 from './img7.webp'
import img8 from './img8.webp'
import img9 from './img9.webp'
import img10 from './img10.webp'


function  Flipkart(){
    return(
        <>
        <div className='col-md-2 float-start'>
                <img src={logo} width='150'/>
                <img src={logo2} width='150'/>
            </div>
            <div class="col-md-6">
                <button class="icon">
                <i class="fa-solid fa-magnifying-glass"></i></button>
                <input type='text' className='searchbox float-end' placeholder='Search for Products,Brands and More'/>
                
            </div>
            <div className='col-md-4 log '>
                <ul>
                    <li><i class="fa-solid fa-store"></i>Become a Seller</li>
                    <li><i class="fa-regular fa-user"></i>Sign in</li>
                    <li><i class="fa-solid fa-cart-shopping"></i>cart</li>
                    <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
                </ul>
            </div>
            <div className='row'>  
            <div className='col-md-1'>
               </div>
               <div className='col-md-1'>
                <img src={img1}/>
                <p>Top Offers</p>
               </div>
               <div className='col-md-1'>
                <img src={img2}/>
                <p>Mobiles</p>
               </div>
               <div className='col-md-1'>
                <img src={img3}/>
                <p>Electronics</p>
               </div>
               <div className='col-md-1'>
                <img src={img4}/>
                <p>Appliences</p>
               </div>
               <div className='col-md-1'>
                <img src={img5}/>
                <p>Fashion</p>
               </div>
               <div className='col-md-1'>
                <img src={img6}/>
                <p>Beauty</p>
               </div>
               <div className='col-md-1'>
                <img src={img7}/>
                <p>Home</p>
               </div>
               <div className='col-md-1'>
                <img src={img8}/>
                <p>furniture</p>
               </div>
               <div className='col-md-1'>
                <img src={img9}/>
                <p>Flights</p>
               </div>
               <div className='col-md-1'>
                <img src={img10}/>
                <p>Grocery</p>
               </div>
                 
            </div>
        </>
       
    )
}
 
export default Flipkart;