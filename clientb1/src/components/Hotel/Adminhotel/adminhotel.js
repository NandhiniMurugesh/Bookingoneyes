import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminhotel() {
    const [fetchdata, setFetchData] = useState([]);
   

    useEffect(() => {
        fetch("http://localhost:2205/hoteldisplay" )
            .then(storedata => storedata.json())
            .then(productdata => setFetchData(productdata));
    }, []);

    const delhotel = (hid) => {
        var key = { hid: hid };
        axios.post("http://localhost:2205/deletehotel/", key).then((res) => {
            if (res.data.status === "error") {
                alert("Data not deleted");
            } else if (res.data.status === "success") {
                alert("Data deleted");
            }
        });
    };

    return (
        <>
            <div className="hotelMain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="spothead">
                                <h1 className="heading text-center text-decoration-underline">
                                    Hotel List
                                </h1>
                                <Link to={`/addhotel`}>
                                    <button className="btn btn-primary addtrans">Add Hotel</button>
                                </Link>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table">
                                    <thead>
                                        <tr className="adminspottitle">
                                            <th>Hotelid</th>
                                            <th>HotelName</th>
                                            <th>HotelRoom</th>
                                            <th>HotelRoomtype</th>
                                            <th>HotelLocid</th>
                                            <th>HotelImage1</th>
                                            <th>HotelImage2</th>
                                            <th>HotelImage3</th>
                                            <th>HotelOriginalprice</th>
                                            <th>HotelDiscprice</th>
                                            <th>HotelAmenities1</th>
                                            <th>HotelAmenities2</th>
                                            <th>HotelAmenities3</th>
                                            <th>HotelRating</th>
                                            <th>HotelReview1</th>
                                            <th>HotelReview2</th>
                                            <th>HotelReview3</th>
                                            <th>HotelBedtype</th>
                                            <th>HotelDistance</th>
                                            
                                            

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fetchdata.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.hid}</td>
                                                <td>{value.hotelname}</td>
                                                <td>{value.hotelroom}</td>
                                                <td>{value.hotelroomtype}</td>
                                                <td>{value.lid}</td>
                                                
                                               
                                              
                                                <td>
                                                    <img
                                                        src={value.hotelimage1}
                                                        alt="hotelimage1"
                                                        className="img-fluid hotelimage1"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>
                                                    <img
                                                        src={value.hotelimage2}
                                                        alt="hotelimage2"
                                                        className="img-fluid hotelimage2"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>
                                                    <img
                                                        src={value.hotelimage3}
                                                        alt="hotelimage3"
                                                        className="img-fluid hotelimage3"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>{value.hoteloriginalprice}</td>
                                                <td>{value.hoteldiscprice}</td>
                                                <td>{value.hotelamenities1}</td>
                                                <td>{value.hotelamenities2}</td>
                                                <td>{value.hotelamenities3}</td>

                                                <td className="hotelrating">
                                                    {value.hotelrating}{" "}
                                                    <StarRatings
                                                        rating={value.hotelrating}
                                                        starDimension="20px"
                                                        starSpacing="10px"
                                                        starEmptyColor="grey"
                                                        starRatedColor="green"
                                                    />
                                                </td>
                                               
                                                <td>{value.hotelreview1}</td>
                                                <td>{value.hotelreview2}</td>
                                                <td>{value.hotelreview3}</td>
                                                <td>{value.hotelbedtype}</td>
                                                <td>{value.hoteldistance}</td>
                                                
                                                
                                                <td>
                                                    <Link to={`/updatehotel/${value.hid}`}>
                                                        <button className="btn btn-warning adminhotel">
                                                            Update Hotel
                                                        </button>
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger mx-2"
                                                        onClick={() => {
                                                            delhotel(value.hid);
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



