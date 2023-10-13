import React from'react';
import banner from './sli1.webp';
import bann from './sli2.webp';
import banne from './sli3.webp';
import bank from './bank.png';
import box1 from './box1.webp';
import box2 from './box2.webp';
import box3 from './box3.webp';
function Banner(){
    return(
        <>
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bann} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">ins
      <img src={banne} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banner} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     <div className='row'>
        <div className='col-md-12'><img class='a'src={bank}/></div>
  
        <div className='col-md-4'><img class='a'src={box1}/></div>
    
  
        <div className='col-md-4'><img class='a'src={box2}/></div>
   
    
        <div className='col-md-4'><img class='a'src={box3}/></div>
   
     </div>
     </>
    
        );
    }
    
    
    export default Banner;