import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Header.css";
import { format } from "date-fns";
const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openoptions, setopenoptions] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption=(name,operation)=>{
    setOption((prev)=>{
      return{
        ...prev,
        [name]:operation==="i"? option[name]+1 : option[name]-1
      }
    })
  }

  /////////////////////////Important send data using navigation to anathour page///////////////////////////////////////////////////////////////////////////////
  ///// and another page u get data using useLocation//////////////////////////////////////
  const Navigate = useNavigate()
  const handleSearch=()=>{
    Navigate('/hotels',{state:{ destination,date,option }})
  }

  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
            <span>Stays</span>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

       { type !== "list" &&
        <> <h1 className="headerTitle">A life of discounts? It's a Genius. </h1>
        <p className="headerDiscriptions">
         
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register </button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span
              onClick={() => setopenDate(!openDate)}
              className="headerSerchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
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
            <span onClick={()=>setopenoptions(!openoptions)} className="headerSerchText">{`${option.adult} adult | ${option.children} children | ${option.room} room`}</span>
            {openoptions && (
              <div className="option">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" disabled={option.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optonCounterNumber">{option.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" disabled={option.children <=0} onClick={()=>handleOption("children", "d")}>-</button>
                    <span className="optonCounterNumber">{option.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" disabled={option.room <=1} onClick={()=>handleOption("room", "d")}>-</button>
                    <span className="optonCounterNumber">{option.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
