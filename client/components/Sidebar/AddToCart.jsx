import { useState } from "react";

const AddToCart = ({setItemsInCart}) => {
    const [bgColor, setBgColor] = useState('#f96302')
    const [value, setValue] = useState(1);
    const handleHover =()=> {
        (bgColor === '#f96302') ? setBgColor('rgb(33 33 32)') : setBgColor('#f96302');
    }

    const handleUserInput = (e) => {
        setValue(e.target.value)
    }

    const handleCartNumber = (e) => {
        if(e.target.id == 'a2c-decrement') {
            if(value != 0) setValue(value - 1);
        } else {
            setValue(value + 1);
        }
    }

    const handleAddToCard = () => {
        setItemsInCart(value);
    }

    return (
        <div className="add-to-cart-wrapper sb-parent">
            <div className="add-to-cart-options">
                <div className="a2c-quantity-wrapper">
                    <button id='a2c-decrement' onClick={handleCartNumber} readOnly={true} className="a2c-quantity-btn">-</button>
                    <input onChange={handleUserInput} className="a2c-quantity-btn" inputMode="numeric" min={0} max={3} maxLength={4} pattern="[0-9]*" value={value}></input>
                    <button id='a2c-increment' onClick={handleCartNumber} readOnly={true} className="a2c-quantity-btn">+</button>
                </div>
                <div onClick={handleAddToCard} onMouseEnter={handleHover} onMouseLeave={handleHover} className="a2c-button-wrapper" style={{backgroundColor: bgColor}}>
                    <button className="a2c-btn">
                        <span className="a2c-cart-img">
                            <svg viewBox='0 0 24 24' focusable='false'>
                                <path d="M0 2.25h2.25V16.5H.75v2.25h3.266A3.001 3.001 0 1 0 9 
                            21c0-.896-.393-1.7-1.016-2.25h9.032A3.001 3.001 0 1 0 22 
                            21c0-.896-.393-1.7-1.016-2.25H24V16.5H4.5V1.125C4.5.504 3.996 0 3.375 0H0v2.25Z">
                                </path>
                            </svg>
                        </span>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;