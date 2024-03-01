import React from "react";
import Adminheader from "../Header/adminheader";
import { Adminmenu } from "../Menu/adminmenu";
import AdminHeader from "../Header/adminheader";
import { Hoteloffer } from "../HotelOffer/hoteloffer";

export function Admindashboard(){
    return(
        <>
        <Adminmenu/>
  <AdminHeader/>
  <Hoteloffer/>

        </>
    );
}