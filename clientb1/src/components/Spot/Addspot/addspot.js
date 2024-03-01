import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Addspot(){
    var {sid} = useParams()
    const[lid,setLid]=useState('')
    const[spotname,setSpotname]=useState('')
    const[spotimage1,setSpotimage1]=useState('')
    const[spotimage2,setSpotimage2]=useState('')
    const[spotimage3,setSpotimage3]=useState('')
    const[spotrating,setSpotrating]=useState('')
    
   
    useEffect(()=>{
        fetch("http://localhost:2205/addspot/"+sid)
        .then(res=>res.json())
        .then((data)=>{
            setLid(data[0].lid)
            setSpotname(data[0].spotname)
            setSpotimage1(data[0].spotimage1)
            setSpotimage2(data[0].spotimage2)
            setSpotimage3(data[0].spotimage3)
            setSpotrating(data[0].spotrating)
           
           
        })
    },[])
    function addspot(event){
        event.preventDefault()
        var lid=document.getElementById("lid").value
        var spotname=document.getElementById("spotname").value
        var spotimage1=document.getElementById("spotimage1").value
        var spotimage2=document.getElementById("spotimage2").value
        var spotimage3=document.getElementById("spotimage3").value
        var spotrating=document.getElementById("spotrating").value
       
       
     
        
        var key={
          lid:lid,
           spotname:spotname,
           spotimage1:spotimage1,
           spotimage2:spotimage2,
           spotimage3:spotimage3,
           spotrating:spotrating,
           
         
         
        }
        if(spotname==""){
            alert("Enter the spot Name")
        }
      
        else if(spotimage1==""){
            alert("Enter the spot Image1 ")

        }
        else if(spotimage2==""){
            alert("Enter the spot Image 2")

        }
        else if(spotimage3==""){
            alert("Enter the spot Image3 ")

        }
        else if(spotrating==""){
            alert("Enter the spot Review")

        }
       
       
        else{
            axios.post("http://localhost:2205/addspot/",key)
            .then((addspot)=>{
                if(addspot.data.status==='error'){
                    alert(addspot)
                    alert("spot not added")
                    console.log("not_added")
                
                }
                else if (addspot.data.status==='success'){
                    alert("spot added Successfully!")
                    console.log("success")
                    
                }

            })
        }
    }
    return (
        <>
        <div className="addspotpage">
  <div className="addspot container text-center p-4">
    <form onSubmit={addspot} className="w-md-75 w-lg-50 mx-auto">
      <h1>Add Spot</h1>

      <div className="mb-3">
        <label htmlFor="lid" className="form-label">
          Enter the Location Id
        </label>
        <input
          type="text"
          placeholder="Location Id"
          id="lid"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="spotname" className="form-label">
          Enter the Spot Name
        </label>
        <input
          type="text"
          placeholder="Spot Name"
          id="spotname"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="spotimage" className="form-label">
          Spot Image1 URL
        </label>
        <input
          type="text"
          placeholder="Spot Image URL"
          id="spotimage1"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="spotimage" className="form-label">
          Spot Image2 URL
        </label>
        <input
          type="text"
          placeholder="Spot Image URL"
          id="spotimage2"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="spotimage" className="form-label">
          Spot Image3 URL
        </label>
        <input
          type="text"
          placeholder="Spot Image URL"
          id="spotimage3"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="spotreview" className="form-label">
          Spot Rating
        </label>
        <input
          type="text"
          placeholder="Spot Review"
          id="spotrating"
          className="form-control"
        />
      </div>

      <input
        type="submit"
        className="btn btn-primary btn-block p-2"
        value="ADD SPOT"
      />
    </form>
  </div>
</div>
</>
    );
}