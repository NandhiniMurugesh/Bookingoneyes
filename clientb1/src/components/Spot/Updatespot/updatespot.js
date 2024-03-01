import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Spotupdate() {
    var { sid } = useParams()
    const [spotname, setSpotname] = useState('')
    const [spotimage1, setSpotimage1] = useState('')
    const [spotimage2, setSpotimage2] = useState('')
    const [spotimage3, setSpotimage3] = useState('')
    const [spotrating, setSpotrating] = useState('')
    const [lid, setLid] = useState('')

    useEffect(() => {
        fetch("http://localhost:2205/singlespot/" + sid)
            .then(res => res.json())
            .then((data) => {
                setLid(data[0].lid)
                setSpotname(data[0].spotname)
                setSpotimage1(data[0].spotimage1)
                setSpotimage2(data[0].spotimage2)
                setSpotimage3(data[0].spotimage3)
                setSpotrating(data[0].spotrating)

            })
    }, [])
    function spotupdate(event) {
        event.preventDefault()
        var spotname = document.getElementById("spotname").value
        var lid = document.getElementById("lid").value

        var spotimage1 = document.getElementById("spotimage1").value
        var spotimage2 = document.getElementById("spotimage2").value
        var spotimage3 = document.getElementById("spotimage3").value

        var spotrating = document.getElementById("spotrating").value


        var key = {
            spotname: spotname,
            lid:lid,
            spotimage1: spotimage1,
            spotimage2: spotimage2,
            spotimage3: spotimage3,
            spotrating: spotrating,


        }
        if (spotname == "") {
            alert("Enter the Spot Name")
        }

        else if (spotimage1 == "") {
            alert("Enter the Spot Image 1 link")

        }
        else if (spotimage2 == "") {
            alert("Enter the Spot Image 2 link")

        }
        else if (spotimage3 == "") {
            alert("Enter the Spot Image 3 link")

        }
        else if (lid == "") {
            alert("Enter the Location Id")

        }
        else if (spotrating == "") {
            alert("Enter the Spot Rating")

        }


        else {
            axios.put("http://localhost:2205/updatespot/" + sid, key)
                .then((updspot) => {
                    if (updspot.data.status === 'not_updated') {
                        alert("data not updated")
                        console.log("not_updated")
                        console.log(key)

                    }
                    else if (updspot.data.status === 'success') {
                        alert("data updated Successfully!")
                        console.log("success")
                        // window.location.href="/booklist"
                    }

                })
        }
    }
    return (
        <>
            <div className="updatespot">
                <h1 className="text-center">Update Spot</h1>
                <div className="container text-center p-4">
                    <div className="w-md-75 w-lg-50 mx-auto">
                        <form onSubmit={spotupdate}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Location Id"
                                    onChange={(upd) => setLid(upd.target.value)}
                                    id="lid"
                                    value={lid}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Spot Name"
                                    onChange={(upd) => setSpotname(upd.target.value)}
                                    id="spotname"
                                    value={spotname}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Spot Image 1 URL"
                                    onChange={(upd) => setSpotimage1(upd.target.value)}
                                    id="spotimage1"
                                    value={spotimage1}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Spot Image 2 URL"
                                    onChange={(upd) => setSpotimage2(upd.target.value)}
                                    id="spotimage2"
                                    value={spotimage2}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Spot Image 3 URL"
                                    onChange={(upd) => setSpotimage3(upd.target.value)}
                                    id="spotimage3"
                                    value={spotimage3}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Locat Review"
                                    onChange={(upd) => setSpotrating(upd.target.value)}
                                    id="spotrating"
                                    value={spotrating}
                                    className="form-control"
                                />
                            </div>

                            <input
                                type="submit"
                                className="btn btn-success btn-block"
                                value="Update"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}