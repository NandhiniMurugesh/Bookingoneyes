import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Cardisplay() {
    const [fetchdata, setFetchData] = useState([]);
    const [transdata, setTransData] = useState([]);
   var {lid}= useParams()
   var transtype = 'car'

    useEffect(() => {
        fetch("http://localhost:2205/locationdisplay" )
            .then(storedata => storedata.json())
            .then(productdata => setFetchData(productdata));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:2205/transportdisplay/${lid}/${transtype}`)
            .then(storedata => storedata.json())
            .then(proddata => setTransData(proddata));
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
        <div className="row" >
            {  
             fetchdata.map((value, index) =>

             <>
             <div className="d-flex  col-lg-4 mt-5 ms-4" data-aos="fade-left">
                  <div class="card carddetail " >
               <Link to={`/car/${value.lid}/${transtype}`}>      <img src={value.locimage} class="card-img-top" alt="..."/> </Link>
                          <div class="card-body">
                              <h2 class="card-title">{value.locname}</h2>
                           
                              
                            </div>
                  </div>
                  </div>
      
      
                
              </>
             
          )
      }

            

        </div>
     </>
    );
}




