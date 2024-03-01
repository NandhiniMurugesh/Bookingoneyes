import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from 'react-animated-slider';


export function Userlocation() {
    const [hoteldata, setHotelData] = useState([]);
    var {lid}=useParams()
    useEffect(() => {
      fetch(`http://localhost:2205/hoteldisplay/${lid}`)
        .then(storedata => storedata.json())
        .then(productdata => setHotelData(productdata));
    }, []);
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
<h3>Hotel List from {lid}</h3>
<div className="row">
    
{
     
     hoteldata.map((value, index) =>{
        return(
         <>
        
        <div className="d-flex  col-lg-4 mt-5 ms-4" data-aos="fade-left">
             <div class="card  " >
           <Link to={`/singlehotel/${value.hid}`}  >   <img src={value.hotelimage1} class="card-img-top" alt="..."/></Link> 
                     <div class="card-body">
                         <h2 class="card-title">{value.hotelname}</h2>
                        
                        
                     </div>
             </div>
             </div>
 
 
           
         </>
        );
     }
     )
 }
 
 </div>
      <div className='seperator'></div>
<h3>Spot List from {lid}</h3>
<div className="row">
{
     
     spotdata.map((value, index) =>{
        return(
         <>
        
        <div className="d-flex  col-lg-4 mt-5 ms-4" data-aos="fade-left">
             <div class="card  " >
                 <img src={value.spotimage1} class="card-img-top" alt="..."/>
                     <div class="card-body">
                         <h2 class="card-title">{value.spotname}</h2>
                        
                        
                     </div>
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
