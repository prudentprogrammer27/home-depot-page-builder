import { useEffect, useState } from "react";
import ConsumerCard from "./ConsumerCard.jsx";
import LocationInfo from "./LocationInfo.jsx";
import ReturnInfo from "./ReturnInfo.jsx";
import ItemFacts from "./ItemFacts.jsx";
import CartInfo from "./CartInfo.jsx";
import Price from "./Price.jsx";
import axios from "axios";
import './sidebar.css'

const Sidebar = ({currentProduct, setCardModal, setItemsInCart}) => {
    const [descriptions, setDescriptions] = useState([]);
    const [localStoreInfo, setLocalStore] = useState({});
    const [onlineStoreInfo, setOnlineStore] = useState({});
    const [priceDollars, setPriceDollars] = useState('0');
    const [priceCents, setPriceCents] = useState('00');
    const [promoInfo, setPromoInfo] = useState({});
    
    useEffect(()=> {
        if(!currentProduct.id) return;
        
        let splitPrice = currentProduct.price.split('.');
        setPriceDollars(splitPrice[0]);
        setPriceCents(splitPrice[1]);

        const fetchData = async() => {
            try {
                let rawDescriptionData = await axios.get(`/api/descriptions/${currentProduct.id}`);
                let descriptions = rawDescriptionData.data;
                setDescriptions(descriptions);

                let rawPromotionData = await axios.get(`/api/promotions/${currentProduct.id}`);
                let promotions = rawPromotionData.data[0];-
                setPromoInfo(promotions);
                
                let rawLocalData = await axios.get(`/api/store_local/${currentProduct.id}`);
                let localStore = rawLocalData.data[0];
                setLocalStore(localStore)
    
                let rawOnlineData = await axios.get(`/api/store_online/${currentProduct.id}`);
                let onlineStore = rawOnlineData.data[0];
                setOnlineStore(onlineStore);

            } catch(e) {
                console.log(e);
            }
        }

        fetchData()

    }, [currentProduct]);

    return (
        <div className="sidebar">
            <Price promoInfo={promoInfo}/>
            <ConsumerCard promoInfo={promoInfo} priceDollars={priceDollars} priceCents={priceCents} setCardModal={setCardModal}/>
            <ItemFacts descriptions={descriptions}/>
            <LocationInfo localStoreInfo={localStoreInfo}/>
            <CartInfo localStoreInfo={localStoreInfo} onlineStoreInfo={onlineStoreInfo} setItemsInCart={setItemsInCart}/>
            <ReturnInfo/>
        </div>
    )
}

export default Sidebar;