import ProtectionPlanBtns from "./ProtectionPlanBtns.jsx";

const ProtectionPlan = () => {
    return (
        <div className="protection-plan sb-parent">
                <div className="protection-plan-shield-wrapper">
                    <svg viewBox="0 0 24 24" className="protection-plan-shield-icon">
                        <path d="m11.471.32.01-.005.51-.266.514.258.041.02a46.943 46.943 0 0 0 .589.29c.392.19.93.449 1.52.72 1.211.56 2.533 1.127
                    3.267 1.328.88.24 2.12.42 3.182.541a47.597 47.597 0 0 0 1.812.17h.026l.008.001 1.05.07v1.054L22.875 4.5H24v.048c0 .03 0 .071-.002.125a33.863
                    33.863 0 0 1-.11 2.058c-.11 1.315-.332 3.08-.782 4.843l-.279 1.09-2.18-.557.279-1.09c.409-1.599.616-3.231.72-4.474.032-.38.055-.721.07-1.011a49.166
                    49.166 0 0 1-.865-.09c-1.078-.122-2.463-.317-3.523-.607-.944-.258-2.434-.909-3.616-1.454l-.587-.274v12.518h-2.25V3.127l-.464.22c-1.155.54-2.64 1.188-3.74
                    1.488-.904.247-2.295.443-3.398.574a67.67 67.67 0 0 1-.975.108 27.316 27.316 0 0 0 1.12 5.957c1.175 3.791 3.467 7.925 7.925 9.965l1.023.469-.936 
                    2.046-1.023-.469c-5.292-2.422-7.875-7.269-9.138-11.344A29.563 29.563 0 0 1 .02 5.145 17.694 17.694 0 0 1 0 4.552V4.5h1.125H0V3.466l1.04-.088.028-.002.115-.01a59.983 59.983
                    0 0 0 1.824-.191c1.115-.133 2.35-.313 3.071-.51.893-.244 2.22-.815 3.38-1.357a61.605 61.605 0 0 0 1.984-.974l.03-.015Z">
                        </path>
                        <path d="m23.977 16.245-7.03 7.652-4.886-4.432 1.511-1.667 3.23 2.93 5.518-6.005 1.657 1.522Z"></path>
                    </svg>
                </div>
                <div className="protection-plan-info-all">
                    <div className="protection-plan-info-title">Protect This Item</div>
                    <div className="protection-plan-info-text">Select a Home Depot Protection Plan by Allstate for:</div>
                    <ProtectionPlanBtns/>
                    <button className="protection-plan-WTE">
                        <span>What to Expect</span>
                        <svg>
                            <path d="M13.125 7.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25
                         0Zm0 2.625V18h-2.25V9.75h2.25Z M12 0C5.373 0 0 5.373 0 12s5.373 12 12
                          12 12-5.373 12-12S18.627 0 12 0ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75
                           4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z"
                            ></path>
                        </svg>
                    </button>
                </div>
        </div>
    )
}

export default ProtectionPlan;