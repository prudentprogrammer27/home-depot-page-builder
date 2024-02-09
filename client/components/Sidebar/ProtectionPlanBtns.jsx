import { useState } from "react";
import ProtectionPlanBtn from "./ProtectionPlanBtn.jsx";

const ProtectionPlanBtns = () => {
    const [currOpt, setCurrOpt] = useState('2 year / $30.00');

    return (
        <div className="protection-plan-options">
            <ProtectionPlanBtn title={'2 year / $30.00'} currOpt={currOpt} setCurrOpt={setCurrOpt}/>
            <ProtectionPlanBtn title={'No Thanks'} currOpt={currOpt} setCurrOpt={setCurrOpt}/>
        </div>
    )
}

export default ProtectionPlanBtns;