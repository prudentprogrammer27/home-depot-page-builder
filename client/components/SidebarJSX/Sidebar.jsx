import CartInfo from "./CartInfo.jsx";
import ConsumerCard from "./ConsumerCard.jsx";
import ItemFacts from "./ItemFacts.jsx";
import LocationInfo from "./LocationInfo.jsx";
import Price from "./Price.jsx";
import ReturnInfo from "./ReturnInfo.jsx";


const Sidebar = (/*props*/) => {
    return (
        <div className="sidebar">
            <Price/>
            <ConsumerCard/>
            <ItemFacts/>
            <LocationInfo/>
            <CartInfo/>
            <ReturnInfo/>
        </div>
    )
}

export default Sidebar;