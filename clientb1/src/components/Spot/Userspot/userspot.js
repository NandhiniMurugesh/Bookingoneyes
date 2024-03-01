import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from 'react-animated-slider';
import StarRatings from "react-star-ratings";


export function Userspot() {
   
    const [spotdata, setSpotData] = useState([]);
    var {lid}=useParams()
    useEffect(() => {
      fetch("http://localhost:2205/spotdisplay/"+lid)
        .then(storedata => storedata.json())
        .then(proddata => setSpotData(proddata));
    }, []);
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Booking.com
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        </div>
      </nav>
     
      <div className='seperator'></div>
<h3>Spot List from {lid}</h3>
<div className="row">
{
     
     spotdata.map((value, index) =>{
        return(
         <>
        
         
        <div className="  col-lg-8 mt-5 ms-4" data-aos="fade-left">
                 <div class="card col-lg-12 " >
                   

{/* <div class="card mb-3" > */}
  <div class="row g-0">
    <div class="col-lg-4 d-flex">
   <div>  <img src={value.spotimage1} class="img-fluid rounded-start" alt="..."/></div> 
   <div>   <img src={value.spotimage2} class="img-fluid rounded-start" alt="..."/></div> 
    <div>  <img src={value.spotimage3} class="img-fluid rounded-start" alt="..."/></div> 
    </div>
    <div class="col-lg-5 d-flex">
      <div class="card-body ">
      <h2 class="card-title">{value.spotname}</h2>
                             
      </div>
      <div class="col-lg-5">
      <StarRatings
                                                        rating={value.spotrating}
                                                        starDimension="20px"
                                                        starSpacing="10px"
                                                        starEmptyColor="grey"
                                                        starRatedColor="green"
                                                    />
                                                   
      </div>
    </div>
  </div>
{/* </div> */}
                 </div>
                 </div>
 
 
           
         </>
        );
     }
     )
 }
 </div>
     
    </>
  );
}
