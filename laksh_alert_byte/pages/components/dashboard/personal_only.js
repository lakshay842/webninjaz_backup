import React, { useState,useEffect,useRef,useContext } from "react";
import { useRouter } from 'next/router';
import { useMoralis, useMoralisCloudFunction  } from "react-moralis";
import Link from 'next/link';
import StatusContext from '@/store/status-context';
import {BiSolidRightArrow , BiSolidLeftArrow} from 'react-icons/bi';


const Personalalerts = () => {
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

    const getWatchedAddresses = async () => {
    try {
        const _watched = await Moralis.Cloud.run("getWatchedAddresses");
        setWatchedAddresses("");
        // user feedback
        if (_watched) {
        _watched.map((item) => {
            // console.log(item);
            setWatchedAddresses((watchedAddresses) => [
            ...watchedAddresses,
            item,
            ]);
        });
        } else {
        window.alert(JSON.stringify("No watched addresses found"));
        }
        return;
    } catch (error) {
        console.log("ERROR-", error);
    }
    };

    useEffect(() => {
    if (user) getWatchedAddresses();
    }, [user]);
   
  return (
    <>
    <div className="main-cards-div">
        <div className="row g-5">
            {watchedAddresses.map((item, index) => (
                <div className="col-md-4">
                <div className="card-content-div preview-card ">
                    <div className="status-div">
                    <div className="status-circle"></div>
                    <span className="status-txt">Active</span>
                    </div>
                    <h3 className="wallet-name">{item.attributes.name}</h3>
                    <span className="wallet-adress"> 
                    {item.attributes.address.substring(0,4)+"..."+item.attributes.address.substring(38,42)}
                    </span>
                    <div className="bchain-value-div">
                    <div className="bchain-value">
                        <div className="bchain-img">
                        {item.className === "WatchedPolygon"
                        ? ( <img src="/Icons/polygon.svg" alt="" />)
                        : item.className === "WatchedBsc"
                        ? (<img src="/Icons/binance.svg" alt="" />)
                        : item.className === "WatchedEth"
                        ? (<img src="/Icons/erc20.svg" alt="" />)
                        : item.className === "WatchedAvax"
                        ? (<img src="/Icons/avalanche.svg" alt="" />)
                        : item.className === "WatchedFtm"
                        ? "FTM"
                        : null}
                        </div>
                        <div className="sub-head">
                        {item.className === "WatchedPolygon"
                        ? "Polygon"
                        : item.className === "WatchedBsc"
                        ? "BSC"
                        : item.className === "WatchedEth"
                        ? "Ethereum"
                        : item.className === "WatchedAvax"
                        ? "Avalanche"
                        : item.className === "WatchedFtm"
                        ? "FTM"
                        : null}
                        </div>
                    </div>
                    </div>
                    <div className="main-value-direction-div">
                    <div className="sub-head">Personal Monitor for</div>
                    <div className="value-dir">
                    <div className="value">&lt;${item.attributes.threshold}</div>
                        <div className="value">{item.attributes.conditions}</div>
                    </div>
                    </div>
                    <div className="notification-count">3 Notification Sent</div>

                </div>{/* card-content-div end */}
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Personalalerts
