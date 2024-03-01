import React, { useState } from 'react';

import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { Homemenu } from '../Menu/homemenu';
import { icon } from '@fortawesome/fontawesome-svg-core';



const AdminHeader = () => {
  
  return (
    <>
    <div className='adminheader'>
         
         <nav class="navbar ">
  <form class="container-fluid justify-content-start">
 
   <Link to={`/adminhotel`}> <button class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faBed} />Stays Details</button></Link>
  <Link to={`/admintransport`} > <button class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faPlane} />Transport Details</button></Link>
    <Link to={`/userdisplay`}> <button class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faPerson} />User details</button>
</Link>
    <Link to={`/adminlocation`}>   <button class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faTowerObservation} />Location Details</button></Link>

  </form>
</nav>

        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
         Find low prices on hotels,homes and much more...
        </p>
        </div>
    </>
  );
};

export default AdminHeader;
