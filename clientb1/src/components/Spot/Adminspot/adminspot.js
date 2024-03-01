import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Adminspot() {
  const [fetchdata, setFetchData] = useState([]);
  var {lid}=useParams()
  console.log(lid)
  useEffect(() => {
    fetch("http://localhost:2205/spotdisplay/"+lid)
      .then(storedata => storedata.json())
      .then(productdata => setFetchData(productdata));
  }, []);

  const delspot = (sid) => {
    var key = { sid: sid };
    axios.post("http://localhost:2205/deletespot/", key).then((res) => {
      if (res.data.status === "error") {
        alert("Data not deleted");
      } else if (res.data.status === "success") {
        alert("Data deleted");
      }
    });
  };

  return (
    <>
    <div className="spotMain">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="spothead">
          <h1 className="heading text-center text-decoration-underline">
            Spot List
          </h1>
          <Link to={`/addspot`}>
            <button className="btn btn-primary addspot">Add Spot</button>
          </Link>
        </div>
        <div className="table-responsive mt-3">
          <table className="table">
            <thead>
              <tr className="adminspottitle">
                <th>Spot id</th>
                <th>Spot Name</th>
                <th>Spot Image 1</th>
                <th>Spot Image 2</th>
                <th>Spot Image 3</th>
                <th>Spot Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fetchdata.map((value, index) => (
                <tr key={index}>
                  <td>{value.sid}</td>
                  <td className="spotname">{value.spotname}</td>

<td>
  <img
    src={value.spotimage1}
    alt="Spot"
    className="img-fluid locimage"
  
  />
</td>
                 
                  <td>
  <img
    src={value.spotimage2}
    alt="Spot"
    className="img-fluid locimage"

  />
</td>
<td>
  <img
    src={value.spotimage3}
    alt="Spot"
    className="img-fluid locimage"
   
  />
</td>
                  <td className="spotreview">
                    {value.spotrating}{" "}
                    <StarRatings
                      rating={value.spotrating}
                      starDimension="20px"
                      starSpacing="10px"
                      starEmptyColor="grey"
                      starRatedColor="green"
                    />
                  </td>
                  <td>
                    <Link to={`/updatespot/${value.sid}`}>
                      <button className="btn btn-warning adminspot">
                        Update Spot
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        delspot(value.sid);
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



