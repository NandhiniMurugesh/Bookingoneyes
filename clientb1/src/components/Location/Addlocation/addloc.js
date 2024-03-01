import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Addloc() {
    var { lid } = useParams()
    const [locname, setLocname] = useState('')
    const [locimage, setLocimage] = useState('')
    const [locrating, setLocrating] = useState('')


    useEffect(() => {
        fetch("http://localhost:2205/addloc/" + lid)
            .then(res => res.json())
            .then((data) => {
                setLocname(data[0].locname)
                setLocimage(data[0].locimage)
                setLocrating(data[0].locrating)


            })
    }, [])
    function addloc(event) {
        event.preventDefault()
        var locname = document.getElementById("locname").value
        var locimage = document.getElementById("locimage").value
        var locrating = document.getElementById("locrating").value




        var key = {
            locname: locname,
            locimage: locimage,
            locrating: locrating,



        }
        if (locname == "") {
            alert("Enter the Location Name")
        }

        else if (locimage == "") {
            alert("Enter the Location Image ")

        }
        else if (locrating == "") {
            alert("Enter the Location Rating")

        }


        else {
            axios.post("http://localhost:2205/addloc/", key)
                .then((addloc) => {
                    if (addloc.data.status === 'error') {
                        alert(addloc)
                        alert("location not added")
                        console.log("not_added")

                    }
                    else if (addloc.data.status === 'success') {
                        alert("location added Successfully!")
                        console.log("success")
                        window.location.href=`/adminlocation`

                    }

                })
        }
    }
    return (
        <>
            <div className="addlocpage">
                <div className="addloc container text-center w-75 p-5">
                    <form onSubmit={addloc} className="needs-validation">
                        <h1 className="mb-4">Add Location</h1>

                        <div className="mb-3">
                            <label htmlFor="locname" className="form-label">
                                Enter the Location Name
                            </label>
                            <input type="text" className="form-control" id="locname" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="locimage" className="form-label">
                                Location Image URL
                            </label>
                            <input type="text" className="form-control" id="locimage" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="locreview" className="form-label">
                                Location Rating
                            </label>
                            <input type="text" className="form-control" id="locrating" required />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">
                            ADD LOCATION
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}


