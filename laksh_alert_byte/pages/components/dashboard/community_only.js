import React, { useState,useEffect,useRef,useContext } from "react";
import { useRouter } from 'next/router';
import { useMoralis, useMoralisCloudFunction  } from "react-moralis";
import Link from 'next/link';
import StatusContext from '@/store/status-context';
import {BiSolidRightArrow , BiSolidLeftArrow} from 'react-icons/bi';


const Communityalerts = () => {
    const {
    logout,
    user,
    setUserData,
    refetchUserData,
    } = useMoralis();
    const router = useRouter();
    const [error, success, setSuccess, setError] = useContext(StatusContext);
    const { Moralis, isAuthenticated } = useMoralis();


    const [watchedAddresses, setWatchedAddresses] = useState([]);
    const [communityAddresses, setCommunityAddresses] = useState([]);
    const [categorizedDataArray, setCategorizedDataArray] = useState([]);


    
    // const getCommunityAddresses = async () => {
    // try {
    //     const _watched = await Moralis.Cloud.run("getCommunityAddresses");
    //     setCommunityAddresses("");
    //     // user feedback
    //     if (_watched) {
    //     _watched.map((item) => {
    //         console.log(item);
    //         setCommunityAddresses((communityAddresses) => [
    //         ...communityAddresses,
    //         item,
    //         ]);
    //     });
    //     } else {
    //     window.alert(JSON.stringify("No watched addresses found"));
    //     }
    //     return;
    // } catch (error) {
    //     console.log("ERROR-", error);
    // }
    // };
    const getCommunityAddresses = async () => {
        try {
            const _watched = await Moralis.Cloud.run("getCommunityAddresses");

            // Create an empty object to store categorized data
            const categorizedData = {};

            // Loop through the _watched data and categorize by admin_address
            _watched.forEach(item => {
            const adminAddress = item.attributes.admin_address;
            
            if (!categorizedData[adminAddress]) {
                categorizedData[adminAddress] = [];
            }
            
            categorizedData[adminAddress].push(item);
            });

            // Convert the categorized data object into an array of arrays
            const categorizedArray = Object.values(categorizedData);

            console.log(categorizedArray);

            
        } catch (error) {
            console.log("ERROR-", error);
        }
        };



    useEffect(() => {
    if (user) getCommunityAddresses();
    }, [user]);

    const hello = ()=>{
        document.querySelector('.toshow-1').classList.toggle('onbtnclickDs');
        document.querySelector('.options-btn').classList.toggle('rotate-icon');
      }

  return (
    <>
    <div className="main-cards-div">
        <div className="row g-5">
            <div className="col-md-4">

                <div className="card-content-div preview-card community-card">

                <div className="options-btn" onClick={hello}>
                    <img src="/Icons/card-ellipses.svg" alt="" />
                </div>
                <div className="toshow-1">
                    <div className="toshow ">
                    <button> <img src="/Icons/edit.svg" alt="" /> Edit </button>
                    <button> <img src="/Icons/pause.svg" alt="" /> Pause </button>
                    <button> <img src="/Icons/duplicate.svg" alt="" /> Duplicate </button>
                    <button> <img src="/Icons/delete.svg" alt="" /> delete </button>
                    </div>
                </div>
  
                <div className="status-div">
                    <div className="status-circle"></div>
                    <span className="status-txt">Active</span>
                </div>
                <h3 className="wallet-name">My_Wallet</h3>
                <div className="bchain-value">
                    <div className="bchain-img">
                        <img src="/Icons/erc20.svg" alt="" />
                    </div>
                    <div className="sub-head">Ethereum</div>
                </div>
                <span className="wallet-adress">0X85...3445</span>
                <div className="alert-method">
                    <img src="/Icons/notifications.svg" alt="" />
                    <span>Telegram</span>
                </div>
                <div className="input-div child-wallets">
                    <div className="child-wallet-cnt">
                    <img src="/Icons/community_monito_total_wallets.svg" alt="" />
                    <span>24</span>
                    </div>
                    <div className="child-wallet-cnt">
                    <img src="/Icons/community_monitor_total_budget.svg" alt="" />
                    <span>$824</span>
                    </div>
                </div>
                <div className="main-wallet-cnt-div">
                    <div className="grey-fill-div">
                    <div className="hb-stats">
                        <div className="hbs">
                        <span>0Xe9...5522</span>
                        </div>
                        <div className="hbs">
                        <span>$50</span>
                        </div>
                        <div className="hbs">
                        <span>28.06.2023</span>
                        </div>
                    </div>
                    <div className="note-div">
                        <div className="note-first">Note:</div>
                        <div className="note-info">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. </div>
                    </div>
                    </div>
                    <div className="slide-btn-div">
                    <span className="slide-btn"> <BiSolidLeftArrow/> </span>
                    <span className="slide-btn"> <BiSolidRightArrow/> </span>
                    </div>
                </div>
                <div className="notification-count">3 Notification Sent</div>
                </div>{/* card-content-div end */}
            </div>
        
        </div>
    </div>
    </>
  )
}

export default Communityalerts
