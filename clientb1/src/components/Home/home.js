import React from "react";
import { Homemenu } from "../Menu/homemenu";
import Header from "../Header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../Signin/Signup/register";
import { Hoteloffer } from "../HotelOffer/hoteloffer";
import { Homehotel, Homelocation } from "../Hotel/Homelocation/homelocation";


export function Home(){
    return(
        <>
            <Homemenu/>

        <Header/>
        <Hoteloffer/>
        <Homelocation/>

  
    </>
    );
}