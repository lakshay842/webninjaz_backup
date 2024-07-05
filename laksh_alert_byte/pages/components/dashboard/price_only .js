import React, { useState,useEffect,useRef,useContext } from "react";
import { useRouter } from 'next/router';
import { useMoralis, useMoralisCloudFunction  } from "react-moralis";
import Link from 'next/link';
import StatusContext from '@/store/status-context';
import {BiSolidRightArrow , BiSolidLeftArrow} from 'react-icons/bi';


const Pricealerts = () => {
    const {
    logout,
    user,
    setUserData,
    refetchUserData,
    } = useMoralis();
    const router = useRouter();
    const [error, success, setSuccess, setError] = useContext(StatusContext);
    const { Moralis, isAuthenticated } = useMoralis();

    const [categorizedDataArray, setCategorizedDataArray] = useState([]);



    const getMarketCapAddresses = async () => {
        
    try {
        const marketCapAddresses = await Moralis.Cloud.run("getMarketCapAddresses");
        const tempArray = [];

        if(marketCapAddresses){
        // Categorize elements based on cryptoslug
        marketCapAddresses.forEach((parseObject) => {
            const attributes = parseObject.attributes;
            const cryptoslug = attributes.cryptoslug;

            // Find the index for the cryptoslug in the temp array
            const index = tempArray.findIndex(
            (item) =>
                item && item[0] && item[0].attributes.cryptoslug === cryptoslug
            );

            if (index === -1) {
            tempArray.push([parseObject]);
            } else {
            tempArray[index].push(parseObject);
            }
        });
        setCategorizedDataArray(tempArray);
        }else {
        window.alert(JSON.stringify("No watched addresses found"));
        }
    } catch (error) {
        console.log("ERROR-", error);
    }

    };

    useEffect(() => {
    if (user) getMarketCapAddresses();
    }, [user]);


  return (
    <>
    <div className="main-cards-div">
        <div className="row g-5">
            {categorizedDataArray .map((category, index) => (
                <div className="col-md-4" key={index}>
                <div className="card-content-div preview-card price-card ">
                    <div className="status-div">
                    <div className="status-circle"></div>
                    <span className="status-txt">Active</span>
                    </div>
                    <h3 className="wallet-name">My_Wallet</h3>
                    <div className="grey-fill-div">
                    <div className="bchain-value">
                        <div className="bchain-img">
                            {
                            category[0].attributes.cryptoslug.includes("ethereum") ? <img src="/Icons/erc20.svg" alt="" /> :
                            category[0].attributes.cryptoslug.includes("bsc") ? <img src="/Icons/binance.svg" alt="" /> :
                            category[0].attributes.cryptoslug.includes("ava") ? <img src="/Icons/avalanche.svg" alt="" /> :
                            category[0].attributes.cryptoslug.includes("matic") ? <img src="/Icons/polygon.svg" alt="" /> :
                            category[0].attributes.cryptoslug
                            }
                        </div>
                        <div className="sub-head">{category[0].attributes.cryptoslug}</div>
                    </div>
                    <div className="main-params-value-div">
                        {category.map((item, subIndex) => (
                        <div className="param" key={subIndex}>
                            <div className="param-name">{item.attributes.condition} :</div>
                            <div className="param-value">${item.attributes.user_value}</div>
                        </div>
                        ))}
                    </div>

                    </div>
                    <div className="alert-method">
                    <img src="/Icons/notifications.svg" alt="" />
                        <span>{category[0].attributes.alertMethod}</span>
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

export default Pricealerts
