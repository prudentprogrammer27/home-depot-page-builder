import { useEffect, useState } from "react";

const ConsumerCard = ({promoInfo, setCardModal}) => {
    const [cardDiscountPrice, setCardDiscount] = useState('0');
    
    const handleCardModal =()=> {
        setCardModal(true);
    }

    useEffect(()=> {
        if(!promoInfo.price_reduced) return;

        let price = promoInfo.price_reduced;
        setCardDiscount((price.split('.')[0] - 25) + "." + price.split('.')[1]);

    }, [promoInfo])

    return (
        <div className="consumer-card-wrapper sb-parent">
            <img className="consumer-card-png" src="https://assets.thdstatic.com/images/v1/payment-credit-card-thd.png"></img>
            <div className="consumer-card info">
                <div>Pay <span>${cardDiscountPrice}</span> after <span>$25 OFF</span> your total qualifying purchase upon opening a new card.
                    <img onClick={handleCardModal} className="consumer-card-png info" src="https://assets.thdstatic.com/images/v1/info.svg" title="Enjoy special savings with your new account"></img>
                </div>
                <a href="https://citiretailservices.citibankonline.com/apply/home-depot-credit-card?app=UNSOL&siteId=PLCN_HOMEDEPOT&sc=30005&cmp=A~P~U~O~3~9~ZZZ0~AI~HD~ZZ_1DT">Apply for a Home Depot Consumer Card</a>
            </div>
        </div>
    )
}

export default ConsumerCard;