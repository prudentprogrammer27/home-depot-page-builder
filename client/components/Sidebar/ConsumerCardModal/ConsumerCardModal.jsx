import "./cardModal.css";
import { useState } from 'react';

const ConsumerCardModal = ({isCardModal, setCardModal}) => {
    let displayVal = (isCardModal) ? 'flex' : 'none';
    const [svgColor, setSvgColor] = useState('');
    const [btnBgColor, setBtnBgColor] = useState('rgb(249 99 2)');
    const [txtDecor, setTxtDecor] = useState('none');

    const handleExitClick =()=> {
        setCardModal(false);
    }

    const handleExitHover =()=> {
        (svgColor == '') ? setSvgColor('rgb(249 99 2)') : setSvgColor('');
    }

    const handleApplyHover =()=> {
        (btnBgColor == 'rgb(249 99 2)') ? setBtnBgColor('rgb(33 33 32)') : setBtnBgColor('rgb(249 99 2)');
        (txtDecor == 'none') ? setTxtDecor('underline') : setTxtDecor('none');
    }

    return (
        <div className="consumerCardTranslucent" style={{display: displayVal}}>
            <div className="consumerCardModal">
                <div className="cardModal-titlebox">
                    <div className="titlebox-title">Enjoy Special Savings with your new Account</div>
                    <button className="titlebox-exit-btn" onClick={handleExitClick} onMouseEnter={handleExitHover} onMouseLeave={handleExitHover} style={{fill: svgColor}}>
                        <svg viewBox="0 0 24 24">
                            <path d="M12 10.409 1.612.02.022 1.612 10.408 12 .021 22.387l1.591 1.591L12 
                            13.591l10.387 10.387 1.591-1.59L13.591 12 23.979 1.612 22.387.022 12 10.408Z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="cardModal-content-wrapper">
                    <div className="cardModal-main-content">
                        <div className="card-img-wrapper">
                            <img src="https://assets.thdstatic.com/images/v1/plcc-credit-card.png"></img>
                        </div>
                        <div className="discount-info">
                            Get <b>$25 off </b> purchases of $25-$299*, <b>$50 off </b> purchases of $300-999*
                            or <b>$100 off</b> purchases of $1000+* on your next qualifying purchase when you open a new car
                        </div>
                        <div className="card-info-dump">
                            <div><b>*</b></div>
                            <div>
                                <b>Offer is for new accounts and subject to credit approval.</b> This offer is redeemable for either a $25 discount
                                on a single-receipt purchase of $25 up to $299, a $50 discount on a single-receipt purchase of $300 up to $999
                                or a $100 discount on a single-receipt purchase of $1,000 or more, excluding tax and delivery fees, within 30
                                days of your account open date at The Home Depot® retail stores or homedepot.com when made with your
                                The Home Depot Consumer Credit Card, The Home Depot Home Improver Card, the Pro Xtra Credit Card, or
                                The Home Depot Commercial Account. Valid in the U.S., U.S.V.I., Puerto Rico and Guam. Offer does not apply to
                                prior purchases, The Home Depot Gift Cards or Certificates, third party gift cards, installation products or
                                services purchased in home, Tool Rental or to Traeger®, Weber®, Bona®, Simplehuman®, Dacor®, Viking®, Fisher
                                & Paykel®, Sharp InsightTM, Delonghi®, Buckhaven, Lynx®, AlfrescoTM, OCI, Marvel®, Bertazzoni, Aga, Vent-A-Hood®,
                                Samsung Chef Collection, Bosch Benchmark® Series, Liebherr, Zephyr, Miele, Signature Kitchen Suite, Jenn-Air®,
                                Thermador®, Jeld-Wen® Door Systems, Monogram products and trade styles. Additional exclusions may apply which will
                                be reflected at checkout. May not be combined with other discounts; ask an Associate for details.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consumerCard-apply-now" onMouseEnter={handleApplyHover} onMouseLeave={handleApplyHover}>
                    <a href="https://citiretailservices.citibankonline.com/apply/home-depot-credit-card?app=UNSOL&siteId=PLCN_HOMEDEPOT&sc=30005&cmp=A~P~U~O~3~9~ZZZ0~AI~HD~ZZ_1DT"
                     style={{backgroundColor: btnBgColor, textDecoration: txtDecor}}><span>Apply Now</span></a>
                </div>
            </div>
        </div>
    )
}

export default ConsumerCardModal;