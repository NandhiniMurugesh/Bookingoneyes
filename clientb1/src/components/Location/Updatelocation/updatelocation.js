import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Locationupdate(){
    var {lid} = useParams()
    const[locname,setLocname]=useState('')
    const[locimage,setLocimage]=useState('')
    const[locrating,setLocrating]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:2205/singleloc/"+lid)
        .then(res=>res.json())
        .then((data)=>{
            setLocname(data[0].locname)
            setLocimage(data[0].locimage)
            setLocrating(data[0].locrating)
            
        })
    },[])
    function locupdate(event){
        event.preventDefault()
        var locname=document.getElementById("locname").value
            
        var locimage=document.getElementById("locimage").value
       
        var locrating=document.getElementById("locrating").value
     

        var key={
            locname:locname,
           
            locimage:locimage,
            locrating:locrating,
           
         
        }
        if(locname==""){
            alert("Enter the Location Name")
        }
       
        else if(locimage==""){
            alert("Enter the Location Image link")

        }
        else if(locrating==""){
            alert("Enter the Location rating")

        }
       
       
        else{
            axios.put("http://localhost:2205/updateloc/"+lid,key)
            .then((updloc)=>{
                if(updloc.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                    console.log(key)
                
                }
                else if (updloc.data.status==='success'){
                    alert("data updated Successfully!")
                    console.log("success")
                   
                }

            })
        }
    }
    return (
        <>
        <div className="updatelocpage">
  <h1 className="text-center">Update Location</h1>
  <div className="addloc container text-center p-4">
    <form onSubmit={locupdate} className="w-md-75 w-lg-50 mx-auto">
      <div className="mb-3">
        <label htmlFor="locname" className="form-label">
          Location Name
        </label>
        <input
          type="text"
          placeholder="Location Name"
          onChange={(upd) => setLocname(upd.target.value)}
          id="locname"
          value={locname}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="locimage" className="form-label">
          Location Image URL
        </label>
        <input
          type="text"
          placeholder="Location Image URL"
          onChange={(upd) => setLocimage(upd.target.value)}
          id="locimage"
          value={locimage}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="locrating" className="form-label">
          Location rating
        </label>
        <input
          type="text"
          placeholder="Location rating"
          onChange={(upd) => setLocrating(upd.target.value)}
          id="locrating"
          value={locrating}
          className="form-control"
        />
      </div>

      <input
        type="submit"
        className="btn btn-success btn-block p-2"
        value="Update"
      />
    </form>
  </div>
</div>

     
                  
              

            
        </>
    );
}