import React, { useState,useEffect,useRef,useContext } from "react";
import { useRouter } from 'next/router';
import { useMoralis, useMoralisCloudFunction  } from "react-moralis";
import Link from 'next/link';
import StatusContext from '@/store/status-context';
import Personalform  from "./monitor_forms/personalform";
import Communityform from "./monitor_forms/communityform"
import Priceform from "./monitor_forms/priceform"
import Filter from "./dashboard_filter";
import personalform from "./monitor_forms/personalform";




const Firsttab = ({networks, showcards, setShowcards,  showalertfor, setShowalertfor, showpersonalform , setShowpersonalform,showcommunityform,setShowcommunityform,showpriceform,setShowpriceform,resetAllstate,alert_type,setAlert_type} ) => {
  const {
    logout,
    user,
    setUserData,
    refetchUserData,
    } = useMoralis();
  const router = useRouter();
  const [error, success, setSuccess, setError] = useContext(StatusContext);
  const { Moralis, isAuthenticated } = useMoralis();



  const [paramdata , setParamdata] = useState("");


  
  return (
    <>
    <div className="main-dash-tab">
     
      {showcards && (
        <>
         <Filter setShowalertfor={setShowalertfor} setShowcards ={setShowcards} resetAllstate={resetAllstate} alert_type={alert_type} setAlert_type={setAlert_type} />
        </>
      )}

       {/* showalertfor */}
      { showalertfor && (
        <>
        <div className="title-btn-div"> 
          <span className="title">Add Alert For</span>
        </div>
        <div className="addalert-btn-boxes">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="card-content-div">
                <h5 className="alert-title">Personal Monitor</h5>
                <p>Personal Monitor enables you: to track all transactions in your wallet and other wallets 3 through notifications. </p>
                <div className="title-btn-div ">
                  <button className="btn-fill" onClick={()=>{setShowalertfor(false); setShowpersonalform(true)} } >+ Add Alert</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-content-div">
                <h5 className="alert-title">Community Monitor</h5>
                <p>Community Monitor enables you to track transactions between a single parent wallet, that serves as the central account, and multiple child wallets, that receive crypto assets from the parent wallet.</p>
                <div className="title-btn-div ">
                  <button className="btn-fill" onClick={()=>{setShowalertfor(false); setShowcommunityform(true) }} >+ Add Alert</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-content-div">
                <h5 className="alert-title">Price Alert</h5>
                <p> Price Alert enables you to search info about any crypto, set specific thresholds for its market movements and receive timely notifications if any threshold is crossed.</p>
                <div className="title-btn-div ">
                  <button className="btn-fill" onClick={()=>{setShowalertfor(false); setShowpriceform(true) }}>+ Add Alert</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
      
      { showpersonalform && (
        <>
         <Personalform networks={networks} resetAllstate={resetAllstate}   />
        </>
      )}
      { showcommunityform && (
        <>
         <Communityform networks={networks} resetAllstate={resetAllstate} />
        </>
      )}
      { showpriceform && (
        <>
         <Priceform paramdata ={paramdata} setParamdata = {setParamdata} resetAllstate={resetAllstate} />
        </>
      )}

    </div>
    </>
    );
  };

  export default Firsttab;