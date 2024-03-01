import React from "react";
import { Homemenu } from "../Menu/homemenu";
import Header from "../Header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../Signin/Signup/register";
import { Hoteloffer } from "../HotelOffer/hoteloffer";
import { Usermenu } from "../Menu/usermenu";
import { Homelocation } from "../Hotel/Homelocation/homelocation";


export function Userdashboard(){
    return(
        <>
        <Usermenu/>
        <Header/>
        <Hoteloffer/>
        <Homelocation/>



    
    </>
    );
}