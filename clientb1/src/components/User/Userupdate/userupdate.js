import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Userupdate(){
    var {uid} = useParams()
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    
    const[phoneno,setPhoneno]=useState('')
    const[email,setEmail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

   
    useEffect(()=>{
        fetch("http://localhost:2205/singleuser/"+uid)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
            setLname(data[0].lname)
           
            setPhoneno(data[0].phoneno)
            setEmail(data[0].email)
            setUsername(data[0].username)
            setPassword(data[0].password)
            
        })
    },[])
    function userupdate(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value
            
        var lname=document.getElementById("lname").value
       
             
        var phoneno=document.getElementById("phoneno").value

        var email=document.getElementById("email").value
            
        var username=document.getElementById("username").value
       
        var password=document.getElementById("password").value
      
        var key={
           fname:fname,
          lname:lname,
        
          phoneno:phoneno,
          email:email,
          username:username,
          password:password
           
         
        }
        if(fname==""){
            alert("Enter the First Name")
        }
       
        else if(lname==""){
            alert("Enter the Last Name")

        }
       
        else if(phoneno==""){
            alert("Enter the Phoneno")

        }
        else if(email==""){
            alert("Enter the Email")

        }
        else if(username==""){
            alert("Enter the Username")

        }
        else if(password==""){
            alert("Enter the Password")

        }
       
       
       
        else{
            axios.put("http://localhost:2205/updateuser/"+ uid,key)
            .then((upduser)=>{
                if(upduser.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                    console.log(key)
                
                }
                else if (upduser.data.status==='success'){
                    alert("data updated Successfully!")
                    console.log("success")
                    window.location.href="/userdashboard/:uid"
                }

            })
        }
    }
    return (
        <>
        <div className="updateuser">
  <div className="container text-center p-4">
    <h1 className="mt-3 text-white">Update User</h1>
    <form onSubmit={userupdate} className="w-md-75 w-lg-50 mx-auto mt-3">
      <div className="mb-3">
        <input
          type="text"
          placeholder="First Name"
          onChange={(upd) => setFname(upd.target.value)}
          id="fname"
          value={fname}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Last Name"
          onChange={(upd) => setLname(upd.target.value)}
          id="lname"
          value={lname}
          className="form-control"
        />
      </div>

      
      <div className="mb-3">
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(upd) => setPhoneno(upd.target.value)}
          id="phoneno"
          value={phoneno}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Email"
          onChange={(upd) => setEmail(upd.target.value)}
          id="email"
          value={email}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Username"
          onChange={(upd) => setUsername(upd.target.value)}
          id="username"
          value={username}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          onChange={(upd) => setPassword(upd.target.value)}
          id="password"
          value={password}
          className="form-control"
        />
      </div>

      <input
        type="submit"
        className="btn btn-success btn-block p-2 mt-3"
        value="Update"
      />
    </form>
  </div>
</div>

       
        </>
    );
}