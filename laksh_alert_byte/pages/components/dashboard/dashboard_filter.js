import React, { useState,useEffect,useRef,useContext } from "react";
import {FaChevronDown} from 'react-icons/fa';
import Allalerts from "./allalerts";
import Personalalerts from "./personal_only";
import Communityalerts from "./community_only";
import Pricealerts from "./price_only ";

const filter = ({setShowalertfor,setShowcards,resetAllstate}) => {
  const [showFilterExpand, setShowFilterExpand] = useState(false);
  const [alert_type, setAlert_type] = useState("");

  const [showallalerts, setShowallalerts] = useState(true);
  const [showpersonalalerts, setShowpersonalalerts] = useState(false);
  const [showcommunityalerts, setShowcommunityalerts] = useState(false);
  const [showpricealerts, setShowpricealerts] = useState(false);




  const handleRadioChange = (event) => {
    setAlert_type(event.target.value);
  };

  const handleReset = () => {
    setAlert_type(""); 
    setShowallalerts(true);
    setShowpersonalalerts(false);
    setShowcommunityalerts(false);
    setShowpricealerts(false)
    setShowFilterExpand(!showFilterExpand);
  };

  const handleapply = () =>{
    if(alert_type === "personal"){
      setShowpersonalalerts(true);
      setShowallalerts(false);
      setShowcommunityalerts(false);
      setShowpricealerts(false)

    }else if(alert_type === "community"){
      setShowcommunityalerts(true);
      setShowallalerts(false);
      setShowpersonalalerts(false);
      setShowpricealerts(false);

    }else if(alert_type === "price") {
      setShowpricealerts(true)
      setShowallalerts(false);
      setShowpersonalalerts(false);
      setShowcommunityalerts(false);
    }else{
      setShowallalerts(true);
      setShowpersonalalerts(false);
      setShowcommunityalerts(false);
      setShowpricealerts(false)
    }
    setShowFilterExpand(!showFilterExpand);

  }



  const filterRef = useRef(null);
  const handleFilterButtonClick = () => {
    setShowFilterExpand(!showFilterExpand);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilterExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className="title-btn-div"> 
        {showallalerts && ( <span className="title"> All Alerts </span> )}
        {showpersonalalerts && ( <span className="title">Personal Monitor Alerts </span> )}
        {showcommunityalerts && ( <span className="title"> Community Monitor Alerts</span> )}
        {showpricealerts && ( <span className="title"> Price Monitor Alerts</span> )}
        <div className="">
          <button className="btn-fill" onClick={()=>{setShowalertfor(true),setShowcards(false)} }>+ Add Alert</button>
        </div>
      </div>

      <div className="filter-main-div">
        <div className="filter-sub-div inout-sec" ref={filterRef}>
          <span className="head dropdowntoggle" id="filter-sub-id" onClick={handleFilterButtonClick}>Filter {!showFilterExpand && <FaChevronDown/>}</span>
          {showFilterExpand && (
            <div className="filter-expand" id="filter-expand-12">
              <div className="filter-top">
                <div className="filter-exp-head"> Filter </div>
                {/* <div className="filter-exp-head clear-btn" onClick={()=>{setAlert_type("")}}> Clear All </div> */}
              </div>
              

              <div className="radios">
                <span className="head">Type</span>
                <div className="rd-field">
                  <input
                    type="radio"
                    id="personal"
                    name="monitor-type"
                    value="personal"
                    checked={alert_type === "personal"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="personal">Personal Monitor</label>
                </div>
                <div className="rd-field">
                  <input
                    type="radio"
                    id="community"
                    name="monitor-type"
                    value="community"
                    checked={alert_type === "community" }
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="community">Community Monitor</label>
                </div>
                <div className="rd-field">
                  <input
                    type="radio"
                    id="price"
                    name="monitor-type"
                    value="price"
                    checked={alert_type === "price"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="price">Price Alert</label>
                </div>
              </div>

              <div className="radios">
                <span className="head">Direction</span>
                <div className="rd-field">
                  <input type="radio" id="in" name="in-out" value="in" />
                  <label htmlFor="in">Recieve</label>
                </div>
                <div className="rd-field">
                  <input type="radio" id="out" name="in-out" value="out" />
                  <label htmlFor="out">Send</label>
                </div>
              </div>

              <div className="filter-buttons">
                <button className="apply-btn" id="filter-aply-btn" onClick={handleapply}>Apply</button>
                <button id="filter-reset-btn" onClick={handleReset}>Reset</button>

              </div> 
            </div>
          )}
        </div>
      </div> {/* filter-main-div end */}

      { showallalerts && <Allalerts/>}
      { showpersonalalerts && <Personalalerts/>}
      { showcommunityalerts && <Communityalerts/>}
      { showpricealerts && <Pricealerts/>}

    </>
  )
}

export default filter
