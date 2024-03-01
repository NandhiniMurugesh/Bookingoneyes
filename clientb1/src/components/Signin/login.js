import React from "react";
import axios from "axios";

export function Login() {
  function handlelogin(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var key = {
      username: username,
      password: password,
    };
    if (username === "") {
      alert("Enter the username");
    } else if (password === "") {
      alert("Enter the password");
    } else {
      axios.post("http://localhost:2205/login", key).then((res) => {
        if (res.data.status === "empty_set") {
          alert("Please register the form");
        } else if (res.data.status === "success") {
          var uid = res.data.uid;
          alert("Login successful");
          if (username === "Admin") {
            window.location.href = `/admindashboard/${uid}`;
          } else {
            window.location.href = `/userdashboard/${uid}`;
          }
        } else if (res.data.status === "invalid_user") {
          alert("Invalid user");
        } else {
          alert("User invalid");  
        }
      });
    }
  }

  return (
    <>
    <div className="lgform">
      <div className="container text-center w-75 p-5">
        <h3 className="text-decoration-underline">USER LOGIN</h3>
        <form onSubmit={handlelogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-primary"
              value="Login"
            />
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
