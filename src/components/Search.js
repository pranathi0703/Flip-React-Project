import React from 'react'
export default function searchbar2(){
    return(
        <>
        <div className='row'>
            <div className='col-md-8 float-end'>
               <button class="float-start button1">
               <i class="fa-solid fa-magnifying-glass"></i>
               </button>
            <input type='text' className='searchbox float-end' placeholder='Search..'/>
            </div>     
        </div>
        </>
    )
}