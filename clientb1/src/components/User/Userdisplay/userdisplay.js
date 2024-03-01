import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Userdetails() {
  const [fetchdata, setFetchData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2205/userdisplay")
      .then((storedata) => storedata.json())
      .then((productdata) => setFetchData(productdata));
  }, []);

  const deluser = (uid) => {
    var key = { uid: uid };
    axios
      .post("http://localhost:2205/deleteuser/", key)
      .then((res) => {
        if (res.data.status === "error") {
          alert("Data not deleted");
        } else if (res.data.status === "success") {
          alert("Data deleted");
        }
      });
  };

  return (
    <>
    <div className="userpage">
      <div className="container">
        <div className="userhead text-center">
          <h1 className="heading text-decoration-underline text-dark">User List</h1>
        </div>
        <div className="table-responsive mt-3">
          <table className="table">
            <thead>
              <tr className="usertitle">
                <th>User id</th>
                <th>User First Name</th>
                <th>User Last Name</th>
               
                <th>User Phoneno</th>
                <th>User Email</th>
                <th>User Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fetchdata.map((value, index) => (
                <tr key={index}>
                  <td>{value.uid}</td>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  
                  <td>{value.phoneno}</td>
                  <td>{value.email}</td>
                
                  <td>{value.username}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deluser(value.uid);
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
    </>
  );
}






























































