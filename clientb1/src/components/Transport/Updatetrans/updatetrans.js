import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Updatetrans() {
    var { tid } = useParams()
    const [transname, setTransname] = useState('')
    const [transtype, setTranstype] = useState('')
    const [transreview1, setTransreview1] = useState('')
    const [transreview2, setTransreview2] = useState('')
    const [transreview3, setTransreview3] = useState('')
    const [transrating, setTransrating] = useState('')
    const [transimage1, setTransimage1] = useState('')
    const [transimage2, setTransimage2] = useState('')
    const [transimage3, setTransimage3] = useState('')
    const [lid, setlid] = useState('')
    const [transarrivaltime, setTransarrivaltime] = useState('')
    const [transdeparturetime, setTransdeparturetime] = useState('')
    const [transprice, settransprice] = useState('')
    const [transstart, setTransstart] = useState('')
    const [transdestination, setTransdestination] = useState('')
    const [transclass, setTransclass] = useState('')
    const [transcartype, setTranscartype] = useState('')
    const [transcarseater, setTranscarseater] = useState('')
   


    useEffect(() => {
        fetch("http://localhost:2205/singletrans/" + tid)
            .then(res => res.json())
            .then((data) => {
                setTransname(data[0].transname)
                setTranstype(data[0].transtype)
                setTransreview1(data[0].transreview1)
                setTransreview2(data[0].transreview2)
                setTransreview3(data[0].transreview3)
                setTransrating(data[0].transrating)
                setTransimage1(data[0].transimage1)
                setTransimage2(data[0].transimage2)
                setTransimage3(data[0].transimage3)
                setlid(data[0].lid)
                setTransarrivaltime(data[0].transarrivaltime)
                setTransdeparturetime(data[0].transdeparturetime)
                settransprice(data[0].transprice)
                setTransstart(data[0].transstart)
                setTransdestination(data[0].transdestination)
                setTransclass(data[0].transclass)
                setTranscartype(data[0].transcartype)
                setTranscarseater(data[0].transcarseater)
               


            })
    }, [])
    function updatetrans(event) {
        event.preventDefault()
        var transname = document.getElementById("transname").value;
        var transtype = document.getElementById("transtype").value;
        var transreview1 = document.getElementById("transreview1").value;
        var transreview2 = document.getElementById("transreview2").value;
        var transreview3 = document.getElementById("transreview3").value;
        var transrating = document.getElementById("transrating").value;
        var transimage1 = document.getElementById("transimage1").value;
        var transimage2 = document.getElementById("transimage2").value;
        var transimage3 = document.getElementById("transimage3").value;
        var lid = document.getElementById("lid").value;
        var transarrivaltime = document.getElementById("transarrivaltime").value;
        var transdeparturetime = document.getElementById("transdeparturetime").value;
        var transprice = document.getElementById("transprice").value;
        var transstart = document.getElementById("transstart").value;
        var transdestination = document.getElementById("transdestination").value;
        var transclass = document.getElementById("transclass").value;
        var transcartype = document.getElementById("transcartype").value;
        var transcarseater = document.getElementById("transcarseater").value;
       


        var key = {
           transname:transname,
           transtype:transtype,
           transreview1:transreview1,
           transreview2:transreview2,
           transreview3:transreview3,
           transrating:transrating,
           transimage1:transimage1,
           transimage2:transimage2,
           transimage3:transimage3,
           lid:lid,
           transarrivaltime:transarrivaltime,
           transdeparturetime:transdeparturetime,
           transprice:transprice,
           transstart:transstart,
           transdestination:transdestination,
           transclass:transclass,
           transcartype:transcartype,
           transcarseater:transcarseater,


        }
        if (transname == "") {
            alert("Enter the Transport Name")
        }

        else if (transtype == "") {
            alert("Enter the Transport Type ")

        }
        else if (transreview1 == "") {
            alert("Enter the Transport Review1")

        }
        else if (transreview2 == "") {
            alert("Enter the Transport Review2")

        }
        else if (transreview3 == "") {
            alert("Enter the Transport Review3")

        }
        else if (transrating == "") {
            alert("Enter the Transport Rating ")

        }
        else if (transimage1 == "") {
            alert("Enter the Transport Image1")

        }
        else if (transimage2 == "") {
            alert("Enter the Transport Image2")

        }
        else if (transimage3 == "") {
            alert("Enter the Transport Image3")

        }
        else if (lid == "") {
            alert("Enter the Transport Location Id ")

        }
       
        else if (transprice == "") {
            alert("Enter the Transport Price")

        }
        else if (transstart == "") {
            alert("Enter the Transport Start ")

        }
        else if (transdestination == "") {
            alert("Enter the Transport Destination")

        }
       


        else {
            axios.put("http://localhost:2205/updatetrans/" + tid, key)
                .then((updtrans) => {
                    if (updtrans.data.status === 'not_updated') {
                        alert("data not updated")
                        console.log("not_updated")
                        console.log(key)

                    }
                    else if (updtrans.data.status === 'success') {
                        alert("data updated Successfully!")
                        console.log("success")
                        // window.location.href="/booklist"
                    }

                })
        }
    }
    return (
        <>
            <div className="addtranspage">
                <div className="addtrans container text-center w-75 p-5">
                    <form onSubmit={updatetrans} className="needs-validation">
                        <h1 className="mb-4">Update Transport</h1>

                        <div className="mb-3">
                            <label htmlFor="transname" className="form-label">
                                Enter the Transport Name
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransname(upd.target.value)} value={transname}
                               id="transname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transtype" className="form-label">
                                Enter the Transport Type
                            </label>
                            <input type="text" className="form-control" placeholder="Car/Flight" onChange={(upd) => setTranstype(upd.target.value)}
                            value={transtype} id="transtype" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transreview1" className="form-label">
                                Enter the Transport Review1
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransreview1(upd.target.value)} 
                            value={transreview1} id="transreview1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transreview2" className="form-label">
                                Enter the Transport review2
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransreview2(upd.target.value)} 
                               value={transreview2} id="transreview2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transreview3" className="form-label">
                                Enter the Transport Review3
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransreview3(upd.target.value)}
                               value={transreview3} id="transreview3" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transrating" className="form-label">
                                Enter the Transport Rating
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransrating(upd.target.value)} 
                               value={transrating} id="transrating" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transimage1" className="form-label">
                                Enter the Transport Image 1 URL
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransimage1(upd.target.value)} 
                               value={transimage1} id="transimage1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transimage2" className="form-label">
                                Enter the Transport Image 2 URL
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransimage2(upd.target.value)}
                             value={transimage2} id="transimage2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transimage3" className="form-label">
                                Enter the Transport Image 3 URL
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransimage3(upd.target.value)}
                             value={transimage3} id="transimage3" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lid" className="form-label">
                                Enter the Transport Location Id
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setlid(upd.target.value)} 
                             value={lid} id="lid" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transarrival" className="form-label">
                                Enter the Transport Arrival
                            </label>
                            <input type="time" className="form-control" onChange={(upd) => setTransarrivaltime(upd.target.value)} 
                             value={transarrivaltime} id="transarrivaltime" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transdeparture" className="form-label">
                                Enter the Transport Departure
                            </label>
                            <input type="time" className="form-control" onChange={(upd) => setTransdeparturetime(upd.target.value)} 
                             value={transdeparturetime} id="transdeparturetime"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transprice" className="form-label">
                                Enter the Transport Price
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => settransprice(upd.target.value)} 
                             value={transprice} id="transprice" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transstart" className="form-label">
                                Enter the Transport Start
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransstart(upd.target.value)} 
                             value={transstart} id="transstart" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transdestination" className="form-label">
                                Enter the Transport Destination
                            </label>
                            <input type="text" className="form-control" onChange={(upd) => setTransdestination(upd.target.value)} 
                             value={transdestination} id="transdestination" required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="transclass" className="form-label">
                                Enter the Transport Class
                            </label>
                            <input type="text" className="form-control" placeholder="first/economy/business/premium economy class"
                            onChange={(upd) => setTransclass(upd.target.value)} 
                            value={transclass} id="transclass"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transcartype" className="form-label">
                                Enter the Transport Car Type
                            </label>
                            <input type="text" className="form-control" placeholder="swift/etios/innova/xylo" 
                            onChange={(upd) => setTranscartype(upd.target.value)} 
                            value={transcartype} id="transcartype"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="transcarseater" className="form-label">
                                Enter the Transport Car Seater
                            </label>
                            <input type="text" className="form-control" placeholder="4/5/7/8 Seater"
                            onChange={(upd) => setTranscarseater(upd.target.value)}  value={transcarseater} id="transcarseater"  />
                        </div>


                        <button type="submit" className="btn btn-primary btn-lg">
                          Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}


