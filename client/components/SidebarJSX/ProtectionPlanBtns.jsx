import { useState } from "react";
import ProtectionPlanBtn from "./ProtectionPlanBtn.jsx";

const ProtectionPlanBtns = () => {
    const [currOpt, setCurrOpt] = useState('Option 1');

    return (
        <div className="protection-plan-options">
            <ProtectionPlanBtn title={'Option 1'} currOpt={currOpt} setCurrOpt={setCurrOpt}/>
            <ProtectionPlanBtn title={'Option 2'} currOpt={currOpt} setCurrOpt={setCurrOpt}/>
        </div>
    )
}

export default ProtectionPlanBtns;