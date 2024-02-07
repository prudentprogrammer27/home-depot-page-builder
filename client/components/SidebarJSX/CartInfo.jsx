import FulfillmentTiles from "./FulfillmentTiles.jsx";
import AddToCart from "./AddToCart.jsx";
import ProtectionPlan from "./ProtectionPlan.jsx";

const CartInfo =()=> {
    return (
        <div className="cart-info-wrapper">
            <FulfillmentTiles/>
            <div className="cart-info-truck sb-parent">
                <div>
                    <div className="cf-truck-icon"></div>
                    <span className="cart-info-truck-msg"><b>Get it as soon as today.</b> Schedule your delivery in checkout.</span>
                </div>
            </div>
            <ProtectionPlan/>
            <AddToCart/>
        </div>
    )
}

export default CartInfo;