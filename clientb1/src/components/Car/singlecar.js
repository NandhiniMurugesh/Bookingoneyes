import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Singlecar(){
    var {tid}=useParams()
    var {lid}=useParams()
    var transtype='car'
   
    const [transname, setTransname] = useState('')
    const [transreview1, setTransreview1] = useState('')
    const [transreview2, setTransreview2] = useState('')
    const [transreview3, setTransreview3] = useState('')
    const [transrating, setTransrating] = useState('')
    const [transimage1, setTransimage1] = useState('')
    const [transimage2, setTransimage2] = useState('')
    const [transimage3, setTransimage3] = useState('')
    const [transarrivaltime, setTransarrivaltime] = useState('')
    const [transdeparturetime, setTransdeparturetime] = useState('')
    const [transprice, settransprice] = useState('')
    const [transstart, setTransstart] = useState('')
    const [transdestination, setTransdestination] = useState('')
    const [transclass, setTransclass] = useState('')
    const [transcartype, setTranscartype] = useState('')
    const [transcarseater, setTranscarseater] = useState('')
   


    useEffect(() => {
        fetch(`http://localhost:2205/singlecar/${lid}/${transtype}/${tid}`)
            .then(res => res.json())
            .then((data) => {
                setTransname(data[0].transname)
                setTransreview1(data[0].transreview1)
                setTransreview2(data[0].transreview2)
                setTransreview3(data[0].transreview3)
                setTransrating(data[0].transrating)
                setTransimage1(data[0].transimage1)
                setTransimage2(data[0].transimage2)
                setTransimage3(data[0].transimage3)
                setTransarrivaltime(data[0].transarrivaltime)
                setTransdeparturetime(data[0].transdeparturetime)
                settransprice(data[0].transprice)
                setTransstart(data[0].transstart)
                setTransdestination(data[0].transdestination)
                setTransclass(data[0].transclass)
                setTranscartype(data[0].transcartype)
                setTranscarseater(data[0].transcarseater)
               


            })
    }, [])

    return(
        <>
         <nav className="navbar navbar-expand-lg navbg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Booking.com
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        </div>
      </nav>
           <div className='row  container-fluid'>
                    <div className='col-lg-4 singleimage '>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={transimage1}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={transimage2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={transimage3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 singlecard'>
                    <h2 class="flightname text-primary">Name:{transname}</h2>
                             <h2 class="flightstart">Start:{transstart}</h2>
                             <h2 class="flightdestination">Destination:{transdestination}</h2>                       
                                                 
                                <h2 className="text-warning">Rating and Review</h2>
                             <h4 class="flightdestination">{transreview1}</h4>                       

                             <h4 class="flightdestination">{transreview2}</h4>                       

                             <h4 class="flightdestination">{transreview3 }</h4>                       
                             <h4 class="flightdestination">{transrating }</h4>                       
                             <h2 class="flightdestination">{transcartype }</h2>                       
                             <h2 class="flightdestination">{transcarseater }</h2>                       
                             <h1 class="flightprice text-success">{transprice }</h1>                       
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
       </>
       );

}