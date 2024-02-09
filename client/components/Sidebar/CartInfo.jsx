import FulfillmentTiles from "./FulfillmentTiles.jsx";
import AddToCart from "./AddToCart.jsx";
import ProtectionPlan from "./ProtectionPlan.jsx";

const CartInfo = ({localStoreInfo, onlineStoreInfo}) => {
    return (
        <div className="cart-info-wrapper">
            <FulfillmentTiles localStoreInfo={localStoreInfo} onlineStoreInfo={onlineStoreInfo}/>
            <div className="cart-info-truck sb-parent">
                <div>
                    <div className="cf-truck-icon"></div>
                    <span className="cart-info-truck-msg"><span>Get it as soon as today.</span> Schedule your delivery in checkout.</span>
                </div>
            </div>
            <ProtectionPlan/>
            <AddToCart/>
        </div>
    )
}

export default CartInfo;