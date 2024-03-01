import React, { useState } from 'react';

import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTowerObservation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { Homemenu } from '../Menu/homemenu';
import { icon } from '@fortawesome/fontawesome-svg-core';



const Header = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({ ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 }));
  };

  const handleSearch = () => {
    navigate('/homelocation', { state: { destination, date, options } });
  };
  const handleflight = () => {
    navigate('/flightdisplay');
  };
  const handlecar = () => {
    navigate('/cardisplay');
  };
  const handlelocation = () => {
    navigate('/homelocationdisplay');
  };
  const handlehotel = () => {
    navigate('/hoteldisplay');
  };

  return (
    <>
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {/* {[faBed, faCalendarDays, faPerson].map((icon, index) => (
            <div key={index} className={`headerListItem ${index === 0 && 'active'}`}>
              <FontAwesomeIcon icon={icon} />
              <span>{index === 0 ? 'Stays' : index === 1 ? 'Flights' : 'Attractions'}</span>
            </div>
          ))} */}
         
         <nav class="navbar ">
  <form class="container-fluid justify-content-start">
 
    <button onclick={handlehotel} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faBed} />Stays</button>
   <button onClick={handleflight} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faPlane} />Flights</button>
    <button onClick={handlecar} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faCar} />Car Rentals</button>
    <button onClick={handlelocation} class="btn btn-outline-light me-2" type="button"><FontAwesomeIcon icon={faTowerObservation} />Attractions</button>

  </form>
</nav>

        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
         Find low prices on hotels,homes and much more...
        </p>
        {/* <button className="headerBtn">Sign in / Register</button> */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                {['Adult', 'Children', 'Room'].map((text, index) => (
                  <div key={index} className="optionItem">
                    <span className="optionText">{text}</span>
                    <div className="optionCounter">
                      <button
                        disabled={options[text.toLowerCase()] <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption(text.toLowerCase(), 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">{options[text.toLowerCase()]}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption(text.toLowerCase(), 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
