import React from "react";
import { useGlobalContext } from "../Context";

const ToggleBtn = () => {
    const { bankToggle, powerToggle, handlePower, handleToggle } =
        useGlobalContext();
    return (
        <div className="btn-container">
            <div className="toggle" id="power-toggle">
                <div>Power:</div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={powerToggle}
                        onChange={handlePower}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="toggle" id="bank-toggle">
                <div>Bank:</div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={bankToggle}
                        onChange={handleToggle}
                        disabled={!powerToggle}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default ToggleBtn;
