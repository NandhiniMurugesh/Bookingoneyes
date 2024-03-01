import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Singlehotel() {
    var { hid } = useParams()
    const [hotelname, setHotelname] = useState('')
    const [hotelroom, setHotelroom] = useState('')
    const [hotelroomtype, setHotelroomtype] = useState('')
    const [lid, setlid] = useState('')
    const [hotelimage1, setHotelimage1] = useState('')
    const [hotelimage2, setHotelimage2] = useState('')
    const [hotelimage3, setHotelimage3] = useState('')
    const [hoteloriginalprice, setHoteloriginalprice] = useState('')
    const [hoteldiscprice, setHoteldiscprice] = useState('')
    const [hotelamenities1, setHotelamenities1] = useState('')
    const [hotelamenities2, setHotelamenities2] = useState('')
    const [hotelamenities3, setHotelamenities3] = useState('')
    const [hotelrating, setHotelrating] = useState('')
    const [hotelreview1, setHotelreview1] = useState('')
    const [hotelreview2, setHotelreview2] = useState('')
    const [hotelreview3, setHotelreview3] = useState('')
    const [hotelbedtype, setHotelbedtype] = useState('')
    const [hoteldistance, setHoteldistance] = useState('')
   
   
   


    useEffect(() => {
        fetch("http://localhost:2205/singlehotel/" + hid)
            .then(res => res.json())
            .then((data) => {
                setHotelname(data[0].hotelname)
                setHotelroom(data[0].hotelroom)
                setHotelroomtype(data[0].hotelroomtype)
                setlid(data[0].lid)
                setHotelimage1(data[0].hotelimage1)
                setHotelimage2(data[0].hotelimage2)
                setHotelimage3(data[0].hotelimage3)
                setHoteloriginalprice(data[0].hoteloriginalprice)
                setHoteldiscprice(data[0].hoteldiscprice)
                setHotelamenities1(data[0].hotelamenities1)
                setHotelamenities2(data[0].hotelamenities2)
                setHotelamenities3(data[0].hotelamenities3)
                setHotelrating(data[0].hotelrating)
                setHotelreview1(data[0].hotelreview1)
                setHotelreview2(data[0].hotelreview2)
                setHotelreview3(data[0].hotelreview3)
                setHotelbedtype(data[0].hotelbedtype)
                setHoteldistance(data[0].hoteldistance)
                             


            })
    }, []);
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
      <img src={hotelimage1}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={hotelimage2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={hotelimage3} class="d-block w-100" alt="..."/>
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
                    <h2 class="hotelname text-primary">Name:{hotelname}</h2>
                             <h2 class="hotelstart">Hotel type:{hotelroomtype}</h2>
                             <h2 class="hoteldestination">Room count:{hotelroom}</h2>                       
                             <h2 class="hoteldestination">Bed type:{hotelbedtype}</h2>                       
                             <h2 className="text-warning">Hotel Amenities</h2>

                         
                             <h4 class="hoteldestination">{hotelamenities1}</h4>                       

<h4 class="hoteldestination">{hotelamenities2}</h4>                       

<h4 class="hoteldestination">{hotelamenities3 }</h4>                       
                                <h2 className="text-warning">Rating and Review</h2>
                             <h4 class="hoteldestination">{hotelreview1}</h4>                       

                             <h4 class="hoteldestination">{hotelreview2}</h4>                       

                             <h4 class="hoteldestination">{hotelreview3 }</h4>                       
                             <h4 class="hoteldestination">{hotelrating }</h4>                       
                                                  
                             <h1 class="hoteloprice text-danger"><s>{hoteloriginalprice }</s></h1>                       
                             <h1 class="hoteldprice text-success">{hoteldiscprice }</h1>                       
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Hotel Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>

        </>
    );
}