import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Homelocation() {
    const [fetchdata, setFetchData] = useState([]);
   

    useEffect(() => {
        fetch("http://localhost:2205/locationdisplay" )
            .then(storedata => storedata.json())
            .then(productdata => setFetchData(productdata));
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
               <Link to={`/userlocation/${value.lid}`} >      <img src={value.locimage} class="card-img-top" alt="..."/> </Link>
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




