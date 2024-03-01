import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faW } from "@fortawesome/free-solid-svg-icons";
export function Adminmenu(){
    var {uid}=useParams()
    return(
        <>

<nav class="navbar navbar-expand-lg navbg">
  <div class="container-fluid">
  <a class="navbar-brand text-white" href="/">Booking.com</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href={`/updateuser/${uid}`}>Profile</a>

        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/login">LOGOUT</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</>
);
}