import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";


export function Car() {
    const [cardata, setCarData] = useState([]);
    var {lid}=useParams()
    var transtype = 'car'
    console.log(transtype)
    useEffect(() => {
        
      fetch(`http://localhost:2205/car/${lid}/${transtype}`)
        .then(storedata => storedata.json())
        .then(productdata => setCarData(productdata));
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
    <h3>Car List from {lid}</h3>
    <div className="row ">
        <div className="d-flex">
    <div className=" ">
    <div className=" col-lg-12  ">
    <div class="card text-bg-light mb-3" >
  <div class="card-header">Filter</div>
  <div class="card-body">
  
      <label for="customRange1" class="form-label">Price</label>
<input type="range" class="form-range-track-bg" id="customRange1"></input>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Hotel
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Resort
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Homestay
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Villa
  </label>
</div>
        </div>
        </div>
    
        </div>
        <div className="row">
        
    {
       
         cardata.map((value, index) =>{
            return(
             <>
             
            <div className="  col-lg-10 mt-5 ms-4" data-aos="fade-left">
                 <div class="card col-lg-12 " >
                   
  <div class="row g-0 ">
    <div class="col-md-4">
      <img src={value.transimage1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-4  ">
      <div class="card-body ">
      <h2 class="card-title">{value.transname}</h2>
                             <h6 class="card-title">{value.transtype}</h6>
                             <h4 class="card-title">{value.transstart}</h4>
                             <h2 class="card-title">{value.transdestination}</h2>
      </div>
      
    </div>
    <div class="col-md-4  ">
      <div class="card-body ">
      <h4 class="card-title">{value.transcartype}</h4>
                             <h6 class="card-title">{value.transcarseater}</h6>
                             <h4 class="card-title">{value.transprice}</h4>
                             <StarRatings
                                                        rating={value.transrating}
                                                        starDimension="20px"
                                                        starSpacing="10px"
                                                        starEmptyColor="grey"
                                                        starRatedColor="green"
                                                    />  
                                                                <Link to={`/singlecar/${value.lid}/${transtype}/${value.tid}`}><button className="btn btn-primary addspot ms-2" data-aos="fade-right">View More</button>
 </Link>    </div>
      
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
     </div>
     </div>
     </>
    );
}