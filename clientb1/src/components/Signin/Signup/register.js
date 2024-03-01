import React from "react";
import axios from "axios";
import Header from "../../Header/header";
import { Homemenu } from "../../Menu/homemenu";

export function Registration() {
  function reg(event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phoneno = document.getElementById("phoneno").value;
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var key = {
      fname: fname,
      lname: lname,
      email: email,
      phoneno: phoneno,
     
      username: username,
      password: password,
    };

    // Validation checks (omitted for brevity)

    axios.post("http://localhost:2205/user", key).then((res) => {
      if (res.data.status === "error") {
        alert("Data has not been registered");
        alert(res.data.status);
        window.location.reload();
      } else if (res.data.status === "success") {
        alert("Data has been registered");
        window.location.href = "/login";
      }
    });
  }

  return (
    <>
 
    <div className="regform">
      <div className="container text-center w-75 p-5">
        <h2 className="text-decoration-underline">USER REGISTRATION</h2>
        <form onSubmit={reg}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" id="fname" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" id="lname" />
          </div>
          
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Phone Number" id="phoneno" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Email" id="email" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" id="username" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" id="password" />
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
        <p className="text-white ">
          Already have an account? <a href="/login"><span className="text-white bg-primary">Login</span></a>
        </p>
      </div>
      </div>
    </>
  );
}

