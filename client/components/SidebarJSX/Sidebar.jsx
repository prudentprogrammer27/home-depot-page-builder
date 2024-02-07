import { useEffect } from "react";
import CartInfo from "./CartInfo.jsx";
import ConsumerCard from "./ConsumerCard.jsx";
import ItemFacts from "./ItemFacts.jsx";
import LocationInfo from "./LocationInfo.jsx";
import Price from "./Price.jsx";
import ReturnInfo from "./ReturnInfo.jsx";
import './sidebar.css'

const Sidebar = ({currentProduct}) => {

    return (
        <div className="sidebar">
            <Price currentProduct={currentProduct}/>
            <ConsumerCard currentProduct={currentProduct}/>
            <ItemFacts/>
            <LocationInfo/>
            <CartInfo/>
            <ReturnInfo/>
        </div>
    )
}

export default Sidebar;