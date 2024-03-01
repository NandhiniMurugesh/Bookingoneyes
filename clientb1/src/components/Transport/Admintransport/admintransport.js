import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Admintransport() {
    const [fetchdata, setFetchData] = useState([]);
   

    useEffect(() => {
        fetch("http://localhost:2205/transportdisplay" )
            .then(storedata => storedata.json())
            .then(productdata => setFetchData(productdata));
    }, []);

    const deltrans = (tid) => {
        var key = { tid: tid };
        axios.post("http://localhost:2205/deletetrans/", key).then((res) => {
            if (res.data.status === "error") {
                alert("Data not deleted");
            } else if (res.data.status === "success") {
                alert("Data deleted");
            }
        });
    };

    return (
        <>
            <div className="transMain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="spothead">
                                <h1 className="heading text-center text-decoration-underline">
                                    Transport List
                                </h1>
                                <Link to={`/addtrans`}>
                                    <button className="btn btn-primary addtrans">Add Transport</button>
                                </Link>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table">
                                    <thead>
                                        <tr className="adminspottitle">
                                            <th>Transid</th>
                                            <th>TransName</th>
                                            <th>TransReview1</th>
                                            <th>TransReview2</th>
                                            <th>TransReview3</th>
                                            <th>TransRating</th>
                                            <th>TransImage1</th>
                                            <th>TransImage2</th>
                                            <th>TransImage3</th>
                                            <th>Translocid</th>
                                            <th>Transarrival</th>
                                            <th>Transdeparture</th>
                                            <th>Transprice</th>
                                            <th>Transstart</th>
                                            <th>Transdestination</th>
                                            <th>Transclass</th>
                                            <th>Transcartype</th>
                                            <th>Transcarseater</th>

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fetchdata.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.tid}</td>
                                                <td>{value.transname}</td>
                                                <td>{value.transtype}</td>
                                                <td>{value.transreview1}</td>
                                                <td>{value.transreview2}</td>
                                                <td>{value.transreview3}</td>
                                                <td className="transrating">
                                                    {value.transrating}{" "}
                                                    <StarRatings
                                                        rating={value.transrating}
                                                        starDimension="20px"
                                                        starSpacing="10px"
                                                        starEmptyColor="grey"
                                                        starRatedColor="green"
                                                    />
                                                </td>
                                              
                                                <td>
                                                    <img
                                                        src={value.transimage1}
                                                        alt="transimage1"
                                                        className="img-fluid transimage1"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>
                                                    <img
                                                        src={value.transimage2}
                                                        alt="transimage2"
                                                        className="img-fluid transimage2"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>
                                                    <img
                                                        src={value.transimage3}
                                                        alt="transimage3"
                                                        className="img-fluid transimage3"
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </td>
                                                <td>{value.lid}</td>
                                                <td>{value.transarrivaltime}</td>
                                                <td>{value.transdeparturetime}</td>
                                                <td>{value.transprice}</td>
                                                <td>{value.transstart}</td>
                                                <td>{value.transdestination}</td>
                                                <td>{value.transclass}</td>
                                                <td>{value.transcartype}</td>
                                                <td>{value.transcarseater}</td>
                                                
                                                
                                                <td>
                                                    <Link to={`/updatetrans/${value.tid}`}>
                                                        <button className="btn btn-warning adminspot">
                                                            Update Transport
                                                        </button>
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger mx-2"
                                                        onClick={() => {
                                                            deltrans(value.tid);
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



