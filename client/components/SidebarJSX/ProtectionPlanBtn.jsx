import { useState } from "react";

const ProtectionPlanBtn = ({title, currOpt, setCurrOpt}) => {
    let fillColor = "white";
    let border = '1px solid black';
    let bgColor = '';

    if(currOpt == title) {
        fillColor= "#f96302";
        border = '';
        bgColor = 'rgb(253 216 192)'
    } else {
        fillColor = "white";
        border = '1px solid black';
        bgColor = ''
    }
        

    const handleOptSelect = () => {
        setCurrOpt(title);
    }
    console.log
    return (
        <label onClick={handleOptSelect} className="protection-plan-options-btn">
            <span className="protection-plan-btn-wrap" style={{backgroundColor: bgColor}}>
                <input type="radio"></input>
                <span>
                    <svg viewBox="0 0 24 24" fill={fillColor} style={{border: border, borderRadius: 999}} className="protection-plan-radio-svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373
                         12-12S18.627 0 12 0Zm0 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0
                         1 0-7.2Z">
                        </path>
                    </svg>
                </span>
            </span>
            <span className="prot-option-title"><p>{title}</p></span>
        </label>
    )
}

export default ProtectionPlanBtn;