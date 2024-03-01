import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminlocation() {
    const [fetchdata, setFetchData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2205/locationdisplay")
            .then((storedata) => storedata.json())
            .then((productdata) => setFetchData(productdata));
    }, []);

    const delloc = (lid) => {
        var key = { lid: lid };
        axios.post("http://localhost:2205/deletelocation/", key).then((res) => {
            if (res.data.status === "error") {
                alert("Data not deleted");
            } else if (res.data.status === "success") {
                alert("Data deleted");
            }
        });
    };

    return (
        <>
        <div className="locationMain">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="lochead">
                    <h1 className="heading text-center text-decoration-underline">
                        Location List
                    </h1>
                    <Link to={`/addloc`}>
                        <button className="btn btn-primary addloc">Add Location</button>
                    </Link>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table">
                        <thead>
                            <tr className="adminloctitle">
                                <th>Location id</th>
                                <th>Location Image</th>
                                <th>Location Name</th>
                                <th>Location rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchdata.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.lid}</td>
                                    <td>
                                        <img
                                            src={value.locimage}
                                            alt="Location"
                                            className="img-fluid locimage"
                                        />
                                    </td>
                                    <td className="locname">{value.locname}</td>
                                    <td className="locrating">
                                        {value.locrating}
                                        <StarRatings
                                            rating={value.locrating}
                                            starDimension="15px"
                                            starSpacing="10px"
                                            starEmptyColor="grey"
                                            starRatedColor="green"
                                        />
                                    </td>
                                    <td className="text-center">
                                        <Link to={`/adminspot/${value.lid}`} className="text-decoration-none">
                                            <button className="btn btn-success adminspot mr-2 mb-2 mb-md-0">View Spot</button>
                                        </Link>

                                        <Link to={`/updateloc/${value.lid}`} className="text-decoration-none">
                                            <button className="btn btn-warning adminspot mr-2 mb-2 mb-md-0 ms-2">Update Location</button>
                                        </Link>

                                        <button
                                            className="btn btn-danger mb-2 mb-md-0 ms-2"
                                            onClick={() => {
                                                delloc(value.lid);
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
