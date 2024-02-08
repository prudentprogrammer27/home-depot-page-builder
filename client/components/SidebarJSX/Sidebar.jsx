import { useEffect, useState } from "react";
import CartInfo from "./CartInfo.jsx";
import ConsumerCard from "./ConsumerCard.jsx";
import ItemFacts from "./ItemFacts.jsx";
import LocationInfo from "./LocationInfo.jsx";
import Price from "./Price.jsx";
import ReturnInfo from "./ReturnInfo.jsx";
import './sidebar.css'
import axios from "axios";

const Sidebar = ({currentProduct}) => {
    const [descriptions, setDescriptions] = useState([]);
    // there is an issue where the initial axios request in app jsx may fail to complete, this would set the price to 0.00
    // as a currentProduct never gets assigned --------------------------------------------------------------------//

    const [priceDollars, setPriceDollars] = useState('179');
    const [priceCents, setPriceCents] = useState('00');
    
    useEffect(()=> {
        if(currentProduct.length !== 0) {
            let splitPrice = currentProduct.price.split('.');
            setPriceDollars(splitPrice[0]);
            setPriceCents(splitPrice[1]);
        }

        async function fetchData() {
            let rawDescriptionData = await axios.get('/api/descriptions/1');
            let descriptions = rawDescriptionData.data;
            setDescriptions(descriptions);
        }

        fetchData()

    }, [])

    //-----------------------------------------------------------------------------------------------------------//

    return (
        <div className="sidebar">
            <Price priceDollars={priceDollars} priceCents={priceCents}/>
            <ConsumerCard priceDollars={priceDollars} priceCents={priceCents}/>
            <ItemFacts descriptions={descriptions}/>
            <LocationInfo/>
            <CartInfo/>
            <ReturnInfo/>
        </div>
    )
}

export default Sidebar;