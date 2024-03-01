import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Addhotel() {
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
    const [hotelamenties1, setHotelamenities1] = useState('')
    const [hotelamenities2, setHotelamenities2] = useState('')
    const [hotelamenities3, setHotelamenities3] = useState('')
    const [hotelrating, setHotelrating] = useState('')
    const [hotelreview1, setHotelreview1] = useState('')
    const [hotelreview2, setHotelreview2] = useState('')
    const [hotelreview3, setHotelreview3] = useState('')
    const [hotelbedtype, setHotelbedtype] = useState('')
    const [hoteldistance, setHoteldistance] = useState('')
   
   
   


    useEffect(() => {
        fetch("http://localhost:2205/addhotel/" + hid)
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
    }, [])
    function addhotel(event) {
        event.preventDefault()
        var hotelname = document.getElementById("hotelname").value;
        var hotelroom = document.getElementById("hotelroom").value;
        var hotelroomtype = document.getElementById("hotelroomtype").value;
        var lid = document.getElementById("lid").value;
        var hotelimage1 = document.getElementById("hotelimage1").value;
        var hotelimage2 = document.getElementById("hotelimage2").value;
        var hotelimage3 = document.getElementById("hotelimage3").value;
        var hoteloriginalprice = document.getElementById("hoteloriginalprice").value;
        var hoteldiscprice = document.getElementById("hoteldiscprice").value;
        var hotelamenities1 = document.getElementById("hotelamenities1").value;
        var hotelamenities2 = document.getElementById("hotelamenities2").value;
        var hotelamenities3 = document.getElementById("hotelamenities3").value;
        var hotelrating = document.getElementById("hotelrating").value;
        var hotelreview1 = document.getElementById("hotelreview1").value;
        var hotelreview2 = document.getElementById("hotelreview2").value;
        var hotelreview3 = document.getElementById("hotelreview3").value;
       var hotelbedtype = document.getElementById("hotelbedtype").value;
        var hoteldistance = document.getElementById("hoteldistance").value;
        
        var key = {
           hotelname:hotelname,
           hotelroom:hotelroom,
           hotelroomtype:hotelroomtype,
           lid:lid,
           hotelimage1:hotelimage1,
           hotelimage2:hotelimage2,
           hotelimage3:hotelimage3,
           hoteloriginalprice:hoteloriginalprice,
           hoteldiscprice:hoteldiscprice,
           hotelamenities1:hotelamenities1,
           hotelamenities2:hotelamenities2,
           hotelamenities3:hotelamenities3,
           hotelrating:hotelrating,
           hotelreview1:hotelreview1,
           hotelreview2:hotelreview2,
           hotelreview3:hotelreview3,
           hotelbedtype:hotelbedtype,
           hoteldistance:hoteldistance,
          
        

        }
        if (hotelname == "") {
            alert("Enter the Hotel Name")
        }

        else if (hotelroom == "") {
            alert("Enter the Room Count ")

        }
        else if (hotelroomtype == "") {
            alert("Enter the Room Type")

        }
       
       
       
        else if (lid == "") {
            alert("Enter the Hotel Location Id ")

        }
        else if (hotelimage1 == "") {
            alert("Enter the Hotel Image Url 1")

        }
       
        else if (hotelimage2 == "") {
            alert("Enter the Hotel Image Url 2 ")

        }
        else if (hotelimage3 == "") {
            alert("Enter the Hotel Image Url 3")

        }
       
        else if (hoteloriginalprice == "") {
            alert("Enter the Original price ")

        }
        else if (hoteldiscprice == "") {
            alert("Enter the Discount price")

        }
       
        else if (hotelamenities1 == "") {
            alert("Enter the Amenities1 ")

        }
        else if (hotelamenities2 == "") {
            alert("Enter the Amenities 2")

        }
       
        else if (hotelamenities3 == "") {
            alert("Enter the Amenities 3")

        }
        else if (hotelrating == "") {
            alert("Enter the Rating")

        }
       
        else if (hotelreview1 == "") {
            alert("Enter the Hotel Review1 ")

        }
        else if (hotelreview2 == "") {
            alert("Enter the Hotel Review2")

        }
       
        else if (hotelreview3 == "") {
            alert("Enter the Hotel Review3 ")

        }
        else if (hotelbedtype == "") {
            alert("Enter the Hotel Bedtype")

        }
       
        else if (hoteldistance == "") {
            alert("Enter the Hotel Distance  ")

        }
       

        else {
            axios.post("http://localhost:2205/addhotel/", key)
                .then((addhotel) => {
                    if (addhotel.data.status === 'error') {
                        alert(addhotel)
                       
                        alert("Hotel not added")
                        console.log("not_added")

                    }
                    else if (addhotel.data.status === 'success') {
                        
                        alert("Hotel added Successfully!")
                        console.log("success")
                        window.location.href=`/adminhotel`

                    }

                })
        }
    }
    return (
        <>
            <div className="addhotelpage">
                <div className="addhotel container text-center w-75 p-5">
                    <form onSubmit={addhotel} className="needs-validation">
                        <h1 className="mb-4">Add Transport</h1>

                        <div className="mb-3">
                            <label htmlFor="hotelname" className="form-label">
                                Enter the Hotel Name
                            </label>
                            <input type="text" className="form-control" id="hotelname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelroom" className="form-label">
                                Enter the Hotel room
                            </label>
                            <input type="text" className="form-control" id="hotelroom" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelroomtype" className="form-label">
                                Enter the Hotel Roomtype
                            </label>
                            <input type="text" className="form-control" placeholder="single/double/Luxury suite/Business suite" id="hotelroomtype" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lid" className="form-label">
                                Enter the Hotel Location Id
                            </label>
                            <input type="text" className="form-control" id="lid" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelimage1" className="form-label">
                                Enter the Hotel Image 1 URL
                            </label>
                            <input type="text" className="form-control" id="hotelimage1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelimage2" className="form-label">
                                Enter the Hotel Image 2 URL
                            </label>
                            <input type="text" className="form-control" id="hotelimage2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelimage3" className="form-label">
                                Enter the Hotel Image 3 URL
                            </label>
                            <input type="text" className="form-control" id="hotelimage3" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hoteloriginalprice" className="form-label">
                                Enter the Hotel Original Price
                            </label>
                            <input type="text" className="form-control" id="hoteloriginalprice" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hoteldiscprice" className="form-label">
                                Enter the Hotel Discount price
                            </label>
                            <input type="text" className="form-control" id="hoteldiscprice" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelamenities1" className="form-label">
                                Enter the Hotel Amenities 1
                            </label>
                            <input type="text" className="form-control" id="hotelamenities1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelamenities2" className="form-label">
                                Enter the Hotel Amenities 2
                            </label>
                            <input type="text" className="form-control" id="hotelamenities2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelamenities3" className="form-label">
                                Enter the Hotel Amenities3
                            </label>
                            <input type="text" className="form-control" id="hotelamenities3" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelrating" className="form-label">
                                Enter the Hotel Rating
                            </label>
                            <input type="text" className="form-control" id="hotelrating" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelreview1" className="form-label">
                                Enter the Hotel Review1
                            </label>
                            <input type="text" className="form-control" id="hotelreview1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelreview2" className="form-label">
                                Enter the Hotel Review2
                            </label>
                            <input type="text" className="form-control" id="hotelreview2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelreview3" className="form-label">
                                Enter the Hotel Review3
                            </label>
                            <input type="text" className="form-control" id="hotelreview3" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelbedtype" className="form-label">
                                Enter the Hotel Bed type
                            </label>
                            <input type="text" className="form-control" placeholder="single/double/twin" id="hotelbedtype" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hoteldistance" className="form-label">
                                Enter the Hotel Distance
                            </label>
                            <input type="text" className="form-control" id="hoteldistance" required />
                        </div>
                        
                        


                        <button type="submit" className="btn btn-primary btn-lg">
                            ADD HOTEL
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}


