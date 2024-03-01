import React, { useState } from 'react';

import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useNavigate } from 'react-router-dom';
import { Homemenu } from '../Menu/homemenu';



const Userheader = () => {
  
  return (
    <>
    <div className='userheader'>
         
  


        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
         Find low prices on hotels,homes and much more...
        </p>
        </div>
    </>
  );
};

export default Userheader;
